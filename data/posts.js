// All blog posts live here. To add a post, copy one object and change the text.
// Each paragraph is one string inside the "body" list.
// These are sample articles written for a practice project.

export const categories = ["Beaches", "Hills", "Forests", "Tea Gardens"];

export const posts = [
  {
    slug: "coxs-bazar-beach-guide",
    title: "A Simple Guide to Cox's Bazar",
    category: "Beaches",
    date: "2026-03-12",
    readTime: 4,
    image: "post-coxs-bazar.jpg",
    excerpt: "Cox's Bazar has one of the longest natural sea beaches in the world. Here is how to plan an easy visit.",
    body: [
      "Cox's Bazar is in the south-east of Bangladesh, and its sea beach runs for more than 100 kilometres. It is one of the longest natural sea beaches in the world, so there is plenty of space to find a quiet spot.",
      "The main stretch near Laboni Point gets crowded in the afternoon, especially on weekends. If you want a calmer walk, go early in the morning when the sand is cool and the tide is still out.",
      "Winter, from November to February, is the most comfortable time to visit. The days are dry and the sea is calm. In the rainy season the waves are stronger, and flags on the beach tell you when swimming is not safe, so please follow them.",
      "Try the fresh seafood in the evening, but ask for the price before you order. Keep your phone and wallet in a small waterproof bag, and carry a hat and sunscreen even on cloudy days.",
    ],
  },
  {
    slug: "sajek-valley-above-the-clouds",
    title: "Sajek Valley: Above the Clouds",
    category: "Hills",
    date: "2026-03-28",
    readTime: 5,
    image: "post-sajek.jpg",
    excerpt: "Sajek Valley in Rangamati is known for cloud-covered hills at sunrise. A few tips before you pack your bag.",
    body: [
      "Sajek Valley is a hilly area in the Rangamati district. Early in the morning, clouds sit low between the hills, and many visitors wake up early just to see that view.",
      "The road up is steep, and many travellers hire a local jeep for the last part of the trip. Ask your hotel to help arrange it so you know the plan before you start.",
      "Mornings and evenings are cool even in warmer months, so bring a light jacket. Pack a power bank too, because electricity can be limited in the hills.",
      "Be kind to the people who live there. Ask before you take photos of someone's home or family, and take your rubbish back with you.",
    ],
  },
  {
    slug: "sundarbans-boat-journey",
    title: "A Boat Journey into the Sundarbans",
    category: "Forests",
    date: "2026-04-09",
    readTime: 6,
    image: "post-sundarbans.jpg",
    excerpt: "The Sundarbans is the world's largest mangrove forest. What to expect on a boat trip through its rivers.",
    body: [
      "The Sundarbans is a huge mangrove forest shared by Bangladesh and India, and it is home to the Bengal tiger. Most visitors explore it by boat, moving slowly through narrow rivers and channels.",
      "You will not see a tiger on most trips, and that is normal. What you will see are deer, birds, monkeys and the strange roots of the mangrove trees sticking out of the mud.",
      "Visits are usually arranged through a licensed tour operator, and a forest guide goes with every group. This is for your safety, so always stay with the guide on land.",
      "Bring insect repellent, a hat, plenty of drinking water and binoculars if you have them. The boat can be warm in the middle of the day, so loose cotton clothes are best.",
    ],
  },
  {
    slug: "srimangal-tea-garden-walk",
    title: "Walking Through the Tea Gardens of Srimangal",
    category: "Tea Gardens",
    date: "2026-04-22",
    readTime: 4,
    image: "post-srimangal.jpg",
    excerpt: "Srimangal is often called the tea capital of Bangladesh. A slow walk between the green rows is the best way to enjoy it.",
    body: [
      "Srimangal, in the Moulvibazar district, is often called the tea capital of Bangladesh. Rolling green tea gardens cover the land, and the air feels fresh even in the middle of the day.",
      "The best way to enjoy the gardens is to walk slowly. Many gardens welcome visitors, but it is polite to ask at the gate first, and to stay on the paths so the plants are not damaged.",
      "Do not leave without trying the famous seven-colour tea. It is served in layers and is a popular stop for visitors.",
      "The forests nearby are also a good place for a short nature walk, so you can easily spend a full weekend in the area.",
    ],
  },
  {
    slug: "bandarban-hill-trek-basics",
    title: "Bandarban Hill Trek: The Basics",
    category: "Hills",
    date: "2026-05-05",
    readTime: 5,
    image: "post-bandarban.jpg",
    excerpt: "Thinking about a hill trek in Bandarban? Start with these simple rules for staying safe and comfortable.",
    body: [
      "Bandarban is a hill district in the south-east, with tall peaks, rivers and small villages. It is popular with people who like trekking.",
      "If you are new to trekking, start with a short route and walk with a local guide. The paths can be unclear, and a guide knows the safe way and the weather signs.",
      "Wear shoes with a good grip, carry more water than you think you need, and start early so you finish before dark. Tell someone where you are going.",
      "Check whether a permit is needed for the area you want to visit, as rules for some places can change. Your tour operator or the local office can tell you.",
    ],
  },
  {
    slug: "saint-martin-island-weekend",
    title: "A Weekend on Saint Martin's Island",
    category: "Beaches",
    date: "2026-05-18",
    readTime: 4,
    image: "post-saint-martin.jpg",
    excerpt: "Saint Martin's is the only coral island in Bangladesh. A short list of things to know before the boat ride.",
    body: [
      "Saint Martin's Island is a small island in the Bay of Bengal and is known as the only coral island in Bangladesh. The water is clear and the beach is peaceful.",
      "Ships leave from the Teknaf area, and the season for travel is usually in the cooler months. Always check the latest ticket and weather information before you plan the trip.",
      "The island is small and fragile. Please do not take coral or shells, do not leave plastic behind, and keep noise low at night so the animals and the villagers can rest.",
      "Bring cash with you, as there are very few banks and machines, and keep your electronics dry on the boat.",
    ],
  },
];

// Small helper functions used by the pages
export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(dateText) {
  return new Date(dateText).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
