import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Bengal Tour Package 2026 | Best Travel Agency in Siliguri",
  description: "All-inclusive North Bengal tour packages starting from Siliguri. Explore Darjeeling, Kalimpong, Dooars, and offbeat North Bengal with Tourex. 100% customized itineraries.",
  keywords: [
    "North Bengal tour package", 
    "best travel agency in Siliguri", 
    "North Bengal tourism guide", 
    "offbeat North Bengal tour", 
    "Darjeeling Kalimpong package", 
    "North Bengal tour from NJP",
    "Tourex Siliguri"
  ],
  alternates: {
    canonical: "/north-bengal-tour-package",
  },
  openGraph: {
    title: "Complete North Bengal Travel Guide & Packages | Tourex",
    description: "The ultimate Himalayan escape. From tea gardens to jungle safaris, discover North Bengal with local experts.",
    url: "https://www.tourextravel.com/north-bengal-tour-package",
    images: [{ url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80" }]
  }
};

export default function NorthBengalPage() {
  return (
    <PackagePage 
      title="North Bengal Tour Package: The Ultimate Himalayan Guide"
      description="Tourex is a leading travel agency based in Siliguri specializing in customized North Bengal tour packages. Our 2026 itineraries offer all-inclusive trips to Darjeeling, Kalimpong, and offbeat North Bengal with private transport, local expert guides, and handpicked boutique accommodations."
      image="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80"
      places={["Darjeeling Mall", "Tiger Hill", "Kalimpong Delo", "Sittong Orange Orchards", "Lataguri Forest", "Mirik Lake", "Kurseong Tea Estates", "Yelbong Canyon"]}
      itinerary={[
        { 
          day: "Day 1: Arrival at NJP/Bagdogra & Drive to Darjeeling", 
          description: "Our local driver will meet you at NJP Station or Bagdogra Airport. Enjoy a scenic 3.5-hour drive through lush tea gardens to the 'Queen of Hills'—Darjeeling. Check into your boutique mountain hotel and spend the evening at the iconic Chowrasta Mall." 
        },
        { 
          day: "Day 2: The Tiger Hill Sunrise & Darjeeling Sightseeing", 
          description: "Wake up at 4:00 AM for the legendary sunrise over Mt. Kanchenjunga at Tiger Hill. Visit the Batasia Loop and Ghoom Monastery. After breakfast, explore the Himalayan Mountaineering Institute (HMI), P.N. Zoological Park, and a working Darjeeling Tea Estate." 
        },
        { 
          day: "Day 3: Kalimpong: The Land of Orchids", 
          description: "Transfer to Kalimpong. Visit the serene Durpin Monastery for panoramic views of the Teesta River. Explore the Cactus Nursery and Pine View Nursery. Experience the unique blend of Lepcha, Bhutia, and Nepali cultures in this peaceful hill station." 
        },
        { 
          day: "Day 4: Offbeat North Bengal: Sittong or Kurseong", 
          description: "Escape the crowds and head to Sittong—the orange village of North Bengal. Walk through fruit orchards and stay in a cozy local homestay. Alternatively, visit Kurseong, the 'Land of White Orchids', for a cinematic stroll through the Makaibari or Castleton tea gardens." 
        },
        { 
          day: "Day 5: Departure via Mirik Lake", 
          description: "Drive back to Siliguri via Mirik. Enjoy a peaceful boat ride on Sumendu Lake and some last-minute shopping at the Pashupati Market border. We drop you at NJP/Bagdogra with memories of a lifetime." 
        }
      ]}
      price="Starting from ₹15,000/person"
    />
  );
}
