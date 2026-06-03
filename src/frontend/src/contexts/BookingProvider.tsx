import {
  BookingContext,
  type BookingState,
  defaultAddOns,
  defaultBookingState,
} from "@/hooks/useBackend";
import type React from "react";
import { useState } from "react";

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookingState, setBookingState] =
    useState<BookingState>(defaultBookingState);

  const updateBookingState = (partial: Partial<BookingState>) => {
    setBookingState((prev) => ({ ...prev, ...partial }));
  };

  const resetBooking = () => setBookingState(defaultBookingState);

  return (
    <BookingContext.Provider
      value={{ bookingState, updateBookingState, resetBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}
