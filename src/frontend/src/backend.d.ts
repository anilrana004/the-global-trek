import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ParticipantInput {
    age: bigint;
    govtIdType: string;
    medicalConditions: string;
    email: string;
    gender: string;
    emergencyContactPhone: string;
    emergencyContactName: string;
    mobile: string;
    lastName: string;
    govtIdNumber: string;
    firstName: string;
}
export interface BlogPost {
    id: string;
    title: string;
    date: string;
    imageQuery: string;
    excerpt: string;
    category: string;
}
export interface BookingInput {
    participants: Array<ParticipantInput>;
    promoCode: string;
    advanceAmount: bigint;
    totalAmount: bigint;
    addOns: AddOns;
    trekSlug: string;
    paymentType: string;
    batchDate: string;
}
export interface Trek {
    id: string;
    region: string;
    duration: string;
    difficulty: string;
    name: string;
    bestTime: string;
    description: string;
    imageQuery: string;
    distance: string;
    nearestAirport: string;
    price: string;
    maxAltitude: string;
    nearestRailhead: string;
    groupSize: string;
    startPoint: string;
    ageGroup: string;
}
export interface BookingInquiry {
    trekInterest: string;
    name: string;
    email: string;
    hearAboutUs: string;
    preferredDates: string;
    phone: string;
    groupSize: string;
    specialRequirements: string;
}
export interface Package {
    id: string;
    duration: string;
    name: string;
    description: string;
    inclusions: Array<string>;
    highlights: Array<string>;
    category: string;
    price: bigint;
    images: Array<string>;
}
export interface BatchAvailability {
    totalSeats: bigint;
    bookedSeats: bigint;
    availableSeats: bigint;
    trekSlug: string;
    price: bigint;
    batchDate: string;
    batchType: string;
}
export interface Batch {
    id: string;
    endDate: string;
    maxCapacity: bigint;
    trekId: string;
    bookedCount: bigint;
    basePrice: bigint;
    batchType: string;
    startDate: string;
}
export interface Yatra {
    id: string;
    region: string;
    duration: string;
    startEnd: string;
    difficulty: string;
    name: string;
    bestTime: string;
    description: string;
    imageQuery: string;
    price: string;
}
export interface AddOns {
    gearTent: boolean;
    gearBoots: boolean;
    porterDays: bigint;
    mule: boolean;
    muleDays: bigint;
    gearSleepingBag: boolean;
    travelInsurance: boolean;
    porter: boolean;
}
export interface Booking {
    id: string;
    status: BookingStatus;
    participants: Array<ParticipantInput>;
    userId: string;
    createdAt: bigint;
    promoCode: string;
    advanceAmount: bigint;
    totalAmount: bigint;
    addOns: AddOns;
    trekSlug: string;
    contactEmail: string;
    paymentType: string;
    paidAmount: bigint;
    batchDate: string;
    contactPhone: string;
}
export interface Review {
    id: string;
    verified: boolean;
    userId: string;
    trekId: string;
    reviewerCity: string;
    reviewText: string;
    reviewerName: string;
    trekDate: string;
    rating: bigint;
    helpful: bigint;
}
export interface GearItem {
    id: string;
    name: string;
    spec: string;
    deposit: bigint;
    pricePerDay: bigint;
    category: string;
    brand: string;
}
export enum BookingStatus {
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
    Completed = "Completed",
    Pending = "Pending"
}
export interface backendInterface {
    cancelBooking(bookingId: string, _reason: string): Promise<boolean>;
    createBooking(input: BookingInput): Promise<string>;
    createReview(review: Review): Promise<string>;
    getAvailableSeats(trekSlug: string, batchDate: string): Promise<bigint>;
    getBatchAvailability(trekSlug: string): Promise<Array<BatchAvailability>>;
    getBooking(bookingId: string): Promise<Booking | null>;
    getPackageById(packageId: string): Promise<Package | null>;
    getTrek(id: string): Promise<Trek | null>;
    getUserBookings(contactEmail: string): Promise<Array<Booking>>;
    getYatra(yatraId: string): Promise<Yatra | null>;
    listAllReviews(): Promise<Array<Review>>;
    listBatches(trekId: string): Promise<Array<Batch>>;
    listBlogPosts(): Promise<Array<BlogPost>>;
    listGearItems(): Promise<Array<GearItem>>;
    listPackages(): Promise<Array<Package>>;
    listReviews(trekId: string): Promise<Array<Review>>;
    listTreks(): Promise<Array<Trek>>;
    listUserBookings(userId: string): Promise<Array<Booking>>;
    listYatras(): Promise<Array<Yatra>>;
    searchTreks(searchTerm: string): Promise<Array<Trek>>;
    submitBookingInquiry(inquiry: BookingInquiry): Promise<string>;
    updateBatchAvailability(batchId: string, seatsBooked: bigint): Promise<boolean>;
    updatePaymentStatus(bookingId: string, paidAmount: bigint): Promise<boolean>;
}
