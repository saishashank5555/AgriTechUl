import image1 from "../assets/banners/b1.jpg";
import image2 from "../assets/banners/b2.jpeg";
import image3 from "../assets/banners/b3.jpg";

const bannerData = [
  {
    id: 1,
    image: image1,
    title: "Quality Vegetable Seeds",
    subtitle: "Premium seeds for high yield and fast germination.",
    backgroundColor: "#e6f7e6",
    actionType: "category",
    to: "/category/vegetable-seeds",
  },
  {
    id: 2,
    image: image2,
    title: "Organic Fertilizers",
    subtitle: "Boost soil health with natural organic nutrients.",
    backgroundColor: "#fff4e6",
    actionType: "category",
    to: "/category/fertilizers",
  },
  {
    id: 3,
    image: image3,
    title: "Farm Machinery & Equipment",
    subtitle: "Modern tools designed for smart farming.",
    backgroundColor: "#e6f3ff",
    actionType: "category",
    to: "/category/farm-machinery",
  },
];

export default bannerData;
