const kedarnathItinerary = [
  {
    day: 1,
    title: "Haridwar / Rishikesh → Sonprayag",
    description: "Depart from Haridwar Railway Station at 6:00 AM in our private tempo traveller. The 230km journey winds through the Garhwal Himalayan foothills — past Devprayag (Alaknanda–Bhagirathi confluence), Srinagar (Garhwal), and Rudraprayag (Mandakini–Alaknanda confluence) before reaching Sonprayag (6,100ft) by evening. Check-in at pre-booked guesthouse, dinner, safety briefing, and RFID wristband distribution.",
    highlights: [
      "Devprayag — sacred confluence of Alaknanda & Bhagirathi (Ganga origin)",
      "Rudraprayag — Mandakini–Alaknanda sangam, iconic suspension bridge",
      "Briefing on AMS symptoms, pace management, and trail rules",
      "RFID wristband collection and Uttarakhand registration verification"
    ],
    startAltitude: 1e3,
    endAltitude: 6100,
    altitudeGain: 5100,
    distanceKm: 230,
    duration: "8 hours by road",
    dayDifficulty: "Easy",
    terrain: "Mountain highway through Garhwal river valleys",
    campsite: {
      name: "Hotel Shiv Kripa / Guesthouse Sonprayag",
      altitude: 6100,
      amenities: [
        "Hot water",
        "Attached bathroom",
        "Geyser",
        "Charging points",
        "Room heater"
      ]
    },
    mealDetail: {
      breakfast: "At Haridwar departure point — poha, chai",
      lunch: "En route dhaba near Rudraprayag — dal tadka, chapati, rice, sabzi",
      dinner: "Guesthouse dinner — rajma chawal or aloo puri, dahi, pickle",
      snacks: "Trail mix, biscuits in vehicle"
    },
    waterSources: [
      "Bottled water in vehicle (provided)",
      "Mandakini River (not for direct drinking — river water)",
      "Sonprayag tap water (potable with purification tablet)"
    ],
    emergencyExit: "Any point on NH58/State Highway — full road connectivity throughout. Nearest government hospital: CHC Ukhimath (25km from Sonprayag) or Rudraprayag District Hospital (75km).",
    photographyHighlights: [
      "Devprayag confluence — twin rivers meeting (stunning from Sangam Ghat)",
      "Rudraprayag suspension bridge with Mandakini backdrop",
      "Golden hour on Garhwal peaks from Sonprayag bridge"
    ],
    weatherPattern: "May–June: 15–22°C days, 8–12°C nights, clear. Sept–Oct: 12–18°C days, 5–8°C nights, occasional fog morning.",
    wildlife: [
      "Langur monkeys (road-side)",
      "Himalayan Griffon Vultures (thermal soaring)"
    ],
    culturalNotes: "Devprayag is where the Ganga is formally named — Bhagirathi (from Gangotri) meets Alaknanda here. Rudraprayag is named after Lord Shiva (Rudra). The Panch Prayag (five sacred confluences) all lie on this route.",
    acclimatizationNotes: "No significant altitude yet. Drink 3L water today. Avoid alcohol. Sleep at 6,100ft is gentle acclimatization for the days ahead."
  },
  {
    day: 2,
    title: "Sonprayag → Gaurikund → Jungle Chatti → Bheembali",
    description: "Wake at 5:30 AM. Shared jeep (6km, 30 min) from Sonprayag to Gaurikund (6,503ft) — private vehicles not permitted beyond Sonprayag. Hot spring dip at Gaurikund (optional, spiritually significant). Trek begins at Gaurikund base gate after RFID scan. Trail climbs through dense rhododendron and oak forest, passing Jungle Chatti tea stalls (7,890ft) before the long ascent to Bheembali government medical post (9,334ft). 9km, 6 hours.",
    highlights: [
      "Gaurikund hot springs — where Goddess Parvati meditated before Lord Shiva's arrival",
      "Jungle Chatti — last proper tea/snack point before high altitude",
      "Bheembali government medical checkpost — oxygen, nurse, rest area",
      "First views of the Kedarnath valley opening up above treeline"
    ],
    startAltitude: 6503,
    endAltitude: 9334,
    altitudeGain: 2831,
    distanceKm: 9,
    duration: "6 hours",
    dayDifficulty: "Moderate",
    terrain: "Paved stone steps and gravel trail through rhododendron/oak forest, then open alpine scrub",
    campsite: {
      name: "Bheembali Government Camp / Private Lodge",
      altitude: 9334,
      amenities: [
        "Government medical post",
        "Oxygen supply",
        "Tea stalls",
        "Basic toilet",
        "Covered rest area"
      ]
    },
    mealDetail: {
      breakfast: "Gaurikund dhaba — poha, paratha, chai before trek start",
      lunch: "Jungle Chatti tea stalls — Maggi noodles, chai, biscuits (carried packed lunch)",
      dinner: "Bheembali camp — dal khichdi, sabzi, chapati, herbal tea",
      snacks: "Energy bars, dry fruits, glucose biscuits (guide distributes)"
    },
    waterSources: [
      "Mandakini River — fast-flowing and clean at Gaurikund start",
      "Government water taps at Jungle Chatti (7,890ft)",
      "Natural spring at Bheembali (filtered, verified clean)"
    ],
    emergencyExit: "Government medical checkpost at Bheembali (9,334ft) with basic emergency care and oxygen. Helicopter pad access point: Phata Helipad (30 min descent to road + 10 min drive). Jeep connectivity at Gaurikund for road evacuation.",
    photographyHighlights: [
      "Gaurikund temple courtyard and hot spring pool",
      "Mandakini River gorge from the first stone bridge",
      "Rhododendron forest canopy (March–May: stunning red blooms)",
      "First valley view of Kedarnath range from Bheembali ridge"
    ],
    weatherPattern: "May: 10–18°C, afternoon mist possible. June: 12–20°C at start, 6–10°C at Bheembali. Sept: clearest skies, 8–14°C. Oct: 4–10°C at Bheembali, morning frost possible.",
    wildlife: [
      "Himalayan Monal (pheasant) — forest sections",
      "Langur monkeys — Gaurikund area",
      "Barking deer — early morning forest",
      "Yellow-billed Blue Magpie"
    ],
    culturalNotes: "Gaurikund is named for Goddess Gauri (Parvati). The hot spring here is believed to be where she prayed for Lord Shiva. Pilgrims traditionally bathe here before ascending to Kedarnath. The trail is the ancient Panch Kedar pilgrimage route used for centuries.",
    acclimatizationNotes: "Altitude gain is significant (+2,831ft in one day). Walk at 'Paidal Chalte Raho' pace — slow and steady. Headache at Bheembali is common and normal. Take Diamox 125mg if experiencing headache (guide carries supply). Do NOT push pace."
  },
  {
    day: 3,
    title: "Bheembali → Lincholi → Kedarnath Base → Temple Darshan",
    description: "Early start at 6:00 AM. The trail continues above treeline through open alpine terrain. Pass Lincholi (9,908ft) — a significant halt point with medical facility. The last 3km from Kedarnath base camp (10,860ft) to the temple plateau (11,755ft) is the most spiritually charged section — the valley opens dramatically, the Kedarnath Peak (22,769ft) comes into full view, and the grey stone temple emerges against the glacier. Arrive for evening Sandhya Aarti (5:00 PM). 7km, 5 hours.",
    highlights: [
      "Lincholi — medical post, last helicopter emergency landing point on trail",
      "Alpine meadow terrain — bharal (blue sheep) common here",
      "Kedarnath Valley panorama — 360° Himalayan views above 10,500ft",
      "First sight of Kedarnath Temple against the Chorabari glacier",
      "Sandhya Aarti at 5:00 PM — lamps, chants, full temple illumination"
    ],
    startAltitude: 9334,
    endAltitude: 11755,
    altitudeGain: 2421,
    distanceKm: 7,
    duration: "5 hours",
    dayDifficulty: "Moderate",
    terrain: "Open alpine trail, rocky switchbacks, moraine edges, final temple plaza stone pavement",
    campsite: {
      name: "Kedarnath Base Camp / GMVN Tourist Rest House",
      altitude: 11755,
      amenities: [
        "GMVN Rest House",
        "Dharamshala accommodation",
        "24hr medical post",
        "Oxygen cylinders",
        "Helicopter booking counter"
      ]
    },
    mealDetail: {
      breakfast: "Bheembali camp — upma or paratha, chai (6:00 AM)",
      lunch: "Lincholi tea stalls — Maggi, chai, biscuits",
      dinner: "Kedarnath dhaba/GMVN canteen — dal, sabzi, chapati, kheer",
      snacks: "Langar at temple entrance (free prasad food for pilgrims)"
    },
    waterSources: [
      "Mandakini River origin stream — pristine glacial meltwater (filter recommended)",
      "Government water tanks at Lincholi",
      "Temple authority water facility at Kedarnath base"
    ],
    emergencyExit: "Kedarnath has dedicated emergency helipad (used in 2013 rescue). NDRF post at base camp. Helicopter evacuation available from temple helipad in severe cases — 8 min to Phata/Guptkashi. 24hr oxygen facility at GMVN medical center.",
    photographyHighlights: [
      "Temple exterior — NO photography inside garbhagriha (sanctum sanctorum)",
      "Kedarnath Peak (22,769ft) with temple foreground — iconic composition",
      "Sandhya Aarti long exposure — lamp trails and temple illumination",
      "Chorabari glacier and Vasuki Tal approach (visible from ridge above temple)",
      "Sunrise from temple complex — golden light on surrounding peaks"
    ],
    weatherPattern: "At 11,755ft: May–June: 2–8°C days, -2–2°C nights. September: 4–10°C days, 0–4°C nights. October: 0–6°C days, -5–0°C nights. Wind can be strong (30–50km/h) at any time. Snow possible October onwards.",
    wildlife: [
      "Bharal (Himalayan blue sheep) — common on rocky slopes above 10,000ft",
      "Himalayan Monal — alpine meadows",
      "Snow pigeon — temple area",
      "Himalayan Snowcock"
    ],
    culturalNotes: "Kedarnath is one of the 12 Jyotirlingas and the most northernmost. The temple was built (or restored) by Adi Shankaracharya in the 8th century CE. The Samadhi of Adi Shankaracharya is directly behind the temple. The legend: after the Kurukshetra war, the Pandavas sought Lord Shiva's forgiveness; Shiva fled in bull form and submerged here, leaving only his hump above ground — worshipped as the Shivalinga. The same divine bull's face is worshipped at Rudranath, arms at Tungnath, belly at Madmaheshwar, and locks at Kalpeshwar — the Panch Kedar pilgrimage.",
    acclimatizationNotes: "11,755ft is the high point. If any pilgrim shows HACE/HAPE symptoms (confusion, severe headache, gurgling sound in chest), immediate descent and oxygen administration. Guide has pulse oximeter — SpO2 below 85% triggers evacuation protocol. Spend maximum time at temple, not rushing. Slow pace on final ascent.",
    sunriseTime: "5:42 AM (May), 6:10 AM (Oct)",
    sunsetTime: "7:18 PM (May), 5:55 PM (Oct)"
  },
  {
    day: 4,
    title: "Kedarnath Abhishek Darshan → Descent to Gaurikund",
    description: "Wake at 3:00 AM for Pratah Puja (4:00–7:00 AM) — the most sacred slot requiring pre-registration. Attend Rudrabhishek or Sampoorna Puja as booked. Full temple circuit: garbhagriha, outer pradakshina, Adi Shankaracharya samadhi at rear, Hamsa Kund nearby. Begin descent to Gaurikund by 10:00 AM — descent is physically gentler but requires careful footing on stone steps. Reach Gaurikund by 5:00 PM. Hot spring bath, prasad dinner. 16km descent, 7 hours.",
    highlights: [
      "4:00 AM Pratah Puja — innermost sanctum access with priest-guided abhishek",
      "Adi Shankaracharya samadhi — the philosopher's resting place, 8th century",
      "Hamsa Kund — sacred lake near the temple (1km side trip)",
      "Descent views — Mandakini Valley fully visible on way down",
      "Gaurikund hot spring bath — completes the pilgrimage cycle"
    ],
    startAltitude: 11755,
    endAltitude: 6503,
    altitudeGain: -5252,
    distanceKm: 16,
    duration: "7 hours",
    dayDifficulty: "Moderate",
    terrain: "Stone-paved steps and gravel trail — steep in sections, requires trekking poles for descent",
    campsite: {
      name: "Gaurikund Guesthouse / Sonprayag Hotel",
      altitude: 6503,
      amenities: [
        "Hot spring nearby",
        "Hot water shower",
        "Charging points",
        "Restaurant",
        "Market area"
      ]
    },
    mealDetail: {
      breakfast: "Temple langar / prasad at 4:00 AM before puja (light)",
      lunch: "Lincholi or Jungle Chatti — packed lunch + Maggi and chai stops",
      dinner: "Gaurikund dhaba — special celebratory meal, mithai (sweets), chai",
      snacks: "Temple prasad (peda, mishri), energy bars during descent"
    },
    waterSources: [
      "Temple water facility at Kedarnath",
      "Multiple government water points on descent trail",
      "Mandakini River — descent follows river for lower half"
    ],
    emergencyExit: "Full road connectivity at Gaurikund. Government medical posts at Bheembali and Lincholi for descent injuries. Pony/doli available if knee injury occurs on descent (common — inform guide immediately). Phata helicopter pad reachable within 2 hours of upper trail.",
    photographyHighlights: [
      "Temple at pre-dawn — lit by ritual lamps, deep shadows",
      "Aarti smoke and lamp light against the glacier backdrop",
      "Mandakini Valley from the descent — dramatic gorge photography",
      "Gaurikund temple pool and waterfall"
    ],
    weatherPattern: "Morning descent often has the clearest views. By 2–3 PM, clouds typically build from valleys. Descent in light rain is common — rain covers provided.",
    wildlife: [
      "Bharal on upper rocky sections (morning)",
      "Himalayan Monal in forest sections",
      "River kingfisher near Mandakini at lower altitudes"
    ],
    culturalNotes: "The Adi Shankaracharya samadhi at the rear of the temple is where the great philosopher-saint attained mahasamadhi (final liberation) at age 32. Performing pradakshina (circumambulation) of the main temple 3 times is traditional. Hamsa Kund is where Brahma is said to have performed tapas.",
    acclimatizationNotes: "Descending rapidly from 11,755ft — AMS symptoms typically resolve on descent. Ensure trekking poles are used to protect knees on long stone-step descent. Hydrate continuously. Watch for fatigue-induced slip risk."
  },
  {
    day: 5,
    title: "Gaurikund → Sonprayag → Rishikesh (Drive)",
    description: "Breakfast at Gaurikund, shared jeep back to Sonprayag, then our vehicle departs at 9:00 AM for the return 230km drive to Rishikesh/Haridwar. Stop at Rudraprayag for lunch and final puja at the Rudranath temple (one of the Panch Kedar group). Arrive Rishikesh/Haridwar by 6:00–7:00 PM. Optional Ganga Aarti at Har Ki Pauri if arriving before sunset. Trip concludes here.",
    highlights: [
      "Rudraprayag Shiva temple — en route stop, Panch Prayag significance",
      "Ganga Aarti at Har Ki Pauri, Haridwar (if timed right)",
      "Certificate of completion distributed in vehicle",
      "Final team debrief and future trek recommendations"
    ],
    startAltitude: 6503,
    endAltitude: 1e3,
    altitudeGain: -5503,
    distanceKm: 230,
    duration: "8 hours by road",
    dayDifficulty: "Easy",
    terrain: "Mountain highway, descending",
    campsite: {
      name: "Drop-off at Haridwar/Rishikesh (no accommodation included)",
      altitude: 1e3,
      amenities: ["Drop at railway station / bus stand"]
    },
    mealDetail: {
      breakfast: "Gaurikund dhaba — paratha, chai, fruit",
      lunch: "Rudraprayag — restaurant lunch, dal, rice, sabzi",
      dinner: "On own — Rishikesh restaurants recommended",
      snacks: "Vehicle snacks provided"
    },
    waterSources: ["Bottled water in vehicle", "Restaurant stops en route"],
    emergencyExit: "Full highway connectivity throughout. No altitude concerns.",
    photographyHighlights: [
      "Ganga Aarti at Har Ki Pauri (golden hour, lamp reflections on Ganga)",
      "Final valley views looking back at Kedarnath range from highway"
    ],
    weatherPattern: "Variable valley weather. Usually pleasant by Rishikesh altitude.",
    wildlife: [],
    culturalNotes: "Haridwar (Gateway to God) is one of the seven holiest Hindu cities. Har Ki Pauri ghat is where the Ganga descends from the mountains to the plains — the evening aarti here has occurred daily for centuries. Completing a Kedarnath yatra and attending the Haridwar aarti on return is traditional.",
    acclimatizationNotes: "Descending to valley altitude — no AMS concerns. Fatigue is normal after 4 days of trekking. Rest recommended on Day 6 before resuming normal activities."
  }
];
const kedarnathSafety = {
  guideInfo: {
    name: "Rameshwar Prasad Tiwari",
    certification: "NIM Certified Trek Leader, WFR Level 2, Government of Uttarakhand Licensed Mountain Guide",
    experience: "18 years, 500+ Kedarnath pilgrimage treks",
    languages: ["Hindi", "Sanskrit (religious chants)", "Basic English"]
  },
  satellitePhone: {
    model: "Garmin inReach Mini 2",
    coverage: "Global Iridium satellite — works at Kedarnath summit year-round"
  },
  helicopterLandingZone: {
    location: "Phata Helipad (primary) / Kedarnath Temple helipad (emergency)",
    coordinates: "30.7597°N, 78.9756°E (Phata)",
    nearestTo: "20 km from Kedarnath Temple by road; 8-min flight"
  },
  nearestHospital: {
    name: "Community Health Centre Ukhimath + Rudraprayag District Hospital (ICU)",
    distance: "25 km from Sonprayag (CHC); 75 km (District Hospital)",
    phone: "+91-1364-233523",
    address: "Rudraprayag District Hospital, Rudraprayag, Uttarakhand 246171",
    emergencyAvailable: true
  },
  oxygenCylinders: {
    count: 6,
    capacity: "5L medical grade",
    locations: [
      "Gaurikund base camp",
      "Bheembali medical post",
      "Lincholi medical post",
      "Kedarnath base camp"
    ]
  },
  pulseOximeter: true,
  firstAidKit: {
    medications: [
      "Diamox (Acetazolamide 250mg) — AMS prevention and treatment",
      "Dexamethasone 8mg — HACE/HAPE emergency",
      "Nifedipine — HAPE treatment",
      "ORS sachets (x20)",
      "Paracetamol 500mg",
      "Ibuprofen 400mg",
      "Antacid (Gelusil)",
      "Antihistamine (Avil 25mg)",
      "Betadine solution"
    ],
    equipment: [
      "Pulse oximeter (x2)",
      "Blood pressure cuff",
      "Stretcher (collapsible)",
      "Cervical collar",
      "Thermal emergency blanket (x4)",
      "Waterproof wound dressings",
      "Triangular bandage",
      "SAM splint"
    ]
  },
  amsProtocol: {
    stage1: {
      symptoms: [
        "Headache",
        "Mild nausea",
        "Fatigue",
        "Poor sleep",
        "Loss of appetite"
      ],
      treatment: "Stop ascent. Rest 30 min. Hydrate (500ml water). Paracetamol for headache. Monitor SpO2. If no improvement in 1 hour, administer Diamox 125mg. Do NOT ascend further until symptom-free for 4 hours."
    },
    stage2: {
      symptoms: [
        "Severe headache unresponsive to paracetamol",
        "Vomiting",
        "Extreme fatigue",
        "Loss of coordination",
        "SpO2 < 88%"
      ],
      treatment: "Immediate descent minimum 500m. Administer oxygen via mask (2–4L/min). Give Diamox 250mg. Contact base via satellite phone. Prepare for helicopter evacuation if descent route is blocked."
    },
    stage3: {
      symptoms: [
        "Gurgling sound in chest (HAPE)",
        "Confusion or altered consciousness (HACE)",
        "Inability to walk",
        "Cyanosis (blue lips)",
        "SpO2 < 75%"
      ],
      treatment: "EMERGENCY. Administer O2 at 6L/min. Dexamethasone 8mg IV/IM (HACE) or Nifedipine 30mg (HAPE). Activate helicopter evacuation immediately. Do NOT leave patient alone. Descent by doli/stretcher if helicopter delayed."
    }
  },
  evacuationProcedure: "1. Guide activates Garmin inReach SOS. 2. Call Kedarnath Emergency Control Room (+91-1364-234340). 3. Call Phata Helipad (+91-9411386802). 4. Prepare patient for helicopter stretcher board. 5. Nearest hospital: Rudraprayag District Hospital (75km, ICU available). 6. Notify next of kin via satellite message.",
  checkInFrequency: "3x daily pulse oximetry checks — morning, lunch, evening camp",
  teamRatio: "1 certified guide per 8 pilgrims maximum",
  emergencyContacts: [
    {
      name: "Kedarnath Emergency Control Room",
      role: "Uttarakhand Disaster Management",
      phone: "+91-1364-234340"
    },
    {
      name: "Phata Helipad Operations",
      role: "Helicopter Evacuation",
      phone: "+91-9411386802"
    },
    {
      name: "Rudraprayag Police",
      role: "District Emergency",
      phone: "100 / +91-1364-233011"
    },
    { name: "Rameshwar Tiwari", role: "Lead Guide", phone: "+91-9456123789" }
  ]
};
const kedarnathBatches = [
  {
    id: "kn-b1",
    startDate: "2026-05-10",
    endDate: "2026-05-14",
    totalSeats: 12,
    bookedSeats: 10,
    availableSeats: 2,
    price: 8999,
    status: "almost_full",
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Rameshwar Tiwari",
    notes: "Opening season — high spiritual energy, some snow possible on upper trail"
  },
  {
    id: "kn-b2",
    startDate: "2026-06-05",
    endDate: "2026-06-09",
    totalSeats: 14,
    bookedSeats: 6,
    availableSeats: 8,
    price: 8999,
    status: "available",
    discounts: { group5Plus: 10, earlyBird: 8 },
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Rameshwar Tiwari"
  },
  {
    id: "kn-b3",
    startDate: "2026-09-10",
    endDate: "2026-09-14",
    totalSeats: 14,
    bookedSeats: 9,
    availableSeats: 5,
    price: 8999,
    status: "limited",
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Dinesh Uniyal",
    notes: "Post-monsoon — clearest skies, best temple photography"
  },
  {
    id: "kn-b4",
    startDate: "2026-10-01",
    endDate: "2026-10-05",
    totalSeats: 14,
    bookedSeats: 12,
    availableSeats: 2,
    price: 9499,
    status: "almost_full",
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Rameshwar Tiwari",
    notes: "Navratri season — highest spiritual energy of the year"
  },
  {
    id: "kn-b5",
    startDate: "2026-10-20",
    endDate: "2026-10-24",
    totalSeats: 12,
    bookedSeats: 4,
    availableSeats: 8,
    price: 9499,
    status: "available",
    discounts: { group5Plus: 10, earlyBird: 0 },
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Dinesh Uniyal",
    notes: "Last batch before temple closing — Diwali season, special atmosphere"
  }
];
const kedarnathReviews = [
  {
    id: "kn-r1",
    author: "Ramesh Agarwal",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "Answered 40 years of prayers — Baba Kedarnath called me",
    comment: "At 62 years old, I finally made it to Kedarnath. I had tried twice before and failed — once due to floods, once due to health. This time, with Global Trek's guidance, medical support at every checkpoint, and our guide Rameshwarji's spiritual knowledge and physical protection, I stood before the Jyotirlinga. The 4 AM abhishek puja in the garbhagriha was the most powerful spiritual experience of my life. The Mandakini River cascading from Vasuki Tal, the snow-capped Kedarnath peak watching over the temple — this is truly God's own abode.",
    date: "2024-09-18",
    month: 9,
    groupType: "family",
    verified: true,
    helpful: 92,
    tripYear: 2024
  },
  {
    id: "kn-r2",
    author: "Sunita Devi Sharma",
    rating: 5,
    dimensions: {
      food: 4.5,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "My mother's last wish fulfilled — she trekked at 68",
    comment: "My 68-year-old mother had one wish — Kedarnath darshan. I was terrified. Global Trek's team did a full medical assessment, arranged a pony for the steep sections, and had a guide exclusively with her for the high-altitude sections. She walked the last kilometer to the temple herself — she refused to ride the pony for that final approach. The guide held her hand on the stone steps. When she prostrated before Baba Kedarnath, we both wept. Thank you for making the impossible possible.",
    date: "2024-06-14",
    month: 6,
    groupType: "family",
    verified: true,
    helpful: 147,
    tripYear: 2024
  },
  {
    id: "kn-r3",
    author: "Yash Malhotra",
    rating: 4,
    dimensions: {
      food: 3.5,
      guideExpertise: 4.5,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 4.5
    },
    title: "The trail is brutal; the destination is transcendent",
    comment: "16km up is no joke — particularly the last 6km above Lincholi where the gradient steepens. The stone paving helps but altitude and distance take their toll. Our group of 8 friends ranged from very fit to average fitness — the guide managed all of us perfectly, keeping the group together without leaving anyone behind. The temple at dawn with the first rays catching the silver spire against the glacier — that image will never leave me. Government medical posts every few km gave real confidence.",
    date: "2024-05-22",
    month: 5,
    groupType: "friends",
    verified: true,
    helpful: 38,
    tripYear: 2024
  },
  {
    id: "kn-r4",
    author: "Priyanka Chandra",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "The Mandakini gorge and waterfall alone justify the trip",
    comment: "Even if you are not religious, the natural beauty of this pilgrimage trail is extraordinary. The Mandakini River gorge is dramatic — vertical cliffs, hanging bridges, waterfalls crashing into turquoise water. The temple complex at 11,755ft with the summit Kedarnath Peak directly behind it is one of the most architecturally stunning sights I've seen. Guide explained the full Panch Kedar legend — how Shiva fled from the Pandavas in bull form and different body parts are worshipped across 5 temples. Beautiful storytelling on the trail.",
    date: "2023-10-08",
    month: 10,
    groupType: "solo",
    verified: true,
    helpful: 51,
    tripYear: 2023
  }
];
const charDhamSafety = {
  guideInfo: {
    name: "Bhupendra Singh Negi",
    certification: "NIM & HMI Certified Senior Trek Leader, UIAA Mountain Guide Level 2, Uttarakhand Tourism Licensed",
    experience: "22 years, 300+ Char Dham group completions",
    languages: ["Hindi", "Garhwali", "English", "Sanskrit (ritual knowledge)"]
  },
  satellitePhone: {
    model: "Garmin inReach Explorer+",
    coverage: "Global Iridium satellite network — 100% coverage across all 4 Dhams"
  },
  helicopterLandingZone: {
    location: "Phata Helipad (Kedarnath sector) / Harsil airstrip (Gangotri sector)",
    coordinates: "30.7597°N, 78.9756°E (Phata); 30.8728°N, 78.7733°E (Harsil)",
    nearestTo: "Within 30 min of any Dham by helicopter"
  },
  nearestHospital: {
    name: "AIIMS Rishikesh (primary) + District Hospitals at each Dham district",
    distance: "280 km from Badrinath (AIIMS); local CHCs within 25 km of each Dham",
    phone: "+91-135-2462941",
    address: "AIIMS Rishikesh, Virbhadra Marg, Rishikesh, Uttarakhand 249203",
    emergencyAvailable: true
  },
  oxygenCylinders: {
    count: 10,
    capacity: "5L medical grade",
    locations: [
      "Base vehicle",
      "Kedarnath ascent pack",
      "Badrinath camp",
      "Gangotri camp",
      "Yamunotri camp"
    ]
  },
  pulseOximeter: true,
  firstAidKit: {
    medications: [
      "Diamox 250mg (AMS prevention)",
      "Dexamethasone 8mg (HACE emergency)",
      "Nifedipine 30mg (HAPE emergency)",
      "ORS sachets (x40)",
      "Paracetamol, Ibuprofen, Antacid",
      "Antihistamine, Betadine"
    ],
    equipment: [
      "Pulse oximeter (x3)",
      "BP cuff",
      "Collapsible stretcher",
      "Thermal blankets (x6)",
      "Full wound care kit",
      "SAM splints"
    ]
  },
  amsProtocol: {
    stage1: {
      symptoms: ["Headache", "Nausea", "Fatigue", "Poor appetite"],
      treatment: "Halt ascent. Hydrate. Paracetamol. Monitor SpO2. Diamox 125mg if no improvement in 1 hour."
    },
    stage2: {
      symptoms: [
        "Severe headache",
        "Vomiting",
        "SpO2 < 88%",
        "Loss of coordination"
      ],
      treatment: "Immediate descent 500m. O2 via mask 2–4L/min. Diamox 250mg. Satellite SOS if required."
    },
    stage3: {
      symptoms: ["HACE confusion", "HAPE gurgling", "Cyanosis", "SpO2 < 75%"],
      treatment: "Emergency O2 6L/min. Dexamethasone/Nifedipine. Immediate helicopter evacuation."
    }
  },
  evacuationProcedure: "Activate Garmin inReach SOS. Contact nearest district emergency. Helicopter from Phata (Kedarnath) or Harsil (Gangotri). AIIMS Rishikesh as primary receiving hospital.",
  checkInFrequency: "3x daily SpO2 checks; morning health briefing; evening debrief",
  teamRatio: "1 senior guide + 1 assistant guide per 10 pilgrims",
  emergencyContacts: [
    {
      name: "Uttarakhand Tourism Helpline",
      role: "24hr State Emergency",
      phone: "1364"
    },
    {
      name: "SDRF Uttarakhand",
      role: "State Disaster Response Force",
      phone: "+91-135-2669900"
    },
    { name: "Bhupendra Negi", role: "Lead Guide", phone: "+91-9412078345" }
  ]
};
const charDhamBatches = [
  {
    id: "cd-b1",
    startDate: "2026-05-05",
    endDate: "2026-05-16",
    totalSeats: 14,
    bookedSeats: 11,
    availableSeats: 3,
    price: 24999,
    status: "limited",
    meetingPoint: "Haridwar Railway Station at 5:30 AM",
    guide: "Bhupendra Negi",
    notes: "Opening season — all 4 Dhams freshly opened, peak spiritual energy"
  },
  {
    id: "cd-b2",
    startDate: "2026-06-10",
    endDate: "2026-06-21",
    totalSeats: 16,
    bookedSeats: 8,
    availableSeats: 8,
    price: 24999,
    status: "available",
    discounts: {
      group5Plus: 8,
      earlyBird: 10,
      earlyBirdDeadline: "2026-04-30"
    },
    meetingPoint: "Haridwar Railway Station at 5:30 AM",
    guide: "Bhupendra Negi"
  },
  {
    id: "cd-b3",
    startDate: "2026-09-15",
    endDate: "2026-09-26",
    totalSeats: 16,
    bookedSeats: 7,
    availableSeats: 9,
    price: 24999,
    status: "available",
    meetingPoint: "Haridwar Railway Station at 5:30 AM",
    guide: "Suresh Chamoli",
    notes: "Post-monsoon — crystal clear views, roads stable after repair"
  },
  {
    id: "cd-b4",
    startDate: "2026-10-10",
    endDate: "2026-10-21",
    totalSeats: 14,
    bookedSeats: 12,
    availableSeats: 2,
    price: 26999,
    status: "almost_full",
    meetingPoint: "Haridwar Railway Station at 5:30 AM",
    guide: "Bhupendra Negi",
    notes: "Final batch — Navratri + Diwali season closing, last chance for 2026"
  }
];
const charDhamReviews = [
  {
    id: "cd-r1",
    author: "Vijay Kumar Sharma",
    rating: 5,
    dimensions: {
      food: 4.5,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "Char Dham completed — a lifetime achievement at 58",
    comment: "12 days, 4 sacred dhams, thousands of kilometers — and Global Trek made it seamless. Bhupendrajji's knowledge of each shrine's history, mythology, and ritual significance transformed a pilgrimage into a profound education. At Yamunotri, I bathed in the hot kund. At Gangotri, I touched the Bhagirathi. At Kedarnath, I wept before the Jyotirlinga. At Badrinath, I witnessed the Maha Abhishek. Each moment was managed perfectly — transport, accommodation, puja booking, medical support. Not a single day went wrong. This is the gold standard of pilgrimage services.",
    date: "2024-06-22",
    month: 6,
    groupType: "family",
    verified: true,
    helpful: 203,
    tripYear: 2024
  },
  {
    id: "cd-r2",
    author: "Meera Krishnamurthy",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 4.5,
      scenery: 5,
      overall: 5
    },
    title: "The Gangotri glacier and Kedarnath sunrise are from another world",
    comment: "Coming from Bangalore, I had no idea what to expect from Garhwal's high altitude. The team briefed us so thoroughly on Day 1 that by Day 4 when we were at Kedarnath I felt completely prepared — physically and mentally. The Gangotri glacier walk to Gaumukh origin of the Ganga is extraordinary. Badrinath's Tapt Kund (natural hot spring) at sunrise with snowcapped Neelkanth Peak behind the temple — I have no words. Best decision of my life.",
    date: "2024-10-05",
    month: 10,
    groupType: "solo",
    verified: true,
    helpful: 87,
    tripYear: 2024
  },
  {
    id: "cd-r3",
    author: "Arun and Kavita Mehta",
    rating: 4,
    dimensions: {
      food: 3.5,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 4.5
    },
    title: "Our parents' dream — we made it happen together",
    comment: "We took our 72-year-old parents for Char Dham — a trip they'd dreamed of for 30 years. Global Trek arranged helicopter for Kedarnath for my mother (knee replacement), pony for my father for the steep sections. Both did darshan. Both cried. The guide Sureshji was extraordinarily patient with elderly pilgrims, explaining every ritual, helping them at every step. The RFID system, medical camps, and organized queues made the experience far better than we feared.",
    date: "2024-09-20",
    month: 9,
    groupType: "family",
    verified: true,
    helpful: 156,
    tripYear: 2024
  }
];
const doDhamSafety = {
  guideInfo: {
    name: "Prakash Ramola",
    certification: "NIM Certified, Uttarakhand Tourism Licensed Mountain Guide, Wilderness First Responder",
    experience: "15 years, 400+ Badrinath-Kedarnath group tours",
    languages: ["Hindi", "Garhwali", "English"]
  },
  satellitePhone: {
    model: "Garmin inReach Mini 2",
    coverage: "Global Iridium satellite — full coverage in Garhwal Himalaya"
  },
  helicopterLandingZone: {
    location: "Phata Helipad (Kedarnath) / Badrinath town helipad",
    coordinates: "30.7597°N, 78.9756°E (Phata); 30.7433°N, 79.4938°E (Badrinath)",
    nearestTo: "Within 5-10 min flight from both Dhams"
  },
  nearestHospital: {
    name: "Badrinath-Kedarnath Temple Committee Hospital + CHC Joshimath",
    distance: "Within Badrinath town; CHC Joshimath 45 km",
    phone: "+91-1389-222228",
    address: "CHC Joshimath, Chamoli District, Uttarakhand 246443",
    emergencyAvailable: true
  },
  oxygenCylinders: {
    count: 6,
    capacity: "5L medical grade",
    locations: [
      "Base vehicle",
      "Kedarnath ascent",
      "Badrinath base camp",
      "Emergency pack"
    ]
  },
  pulseOximeter: true,
  firstAidKit: {
    medications: [
      "Diamox 250mg",
      "Dexamethasone 8mg",
      "Nifedipine 30mg",
      "ORS sachets (x30)",
      "Paracetamol, Ibuprofen, Antacid",
      "Antihistamine, Betadine"
    ],
    equipment: [
      "Pulse oximeter (x2)",
      "BP cuff",
      "Stretcher",
      "Thermal blankets (x4)",
      "Wound care kit"
    ]
  },
  amsProtocol: {
    stage1: {
      symptoms: ["Headache", "Nausea", "Fatigue"],
      treatment: "Stop ascent. Hydrate. Paracetamol. Monitor. Diamox 125mg if persists."
    },
    stage2: {
      symptoms: ["Severe headache", "Vomiting", "SpO2 < 88%"],
      treatment: "Descend 500m immediately. O2 mask. Diamox 250mg. Satellite call to base."
    },
    stage3: {
      symptoms: ["HACE/HAPE symptoms", "Unconsciousness", "SpO2 < 75%"],
      treatment: "Emergency O2. Dexamethasone/Nifedipine. Helicopter evacuation."
    }
  },
  evacuationProcedure: "Garmin SOS → District Emergency Control → Helicopter from Phata or Badrinath helipad → CHC Joshimath or AIIMS Rishikesh.",
  checkInFrequency: "Twice daily SpO2 monitoring; evening health review",
  teamRatio: "1 guide per 8 pilgrims",
  emergencyContacts: [
    {
      name: "Chamoli District Emergency",
      role: "District Disaster Management",
      phone: "+91-1389-222300"
    },
    {
      name: "Rudraprayag Police",
      role: "District Emergency",
      phone: "+91-1364-233011"
    },
    { name: "Prakash Ramola", role: "Lead Guide", phone: "+91-9634567890" }
  ]
};
const doDhamBatches = [
  {
    id: "dd-b1",
    startDate: "2026-05-15",
    endDate: "2026-05-22",
    totalSeats: 14,
    bookedSeats: 9,
    availableSeats: 5,
    price: 14999,
    status: "limited",
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Prakash Ramola",
    notes: "Opening season — freshly opened Kedarnath and Badrinath"
  },
  {
    id: "dd-b2",
    startDate: "2026-06-20",
    endDate: "2026-06-27",
    totalSeats: 16,
    bookedSeats: 5,
    availableSeats: 11,
    price: 14999,
    status: "available",
    discounts: {
      group5Plus: 8,
      earlyBird: 10,
      earlyBirdDeadline: "2026-05-15"
    },
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Prakash Ramola"
  },
  {
    id: "dd-b3",
    startDate: "2026-09-20",
    endDate: "2026-09-27",
    totalSeats: 16,
    bookedSeats: 8,
    availableSeats: 8,
    price: 14999,
    status: "available",
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Mohan Das Badola",
    notes: "Post-monsoon — superb clarity, stable roads"
  },
  {
    id: "dd-b4",
    startDate: "2026-10-15",
    endDate: "2026-10-22",
    totalSeats: 12,
    bookedSeats: 10,
    availableSeats: 2,
    price: 15999,
    status: "almost_full",
    meetingPoint: "Haridwar Railway Station at 6:00 AM",
    guide: "Prakash Ramola",
    notes: "Navratri + Diwali — final closing season, maximum spiritual atmosphere"
  }
];
const doDhamReviews = [
  {
    id: "dd-r1",
    author: "Santosh Iyer",
    rating: 5,
    dimensions: {
      food: 4.5,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "Kedarnath + Badrinath in 8 days — perfect balance of trek and pilgrimage",
    comment: "The Do Dham package gave us everything — the physical challenge of Kedarnath trek and the relative ease of Badrinath drive-up. Prakashji managed the group's varied fitness levels expertly. Badrinath's Tapt Kund natural hot spring at sunrise with Neelkanth Peak in the background is surreal. At Kedarnath, the 4 AM Abhishek puja with ghee lamps and Sanskrit chants in the ancient stone temple — I felt the weight of 1,200 years of devotion. Best trip of my life, bar none.",
    date: "2024-06-05",
    month: 6,
    groupType: "friends",
    verified: true,
    helpful: 89,
    tripYear: 2024
  },
  {
    id: "dd-r2",
    author: "Rekha and Anand Gupta",
    rating: 5,
    dimensions: {
      food: 4,
      guideExpertise: 5,
      safety: 5,
      valueForMoney: 5,
      scenery: 5,
      overall: 5
    },
    title: "Our honeymoon in God's backyard — Badrinath-Kedarnath blessing",
    comment: "We chose Do Dham for our honeymoon — unusual choice but the most meaningful trip we could imagine. The snowy Kedarnath approach in May, the ancient stone steps, the Shiva abhishek together — and then Badrinath with the Alaknanda River and the orange-yellow-white temple facade against the Nilkanth peak. Prakashji gave us privacy while ensuring our safety. The GMVN accommodation was upgraded for us. We'll return for Char Dham for our 10th anniversary.",
    date: "2024-05-30",
    month: 5,
    groupType: "couple",
    verified: true,
    helpful: 112,
    tripYear: 2024
  },
  {
    id: "dd-r3",
    author: "Deepak Verma",
    rating: 4,
    dimensions: {
      food: 3.5,
      guideExpertise: 4.5,
      safety: 5,
      valueForMoney: 4,
      scenery: 5,
      overall: 4
    },
    title: "Outstanding value — way better organized than the 'budget' operators",
    comment: "I've done pilgrimages with budget operators before — chaos, broken vehicles, untrained guides. Global Trek at ₹14,999 for 8 days covering both Dhams is exceptional value. Tempo traveller in good condition, hotels pre-booked (no scrambling on arrival), guide who actually knows the religious significance, medical support that gave my elderly father confidence. Badrinath's Brahma Kapal ghat — where you perform pitra tarpan for ancestors — was explained beautifully by our guide. Highly recommended.",
    date: "2024-10-12",
    month: 10,
    groupType: "family",
    verified: true,
    helpful: 67,
    tripYear: 2024
  }
];
const yatraData = [
  // ── 1. KEDARNATH YATRA ──────────────────────────────────────────────────────
  {
    id: "kedarnath-yatra",
    slug: "kedarnath-yatra",
    name: "Kedarnath Yatra",
    region: "Rudraprayag, Uttarakhand",
    state: "Uttarakhand",
    district: "Rudraprayag",
    trekType: "Yatra",
    isYatra: true,
    maxAltitude: "3,583 m (11,755 ft)",
    altitudeM: 3583,
    duration: "5 Days",
    durationDays: 5,
    distance: "32 km (16 km each way)",
    difficulty: "Moderate",
    bestTime: "May–June, September–October",
    bestSeason: "May–Oct",
    startPoint: "Gaurikund (via Sonprayag)",
    nearestRailhead: "Rishikesh Railway Station (212 km)",
    nearestAirport: "Jolly Grant Airport, Dehradun (256 km)",
    groupSize: "6–14 pilgrims",
    ageGroup: "10–70 years (medical clearance above 60)",
    price: "₹8,999",
    priceMin: 8999,
    imageQuery: "kedarnath temple himalaya pilgrimage snow",
    heroImages: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600&q=80",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1600&q=80"
    ],
    rating: 4.9,
    reviewCount: 1247,
    badges: ["Most Sacred", "Jyotirlinga", "Char Dham", "8th Century Temple"],
    description: "Trek to the most sacred Jyotirlinga in the Himalayas — Lord Shiva's abode at 11,755ft. The 16km pilgrimage trail from Gaurikund winds through waterfalls, alpine meadows, and ancient stone steps to the 8th-century Kedarnath Temple, built (or restored) by Adi Shankaracharya. One of Hinduism's most revered pilgrimage destinations — a soul-stirring journey through the Mandakini River gorge to the land of Shiva.",
    overview: "Kedarnath Yatra is one of the most spiritually significant pilgrimages in India, combining a 16km high-altitude trek with one of Hinduism's most sacred temple visits. At 11,755ft, the grey stone Kedarnath Temple sits beneath the dramatic Kedarnath Peak (22,769ft) and the Chorabari Glacier — a setting of extraordinary natural and spiritual power. Global Trek provides full-service management: RFID registration, medical support at every checkpoint, government-certified guides with deep religious knowledge, puja booking, and helicopter coordination for elderly pilgrims.",
    quickFacts: {
      maxAltitudeZone: "High Alpine — Kedarnath Temple at 11,755ft (3,583m)",
      snowConditions: "Snow possible May–June on upper trail; clear September–October",
      trailType: "Paved stone steps (lower), rocky alpine path (upper), temple plaza",
      waterAvailability: "Abundant — Mandakini River, government taps, springs throughout",
      phoneNetwork: "BSNL and Jio at Gaurikund; BSNL only above 8,000ft; no signal at temple",
      permits: "RFID wristband mandatory (₹50) — included in package; Aadhaar required",
      fitness: "Walk 8–10 km with a daypack at moderate pace; no technical climbing",
      minAge: 10,
      maxAge: 70
    },
    templeInfo: {
      templeName: "Kedarnath Temple (Kedarnath Jyotirlinga)",
      altitude: "11,755 ft (3,583 m)",
      deity: "Lord Shiva (as Kedarnath — the Lord of Kedara Field)",
      openingDate2026: "April 22, 2026 (Akshaya Tritiya)",
      closingDate2026: "November 5, 2026 (Bhai Dooj)",
      committeePhone: "+91-1364-234340",
      registrationLink: "https://registrationandtouristcare.uk.gov.in"
    },
    darshan: [
      {
        puja: "Pratah Puja (Morning Abhishek)",
        time: "4:00 AM – 7:00 AM",
        description: "Sacred Rudrabhishek with milk, honey, ghee, and Gangajal. Limited to pre-registered pilgrims. Most spiritually powerful darshan of the day — garbhagriha access."
      },
      {
        puja: "General Darshan",
        time: "7:00 AM – 12:00 PM",
        description: "Open to all RFID-registered pilgrims. Queue typically 1–4 hours depending on season. Exterior darshan and inner sanctum access permitted."
      },
      {
        puja: "Sandhya Aarti (Evening Prayer)",
        time: "5:00 PM – 9:00 PM",
        description: "Evening prayer with oil lamps, flower offerings, and Sanskrit chanting. Deeply atmospheric — limited crowd post-4 PM. Temple beautifully illuminated."
      }
    ],
    pujaOptions: [
      {
        name: "Rudrabhishek Puja",
        price: 3100,
        duration: "45 minutes",
        bookingNote: "Pre-book 15+ days in advance. Priest chants Rudrashtadhyayi while performing milk, honey, ghee, and holy water abhishek."
      },
      {
        name: "Sampoorna Puja",
        price: 5100,
        duration: "90 minutes",
        bookingNote: "Full puja including Rudrabhishek, 108 names of Shiva, and prasad. Pre-book 30+ days in advance for peak season."
      },
      {
        name: "Kedarnath Special Puja (VIP)",
        price: 11e3,
        duration: "3 hours",
        bookingNote: "Full VIP puja at garbhagriha — jal abhishek, flower offering, aarti, pandit guidance throughout. Available only through temple committee. Book 60+ days in advance."
      }
    ],
    transportOptions: [
      {
        option: "Trek on Foot (Traditional)",
        cost: "Included in package",
        duration: "5–6 hours one way",
        bookingNote: "The spiritually most rewarding mode. Well-paved 16km stone trail from Gaurikund with tea stalls and government rest points every 2–3 km."
      },
      {
        option: "Helicopter (Phata/Sirsi/Guptkashi)",
        cost: "₹6,500–₹9,000 (extra, not in package)",
        duration: "8 minutes",
        bookingNote: "Book at IRCTC portal or Uttarakhand Tourism minimum 60 days in advance. Strictly weather-dependent — refund on cancellation. Elderly/disabled strongly advised."
      },
      {
        option: "Pony / Doli (Palanquin)",
        cost: "₹2,000–₹3,500 (extra, not in package)",
        duration: "6–7 hours",
        bookingNote: "Government-registered ponies and dolis (palanquins) available at Gaurikund. Best option for pilgrims with knee/hip conditions. Pre-book through guide."
      }
    ],
    registrationSteps: [
      {
        step: 1,
        instruction: "Online registration at registrationandtouristcare.uk.gov.in — choose travel date, upload Aadhaar + passport photo. Receive unique registration ID (mandatory)."
      },
      {
        step: 2,
        instruction: "Collect RFID wristband at Rishikesh, Haridwar, Sonprayag, or Gaurikund check posts. ₹50 charge. Mandatory entry requirement — no RFID = no trek entry."
      },
      {
        step: 3,
        instruction: "Medical screening: mandatory certificate for pilgrims above 50 years. Free government health posts at Sonprayag. ECG required above 60 years."
      },
      {
        step: 4,
        instruction: "Begin trek from Gaurikund (6,503ft). RFID scan at entry gate. Government's time-stamped tracking system monitors your progress — emergency alerts if delayed."
      }
    ],
    itinerary: kedarnathItinerary,
    inclusions: [
      "Haridwar pickup and drop (tempo traveller)",
      "4 nights accommodation (twin-sharing guesthouse/lodge)",
      "All meals on trek (breakfast, lunch, dinner)",
      "Certified guide (Rameshwar Tiwari — 18 years experience)",
      "RFID wristband registration assistance",
      "Puja booking coordination (puja cost extra)",
      "Medical kit with oxygen cylinders and AMS medications",
      "Pulse oximeter monitoring at all camps",
      "Satellite phone (Garmin inReach)",
      "Porterage up to 8 kg per person",
      "All permit and entry fees",
      "GST included"
    ],
    exclusions: [
      "Helicopter charges (₹6,500–9,000 extra)",
      "Pony / doli charges (₹2,000–3,500 extra)",
      "Temple puja charges (₹3,100–11,000 extra)",
      "Personal travel insurance",
      "Personal expenses (shopping, tips)",
      "Any meal not specified in itinerary",
      "Medical expenses arising from pre-existing conditions"
    ],
    faqs: [
      {
        question: "What is the best time to visit Kedarnath?",
        answer: "May–June for fresh opening season and minimal crowds in early batches. September–October for post-monsoon clarity, best photography, and moderate temperatures. July–August is monsoon — trail is open but landslide risk is higher."
      },
      {
        question: "How fit do I need to be for Kedarnath?",
        answer: "Moderate fitness is sufficient. You should be able to walk 8–10 km at a gentle pace over 6 hours. No technical climbing. However, altitude (11,755ft) is the real challenge — slow acclimatization pace and hydration are more important than aerobic fitness."
      },
      {
        question: "Is Kedarnath safe for elderly pilgrims (65+)?",
        answer: "Yes, with proper preparation. We arrange medical screening, pony/helicopter for steep sections, and exclusive guide support for elderly pilgrims. ECG clearance required for 60+ years. Helicopter from Phata to temple (8 min) is highly recommended for cardiac/knee patients."
      },
      {
        question: "When does the temple open and close in 2026?",
        answer: "Opening: April 22, 2026 (Akshaya Tritiya). Closing: November 5, 2026 (Bhai Dooj). The exact times are announced by the Badri-Kedar Temple Committee in the weeks before. Our earliest batch is May 10, 2026."
      },
      {
        question: "Is pre-registration mandatory?",
        answer: "Yes — Uttarakhand government has made RFID registration mandatory for all Kedarnath pilgrims since 2014. Register at registrationandtouristcare.uk.gov.in with your Aadhaar. Our team assists with the complete process."
      }
    ],
    packingList: [
      "Layered clothing: thermal base layer, fleece mid-layer, waterproof shell",
      "Trekking shoes (ankle support, waterproof)",
      "Rain poncho / windproof jacket",
      "Trekking poles (essential for descent)",
      "Headlamp + extra batteries",
      "Sunscreen SPF 50+, sunglasses (UV400), sun hat",
      "Personal medicines + prescription list",
      "Water bottle 1L minimum (guides provide purification tablets)",
      "Light daypack (20L) for temple day",
      "Puja thali items (flowers, prasad) — available locally"
    ],
    safetyProtocol: kedarnathSafety,
    batchSlots: kedarnathBatches,
    detailedReviews: kedarnathReviews,
    relatedTrekIds: ["char-dham", "do-dham"],
    similarTreks: ["char-dham", "do-dham"]
  },
  // ── 2. CHAR DHAM YATRA ──────────────────────────────────────────────────────
  {
    id: "char-dham",
    slug: "char-dham",
    name: "Char Dham Yatra",
    region: "Garhwal Himalaya, Uttarakhand",
    state: "Uttarakhand",
    trekType: "Yatra",
    isYatra: true,
    maxAltitude: "3,583 m (11,755 ft) — Kedarnath",
    altitudeM: 3583,
    duration: "12 Days",
    durationDays: 12,
    distance: "~900 km by road + 32 km trek (Kedarnath)",
    difficulty: "Moderate",
    bestTime: "May–June, September–October",
    bestSeason: "May–Oct",
    startPoint: "Haridwar",
    nearestRailhead: "Haridwar Railway Station",
    nearestAirport: "Jolly Grant Airport, Dehradun (54 km)",
    groupSize: "8–16 pilgrims",
    ageGroup: "12–72 years (medical clearance required above 60)",
    price: "₹24,999",
    priceMin: 24999,
    imageQuery: "char dham yatra himalaya uttarakhand four temples",
    heroImages: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600&q=80",
      "https://images.unsplash.com/photo-1590164985565-4aa7b9f74dcc?w=1600&q=80",
      "https://images.unsplash.com/photo-1614785296990-6b2a1c4add71?w=1600&q=80"
    ],
    rating: 4.95,
    reviewCount: 892,
    badges: [
      "Complete Char Dham",
      "4 Sacred Dhams",
      "Moksha Pilgrimage",
      "12 Days"
    ],
    description: "The most sacred pilgrimage circuit in Hinduism — all four Himalayan Dhams in one journey. Yamunotri (origin of Yamuna River, 10,827ft), Gangotri (origin of Ganga, 10,200ft), Kedarnath (Shiva Jyotirlinga, 11,755ft), and Badrinath (Vishnu's seat, 10,279ft). Completing the Char Dham Yatra is believed to wash away all sins and grant moksha (liberation). Done anti-clockwise (West to East) as decreed by the Shastras.",
    overview: "Char Dham Yatra is the ultimate Hindu pilgrimage — visiting all four sacred Himalayan shrines in one 12-day journey. Global Trek's full-service package covers transportation, accommodation, all meals, certified guide, puja coordination, and complete medical support including satellite phone, oxygen cylinders, and emergency evacuation protocol. Our 22-year veteran guide Bhupendra Singh Negi has led 300+ complete Char Dham groups and knows each shrine's ritual calendar in detail.",
    quickFacts: {
      maxAltitudeZone: "High Alpine — 4 sacred Dhams between 10,200ft and 11,755ft",
      snowConditions: "Yamunotri: snow May–June. Gangotri: glacier year-round. Kedarnath: snow possible May–June, October",
      trailType: "Mix of road travel + Yamunotri trek (6km) + Kedarnath trek (16km) + Badrinath road",
      waterAvailability: "Hot springs at Yamunotri and Badrinath; river access throughout",
      phoneNetwork: "Connectivity varies — BSNL best. Satellite phone carried for all zones",
      permits: "RFID wristband (Kedarnath mandatory). Gangotri NP forest permit included",
      fitness: "Moderate — two significant treks (Yamunotri 6km, Kedarnath 16km). 12 days with rest days built in",
      minAge: 12,
      maxAge: 72
    },
    templeInfo: {
      templeName: "Yamunotri + Gangotri + Kedarnath + Badrinath",
      altitude: "10,200–11,755 ft (four temples)",
      deity: "Yamuna Devi, Ganga Devi (Goddess Gangotri), Lord Shiva (Kedarnath), Lord Vishnu (Badrinath)",
      openingDate2026: "April 19–23, 2026 (Akshaya Tritiya week — all four Dhams)",
      closingDate2026: "October–November 2026 (varies per Dham; Kedarnath Nov 5)",
      committeePhone: "+91-1389-222228",
      registrationLink: "https://registrationandtouristcare.uk.gov.in"
    },
    darshan: [
      {
        puja: "Yamunotri Darshan",
        time: "6:00 AM – 8:00 PM",
        description: "Cook rice/potatoes in the Surya Kund hot spring (traditional). Bathe in Janki Chatti hot kund. Visit the ancient Yamunotri temple. Yamuna origin spring is 1km beyond temple."
      },
      {
        puja: "Gangotri Darshan",
        time: "6:15 AM – 2:00 PM, 3:00 PM – 9:30 PM",
        description: "Morning and evening aarti at Gangotri temple on the Bhagirathi banks. Optional Gaumukh glacier trek (19km extra) — actual source of the Ganga. Submerged Shivalinga at Bhagirathi."
      },
      {
        puja: "Kedarnath Darshan + Abhishek",
        time: "4:00 AM – 9:00 PM",
        description: "Full Kedarnath protocol: 4 AM Pratah Puja, Rudrabhishek, afternoon general darshan, evening Sandhya Aarti. Adi Shankaracharya samadhi visit."
      },
      {
        puja: "Badrinath Darshan + Maha Abhishek",
        time: "4:30 AM – 9:00 PM",
        description: "Badrinath Maha Abhishek puja (most important puja — offered since morning). Tapt Kund natural hot spring bath (mandatory before darshan). Brahma Kapal ghat for pitra tarpan (ancestor rituals)."
      }
    ],
    pujaOptions: [
      {
        name: "Kedarnath Rudrabhishek",
        price: 3100,
        duration: "45 minutes",
        bookingNote: "Includes priest-guided Shiva abhishek at Kedarnath garbhagriha."
      },
      {
        name: "Badrinath Maha Abhishek",
        price: 4500,
        duration: "60 minutes",
        bookingNote: "Full Vishnu Sahasranama puja at Badrinath. Pre-book 30 days in advance."
      },
      {
        name: "Char Dham Sampoorna Puja Package",
        price: 15e3,
        duration: "All 4 temples",
        bookingNote: "Full puja at each Dham — guided by temple priests. Includes prasad, flowers, and puja samagri. Most popular choice."
      }
    ],
    transportOptions: [
      {
        option: "Private Tempo Traveller (full group)",
        cost: "Included in package",
        duration: "12-day dedicated vehicle",
        bookingNote: "Full-trip dedicated vehicle with experienced Garhwal mountain driver. AC available on plains sections."
      },
      {
        option: "Helicopter for Kedarnath",
        cost: "₹7,000–₹9,000 extra",
        duration: "8 minutes from Phata",
        bookingNote: "Strongly recommended for 65+ pilgrims or those with cardiac/knee conditions. Book separately through IRCTC portal."
      }
    ],
    registrationSteps: [
      {
        step: 1,
        instruction: "Online registration at registrationandtouristcare.uk.gov.in for Kedarnath RFID (mandatory). Badrinath registration also recommended."
      },
      {
        step: 2,
        instruction: "Medical certificate for pilgrims above 50 — ECG mandatory above 60 years. Our team arranges examination at Haridwar AIIMS health camp."
      },
      {
        step: 3,
        instruction: "Collect RFID wristbands at Haridwar check post before departure. All verification done by Global Trek team."
      },
      {
        step: 4,
        instruction: "Daily health check-in with guide throughout the yatra. Pulse oximetry at every high-altitude Dham."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Haridwar",
        description: "Arrival at Haridwar, RFID collection, group briefing, Ganga Aarti at Har Ki Pauri.",
        highlights: [
          "Group meeting and safety briefing",
          "RFID wristband collection",
          "Ganga Aarti at Har Ki Pauri"
        ],
        altitude: "1,000 ft",
        meals: "Dinner",
        accommodation: "Hotel in Haridwar"
      },
      {
        day: 2,
        title: "Haridwar → Barkot (Yamunotri base)",
        description: "180km drive to Barkot (6,800ft) — Yamuna valley. Evening prayers at Hanuman Chatti.",
        highlights: [
          "Yamuna valley scenery",
          "Hanuman Chatti temple",
          "Acclimatization evening walk"
        ],
        altitude: "6,800 ft",
        meals: "All meals",
        accommodation: "Hotel Barkot"
      },
      {
        day: 3,
        title: "Yamunotri Darshan",
        description: "6km trek to Yamunotri temple (10,827ft). Cook rice in Surya Kund hot spring. Evening descent.",
        highlights: [
          "Yamunotri temple darshan",
          "Surya Kund hot spring",
          "Divya Shila puja"
        ],
        altitude: "10,827 ft",
        meals: "All meals",
        accommodation: "Hotel Barkot"
      },
      {
        day: 4,
        title: "Barkot → Uttarkashi (Gangotri base)",
        description: "Drive 100km to Uttarkashi (4,921ft). Visit Vishwanath Temple, Nehru Institute of Mountaineering.",
        highlights: [
          "Uttarkashi Vishwanath temple",
          "Nehru Institute of Mountaineering campus"
        ],
        altitude: "4,921 ft",
        meals: "All meals",
        accommodation: "Hotel Uttarkashi"
      },
      {
        day: 5,
        title: "Gangotri Darshan",
        description: "105km drive to Gangotri (10,200ft). Morning and evening aarti. Optional 6km walk toward Gaumukh glacier.",
        highlights: [
          "Gangotri temple aarti",
          "Bhagirathi River at source",
          "Gaumukh glacier view"
        ],
        altitude: "10,200 ft",
        meals: "All meals",
        accommodation: "Hotel/Dharamshala Gangotri"
      },
      {
        day: 6,
        title: "Gangotri → Guptkashi (Kedarnath base)",
        description: "300km cross-mountain drive via Uttarkashi–Rishikesh–Rudraprayag to Guptkashi (4,757ft). Long but spectacular.",
        highlights: [
          "Rudraprayag sangam",
          "Vishwanath temple at Guptkashi",
          "First Kedarnath range view"
        ],
        altitude: "4,757 ft",
        meals: "All meals",
        accommodation: "Hotel Guptkashi"
      },
      {
        day: 7,
        title: "Guptkashi → Sonprayag → Kedarnath Ascent",
        description: "Drive Sonprayag (6,100ft), jeep to Gaurikund, trek 16km to Kedarnath (11,755ft).",
        highlights: [
          "Gaurikund hot spring",
          "Mandakini gorge",
          "Kedarnath temple arrival"
        ],
        altitude: "11,755 ft",
        meals: "All meals",
        accommodation: "GMVN Rest House Kedarnath"
      },
      {
        day: 8,
        title: "Kedarnath Darshan & Descent",
        description: "4 AM Pratah Puja, full temple circuit, Adi Shankaracharya samadhi. Descend to Gaurikund.",
        highlights: [
          "4 AM Abhishek puja",
          "Adi Shankaracharya samadhi",
          "Kedarnath Valley views on descent"
        ],
        altitude: "6,503 ft",
        meals: "All meals",
        accommodation: "Guesthouse Gaurikund"
      },
      {
        day: 9,
        title: "Gaurikund → Badrinath",
        description: "Drive 210km via Rudraprayag to Badrinath (10,279ft). Evening Badrinath aarti.",
        highlights: [
          "Panch Kedar significance briefing",
          "Valley of Flowers region",
          "Badrinath temple evening aarti"
        ],
        altitude: "10,279 ft",
        meals: "All meals",
        accommodation: "GMVN Tourist Rest House Badrinath"
      },
      {
        day: 10,
        title: "Badrinath Darshan",
        description: "Tapt Kund hot spring bath at sunrise, Maha Abhishek puja, Brahma Kapal ghat pitra tarpan, Mana village (last Indian village before Tibet border, 3km).",
        highlights: [
          "Tapt Kund sunrise bath",
          "Maha Abhishek puja",
          "Mana village + Saraswati River",
          "Vasudhara Falls (9km)"
        ],
        altitude: "10,279 ft",
        meals: "All meals",
        accommodation: "GMVN Tourist Rest House Badrinath"
      },
      {
        day: 11,
        title: "Badrinath → Rishikesh",
        description: "295km return drive to Rishikesh. Stop at Devprayag (Ganga origin sangam). Evening Ganga Aarti at Parmarth Niketan.",
        highlights: [
          "Devprayag confluence photography",
          "Rishikesh Ganga Aarti",
          "Char Dham completion celebration"
        ],
        altitude: "1,000 ft",
        meals: "All meals (last group dinner)",
        accommodation: "Hotel Rishikesh"
      },
      {
        day: 12,
        title: "Rishikesh → Haridwar Departure",
        description: "Certificate of Char Dham completion distributed. Drop at Haridwar/Rishikesh railway station or airport.",
        highlights: [
          "Completion certificate",
          "Final darshan at Haridwar ghats",
          "Departure"
        ],
        altitude: "1,000 ft",
        meals: "Breakfast",
        accommodation: "N/A — departure day"
      }
    ],
    inclusions: [
      "11 nights accommodation (twin-sharing — hotels and dharamshalas)",
      "All meals throughout (breakfast, lunch, dinner)",
      "Dedicated Tempo Traveller for 12 days",
      "Senior certified guide (Bhupendra Negi — 22 years)",
      "All 4 Dham puja coordination (puja charges extra)",
      "RFID wristband registration assistance",
      "Medical kit: oxygen cylinders (10), pulse oximeters, AMS medications",
      "Satellite phone (Garmin inReach Explorer+)",
      "Porterage on Yamunotri and Kedarnath treks (8 kg/person)",
      "All permits and entry fees",
      "GST included"
    ],
    exclusions: [
      "Helicopter charges (Kedarnath: ₹7,000–9,000 extra)",
      "Puja charges at each Dham (₹3,100–15,000 depending on puja type)",
      "Personal travel and medical insurance",
      "Personal shopping and tips",
      "Gaumukh trek (Gangotri glacier) — optional, extra cost"
    ],
    faqs: [
      {
        question: "How difficult is Char Dham Yatra?",
        answer: "The Yamunotri trek (6km) and Kedarnath trek (16km) are the main physical challenges. The rest is comfortable road travel. Moderate fitness required. Elderly/unfit pilgrims can use helicopter for Kedarnath and pony/doli for Yamunotri."
      },
      {
        question: "What is the sequence of Char Dham?",
        answer: "Anti-clockwise as per Shastra: Yamunotri → Gangotri → Kedarnath → Badrinath. Our itinerary strictly follows this sequence."
      },
      {
        question: "When do the Char Dhams open in 2026?",
        answer: "All four Dhams open in April 2026 during Akshaya Tritiya week (April 19–23). Our first batch departs May 5, 2026."
      }
    ],
    packingList: [
      "Warm layers (thermal, fleece, windproof shell)",
      "Trekking shoes (Yamunotri + Kedarnath treks)",
      "Rain gear (monsoon months)",
      "Trekking poles",
      "Personal medications + prescription",
      "Puja items (flowers, prasad — available locally at each Dham)",
      "Modest clothing (salwar/kurta/dhoti for temple entry)"
    ],
    safetyProtocol: charDhamSafety,
    batchSlots: charDhamBatches,
    detailedReviews: charDhamReviews,
    relatedTrekIds: ["kedarnath-yatra", "do-dham"],
    similarTreks: ["kedarnath-yatra", "do-dham"]
  },
  // ── 3. DO DHAM YATRA (BADRINATH + KEDARNATH) ────────────────────────────────
  {
    id: "do-dham",
    slug: "do-dham",
    name: "Badrinath–Kedarnath Do Dham Yatra",
    region: "Chamoli & Rudraprayag, Uttarakhand",
    state: "Uttarakhand",
    trekType: "Yatra",
    isYatra: true,
    maxAltitude: "3,583 m (11,755 ft) — Kedarnath",
    altitudeM: 3583,
    duration: "8 Days",
    durationDays: 8,
    distance: "~500 km by road + 32 km trek (Kedarnath)",
    difficulty: "Moderate",
    bestTime: "May–June, September–October",
    bestSeason: "May–Oct",
    startPoint: "Haridwar",
    nearestRailhead: "Haridwar Railway Station",
    nearestAirport: "Jolly Grant Airport, Dehradun (54 km)",
    groupSize: "6–16 pilgrims",
    ageGroup: "10–72 years (medical clearance above 60)",
    price: "₹14,999",
    priceMin: 14999,
    imageQuery: "badrinath temple himalaya vishnu kedarnath shiva garhwal",
    heroImages: [
      "https://images.unsplash.com/photo-1614785296990-6b2a1c4add71?w=1600&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80",
      "https://images.unsplash.com/photo-1590164985565-4aa7b9f74dcc?w=1600&q=80"
    ],
    rating: 4.85,
    reviewCount: 634,
    badges: ["Shiva + Vishnu", "Do Dham", "8 Days", "Best Value"],
    description: "The perfect twin-pilgrimage combining Lord Shiva's most powerful Himalayan abode (Kedarnath, 11,755ft) and Lord Vishnu's seat of eternal meditation (Badrinath, 10,279ft). Two of Hinduism's most sacred temples in one 8-day journey through the dramatic Garhwal Himalayan valleys — the Mandakini and Alaknanda rivers, ancient stone ghats, hot springs, and glacier views.",
    overview: "Do Dham Yatra is the most popular pilgrimage package among first-time Himalayan yatris — covering both the Shiva (Kedarnath) and Vishnu (Badrinath) pilgrimages at an accessible price point. The 16km Kedarnath trek is the primary physical challenge; Badrinath is accessible by road to within 500m of the temple. Our certified guide Prakash Ramola brings 15 years of expertise to this circuit, with full medical support and helicopter coordination for Kedarnath.",
    quickFacts: {
      maxAltitudeZone: "High Alpine — Kedarnath at 11,755ft; Badrinath at 10,279ft",
      snowConditions: "Kedarnath: snow possible May and October. Badrinath: year-round glacier views",
      trailType: "16km Kedarnath trek (stone steps + alpine) + Badrinath road access",
      waterAvailability: "Tapt Kund at Badrinath (hot spring); abundant river water throughout",
      phoneNetwork: "Variable — BSNL best. Satellite phone on Kedarnath trek",
      permits: "Kedarnath RFID mandatory. Included in package",
      fitness: "Moderate — primarily the 16km Kedarnath trek. Good baseline health sufficient",
      minAge: 10,
      maxAge: 72
    },
    templeInfo: {
      templeName: "Kedarnath Temple + Badrinath Temple (Badri Vishal)",
      altitude: "11,755 ft (Kedarnath) + 10,279 ft (Badrinath)",
      deity: "Lord Shiva (Kedarnath Jyotirlinga) + Lord Vishnu (Badri Narayan)",
      openingDate2026: "April 22, 2026 (Kedarnath) / April 23, 2026 (Badrinath)",
      closingDate2026: "November 5, 2026 (Kedarnath) / November 17–20, 2026 (Badrinath)",
      committeePhone: "+91-1389-222228",
      registrationLink: "https://registrationandtouristcare.uk.gov.in"
    },
    darshan: [
      {
        puja: "Kedarnath Pratah Puja (Abhishek)",
        time: "4:00 AM – 7:00 AM",
        description: "Pre-registered pilgrims only. Rudrabhishek with milk, ghee, honey, Gangajal. Most powerful darshan slot. Priest-guided puja at garbhagriha."
      },
      {
        puja: "Badrinath Maha Abhishek",
        time: "4:30 AM – 6:30 AM",
        description: "Supreme Vishnu puja — offered by hereditary Rawal (head priest from Kerala) tradition since 8th century. Tapt Kund bath precedes darshan."
      },
      {
        puja: "Badrinath Evening Aarti",
        time: "8:00 PM – 9:00 PM",
        description: "Deeply atmospheric evening aarti with lamps, flowers, and Vishnu Sahasranama chanting. Best darshan time for photography (exterior only)."
      }
    ],
    pujaOptions: [
      {
        name: "Kedarnath Rudrabhishek",
        price: 3100,
        duration: "45 minutes",
        bookingNote: "Pre-book 15+ days in advance. Full Shiva abhishek at Kedarnath."
      },
      {
        name: "Badrinath Maha Abhishek",
        price: 4500,
        duration: "60 minutes",
        bookingNote: "Full Vishnu Sahasranama puja. Pre-book 30 days in advance for peak season."
      },
      {
        name: "Do Dham Sampoorna Puja",
        price: 7500,
        duration: "Both temples",
        bookingNote: "Combined puja package for both Dhams — best value. Includes prasad and guide."
      }
    ],
    transportOptions: [
      {
        option: "Private Tempo Traveller (full group)",
        cost: "Included in package",
        duration: "8-day dedicated vehicle",
        bookingNote: "Dedicated vehicle for all 8 days with experienced Garhwal mountain driver."
      },
      {
        option: "Helicopter for Kedarnath",
        cost: "₹6,500–₹9,000 extra",
        duration: "8 minutes from Phata",
        bookingNote: "Recommended for elderly/unfit pilgrims. Book separately through IRCTC."
      }
    ],
    registrationSteps: [
      {
        step: 1,
        instruction: "Register online at registrationandtouristcare.uk.gov.in for Kedarnath RFID wristband. Mandatory. Our team assists."
      },
      {
        step: 2,
        instruction: "Medical clearance for 60+ years — ECG and fitness certificate from registered doctor. Free health check at Haridwar AIIMS camp."
      },
      {
        step: 3,
        instruction: "RFID wristband collection at Haridwar on Day 1. Global Trek team manages all verification."
      },
      {
        step: 4,
        instruction: "Daily SpO2 monitoring from Kedarnath day onwards. Morning health briefing throughout."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Haridwar",
        description: "Group meeting at Haridwar. RFID collection, briefing, Ganga Aarti.",
        highlights: [
          "Group meeting",
          "RFID wristband collection",
          "Ganga Aarti at Har Ki Pauri"
        ],
        altitude: "1,000 ft",
        meals: "Dinner",
        accommodation: "Hotel Haridwar"
      },
      {
        day: 2,
        title: "Haridwar → Guptkashi",
        description: "240km drive to Guptkashi (4,757ft) — Kedarnath base zone. Vishwanath temple visit.",
        highlights: [
          "Rudraprayag sangam",
          "Vishwanath temple Guptkashi",
          "First Kedarnath range view"
        ],
        altitude: "4,757 ft",
        meals: "All meals",
        accommodation: "Hotel Guptkashi"
      },
      {
        day: 3,
        title: "Guptkashi → Kedarnath (Ascent)",
        description: "Jeep to Gaurikund, 16km trek to Kedarnath (11,755ft). Evening Sandhya Aarti.",
        highlights: [
          "Gaurikund hot spring start",
          "Mandakini gorge",
          "Kedarnath arrival",
          "Sandhya Aarti"
        ],
        altitude: "11,755 ft",
        meals: "All meals",
        accommodation: "GMVN Rest House"
      },
      {
        day: 4,
        title: "Kedarnath Darshan & Descent",
        description: "4 AM Abhishek puja. Full temple circuit. Descent to Gaurikund.",
        highlights: [
          "4 AM Rudrabhishek",
          "Shankaracharya samadhi",
          "Kedarnath peak view",
          "Descent via Mandakini"
        ],
        altitude: "6,503 ft",
        meals: "All meals",
        accommodation: "Guesthouse"
      },
      {
        day: 5,
        title: "Gaurikund → Badrinath",
        description: "210km drive via Rudraprayag to Badrinath (10,279ft). Evening aarti.",
        highlights: [
          "Nandprayag and Vishnuprayag sangams",
          "Joshimath town",
          "Badrinath evening aarti"
        ],
        altitude: "10,279 ft",
        meals: "All meals",
        accommodation: "GMVN Rest House Badrinath"
      },
      {
        day: 6,
        title: "Badrinath Full Darshan",
        description: "Tapt Kund sunrise bath, Maha Abhishek, Brahma Kapal ghat, Mana village (last Indian village).",
        highlights: [
          "Tapt Kund hot spring bath at sunrise",
          "Maha Abhishek puja",
          "Brahma Kapal pitra tarpan",
          "Mana village + Saraswati River"
        ],
        altitude: "10,279 ft",
        meals: "All meals",
        accommodation: "GMVN Rest House Badrinath"
      },
      {
        day: 7,
        title: "Badrinath → Rishikesh",
        description: "295km return drive to Rishikesh. Devprayag stop. Evening Ganga Aarti.",
        highlights: [
          "Devprayag confluence",
          "Rishikesh Ganga Aarti",
          "Do Dham completion celebration"
        ],
        altitude: "1,000 ft",
        meals: "All meals",
        accommodation: "Hotel Rishikesh"
      },
      {
        day: 8,
        title: "Rishikesh → Haridwar Departure",
        description: "Completion certificate distributed. Drop at Haridwar/Rishikesh railway station.",
        highlights: [
          "Completion certificate",
          "Final Haridwar darshan",
          "Departure"
        ],
        altitude: "1,000 ft",
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    inclusions: [
      "7 nights accommodation (twin-sharing — hotels and GMVN rest houses)",
      "All meals throughout (breakfast, lunch, dinner)",
      "Dedicated Tempo Traveller for 8 days",
      "Certified guide (Prakash Ramola — 15 years)",
      "Puja coordination for both Dhams (puja charges extra)",
      "RFID wristband registration assistance",
      "Medical kit: oxygen cylinders (6), pulse oximeters, AMS medications",
      "Satellite phone (Garmin inReach Mini 2)",
      "Porterage on Kedarnath trek (8 kg/person)",
      "All permits and entry fees",
      "GST included"
    ],
    exclusions: [
      "Helicopter charges for Kedarnath (₹6,500–9,000 extra)",
      "Puja charges at both Dhams (₹3,100–7,500 extra)",
      "Personal travel and medical insurance",
      "Personal shopping and tips"
    ],
    faqs: [
      {
        question: "Is Do Dham the right choice or should I do Char Dham?",
        answer: "Do Dham is ideal for first-time Himalayan pilgrims, those with limited time (8 days), or those who want a focused Shiva + Vishnu experience. Char Dham (12 days) is the complete moksha circuit. Many pilgrims do Do Dham first, then return for Char Dham."
      },
      {
        question: "Can elderly parents do Badrinath without trekking?",
        answer: "Yes — Badrinath is fully accessible by road up to the temple gate. Only Kedarnath requires a 16km trek (or helicopter). Helicopter from Phata to Kedarnath (8 min) is the solution for elderly/unfit pilgrims."
      }
    ],
    packingList: [
      "Warm layers (thermal, fleece, windproof)",
      "Trekking shoes for Kedarnath trek",
      "Rain gear",
      "Trekking poles",
      "Personal medications",
      "Puja items (available locally)",
      "Modest temple clothing"
    ],
    safetyProtocol: doDhamSafety,
    batchSlots: doDhamBatches,
    detailedReviews: doDhamReviews,
    relatedTrekIds: ["kedarnath-yatra", "char-dham"],
    similarTreks: ["kedarnath-yatra", "char-dham"]
  }
];
export {
  yatraData as y
};
