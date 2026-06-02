import { createActor } from "@/backend";
import type { BookingInquiry } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useListTreks() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["treks"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.listTreks();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTrek(id: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["trek", id],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getTrek(id);
      } catch {
        return null;
      }
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useListBlogPosts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.listBlogPosts();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useListBatches(trekId: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["batches", trekId],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.listBatches(trekId);
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching && !!trekId,
  });
}

export function useListGearItems() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["gearItems"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.listGearItems();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useListReviews(trekId: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["reviews", trekId],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.listReviews(trekId);
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching && !!trekId,
  });
}

export function useSubmitBooking() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (inquiry: BookingInquiry) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitBookingInquiry(inquiry);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useCreateBooking() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      booking: Parameters<NonNullable<typeof actor>["createBooking"]>[0],
    ) => {
      if (!actor) throw new Error("Backend not available");
      return actor.createBooking(booking);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}
