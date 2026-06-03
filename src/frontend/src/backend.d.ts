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
export type Result_2 = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface TrekCertificate {
    id: bigint;
    completedDate: string;
    duration: string;
    bookingId: bigint;
    userId: Principal;
    guideName: string;
    trekName: string;
    trekSlug: string;
    issuedAt: bigint;
    maxAltitude: string;
    certificateCode: string;
}
export interface AdminBlogPost {
    id: bigint;
    heroImageUrl: string;
    metaDescription: string;
    status: BlogPostStatus;
    title: string;
    focusKeyword: string;
    content: string;
    publishAt?: bigint;
    createdAt: bigint;
    slug: string;
    tags: Array<string>;
    publishedAt?: bigint;
    author: string;
    updatedAt: bigint;
    excerpt: string;
    category: string;
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
export interface BatchAvailability {
    totalSeats: bigint;
    bookedSeats: bigint;
    availableSeats: bigint;
    trekSlug: string;
    price: bigint;
    batchDate: string;
    batchType: string;
}
export interface WaitlistEntryFull {
    id: string;
    status: string;
    name: string;
    joinedAt: bigint;
    batchStartDate: string;
    email: string;
    trekName: string;
    trekSlug: string;
    batchId: string;
    phone: string;
    position: bigint;
}
export type Result_1 = {
    __kind__: "ok";
    ok: ReviewId;
} | {
    __kind__: "err";
    err: string;
};
export interface WaitlistInput {
    name: string;
    email: string;
    trekSlug: string;
    phone: string;
    batchDate: string;
}
export interface TrekPhotoInput {
    uploaderName: string;
    isProfilePhoto: boolean;
    storageUrl: string;
    trekSlug: string;
    caption: string;
    uploaderEmail: string;
    dateOfTrek: string;
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
export type ReviewId = bigint;
export interface FullReview {
    id: ReviewId;
    status: string;
    foodRating: bigint;
    photoUrls: Array<string>;
    bookingId: string;
    bookingEmail: string;
    campsiteRating: bigint;
    reviewerCity: string;
    submittedAt: bigint;
    reviewText: string;
    reviewerName: string;
    organizationRating: bigint;
    overallRating: bigint;
    transportRating: bigint;
    trekSlug: string;
    safetyRating: bigint;
    valueRating: bigint;
    helpfulCount: bigint;
    groupType: string;
    guideRating: bigint;
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
export interface BatchAvailabilityRecord {
    durationDays: bigint;
    status: string;
    endDate: string;
    totalSeats: bigint;
    availableSeats: bigint;
    trekName: string;
    trekSlug: string;
    batchId: string;
    price: bigint;
    startDate: string;
}
export interface TrekPhoto {
    id: string;
    status: string;
    uploaderName: string;
    isProfilePhoto: boolean;
    approvedAt?: bigint;
    submittedAt: bigint;
    storageUrl: string;
    trekSlug: string;
    caption: string;
    uploaderEmail: string;
    dateOfTrek: string;
}
export type Result = {
    __kind__: "ok";
    ok: null;
} | {
    __kind__: "err";
    err: string;
};
export interface AggregateRating {
    foodAvg: number;
    campsiteAvg: number;
    safetyAvg: number;
    trekSlug: string;
    organizationAvg: number;
    totalReviews: bigint;
    guideAvg: number;
    transportAvg: number;
    valueAvg: number;
    overallAvg: number;
}
export interface Notification {
    id: bigint;
    title: string;
    actionUrl: string;
    userId: Principal;
    createdAt: bigint;
    isRead: boolean;
    message: string;
    trekName: string;
    batchDate: string;
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
export interface ReviewInput {
    foodRating: bigint;
    photoUrls: Array<string>;
    bookingId: string;
    bookingEmail: string;
    campsiteRating: bigint;
    reviewerCity: string;
    reviewText: string;
    reviewerName: string;
    organizationRating: bigint;
    overallRating: bigint;
    transportRating: bigint;
    trekSlug: string;
    safetyRating: bigint;
    valueRating: bigint;
    groupType: string;
    guideRating: bigint;
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
export enum BlogPostStatus {
    scheduled = "scheduled",
    published = "published",
    draft = "draft",
    archived = "archived"
}
export enum BookingStatus {
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
    Completed = "Completed",
    Pending = "Pending"
}
export interface backendInterface {
    approveReview(reviewId: ReviewId): Promise<void>;
    approveTrekPhoto(photoId: string): Promise<boolean>;
    cancelBooking(bookingId: string, _reason: string): Promise<boolean>;
    createAdminBlogPost(title: string, slug: string, excerpt: string, content: string, heroImageUrl: string, author: string, category: string, tags: Array<string>, metaDescription: string, focusKeyword: string): Promise<Result_2>;
    createBooking(input: BookingInput): Promise<string>;
    createNotification(userId: Principal, trekName: string, batchDate: string, title: string, message: string, actionUrl: string): Promise<Result_2>;
    createReview(review: Review): Promise<string>;
    deleteAdminBlogPost(postId: bigint): Promise<Result>;
    deleteNotification(notificationId: bigint): Promise<Result>;
    getAdminBlogPost(postId: bigint): Promise<AdminBlogPost | null>;
    getAdminBlogPostBySlug(slug: string): Promise<AdminBlogPost | null>;
    getAggregateRating(trekSlug: string): Promise<AggregateRating>;
    getAllAdminBlogPosts(): Promise<Array<AdminBlogPost>>;
    getAllApprovedPhotos(): Promise<Array<TrekPhoto>>;
    getAllBatchAvailability(): Promise<Array<BatchAvailabilityRecord>>;
    getAllBookings(): Promise<Array<Booking>>;
    getAllPendingPhotos(): Promise<Array<TrekPhoto>>;
    getAllWaitlistEntries(): Promise<Array<WaitlistEntryFull>>;
    getApprovedPhotos(trekSlug: string): Promise<Array<TrekPhoto>>;
    getApprovedReviews(trekSlug: string): Promise<Array<FullReview>>;
    getAvailableSeats(trekSlug: string, batchDate: string): Promise<bigint>;
    getBatchAvailability(trekSlug: string): Promise<Array<BatchAvailability>>;
    getBooking(bookingId: string): Promise<Booking | null>;
    getCertificate(certCode: string): Promise<TrekCertificate | null>;
    getNotifications(): Promise<Array<Notification>>;
    getPackage(packageId: string): Promise<Package | null>;
    getPackageById(packageId: string): Promise<Package | null>;
    getPendingReviews(): Promise<Array<FullReview>>;
    getPublishedAdminBlogPosts(): Promise<Array<AdminBlogPost>>;
    getRecentViewers(trekSlug: string): Promise<bigint>;
    getSeatAvailability(trekSlug: string, batchDate: string): Promise<BatchAvailability>;
    getTrek(id: string): Promise<Trek | null>;
    getUserBookings(contactEmail: string): Promise<Array<Booking>>;
    getUserCertificates(): Promise<Array<TrekCertificate>>;
    getWaitlistCount(trekSlug: string, batchDate: string): Promise<bigint>;
    getYatra(yatraId: string): Promise<Yatra | null>;
    isAdmin(adminCaller: Principal): Promise<boolean>;
    joinWaitlist(input: WaitlistInput): Promise<string>;
    listAllReviews(): Promise<Array<Review>>;
    listBatches(trekId: string): Promise<Array<Batch>>;
    listBlogPosts(): Promise<Array<BlogPost>>;
    listGearItems(): Promise<Array<GearItem>>;
    listPackages(): Promise<Array<Package>>;
    listReviews(trekId: string): Promise<Array<Review>>;
    listTreks(): Promise<Array<Trek>>;
    listUserBookings(userId: string): Promise<Array<Booking>>;
    listYatras(): Promise<Array<Yatra>>;
    markNotificationRead(notificationId: bigint): Promise<Result>;
    markNotificationReadAuth(notificationId: bigint): Promise<Result>;
    markTrekCompleted(bookingId: bigint, trekName: string, trekSlug: string, maxAltitude: string, duration: string, completedDate: string, guideName: string): Promise<Result_2>;
    notifyWaitlistBatch(trekName: string, batchDate: string, actionUrl: string): Promise<Result_2>;
    notifyWaitlistEntry(entryId: string): Promise<void>;
    publishAdminBlogPost(postId: bigint): Promise<Result>;
    recordPageView(trekSlug: string): Promise<void>;
    rejectReview(reviewId: ReviewId): Promise<void>;
    scheduleAdminBlogPost(postId: bigint, publishAt: bigint): Promise<Result>;
    searchTreks(searchTerm: string): Promise<Array<Trek>>;
    submitBookingInquiry(inquiry: BookingInquiry): Promise<string>;
    submitReview(input: ReviewInput): Promise<Result_1>;
    submitTrekPhoto(input: TrekPhotoInput): Promise<string>;
    updateAdminBlogPost(postId: bigint, title: string, slug: string, excerpt: string, content: string, heroImageUrl: string, author: string, category: string, tags: Array<string>, metaDescription: string, focusKeyword: string): Promise<Result>;
    updateBatchAvailability(batchId: string, seatsBooked: bigint): Promise<boolean>;
    updatePaymentStatus(bookingId: string, paidAmount: bigint): Promise<boolean>;
    upvoteReview(reviewId: ReviewId): Promise<void>;
}
