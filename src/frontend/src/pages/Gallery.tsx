import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";
import { useMemo, useState } from "react";
import PhotoUpload from "../components/PhotoUpload";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  trek: string;
  category: "uttarakhand" | "himachal" | "yatras" | "wildlife" | "landscapes";
  state: string;
};

const ROTATIONS = [-2, -1, 0, 1, 2, -3, 3, -1.5, 1.5, -2.5];

const galleryData: GalleryItem[] = [
  // Uttarakhand (10)
  {
    id: 1,
    src: "https://source.unsplash.com/800x600/?kedarkantha,summit,snow,himalaya",
    alt: "Kedarkantha summit covered in snow at sunrise",
    trek: "Kedarkantha Trek",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/800x600/?chopta,tungnath,temple,winter",
    alt: "Tungnath temple in winter snow Uttarakhand Himalayas",
    trek: "Chopta Tungnath",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/800x600/?har-ki-dun,valley,meadow,himalaya",
    alt: "Har Ki Dun valley of gods green meadow Uttarakhand",
    trek: "Har Ki Dun",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/800x600/?valley,flowers,uttarakhand,bloom,himalaya",
    alt: "Valley of Flowers in full bloom Uttarakhand India",
    trek: "Valley of Flowers",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/800x600/?roopkund,lake,himalaya,glacial",
    alt: "Roopkund mystery glacial lake Uttarakhand Himalayas",
    trek: "Roopkund Trek",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/800x600/?brahmatal,lake,frozen,winter,snow",
    alt: "Brahmatal frozen lake in winter Uttarakhand",
    trek: "Brahmatal Trek",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 7,
    src: "https://source.unsplash.com/800x600/?kuari,pass,nanda,devi,himalaya",
    alt: "Nanda Devi peak view from Kuari Pass Uttarakhand",
    trek: "Kuari Pass",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 8,
    src: "https://source.unsplash.com/800x600/?phulara,ridge,himalaya,sunrise",
    alt: "Phulara Ridge sunrise walk Uttarakhand India",
    trek: "Phulara Ridge",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 9,
    src: "https://source.unsplash.com/800x600/?dayara,bugyal,alpine,meadow,himalaya",
    alt: "Dayara Bugyal alpine meadow Uttarakhand",
    trek: "Dayara Bugyal",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  {
    id: 10,
    src: "https://source.unsplash.com/800x600/?nag,tibba,camping,forest,himalaya",
    alt: "Nag Tibba camping forest Uttarakhand hills",
    trek: "Nag Tibba",
    category: "uttarakhand",
    state: "Uttarakhand",
  },
  // Himachal Pradesh (10)
  {
    id: 11,
    src: "https://source.unsplash.com/800x600/?hampta,pass,crossover,snow,spiti",
    alt: "Hampta Pass crossover into Spiti Valley Himachal Pradesh",
    trek: "Hampta Pass",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 12,
    src: "https://source.unsplash.com/800x600/?sar,pass,parvati,valley,kasol",
    alt: "Sar Pass trek through Parvati Valley Himachal Pradesh",
    trek: "Sar Pass",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 13,
    src: "https://source.unsplash.com/800x600/?kheerganga,hot,springs,parvati",
    alt: "Kheerganga hot springs Parvati Valley Himachal Pradesh",
    trek: "Kheerganga",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 14,
    src: "https://source.unsplash.com/800x600/?triund,camping,dharamshala,dhauladhar",
    alt: "Triund camping with Dhauladhar range Himachal Pradesh",
    trek: "Triund",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 15,
    src: "https://source.unsplash.com/800x600/?beas,kund,glacial,lake,manali",
    alt: "Beas Kund glacial lake near Manali Himachal Pradesh",
    trek: "Beas Kund",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 16,
    src: "https://source.unsplash.com/800x600/?spiti,valley,monastery,mountains",
    alt: "Spiti Valley monastery high altitude Himachal Pradesh",
    trek: "Spiti Valley",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 17,
    src: "https://source.unsplash.com/800x600/?kullu,manali,snow,peaks,himalaya",
    alt: "Kullu Manali snow peaks winter Himachal Pradesh",
    trek: "Kullu Valley",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 18,
    src: "https://source.unsplash.com/800x600/?lahaul,spiti,barren,landscape,himalaya",
    alt: "Lahaul Spiti barren dramatic landscape Himachal",
    trek: "Lahaul Valley",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 19,
    src: "https://source.unsplash.com/800x600/?pin,parvati,pass,high,altitude,trek",
    alt: "Pin Parvati Pass high altitude himalayan crossover",
    trek: "Pin Parvati Pass",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  {
    id: 20,
    src: "https://source.unsplash.com/800x600/?chandratal,lake,moonlight,spiti",
    alt: "Chandratal lake moonlight reflection Spiti Himachal Pradesh",
    trek: "Chandratal Lake",
    category: "himachal",
    state: "Himachal Pradesh",
  },
  // Yatras (10)
  {
    id: 21,
    src: "https://source.unsplash.com/800x600/?kedarnath,temple,morning,mist,himalaya",
    alt: "Kedarnath temple at dawn shrouded in mist Uttarakhand",
    trek: "Kedarnath Yatra",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 22,
    src: "https://source.unsplash.com/800x600/?badrinath,temple,garhwal,himalaya",
    alt: "Badrinath temple sacred Garhwal Himalayas Uttarakhand",
    trek: "Badrinath Dham",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 23,
    src: "https://source.unsplash.com/800x600/?gangotri,temple,bhagirathi,glacier",
    alt: "Gangotri temple Bhagirathi river glacier Uttarakhand",
    trek: "Gangotri Dham",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 24,
    src: "https://source.unsplash.com/800x600/?yamunotri,temple,garhwal,himalaya",
    alt: "Yamunotri temple source of Yamuna river Uttarakhand",
    trek: "Yamunotri Dham",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 25,
    src: "https://source.unsplash.com/800x600/?aarti,ganga,haridwar,pilgrims,ritual",
    alt: "Ganga aarti Haridwar evening pilgrimage ritual",
    trek: "Char Dham Yatra",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 26,
    src: "https://source.unsplash.com/800x600/?pilgrims,himalaya,yatra,mountain,shrine",
    alt: "Pilgrims on Himalayan yatra mountain shrine Uttarakhand",
    trek: "Panch Kedar",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 27,
    src: "https://source.unsplash.com/800x600/?triyuginarayan,temple,shiva,wedding",
    alt: "Triyuginarayan temple Lord Shiva wedding site Uttarakhand",
    trek: "Panch Kedar",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 28,
    src: "https://source.unsplash.com/800x600/?gaurikund,pool,pilgrims,kedarnath,base",
    alt: "Gaurikund thermal pool base of Kedarnath yatra",
    trek: "Kedarnath Yatra",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 29,
    src: "https://source.unsplash.com/800x600/?char,dham,yatra,crowd,devotees,himalaya",
    alt: "Char Dham yatra devotees mountain pilgrimage Uttarakhand",
    trek: "Char Dham Yatra",
    category: "yatras",
    state: "Uttarakhand",
  },
  {
    id: 30,
    src: "https://source.unsplash.com/800x600/?mandir,himalaya,mountain,temple,sacred",
    alt: "Sacred Himalayan temple mountain shrine India",
    trek: "Do Dham Yatra",
    category: "yatras",
    state: "Uttarakhand",
  },
  // Wildlife (10)
  {
    id: 31,
    src: "https://source.unsplash.com/800x600/?snow,leopard,himalaya,wildlife",
    alt: "Snow leopard Himalayan wildlife Uttarakhand India",
    trek: "Wildlife Safari",
    category: "wildlife",
    state: "Uttarakhand",
  },
  {
    id: 32,
    src: "https://source.unsplash.com/800x600/?himalayan,monal,pheasant,bird,colorful",
    alt: "Himalayan monal pheasant colorful state bird Uttarakhand",
    trek: "Bird Watching",
    category: "wildlife",
    state: "Uttarakhand",
  },
  {
    id: 33,
    src: "https://source.unsplash.com/800x600/?red,panda,sikkim,himalaya,bamboo",
    alt: "Red panda bamboo forest eastern Himalayas India",
    trek: "Wildlife Encounter",
    category: "wildlife",
    state: "Sikkim",
  },
  {
    id: 34,
    src: "https://source.unsplash.com/800x600/?bharal,blue,sheep,himalaya,cliff",
    alt: "Bharal blue sheep on Himalayan cliff grazing India",
    trek: "High Altitude Wildlife",
    category: "wildlife",
    state: "Himachal Pradesh",
  },
  {
    id: 35,
    src: "https://source.unsplash.com/800x600/?himalayan,deer,forest,musk,deer",
    alt: "Musk deer dense Himalayan forest Uttarakhand India",
    trek: "Forest Trek",
    category: "wildlife",
    state: "Uttarakhand",
  },
  {
    id: 36,
    src: "https://source.unsplash.com/800x600/?golden,eagle,himalaya,raptor,soaring",
    alt: "Golden eagle soaring over Himalayan peaks India",
    trek: "Bird Watching",
    category: "wildlife",
    state: "Himachal Pradesh",
  },
  {
    id: 37,
    src: "https://source.unsplash.com/800x600/?himalayan,fox,wildlife,high,altitude",
    alt: "Himalayan fox high altitude wildlife sighting",
    trek: "Wildlife Trek",
    category: "wildlife",
    state: "Uttarakhand",
  },
  {
    id: 38,
    src: "https://source.unsplash.com/800x600/?ibex,mountain,goat,himalaya,rocky",
    alt: "Himalayan ibex mountain goat rocky terrain India",
    trek: "High Altitude Trek",
    category: "wildlife",
    state: "Himachal Pradesh",
  },
  {
    id: 39,
    src: "https://source.unsplash.com/800x600/?rhododendron,forest,himalaya,flowers,red",
    alt: "Rhododendron forest red flowers Himalayan trek India",
    trek: "Valley Trek",
    category: "wildlife",
    state: "Sikkim",
  },
  {
    id: 40,
    src: "https://source.unsplash.com/800x600/?himalayan,vulture,griffon,soaring,birds",
    alt: "Himalayan griffon vulture soaring high altitude India",
    trek: "Bird Trek",
    category: "wildlife",
    state: "Uttarakhand",
  },
  // Landscapes (10)
  {
    id: 41,
    src: "https://source.unsplash.com/800x600/?himalaya,sunrise,golden,peaks,panorama",
    alt: "Himalayan peaks golden sunrise panoramic view India",
    trek: "Sunrise Trek",
    category: "landscapes",
    state: "Uttarakhand",
  },
  {
    id: 42,
    src: "https://source.unsplash.com/800x600/?milky,way,stars,himalaya,night,camping",
    alt: "Milky Way stars Himalayan sky night camping India",
    trek: "Night Sky Camp",
    category: "landscapes",
    state: "Himachal Pradesh",
  },
  {
    id: 43,
    src: "https://source.unsplash.com/800x600/?himalaya,river,valley,turquoise,water",
    alt: "Turquoise Himalayan river valley pristine waters India",
    trek: "River Valley Trek",
    category: "landscapes",
    state: "Uttarakhand",
  },
  {
    id: 44,
    src: "https://source.unsplash.com/800x600/?himalayan,glacier,ice,blue,crevasse",
    alt: "Himalayan glacier blue ice crevasse high altitude India",
    trek: "Glacier Trek",
    category: "landscapes",
    state: "Uttarakhand",
  },
  {
    id: 45,
    src: "https://source.unsplash.com/800x600/?snow,dunes,himalaya,sand,desert,spiti",
    alt: "Snow dusted sand dunes Spiti Valley Himachal Pradesh",
    trek: "Desert Trek",
    category: "landscapes",
    state: "Himachal Pradesh",
  },
  {
    id: 46,
    src: "https://source.unsplash.com/800x600/?himalaya,monsoon,clouds,forest,mist",
    alt: "Himalayan forest monsoon clouds mist ethereal India",
    trek: "Monsoon Trek",
    category: "landscapes",
    state: "Uttarakhand",
  },
  {
    id: 47,
    src: "https://source.unsplash.com/800x600/?alpine,lake,reflection,himalaya,mountains",
    alt: "Alpine lake mirror reflection Himalayan mountains India",
    trek: "Lake Trek",
    category: "landscapes",
    state: "Uttarakhand",
  },
  {
    id: 48,
    src: "https://source.unsplash.com/800x600/?himalaya,autumn,colors,forest,trek,fall",
    alt: "Himalayan forest autumn colors fall foliage India trek",
    trek: "Autumn Trek",
    category: "landscapes",
    state: "Himachal Pradesh",
  },
  {
    id: 49,
    src: "https://source.unsplash.com/800x600/?himalayan,canyon,gorge,river,narrow",
    alt: "Himalayan canyon gorge narrow river India trekking",
    trek: "Canyon Trek",
    category: "landscapes",
    state: "Uttarakhand",
  },
  {
    id: 50,
    src: "https://source.unsplash.com/800x600/?himalaya,winter,snow,landscape,pristine",
    alt: "Himalayan winter snow pristine white landscape India",
    trek: "Winter Trek",
    category: "landscapes",
    state: "Uttarakhand",
  },
];

type Category =
  | "all"
  | "uttarakhand"
  | "himachal"
  | "yatras"
  | "wildlife"
  | "landscapes"
  | "community";

const FILTER_LABELS: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "himachal", label: "Himachal Pradesh" },
  { value: "yatras", label: "Yatras" },
  { value: "wildlife", label: "Wildlife" },
  { value: "landscapes", label: "Landscapes" },
  { value: "community", label: "Community" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? galleryData
        : galleryData.filter((i) => i.category === activeFilter),
    [activeFilter],
  );

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : 0,
    );
  const goNext = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0));

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="min-h-screen" data-ocid="gallery.page">
      {/* Hero */}
      <div
        className="pt-28 pb-16 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A2E1A 0%, #145C38 60%, #1A7A4C 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 bg-white/10 text-white/90 uppercase"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Visual Stories
          </span>
          <h1
            className="font-display text-5xl md:text-6xl font-bold text-white mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            }}
          >
            Himalayas in Pictures
          </h1>
          <p
            className="text-white/75 text-lg mt-3 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            50 real moments captured on our trails — from sacred temples to snow
            summits
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center justify-center">
          {FILTER_LABELS.map((f) => (
            <button
              key={f.value}
              type="button"
              data-ocid={`gallery.filter.${f.value}`}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeFilter === f.value
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {f.label}
              {f.value !== "all" && (
                <span
                  className={`ml-1.5 text-xs ${activeFilter === f.value ? "text-white/70" : "text-muted-foreground"}`}
                >
                  ({galleryData.filter((i) => i.category === f.value).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Community Photo Upload CTA */}
        <div className="bg-gradient-to-r from-[#1A7A4C] to-[#0f5c38] rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📸</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">
                Trekked with Global Trek?
              </h3>
              <p className="text-white/80 text-sm">
                Share your journey with 12,000+ fellow trekkers. Your photos
                inspire the next adventure.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowUpload(true)}
            data-ocid="gallery.upload_button"
            className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl whitespace-nowrap transition-colors"
          >
            Upload Your Photos
          </button>
        </div>
        <p
          className="text-sm text-muted-foreground mb-6 text-center"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filtered.length}
          </span>{" "}
          photos
          {activeFilter !== "all" && (
            <>
              {" "}
              in{" "}
              <span className="font-semibold text-primary">
                {FILTER_LABELS.find((f) => f.value === activeFilter)?.label}
              </span>
            </>
          )}
        </p>

        <div className="columns-2 md:columns-3" style={{ columnGap: "20px" }}>
          {filtered.map((item, idx) => {
            const rotation = ROTATIONS[item.id % ROTATIONS.length];
            return (
              <button
                type="button"
                key={item.id}
                className="break-inside-avoid mb-5 bg-white cursor-pointer text-left w-full"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  boxShadow:
                    "4px 4px 16px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.12)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  padding: "8px 8px 28px 8px",
                  borderRadius: "2px",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "rotate(0deg) scale(1.05)";
                  el.style.boxShadow =
                    "8px 12px 32px rgba(20,92,56,0.30), 0 4px 8px rgba(0,0,0,0.18)";
                  el.style.zIndex = "10";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = `rotate(${rotation}deg)`;
                  el.style.boxShadow =
                    "4px 4px 16px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.12)";
                  el.style.zIndex = "auto";
                }}
                onClick={() => openLightbox(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
                data-ocid={`gallery.item.${idx + 1}`}
                tabIndex={0}
                aria-label={`View photo: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover block"
                  style={{
                    aspectRatio: idx % 3 === 1 ? "4/5" : "4/3",
                    display: "block",
                  }}
                  loading="lazy"
                />
                <p
                  className="text-center text-xs mt-2 px-1 leading-tight"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#6c757d",
                  }}
                >
                  {item.trek}
                </p>
              </button>
            );
          })}
        </div>

        {/* Community Spotlight */}
        <section className="mt-16">
          <h2
            className="text-3xl font-bold text-foreground mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            🌄 Community Photos
          </h2>
          <p className="text-muted-foreground mb-8">
            Real photos from real trekkers — unfiltered, unedited,
            unforgettable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="col-span-full text-center py-12 bg-muted/40 rounded-2xl">
              <span className="text-4xl mb-4 block">📷</span>
              <p className="text-foreground font-medium">
                Be the first to share your trek photos!
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Photos appear here after a quick review (within 24 hours).
              </p>
              <button
                type="button"
                onClick={() => setShowUpload(true)}
                data-ocid="gallery.community_upload_button"
                className="mt-4 bg-[#1A7A4C] text-white px-6 py-2 rounded-xl hover:bg-[#0f5c38] transition-colors"
              >
                Share Your Photos
              </button>
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-border bg-card shadow-sm">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
            >
              <Instagram size={20} className="text-white" />
            </div>
            <div className="text-left">
              <p
                className="text-sm font-semibold text-foreground"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Follow @GlobalTrek on Instagram
              </p>
              <p
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Daily Himalayan inspiration & trek stories
              </p>
            </div>
            <a
              href="https://instagram.com/globaltrek.in"
              target="_blank"
              rel="noreferrer"
              data-ocid="gallery.instagram_link"
              className="ml-4 px-5 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Follow
            </a>
          </div>
        </div>
      </div>

      {showUpload && (
        <PhotoUpload
          trekSlug="community"
          trekName="Community Gallery"
          onClose={() => setShowUpload(false)}
        />
      )}

      {/* Lightbox Dialog */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent
          className="max-w-4xl w-full p-0 overflow-hidden bg-background border-0"
          style={{ borderRadius: "16px" }}
          data-ocid="gallery.dialog"
        >
          {currentItem && (
            <div className="relative flex flex-col">
              {/* Close */}
              <button
                type="button"
                onClick={closeLightbox}
                data-ocid="gallery.close_button"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>

              {/* Counter */}
              <div
                className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {(lightboxIndex ?? 0) + 1} / {filtered.length}
              </div>

              {/* Image */}
              <div
                className="relative bg-black flex items-center justify-center"
                style={{ minHeight: "400px" }}
              >
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="w-full object-contain"
                  style={{ maxHeight: "70vh" }}
                />
              </div>

              {/* Info + Nav */}
              <div className="flex items-center justify-between px-6 py-4 bg-card">
                <button
                  type="button"
                  onClick={goPrev}
                  data-ocid="gallery.prev_button"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-all flex-shrink-0"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} className="text-foreground" />
                </button>

                <div className="text-center flex-1 mx-4 min-w-0">
                  <p
                    className="font-semibold text-foreground text-base"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {currentItem.trek}
                  </p>
                  <p
                    className="text-xs text-muted-foreground mt-0.5 truncate"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {currentItem.alt}
                  </p>
                  <span
                    className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
                    style={{
                      background: "#145C38",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {currentItem.state}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  data-ocid="gallery.next_button"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-all flex-shrink-0"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} className="text-foreground" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
