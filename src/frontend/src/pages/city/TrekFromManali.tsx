import CityTrekPage from "@/pages/CityTrekPage";
import { SEOHead } from "../../components/SEOHead";
import { getCityTrekSEO } from "../../utils/seoUtils";

export default function TrekFromManali() {
  const seo = getCityTrekSEO("manali", "Manali");
  return (
    <>
      <SEOHead {...seo} />
      <CityTrekPage
        cityName="Manali"
        stateName="Himachal Pradesh"
        metaTitle="Treks from Manali | Hampta Pass, Beas Kund & More 2026 | Global Trek"
        metaDescription="Manali is the adventure capital of Himachal Pradesh. Hampta Pass, Beas Kund, Bhrigu Lake, and high-altitude expeditions start here. Expert-guided packages."
        geoRegion="IN-HP"
        geoPlacename="Manali, Himachal Pradesh, India"
        geoPosition="32.2396;77.1887"
        heroTagline="The adventure capital of Himachal — where every pass leads to wonder"
        heroDescription="Manali sits in the Kullu Valley, surrounded by snow-capped peaks and pine forests. It's the perfect base for Himachal's most iconic treks and high-altitude adventures."
        whyTrekPoints={[
          "Gateway to Hampta Pass — the most dramatic crossover trek in India",
          "Easy access to Lahaul, Spiti, and Ladakh regions",
          "Solang Valley and Rohtang Pass for acclimatization day trips",
          "Thriving adventure sports scene — paragliding, rafting, skiing",
          "Old Manali charm — cafes, music, and backpacker culture",
          "Well-connected by road from Delhi, Chandigarh, and Shimla",
        ]}
        howToReach={{
          byTrain: {
            title: "By Train",
            details:
              "Nearest major station: Chandigarh (310 km) or Pathankot (290 km). From there, taxi or bus to Manali (8–10 hrs). No direct train to Manali.",
          },
          byFlight: {
            title: "By Flight",
            details:
              "Kullu-Manali Airport (Bhuntar) is 50 km from Manali. Limited flights from Delhi (1 hr). More reliable to fly to Chandigarh and drive.",
          },
          byBus: {
            title: "By Bus",
            details:
              "Overnight Volvo buses from Delhi (12–14 hrs) and Chandigarh (8 hrs). HRTC and private operators run regular services. Book in advance during peak season.",
          },
          byCar: {
            title: "By Car",
            details:
              "Delhi → Manali (540 km, 10–12 hrs) via NH44. Chandigarh → Manali (310 km, 7–8 hrs). Stunning mountain drive, especially after Mandi.",
          },
        }}
        featuredTreks={[
          "hampta-pass",
          "beas-kund",
          "sar-pass",
          "kheerganga",
          "triund",
        ]}
        faqs={[
          {
            question: "What is the best trek for beginners from Manali?",
            answer:
              "Beas Kund (3 days) and Bhrigu Lake (2 days) are perfect beginner treks from Manali. Hampta Pass is moderate and our most popular crossover trek.",
          },
          {
            question: "Can I do Hampta Pass without prior trekking experience?",
            answer:
              "Yes — Hampta Pass is rated Easy to Moderate. Basic fitness (walking 8–10 km) is sufficient. Our guides provide full support at the pass crossing.",
          },
          {
            question: "When is the best time to trek from Manali?",
            answer:
              "June–September for Hampta Pass (crosses to Spiti). May–June and September–October for other treks. Avoid July–August monsoon for high passes.",
          },
          {
            question: "Is Rohtang Pass open during trek season?",
            answer:
              "Rohtang opens in May–June and closes by October. For Hampta Pass, we don't need Rohtang — our route goes via Jobra and Balu Ka Gera.",
          },
          {
            question: "Can I combine Manali with Spiti Valley?",
            answer:
              "Yes! Hampta Pass ends in Spiti (Chhatru). We offer 7–10 day extensions to Chandratal Lake, Kaza, and Key Monastery.",
          },
          {
            question: "Do you provide transport from Manali bus stand?",
            answer:
              "Yes — all our Manali packages include pickup from Manali Bus Stand or your hotel. Jobra (Hampta Pass start) is a 2-hour drive from Manali.",
          },
        ]}
      />
    </>
  );
}
