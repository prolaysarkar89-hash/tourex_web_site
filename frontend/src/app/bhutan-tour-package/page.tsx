import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Bhutan Tour Package from India | Tiger's Nest & Paro Itinerary",
  description: "Book our curated Bhutan tour package from India. Experience the Tiger's Nest trek, Thimphu's culture, and Punakha's beauty. All-inclusive customized packages starting at ₹25,000.",
  keywords: ["Bhutan tour package from India", "Bhutan tourism guide", "Tiger's Nest Bhutan hike", "Paro Thimphu Punakha itinerary", "Tourex Bhutan"],
  alternates: {
    canonical: "/bhutan-tour-package",
  },
  openGraph: {
    title: "All-Inclusive Bhutan Tour Packages | Tourex Travel",
    description: "Explore the Land of Happiness with our expert-led Bhutan tours. Customized itineraries for families and couples.",
    url: "https://www.tourextravel.com/bhutan-tour-package",
    images: [{ url: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=80" }]
  }
};

export default function BhutanPage() {
  return (
    <PackagePage 
      title="Bhutan Tour Package: The Last Shangri-La"
      description="Enter a world where time stands still and happiness is the ultimate currency. Our Bhutan tour takes you beyond the ordinary, from the gravity-defying Taktsang Monastery to the serene valleys of Phobjikha. Experience authentic Bhutanese culture, stay in boutique dzong-style hotels, and travel with local experts who share the soul of the Dragon Kingdom."
      image="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=80"
      places={["Paro Valley", "Thimphu Capital", "Punakha Dzong", "Tiger's Nest Monastery (Taktsang)", "Dochula Pass", "Buddha Dordenma Statue", "Phobjikha Valley"]}
      itinerary={[
        { 
          day: "Day 1: Arrival in Paro & Drive to Thimphu", 
          description: "Arrive at Paro International Airport—one of the world's most scenic landings. Meet our representative and drive 1.5 hours to Thimphu, the unique capital city with no traffic lights. Visit the Memorial Chorten and the massive Buddha Dordenma statue for a panoramic view of the valley." 
        },
        { 
          day: "Day 2: Thimphu Sightseeing & Transfer to Punakha", 
          description: "Explore the Folk Heritage Museum and the National Library. Later, drive to Punakha via the majestic Dochula Pass (3,100m), offering stunning views of the Himalayan peaks. Visit the 'Palace of Great Happiness'—Punakha Dzong, located at the confluence of the Pho Chhu and Mo Chhu rivers." 
        },
        { 
          day: "Day 3: Return to Paro & The Legendary Tiger's Nest Hike", 
          description: "Drive back to Paro and prepare for the highlight of your trip: a hike to Taktsang Monastery (Tiger's Nest). Perched 900m above the valley floor, this sacred site offers a spiritual experience like no other. Spend the evening exploring Paro town and its local handicraft markets." 
        },
        { 
          day: "Day 4: Departure with Memories", 
          description: "After an early breakfast, we transfer you to Paro International Airport for your flight back home. Carry the peace and happiness of Bhutan with you forever." 
        }
      ]}
      price="Starting from ₹25,000/person"
    />
  );
}
