import { createActor } from "@/backend";
import type { BookingInquiry } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";

// --- Booking Types ---

export interface BatchSlot {
  id: string;
  trekId: string;
  startDate: string;
  endDate: string;
  seatsTotal: number;
  seatsAvailable: number;
  pricePerPerson: number;
  label?: string;
}

export interface ParticipantData {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  mobile: string;
  email: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  medicalConditions: string;
  govtIdType: string;
  govtIdNumber: string;
}

export interface AddOnSelection {
  porter: boolean;
  mule: boolean;
  travelInsurance: boolean;
  gearSleepingBag: boolean;
  gearTent: boolean;
  gearBoots: boolean;
  porterDays: number;
  muleDays: number;
}

export interface BookingState {
  trekSlug: string;
  trekName: string;
  selectedBatch: BatchSlot | null;
  participants: ParticipantData[];
  addOns: AddOnSelection;
  paymentType: "full" | "advance";
  promoCode: string;
  discountAmount: number;
  totalAmount: number;
  bookingId: string;
}

export const defaultAddOns: AddOnSelection = {
  porter: false,
  mule: false,
  travelInsurance: false,
  gearSleepingBag: false,
  gearTent: false,
  gearBoots: false,
  porterDays: 0,
  muleDays: 0,
};

export const defaultBookingState: BookingState = {
  trekSlug: "",
  trekName: "",
  selectedBatch: null,
  participants: [],
  addOns: defaultAddOns,
  paymentType: "full",
  promoCode: "",
  discountAmount: 0,
  totalAmount: 0,
  bookingId: "",
};

// --- Booking Context ---

export interface BookingContextValue {
  bookingState: BookingState;
  updateBookingState: (partial: Partial<BookingState>) => void;
  resetBooking: () => void;
}

export const BookingContext = createContext<BookingContextValue>({
  bookingState: defaultBookingState,
  updateBookingState: () => {},
  resetBooking: () => {},
});

export function useBookingStore() {
  return useContext(BookingContext);
}

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
export function useGetBatchAvailability(trekSlug: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["batchAvailability", trekSlug],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.listBatches(trekSlug);
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching && !!trekSlug,
    staleTime: 1000 * 60 * 2,
  });
}

export function useGetUserBookings(_email: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["userBookings", _email],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.listUserBookings(_email);
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching && !!_email,
  });
}
export function useGetAllApprovedPhotos() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["approvedPhotos"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getAllApprovedPhotos();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 2,
  });
}

export function useGetApprovedPhotosByTrek(trekSlug: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["approvedPhotosByTrek", trekSlug],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getApprovedPhotos(trekSlug);
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching && !!trekSlug,
    staleTime: 1000 * 60 * 2,
  });
}

export function useGetSeatAvailability(trekSlug: string, batchDate: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["seatAvailability", trekSlug, batchDate],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getSeatAvailability(trekSlug, batchDate);
      } catch {
        return null;
      }
    },
    enabled: !!actor && !isFetching && !!trekSlug && !!batchDate,
    refetchInterval: 30000,
    staleTime: 20000,
  });
}

export function useJoinWaitlist() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      input: Parameters<NonNullable<typeof actor>["joinWaitlist"]>[0],
    ) => {
      if (!actor) throw new Error("Backend not available");
      return actor.joinWaitlist(input);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["seatAvailability", variables.trekSlug, variables.batchDate],
      });
    },
  });
}

export function useSubmitTrekPhoto() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      input: Parameters<NonNullable<typeof actor>["submitTrekPhoto"]>[0],
    ) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitTrekPhoto(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["approvedPhotos"] });
      queryClient.invalidateQueries({ queryKey: ["approvedPhotosByTrek"] });
    },
  });
}
