// ─── Core Trek Types ───────────────────────────────────────────────────────────

export type DifficultyLevel =
  | "Easy"
  | "Easy to Moderate"
  | "Moderate"
  | "Moderate to Difficult"
  | "Difficult";

export interface Batch {
  id: string;
  trekId: string;
  startDate: string;
  endDate: string;
  maxCapacity: number;
  bookedCount: number;
  basePrice: number;
  batchType: "Regular" | "Christmas" | "New Year" | "Summer" | "Weekend";
}

export interface GearItem {
  id: string;
  name: string;
  brand: string;
  spec: string;
  pricePerDay: number;
  deposit: number;
  category: "footwear" | "clothing" | "equipment" | "safety";
}

export interface ReviewDimensions {
  food: number; // 1-5
  guideExpertise: number; // 1-5
  safety: number; // 1-5
  valueForMoney: number; // 1-5
  scenery: number; // 1-5
  overall: number; // 1-5
}

export interface Review {
  id: string;
  // Legacy fields (kept for backward compat)
  trekId?: string;
  reviewerName?: string;
  reviewerCity?: string;
  reviewText?: string;
  trekDate?: string;
  userId?: string;
  // Core fields
  author: string;
  avatar?: string;
  rating: number; // = overall, kept for backward compat
  dimensions: ReviewDimensions;
  title: string;
  comment: string;
  date: string;
  month: number; // 1-12
  groupType: "solo" | "couple" | "family" | "friends" | "corporate" | "school";
  verified: boolean;
  helpful: number; // upvote count
  photos?: string[];
  tripYear: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  // Legacy optional fields (kept for backward compat)
  altitude?: string;
  distance?: string;
  meals?: string;
  accommodation?: string;
  // ── Extended fields (14+ data points) ────────────────────────────────────
  startAltitude?: number; // in feet
  endAltitude?: number; // in feet
  altitudeGain?: number; // net gain in feet (positive = climb, negative = descend)
  altitudeLoss?: number; // descent in feet
  maxAltitude?: number; // highest point on this day in feet
  distanceKm?: number; // in km
  walkingHours?: number; // walking hours (excluding breaks)
  duration?: string; // e.g. "5-6 hours"
  difficulty?: "easy" | "moderate" | "hard" | "very_hard"; // standardized lowercase
  dayDifficulty?: "Easy" | "Moderate" | "Hard" | "Very Hard"; // legacy alias
  terrain?: string; // e.g. "Dense pine forest, rocky switchbacks, snow patches"
  campsiteElevation?: number; // campsite elevation in feet
  campsite?: {
    name: string;
    altitude: number; // in feet
    amenities: string[]; // e.g. ["Bio-toilets", "Dining tent", "Solar charging"]
  };
  mealDetail?: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snacks?: string;
  };
  waterSources?: string[]; // list of water source descriptions
  emergencyExit?: string; // nearest exit route
  photographyHighlights?: string[]; // best photo spots/subjects
  weatherPattern?: string; // typical weather for this day/zone
  wildlife?: string[]; // potential wildlife sightings
  culturalNotes?: string; // cultural/historical context
  acclimatizationNotes?: string; // specific notes if altitude is critical
  sunriseTime?: string;
  sunsetTime?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface QuickFacts {
  maxAltitudeZone: string; // e.g. "Alpine Zone"
  snowConditions: string; // e.g. "Heavy snow Dec-Mar, patches Apr-Jun"
  trailType: string; // e.g. "Forest, meadow, rocky ridge, snow summit"
  waterAvailability: string; // e.g. "Abundant streams up to 11,000ft, carry 2L above"
  phoneNetwork: string; // e.g. "BSNL only, unreliable above 10,000ft"
  permits: string; // e.g. "Forest permit included in trek fee"
  fitness: string; // e.g. "Can jog 5km in 45min"
  minAge: number;
  maxAge: number;
}

export interface Trek {
  id: string;
  slug?: string;
  name: string;
  state?: "Uttarakhand" | "Himachal Pradesh" | "Uttarakhand/Himachal Pradesh";
  district?: string;
  region: string;
  altitudeM?: number; // max altitude in metres
  maxAltitude: string; // display string e.g. "3,810 m (12,500 ft)"
  distance: string;
  duration: string;
  durationDays?: number;
  difficulty: DifficultyLevel;
  bestTime: string;
  bestSeason?: string; // short label e.g. "Dec–Apr"
  startPoint: string;
  nearestRailhead: string;
  nearestAirport: string;
  groupSize: string;
  ageGroup: string;
  priceMin?: number; // numeric for calculations
  price: string; // display string e.g. "₹8,500"
  imageQuery: string;
  description: string;
  keyHighlights?: string[];
  badges?: string[]; // e.g. ["#1 Winter Trek", "UNESCO"]
  rating?: number;
  reviewCount?: number;
  batches?: Batch[];
  images?: string[]; // unsplash query strings for multiple images
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs: FAQ[];
  packingList: string[];
  gearItems?: string[]; // gear item IDs relevant to this trek
  similarTreks?: string[]; // trek IDs
  trekType?: "Trek" | "Yatra" | "Package";
  isYatra?: boolean;
  overview?: string;
  relatedTrekIds?: string[];
  // ── Extended fields ────────────────────────────────────────────────────────
  safetyProtocol?: SafetyProtocol;
  batchSlots?: BatchSlot[];
  detailedReviews?: Review[];
  heroImages?: string[]; // array of image URLs for gallery
  quickFacts?: QuickFacts;
}

// ─── Safety & AMS Protocol types ──────────────────────────────────────────────

export interface GuideInfo {
  name: string;
  certification: string; // e.g. "NIM (Nehru Institute of Mountaineering) Certified, WFR Level 3"
  experience: string; // e.g. "12 years, 200+ Himalayan treks"
  languages: string[];
  photo?: string;
}

export interface HospitalInfo {
  name: string;
  distance: string; // e.g. "38 km from base camp"
  phone: string;
  address: string;
  emergencyAvailable: boolean;
}

export interface SafetyProtocol {
  guideInfo: GuideInfo;
  satellitePhone: {
    model: string; // e.g. "Garmin inReach Mini 2"
    coverage: string;
  };
  helicopterLandingZone: {
    location: string;
    coordinates: string; // GPS coordinates
    nearestTo: string; // e.g. "Base camp, 200m east"
  };
  nearestHospital: HospitalInfo;
  oxygenCylinders: {
    count: number;
    capacity: string; // e.g. "5L medical grade"
    locations: string[]; // where stationed
  };
  pulseOximeter: boolean;
  firstAidKit: {
    medications: string[]; // list of key medications
    equipment: string[];
  };
  amsProtocol: {
    stage1: { symptoms: string[]; treatment: string };
    stage2: { symptoms: string[]; treatment: string };
    stage3: { symptoms: string[]; treatment: string };
  };
  evacuationProcedure: string;
  checkInFrequency: string; // e.g. "3x daily oxygen checks at every campsite"
  teamRatio: string; // e.g. "1 guide per 8 trekkers"
  emergencyContacts: Array<{ name: string; role: string; phone: string }>;
}

// ─── Batch Calendar & Payment types ────────────────────────────────────────────

export interface BatchSlot {
  id: string;
  startDate: string; // ISO date
  endDate: string;
  totalSeats: number;
  bookedSeats: number;
  availableSeats: number;
  price: number;
  status:
    | "available"
    | "limited"
    | "filling_fast"
    | "almost_full"
    | "sold_out"
    | "waitlist";
  discounts?: {
    group5Plus: number; // percentage discount
    earlyBird: number;
    earlyBirdDeadline?: string;
  };
  meetingPoint: string;
  guide: string;
  notes?: string;
}

export interface PaymentOption {
  type: "full" | "advance";
  label: string;
  amount: number;
  percentageOfTotal: number;
  description: string;
}

// ─── Yatra-specific additions ──────────────────────────────────────────────────

export interface DarshanTiming {
  puja: string;
  time: string;
  description: string;
}

export interface PujaOption {
  name: string;
  price: number;
  duration: string;
  bookingNote: string;
}

export interface TransportOption {
  option: string;
  cost: string;
  duration: string;
  bookingNote: string;
}

export interface TempleInfo {
  templeName: string;
  altitude: string;
  deity: string;
  openingDate2026: string;
  closingDate2026: string;
  committeePhone: string;
  registrationLink: string;
}

export interface RegistrationStep {
  step: number;
  instruction: string;
}

export interface YatraDetail extends Trek {
  isYatra: true;
  templeInfo: TempleInfo;
  darshan: DarshanTiming[];
  pujaOptions: PujaOption[];
  transportOptions: TransportOption[];
  registrationSteps: RegistrationStep[];
}

// ─── Booking flow types ────────────────────────────────────────────────────────

export interface Participant {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  mobile: string;
  email: string;
  emergencyContact: string;
  medicalConditions: string;
  govtId: string;
}

export interface BookingAddOns {
  pickupPoint: string;
  gearRental: string[];
  trekInsurance: boolean;
  premiumTents: boolean;
  photographyPackage: boolean;
  pujaOptions: string[];
}

export interface Booking {
  id: string;
  trekId: string;
  batchId: string;
  userId: string;
  participants: Participant[];
  addOns: string[];
  totalAmount: number;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: number;
}

export interface BookingInquiry {
  name: string;
  email: string;
  phone: string;
  trekInterest: string;
  preferredDates: string;
  groupSize: string;
  specialRequirements: string;
  hearAboutUs: string;
}

// ─── Blog types ────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorBio: string;
  publishDate: string;
  readTime: string;
  featuredImage: string;
  excerpt: string;
  body: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  date: string;
  imageQuery: string;
}

export interface TrekDetail extends Trek {
  overview: string;
  relatedTrekIds: string[];
}
