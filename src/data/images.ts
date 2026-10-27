import hero from "@/assets/hero.jpg";
import wildlife from "@/assets/wildlife.jpg";
import stay from "@/assets/stay.jpg";
import food from "@/assets/food.jpg";
import meditation from "@/assets/meditation.jpg";
import river from "@/assets/river.jpg";
import village from "@/assets/village.jpg";
import yoga from "@/assets/yoga.jpg";

// All images are AI-generated illustrations for this research prototype.
// Replace with licensed property photography before publication.
export const img = { hero, wildlife, stay, food, meditation, river, village, yoga };

export type GalleryCategory = "Yoga" | "Meditation" | "Wildlife" | "Nature" | "Accommodation" | "Food" | "Culture";

export const gallery: { src: string; alt: string; category: GalleryCategory }[] = [
  { src: yoga, alt: "Small group practising gentle yoga on grass at sunset", category: "Yoga" },
  { src: hero, alt: "Yogi in tree pose on a wooden deck at sunrise above misty grassland", category: "Yoga" },
  { src: meditation, alt: "Woman meditating in an open bamboo shelter surrounded by trees", category: "Meditation" },
  { src: wildlife, alt: "One-horned rhinoceros standing in tall grass beside a river", category: "Wildlife" },
  { src: river, alt: "Wooden dugout canoe on a misty river at sunrise", category: "Nature" },
  { src: stay, alt: "Simple homestay bedroom with wooden bed and open window", category: "Accommodation" },
  { src: food, alt: "Vegetarian dal bhat served on a brass plate", category: "Food" },
  { src: village, alt: "Painted Tharu village houses along a dirt lane beside rice fields", category: "Culture" },
];
