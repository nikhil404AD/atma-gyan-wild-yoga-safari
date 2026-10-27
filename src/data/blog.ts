import { img } from "./images";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  author: string;
  image: string;
  body: { h?: string; p?: string; list?: string[] }[];
}

const author = "Atma Gyan Editorial";

export const articles: Article[] = [
  {
    slug: "five-morning-yoga-poses", title: "Five Morning Yoga Poses to Energize Your Day", category: "Yoga", date: "2026-09-20", author, image: img.hero,
    excerpt: "A short sequence to wake the spine, open the hips and set a calm tone before breakfast.",
    body: [
      { p: "Mornings in the Terai start early and cool. A few minutes of movement before the day warms up can leave you steadier for everything that follows." },
      { h: "The sequence", list: ["Cat–cow, 8 slow rounds to mobilise the spine", "Downward-facing dog, 5 breaths", "Low lunge on each side, 5 breaths", "Tree pose, 5 breaths per leg", "Seated forward fold, 8 breaths"] },
      { p: "Move with the breath, stay well within comfort and skip anything that causes pain. If you are new to yoga, learn these with a teacher first." },
    ],
  },
  {
    slug: "yoga-and-wildlife-retreats-in-chitwan", title: "Yoga and Wildlife Retreats in Chitwan", category: "Travel", date: "2026-09-05", author, image: img.wildlife,
    excerpt: "Why combining quiet practice with time in the forest makes for a surprisingly balanced trip.",
    body: [
      { p: "Chitwan is best known for its national park, but the villages on its edge offer something slower: early yoga, long meals and evenings without much noise." },
      { h: "A balanced rhythm", p: "Practice in the cool hours, explore during the day with licensed guides, and return for rest. Wildlife is never guaranteed — the forest keeps its own schedule." },
    ],
  },
  {
    slug: "what-to-expect-from-a-nepali-homestay", title: "What to Expect from a Nepali Homestay", category: "Culture", date: "2026-08-22", author, image: img.stay,
    excerpt: "Simple rooms, shared meals and a household rhythm — here is how to settle in.",
    body: [
      { p: "A homestay is not a hotel. Expect simple, clean rooms, home-cooked food and hosts who share their daily life with you." },
      { h: "Good to know", list: ["Remove shoes before entering rooms", "Meals are often eaten together", "Ask before photographing people", "Bring patience and curiosity"] },
    ],
  },
  {
    slug: "meditation-and-mindful-travel", title: "The Relationship Between Meditation and Mindful Travel", category: "Meditation", date: "2026-08-08", author, image: img.meditation,
    excerpt: "Travel can be a practice too — noticing more, rushing less.",
    body: [
      { p: "Meditation trains attention. Applied to travel, it turns a checklist into an experience: the sound of a river, the taste of a meal, a conversation with a host." },
      { h: "Try this", p: "Before each new activity, take three slow breaths and name one thing you can hear, see and feel." },
    ],
  },
  {
    slug: "a-guide-to-visiting-meghauli", title: "A Guide to Visiting Meghauli", category: "Travel", date: "2026-07-25", author, image: img.village,
    excerpt: "A quieter corner of Chitwan on the western edge of the park.",
    body: [
      { p: "Meghauli lies in western Chitwan, away from the busier Sauraha area. It is a farming community surrounded by fields, community forests and river plains." },
      { h: "Getting there", p: "Most visitors arrive by road from Bharatpur. Ask your host for current directions and transport options, as transport is usually not included in packages." },
    ],
  },
  {
    slug: "how-to-prepare-for-a-jungle-safari", title: "How to Prepare for a Jungle Safari", category: "Wildlife", date: "2026-07-10", author, image: img.river,
    excerpt: "Clothing, timing and expectations for your first safari in the Terai.",
    body: [
      { list: ["Wear muted colours — greens, browns, khaki", "Carry water, a hat and sunscreen", "Keep voices low", "Follow your guide's instructions at all times", "Remember that sightings are never guaranteed"] },
    ],
  },
  {
    slug: "understanding-hatha-yoga", title: "Understanding Hatha Yoga", category: "Yoga", date: "2026-06-28", author, image: img.yoga,
    excerpt: "The steady, breath-led style at the heart of many traditional classes.",
    body: [
      { p: "Hatha yoga is a broad term for physical yoga practice that pairs postures (asana) with breath control (pranayama). Classes tend to be slower, holding each pose for several breaths." },
      { p: "It suits beginners and experienced practitioners alike, because the depth of each posture can be adjusted." },
    ],
  },
  {
    slug: "local-food-and-culture-in-chitwan", title: "Exploring Local Food and Culture in Chitwan", category: "Culture", date: "2026-06-12", author, image: img.food,
    excerpt: "From dal bhat to Tharu traditions — the everyday culture of the Terai.",
    body: [
      { p: "Dal bhat — lentils, rice, vegetable curry and pickle — is the backbone of Nepali home cooking. Hosts often serve seconds before you ask." },
      { p: "Chitwan is also home to the Tharu people, whose painted houses, dance and agricultural traditions shape the region." },
    ],
  },
  {
    slug: "packing-guide-yoga-retreat-nepal", title: "A Practical Packing Guide for a Yoga Retreat in Nepal", category: "Travel", date: "2026-05-30", author, image: img.meditation,
    excerpt: "What to bring for practice, the forest and village life.",
    body: [
      { list: ["Comfortable, modest yoga clothing", "A light layer for cool mornings", "Insect repellent", "Reusable water bottle", "Sandals and closed walking shoes", "Headlamp", "Any personal medication"] },
    ],
  },
  {
    slug: "responsible-wildlife-tourism", title: "Responsible Wildlife Tourism", category: "Wildlife", date: "2026-05-15", author, image: img.wildlife,
    excerpt: "How to enjoy wildlife while respecting animals, habitats and local communities.",
    body: [
      { list: ["Use licensed guides and official park entries", "Keep a safe distance and never feed animals", "Avoid activities that exploit animals", "Stay on designated trails", "Support community-run initiatives"] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
