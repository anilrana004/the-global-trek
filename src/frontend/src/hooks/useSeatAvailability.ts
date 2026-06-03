import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useEffect, useRef, useState } from "react";

export interface SeatAvailabilityResult {
  available: number;
  total: number;
  isLow: boolean;
  isFull: boolean;
  recentViewers: number;
  isLoading: boolean;
}

export function useSeatAvailability(
  trekSlug: string,
  batchDate: string,
): SeatAvailabilityResult {
  const { actor, isFetching } = useActor(createActor);
  const [available, setAvailable] = useState(15);
  const [total, setTotal] = useState(15);
  const [recentViewers, setRecentViewers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const pageViewRecorded = useRef(false);
  const seatIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const viewerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!actor || isFetching) return;

    const fetchSeats = async () => {
      if (!actor || !trekSlug || !batchDate) return;
      try {
        const result = await actor.getSeatAvailability(trekSlug, batchDate);
        const avail = Number(result.availableSeats);
        const tot = Number(result.totalSeats);
        setAvailable(avail);
        setTotal(tot > 0 ? tot : 15);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };

    const fetchViewers = async () => {
      if (!actor || !trekSlug) return;
      try {
        const count = await actor.getRecentViewers(trekSlug);
        setRecentViewers(Number(count));
      } catch {
        // ignore
      }
    };

    // Record page view once per mount
    if (!pageViewRecorded.current) {
      pageViewRecorded.current = true;
      actor.recordPageView(trekSlug).catch(() => {});
    }

    // Initial fetch
    fetchSeats();
    fetchViewers();

    // Poll seats every 30s
    seatIntervalRef.current = setInterval(fetchSeats, 30_000);
    // Poll viewers every 60s
    viewerIntervalRef.current = setInterval(fetchViewers, 60_000);

    return () => {
      if (seatIntervalRef.current) clearInterval(seatIntervalRef.current);
      if (viewerIntervalRef.current) clearInterval(viewerIntervalRef.current);
    };
  }, [actor, isFetching, trekSlug, batchDate]);

  return {
    available,
    total,
    isLow: available <= 5,
    isFull: available === 0,
    recentViewers,
    isLoading,
  };
}
