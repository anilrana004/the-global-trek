// Shared types & helpers for TrekDetail sub-sections
import type { BatchSlot, Review, Trek } from "@/types/trek";

export type { Trek, BatchSlot, Review };

export interface GearRentalItem {
  id: string;
  name: string;
  icon: string;
  daily: number;
  weekly: number;
  desc: string;
}

export const GEAR_RENTALS: GearRentalItem[] = [
  {
    id: "g1",
    name: "Trekking Poles",
    icon: "🥢",
    daily: 150,
    weekly: 800,
    desc: "Carbon, anti-shock",
  },
  {
    id: "g2",
    name: "Sleeping Bag",
    icon: "🛌",
    daily: 200,
    weekly: 1100,
    desc: "-10°C down fill",
  },
  {
    id: "g3",
    name: "Rain Poncho",
    icon: "🌧️",
    daily: 100,
    weekly: 500,
    desc: "Heavy-duty",
  },
  {
    id: "g4",
    name: "Gaiters",
    icon: "🧤",
    daily: 80,
    weekly: 400,
    desc: "Snow & mud guard",
  },
  {
    id: "g5",
    name: "Headlamp",
    icon: "🔦",
    daily: 100,
    weekly: 500,
    desc: "350 lm, USB-C",
  },
  {
    id: "g6",
    name: "Trek Backpack",
    icon: "🎒",
    daily: 250,
    weekly: 1400,
    desc: "55L Osprey/Decathlon",
  },
];

export const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Priya Mehta",
    rating: 5,
    dimensions: {
      food: 5,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 5,
    },
    title: "Life-changing summit sunrise",
    comment:
      "Woke at 4 AM for the push and every second was worth it. Our guide Deepak shared mythological context at every step. SpO2 checked three times on Day 2. Paneer makhani at 8,500 ft — absolutely surreal. Coming back for Har Ki Dun.",
    date: "2025-12-15",
    month: 12,
    groupType: "couple",
    verified: true,
    helpful: 47,
    tripYear: 2025,
  },
  {
    id: "r2",
    author: "Arjun Krishnaswamy",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5,
    },
    title: "World-class for the price",
    comment:
      "Guides carry a Garmin InReach satellite phone — I tested it myself. Oxygen cylinders at every camp. The 360° panorama with Nanda Devi, Trishul, Kedarnath all visible at once is something I've dreamed of since childhood.",
    date: "2026-01-10",
    month: 1,
    groupType: "solo",
    verified: true,
    helpful: 31,
    tripYear: 2026,
  },
  {
    id: "r3",
    author: "Sunita Sharma",
    rating: 4,
    dimensions: {
      food: 5,
      guideExpertise: 4,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 4,
    },
    title: "Perfect family trek — my 14-year-old managed it",
    comment:
      "Slightly nervous about altitude with the kids but the team monitored them constantly. Food was the star — looked forward to every meal. March rhododendron forests beyond description. Just book it.",
    date: "2026-03-20",
    month: 3,
    groupType: "family",
    verified: true,
    helpful: 28,
    tripYear: 2026,
  },
  {
    id: "r4",
    author: "Vivek Agarwal",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5,
    },
    title: "Corporate team bonding — exceeded all expectations",
    comment:
      "12 Bangalore colleagues, not a single complaint. Guide handled different fitness levels brilliantly. WhatsApp updates to families was a thoughtful touch. Summit at 4 AM with headlamps — absolute cinema.",
    date: "2025-11-08",
    month: 11,
    groupType: "corporate",
    verified: true,
    helpful: 19,
    tripYear: 2025,
  },
];

export function trekById(_id: string): Trek | undefined {
  // Dynamically import to avoid circular at types level — caller imports treksData directly
  return undefined;
}

export function difficultyColor(d: string): string {
  const l = d.toLowerCase();
  if (l.includes("easy") && !l.includes("moderate")) return "#16a34a";
  if (l.includes("moderate") && !l.includes("difficult")) return "#d97706";
  return "#dc2626";
}

export function altitudeAmsLevel(
  altM: number | undefined,
): "low" | "moderate" | "high" {
  if (!altM || altM < 3000) return "low";
  if (altM < 4500) return "moderate";
  return "high";
}

export function parseAltM(maxAlt: string): number {
  // Parses e.g. "3,810 m (12,500 ft)" → 3810, or "12,500 ft (3,810m)" → 3810
  const mMatch = maxAlt.match(/(\d[\d,]+)\s*m/i);
  if (mMatch) return Number.parseInt(mMatch[1].replace(/,/g, ""), 10);
  // fallback: ft to m
  const ftMatch = maxAlt.match(/(\d[\d,]+)\s*ft/i);
  if (ftMatch)
    return Math.round(
      Number.parseInt(ftMatch[1].replace(/,/g, ""), 10) * 0.3048,
    );
  return 0;
}

export function generateBatches(trekId: string, price: number): BatchSlot[] {
  const base = new Date("2026-06-15");
  return [0, 22, 45, 68, 91, 114].map((offset, i) => {
    const start = new Date(base);
    start.setDate(start.getDate() + offset);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    const seats = [8, 3, 1, 12, 5, 2][i];
    const status: BatchSlot["status"] =
      seats >= 6
        ? "available"
        : seats >= 3
          ? "filling_fast"
          : seats === 1
            ? "almost_full"
            : "available";
    return {
      id: `${trekId}-b${i + 1}`,
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
      totalSeats: 14,
      bookedSeats: 14 - seats,
      availableSeats: seats,
      price: price + i * 300,
      status,
      meetingPoint: "Rishikesh Bus Stand, 5 AM",
      guide: "Deepak Singh (NIM)",
      discounts: { group5Plus: 5, earlyBird: 8 },
    };
  });
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function batchStatusBadge(status: BatchSlot["status"], seats: number) {
  if (status === "sold_out")
    return { label: "FULL", color: "#dc2626", bg: "#fef2f2" };
  if (status === "almost_full" || seats <= 2)
    return { label: `Only ${seats} left!`, color: "#dc2626", bg: "#fef2f2" };
  if (status === "filling_fast" || seats <= 5)
    return { label: `${seats} seats left`, color: "#d97706", bg: "#fffbeb" };
  return { label: `${seats} available`, color: "#16a34a", bg: "#f0fdf4" };
}
