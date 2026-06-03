import Migration "migration";
import List "mo:core/List";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Time "mo:core/Time";

(with migration = Migration.migrate)
actor {

  // ── Types ──────────────────────────────────────────────────────────────

  public type Trek = {
    id : Text;
    name : Text;
    region : Text;
    maxAltitude : Text;
    distance : Text;
    duration : Text;
    difficulty : Text;
    bestTime : Text;
    startPoint : Text;
    nearestRailhead : Text;
    nearestAirport : Text;
    groupSize : Text;
    ageGroup : Text;
    price : Text;
    imageQuery : Text;
    description : Text;
  };

  public type Yatra = {
    id : Text;
    name : Text;
    region : Text;
    duration : Text;
    difficulty : Text;
    bestTime : Text;
    startEnd : Text;
    price : Text;
    description : Text;
    imageQuery : Text;
  };

  public type BlogPost = {
    id : Text;
    title : Text;
    category : Text;
    date : Text;
    excerpt : Text;
    imageQuery : Text;
  };

  public type BookingInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    trekInterest : Text;
    preferredDates : Text;
    groupSize : Text;
    specialRequirements : Text;
    hearAboutUs : Text;
  };

  public type Batch = {
    id : Text;
    trekId : Text;
    startDate : Text;
    endDate : Text;
    maxCapacity : Nat;
    bookedCount : Nat;
    basePrice : Nat;
    batchType : Text;
  };

  public type BookingStatus = {
    #Pending;
    #Confirmed;
    #Completed;
    #Cancelled;
  };

  public type ParticipantInput = {
    firstName : Text;
    lastName : Text;
    age : Nat;
    gender : Text;
    mobile : Text;
    email : Text;
    emergencyContactName : Text;
    emergencyContactPhone : Text;
    medicalConditions : Text;
    govtIdType : Text;
    govtIdNumber : Text;
  };

  public type AddOns = {
    porter : Bool;
    mule : Bool;
    travelInsurance : Bool;
    gearSleepingBag : Bool;
    gearTent : Bool;
    gearBoots : Bool;
    porterDays : Nat;
    muleDays : Nat;
  };

  public type BookingInput = {
    trekSlug : Text;
    batchDate : Text;
    participants : [ParticipantInput];
    addOns : AddOns;
    paymentType : Text;
    promoCode : Text;
    totalAmount : Nat;
    advanceAmount : Nat;
  };

  public type Participant = {
    firstName : Text;
    lastName : Text;
    dateOfBirth : Text;
    gender : Text;
    mobile : Text;
    email : Text;
    emergencyContact : Text;
    medicalConditions : Text;
    govtId : Text;
  };

  public type Booking = {
    id : Text;
    trekSlug : Text;
    batchDate : Text;
    participants : [ParticipantInput];
    addOns : AddOns;
    totalAmount : Nat;
    advanceAmount : Nat;
    paidAmount : Nat;
    paymentType : Text;
    promoCode : Text;
    status : BookingStatus;
    createdAt : Int;
    userId : Text;
    contactEmail : Text;
    contactPhone : Text;
  };

  public type BatchAvailability = {
    trekSlug : Text;
    batchDate : Text;
    totalSeats : Nat;
    bookedSeats : Nat;
    availableSeats : Nat;
    price : Nat;
    batchType : Text;
  };

  public type GearItem = {
    id : Text;
    name : Text;
    brand : Text;
    spec : Text;
    pricePerDay : Nat;
    deposit : Nat;
    category : Text;
  };

  public type Review = {
    id : Text;
    trekId : Text;
    userId : Text;
    rating : Nat;
    reviewText : Text;
    reviewerName : Text;
    reviewerCity : Text;
    trekDate : Text;
    helpful : Nat;
    verified : Bool;
  };

  public type Package = {
    id : Text;
    name : Text;
    description : Text;
    category : Text;
    price : Nat;
    duration : Text;
    highlights : [Text];
    inclusions : [Text];
    images : [Text];
  };

  // ── Seed data ──────────────────────────────────────────────────────────

  let packageSeed : [Package] = [
    {
      id = "pkg-corporate";
      name = "Corporate Team Building";
      description = "Transform your team with a high-altitude Himalayan experience. Our corporate treks build trust, resilience, and leadership under real pressure. Carefully curated for organizations seeking meaningful off-sites beyond boardrooms.";
      category = "corporate";
      price = 35000;
      duration = "3\u{2013}5 Days";
      highlights = ["Leadership & trust exercises on trail", "Team challenge at high-altitude campsite", "Professional team photography", "Corporate certificate of achievement", "Dedicated team coordinator"];
      inclusions = ["Transport from nearest city", "All meals on trek", "Tents & sleeping bags", "Expert mountain guide", "First aid & oxygen cylinder", "Trip report with professional photos"];
      images = ["corporate,team,himalaya", "group,trek,mountains"];
    },
    {
      id = "pkg-school";
      name = "School & College Adventure";
      description = "The most transformative field trip your students will ever take. Age-appropriate routes, safety-first protocols, and curriculum-linked natural science programs embedded in every itinerary. CBSE & ICSE schools welcome.";
      category = "school";
      price = 12000;
      duration = "3\u{2013}4 Days";
      highlights = ["Age-appropriate trek difficulty", "Nature & environmental education", "Campfire storytelling sessions", "Rock climbing & rappelling", "Student trek achievement certificate"];
      inclusions = ["AC Volvo bus transport", "All vegetarian meals", "Alpine sleeping tents", "Trained youth leaders", "Medical staff on site", "Parent update messages twice daily"];
      images = ["students,trek,himalaya", "school,adventure,mountains"];
    },
    {
      id = "pkg-family";
      name = "Family Himalayan Holiday";
      description = "A Himalayan adventure designed for every generation. Grandparents, parents, and children share the same mountain story — comfortable stays, gentle trails, scenic villages, and panoramic views without a single compromise on comfort.";
      category = "family";
      price = 18000;
      duration = "5\u{2013}7 Days";
      highlights = ["Child-safe trail selection", "Comfortable guesthouse stays", "Family photography session in Himalayas", "Village home-stay evening", "Customizable itinerary"];
      inclusions = ["Private vehicle transport", "Homestay & guesthouse accommodation", "All meals (customizable menu)", "Local family-friendly guide", "Porter for elder family members", "Travel insurance for all"];
      images = ["family,himalaya,holiday", "mountains,village,india"];
    },
    {
      id = "pkg-honeymoon";
      name = "Honeymoon in Himalayas";
      description = "Begin your forever story at the top of the world. Our honeymoon package combines luxury mountain stays, sunrise from 4,000m peaks, private campfire dinners under a billion stars, and once-in-a-lifetime experiences tailored exclusively for two.";
      category = "honeymoon";
      price = 45000;
      duration = "6\u{2013}8 Days";
      highlights = ["Private luxury tent with mountain view", "Candlelight dinner at 3,500m", "Sunrise couple photography session", "Flower valley walk", "Couple's spa at mountain resort"];
      inclusions = ["Premium private transport", "Luxury glamping tents or boutique resort", "All gourmet meals", "Private guide exclusively for couple", "Honeymoon welcome kit", "Drone photography session"];
      images = ["honeymoon,himalaya,couple", "luxury,mountains,sunset"];
    },
    {
      id = "pkg-solo";
      name = "Solo Expedition";
      description = "Travel light, travel free. Our solo-traveller program is built around safety, community, and self-discovery. You trek at your pace with a private guide, but share meals and campsites with a curated group of like-minded solo adventurers from across India.";
      category = "solo";
      price = 15000;
      duration = "4\u{2013}6 Days";
      highlights = ["Private trekking guide", "Solo-first safety protocol", "Community camp dinners with fellow travellers", "Journaling & mindfulness sessions", "Solo summit certificate"];
      inclusions = ["Shared transport from base city", "All meals", "Shared tent or solo tent upgrade", "Personal guide", "Emergency satellite communicator", "Post-trek community meetup"];
      images = ["solo,trekker,himalaya", "mountains,adventure,india"];
    },
    {
      id = "pkg-custom";
      name = "Custom Trip Builder";
      description = "Your Himalayas, your rules. No fixed dates, no fixed routes. Tell us what you dream of — glacier crossing, village homestay, peak climb, river camp, photography expedition — and our destination experts will craft a bespoke Himalayan journey exclusively for you.";
      category = "custom";
      price = 20000;
      duration = "Custom";
      highlights = ["100% bespoke route planning", "Any date, any group size", "Private vehicle & logistics", "Photography or adventure focus", "Unlimited itinerary revisions"];
      inclusions = ["Dedicated trip designer", "Private transport throughout", "Accommodation of your choice", "All meals & snacks", "Expert local guide", "24/7 on-trip support"];
      images = ["custom,himalaya,adventure", "bespoke,trek,india"];
    },
  ];

  let trekSeed : [Trek] = [
    {
      id = "chopta-tungnath";
      name = "Chopta Tungnath Chandrashila";
      region = "Rudraprayag, Uttarakhand";
      maxAltitude = "13,123 ft (4,000m)";
      distance = "18 km";
      duration = "3 Days / 2 Nights";
      difficulty = "Easy to Moderate";
      bestTime = "March\u{2013}April, September\u{2013}November";
      startPoint = "Chopta (8,500 ft)";
      nearestRailhead = "Rishikesh (210 km)";
      nearestAirport = "Jolly Grant, Dehradun (231 km)";
      groupSize = "6\u{2013}12";
      ageGroup = "10\u{2013}65 years";
      price = "\u{20B9}6,500";
      imageQuery = "chopta,himalaya,snow";
      description = "Chopta, known as the Mini Switzerland of Uttarakhand, is a hidden meadow at 2,680m surrounded by deodar and rhododendron forests. The trail ascends to Tungnath — the highest Shiva temple in the world at 3,680m — one of the sacred Panch Kedar temples. A further climb leads to Chandrashila Peak (4,000m) offering a 360-degree panorama of Himalayan giants including Nanda Devi, Trishul, Kedarnath, Chaukhamba, and Bandarpunch.";
    },
    {
      id = "har-ki-dun";
      name = "Har Ki Dun \u{2014} Valley of Gods";
      region = "Uttarkashi, Uttarakhand";
      maxAltitude = "11,675 ft (3,566m)";
      distance = "47 km";
      duration = "6 Days / 5 Nights";
      difficulty = "Easy to Moderate";
      bestTime = "April\u{2013}June, September\u{2013}November";
      startPoint = "Sankri Village (6,400 ft)";
      nearestRailhead = "Dehradun (200 km)";
      nearestAirport = "Jolly Grant, Dehradun";
      groupSize = "6\u{2013}15";
      ageGroup = "12\u{2013}60 years";
      price = "\u{20B9}9,500";
      imageQuery = "valley,himalaya,meadow";
      description = "Har Ki Dun — Valley of Gods — is one of the most mythologically rich trekking valleys in the Himalayas, hidden in Govind National Park. Believed to be the Pandava route to heaven, the valley is cradled by the Swargarohini massif (6,252m). Traditional Garhwali villages of Osla and Gangaad with centuries-old wooden temples line the trail alongside the Supin River.";
    },
    {
      id = "kedarkantha";
      name = "Kedarkantha \u{2014} King of Winter Treks";
      region = "Uttarkashi, Uttarakhand";
      maxAltitude = "12,500 ft (3,810m)";
      distance = "20 km";
      duration = "5 Days / 4 Nights";
      difficulty = "Easy to Moderate";
      bestTime = "December\u{2013}April, May\u{2013}June";
      startPoint = "Sankri Village (6,400 ft)";
      nearestRailhead = "Dehradun (200 km)";
      nearestAirport = "Jolly Grant, Dehradun";
      groupSize = "8\u{2013}15";
      ageGroup = "10\u{2013}55 years";
      price = "\u{20B9}7,999";
      imageQuery = "kedarkantha,winter,snow,trek";
      description = "Kedarkantha is the undisputed king of Indian winter treks. The summit at 3,810m offers a 360-degree panoramic view of Swargarohini, Bandarpunch, Kala Nag, and dozens of snow giants. The trail weaves through snow-laden deodar forests, alpine clearings, and three spectacular high-altitude campsites. In December to March the entire trail is blanketed in pristine snow.";
    },
    {
      id = "kuari-pass";
      name = "Kuari Pass \u{2014} The Curzon Trail";
      region = "Chamoli, Uttarakhand";
      maxAltitude = "13,990 ft (4,264m)";
      distance = "40 km";
      duration = "5 Days / 4 Nights";
      difficulty = "Moderate";
      bestTime = "April\u{2013}June, October\u{2013}December";
      startPoint = "Joshimath (6,150 ft)";
      nearestRailhead = "Haridwar (271 km)";
      nearestAirport = "Jolly Grant, Dehradun (280 km)";
      groupSize = "6\u{2013}12";
      ageGroup = "14\u{2013}55 years";
      price = "\u{20B9}10,500";
      imageQuery = "nanda,devi,himalaya,meadow";
      description = "Named after Lord Curzon who explored it in the British era, Kuari Pass is a legendary Himalayan crossing offering arguably the finest panoramic view of the Nanda Devi massif (7,816m — India's highest peak) in all Himalayan trekking. The trail passes through fairy-tale forests, open bugyal meadows, and ancient shepherd paths to reach the dramatic pass at 4,264m.";
    },
    {
      id = "hampta-pass";
      name = "Hampta Pass \u{2014} The Great Himalayan Crossover";
      region = "Kullu to Lahaul, Himachal Pradesh";
      maxAltitude = "14,100 ft (4,300m)";
      distance = "35 km";
      duration = "5 Days / 4 Nights";
      difficulty = "Moderate";
      bestTime = "June\u{2013}September";
      startPoint = "Jobra near Manali (8,200 ft)";
      nearestRailhead = "Ambala (270 km)";
      nearestAirport = "Bhuntar Airport, Kullu (55 km)";
      groupSize = "6\u{2013}15";
      ageGroup = "14\u{2013}55 years";
      price = "\u{20B9}11,999";
      imageQuery = "manali,himalaya,green,valley";
      description = "Hampta Pass is one of India's most dramatic trekking experiences — a trans-Himalayan crossover that transitions from the lush, forested Kullu Valley to the stark, moon-like desert of Lahaul in a single dramatic day. No other trek offers such a violent, beautiful landscape contrast. The trek also involves genuine river crossings with fixed ropes and the optional Chandratal Lake extension.";
    },
    {
      id = "sar-pass";
      name = "Sar Pass \u{2014} The Snow Playground";
      region = "Parvati Valley, Kullu, Himachal Pradesh";
      maxAltitude = "13,800 ft (4,220m)";
      distance = "47 km";
      duration = "5 Days / 4 Nights";
      difficulty = "Moderate";
      bestTime = "May\u{2013}June, September\u{2013}October";
      startPoint = "Kasol / Grahan village";
      nearestRailhead = "Ambala Cantonment (280 km)";
      nearestAirport = "Bhuntar Airport, Kullu (30 km)";
      groupSize = "10\u{2013}20";
      ageGroup = "15\u{2013}45 years";
      price = "\u{20B9}10,999";
      imageQuery = "snow,mountain,pass,himachal";
      description = "Sar Pass sits at 4,220m in the majestic Parvati Valley of Kullu district. Beloved for its iconic snow slides on the descent — trekkers slide down a 70-degree snowfield for 200+ metres — this is the most popular snow trek in Himachal Pradesh. The charming Grahan village, Min Thach alpine meadows, and 360-degree Kullu Himalayan panorama make this an unforgettable experience.";
    },
    {
      id = "phulara-ridge";
      name = "Phulara Ridge \u{2014} India's Great Ridge Walk";
      region = "Uttarkashi, Uttarakhand";
      maxAltitude = "12,345 ft (3,764m)";
      distance = "30 km";
      duration = "5 Days / 4 Nights";
      difficulty = "Easy to Moderate";
      bestTime = "April\u{2013}June, September\u{2013}November";
      startPoint = "Sankri Village (6,400 ft)";
      nearestRailhead = "Dehradun (200 km)";
      nearestAirport = "Jolly Grant, Dehradun";
      groupSize = "6\u{2013}12";
      ageGroup = "12\u{2013}55 years";
      price = "\u{20B9}9,200";
      imageQuery = "ridge,himalaya,panorama,uttarakhand";
      description = "Phulara Ridge is a hidden masterpiece of the Uttarakhand Himalayas — one of the few treks in India where the ridge itself is the star. You walk on top of a spectacular ridgeline for 4 to 5 continuous hours with giant peaks on both sides simultaneously. Swargarohini, Kala Nag, Bandarpunch, and Kedarkantha are all visible together — a panorama without peer in the Govind Wildlife Sanctuary.";
    },
    {
      id = "kedarnath-yatra";
      name = "Kedarnath Yatra \u{2014} Lord Shiva's Abode";
      region = "Rudraprayag, Uttarakhand";
      maxAltitude = "11,755 ft (3,583m)";
      distance = "19 km one way";
      duration = "4 Days / 3 Nights";
      difficulty = "Moderate";
      bestTime = "May\u{2013}June, September\u{2013}October";
      startPoint = "Gaurikund (6,578 ft)";
      nearestRailhead = "Rishikesh (229 km)";
      nearestAirport = "Jolly Grant, Dehradun (233 km)";
      groupSize = "4\u{2013}20";
      ageGroup = "10\u{2013}70 years";
      price = "\u{20B9}7,500";
      imageQuery = "kedarnath,temple,shiva,himalaya";
      description = "Kedarnath is the holiest of the 12 Jyotirlingas and the most sacred Shiva shrine in the Himalayas. Nestled at 3,583m at the base of the Kedarnath Peak and Glacier, the stone temple built by Adi Shankaracharya in the 8th century has survived Himalayan winters and glacier floods. The 19 km trek from Gaurikund culminates in a profoundly spiritual darshan experience.";
    },
    {
      id = "do-dham";
      name = "Do Dham Yatra \u{2014} Kedarnath & Badrinath";
      region = "Rudraprayag + Chamoli, Uttarakhand";
      maxAltitude = "11,755 ft";
      distance = "Multiple drives + 19 km trek";
      duration = "7 Days / 6 Nights";
      difficulty = "Moderate";
      bestTime = "May\u{2013}June, September\u{2013}October";
      startPoint = "Haridwar";
      nearestRailhead = "Haridwar";
      nearestAirport = "Jolly Grant, Dehradun";
      groupSize = "4\u{2013}20";
      ageGroup = "12\u{2013}70 years";
      price = "\u{20B9}18,999";
      imageQuery = "badrinath,temple,pilgrimage,himalaya";
      description = "Do Dham Yatra covers the two most sacred shrines of the Garhwal Himalayas — Kedarnath (the Shiva jyotirlinga) and Badrinath (the Vishnu dhama). Together they form the spiritual heart of Uttarakhand's Char Dham. For those unable to undertake the full Char Dham Yatra, Do Dham provides the most essential pilgrimage experience in a condensed, deeply fulfilling seven-day format.";
    },
    {
      id = "char-dham";
      name = "Char Dham Yatra \u{2014} The Great Himalayan Pilgrimage";
      region = "Garhwal Himalayas, Uttarakhand";
      maxAltitude = "11,755 ft (Kedarnath)";
      distance = "Multiple drives + 25 km trek total";
      duration = "11\u{2013}13 Days";
      difficulty = "Easy to Moderate";
      bestTime = "May\u{2013}June, September\u{2013}October";
      startPoint = "Haridwar (round trip)";
      nearestRailhead = "Haridwar";
      nearestAirport = "Jolly Grant, Dehradun";
      groupSize = "4\u{2013}20";
      ageGroup = "All ages";
      price = "\u{20B9}32,999";
      imageQuery = "char,dham,himalaya,pilgrimage";
      description = "Char Dham Yatra is one of India's most sacred pilgrimages — four divine abodes in the Garhwal Himalayas. Following Adi Shankaracharya's 8th-century establishment, the circuit spans Yamunotri, Gangotri, Kedarnath, and Badrinath. Completing the Char Dham Yatra is believed to wash away all sins and break the cycle of rebirth — the ultimate Himalayan spiritual journey.";
    },
  ];

  let batchSeed : [Batch] = [
    { id = "kk-dec-15"; trekId = "kedarkantha"; startDate = "Dec 15, 2026"; endDate = "Dec 19, 2026"; maxCapacity = 15; bookedCount = 15; basePrice = 8500; batchType = "Regular" },
    { id = "kk-dec-20"; trekId = "kedarkantha"; startDate = "Dec 20, 2026"; endDate = "Dec 24, 2026"; maxCapacity = 15; bookedCount = 7; basePrice = 8500; batchType = "Regular" },
    { id = "kk-dec-25"; trekId = "kedarkantha"; startDate = "Dec 25, 2026"; endDate = "Dec 29, 2026"; maxCapacity = 15; bookedCount = 3; basePrice = 9500; batchType = "Christmas Special" },
    { id = "kk-dec-30"; trekId = "kedarkantha"; startDate = "Dec 30, 2026"; endDate = "Jan 3, 2027"; maxCapacity = 15; bookedCount = 10; basePrice = 10500; batchType = "New Year Eve" },
    { id = "kk-jan-05"; trekId = "kedarkantha"; startDate = "Jan 5, 2027"; endDate = "Jan 9, 2027"; maxCapacity = 15; bookedCount = 3; basePrice = 8500; batchType = "Regular" },
    { id = "kk-jan-15"; trekId = "kedarkantha"; startDate = "Jan 15, 2027"; endDate = "Jan 19, 2027"; maxCapacity = 15; bookedCount = 0; basePrice = 8500; batchType = "Regular" },
    { id = "kk-jan-25"; trekId = "kedarkantha"; startDate = "Jan 25, 2027"; endDate = "Jan 29, 2027"; maxCapacity = 15; bookedCount = 5; basePrice = 8500; batchType = "Regular" },
    { id = "kk-feb-05"; trekId = "kedarkantha"; startDate = "Feb 5, 2027"; endDate = "Feb 9, 2027"; maxCapacity = 15; bookedCount = 2; basePrice = 8500; batchType = "Regular" },
  ];

  let gearSeed : [GearItem] = [
    { id = "gear-poles"; name = "Trekking Poles (pair)"; brand = "Black Diamond"; spec = "Collapsible, 3-section aluminium, anti-shock"; pricePerDay = 80; deposit = 500; category = "Movement" },
    { id = "gear-sleeping-bag"; name = "Sleeping Bag"; brand = "Forclaz"; spec = "-10\u{00B0}C comfort rating, mummy cut, 1.2 kg"; pricePerDay = 150; deposit = 1000; category = "Shelter" },
    { id = "gear-poncho"; name = "Rain Poncho"; brand = "Decathlon"; spec = "One-size, 100% waterproof, packable"; pricePerDay = 50; deposit = 200; category = "Clothing" },
    { id = "gear-gaiters"; name = "Gaiters"; brand = "Forclaz"; spec = "Waterproof, universal fit, velcro closure"; pricePerDay = 60; deposit = 300; category = "Footwear" },
    { id = "gear-crampons"; name = "Crampons"; brand = "Wildcraft"; spec = "6-point, strap-on, fits most trekking boots"; pricePerDay = 100; deposit = 500; category = "Footwear" },
    { id = "gear-backpack"; name = "Backpack 50L"; brand = "Osprey"; spec = "50L, padded hip belt, rain cover included"; pricePerDay = 120; deposit = 800; category = "Carry" },
    { id = "gear-headlamp"; name = "Headlamp"; brand = "Petzl"; spec = "300 lumen, USB-C rechargeable, red mode"; pricePerDay = 60; deposit = 200; category = "Lighting" },
    { id = "gear-jacket"; name = "Insulated Trekking Jacket"; brand = "Quechua"; spec = "-5\u{00B0}C rating, synthetic fill, packable"; pricePerDay = 120; deposit = 700; category = "Clothing" },
    { id = "gear-boots"; name = "Trekking Boots"; brand = "Quechua"; spec = "Waterproof, ankle support, UK size 5\u{2013}12"; pricePerDay = 150; deposit = 1000; category = "Footwear" },
    { id = "gear-thermals"; name = "Thermal Set (Top + Bottom)"; brand = "Decathlon"; spec = "Merino blend, medium weight, S\u{2013}XXL"; pricePerDay = 80; deposit = 400; category = "Clothing" },
  ];

  let reviewSeed : [Review] = [
    { id = "rev-kk-001"; trekId = "kedarkantha"; userId = "user-anon-1"; rating = 5; reviewText = "Absolutely magical experience! The summit sunrise on Day 4 was worth every step of the climb. Global Trek's team was professional, caring, and the food was surprisingly delicious even at high altitude. Our guide Ankit knew every story behind every peak. Will 100% trek with them again."; reviewerName = "Rahul Sharma"; reviewerCity = "Delhi"; trekDate = "December 2025"; helpful = 47; verified = true },
    { id = "rev-kk-002"; trekId = "kedarkantha"; userId = "user-anon-2"; rating = 5; reviewText = "My first Himalayan trek and it couldn't have been better. The team was incredibly supportive for first-timers. Snow-covered deodar forests, a magical campfire at Kedarkantha Base, and that summit view — I cried at the top. Life-changing doesn't even begin to cover it."; reviewerName = "Priya Menon"; reviewerCity = "Bengaluru"; trekDate = "January 2026"; helpful = 38; verified = true },
    { id = "rev-kk-003"; trekId = "kedarkantha"; userId = "user-anon-3"; rating = 5; reviewText = "Third trek with Global Trek — consistency is incredible. Equipment is always clean and properly maintained. The new premium tent upgrade was worth it in minus temperatures. Safety standards are top-notch with pulse oximeters checked every evening. Highly recommend the Dec 25 Christmas batch!"; reviewerName = "Vikram Nair"; reviewerCity = "Mumbai"; trekDate = "December 2025"; helpful = 29; verified = true },
    { id = "rev-kk-004"; trekId = "kedarkantha"; userId = "user-anon-4"; rating = 4; reviewText = "Fantastic trek overall. Summit views are genuinely unreal — seeing 12+ Himalayan peaks simultaneously is something photographs cannot capture. Minor feedback: the Day 1 drive from Dehradun is long and the road after Purola is bumpy. But the destination is absolutely worth every pothole."; reviewerName = "Sneha Kulkarni"; reviewerCity = "Pune"; trekDate = "February 2026"; helpful = 22; verified = true },
    { id = "rev-kk-005"; trekId = "kedarkantha"; userId = "user-anon-5"; rating = 5; reviewText = "Went as a solo traveller and was nervous but the team made me feel at home immediately. Met amazing people from across India. The Jan 5 batch had such great group energy. Guide Deepak was knowledgeable, funny, and made altitude safety fun rather than scary. The summit campsite at night with stars is unbelievable."; reviewerName = "Arjun Pillai"; reviewerCity = "Chennai"; trekDate = "January 2026"; helpful = 51; verified = true },
  ];

  let blogSeed : [BlogPost] = [
    {
      id = "kedarkantha-winter-trek";
      title = "10 Reasons Why Kedarkantha Is India's Greatest Winter Trek";
      category = "Trek Guides";
      date = "November 2024";
      excerpt = "From 360\u{00B0} summit panoramas to magical snow-laden forests, here's why Kedarkantha remains the undisputed king of Indian winter trekking.";
      imageQuery = "kedarkantha,winter,snow,trek";
    },
    {
      id = "char-dham-2025-guide";
      title = "Char Dham Yatra 2025 \u{2014} Complete Planning Guide";
      category = "Yatra";
      date = "January 2025";
      excerpt = "Everything you need to know: opening dates, route, transport, budget, packing list, weather, and helicopter options for Char Dham 2025.";
      imageQuery = "char,dham,himalaya,pilgrimage";
    },
    {
      id = "hampta-vs-sar-pass";
      title = "Hampta Pass vs Sar Pass \u{2014} Which Trek Is Right For You?";
      category = "Comparison Guides";
      date = "March 2025";
      excerpt = "A head-to-head comparison of two of Himachal's most beloved treks \u{2014} landscape, difficulty, season, cost, and adventure quotient.";
      imageQuery = "manali,himalaya,snow,pass";
    },
  ];

  // ── Batch availability seed ────────────────────────────────────────────

  let batchAvailabilitySeed : [BatchAvailability] = [
    // Kedarkantha
    { trekSlug = "kedarkantha"; batchDate = "Dec 15, 2026"; totalSeats = 15; bookedSeats = 15; availableSeats = 0;  price = 8500;  batchType = "Regular" },
    { trekSlug = "kedarkantha"; batchDate = "Dec 20, 2026"; totalSeats = 15; bookedSeats = 7;  availableSeats = 8;  price = 8500;  batchType = "Regular" },
    { trekSlug = "kedarkantha"; batchDate = "Dec 25, 2026"; totalSeats = 15; bookedSeats = 3;  availableSeats = 12; price = 9500;  batchType = "Christmas Special" },
    { trekSlug = "kedarkantha"; batchDate = "Dec 30, 2026"; totalSeats = 15; bookedSeats = 10; availableSeats = 5;  price = 10500; batchType = "New Year Eve" },
    { trekSlug = "kedarkantha"; batchDate = "Jan 5, 2027";  totalSeats = 15; bookedSeats = 3;  availableSeats = 12; price = 8500;  batchType = "Regular" },
    { trekSlug = "kedarkantha"; batchDate = "Jan 10, 2027"; totalSeats = 15; bookedSeats = 0;  availableSeats = 15; price = 8500;  batchType = "Regular" },
    // Chopta Tungnath
    { trekSlug = "chopta-tungnath"; batchDate = "Nov 5, 2026";  totalSeats = 12; bookedSeats = 4; availableSeats = 8;  price = 6500; batchType = "Regular" },
    { trekSlug = "chopta-tungnath"; batchDate = "Nov 20, 2026"; totalSeats = 12; bookedSeats = 7; availableSeats = 5;  price = 6500; batchType = "Regular" },
    { trekSlug = "chopta-tungnath"; batchDate = "Dec 10, 2026"; totalSeats = 12; bookedSeats = 2; availableSeats = 10; price = 7000; batchType = "Winter Special" },
    { trekSlug = "chopta-tungnath"; batchDate = "Jan 8, 2027";  totalSeats = 12; bookedSeats = 0; availableSeats = 12; price = 7000; batchType = "Regular" },
    { trekSlug = "chopta-tungnath"; batchDate = "Feb 5, 2027";  totalSeats = 12; bookedSeats = 3; availableSeats = 9;  price = 6500; batchType = "Regular" },
    { trekSlug = "chopta-tungnath"; batchDate = "Mar 5, 2027";  totalSeats = 12; bookedSeats = 6; availableSeats = 6;  price = 6500; batchType = "Regular" },
    // Har Ki Dun
    { trekSlug = "har-ki-dun"; batchDate = "Apr 10, 2026"; totalSeats = 15; bookedSeats = 5;  availableSeats = 10; price = 9500; batchType = "Spring" },
    { trekSlug = "har-ki-dun"; batchDate = "May 5, 2026";  totalSeats = 15; bookedSeats = 8;  availableSeats = 7;  price = 9500; batchType = "Regular" },
    { trekSlug = "har-ki-dun"; batchDate = "Jun 2, 2026";  totalSeats = 15; bookedSeats = 12; availableSeats = 3;  price = 9500; batchType = "Regular" },
    { trekSlug = "har-ki-dun"; batchDate = "Aug 5, 2026";  totalSeats = 15; bookedSeats = 4;  availableSeats = 11; price = 9500; batchType = "Regular" },
    { trekSlug = "har-ki-dun"; batchDate = "Sep 10, 2026"; totalSeats = 15; bookedSeats = 9;  availableSeats = 6;  price = 9500; batchType = "Autumn" },
    { trekSlug = "har-ki-dun"; batchDate = "Oct 5, 2026";  totalSeats = 15; bookedSeats = 6;  availableSeats = 9;  price = 9500; batchType = "Autumn" },
    // Hampta Pass
    { trekSlug = "hampta-pass"; batchDate = "Jun 10, 2026"; totalSeats = 15; bookedSeats = 6;  availableSeats = 9;  price = 11999; batchType = "Regular" },
    { trekSlug = "hampta-pass"; batchDate = "Jun 25, 2026"; totalSeats = 15; bookedSeats = 9;  availableSeats = 6;  price = 11999; batchType = "Regular" },
    { trekSlug = "hampta-pass"; batchDate = "Jul 10, 2026"; totalSeats = 15; bookedSeats = 11; availableSeats = 4;  price = 11999; batchType = "Monsoon Special" },
    { trekSlug = "hampta-pass"; batchDate = "Jul 25, 2026"; totalSeats = 15; bookedSeats = 5;  availableSeats = 10; price = 11999; batchType = "Regular" },
    { trekSlug = "hampta-pass"; batchDate = "Aug 10, 2026"; totalSeats = 15; bookedSeats = 3;  availableSeats = 12; price = 11999; batchType = "Regular" },
    { trekSlug = "hampta-pass"; batchDate = "Sep 5, 2026";  totalSeats = 15; bookedSeats = 7;  availableSeats = 8;  price = 11999; batchType = "Autumn" },
    // Sar Pass
    { trekSlug = "sar-pass"; batchDate = "May 15, 2026"; totalSeats = 20; bookedSeats = 8;  availableSeats = 12; price = 10999; batchType = "Spring Snow" },
    { trekSlug = "sar-pass"; batchDate = "Jun 1, 2026";  totalSeats = 20; bookedSeats = 15; availableSeats = 5;  price = 10999; batchType = "Regular" },
    { trekSlug = "sar-pass"; batchDate = "Jun 15, 2026"; totalSeats = 20; bookedSeats = 20; availableSeats = 0;  price = 10999; batchType = "Regular" },
    { trekSlug = "sar-pass"; batchDate = "Sep 10, 2026"; totalSeats = 20; bookedSeats = 6;  availableSeats = 14; price = 10999; batchType = "Autumn" },
    { trekSlug = "sar-pass"; batchDate = "Sep 25, 2026"; totalSeats = 20; bookedSeats = 4;  availableSeats = 16; price = 10999; batchType = "Autumn" },
    { trekSlug = "sar-pass"; batchDate = "Oct 10, 2026"; totalSeats = 20; bookedSeats = 2;  availableSeats = 18; price = 10999; batchType = "Autumn" },
    // Kuari Pass
    { trekSlug = "kuari-pass"; batchDate = "Apr 15, 2026"; totalSeats = 12; bookedSeats = 4; availableSeats = 8;  price = 10500; batchType = "Spring" },
    { trekSlug = "kuari-pass"; batchDate = "May 10, 2026"; totalSeats = 12; bookedSeats = 7; availableSeats = 5;  price = 10500; batchType = "Regular" },
    { trekSlug = "kuari-pass"; batchDate = "Jun 5, 2026";  totalSeats = 12; bookedSeats = 9; availableSeats = 3;  price = 10500; batchType = "Regular" },
    { trekSlug = "kuari-pass"; batchDate = "Oct 10, 2026"; totalSeats = 12; bookedSeats = 5; availableSeats = 7;  price = 10500; batchType = "Autumn" },
    { trekSlug = "kuari-pass"; batchDate = "Nov 5, 2026";  totalSeats = 12; bookedSeats = 3; availableSeats = 9;  price = 10500; batchType = "Winter" },
    { trekSlug = "kuari-pass"; batchDate = "Dec 5, 2026";  totalSeats = 12; bookedSeats = 1; availableSeats = 11; price = 10500; batchType = "Winter" },
    // Phulara Ridge
    { trekSlug = "phulara-ridge"; batchDate = "Apr 20, 2026"; totalSeats = 12; bookedSeats = 3; availableSeats = 9;  price = 9200; batchType = "Spring" },
    { trekSlug = "phulara-ridge"; batchDate = "May 15, 2026"; totalSeats = 12; bookedSeats = 6; availableSeats = 6;  price = 9200; batchType = "Regular" },
    { trekSlug = "phulara-ridge"; batchDate = "Jun 10, 2026"; totalSeats = 12; bookedSeats = 8; availableSeats = 4;  price = 9200; batchType = "Regular" },
    { trekSlug = "phulara-ridge"; batchDate = "Sep 15, 2026"; totalSeats = 12; bookedSeats = 5; availableSeats = 7;  price = 9200; batchType = "Autumn" },
    { trekSlug = "phulara-ridge"; batchDate = "Oct 10, 2026"; totalSeats = 12; bookedSeats = 7; availableSeats = 5;  price = 9200; batchType = "Autumn" },
    { trekSlug = "phulara-ridge"; batchDate = "Nov 5, 2026";  totalSeats = 12; bookedSeats = 2; availableSeats = 10; price = 9200; batchType = "Regular" },
    // Kedarnath Yatra
    { trekSlug = "kedarnath-yatra"; batchDate = "May 5, 2026";  totalSeats = 20; bookedSeats = 12; availableSeats = 8;  price = 7500; batchType = "Opening Season" },
    { trekSlug = "kedarnath-yatra"; batchDate = "May 15, 2026"; totalSeats = 20; bookedSeats = 18; availableSeats = 2;  price = 7500; batchType = "Regular" },
    { trekSlug = "kedarnath-yatra"; batchDate = "May 25, 2026"; totalSeats = 20; bookedSeats = 20; availableSeats = 0;  price = 7500; batchType = "Regular" },
    { trekSlug = "kedarnath-yatra"; batchDate = "Jun 5, 2026";  totalSeats = 20; bookedSeats = 14; availableSeats = 6;  price = 7500; batchType = "Regular" },
    { trekSlug = "kedarnath-yatra"; batchDate = "Sep 10, 2026"; totalSeats = 20; bookedSeats = 10; availableSeats = 10; price = 7500; batchType = "Autumn" },
    { trekSlug = "kedarnath-yatra"; batchDate = "Oct 5, 2026";  totalSeats = 20; bookedSeats = 5;  availableSeats = 15; price = 7500; batchType = "Closing Season" },
    // Do Dham
    { trekSlug = "do-dham"; batchDate = "May 8, 2026";  totalSeats = 15; bookedSeats = 8;  availableSeats = 7;  price = 18999; batchType = "Regular" },
    { trekSlug = "do-dham"; batchDate = "May 22, 2026"; totalSeats = 15; bookedSeats = 11; availableSeats = 4;  price = 18999; batchType = "Regular" },
    { trekSlug = "do-dham"; batchDate = "Jun 5, 2026";  totalSeats = 15; bookedSeats = 6;  availableSeats = 9;  price = 18999; batchType = "Regular" },
    { trekSlug = "do-dham"; batchDate = "Sep 5, 2026";  totalSeats = 15; bookedSeats = 9;  availableSeats = 6;  price = 18999; batchType = "Autumn" },
    { trekSlug = "do-dham"; batchDate = "Sep 20, 2026"; totalSeats = 15; bookedSeats = 5;  availableSeats = 10; price = 18999; batchType = "Autumn" },
    { trekSlug = "do-dham"; batchDate = "Oct 5, 2026";  totalSeats = 15; bookedSeats = 3;  availableSeats = 12; price = 18999; batchType = "Closing" },
    // Char Dham
    { trekSlug = "char-dham"; batchDate = "May 10, 2026"; totalSeats = 15; bookedSeats = 10; availableSeats = 5;  price = 32999; batchType = "Opening Batch" },
    { trekSlug = "char-dham"; batchDate = "May 25, 2026"; totalSeats = 15; bookedSeats = 13; availableSeats = 2;  price = 32999; batchType = "Regular" },
    { trekSlug = "char-dham"; batchDate = "Jun 8, 2026";  totalSeats = 15; bookedSeats = 7;  availableSeats = 8;  price = 32999; batchType = "Regular" },
    { trekSlug = "char-dham"; batchDate = "Sep 8, 2026";  totalSeats = 15; bookedSeats = 9;  availableSeats = 6;  price = 32999; batchType = "Autumn" },
    { trekSlug = "char-dham"; batchDate = "Sep 22, 2026"; totalSeats = 15; bookedSeats = 6;  availableSeats = 9;  price = 32999; batchType = "Autumn" },
    { trekSlug = "char-dham"; batchDate = "Oct 8, 2026";  totalSeats = 15; bookedSeats = 4;  availableSeats = 11; price = 32999; batchType = "Closing" },
  ];

  // ── Stable state ───────────────────────────────────────────────────────

  let treks : List.List<Trek> = List.fromArray(trekSeed);
  let blogPosts : List.List<BlogPost> = List.fromArray(blogSeed);
  let batches : List.List<Batch> = List.fromArray(batchSeed);
  let gearItems : List.List<GearItem> = List.fromArray(gearSeed);
  let reviews : List.List<Review> = List.fromArray(reviewSeed);
  let packages : List.List<Package> = List.fromArray(packageSeed);
  // New booking system state (Map-backed for O(log n) lookups)
  let bookingsMap : Map.Map<Text, Booking> = Map.empty<Text, Booking>();
  let batchAvailabilityMap : Map.Map<Text, BatchAvailability> = Map.empty<Text, BatchAvailability>();
  // Legacy list state for backward compat
  let _bookings : List.List<Booking> = List.empty<Booking>();
  let inquiries : List.List<BookingInquiry> = List.empty<BookingInquiry>();
  let state = { var nextBookingSeq : Nat = 1 };

  // Populate batchAvailabilityMap from seed
  for (ba in batchAvailabilitySeed.vals()) {
    let key = ba.trekSlug # "_" # ba.batchDate;
    batchAvailabilityMap.add(key, ba);
  };

  // ── Query methods ──────────────────────────────────────────────────────

  public query func listTreks() : async [Trek] {
    treks.toArray();
  };

  public query func getTrek(id : Text) : async ?Trek {
    treks.find(func(t : Trek) : Bool { t.id == id });
  };

  public query func listBlogPosts() : async [BlogPost] {
    blogPosts.toArray();
  };

  public query func listBatches(trekId : Text) : async [Batch] {
    batches.filter(func(b : Batch) : Bool { b.trekId == trekId }).toArray();
  };

  public query func listGearItems() : async [GearItem] {
    gearItems.toArray();
  };

  public query func listReviews(trekId : Text) : async [Review] {
    reviews.filter(func(r : Review) : Bool { r.trekId == trekId }).toArray();
  };

  public query func listAllReviews() : async [Review] {
    reviews.toArray();
  };

  public query func getBooking(bookingId : Text) : async ?Booking {
    bookingsMap.get(bookingId);
  };

  public query func getUserBookings(contactEmail : Text) : async [Booking] {
    let result = List.empty<Booking>();
    for ((_, booking) in bookingsMap.entries()) {
      if (booking.contactEmail == contactEmail) {
        result.add(booking);
      };
    };
    result.toArray();
  };

  // Legacy: kept for backward compat
  public query func listUserBookings(userId : Text) : async [Booking] {
    let result = List.empty<Booking>();
    for ((_, booking) in bookingsMap.entries()) {
      if (booking.userId == userId) {
        result.add(booking);
      };
    };
    result.toArray();
  };

  public query func getBatchAvailability(trekSlug : Text) : async [BatchAvailability] {
    let result = List.empty<BatchAvailability>();
    for ((_, ba) in batchAvailabilityMap.entries()) {
      if (ba.trekSlug == trekSlug) {
        result.add(ba);
      };
    };
    result.toArray();
  };

  public query func getAvailableSeats(trekSlug : Text, batchDate : Text) : async Nat {
    let key = trekSlug # "_" # batchDate;
    switch (batchAvailabilityMap.get(key)) {
      case (?ba) ba.availableSeats;
      case null 0;
    };
  };

  public query func listYatras() : async [Yatra] {
    treks.filter(func(t : Trek) : Bool {
      t.id.contains(#text "yatra") or t.id.contains(#text "dham")
    }).map<Trek, Yatra>(func(t) {
      {
        id = t.id;
        name = t.name;
        region = t.region;
        duration = t.duration;
        difficulty = t.difficulty;
        bestTime = t.bestTime;
        startEnd = t.startPoint;
        price = t.price;
        description = t.description;
        imageQuery = t.imageQuery;
      };
    }).toArray();
  };

  public query func getYatra(yatraId : Text) : async ?Yatra {
    let found = treks.find(func(t : Trek) : Bool { t.id == yatraId });
    switch (found) {
      case null null;
      case (?t) ?{
        id = t.id;
        name = t.name;
        region = t.region;
        duration = t.duration;
        difficulty = t.difficulty;
        bestTime = t.bestTime;
        startEnd = t.startPoint;
        price = t.price;
        description = t.description;
        imageQuery = t.imageQuery;
      };
    };
  };

  public query func listPackages() : async [Package] {
    packages.toArray();
  };

  public query func getPackageById(packageId : Text) : async ?Package {
    packages.find(func(p : Package) : Bool { p.id == packageId });
  };

  public query func searchTreks(searchTerm : Text) : async [Trek] {
    let q = searchTerm.toLower();
    treks.filter(func(t : Trek) : Bool {
      t.name.toLower().contains(#text q) or
      t.region.toLower().contains(#text q) or
      t.description.toLower().contains(#text q)
    }).toArray();
  };

  // ── Update methods ─────────────────────────────────────────────────────

  public func createBooking(input : BookingInput) : async Text {
    let seq = state.nextBookingSeq;
    state.nextBookingSeq += 1;
    let seqStr = if (seq < 10) "0000" # seq.toText()
      else if (seq < 100) "000" # seq.toText()
      else if (seq < 1000) "00" # seq.toText()
      else if (seq < 10000) "0" # seq.toText()
      else seq.toText();
    let prefix = if (input.trekSlug == "kedarkantha") "KK"
      else if (input.trekSlug == "chopta-tungnath") "CT"
      else if (input.trekSlug == "har-ki-dun") "HD"
      else if (input.trekSlug == "hampta-pass") "HP"
      else if (input.trekSlug == "sar-pass") "SP"
      else if (input.trekSlug == "kuari-pass") "KP"
      else if (input.trekSlug == "phulara-ridge") "PR"
      else if (input.trekSlug == "kedarnath-yatra") "KY"
      else if (input.trekSlug == "do-dham") "DD"
      else if (input.trekSlug == "char-dham") "CD"
      else "GT";
    let bookingId = "GT-2026-" # prefix # "-" # seqStr;
    let contactEmail = if (input.participants.size() > 0) input.participants[0].email else "";
    let contactPhone = if (input.participants.size() > 0) input.participants[0].mobile else "";
    let booking : Booking = {
      id = bookingId;
      trekSlug = input.trekSlug;
      batchDate = input.batchDate;
      participants = input.participants;
      addOns = input.addOns;
      totalAmount = input.totalAmount;
      advanceAmount = input.advanceAmount;
      paidAmount = input.advanceAmount;
      paymentType = input.paymentType;
      promoCode = input.promoCode;
      status = #Confirmed;
      createdAt = Time.now();
      userId = "";
      contactEmail = contactEmail;
      contactPhone = contactPhone;
    };
    bookingsMap.add(bookingId, booking);
    // Update batch availability
    let key = input.trekSlug # "_" # input.batchDate;
    switch (batchAvailabilityMap.get(key)) {
      case (?ba) {
        let numParticipants = input.participants.size();
        let newBooked = ba.bookedSeats + numParticipants;
        let newAvail = if (newBooked >= ba.totalSeats) 0 else ba.totalSeats - newBooked;
        batchAvailabilityMap.add(key, { ba with bookedSeats = newBooked; availableSeats = newAvail });
      };
      case null {};
    };
    bookingId;
  };

  public func submitBookingInquiry(inquiry : BookingInquiry) : async Text {
    inquiries.add(inquiry);
    "Thank you, " # inquiry.name # "! Your inquiry for " # inquiry.trekInterest # " has been received. Our team will contact you within 2 hours (9 AM \u{2013} 9 PM IST) at " # inquiry.phone # ".";
  };

  public func createReview(review : Review) : async Text {
    let reviewId = "rev-" # review.trekId # "-" # (reviews.size() + 1).toText();
    let stored : Review = { review with id = reviewId };
    reviews.add(stored);
    reviewId;
  };

  public func cancelBooking(bookingId : Text, _reason : Text) : async Bool {
    switch (bookingsMap.get(bookingId)) {
      case null false;
      case (?booking) {
        bookingsMap.add(bookingId, { booking with status = #Cancelled });
        // Restore seats
        let key = booking.trekSlug # "_" # booking.batchDate;
        switch (batchAvailabilityMap.get(key)) {
          case (?ba) {
            let numParticipants = booking.participants.size();
            let newBooked = if (ba.bookedSeats >= numParticipants) ba.bookedSeats - numParticipants else 0;
            let newAvail = ba.totalSeats - newBooked;
            batchAvailabilityMap.add(key, { ba with bookedSeats = newBooked; availableSeats = newAvail });
          };
          case null {};
        };
        true;
      };
    };
  };

  public func updatePaymentStatus(bookingId : Text, paidAmount : Nat) : async Bool {
    switch (bookingsMap.get(bookingId)) {
      case null false;
      case (?booking) {
        let newStatus : BookingStatus = if (paidAmount >= booking.totalAmount) #Completed else #Confirmed;
        bookingsMap.add(bookingId, { booking with paidAmount = paidAmount; status = newStatus });
        true;
      };
    };
  };

  // Legacy batch availability update for old Batch type
  public func updateBatchAvailability(batchId : Text, seatsBooked : Nat) : async Bool {
    var updated = false;
    batches.mapInPlace(func(b : Batch) : Batch {
      if (b.id == batchId) {
        let newCount = b.bookedCount + seatsBooked;
        if (newCount <= b.maxCapacity) {
          updated := true;
          { b with bookedCount = newCount };
        } else { b };
      } else { b };
    });
    updated;
  };

};

