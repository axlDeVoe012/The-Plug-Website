const products = [
  {
    id: 1,
    name: "Amaren Premium Hubbly",
    price: "R1000.00",
    description: "High-quality Amaren Premium Hubbly designed for a smooth and enjoyable smoking experience.",
    mainImage: "/sales/hubbly/main.jpg",
    images: [
      "/sales/hubbly/side1.jpg",
      "/sales/hubbly/side3.jpg",
      "/sales/hubbly/main.jpg"
    ]
  },
  {
    id: 2,
    name: "Premium Hubbly #2",
    price: "R120",
    description: "Affordable and reliable Premium Hubbly with excellent durability and style.",
    mainImage: "/sales/hubbly/main2.jpg",
    images: [
      "/images/products/premium-hubbly-2/main.jpg",
      "/images/products/premium-hubbly-2/side.jpg"
    ]
  },
  {
    id: 3,
    name: "Hubbly Flavours",
    price: "R50",
    description: "Various delicious Hubbly flavours to enhance your smoking pleasure.",
    mainImage: "/sales/flavours/download.jpeg",
    images: ["/images/products/hubbly-flavours/blue.jpg"]
  },
  {
    id: 4,
    name: "Vape Pen",
    price: "R250",
    description: "Compact and easy-to-use vape pen with great flavour options.",
    mainImage: "/sales/vapepen/FlavourBeast.webp",
    images: ["/images/products/vape-pen/main.jpg"]
  },
  {
    id: 5,
    name: "Nasty Vape Bar",
    price: "R150",
    description: "Powerful and stylish Nasty Vape Bar for a satisfying vape experience.",
    mainImage: "/sales/nasty-bar/nasty1.jpg",
    images: ["/images/products/vape-bar-1/main.jpg"]
  },
  {
    id: 6,
    name: "Nasty Vape Bar",
    price: "R150",
    description: "Second variant of the Nasty Vape Bar with unique flavour profiles.",
    mainImage: "/sales/nasty-bar2/nastybar.webp",
    images: ["/images/products/vape-bar-2/main.jpg"]
  },
  {
    id: 7,
    name: "Bugatti Vape",
    price: "R150",
    description: "Luxury Bugatti Vape offering smooth and consistent vapor.",
    mainImage: "/sales/bugatti/bugatti.avif",
    images: ["/sales/bugatti/bugg.webp"]
  },
  {
    id: 8,
    name: "iJoy Vape",
    price: "R150",
    description: "Reliable iJoy Vape with long-lasting battery and rich flavours.",
    mainImage: "/sales/ijoy/ijoy_bar.png",
    images: ["/images/products/vape-bar-4/main.jpg"]
  },
  {
    id: 9,
    name: "Pre-rolled Joints",
    price: "R80",
    description: "Convenient pre-rolled joints made from premium cannabis.",
    mainImage: "/sales/prerolled/cannproduct1.jpg",
    images: ["/images/products/pre-rolled-joints/main.jpg"]
  },
  {
    id: 10,
    name: "Edibles (Coming Soon)",
    price: "Coming Soon",
    description: "Delicious cannabis-infused edibles to be available shortly.",
    mainImage: "/sales/edibles/cannprod2.png",
    images: ["/images/products/edibles-coming-soon/main.jpg"]
  },
  {
    id: 11,
    name: "Cannabis Gummies (Coming Soon)",
    price: "Coming Soon",
    description: "Tasty cannabis gummies arriving soon for a discreet experience.",
    mainImage: "/sales/edibles/cannprod3.png",
    images: ["/images/products/cannabis-gummies-coming-soon/main.jpg"]
  },
  {
    id: 12,
    name: "Cannabis Snacks (Coming Soon)",
    price: "Coming Soon",
    description: "Snackable cannabis treats launching soon for convenient use.",
    mainImage: "/sales/edibles/cannprod3.png",
    images: ["/images/products/cannabis-snacks-coming-soon/main.jpg"]
  },
  {
    id: 13,
    name: "Vape Juice",
    price: "R100",
    description: "Flavourful vape juice compatible with most vape pens.",
    mainImage: "/sales/edible/juice.webp",
    images: ["/images/products/vape-juice/main.jpg"]
  },
  {
    id: 14,
    name: "Leaf Buds",
    price: "R90",
    description: "Top-quality cannabis leaf buds for smoking or extraction.",
    mainImage: "/sales/edible/leaf.jpg",
    images: ["/images/products/leaf-buds/main.jpg"]
  },
  {
    id: 15,
    name: "Zig-Zag Rollers",
    price: "R40",
    description: "Durable and easy-to-use Zig-Zag rollers for quick joint rolling.",
    mainImage: "/sales/zig-zag/zig-zag2.jpeg",
    images: ["/images/products/zig-zag-rollers/main.jpg"]
  },
  {
    id: 16,
    name: "Plastic Joint Holder",
    price: "R35",
    description: "Portable plastic joint holder to keep your joints fresh and safe.",
    mainImage: "/sales/holder/holder.jpg",
    images: ["/images/products/plastic-joint-holder/main.jpg"]
  },
  {
    id: 17,
    name: "Lighter #1",
    price: "R20",
    description: "Reliable lighter for your smoking needs.",
    mainImage: "/sales/sun/sun.jpg",
    images: ["/images/products/lighter-1/main.jpg"]
  },
  {
    id: 18,
    name: "Lighter #2",
    price: "R20",
    description: "Compact and easy-to-carry lighter variant.",
    mainImage: "/sales/lighter/lighter.webp",
    images: ["/images/products/lighter-2/main.jpg"]
  },
  {
    id: 19,
    name: "Zyn",
    price: "R75",
    description: "Popular nicotine pouch alternative for discreet use.",
    mainImage: "/sales/zyn/zyni.jpg",
    images: ["/images/products/zyn/main.jpg"]
  }
];

export default products;
