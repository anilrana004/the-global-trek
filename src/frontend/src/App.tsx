import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
const TrekFromDelhiPage = lazy(() => import("@/pages/city/TrekFromDelhi"));
const TrekFromDehradunPage = lazy(
  () => import("@/pages/city/TrekFromDehradun"),
);
const TrekFromRishikeshPage = lazy(
  () => import("@/pages/city/TrekFromRishikesh"),
);
const TrekFromManaliPage = lazy(() => import("@/pages/city/TrekFromManali"));
const TrekFromChandigarhPage = lazy(
  () => import("@/pages/city/TrekFromChandigarh"),
);
const TrekFromMumbaiPage = lazy(() => import("@/pages/city/TrekFromMumbai"));
const TrekFromBangalorePage = lazy(
  () => import("@/pages/city/TrekFromBangalore"),
);
const TreksForForeignersPage = lazy(() => import("@/pages/TreksForForeigners"));
const CharDhamForForeignersPage = lazy(
  () => import("@/pages/CharDhamForForeigners"),
);

const HomePage = lazy(() => import("@/pages/Home"));
const TreksPage = lazy(() => import("@/pages/Treks"));
const TrekDetailPage = lazy(() => import("@/pages/TrekDetail"));
const YatraPage = lazy(() => import("@/pages/Yatra"));
const AboutPage = lazy(() => import("@/pages/About"));
const BlogPage = lazy(() => import("@/pages/Blog"));
const BlogDetailPage = lazy(() => import("@/pages/BlogDetail"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const ExplorePage = lazy(() => import("@/pages/Explore"));
const UttarakhandHubPage = lazy(() => import("@/pages/UttarakhandHub"));
const HimachalHubPage = lazy(() => import("@/pages/HimachalHub"));
const TrekStatePage = lazy(() => import("@/pages/TrekStateDetail"));
const YatraDetailPage = lazy(() => import("@/pages/YatraDetail"));
const PackagesPage = lazy(() => import("@/pages/Packages"));
const PackageDetailPage = lazy(() => import("@/pages/PackageDetail"));
const GearRentalPage = lazy(() => import("@/pages/GearRental"));
const GalleryPage = lazy(() => import("@/pages/Gallery"));
const LoginPage = lazy(() => import("@/pages/account/Login"));
const RegisterPage = lazy(() => import("@/pages/account/Register"));
const DashboardPage = lazy(() => import("@/pages/account/Dashboard"));
const ProfilePage = lazy(() => import("@/pages/account/Profile"));
const MyBookingsPage = lazy(() => import("@/pages/account/MyBookings"));
const CertificatesPage = lazy(() => import("@/pages/account/Certificates"));
const BookingBatchPage = lazy(() => import("@/pages/booking/SelectBatch"));
const BookingParticipantsPage = lazy(
  () => import("@/pages/booking/Participants"),
);
const BookingAddonsPage = lazy(() => import("@/pages/booking/Addons"));
const BookingPaymentPage = lazy(() => import("@/pages/booking/Payment"));
const BookingConfirmationPage = lazy(
  () => import("@/pages/booking/Confirmation"),
);
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="space-y-4 w-full max-w-2xl px-8">
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </div>
);

const wrap =
  (Page: React.LazyExoticComponent<() => React.JSX.Element>) => () => (
    <Suspense fallback={<PageFallback />}>
      <Page />
    </Suspense>
  );

const rootRoute = createRootRoute({ component: Layout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: wrap(HomePage),
});
const exploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/explore",
  component: wrap(ExplorePage),
});
const treksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks",
  component: wrap(TreksPage),
});
const treksUKRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks/uttarakhand",
  component: wrap(UttarakhandHubPage),
});
const treksHPRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks/himachal-pradesh",
  component: wrap(HimachalHubPage),
});
const trekStateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks/$state/$slug",
  component: wrap(TrekStatePage),
});
const trekDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek/$trekId",
  component: wrap(TrekDetailPage),
});
const yatraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/yatra",
  component: wrap(YatraPage),
});
const yatraDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/yatra/$slug",
  component: wrap(YatraDetailPage),
});
const packagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/packages",
  component: wrap(PackagesPage),
});
const packageDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/packages/$type",
  component: wrap(PackageDetailPage),
});
const gearRentalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gear-rental",
  component: wrap(GearRentalPage),
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: wrap(GalleryPage),
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: wrap(AboutPage),
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: wrap(BlogPage),
});
const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$postId",
  component: wrap(BlogDetailPage),
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: wrap(ContactPage),
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/login",
  component: wrap(LoginPage),
});
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/register",
  component: wrap(RegisterPage),
});
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/dashboard",
  component: wrap(DashboardPage),
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/profile",
  component: wrap(ProfilePage),
});
const myBookingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/my-bookings",
  component: wrap(MyBookingsPage),
});
const certificatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/certificates",
  component: wrap(CertificatesPage),
});
const bookingBatchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/$trekSlug/select-batch",
  component: wrap(BookingBatchPage),
});
const bookingParticipantsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/$trekSlug/participants",
  component: wrap(BookingParticipantsPage),
});
const bookingAddonsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/$trekSlug/addons",
  component: wrap(BookingAddonsPage),
});
const bookingPaymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/$trekSlug/payment",
  component: wrap(BookingPaymentPage),
});
const bookingConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/confirmation/$id",
  component: wrap(BookingConfirmationPage),
});
const trekFromDelhiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek-from-delhi",
  component: wrap(TrekFromDelhiPage),
});
const trekFromDehradunRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek-from-dehradun",
  component: wrap(TrekFromDehradunPage),
});
const trekFromRishikeshRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek-from-rishikesh",
  component: wrap(TrekFromRishikeshPage),
});
const trekFromManaliRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek-from-manali",
  component: wrap(TrekFromManaliPage),
});
const trekFromChandigarhRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek-from-chandigarh",
  component: wrap(TrekFromChandigarhPage),
});
const trekFromMumbaiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek-from-mumbai",
  component: wrap(TrekFromMumbaiPage),
});
const trekFromBangaloreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trek-from-bangalore",
  component: wrap(TrekFromBangalorePage),
});
const treksForForeignersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks-for-foreigners",
  component: wrap(TreksForForeignersPage),
});
const charDhamForForeignersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/char-dham-for-foreigners",
  component: wrap(CharDhamForForeignersPage),
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/404",
  component: wrap(NotFoundPage),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  exploreRoute,
  treksRoute,
  treksUKRoute,
  treksHPRoute,
  trekStateRoute,
  trekDetailRoute,
  yatraRoute,
  yatraDetailRoute,
  packagesRoute,
  packageDetailRoute,
  gearRentalRoute,
  galleryRoute,
  aboutRoute,
  blogRoute,
  blogDetailRoute,
  contactRoute,
  loginRoute,
  registerRoute,
  dashboardRoute,
  profileRoute,
  myBookingsRoute,
  certificatesRoute,
  bookingBatchRoute,
  bookingParticipantsRoute,
  bookingAddonsRoute,
  bookingPaymentRoute,
  bookingConfirmationRoute,
  trekFromDelhiRoute,
  trekFromDehradunRoute,
  trekFromRishikeshRoute,
  trekFromManaliRoute,
  trekFromChandigarhRoute,
  trekFromMumbaiRoute,
  trekFromBangaloreRoute,
  treksForForeignersRoute,
  charDhamForForeignersRoute,
  notFoundRoute,
]);

const history = createBrowserHistory();
const router = createRouter({ routeTree, history });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
