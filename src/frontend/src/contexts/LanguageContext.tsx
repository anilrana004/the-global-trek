import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "en" | "hi";

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_treks: "Explore Treks",
    nav_yatra: "Yatras",
    nav_packages: "Packages",
    nav_blog: "Blog",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_gallery: "Gallery",
    nav_gear: "Gear Rental",
    hero_tagline: "Where Every Trail Tells a Story",
    hero_cta_explore: "Explore Treks",
    hero_cta_book: "Book a Trek",
    trek_book_now: "Book Now",
    trek_view_details: "View Details",
    trek_seats_left: "seats left",
    trek_sold_out: "Sold Out",
    trek_almost_full: "Almost Full",
    trek_join_waitlist: "Join Waitlist",
    trek_days: "Days",
    trek_altitude: "Max Altitude",
    trek_difficulty: "Difficulty",
    trek_from: "From",
    booking_select_batch: "Select Batch",
    booking_participants: "Participants",
    booking_addons: "Add-Ons",
    booking_payment: "Payment",
    booking_confirmation: "Confirmation",
    booking_book_now: "Book Now \u2014 ",
    booking_total: "Total",
    booking_per_person: "per person",
    booking_gst: "GST (5%)",
    booking_group_discount: "Group Discount (10%)",
    booking_advance: "Advance (30%)",
    booking_full: "Pay Full Amount",
    footer_rights: "All rights reserved",
    footer_contact: "Contact Us",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    common_loading: "Loading...",
    common_error: "Something went wrong",
    common_view_all: "View All",
    common_read_more: "Read More",
    common_share: "Share",
    common_wishlist: "Add to Wishlist",
    about_our_story: "Our Story",
    about_team: "Meet the Team",
    about_values: "Our Values",
    gallery_title: "Trek Gallery",
    gallery_upload: "Share Your Photos",
    photo_upload_title: "Share Your Journey",
    photo_upload_cta: "Upload Your Trek Photos",
    photo_upload_verify: "Verify Your Participation",
    photo_upload_caption: "Add a caption (optional)",
    photo_upload_submit: "Submit Photos",
    seat_counter_viewing: "people viewing right now",
  },
  hi: {
    nav_home: "\u0939\u094b\u092e",
    nav_treks: "\u091f\u094d\u0930\u0947\u0915 \u0916\u094b\u091c\u0947\u0902",
    nav_yatra: "\u092f\u093e\u0924\u094d\u0930\u093e\u090f\u0902",
    nav_packages: "\u092a\u0948\u0915\u0947\u091c",
    nav_blog: "\u092c\u094d\u0932\u0949\u0917",
    nav_about:
      "\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902",
    nav_contact:
      "\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902",
    nav_gallery: "\u0917\u0948\u0932\u0930\u0940",
    nav_gear:
      "\u0917\u093f\u092f\u0930 \u0915\u093f\u0930\u093e\u090f \u092a\u0930",
    hero_tagline:
      "\u091c\u0939\u093e\u0901 \u0939\u0930 \u0930\u093e\u0938\u094d\u0924\u093e \u090f\u0915 \u0915\u0939\u093e\u0928\u0940 \u0915\u0939\u0924\u093e \u0939\u0948",
    hero_cta_explore:
      "\u091f\u094d\u0930\u0947\u0915 \u0916\u094b\u091c\u0947\u0902",
    hero_cta_book:
      "\u091f\u094d\u0930\u0947\u0915 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902",
    trek_book_now:
      "\u0905\u092d\u0940 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902",
    trek_view_details:
      "\u0935\u093f\u0935\u0930\u0923 \u0926\u0947\u0916\u0947\u0902",
    trek_seats_left:
      "\u0938\u0940\u091f\u0947\u0902 \u092c\u091a\u0940 \u0939\u0948\u0902",
    trek_sold_out:
      "\u0938\u0940\u091f\u0947\u0902 \u092d\u0930 \u0917\u0908\u0902",
    trek_almost_full:
      "\u0932\u0917\u092d\u0917 \u092d\u0930 \u0917\u092f\u093e",
    trek_join_waitlist:
      "\u092a\u094d\u0930\u0924\u0940\u0915\u094d\u0937\u093e \u0938\u0942\u091a\u0940 \u092e\u0947\u0902 \u091c\u0941\u0921\u093c\u0947\u0902",
    trek_days: "\u0926\u093f\u0928",
    trek_altitude:
      "\u0905\u0927\u093f\u0915\u0924\u092e \u090a\u0901\u091a\u093e\u0908",
    trek_difficulty: "\u0915\u0920\u093f\u0928\u093e\u0908",
    trek_from: "\u0938\u0947 \u0936\u0941\u0930\u0942",
    booking_select_batch: "\u092c\u0948\u091a \u091a\u0941\u0928\u0947\u0902",
    booking_participants:
      "\u092a\u094d\u0930\u0924\u093f\u092d\u093e\u0917\u0940",
    booking_addons:
      "\u0905\u0924\u093f\u0930\u093f\u0915\u094d\u0924 \u0938\u0947\u0935\u093e\u090f\u0902",
    booking_payment: "\u092d\u0941\u0917\u0924\u093e\u0928",
    booking_confirmation: "\u092a\u0941\u0937\u094d\u091f\u093f",
    booking_book_now:
      "\u0905\u092d\u0940 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902 \u2014 ",
    booking_total: "\u0915\u0941\u0932",
    booking_per_person:
      "\u092a\u094d\u0930\u0924\u093f \u0935\u094d\u092f\u0915\u094d\u0924\u093f",
    booking_gst: "\u091c\u0940\u090f\u0938\u091f\u0940 (5%)",
    booking_group_discount: "\u0938\u092e\u0942\u0939 \u091b\u0942\u091f (10%)",
    booking_advance: "\u0905\u0917\u094d\u0930\u093f\u092e (30%)",
    booking_full:
      "\u092a\u0942\u0930\u0940 \u0930\u093e\u0936\u093f \u091a\u0941\u0915\u093e\u090f\u0902",
    footer_rights:
      "\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915\u093e\u0930 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924",
    footer_contact:
      "\u0939\u092e\u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902",
    footer_privacy:
      "\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0928\u0940\u0924\u093f",
    footer_terms:
      "\u0928\u093f\u092f\u092e \u0914\u0930 \u0936\u0930\u094d\u0924\u0947\u0902",
    common_loading:
      "\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...",
    common_error: "\u0915\u0941\u091b \u0917\u0932\u0924 \u0939\u0941\u0906",
    common_view_all: "\u0938\u092d\u0940 \u0926\u0947\u0916\u0947\u0902",
    common_read_more: "\u0914\u0930 \u092a\u0922\u093c\u0947\u0902",
    common_share: "\u0936\u0947\u092f\u0930 \u0915\u0930\u0947\u0902",
    common_wishlist:
      "\u0907\u091a\u094d\u091b\u093e \u0938\u0942\u091a\u0940 \u092e\u0947\u0902 \u091c\u094b\u0921\u093c\u0947\u0902",
    about_our_story:
      "\u0939\u092e\u093e\u0930\u0940 \u0915\u0939\u093e\u0928\u0940",
    about_team:
      "\u091f\u0940\u092e \u0938\u0947 \u092e\u093f\u0932\u0947\u0902",
    about_values:
      "\u0939\u092e\u093e\u0930\u0947 \u092e\u0942\u0932\u094d\u092f",
    gallery_title:
      "\u091f\u094d\u0930\u0947\u0915 \u0917\u0948\u0932\u0930\u0940",
    gallery_upload:
      "\u0905\u092a\u0928\u0940 \u092b\u093c\u094b\u091f\u094b \u0936\u0947\u092f\u0930 \u0915\u0930\u0947\u0902",
    photo_upload_title:
      "\u0905\u092a\u0928\u0940 \u092f\u093e\u0924\u094d\u0930\u093e \u0936\u0947\u092f\u0930 \u0915\u0930\u0947\u0902",
    photo_upload_cta:
      "\u0905\u092a\u0928\u0940 \u091f\u094d\u0930\u0947\u0915 \u092b\u093c\u094b\u091f\u094b \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902",
    photo_upload_verify:
      "\u0905\u092a\u0928\u0940 \u092d\u093e\u0917\u0940\u0926\u093e\u0930\u0940 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902",
    photo_upload_caption:
      "\u0915\u0948\u092a\u094d\u0936\u0928 \u091c\u094b\u0921\u093c\u0947\u0902 (\u0935\u0948\u0915\u0932\u094d\u092a\u093f\u0915)",
    photo_upload_submit:
      "\u092b\u093c\u094b\u091f\u094b \u091c\u092e\u093e \u0915\u0930\u0947\u0902",
    seat_counter_viewing:
      "\u0932\u094b\u0917 \u0905\u092d\u0940 \u0926\u0947\u0916 \u0930\u0939\u0947 \u0939\u0948\u0902",
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("gt_language");
      return stored === "hi" ? "hi" : "en";
    } catch {
      return "en";
    }
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("gt_language", lang);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] ?? translations.en[key] ?? key;
    },
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
