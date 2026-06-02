import CityTrekPage from "@/pages/CityTrekPage";
import { SEOHead } from "../../components/SEOHead";
import { getCityTrekSEO } from "../../utils/seoUtils";

export default function TrekFromBangalore() {
  const seo = getCityTrekSEO("bangalore", "Bangalore");
  return (
    <>
      <SEOHead {...seo} />
      <CityTrekPage
        cityName="Bangalore"
        stateName="Karnataka"
        metaTitle="Himalayan Treks from Bangalore | Group Packages 2026 | Global Trek"
        metaDescription="Bangalore to Himalayas — group trekking packages for Karnataka trekkers. Kedarkantha, Hampta Pass, Chopta & more. Flights, transport, and trek handled."
        geoRegion="IN-KA"
        geoPlacename="Bangalore, Karnataka, India"
        geoPosition="12.9716;77.5946"
        heroTagline="From the Garden City to the snow-capped peaks — your mountain escape"
        heroDescription="Bangalore's trekking community is one of India's most active. We organize regular group departures for Karnataka trekkers, with complete logistics from flight to summit."
        whyTrekPoints={[
          "Direct flights from Bangalore to Dehradun (3 hrs) and Delhi (2.5 hrs)",
          "Large Bangalore trekking groups — meet fellow techies and nature lovers",
          "Complete packages — we handle flights, transport, trek, and return",
          "Post-trek Coorg/Kodachadri extension possible for Karnataka trekkers",
          "Corporate batches from Bangalore's tech parks are our specialty",
          "Weekend + 1 day off sufficient for Chopta and Nag Tibba",
        ]}
        howToReach={{
          byTrain: {
            title: "By Train",
            details:
              "Bangalore → Delhi (36–40 hrs) via Karnataka Express or Rajdhani. Then connecting transport to Dehradun/Manali. Only for those with time.",
          },
          byFlight: {
            title: "By Flight (Recommended)",
            details:
              "Direct flights to Dehradun (3 hrs, IndiGo) or Delhi (2.5 hrs, all carriers). Book 45+ days in advance for best prices (₹5,000–8,000 one-way).",
          },
          byBus: {
            title: "By Bus",
            details:
              "Not practical from Bangalore. Fly to Delhi/Dehradun and use our included mountain transport.",
          },
          byCar: {
            title: "By Car",
            details:
              "Bangalore → Delhi (2,200 km, 35+ hrs). Not recommended. Fly instead and enjoy the mountains sooner.",
          },
        }}
        featuredTreks={[
          "kedarkantha",
          "chopta-tungnath",
          "hampta-pass",
          "har-ki-dun",
          "kuari-pass",
          "beas-kund",
        ]}
        faqs={[
          {
            question: "Do you organize group departures from Bangalore?",
            answer:
              "Yes — we have monthly group departures exclusively for Bangalore trekkers. Same flight, shared transport, and a ready-made trekking group.",
          },
          {
            question: "What is the best trek for first-timers from Bangalore?",
            answer:
              "Kedarkantha (5 days) is our top pick for Bangalore first-timers. The summit experience is unmatched and the trail is beginner-friendly.",
          },
          {
            question: "How many days off do I need from Bangalore?",
            answer:
              "Minimum 3 days for Chopta/Nag Tibba. 5–6 days for Kedarkantha/Hampta Pass. 8+ days for Char Dham or longer expeditions.",
          },
          {
            question: "Is altitude sickness a concern for Bangalore trekkers?",
            answer:
              "Bangalore is at 920m, so you're better acclimatized than Mumbai/Chennai trekkers. Still, we include acclimatization days in all high-altitude packages.",
          },
          {
            question: "Can I book just the trek without flights?",
            answer:
              "Absolutely — choose 'Trek Only' during booking and arrange your own flights. We'll pick you up from Dehradun/Delhi airport or railway station.",
          },
          {
            question: "What is the best time for Bangalore trekkers to visit?",
            answer:
              "December–March for snow treks (Kedarkantha, Hampta Pass). April–June for green meadows and rhododendrons. September–November for clear post-monsoon views.",
          },
        ]}
      />
    </>
  );
}
