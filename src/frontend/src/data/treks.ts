import type { Trek } from "@/types/trek";

export const treksData: Trek[] = [
  {
    id: "chopta-tungnath",
    name: "Chopta Tungnath Chandrashila",
    region: "Rudraprayag, Uttarakhand",
    maxAltitude: "13,123 ft (4,000m)",
    distance: "18 km total",
    duration: "3 Days / 2 Nights",
    difficulty: "Easy to Moderate",
    bestTime: "March–April, September–November",
    startPoint: "Chopta (8,500 ft)",
    nearestRailhead: "Rishikesh (210 km)",
    nearestAirport: "Jolly Grant, Dehradun (231 km)",
    groupSize: "6–12",
    ageGroup: "10–65 years",
    price: "₹6,500",
    imageQuery: "chopta,himalaya,snow",
    description:
      "The 'Mini Switzerland of Uttarakhand' — Chopta meadow leads to Tungnath, the world's highest Shiva temple, and Chandrashila Peak for 360° panoramic views of Himalayan giants.",
    overview:
      "Chopta, known as the 'Mini Switzerland of Uttarakhand,' is a hidden meadow in the Rudraprayag district lying at 2,680 meters, surrounded by dense deodar and rhododendron forests. From here, the trail ascends to Tungnath — the highest Shiva temple in the world, perched at 3,680 meters, one of the sacred Panch Kedar temples. According to mythology, the arms (bahu) of Lord Shiva appeared here after the Mahabharata war. Beyond Tungnath, a further climb of 1.5 km leads to Chandrashila Peak (4,000m) — the 'Moon Rock' — offering a 360-degree panoramic view of Himalayan giants: Nanda Devi, Trishul, Kedarnath, Chaukhamba, and Bandarpunch.",
    itinerary: [
      {
        day: 1,
        title: "Rishikesh → Chopta",
        description:
          "Drive 210km through Devprayag, Rudraprayag, Ukhimath. Arrive at Chopta meadow at 8,500 ft. Camp setup, briefing, bonfire dinner.",
        highlights: [
          "Devprayag sangam",
          "Mountain driving",
          "First Himalayan sunset",
        ],
        startAltitude: 1200,
        endAltitude: 8500,
        altitudeGain: 7300,
        maxAltitude: 8500,
        distanceKm: 210,
        walkingHours: 0,
        duration: "8-9 hours drive",
        difficulty: "easy",
        dayDifficulty: "Easy",
        terrain:
          "Mountain road through Devprayag, Rudraprayag confluence towns, Kedarnath Bird Sanctuary",
        campsiteElevation: 8500,
        campsite: {
          name: "Chopta Meadow Camp",
          altitude: 8500,
          amenities: [
            "Swiss tents",
            "Dining tent",
            "Bonfire area",
            "Bio-toilets",
            "Charging points",
          ],
        },
        mealDetail: {
          breakfast: "At home/hotel in Rishikesh",
          lunch: "Dhaba at Rudraprayag or Ukhimath — dal, rice, roti, papad",
          dinner:
            "Chopta camp dinner: Rajma chawal, roti, seasonal sabzi, halwa dessert",
          snacks: "Tea and biscuits en route at Rudraprayag",
        },
        waterSources: [
          "Alaknanda River at Rudraprayag",
          "Town supply at Ukhimath",
        ],
        emergencyExit:
          "Return to Rishikesh via same road — AIIMS Rishikesh 190km",
        photographyHighlights: [
          "Devprayag Sangam — confluence of Bhagirathi and Alaknanda",
          "Chopta meadow first sunset panorama",
          "Kedarnath Bird Sanctuary wildlife en route",
        ],
        weatherPattern:
          "Clear mountain skies in Oct–Nov; possibility of afternoon showers in monsoon (Jul–Sep)",
        wildlife: [
          "Monal pheasant near Chopta",
          "Himalayan black bear signs",
          "Barking deer",
        ],
        culturalNotes:
          "Drive passes the Kedarnath Bird Sanctuary — habitat of 200+ bird species; Ukhimath is the winter seat of the Kedarnath deity",
        sunriseTime: "6:20 AM",
        sunsetTime: "6:45 PM",
      },
      {
        day: 2,
        title: "Chopta → Tungnath → Chandrashila → Chopta",
        description:
          "Pre-dawn start at 4 AM. 3.5km stone trail through ancient rhododendron and oak forests to Tungnath Temple (12,073 ft) — the world's highest Shiva temple. Then 1.5km rocky ascent to Chandrashila Summit (13,123 ft). 360° panorama: Chaukhamba, Trishul, Nanda Devi, Kedarnath Peak, Bandarpunch, Neelkanth. Return to Chopta camp by afternoon.",
        highlights: [
          "Tungnath — world's highest Shiva temple",
          "360° summit panorama",
          "High-altitude sunrise",
        ],
        startAltitude: 8500,
        endAltitude: 8500,
        altitudeGain: 4623,
        maxAltitude: 13123,
        distanceKm: 10,
        walkingHours: 7,
        duration: "7-8 hours total",
        difficulty: "moderate",
        dayDifficulty: "Moderate",
        terrain:
          "Ancient stone-paved trail through dense rhododendron and oak forest; rocky exposed ridge above tree line; boulder scramble to summit",
        campsiteElevation: 8500,
        campsite: {
          name: "Chopta Meadow Camp (return)",
          altitude: 8500,
          amenities: [
            "Swiss tents",
            "Dining tent",
            "Bonfire area",
            "Bio-toilets",
          ],
        },
        mealDetail: {
          breakfast:
            "4 AM summit push: hot porridge, boiled eggs, dry fruits, chai",
          lunch:
            "Packed trail lunch at Tungnath or Chandrashila base — sandwiches, energy bars, nuts",
          dinner:
            "Celebratory camp dinner: Paneer makhani, jeera rice, roti, kheer dessert",
          snacks:
            "Chocolate, dates on summit push; hot soup at Tungnath tea stalls (May–Nov)",
        },
        waterSources: [
          "Chopta stream before departure (fill up)",
          "No reliable water above 10,000ft — carry 2L from camp",
          "Tungnath temple dhara (seasonal)",
        ],
        emergencyExit:
          "Return to Chopta village on stone trail (1.5 hours from Tungnath); road to AIIMS Rishikesh 190km",
        photographyHighlights: [
          "Rhododendron forest tunnel in bloom (Mar–Apr) — crimson flowers overhead",
          "Tungnath temple gopuram against snow peaks — iconic shot",
          "360° panorama from Chandrashila: Nanda Devi, Trishul, Kedarnath, Chaukhamba simultaneously",
          "Sunrise over the Garhwal Himalayan arc",
          "Moon Rock (Chandrashila) silhouette at golden hour",
        ],
        weatherPattern:
          "Summit clears 4–8 AM; afternoon clouds typical; −2°C at Chandrashila in winter; windchill possible on exposed ridge",
        wildlife: [
          "Himalayan monal pheasant (state bird) — common on forest sections",
          "Himalayan griffon vulture overhead",
          "Yellow-throated marten sightings",
          "Snow leopard signs (rare, above 12,000ft)",
        ],
        culturalNotes:
          "Tungnath is the 3rd of the Panch Kedar, open May–Nov; the 8th-century stone temple is attributed to Adi Shankaracharya. Chandrashila is where Lord Rama is said to have meditated after the Lanka war. Winter deity moves to Ukhimath.",
        acclimatizationNotes:
          "Maximum altitude 13,123ft; no AMS risk for healthy individuals with gradual ascent. SpO2 checks before summit departure.",
        sunriseTime: "6:15 AM (spectacular from Chandrashila)",
        sunsetTime: "6:30 PM",
      },
      {
        day: 3,
        title: "Deoria Tal → Rishikesh",
        description:
          "Optional morning trek to Deoria Tal — emerald lake reflecting Chaukhamba massif. Drive back to Rishikesh.",
        highlights: ["Deoria Tal mirror reflection", "Rhododendron forest"],
        startAltitude: 8500,
        endAltitude: 1200,
        altitudeGain: -7300,
        maxAltitude: 8000,
        distanceKm: 215,
        walkingHours: 2,
        duration: "2hr trek + 8hr drive",
        difficulty: "easy",
        dayDifficulty: "Easy",
        terrain:
          "Gentle forest trail to Deoria Tal; mountain road descent to Rishikesh",
        campsiteElevation: 1200,
        campsite: {
          name: "Rishikesh / Home",
          altitude: 1200,
          amenities: ["Hotel/home"],
        },
        mealDetail: {
          breakfast:
            "Chopta camp: Poha, banana, boiled eggs, chai before departure",
          lunch: "Dhaba at Rudraprayag on return drive",
          dinner: "Home or restaurant in Rishikesh",
          snacks: "En route at Ukhimath",
        },
        waterSources: ["Deoria Tal lake", "Roadside dhabas on return"],
        emergencyExit: "N/A — road access throughout",
        photographyHighlights: [
          "Deoria Tal morning mirror reflection of Chaukhamba massif — one of India's most photographed shots",
          "Dawn fog in Chopta meadow",
        ],
        weatherPattern:
          "Clear mornings at Deoria Tal; warmer at lower altitudes",
        wildlife: [
          "Himalayan black bear near Deoria Tal (rare)",
          "Barking deer",
          "Forest birds",
        ],
        culturalNotes:
          "Deoria Tal — mentioned in the Mahabharata as the lake where the Yaksha tested the Pandavas. The Chaukhamba reflection at dawn is a sacred sight.",
        sunriseTime: "6:20 AM",
        sunsetTime: "7:00 PM",
      },
    ],
    inclusions: [
      "Rishikesh pickup & drop",
      "All camps (2 nights)",
      "All meals Day 1 dinner to Day 3 lunch",
      "Expert trek guide",
      "Forest permits",
      "First aid kit",
      "Oxygen cylinder (emergency)",
      "Porters",
    ],
    exclusions: [
      "Personal travel insurance",
      "Tips",
      "Personal expenses",
      "Mule/horse rides",
    ],
    packingList: [
      "Trekking shoes (waterproof)",
      "Thermal inner wear (top + bottom)",
      "Fleece jacket",
      "Down jacket",
      "Rain poncho",
      "Trekking pants (2)",
      "Moisture-wicking t-shirts (3)",
      "Woollen cap/balaclava",
      "Gloves",
      "UV-protection sunglasses",
      "Sunscreen SPF50+",
      "Lip balm",
      "Water bottle (2L)",
      "Energy bars",
      "Trekking pole",
      "Headlamp + extra batteries",
      "Personal ID",
      "Cash (no ATMs beyond Ukhimath)",
    ],
    faqs: [
      {
        question: "Is this trek suitable for beginners?",
        answer:
          "Yes — one of India's most beginner-friendly high-altitude treks. The stone path to Tungnath is well-maintained.",
      },
      {
        question: "Can I visit Tungnath Temple in winter?",
        answer:
          "The temple is open May to November. In winter it shifts to Ukhimath village.",
      },
      {
        question: "What is the best month for snow?",
        answer:
          "January–February has deep snow. March has snow + blooming rhododendrons — magical combination.",
      },
      {
        question: "Is Chandrashila the same as Tungnath?",
        answer:
          "No. Tungnath is the temple at 3,680m. Chandrashila is the summit peak at 4,000m, 1.5 km further.",
      },
      {
        question: "Are mules available on the trail?",
        answer:
          "Yes, mule services available from Chopta to Tungnath (₹300–500 extra).",
      },
      {
        question: "Is altitude sickness a risk?",
        answer:
          "Minimal, given the gradual ascent. Acclimatization at Chopta on Day 1 helps significantly.",
      },
      {
        question: "What connectivity is available?",
        answer:
          "BSNL has some connectivity in Chopta. Beyond Tungnath, no signal.",
      },
      {
        question: "Can senior citizens do this?",
        answer:
          "Yes — trekkers up to 65 years regularly complete this. Moderate fitness required.",
      },
    ],
    relatedTrekIds: ["kedarkantha", "kuari-pass", "har-ki-dun"],
  },
  {
    id: "har-ki-dun",
    name: "Har Ki Dun — Valley of Gods",
    region: "Uttarkashi, Uttarakhand",
    maxAltitude: "11,675 ft (3,566m)",
    distance: "47 km round trip",
    duration: "6 Days / 5 Nights",
    difficulty: "Easy to Moderate",
    bestTime: "April–June, September–November",
    startPoint: "Sankri Village (6,400 ft)",
    nearestRailhead: "Dehradun (200 km)",
    nearestAirport: "Jolly Grant, Dehradun",
    groupSize: "6–15",
    ageGroup: "12–60 years",
    price: "₹9,500",
    imageQuery: "valley,himalaya,meadow",
    description:
      "Hidden in Govind National Park, Har Ki Dun — 'Valley of Gods' — is a mythologically rich horseshoe valley believed to be the Pandavas' route to heaven, flanked by Swargarohini (6,252m) and medieval Garhwali villages.",
    overview:
      "Har Ki Dun — literally 'Valley of Gods' in old Sanskrit — is one of the most mythologically rich trekking valleys in the Himalayas. Hidden deep in the Govind National Park of Uttarkashi district, this ancient valley is believed to be the route the Pandavas took to heaven (Swargarohini — the heavenly staircase — is the prominent peak here). Traditional Garhwali villages of Osla and Gangaad, with their centuries-old wooden temples and slate-roofed homes, line the trail. The Supin River accompanies you throughout, through thick forests of oak, pine, walnut, and rhododendron.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun → Sankri",
        description:
          "Drive 200km via Mussoorie, Purola, Mori, Netwar along the dramatic Tons River gorge. Arrive Sankri (6,400 ft). Briefing and dinner.",
        highlights: [
          "Tons River gorge",
          "Mountain scenery",
          "Guesthouse at Sankri",
        ],
      },
      {
        day: 2,
        title: "Sankri → Cheludgad Camp",
        description:
          "Drive to Dharkot then 5km trek through dense mixed forest and meadows. Cross streams to Cheludgad camp (8,158 ft).",
        highlights: [
          "Dense forest trail",
          "Stream crossings",
          "Stargazing at camp",
        ],
      },
      {
        day: 3,
        title: "Cheludgad → Kalkatiyadhar Camp",
        description:
          "12km trek through Gangaad village (traditional wooden architecture), open ridgelines at Kalkatiyadhar with first Swargarohini views.",
        highlights: [
          "Gangaad village architecture",
          "Swargarohini peak views",
          "Waterfall views",
        ],
      },
      {
        day: 4,
        title: "Har Ki Dun Valley + Maninda Tal",
        description:
          "Trek to the bowl-shaped Har Ki Dun Valley — vast, green, divine. Explore Maninda glacial lake, Jaundhar Glacier viewpoint. Swargarohini dominates.",
        highlights: [
          "Har Ki Dun Valley bowl",
          "Maninda glacial lake",
          "Jaundhar Glacier viewpoint",
        ],
      },
      {
        day: 5,
        title: "Har Ki Dun → Osla → Cheludgad",
        description:
          "Trek through Osla village — a living museum with 500-year-old Duryodhana temple. Riverside trails along Supin River.",
        highlights: [
          "Osla Duryodhana temple",
          "Supin River trails",
          "Garhwali culture",
        ],
      },
      {
        day: 6,
        title: "Cheludgad → Sankri → Dehradun",
        description:
          "Final 6km descent to Sankri. Drive back to Dehradun via Tons River valley.",
        highlights: ["Tons River valley drive", "Journey completion"],
      },
    ],
    inclusions: [
      "Dehradun pickup & drop",
      "5 nights accommodation (camps/guesthouses)",
      "All meals Day 1 dinner to Day 6 lunch",
      "Certified trek leader",
      "Forest/National Park permits",
      "Porter (1 for every 2 trekkers)",
      "First aid",
      "Emergency evacuation support",
    ],
    exclusions: [
      "Personal travel insurance",
      "Tips",
      "Personal expenses",
      "Camera fees (₹500)",
    ],
    packingList: [
      "Trekking shoes (waterproof)",
      "Gaiters",
      "Thermal layers",
      "Down jacket",
      "Rain gear",
      "Trekking pants",
      "Trekking poles",
      "Headlamp",
      "Water bottles (2L+)",
      "Water purification tablets",
      "Energy bars",
      "Personal first aid",
      "Personal medication",
      "Sunscreen SPF50+",
      "Sunglasses",
      "Personal ID",
      "Cash (Purola is last ATM)",
    ],
    faqs: [
      {
        question: "Why is there a Duryodhana temple at Osla?",
        answer:
          "Local legend says Duryodhana was once kind to this community. The wooden temple is 500+ years old.",
      },
      {
        question: "Is Har Ki Dun good for first-time trekkers?",
        answer:
          "Yes — gradual altitude gain, good trails. Longer distance but manageable daily segments.",
      },
      {
        question: "Camping or guesthouse?",
        answer: "Mix — guesthouses at Sankri and Osla, tents at higher camps.",
      },
      {
        question: "Best time for wildflowers?",
        answer:
          "May–June for rhododendrons and Himalayan wildflowers in full bloom.",
      },
      {
        question: "Is the Jaundhar Glacier accessible?",
        answer:
          "Viewpoint is accessible; glacier base requires additional acclimatization day.",
      },
      {
        question: "What wildlife might I see?",
        answer:
          "Himalayan griffon, monal pheasant, musk deer, Himalayan black bear (rare), snow leopard signs.",
      },
      {
        question: "Last ATM before trek?",
        answer: "Purola — carry sufficient cash. No ATMs in Sankri or beyond.",
      },
      {
        question: "Can I extend to Ruinsara Lake?",
        answer:
          "Yes — 3km extension from Har Ki Dun to Ruinsara Lake. Extra day required.",
      },
    ],
    relatedTrekIds: ["phulara-ridge", "kedarkantha", "chopta-tungnath"],
    heroImages: [
      "https://source.unsplash.com/1600x900/?har-ki-dun,valley,himalaya",
      "https://source.unsplash.com/1600x900/?swargarohini,peak,snow",
      "https://source.unsplash.com/1600x900/?village,uttarakhand,mountains",
      "https://source.unsplash.com/1600x900/?morinda-tal,lake,reflection",
      "https://source.unsplash.com/1600x900/?forest,trek,himachal",
      "https://source.unsplash.com/1600x900/?meadow,camp,himalaya",
    ],
    quickFacts: {
      maxAltitudeZone:
        "Sub-Alpine Zone (11,600 ft max) — comfortable for families",
      snowConditions:
        "Snow Nov–Apr at valley floor; clear May–Oct; autumn colours Oct",
      trailType:
        "Riverbed trail, dense oak-deodar forest, traditional stone villages, open valley floor",
      waterAvailability:
        "Tamsa River alongside entire trail; abundant streams; excellent water quality",
      phoneNetwork: "BSNL works till Osla village; no signal in valley proper",
      permits: "Forest permit ₹150 included; Govind Wildlife Sanctuary permit",
      fitness: "Moderate — jog 5km in 50 min; suitable for active families",
      minAge: 8,
      maxAge: 70,
    },
    safetyProtocol: {
      guideInfo: {
        name: "Narender Singh Rawat",
        certification:
          "NIM Certified Basic Mountaineering Course, First Aid & Wilderness Rescue",
        experience: "11 years, 200+ Har Ki Dun expeditions",
        languages: ["Hindi", "English", "Garhwali"],
      },
      satellitePhone: {
        model: "Garmin inReach Mini 2",
        coverage: "Global satellite coverage — active on all trail days",
      },
      helicopterLandingZone: {
        location: "Osla village clearing",
        coordinates: "31.0723°N, 78.3456°E",
        nearestTo: "Osla village, 3 km from Har Ki Dun valley",
      },
      nearestHospital: {
        name: "PHC Bangan (Primary Health Centre)",
        distance: "28 km from Sankri",
        phone: "+91-1371-234567",
        address: "Bangan, Uttarkashi District, Uttarakhand",
        emergencyAvailable: false,
      },
      oxygenCylinders: {
        count: 2,
        capacity: "5L medical grade",
        locations: ["Har Ki Dun camp", "Guide carry"],
      },
      pulseOximeter: true,
      firstAidKit: {
        medications: [
          "Diamox 250mg",
          "Ibuprofen",
          "ORS sachets",
          "Antihistamines",
          "Antacids",
        ],
        equipment: [
          "Pulse oximeter",
          "Trauma bandages",
          "SAM splint",
          "Thermal blanket",
          "Stretcher",
        ],
      },
      amsProtocol: {
        stage1: {
          symptoms: ["Mild headache", "Mild nausea", "SpO2 90–92%"],
          treatment:
            "Rest at same altitude, 3L water, 250mg Diamox, monitor for 4 hours",
        },
        stage2: {
          symptoms: ["Persistent headache", "Vomiting", "SpO2 88–90%"],
          treatment:
            "Descend 500–1000ft, oxygen supplementation, contact base team",
        },
        stage3: {
          symptoms: ["Confusion", "Ataxia", "SpO2 below 85%"],
          treatment:
            "Emergency descent by stretcher/porter, oxygen continuously, helicopter from Osla LZ",
        },
      },
      evacuationProcedure:
        "Trail descent to Sankri (4–6 hours), vehicle to Bangan PHC or Uttarkashi hospital. Helicopter from Osla clearing for critical cases.",
      checkInFrequency:
        "2x daily health checks — morning and evening at every camp",
      teamRatio: "1 guide per 8 trekkers",
      emergencyContacts: [
        {
          name: "Narender Singh Rawat",
          role: "Lead Guide",
          phone: "+91-94123-67891",
        },
        {
          name: "Global Trek Sankri Base",
          role: "Base Support",
          phone: "+91-89456-78901",
        },
        {
          name: "Uttarkashi District Emergency",
          role: "Emergency Services",
          phone: "01374-222715",
        },
      ],
    },
    detailedReviews: [
      {
        id: "hkd-r1",
        author: "Suresh Kumar Reddy",
        rating: 5,
        dimensions: {
          food: 4.5,
          guideExpertise: 5,
          safety: 5,
          valueForMoney: 5,
          scenery: 5,
          overall: 5,
        },
        title: "Valley of the Gods — lives up to its legendary name",
        comment:
          "Har Ki Dun — 'Valley of the Gods' — is where the Pandavas were said to have ascended to heaven. Trekking through Osla village with its ancient wooden temple of Duryodhana (yes — they worship him here!) was a history lesson you can't read in books. The valley itself is a natural amphitheatre: Swargarohini I, II, III forming an unbroken wall of ice and rock. Woke at 4 AM to see Swargarohini at sunrise — orange and pink glaciers against a black sky. Guide team had deep local knowledge — they introduced us to the village headman. Exceptional experience.",
        date: "2024-10-18",
        month: 10,
        groupType: "friends",
        verified: true,
        helpful: 44,
        tripYear: 2024,
      },
      {
        id: "hkd-r2",
        author: "Lakshmi Nair",
        rating: 5,
        dimensions: {
          food: 5,
          guideExpertise: 5,
          safety: 5,
          valueForMoney: 5,
          scenery: 5,
          overall: 5,
        },
        title: "Took my 65-year-old parents — best decision ever",
        comment:
          "My parents had always dreamed of a Himalayan trek. At 65 and 62, I was nervous. Har Ki Dun was the perfect choice. The gradual altitude gain (never above 11,600ft), the beautiful riverside trail, the traditional Osla village — it was everything they dreamed of without the danger. Guide Narender was incredible with senior trekkers — patient, encouraging, never rushed. Kitchen team provided extra warm soup. Morinda Tal lake reflection of Swargarohini was beyond description. My mother cried. This company gave my parents their dream.",
        date: "2024-05-22",
        month: 5,
        groupType: "family",
        verified: true,
        helpful: 89,
        tripYear: 2024,
      },
      {
        id: "hkd-r3",
        author: "Rajesh Tiwari",
        rating: 4,
        dimensions: {
          food: 4,
          guideExpertise: 4.5,
          safety: 5,
          valueForMoney: 4.5,
          scenery: 5,
          overall: 4.5,
        },
        title: "Best offbeat trek in Uttarakhand — fewer crowds, maximum soul",
        comment:
          "Most people choose Kedarkantha or Roopkund. Har Ki Dun is the better-kept secret. The trail follows the Tamsa River for most of the route — you're walking alongside a glacial stream through a forest cathedral of oak and deodar. The Osla village homestay option was a bonus I didn't expect — local family, homemade roti and dal, stories by firelight. The valley at night is profoundly quiet — no sounds except the wind and water. Morinda Tal on Day 4 was extraordinary — perfect mirror reflection.",
        date: "2023-04-12",
        month: 4,
        groupType: "solo",
        verified: true,
        helpful: 33,
        tripYear: 2023,
      },
    ],
    batchSlots: [
      {
        id: "hkd-b1",
        startDate: "2026-06-10",
        endDate: "2026-06-16",
        totalSeats: 14,
        bookedSeats: 5,
        availableSeats: 9,
        price: 11499,
        status: "available",
        discounts: { group5Plus: 10, earlyBird: 8 },
        meetingPoint: "Dehradun Railway Station at 7:00 AM",
        guide: "Narender Singh Rawat",
      },
      {
        id: "hkd-b2",
        startDate: "2026-08-05",
        endDate: "2026-08-11",
        totalSeats: 14,
        bookedSeats: 11,
        availableSeats: 3,
        price: 11499,
        status: "limited",
        meetingPoint: "Dehradun Railway Station at 7:00 AM",
        guide: "Narender Singh Rawat",
      },
      {
        id: "hkd-b3",
        startDate: "2026-09-15",
        endDate: "2026-09-21",
        totalSeats: 14,
        bookedSeats: 6,
        availableSeats: 8,
        price: 11499,
        status: "available",
        discounts: { group5Plus: 10, earlyBird: 0 },
        meetingPoint: "Dehradun Railway Station at 7:00 AM",
        guide: "Vikram Singh",
      },
      {
        id: "hkd-b4",
        startDate: "2026-10-05",
        endDate: "2026-10-11",
        totalSeats: 14,
        bookedSeats: 10,
        availableSeats: 4,
        price: 11499,
        status: "limited",
        discounts: { group5Plus: 10, earlyBird: 0 },
        meetingPoint: "Dehradun Railway Station at 7:00 AM",
        guide: "Narender Singh Rawat",
        notes: "Autumn colours — best photography season",
      },
      {
        id: "hkd-b5",
        startDate: "2026-11-01",
        endDate: "2026-11-07",
        totalSeats: 12,
        bookedSeats: 2,
        availableSeats: 10,
        price: 10499,
        status: "available",
        discounts: { group5Plus: 10, earlyBird: 10 },
        meetingPoint: "Dehradun Railway Station at 7:00 AM",
        guide: "Vikram Singh",
        notes: "Pre-snow season — quiet trails, fresh snow on peaks",
      },
    ],
  },
  {
    id: "kedarkantha",
    name: "Kedarkantha — King of Winter Treks",
    region: "Uttarkashi, Uttarakhand",
    maxAltitude: "12,500 ft (3,810m)",
    distance: "20 km round trip",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy to Moderate",
    bestTime: "December–April (snow), May–June (spring)",
    startPoint: "Sankri Village (6,400 ft)",
    nearestRailhead: "Dehradun (200 km)",
    nearestAirport: "Jolly Grant, Dehradun",
    groupSize: "8–15",
    ageGroup: "10–55 years",
    price: "₹7,999",
    imageQuery: "kedarkantha,winter,snow,trek",
    description:
      "India's most beloved winter trek in Govind Wildlife Sanctuary — the Kedarkantha summit at 3,810m delivers arguably the finest 360° Himalayan panorama accessible on any Indian trek, with snow-laden deodar forests and magical camping en route.",
    overview:
      "Kedarkantha is the undisputed king of Indian winter treks. Situated in the Govind Wildlife Sanctuary of Uttarkashi, the summit at 3,810m offers what many consider the finest 360-degree panoramic view available on any accessible Himalayan trek in India. From the top, you see Swargarohini (6,252m), Bandarpunch (6,316m), Kala Nag (6,387m), Ranglana, Kedarnath Peak, and dozens of unnamed snow giants. The trail weaves through magical snow-laden deodar and pine forests, open clearings, and three high-altitude campsites — each more spectacular than the last.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun → Sankri",
        description:
          "Drive 200km via Mussoorie–Purola–Mori. Arrive Sankri (6,400 ft). Trek briefing, warm dinner.",
        highlights: ["Tons River gorge", "Mountain arrival", "Stargazing"],
        startAltitude: 2200,
        endAltitude: 6400,
        altitudeGain: 4200,
        distanceKm: 196,
        duration: "9-10 hours drive",
        dayDifficulty: "Easy",
        terrain: "Mountain road through Mussoorie, Kempty Falls, Mori valley",
        campsite: {
          name: "Kotgaon Village",
          altitude: 6400,
          amenities: [
            "Guesthouse rooms",
            "Hot meals",
            "Electricity",
            "Mobile charging",
          ],
        },
        mealDetail: {
          breakfast: "At home/hotel in Dehradun",
          lunch: "Dhaba en route at Mori — dal, rice, roti, sabzi",
          dinner: "Aloo paratha with curd, dal tadka, seasonal sabzi",
          snacks: "Tea and biscuits at Purola",
        },
        waterSources: [
          "River streams along Tons Valley route",
          "Purola town water supply",
        ],
        emergencyExit:
          "Return to Dehradun via same road — nearest hospital Vikas Nagar 90km",
        photographyHighlights: [
          "Mussoorie skyline at dawn",
          "Tons River gorge near Mori",
          "First Himalayan peak views at Purola",
        ],
        weatherPattern:
          "Clear mornings; afternoon clouds possible above Mussoorie in monsoon",
        wildlife: [
          "Langur monkeys near Mussoorie",
          "Eagles and kites along valley",
        ],
        culturalNotes:
          "Pass through Govind Pashu Vihar National Park gateway at Netwar; region known for traditional Jaunsari culture",
        sunriseTime: "6:15 AM",
        sunsetTime: "7:00 PM",
      },
      {
        day: 2,
        title: "Sankri → Juda Ka Talab",
        description:
          "4km trek through dense oak and pine forest. Reach Juda Ka Talab — alpine lake formed from Lord Shiva's tears. Frozen in winter. Magical stargazing camp.",
        highlights: [
          "Sacred alpine lake",
          "Frozen lake in winter",
          "Star-gazing camp",
        ],
        startAltitude: 6400,
        endAltitude: 9100,
        altitudeGain: 2700,
        distanceKm: 5,
        duration: "4-5 hours",
        dayDifficulty: "Moderate",
        terrain:
          "Dense oak-pine forest, narrow ridge trail, frozen lake clearing",
        campsite: {
          name: "Juda Ka Talab",
          altitude: 9100,
          amenities: [
            "Camping tents",
            "Bio-toilets",
            "Dining tent",
            "Bonfire area",
          ],
        },
        mealDetail: {
          breakfast: "Poha/upma, boiled eggs, banana, chai",
          lunch: "Aloo paratha with pickle, packed for trail",
          dinner: "Dal makhani, jeera rice, roti, papad",
          snacks: "Trail mix, energy bars, hot soup at camp",
        },
        waterSources: [
          "Juda Ka Talab (frozen Nov–Mar; melts Apr–Jun)",
          "Small stream at Khujai clearing 2.5km in",
        ],
        emergencyExit: "Return to Sankri via same forest trail — 2 hours down",
        photographyHighlights: [
          "Morning mist in pine forest",
          "Kedarkantha peak first sighting at forest clearings",
          "Juda Ka Talab frozen lake reflection (winter)",
          "Sunset on Swargarohini range",
        ],
        weatherPattern:
          "Cold mornings (0–5°C Dec–Feb); clear afternoons; occasional snowfall Dec–Mar",
        wildlife: [
          "Red fox",
          "Himalayan monal pheasant (state bird)",
          "Barking deer",
          "Possible snow leopard tracks",
        ],
        culturalNotes:
          "Trail passes through Govind Pashu Vihar Wildlife Sanctuary — no campfire restrictions apply",
        acclimatizationNotes:
          "First night above 9,000ft — drink 3L water, avoid alcohol, rest early",
        sunriseTime: "6:30 AM",
        sunsetTime: "6:45 PM",
      },
      {
        day: 3,
        title: "Juda Ka Talab → Base Camp",
        description:
          "4km trek through increasingly open terrain. Snow patches grow heavier. Kedarkantha peak appears. Base camp at large meadow with 270° mountain view.",
        highlights: [
          "Kedarkantha peak views",
          "Snow meadow camp",
          "270° panorama",
        ],
        startAltitude: 9100,
        endAltitude: 11250,
        altitudeGain: 2150,
        distanceKm: 4,
        duration: "3-4 hours",
        dayDifficulty: "Moderate",
        terrain: "Rhododendron forest, open snow meadows, broad mountain ridge",
        campsite: {
          name: "Kedarkantha Base Camp",
          altitude: 11250,
          amenities: [
            "Four-season dome tents",
            "Bio-toilets",
            "Oxygen cylinder at camp",
            "Summit briefing area",
          ],
        },
        mealDetail: {
          breakfast: "Stuffed aloo paratha, boiled eggs, chai, seasonal fruit",
          lunch: "Short day — light trail snacks; hot soup on arrival",
          dinner:
            "Paneer butter masala, jeera rice, dal soup, chapati, hot chocolate",
          snacks:
            "Roasted peanuts, dates, energy bars; mandatory hot soup 4 PM",
        },
        waterSources: [
          "Stream at Bhoja Dhadi forest edge (last reliable water before summit)",
        ],
        emergencyExit:
          "Descend to Juda Ka Talab (2hrs) or Sankri (4hrs) via Day 2 trail",
        photographyHighlights: [
          "Kedarkantha peak face-on from base camp",
          "Swargarohini massif golden hour",
          "Milky Way photography at 11,250ft (best in India for beginners)",
          "Rhododendron blooms (Mar–Apr)",
        ],
        weatherPattern:
          "Cold (−5 to −15°C Dec–Feb); strong ridge winds possible; clear skies common in winter for star gazing",
        wildlife: [
          "Himalayan tahr",
          "Snow leopard (rare)",
          "Griffon vultures overhead",
        ],
        acclimatizationNotes:
          "Summit briefing at 5 PM — guide checks SpO2 for all trekkers; anyone below 90% SpO2 stays at camp next day",
        sunriseTime: "6:45 AM",
        sunsetTime: "6:30 PM",
      },
      {
        day: 4,
        title: "Summit Push → Sankri",
        description:
          "2 AM wake-up. Summit climb under stars — watch the Milky Way. Sunrise from Kedarkantha Summit (12,500 ft) — ocean of snow peaks in all directions. Descend to Sankri.",
        highlights: [
          "Milky Way summit climb",
          "Sunrise panorama — 360°",
          "Swargarohini, Bandarpunch, Kala Nag views",
        ],
        startAltitude: 11250,
        endAltitude: 12500,
        altitudeGain: 1250,
        distanceKm: 11,
        duration: "7-9 hours",
        dayDifficulty: "Hard",
        terrain:
          "Steep snow slope, narrow snow ridge, summit rocks; long forest descent to Hargaon",
        campsite: {
          name: "Hargaon Camp",
          altitude: 8900,
          amenities: ["Tents", "Bio-toilets", "Warm welcome soup on arrival"],
        },
        mealDetail: {
          breakfast: "Pre-summit 4 AM: hot porridge, boiled eggs, chai, dates",
          lunch: "Packed lunch at summit or base — sandwiches, energy bars",
          dinner: "Celebratory khichdi, kadhi, papad, halwa dessert",
          snacks: "Chocolate, dry fruits consumed on summit push",
        },
        waterSources: [
          "Melt water at summit snowfield (seasonal)",
          "Stream at Hargaon camp",
        ],
        emergencyExit:
          "Abort summit → return to base camp (1.5hrs); mid-descent → Sankri via Hargaon alternate trail",
        photographyHighlights: [
          "Sunrise panorama from summit: Swargarohini, Bandarpoonch, Kalanag, Gangotri group",
          "Shadow of Kedarkantha peak at sunrise",
          "Snow ridge silhouette photos",
          "Descent through golden oak forest",
        ],
        weatherPattern:
          "Summit attempt 4–7 AM to avoid afternoon clouds; wind chill −20°C possible at summit in winter; clear views before 10 AM",
        wildlife: [
          "Snow pigeons at summit",
          "Himalayan griffon vultures circling thermals",
        ],
        acclimatizationNotes:
          "Summit at 12,500ft — SpO2 checks at base before departure; turn back if below 88%",
        sunriseTime: "6:00 AM at summit (spectacular)",
        sunsetTime: "6:15 PM",
      },
      {
        day: 5,
        title: "Sankri → Dehradun",
        description: "Morning drive back via Purola to Dehradun.",
        highlights: ["Mountains farewell", "Valley views"],
        startAltitude: 6400,
        endAltitude: 2200,
        altitudeGain: -4200,
        distanceKm: 196,
        duration: "9-10 hours drive",
        dayDifficulty: "Easy",
        terrain: "Mountain road",
        campsite: {
          name: "Dehradun City",
          altitude: 2200,
          amenities: ["Hotel/home"],
        },
        mealDetail: {
          breakfast: "Aloo paratha at Sankri before departure",
          lunch: "Dhaba at Purola — thali",
          dinner: "Home or restaurant in Dehradun",
          snacks: "En route at Mori",
        },
        waterSources: ["Dehradun city supply"],
        emergencyExit: "N/A — road access throughout",
        photographyHighlights: ["Last Himalayan views from Mori gorge"],
        weatherPattern: "Warmer at lower altitudes",
        wildlife: ["Jungle wildlife near Kempty Falls"],
        sunriseTime: "6:15 AM",
        sunsetTime: "7:00 PM",
      },
    ],
    inclusions: [
      "Dehradun pickup & drop",
      "4 nights camps/guesthouses",
      "All meals",
      "Expert trek guide",
      "Forest permits",
      "Crampons/microspikes (Dec–Mar)",
      "-10°C sleeping bags",
      "First aid",
      "Emergency oxygen",
    ],
    exclusions: [
      "Personal travel insurance",
      "Tips",
      "Personal expenses",
      "Personal sleeping bag liner",
    ],
    packingList: [
      "Waterproof trekking shoes",
      "Gaiters",
      "Thermal inner wear (top + bottom)",
      "Mid-layer fleece",
      "Down jacket",
      "Windproof shell",
      "Woollen cap/balaclava",
      "Warm gloves",
      "Sunglasses (UV400)",
      "Trekking poles",
      "Headlamp + batteries",
      "Water bottles",
      "Sunscreen SPF50+",
      "Personal first aid",
      "Personal ID",
      "Cash",
    ],
    faqs: [
      {
        question: "How much snow in December?",
        answer:
          "2–4 feet of snow on trail. Crampons/microspikes provided by The Global Trek.",
      },
      {
        question: "Is a sleeping bag provided?",
        answer:
          "The Global Trek provides -10°C sleeping bags. Bring your own inner liner for extra warmth.",
      },
      {
        question: "Can children do this?",
        answer: "Children from age 10 regularly complete this with families.",
      },
      {
        question: "Is the summit push safe?",
        answer:
          "Yes — guides assess weather every evening. Summit is called off if unsafe.",
      },
      {
        question: "Is Kedarkantha suitable in summer?",
        answer:
          "Yes, but summer loses the snow magic. May–June has wildflowers.",
      },
      {
        question: "What's the success rate?",
        answer:
          "The Global Trek's summit success rate is 94% across all seasons.",
      },
      {
        question: "Is altitude sickness common?",
        answer:
          "Unlikely with proper acclimatization days built in. Guides monitor all trekkers.",
      },
      {
        question: "Can I extend to Phulara Ridge?",
        answer:
          "Yes — Phulara Ridge shares the Sankri base and can be combined.",
      },
    ],
    relatedTrekIds: ["phulara-ridge", "har-ki-dun", "kuari-pass"],
    heroImages: [
      "https://source.unsplash.com/1600x900/?kedarkantha,snow,himalaya",
      "https://source.unsplash.com/1600x900/?winter,trek,pine-forest",
      "https://source.unsplash.com/1600x900/?snow,summit,india",
      "https://source.unsplash.com/1600x900/?himalaya,campsite,night",
      "https://source.unsplash.com/1600x900/?mountain,sunrise,uttarakhand",
      "https://source.unsplash.com/1600x900/?snow,forest,trek",
    ],
    quickFacts: {
      maxAltitudeZone: "Sub-Alpine to Alpine Zone (9,000–12,500 ft)",
      snowConditions: "Heavy snow Dec–Mar; patches Apr–May; clear Jun–Nov",
      trailType:
        "Dense oak/pine forest, open meadows, snow ridge, rocky summit",
      waterAvailability:
        "Streams at Khujai & Dhoka; carry 2L above Bhoja Dhadi",
      phoneNetwork: "BSNL/Jio up to Sankri; no signal on trail",
      permits: "Forest permit ₹150 included in trek fee",
      fitness: "Jog 5km in 45 min; 3 weeks cardio prep recommended",
      minAge: 8,
      maxAge: 65,
    },
    safetyProtocol: {
      guideInfo: {
        name: "Raju Singh Negi",
        certification:
          "NIM (Nehru Institute of Mountaineering) Certified, WFR Level 3, Wilderness First Aid",
        experience: "14 years, 350+ Kedarkantha ascents",
        languages: ["Hindi", "English", "Garhwali"],
      },
      satellitePhone: {
        model: "Garmin inReach Mini 2",
        coverage: "Global satellite coverage — active on all trail days",
      },
      helicopterLandingZone: {
        location: "Sankri Village meadow",
        coordinates: "31.0896°N, 78.1322°E",
        nearestTo: "Base camp, 500m south",
      },
      nearestHospital: {
        name: "Community Health Centre Mori",
        distance: "42 km from Sankri",
        phone: "+91-1371-222015",
        address: "Mori, Uttarkashi District, Uttarakhand 249141",
        emergencyAvailable: true,
      },
      oxygenCylinders: {
        count: 3,
        capacity: "5L medical grade",
        locations: ["Juda Ka Talab camp", "Base camp", "Summit team carry"],
      },
      pulseOximeter: true,
      firstAidKit: {
        medications: [
          "Diamox (Acetazolamide) 250mg",
          "Dexamethasone 4mg",
          "Nifedipine",
          "Ibuprofen",
          "ORS sachets",
          "Antihistamines",
        ],
        equipment: [
          "Pulse oximeter",
          "Blood pressure monitor",
          "Trauma bandages",
          "SAM splint",
          "Cervical collar",
          "Stretcher",
          "Thermal blanket",
        ],
      },
      amsProtocol: {
        stage1: {
          symptoms: [
            "Headache",
            "Nausea",
            "Fatigue",
            "Loss of appetite",
            "SpO2 88–92%",
          ],
          treatment:
            "Rest at same altitude, 3L water, 250mg Diamox, no further ascent until SpO2 > 92%",
        },
        stage2: {
          symptoms: [
            "Severe headache unresponsive to Diamox",
            "Vomiting",
            "Extreme fatigue",
            "SpO2 below 88%",
          ],
          treatment:
            "Immediate descent 1,000ft minimum, oxygen supplementation, emergency contact to Sankri base",
        },
        stage3: {
          symptoms: [
            "Ataxia (loss of coordination)",
            "Confusion",
            "HACE/HAPE symptoms",
            "SpO2 below 80%",
          ],
          treatment:
            "Emergency helicopter evacuation, continuous oxygen, IV Dexamethasone, helicopter to Dehradun/Rishikesh hospital",
        },
      },
      evacuationProcedure:
        "Walk-out to Sankri (2–4 hours depending on camp), vehicle to Mori CHC (42km), helicopter from Sankri meadow LZ for critical cases. Satellite phone contact with base team maintained throughout.",
      checkInFrequency:
        "3x daily SpO2 checks — morning, midday, evening at every campsite",
      teamRatio: "1 guide per 8 trekkers + 1 dedicated sweep guide",
      emergencyContacts: [
        {
          name: "Raju Singh Negi",
          role: "Lead Guide / Emergency Coordinator",
          phone: "+91-98370-45612",
        },
        {
          name: "Global Trek Sankri Base",
          role: "Base Camp Support",
          phone: "+91-89456-78901",
        },
        {
          name: "Uttarkashi District Emergency",
          role: "District Emergency Services",
          phone: "01374-222715",
        },
        {
          name: "Dehradun SDRF",
          role: "State Disaster Response Force",
          phone: "0135-2710339",
        },
      ],
    },
    detailedReviews: [
      {
        id: "kk-r1",
        author: "Priya Sharma",
        rating: 5,
        dimensions: {
          food: 4.5,
          guideExpertise: 5,
          safety: 5,
          valueForMoney: 4.5,
          scenery: 5,
          overall: 5,
        },
        title: "Best winter trek in India — period.",
        comment:
          "Did Kedarkantha in January 2024 and it was absolutely transformative. The summit sunrise with snow-covered Swargarohini and Bandarpoonch turning golden is something I'll carry forever. Our guide Raju was exceptional — he noticed I was breathless at base camp, checked my SpO2 (it was 88%), and personally stayed with me for acclimatization. I reached the summit the next morning at 98%. The kitchen team surprised me every night — dal makhani at 11,000ft that tasted better than any restaurant. Highly recommend Global Trek.",
        date: "2024-01-20",
        month: 1,
        groupType: "solo",
        verified: true,
        helpful: 47,
        tripYear: 2024,
      },
      {
        id: "kk-r2",
        author: "Rahul & Ananya Kapoor",
        rating: 5,
        dimensions: {
          food: 4,
          guideExpertise: 5,
          safety: 5,
          valueForMoney: 5,
          scenery: 5,
          overall: 5,
        },
        title: "Our honeymoon in the snow — magical",
        comment:
          "We chose Kedarkantha for our honeymoon and it exceeded every expectation. The base camp at night with the Milky Way blazing overhead was more romantic than any hotel could be. Guide team was incredibly professional — daily health checks, full safety briefing at each camp. Summit day was tough but our guide kept pace perfectly. Hot chocolate waiting at camp after the summit push — these small touches made all the difference. Value for money is exceptional for the quality of service.",
        date: "2023-12-18",
        month: 12,
        groupType: "couple",
        verified: true,
        helpful: 32,
        tripYear: 2023,
      },
      {
        id: "kk-r3",
        author: "Vikram Nair",
        rating: 4,
        dimensions: {
          food: 3.5,
          guideExpertise: 4.5,
          safety: 5,
          valueForMoney: 4,
          scenery: 5,
          overall: 4.5,
        },
        title: "Summit achieved! Safety standards are genuinely impressive",
        comment:
          "Third Himalayan trek and first time with Global Trek. The safety protocol here is noticeably more serious than other operators I've used. Three SpO2 checks daily, detailed health cards, oxygen cylinders at EVERY campsite (not just base). One trekker in our group developed mild AMS on Day 3 and the guide handled it textbook-perfectly — Diamox, extra rest, continued next day. Food was good but portions could be larger for summit day fuel. Scenery is 6/5 if that were possible.",
        date: "2024-11-10",
        month: 11,
        groupType: "friends",
        verified: true,
        helpful: 28,
        tripYear: 2024,
      },
      {
        id: "kk-r4",
        author: "Sunita Menon",
        rating: 5,
        dimensions: {
          food: 5,
          guideExpertise: 5,
          safety: 5,
          valueForMoney: 4.5,
          scenery: 5,
          overall: 5,
        },
        title: "Took my 14-year-old daughter — perfect first Himalayan summit",
        comment:
          "My daughter's first summit at 14 years old. The guide team was so patient and encouraging with young trekkers. They adjusted pace perfectly, gave her extra attention on the summit push, and she reached the top! Seeing her joy at 12,500ft was worth every rupee. Kitchen team made sure vegetarian options were available for every meal with variety each day. Safety protocols gave me complete confidence as a parent. We're already planning Dayara Bugyal next year.",
        date: "2024-05-14",
        month: 5,
        groupType: "family",
        verified: true,
        helpful: 56,
        tripYear: 2024,
      },
    ],
    batchSlots: [
      {
        id: "kk-b1",
        startDate: "2026-06-15",
        endDate: "2026-06-20",
        totalSeats: 14,
        bookedSeats: 4,
        availableSeats: 10,
        price: 9499,
        status: "available",
        discounts: {
          group5Plus: 10,
          earlyBird: 8,
          earlyBirdDeadline: "2026-05-30",
        },
        meetingPoint:
          "Dehradun Railway Station (DOON EXPRESS platform) at 7:00 AM",
        guide: "Raju Singh Negi",
        notes: "Post-snow season — clear trails, minimal crowds",
      },
      {
        id: "kk-b2",
        startDate: "2026-10-01",
        endDate: "2026-10-06",
        totalSeats: 14,
        bookedSeats: 9,
        availableSeats: 5,
        price: 9499,
        status: "limited",
        discounts: { group5Plus: 10, earlyBird: 8 },
        meetingPoint: "Dehradun Railway Station at 7:00 AM",
        guide: "Deepak Rawat",
      },
      {
        id: "kk-b3",
        startDate: "2026-11-15",
        endDate: "2026-11-20",
        totalSeats: 14,
        bookedSeats: 14,
        availableSeats: 0,
        price: 9499,
        status: "sold_out",
        meetingPoint: "Dehradun Railway Station at 7:00 AM",
        guide: "Suresh Panwar",
      },
      {
        id: "kk-b4",
        startDate: "2026-12-01",
        endDate: "2026-12-06",
        totalSeats: 16,
        bookedSeats: 12,
        availableSeats: 4,
        price: 10499,
        status: "almost_full",
        discounts: { group5Plus: 10, earlyBird: 5 },
        meetingPoint: "Dehradun Railway Station at 6:30 AM",
        guide: "Mohan Bisht",
        notes: "Peak winter — heavy snow guaranteed on summit day",
      },
      {
        id: "kk-b5",
        startDate: "2026-12-15",
        endDate: "2026-12-20",
        totalSeats: 16,
        bookedSeats: 7,
        availableSeats: 9,
        price: 10499,
        status: "available",
        discounts: {
          group5Plus: 10,
          earlyBird: 8,
          earlyBirdDeadline: "2026-11-30",
        },
        meetingPoint: "Dehradun Railway Station at 6:30 AM",
        guide: "Raju Singh Negi",
      },
      {
        id: "kk-b6",
        startDate: "2026-12-25",
        endDate: "2026-12-30",
        totalSeats: 16,
        bookedSeats: 14,
        availableSeats: 2,
        price: 11499,
        status: "almost_full",
        meetingPoint: "Dehradun Railway Station at 6:30 AM",
        guide: "Deepak Rawat",
        notes: "Christmas-New Year special batch — book immediately",
      },
    ],
  },
  {
    id: "kuari-pass",
    name: "Kuari Pass — The Curzon Trail",
    region: "Chamoli, Uttarakhand",
    maxAltitude: "13,990 ft (4,264m)",
    distance: "40 km",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    bestTime: "April–June, October–December",
    startPoint: "Joshimath (6,150 ft)",
    nearestRailhead: "Haridwar (271 km)",
    nearestAirport: "Jolly Grant, Dehradun (280 km)",
    groupSize: "6–12",
    ageGroup: "14–55 years",
    price: "₹10,500",
    imageQuery: "nanda,devi,himalaya,meadow",
    description:
      "The legendary Curzon Trail in Chamoli district offers the finest panoramic view of Nanda Devi (7,816m — India's highest peak in Indian territory), with fairy-tale oak and rhododendron forests, vast bugyals, and a dramatic high mountain pass at 4,264m.",
    overview:
      "Named after Lord Curzon who explored it in the British era, the Kuari Pass trek is a legendary Himalayan crossing in the Chamoli district of Garhwal. It offers arguably the finest panoramic view of the Nanda Devi massif (7,816m — India's highest peak fully in Indian territory) in all of Himalayan trekking. Other peaks visible: Trishul (7,120m), Dronagiri (7,066m), Kamet (7,756m), Chaukhamba, and Hathi-Ghodi. The trail passes through fairy-tale forests of oak, rhododendron, and pine; open bugyal (high-altitude meadow) country; and ancient shepherd paths.",
    itinerary: [
      {
        day: 1,
        title: "Haridwar → Joshimath",
        description:
          "Drive 270km through Devprayag, Rudraprayag, Chamoli, Pipalkoti to Joshimath — gateway to Nanda Devi region. Explore Narasimha Temple. Briefing.",
        highlights: ["Devprayag sangam", "Joshimath town", "Narasimha Temple"],
      },
      {
        day: 2,
        title: "Joshimath → Gulling Camp",
        description:
          "Drive to Dhak village. 7km trek through oak-rhododendron forest. Village of Tugasi. Meadow views open at Gulling camp with early Trishul views.",
        highlights: ["Tugasi village", "Trishul views", "Forest trail"],
      },
      {
        day: 3,
        title: "Gulling → Khullara",
        description:
          "Trail opens into Khullara bugyal — one of the Garhwal Himalayas' finest meadow campsites. Full Himalayan wall appears: Nanda Devi, Trishul, Dronagiri side by side.",
        highlights: [
          "Khullara bugyal meadow",
          "Nanda Devi views",
          "Dronagiri and Trishul panorama",
        ],
      },
      {
        day: 4,
        title: "Kuari Pass Summit → Khullara",
        description:
          "Summit day. Ridge walk above tree line. Snow patches. Kuari Pass (13,990 ft) — sweeping arc of Himalayan peaks. The finest mountain panorama in India. Return to Khullara.",
        highlights: [
          "Kuari Pass (4,264m)",
          "360° Himalayan arc",
          "Nanda Devi close-up",
        ],
      },
      {
        day: 5,
        title: "Khullara → Haridwar",
        description: "Descend to Tapovan/Joshimath. Drive to Haridwar.",
        highlights: ["Mountain farewell", "Joshimath drive"],
      },
    ],
    inclusions: [
      "Haridwar pickup & drop",
      "4 nights accommodation",
      "All meals",
      "Expert trek guide",
      "Forest permits + Nanda Devi Biosphere Reserve entry",
      "First aid",
      "Oxygen (emergency)",
    ],
    exclusions: ["Personal travel insurance", "Tips", "Personal expenses"],
    packingList: [
      "Waterproof trekking shoes",
      "Gaiters",
      "Thermal layers",
      "Down jacket",
      "Rain jacket",
      "Trekking pants",
      "Fleece mid-layer",
      "Warm hat and gloves",
      "Sunglasses",
      "Trekking poles",
      "Headlamp",
      "Water bottles (2L)",
      "Sunscreen",
      "Personal first aid",
      "Camera",
      "Personal ID",
    ],
    faqs: [
      {
        question: "Can beginners do Kuari Pass?",
        answer:
          "Moderate — 2–3 months of cardio fitness preparation recommended. Beginners with good fitness can manage.",
      },
      {
        question: "Is Kuari Pass good for photography?",
        answer:
          "Exceptionally so — Khullara camp and pass summit are among the most photographed in Indian trekking.",
      },
      {
        question: "What permits are needed?",
        answer:
          "Forest permit + Nanda Devi Biosphere Reserve entry. The Global Trek handles all.",
      },
      {
        question: "What's the Lord Curzon connection?",
        answer:
          "Viceroy of India Lord Curzon trekked this route in 1905. 'Curzon Trail' is its historic name.",
      },
      {
        question: "Any risk of altitude sickness?",
        answer:
          "Moderate risk at 13,990 ft. The Global Trek builds in proper acclimatization days.",
      },
      {
        question: "Is it a loop or return trek?",
        answer:
          "Out-and-back from Khullara, or loop via Auli. Ask for the Auli extension.",
      },
      {
        question: "Best month for snow + clear skies?",
        answer:
          "October and November — post-monsoon clarity with early snowfall on peaks.",
      },
      {
        question: "Can I combine with Kedarnath or Badrinath?",
        answer:
          "Yes — Joshimath is the base for both. The Global Trek offers combination packages.",
      },
    ],
    relatedTrekIds: ["chopta-tungnath", "kedarkantha", "hampta-pass"],
  },
  {
    id: "hampta-pass",
    name: "Hampta Pass — The Great Himalayan Crossover",
    region: "Kullu → Lahaul, Himachal Pradesh",
    maxAltitude: "14,100 ft (4,300m)",
    distance: "35 km",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    bestTime: "June–September",
    startPoint: "Jobra near Manali (8,200 ft)",
    nearestRailhead: "Ambala (270 km from Manali)",
    nearestAirport: "Bhuntar Airport, Kullu (55 km)",
    groupSize: "6–15",
    ageGroup: "14–55 years",
    price: "₹11,999",
    imageQuery: "manali,himalaya,green,valley",
    description:
      "Hampta Pass is India's most dramatic trekking crossover — from the lush, forested Kullu Valley to the stark, moon-like Lahaul desert in a single day at the pass, with genuine river crossings and optional Chandratal Lake extension.",
    overview:
      "Hampta Pass is one of India's most dramatic trekking experiences — a trans-Himalayan crossover that transitions from the lush, forested Kullu Valley to the stark, moon-like desert of Lahaul in a single dramatic day at the pass. No other trek in the country offers such a violent, beautiful contrast in landscape. On one side: green forests, waterfalls, wildflower meadows. Cross the 14,100 ft pass and: barren brown mountains, glacial rivers, zero vegetation, Tibetan plateau feel. The trek also involves genuine river crossings using fixed ropes — cold, knee-deep glacial streams that add a thrilling dimension.",
    itinerary: [
      {
        day: 1,
        title: "Manali → Chika Camp",
        description:
          "Drive 20km to Jobra then 3km trek. Rani Nallah river crossing. Reach Chika camp (9,800 ft) in grassy clearing with birch-rhododendron backdrop.",
        highlights: [
          "Alni village",
          "First river crossing",
          "Chika camp meadow",
        ],
      },
      {
        day: 2,
        title: "Chika → Balu Ka Ghera",
        description:
          "10km trek along Hampta River valley floor. Dramatic mountain walls on both sides. Multiple stream crossings. Rocky alpine camp at glacier base.",
        highlights: [
          "River valley trail",
          "Mountain walls",
          "First glacial terrain",
        ],
      },
      {
        day: 3,
        title: "Hampta Pass → Shea Goru",
        description:
          "Summit day — steep early climb, rope-assisted river crossings. Cross Hampta Pass (14,100 ft). Instant landscape flip from green Kullu to barren brown Lahaul. Descend to Shea Goru in lunar landscape.",
        highlights: [
          "Hampta Pass (4,300m)",
          "Green-to-desert landscape flip",
          "Mt. Deo Tibba views",
        ],
      },
      {
        day: 4,
        title: "Shea Goru → Chatru",
        description:
          "5km trek across barren Lahaul. Arrive Chatru on Chandra River. Optional: drive to Chandratal Lake (turquoise crescent lake, one of Himachal's most stunning).",
        highlights: [
          "Chandratal Lake (optional)",
          "Lahaul landscape",
          "Chandra River",
        ],
      },
      {
        day: 5,
        title: "Chatru → Manali",
        description: "Drive back over Rohtang Pass to Manali.",
        highlights: ["Rohtang Pass", "Mountain farewell"],
      },
    ],
    inclusions: [
      "Manali pickup & drop",
      "4 nights camps",
      "All meals",
      "Expert trek guide",
      "Rope equipment for river crossings",
      "Crampons if needed",
      "Forest permits",
      "First aid",
    ],
    exclusions: [
      "Personal travel insurance",
      "Tips",
      "Personal expenses",
      "Chandratal Lake drive (optional extra)",
    ],
    packingList: [
      "Waterproof trekking shoes",
      "Extra sandals/crocs (river crossings)",
      "Gaiters",
      "Thermal layers",
      "Down jacket",
      "Rain jacket",
      "Trekking pants",
      "Quick-dry t-shirts",
      "Warm hat and gloves",
      "Trekking poles",
      "Headlamp",
      "Water bottles (2L+)",
      "Personal first aid",
      "Sunscreen SPF50+",
      "Personal ID",
    ],
    faqs: [
      {
        question: "Is Hampta Pass safe for beginners?",
        answer:
          "Moderate — river crossings and altitude make it best for trekkers with at least one prior multi-day trek.",
      },
      {
        question: "When do the river crossings happen?",
        answer:
          "Multiple stream crossings on Days 1–3. The biggest crossings are before Balu Ka Ghera and at the pass itself.",
      },
      {
        question: "What footwear for river crossings?",
        answer:
          "Carry extra sandals/crocs for crossings. Keep trekking shoes dry for the trail.",
      },
      {
        question: "Is Chandratal Lake worth it?",
        answer:
          "Absolutely yes — considered one of India's most beautiful lakes. Highly recommended.",
      },
      {
        question: "Can I continue to Spiti Valley?",
        answer:
          "Yes — The Global Trek offers Hampta Pass + Chandratal + Spiti road trip combination.",
      },
      {
        question: "What is the altitude risk?",
        answer:
          "14,100 ft is significant. The Global Trek includes mandatory acclimatization at Manali.",
      },
      {
        question: "Why only done in summer?",
        answer:
          "Monsoon is fine (Himachal gets less rain). Pre/post-monsoon has best clear skies.",
      },
      {
        question: "Is there mobile connectivity?",
        answer:
          "Until Chika (Day 1). Beyond that, no signal until Chatru (BSNL sometimes).",
      },
    ],
    relatedTrekIds: ["sar-pass", "kuari-pass", "kedarkantha"],
  },
  {
    id: "sar-pass",
    name: "Sar Pass — The Snow Playground",
    region: "Parvati Valley, Kullu, Himachal Pradesh",
    maxAltitude: "13,800 ft (4,220m)",
    distance: "47 km",
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate",
    bestTime: "May–June, September–October",
    startPoint: "Kasol / Grahan Village",
    nearestRailhead: "Ambala Cantonment (280 km)",
    nearestAirport: "Bhuntar Airport, Kullu (30 km)",
    groupSize: "10–20",
    ageGroup: "15–45 years",
    price: "₹10,999",
    imageQuery: "snow,mountain,pass,himachal",
    description:
      "The most popular snow trek in Himachal Pradesh — Sar Pass in the magical Parvati Valley is legendary for its iconic snow slide descent (200m screaming joy on natural snowfield), lush forests, charming Grahan village, and 360° Kullu Himalayan panorama.",
    overview:
      "Sar Pass sits at 4,220m in the majestic Parvati Valley of Kullu district, Himachal Pradesh. The name comes from the local dialect — 'Sar' meaning lake — as the trail passes by a typically frozen lake near the Biskeri Ridge. This is the most popular snow trek in Himachal Pradesh, beloved for its snow slides on the descent — trekkers slide down a 70-degree snowfield on their backs for 200+ meters. The Parvati Valley itself is a cultural gem: dense forests of walnut, oak, and deodar; the hippie haven of Kasol; and charming Grahan village.",
    itinerary: [
      {
        day: 1,
        title: "Kasol → Grahan Village",
        description:
          "7km trek via Parvati river bank and steep forested trail to Grahan — charming Himachali village with stone houses and wooden temples.",
        highlights: [
          "Parvati River views",
          "Grahan village",
          "Traditional Himachali architecture",
        ],
      },
      {
        day: 2,
        title: "Grahan → Min Thach",
        description:
          "9km ascent through dense forest. Reach Min Thach open meadow (10,500 ft).",
        highlights: [
          "Dense deodar forest",
          "Min Thach meadow",
          "Mountain views emerging",
        ],
      },
      {
        day: 3,
        title: "Min Thach → Nagaru",
        description:
          "8km trek into high-altitude terrain. Snow begins in earnest. Parvati Valley unfolds below. Camp at Nagaru with first-row pass views.",
        highlights: [
          "First heavy snow",
          "Parvati Valley panorama",
          "Nagaru camp views",
        ],
      },
      {
        day: 4,
        title: "Sar Pass → Biskeri Thach",
        description:
          "Summit day — early morning climb to Sar Pass (4,220m). Frozen lake. Panoramic views. Then THE ICONIC SNOW SLIDE — trekkers slide down the 45–70° snowfield for 200m. Unforgettable.",
        highlights: [
          "Sar Pass summit (4,220m)",
          "The legendary snow slide",
          "360° Kullu panorama",
        ],
      },
      {
        day: 5,
        title: "Biskeri Thach → Kasol",
        description:
          "Final descent through forest to Barshaini. Drive to Kasol.",
        highlights: ["Forest descent", "Parvati Valley return"],
      },
    ],
    inclusions: [
      "Kasol pickup & drop",
      "4 nights camps",
      "All meals",
      "Expert trek guide",
      "Snow equipment",
      "Forest permits",
      "First aid",
    ],
    exclusions: [
      "Personal travel insurance",
      "Tips",
      "Personal expenses",
      "Kasol hotel nights",
    ],
    packingList: [
      "Waterproof trekking shoes",
      "Gaiters",
      "Thermal layers",
      "Down jacket",
      "Rain jacket",
      "Trekking pants",
      "Warm hat and gloves",
      "Sunglasses",
      "Trekking poles",
      "Headlamp",
      "Water bottles",
      "Sunscreen",
      "Personal first aid",
      "Personal ID",
      "Cash (Bhuntar is last reliable ATM)",
    ],
    faqs: [
      {
        question: "What exactly is the snow slide?",
        answer:
          "A natural snow slope on the descent from Sar Pass where trekkers slide down on their backs/bottoms for 100–200m. One of the most fun moments in Indian trekking.",
      },
      {
        question: "Is it safe?",
        answer:
          "Yes — the slide zone is scouted before descent. Guides create a controlled path and stand at the bottom.",
      },
      {
        question: "When is there guaranteed snow?",
        answer:
          "May–June has the heaviest snow. By September, snow is minimal.",
      },
      {
        question: "Is Sar Pass family-friendly?",
        answer: "Best for teens and adults. Children from age 15 with fitness.",
      },
      {
        question: "Is Kasol worth extra days?",
        answer:
          "Yes — Kasol has charming cafés, Manikaran Gurudwara (hot spring), and Parvati Valley exploration.",
      },
      {
        question: "What is the altitude risk?",
        answer:
          "13,800 ft is moderate-high. The gradual ascent and pacing minimize AMS risk.",
      },
      {
        question: "YHAI vs The Global Trek?",
        answer:
          "YHAI runs mass batches of 50–80 trekkers. The Global Trek limits to 20 for a more personal, quality experience.",
      },
      {
        question: "Any extension options?",
        answer:
          "Kheerganga hot spring trek (12 km, 2 days) from Kasol is a popular warm-up/cool-down extension.",
      },
    ],
    relatedTrekIds: ["hampta-pass", "kedarkantha", "phulara-ridge"],
  },
  {
    id: "phulara-ridge",
    name: "Phulara Ridge — India's Great Ridge Walk",
    region: "Uttarkashi, Uttarakhand",
    maxAltitude: "12,345 ft (3,764m)",
    distance: "30 km",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy to Moderate",
    bestTime: "April–June, September–November",
    startPoint: "Sankri Village (6,400 ft)",
    nearestRailhead: "Dehradun (200 km)",
    nearestAirport: "Jolly Grant, Dehradun",
    groupSize: "6–12",
    ageGroup: "12–55 years",
    price: "₹9,200",
    imageQuery: "ridge,himalaya,panorama,uttarakhand",
    description:
      "A hidden masterpiece of Uttarakhand — walk the top of a spectacular Himalayan ridgeline for 4–5 continuous hours with giant peaks on both sides simultaneously: Swargarohini, Kala Nag, Bandarpunch, and Kedarkantha.",
    overview:
      "Phulara Ridge is a hidden masterpiece of the Uttarakhand Himalayas — and one of the few treks in India where the ridge itself is the star of the show. You walk on the top of a spectacular ridgeline for 4–5 continuous hours, with giant peaks on one side and verdant valleys on the other — in both directions simultaneously. Nestled in the Govind Wildlife Sanctuary near Sankri, it shares its base with the iconic Kedarkantha and Har Ki Dun treks but offers a less-crowded, more contemplative experience. Prominent peaks visible: Swargarohini, Kala Nag (6,387m), Bandarpunch (6,316m), Ranglana, and the mighty Kedarkantha itself.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun → Sankri",
        description:
          "Drive 200km via Mussoorie–Purola–Mori. Arrive Sankri (6,400 ft). Briefing. Overnight guesthouse.",
        highlights: ["Tons River gorge", "Sankri arrival"],
      },
      {
        day: 2,
        title: "Sankri → Sikolta Camp",
        description:
          "4–5km trek through oak and rhododendron forest following ascending ridge spur. First Himalayan views. Camp at Sikolta clearing (9,514 ft).",
        highlights: [
          "Ridge trail",
          "Peek-a-boo Himalayan views",
          "Forest camp",
        ],
      },
      {
        day: 3,
        title: "Sikolta → Bhoj Gadi",
        description:
          "7km through dense birch forest into alpine meadows. Kedarkantha peak visible in full form. Camp at Bhoj Gadi (11,170 ft) — the gateway to Phulara Ridge.",
        highlights: ["Birch forest", "Kedarkantha views", "Alpine meadow camp"],
      },
      {
        day: 4,
        title: "Phulara Ridge Walk → Pushtara Meadows",
        description:
          "The defining day — 4–5 continuous hours on the Phulara Ridge with Himalayan peaks 180° in both directions. Swargarohini, Kala Nag, Bandarpunch, Kedarkantha all simultaneously visible. Descend to pristine Pushtara Meadows (9,860 ft).",
        highlights: [
          "4–5 hours ridge walking",
          "360° simultaneous Himalayan panorama",
          "Pushtara pristine meadow",
        ],
      },
      {
        day: 5,
        title: "Pushtara → Taluka → Dehradun",
        description:
          "8km descent via Taluka village back to Sankri. Drive to Dehradun.",
        highlights: ["Taluka village", "Mountain farewell"],
      },
    ],
    inclusions: [
      "Dehradun pickup & drop",
      "4 nights camps/guesthouses",
      "All meals",
      "Expert trek guide",
      "Forest permits",
      "First aid",
      "Emergency support",
    ],
    exclusions: ["Personal travel insurance", "Tips", "Personal expenses"],
    packingList: [
      "Waterproof trekking shoes",
      "Thermal layers",
      "Down jacket",
      "Rain jacket",
      "Trekking pants",
      "Warm hat and gloves",
      "Sunglasses",
      "Trekking poles",
      "Headlamp",
      "Water bottles",
      "Sunscreen",
      "Personal first aid",
      "Personal ID",
      "Cash",
    ],
    faqs: [
      {
        question: "Why is it called Phulara Ridge?",
        answer:
          "'Phulara' means 'flowering' in local dialect. The ridge blooms with alpine flowers in spring.",
      },
      {
        question: "Is the ridge walk safe?",
        answer:
          "The ridge is broad (2–5m wide) for safe walking. Not a technical knife-edge.",
      },
      {
        question: "How does this compare to Kedarkantha?",
        answer:
          "No summit push but the ridge walk experience is longer and more sustained. Many experienced trekkers prefer Phulara for its uniqueness.",
      },
      {
        question: "Is it crowded?",
        answer:
          "Much less than Kedarkantha. The less-trodden path is a major attraction.",
      },
      {
        question: "Can I combine with Kedarkantha?",
        answer:
          "Yes — 8-day combination possible using Sankri as base. The Global Trek offers this combined package.",
      },
      {
        question: "What is Pushtara Meadow?",
        answer:
          "A high-altitude pastoral meadow used by Gujjar shepherds in summer. Completely undeveloped and pristine.",
      },
      {
        question: "Is there snow on Phulara Ridge?",
        answer:
          "In winter (Dec–Mar) yes. In spring (Apr–May), patchy snow + wildflowers. Summer is green.",
      },
      {
        question: "Is Phulara Ridge a loop?",
        answer:
          "No — it's a point-to-point trek from Sankri to Pushtara then Taluka. Transfer arranged.",
      },
    ],
    relatedTrekIds: ["kedarkantha", "har-ki-dun", "kuari-pass"],
  },
  {
    id: "kedarnath-yatra",
    name: "Kedarnath Yatra — Lord Shiva's Abode",
    region: "Rudraprayag, Uttarakhand",
    maxAltitude: "11,755 ft (3,583m)",
    distance: "19 km one way",
    duration: "4 Days / 3 Nights",
    difficulty: "Moderate",
    bestTime: "May–June, September–October",
    startPoint: "Gaurikund (6,578 ft)",
    nearestRailhead: "Rishikesh (229 km)",
    nearestAirport: "Jolly Grant, Dehradun (233 km)",
    groupSize: "4–20",
    ageGroup: "10–70 years",
    price: "₹7,500",
    imageQuery: "kedarnath,temple,shiva,himalaya",
    description:
      "Kedarnath — the holiest of the 12 Jyotirlingas and the most sacred Shiva shrine in the Himalayas — a 19km trek from Gaurikund to the ancient stone temple at 3,583m built by Adi Shankaracharya, with the Kedarnath Glacier as backdrop.",
    overview:
      "Kedarnath is the holiest of the 12 Jyotirlingas and the most sacred Shiva shrine in the Himalayas. Nestled at 3,583m at the base of the Kedarnath Peak and Kedarnath Glacier, the stone temple (believed to be built by Adi Shankaracharya in the 8th century CE) has survived Himalayan winters, glacier floods, and the catastrophic 2013 cloudburst disaster. The 19 km trek from Gaurikund passes through magnificent forested terrain, the bustling pilgrim town of Rambara, Linchauli meadows, and arrives at the spiritual heart of Uttarakhand.",
    itinerary: [
      {
        day: 1,
        title: "Rishikesh → Gaurikund",
        description:
          "Drive 229km via Devprayag, Rudraprayag to Sonprayag. Biometric Yatra registration. Drive to Gaurikund (6,578 ft). Sacred hot springs. Briefing.",
        highlights: [
          "Devprayag sangam",
          "Yatra registration",
          "Sacred hot springs at Gaurikund",
        ],
      },
      {
        day: 2,
        title: "Gaurikund → Kedarnath Temple",
        description:
          "5 AM departure. 19km trek via Jungle Chatti, Bheembali, Linchauli to the sacred temple complex. Darshan at Kedarnath. Evening Aarti — the most moving mountain spiritual experience in India.",
        highlights: [
          "19km sacred trek",
          "Kedarnath temple darshan",
          "Evening Aarti ceremony",
        ],
      },
      {
        day: 3,
        title: "Kedarnath Exploration → Gaurikund",
        description:
          "Early morning Abhishek puja. Explore Gandhi Sarovar lake (2km above temple). Optional: Vasukital glacial lake. Afternoon return trek 19km to Gaurikund.",
        highlights: [
          "Abhishek puja",
          "Gandhi Sarovar lake",
          "Vasukital option",
        ],
      },
      {
        day: 4,
        title: "Gaurikund → Rishikesh",
        description:
          "Morning drive back. Drop at Rishikesh/Haridwar railway station.",
        highlights: ["Mountain farewell", "Sacred journey complete"],
      },
    ],
    inclusions: [
      "Rishikesh pickup & drop",
      "3 nights accommodation",
      "All meals",
      "Expert yatra guide (religious background)",
      "Yatra registration assistance",
      "Darshan priority guidance",
      "Temple puja booking coordination",
      "First aid",
      "Medical kit",
    ],
    exclusions: [
      "Helicopter tickets",
      "Personal travel insurance",
      "Tips",
      "Puja offerings (prasad)",
      "Pony/palki services",
    ],
    packingList: [
      "Trekking shoes (waterproof)",
      "Thermal layers",
      "Light down jacket",
      "Rain poncho",
      "Trekking pants",
      "Warm hat",
      "Gloves",
      "Sunglasses",
      "Trekking poles",
      "Water bottles (2L)",
      "Sunscreen",
      "Lip balm",
      "Personal first aid",
      "Personal medication",
      "Personal ID (mandatory)",
      "Cash",
      "Pooja items if desired",
    ],
    faqs: [
      {
        question: "Is Yatra registration mandatory?",
        answer:
          "Yes — Uttarakhand government requires biometric registration at Sonprayag. The Global Trek assists with this.",
      },
      {
        question: "When does Kedarnath temple open/close?",
        answer:
          "Opens on Akshaya Tritiya (Apr/May). Closes on Bhai Dooj (Nov). Exact dates vary by Hindu calendar.",
      },
      {
        question: "Is helicopter the only alternative to trekking?",
        answer:
          "Yes. Helipad at Phata/Sersi. The Global Trek offers helicopter packages. Pre-booking essential.",
      },
      {
        question: "How was Kedarnath affected in 2013?",
        answer:
          "The 2013 disaster (June 16–17) killed thousands. The temple structure survived, protected by a large boulder.",
      },
      {
        question: "What is the Panch Kedar?",
        answer:
          "Five sacred Shiva temples: Kedarnath, Tungnath, Rudranath, Madmaheshwar, Kalpeshwar. The Global Trek offers the complete Panch Kedar yatra.",
      },
      {
        question: "What to carry for darshan?",
        answer:
          "No leather items inside. Photography allowed outside only. Prasad available at temple.",
      },
      {
        question: "Is Kedarnath suitable for elderly?",
        answer:
          "With helicopter, yes. Pony/palki (palanquin) services available for the trek.",
      },
      {
        question: "What is Gandhi Sarovar?",
        answer:
          "A small lake 2km above the temple, named after Mahatma Gandhi's ashes immersion. Peaceful and less visited.",
      },
    ],
    relatedTrekIds: ["chopta-tungnath", "do-dham", "char-dham"],
  },
  {
    id: "do-dham",
    name: "Do Dham Yatra — Kedarnath & Badrinath",
    region: "Rudraprayag + Chamoli, Uttarakhand",
    maxAltitude: "11,755 ft (3,583m)",
    distance: "19 km trek + road",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    bestTime: "May–June, September–October",
    startPoint: "Haridwar",
    nearestRailhead: "Haridwar",
    nearestAirport: "Jolly Grant, Dehradun (55 km)",
    groupSize: "4–20",
    ageGroup: "All ages",
    price: "₹18,999",
    imageQuery: "badrinath,temple,pilgrimage,himalaya",
    description:
      "Do Dham covers the two most sacred shrines of the Garhwal Himalayas — Kedarnath (Lord Shiva's jyotirlinga) and Badrinath (Lord Vishnu's dhama) — the spiritual heart of Uttarakhand, in a condensed, deeply fulfilling format.",
    overview:
      "Do Dham Yatra covers the two most sacred shrines of the Garhwal Himalayas — Kedarnath (the Shiva jyotirlinga) and Badrinath (the Vishnu dhama). Together, they form the spiritual heart of Uttarakhand's Char Dham. For those unable to undertake the full Char Dham Yatra, Do Dham provides the most essential pilgrimage experience in a condensed, deeply fulfilling format that includes the complete Kedarnath trek, Badrinath darshan, Mana Village, Tapt Kund, and Brahma Kapal.",
    itinerary: [
      {
        day: 1,
        title: "Haridwar → Guptkashi",
        description:
          "Drive 210km. Check in at Guptkashi — base for Kedarnath. Visit Ardhnarishwar Temple.",
        highlights: ["Guptkashi town", "Ardhnarishwar Temple"],
      },
      {
        day: 2,
        title: "Guptkashi → Kedarnath Trek",
        description:
          "Drive to Gaurikund. Trek 19km to Kedarnath Temple. Evening Aarti.",
        highlights: ["Kedarnath trek", "Temple darshan", "Evening Aarti"],
      },
      {
        day: 3,
        title: "Kedarnath → Gaurikund",
        description: "Morning Abhishek puja. Return 19km trek to Gaurikund.",
        highlights: ["Morning puja", "Trek descent"],
      },
      {
        day: 4,
        title: "Gaurikund → Badrinath",
        description:
          "Drive 240km via Rudraprayag–Chamoli–Joshimath to Badrinath.",
        highlights: [
          "Scenic mountain drive",
          "Joshimath transit",
          "Badrinath arrival",
        ],
      },
      {
        day: 5,
        title: "Badrinath Darshan",
        description:
          "Brahma Muhurta Abhishek, Tapt Kund holy dip, Badri-Vishal darshan, Brahma Kapal puja, Mana Village (last Indian village before Tibet), Vyas Gufa, Saraswati River.",
        highlights: [
          "Tapt Kund holy dip",
          "Badrinath temple darshan",
          "Mana Village — last Indian village",
          "Vyas Gufa",
        ],
      },
      {
        day: 6,
        title: "Badrinath → Haridwar",
        description: "Drive 320km back to Haridwar.",
        highlights: ["Devprayag sangam", "Journey complete"],
      },
      {
        day: 7,
        title: "Buffer / Departure",
        description:
          "Buffer day for weather or delays. Departure from Haridwar.",
        highlights: ["Departure day"],
      },
    ],
    inclusions: [
      "Haridwar pickup & drop",
      "6 nights accommodation",
      "All meals",
      "Expert yatra guide",
      "Yatra registration assistance",
      "Puja coordination at both dhams",
      "Medical kit",
      "All permits",
    ],
    exclusions: [
      "Helicopter tickets",
      "Personal travel insurance",
      "Tips",
      "Personal puja offerings",
    ],
    packingList: [
      "Comfortable walking shoes",
      "Light trekking shoes for Kedarnath",
      "Thermal layers",
      "Light down jacket",
      "Rain poncho",
      "Comfortable pants",
      "Warm hat",
      "Sunglasses",
      "Water bottles",
      "Sunscreen",
      "Personal medication",
      "Personal ID (mandatory for yatra registration)",
      "Cash",
      "Pooja items",
    ],
    faqs: [
      {
        question: "What is Do Dham Yatra?",
        answer:
          "Kedarnath (Shiva jyotirlinga) + Badrinath (Vishnu dhama) — the two most sacred shrines in the Garhwal Himalayas.",
      },
      {
        question: "Can elderly do Do Dham?",
        answer:
          "Yes — Badrinath is road-accessible. Helicopter/palki available for Kedarnath.",
      },
      {
        question: "What is Tapt Kund?",
        answer:
          "A natural hot spring (45°C) at Badrinath entrance. All pilgrims traditionally dip before temple.",
      },
      {
        question: "What is Brahma Kapal?",
        answer:
          "A flat rock platform at Badrinath on Alaknanda River for pind-daan (ancestor soul liberation) rituals.",
      },
      {
        question: "What is Mana Village?",
        answer:
          "India's last village before the Tibet border — has Vyas Gufa, Ganesh Gufa, Bhim Pul (single rock bridge over Saraswati).",
      },
      {
        question: "How is Do Dham different from Char Dham?",
        answer:
          "Do Dham (Kedarnath + Badrinath) is the 2-shrine condensed version. Char Dham adds Yamunotri and Gangotri.",
      },
      {
        question: "Best time for Do Dham?",
        answer: "May–June for peak season, September–October for fewer crowds.",
      },
      {
        question: "Is Valley of Flowers accessible en route?",
        answer:
          "Yes — nearby Joshimath. July–August it's in full bloom (UNESCO World Heritage).",
      },
    ],
    relatedTrekIds: ["kedarnath-yatra", "char-dham", "kuari-pass"],
  },
  {
    id: "char-dham",
    name: "Char Dham Yatra — The Great Himalayan Pilgrimage",
    region: "Uttarakhand (Garhwal Himalayas)",
    maxAltitude: "11,755 ft (3,583m)",
    distance: "Yamunotri → Gangotri → Kedarnath → Badrinath",
    duration: "11–13 Days",
    difficulty: "Easy to Moderate",
    bestTime: "May–June, September–October",
    startPoint: "Haridwar",
    nearestRailhead: "Haridwar",
    nearestAirport: "Jolly Grant, Dehradun (55 km)",
    groupSize: "4–20",
    ageGroup: "All ages",
    price: "₹32,999",
    imageQuery: "char,dham,pilgrimage,himalaya",
    description:
      "India's holiest pilgrimage — four divine abodes established by Adi Shankaracharya: Yamunotri (source of Yamuna), Gangotri (source of Ganga), Kedarnath (Shiva), and Badrinath (Vishnu), following the west-to-east Himalayan arc.",
    overview:
      "Char Dham Yatra is one of India's most sacred pilgrimages — four divine abodes in the Garhwal Himalayas that every devout Hindu aspires to visit in their lifetime. According to Adi Shankaracharya who established these four dhams in the 8th century, completing the Char Dham Yatra washes away all sins and breaks the cycle of rebirth. The four dhams follow a west-to-east sequence: Yamunotri (3,291m), Gangotri (3,048m), Kedarnath (3,583m), and Badrinath (3,133m).",
    itinerary: [
      {
        day: 1,
        title: "Haridwar → Barkot",
        description:
          "Drive 170km via Rishikesh, Chamba, Dharasu to Barkot — base for Yamunotri.",
        highlights: ["Rishikesh transit", "Yamuna valley", "Barkot arrival"],
      },
      {
        day: 2,
        title: "Barkot → Yamunotri → Barkot",
        description:
          "Drive to Janki Chatti. Trek 6km to Yamunotri Temple (3,291m). Sacred Surya Kund boiling spring, Divya Shila, Yamuna darshan. Return to Barkot.",
        highlights: [
          "Yamunotri Temple",
          "Surya Kund boiling spring",
          "Source of Yamuna River",
        ],
      },
      {
        day: 3,
        title: "Barkot → Uttarkashi",
        description:
          "Drive 100km to Uttarkashi on Bhagirathi River. Visit ancient Vishwanath Temple.",
        highlights: ["Uttarkashi town", "Vishwanath Temple"],
      },
      {
        day: 4,
        title: "Uttarkashi → Gangotri",
        description:
          "Drive 100km to Gangotri (3,048m). Sacred Bhagirathi River. Gangotri Temple darshan. Optional: 18km further to Gaumukh glacier.",
        highlights: [
          "Gangotri Temple",
          "Bhagirathi River source",
          "Gaumukh glacier option",
        ],
      },
      {
        day: 5,
        title: "Uttarkashi → Guptkashi",
        description:
          "Drive 240km via Chamba, Rishikesh, Rudraprayag to Guptkashi.",
        highlights: ["Devprayag sangam", "Rudraprayag", "Guptkashi"],
      },
      {
        day: 6,
        title: "Guptkashi → Kedarnath Trek",
        description:
          "Drive to Gaurikund. Trek 19km to Kedarnath (3,583m). Evening Aarti.",
        highlights: ["Kedarnath trek", "Jyotirlinga darshan", "Evening Aarti"],
      },
      {
        day: 7,
        title: "Kedarnath → Guptkashi",
        description:
          "Morning darshan and Abhishek puja. Descend 19km. Overnight Guptkashi.",
        highlights: ["Morning puja", "Trek descent"],
      },
      {
        day: 8,
        title: "Guptkashi → Joshimath",
        description: "Drive 150km via Chamoli, Pipalkoti to Joshimath.",
        highlights: ["Chamoli", "Joshimath arrival"],
      },
      {
        day: 9,
        title: "Joshimath → Badrinath → Mana Village",
        description:
          "Drive 50km to Badrinath. Tapt Kund dip. Badri-Vishal darshan. Brahma Kapal. Mana Village. Vyas Gufa, Ganesh Gufa, Bhim Pul.",
        highlights: [
          "Badrinath darshan",
          "Tapt Kund",
          "Mana Village — last village before Tibet",
        ],
      },
      {
        day: 10,
        title: "Badrinath → Rishikesh",
        description: "Drive 320km. Ganga Aarti at Triveni Ghat, Rishikesh.",
        highlights: [
          "Devprayag sangam",
          "Rishikesh Ganga Aarti",
          "Journey completion",
        ],
      },
    ],
    inclusions: [
      "Haridwar pickup & drop (round trip)",
      "10 nights accommodation (hotels + dharamshalas)",
      "Daily breakfast + dinner",
      "All AC vehicle transport",
      "Expert yatra guide",
      "Yatra registration + forest permits",
      "Temple puja coordination",
      "Medical kit + O2 cylinder",
      "Helicopter option for Kedarnath leg",
    ],
    exclusions: [
      "Helicopter tickets",
      "Lunch (except trek days)",
      "Personal travel insurance",
      "Tips",
      "Personal puja offerings",
      "Camera fees at temples",
    ],
    packingList: [
      "Comfortable walking shoes",
      "Trekking shoes (for Kedarnath)",
      "Thermal layers",
      "Light jacket",
      "Rain poncho",
      "Comfortable pants",
      "Warm hat",
      "Sunglasses",
      "Water bottles",
      "Sunscreen",
      "Personal medication",
      "Personal ID (mandatory)",
      "Cash for all dhams",
      "Pooja items",
      "Camera",
    ],
    faqs: [
      {
        question: "What is the significance of west-to-east order?",
        answer:
          "Traditionally, yatris start from Yamunotri in the west and end at Badrinath in the east — representing the journey from birth to liberation.",
      },
      {
        question: "Can elderly complete Char Dham?",
        answer:
          "All dhams except Kedarnath are road-accessible. Helicopter/palki for Kedarnath makes it accessible for all ages.",
      },
      {
        question: "What is Gaumukh?",
        answer:
          "The glacier mouth — actual source of the Ganga — 18km from Gangotri. A powerful trekking extension.",
      },
      {
        question: "What is Tapt Kund at Badrinath?",
        answer:
          "A natural hot spring (45°C) at the temple entrance. All pilgrims traditionally dip before entering.",
      },
      {
        question: "Is Mana Village worth visiting?",
        answer:
          "Absolutely — the last village before Tibet has Vyas Gufa (where Mahabharata was composed), Ganesh Gufa, Bhim Pul, and authentic Bhotiya culture.",
      },
      {
        question: "How crowded is Char Dham season?",
        answer:
          "Peak (June + September) is extremely crowded. The Global Trek recommends May or October.",
      },
      {
        question: "What is Brahma Kapal?",
        answer:
          "A flat rock platform at Badrinath on the Alaknanda River where Hindus perform pind-daan (ancestor soul liberation rituals).",
      },
      {
        question: "Is Valley of Flowers worth adding?",
        answer:
          "Yes — July–August it's a UNESCO World Heritage Site carpeted in 300+ wildflower species. Highly recommended as an add-on.",
      },
    ],
    relatedTrekIds: ["kedarnath-yatra", "do-dham", "kuari-pass"],
  },
];

export const trekById = (id: string): Trek | undefined =>
  treksData.find((t) => t.id === id);
