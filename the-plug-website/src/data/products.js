const products = [
  {
    id: 1,
    name: "Hubbly Flavours",
    price: "R35.00",
    description: "Assorted flavours including Golden Barzz, Amaren, Nareen, Nakhla, and Richman for your hubbly sessions.",
    mainImage: "/sales/flavours/download.jpeg",
    images: ["/sales/flavours/golden1.png", "/sales/flavours/amaren.jpg", "/sales/flavours/nareen.webp", "/sales/flavours/nakhla.webp", "/sales/flavours/richman.jpeg"]
  },
  {
    id: 2,
    name: "Egyptian Small hookah Pipe",
    price: "R300.00",
    description: "Compact Egyptian hookah pipe for personal sessions.",
    mainImage: "/sales/small.jpg",
    images: ["/sales/small.jpg","/sales/small2.webp"]
  },
  {
    id: 3,
    name: "Egyptian Medium hookah Pipe",
    price: "R350.00",
    description: "Medium-sized Egyptian hookah pipe built for smooth draws.",
    mainImage: "/sales/medium.png",
    images: ["/sales/medium1.png", "/sales/medium2.png","/sales/midium3.png"]
  },
  {
    id: 4,
    name: "Egyptian Big hookah Pipe",
    price: "R450.00",
    description: "Large Egyptian hookah pipe ideal for group sessions.",
    mainImage: "/sales/Big.png",
    images: ["/sales/Big.webp", "/sales/big2.webp"]
  },
  {
    id: 5,
    name: "Other Hookah Pipe Medium",
    price: "R250.00",
    description: "Affordable medium-size hookah pipe with a traditional build.",
    mainImage: "/sales/other.webp",
    images: ["/sales/other2.webp"]
  },
  {
    id: 6,
    name: "English Walker hookah Pipe",
    price: "R900.00",
    description: "Premium English hookah pipe offering high durability and performance.",
    mainImage: "/sales/english1.webp",
    images: ["/sales/english.webp","/sales/english2.webp","/sales/english3.webp"]
  },
  {
    id: 7,
    name: "Nasty Vape 9K",
    price: "R250.00",
    description: "Nasty 9K disposable vape with rich flavour and smooth hits.",
    mainImage: "/sales/nasty-bar/nasty1.jpg",
    images: ["/sales/nasty-bar/nasty2.jpeg", "/sales/nasty-bar/9k_side.jpeg"]
  },
  {
    id: 8,
    name: "Nasty Vape 14K",
    price: "R300.00",
    description: "Nasty 14K disposable vape with extended puffs and bold taste.",
    mainImage: "/sales/nasty-bar2/nasty14k_side.jpeg",
    images: ["/sales/nasty-bar2/14k_side.jpeg", "/sales/nasty-bar2/nasty14_side2.jpeg"]
  },
  {
    id: 9,
    name: "Nasty Vape 14K X",
    price: "R350.00",
    description: "Nasty 14K X disposable vape with extended puffs and bold taste.",
    mainImage: "/sales/nasty-bar2/nastybar.webp",
    images: ["/sales/nasty-bar2/14X_side.jpeg", "/sales/nasty-bar2/14X_side2.jpeg", "/sales/nasty-bar2/14X_side3.jpeg"]
  },
  {
    id: 10,
    name: "Bugatti Vape 9K",
    price: "R250.00",
    description: "Luxurious Bugatti 9K vape designed for quality and style.",
    mainImage: "/sales/bugmain.webp",
    images: ["/sales/Bugatti9k.webp", "/sales/bugatti/bugg.webp"]
  },
  {
    id: 11,
    name: "Velocity Vape 25K",
    price: "R350.00",
    description: "Long-lasting Velocity 25K disposable vape with premium feel.",
    mainImage: "/sales/velocity2.jpg",
    images: ["/sales/velocity.jpeg", "sales/volocity.jpeg", "sales/velocity.webp"]
  },
  {
    id: 12,
    name: "Grystal Vape 600K",
    price: "R60.00",
    description: "Budget-friendly Grystal 600K vape for quick sessions.",
    mainImage: "/sales/grystal.jpeg",
    images: ["/sales/crystal.jpeg", "/sales/crystal2.jpeg"]
  },
  {
    id: 13,
    name: "Beast Vape 7K",
    price: "R140.00",
    description: "Beast 7K vape delivers powerful flavour in a compact body.",
    mainImage: "/sales/vapepen/FlavourBeast.webp",
    images: ["/sales/vapepen/flvbeast.jpeg", "sales/beast.webp"]
  },
  {
    id: 14,
    name: "InnorBar Vape 20K",
    price: "R250.00",
    description: "InnorBar Vape 20K delivers powerful flavour in a compact body.",
    mainImage: "/sales/innobar.jpeg",
    images: ["/sales/inno.jpeg", "/sales/innobar.jpeg"]
  },
  {
    id: 15,
    name: "I-Joy Vape 10K",
    price: "R150.00",
    description: "I-Joy Vape 10K delivers powerful flavour in a compact body.",
    mainImage: "/sales/ijoy/ijoy_bar.png",
    images: ["/sales/ijoy/iJoy_Bar.webp", "/sales/ijoym.jpeg"]
  },
  {
    id: 16,
    name: "Vuse riffils",
    price: "R150.00",
    description: "Vuse riffils delivers powerful flavour in a compact body.",
    mainImage: "/sales/vusem.png",
    images: ["/sales/vuse.png", "/sales/vuse1.jpg", "/sales/v].jpg", "/sales/v.jpeg", "/sales/vuse4.jpeg"]
  },
  {
    id: 17,
    name: "Nesh Coil 1.5K",
    price: "R100.00",
    description: "Nesh Coil 1.5K",
    mainImage: "/sales/coil_side.png",
    images: ["/sales/cm.png", "/sales/c.jpeg"]
  },
  {
    id: 18,
    name: "Pre-Rolled Joint – Indoor",
    price: "R60.00",
    description: "Premium indoor cannabis pre-roll for a clean high.",
    mainImage: "/sales/prerolled/indoor2.jpg",
    images: ["/sales/prerolled/indoor.jpg", "/sales/prerolled/indoor_side.jpg"]
  },
  {
    id: 19,
    name: "Pre-Rolled Joint – Greenhouse",
    price: "R40.00",
    description: "Greenhouse-grown pre-rolled joint for a mellow vibe.",
    mainImage: "/sales/prerolled/cannproduct1.jpg",
    images: ["/sales/prerolled/greenhouse.jpg", "/sales/prerolled/bud.jpg"]
  },
  {
    id: 20,
    name: "Red Straps Edibles",
    price: "R50.00",
    description: "Sweet and chewy cannabis-infused red straps.",
    mainImage: "/sales/edibles/redstraps.WebP",
    images: ["/sales/edibles/redstraps1.webp"]
  },
  {
    id: 21,
    name: "Cannabis Jelly Edibles",
    price: "R40.00",
    description: "Flavorful cannabis jelly treats for a mellow high.",
    mainImage: "/sales/edibles/jelly1.webp",
    images: ["/sales/edibles/jelly.webp"]
  },
  {
    id: 22,
    name: "Lighter",
    price: "R10.00",
    description: "Reliable lighter for all your smoking needs.",
    mainImage: "/sales/sun/sun.jpg",
    images: ["/sales/lighter/lighter.webp"]
  },
  {
    id: 23,
    name: "Cigarette Roller",
    price: "R60.00",
    description: "Durable cigarette roller for consistent, smooth rolls.",
    mainImage: "/sales/zig-zag/zig-zag.avif",
    images: ["/sales/roller1.jpg", "/sales/roller2.webp"]
  },
  {
    id: 24,
    name: "Dot Riffils",
    price: "R10.00",
    description: "Handy dot riffils for quick, on-the-go use.",
    mainImage: "/sales/dot.jpg",
    images: ["/sales/dot2.jpg", "/sales/dot3.jpg"]
  },
  {
    id: 25,
    name: "Pre-Rolled Joint Holder",
    price: "R15.00",
    description: "Branded pre-rolled holder to keep your joints fresh and safe.",
    mainImage: "/sales/holder.jpg",
    images: ["/sales/holder.jpg"]
  },
  {
    id: 26,
    name: "Hooker Head",
    price: "R60.00",
    description: "Replacement hooker heads compatible with most pipes.",
    mainImage: "/sales/head1.jpg",
    images: ["/sales/head.jpg"]
  },
  {
    id: 27,
    name: "Hookah Tray",
    price: "From R30.00",
    description: "Stylish and functional trays for hookah and accessories.",
    mainImage: "/sales/tray3.avif",
    images: ["/sales/tray2.jpeg", "/sales/tray1.jpeg"]
  },
  {
    id: 28,
    name: "Charcoal Block",
    price: "R2.00",
    description: "Blue Mix (Square) charcoal block ideal for hookahs.",
    mainImage: "/sales/squalcoal1.jpeg",
    images: ["/sales/squalcoal.jpeg"]
  },
  {
    id: 29,
    name: "Charcoal (Blue)",
    price: "R10.00",
    description: "High-quality blue charcoal for smoking sessions.",
    mainImage: "/sales/coal1.jpeg",
    images: ["/sales/coal.jpeg"]
  },
  {
    id: 30,
    name: "Rollers",
    price: "From R30.00",
    description: "Efficient roller for fast, consistent joints every time.",
    mainImage: "/sales/roller1.jpg",
    images: ["/sales/roller1.jpg", "/sales/roller2.webp"]
  },
  {
    id: 31,
    name: "Grinder",
    price: "From R30.00",
    description: "Sharp, portable cannabis grinder for your sessions.",
    mainImage: "/sales/grinder1.webp",
    images: ["/sales/grinders.webp", "/sales/grinder2.webp", "/sales/grinder3.webp"]
  },
  {
    id: 32,
    name: "Pitbull Cannabis (Per Gram)",
    price: "R80.00",
    description: "Premium Pitbull cannabis strain known for its potency and smoothness.",
    mainImage: "/sales/cannabis/Pitbull.jpg",
    images: ["/sales/cannabis/pit.jpg"]
  },
  {
    id: 33,
    name: "Heli Jelly Cannabis (Per Gram)",
    price: "R60.00",
    description: "Heli Jelly strain offering a relaxing and euphoric experience.",
    mainImage: "/sales/cannabis/indoor.jpg",
    images: ["/sales/cannabis/indoor_side.jpg"]
  },
  {
    id: 34,
    name: "Dutch Magic Cannabis (Per Gram)",
    price: "R60.00",
    description: "Dutch Magic is a classic strain with a balanced hybrid effect.",
    mainImage: "/sales/cannabis/dutchmagic.jpg",
    images: ["/sales/cannabis/weed.jpg"]
  },
  {
    id: 35,
    name: "Money Grapes Cannabis (Per Gram)",
    price: "R60.00",
    description: "Money Grapes has a sweet grape aroma and uplifting high.",
    mainImage: "/sales/cannabis/moneygrapes.jpg",
    images: ["/sales/cannabis/moneygrapes_side.jpg", "/sales/cannabis/buds.jpg"]
  },
  {
    id: 36,
    name: "Pop Tarts Cannabis (Per Gram)",
    price: "R60.00",
    description: "Pop Tarts strain with dessert-like flavor and mellow effects.",
    mainImage: "/sales/cannabis/poptarts.jpg",
    images: ["/sales/cannabis/weed1.jpg"]
  },
  {
    id: 37,
    name: "Purple Grape Cannabis (Per Gram)",
    price: "R60.00",
    description: "Fruity and fragrant Purple Grape strain great for relaxation.",
    mainImage: "/sales/cannabis/purple.jpg",
    images: ["/sales/cannabis/closeup.jpg"]
  },
  {
    id: 38,
    name: "Loud Cake Cannabis (Per Gram)",
    price: "R60.00",
    description: "Potent Loud Cake strain, perfect for experienced users.",
    mainImage: "/sales/cannabis/buds-dark.jpg",
    images: ["/sales/cannabis/loud.jpg"]
  },
  {
    id: 39,
    name: "Dead Jack Cannabis (Per Gram)",
    price: "R100.00",
    description: "Heavy-hitting Dead Jack strain for deep body relaxation.",
    mainImage: "/sales/cannabis/deadjack.jpg",
    images: ["/sales/cannabis/deadjack2.jpg", "/sales/cannabis/jack.jpg"]
  },
  {
    id: 40,
    name: "Rancouche Cannabis (Per Gram)",
    price: "R60.00",
    description: "Smooth and euphoric Rancouche strain grown with care.",
    mainImage: "/sales/cannabis/rancouche.jpg",
    images: ["/sales/cannabis/rancouche1.jpg"]
  },
  {
    id: 41,
    name: "Lava Cake Cannabis (Per Gram)",
    price: "R80.00",
    description: "Sweet and relaxing Lava Cake strain for unwinding.",
    mainImage: "/sales/cannabis/lavacake.jpg",
    images: ["/sales/cannabis/lavacake1.jpg"]
  }
];

export default products;
