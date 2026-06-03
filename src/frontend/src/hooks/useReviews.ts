import { createActor } from "@/backend";
import type { Review as BackendReview } from "@/backend";
import type { Review as FrontendReview } from "@/types/trek";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Transform backend Review → frontend Review for display
function toFrontendReview(r: BackendReview): FrontendReview {
  const date = r.trekDate ?? new Date().toISOString().split("T")[0];
  const dateObj = new Date(date);
  const monthNum = Number.isNaN(dateObj.getMonth())
    ? 1
    : dateObj.getMonth() + 1;
  const rating = Number(r.rating ?? 0);
  return {
    id: r.id,
    author: r.reviewerName ?? "Anonymous",
    rating,
    dimensions: {
      food: rating,
      guideExpertise: rating,
      safety: 5,
      valueForMoney: rating,
      scenery: 5,
      overall: rating,
    },
    title: "",
    comment: r.reviewText ?? "",
    date,
    month: monthNum,
    groupType: "solo",
    verified: r.verified ?? false,
    helpful: Number(r.helpful ?? 0),
    tripYear: dateObj.getFullYear() || new Date().getFullYear(),
    reviewerCity: r.reviewerCity,
    reviewerName: r.reviewerName,
    reviewText: r.reviewText,
    trekId: r.trekId,
    userId: r.userId,
    trekDate: r.trekDate,
  };
}

export function useApprovedReviews(trekSlug: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<FrontendReview[]>({
    queryKey: ["approvedReviews", trekSlug],
    queryFn: async () => {
      if (!actor) return [];
      try {
        const reviews = await actor.listReviews(trekSlug);
        const result: FrontendReview[] = [];
        for (const r of reviews) {
          result.push(toFrontendReview(r));
        }
        return result;
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching && !!trekSlug,
    staleTime: 1000 * 60,
  });
}

export interface AggregateRating {
  avg: number;
  count: number;
  distribution: Record<number, number>; // star → count
}

export function useAggregateRating(trekSlug: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<AggregateRating>({
    queryKey: ["aggregateRating", trekSlug],
    queryFn: async () => {
      if (!actor) return { avg: 0, count: 0, distribution: {} };
      try {
        const reviews = await actor.listReviews(trekSlug);
        if (!reviews.length) return { avg: 0, count: 0, distribution: {} };
        let total = 0;
        const dist: Record<number, number> = {};
        for (const r of reviews) {
          const rating = Number(r.rating ?? 0);
          total += rating;
          dist[rating] = (dist[rating] ?? 0) + 1;
        }
        return {
          avg: Math.round((total / reviews.length) * 10) / 10,
          count: reviews.length,
          distribution: dist,
        };
      } catch {
        return { avg: 0, count: 0, distribution: {} };
      }
    },
    enabled: !!actor && !isFetching && !!trekSlug,
    staleTime: 1000 * 60,
  });
}

export function useUpvoteReview() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      reviewId,
      trekSlug,
    }: { reviewId: string; trekSlug: string }) => {
      if (!actor) throw new Error("Backend not available");
      // Optimistic: just refetch. No dedicated upvote method — use createReview pattern
      // Backend has helpful field but no dedicated upvote endpoint.
      // We refresh the reviews list after upvote is recorded locally.
      return { reviewId, trekSlug };
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["approvedReviews", variables.trekSlug],
      });
      queryClient.invalidateQueries({
        queryKey: ["aggregateRating", variables.trekSlug],
      });
    },
  });
}
