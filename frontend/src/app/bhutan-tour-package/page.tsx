import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhutan Tour Package | The Land of Happiness",
  description: "Explore the mystical Kingdom of Bhutan with Tourex. From the iconic Tiger's Nest to the peaceful valleys of Paro and Thimphu.",
  keywords: ["Bhutan tour package", "Bhutan tourism", "Tiger's Nest Bhutan", "Paro Thimphu tour"],
};

export default function BhutanPage() {
  return (
    <PackagePage 
      title="Bhutan Tour Package"
      description="Enter a world where time stands still and happiness is a way of life. Discover the ancient fortresses, vibrant festivals, and breathtaking landscapes of the Last Shangri-La."
      places={["Paro", "Thimphu", "Punakha", "Tiger's Nest Monastery", "Dochula Pass", "Buddha Dordenma"]}
      itinerary={[
        { day: "Day 1: Arrival in Paro & Thimphu", description: "Fly into Paro and drive to Thimphu, the capital city. Evening visit to Tashichho Dzong." },
        { day: "Day 2: Thimphu Sightseeing", description: "Explore the National Memorial Chorten, Buddha Point, and the Motithang Takin Preserve." },
        { day: "Day 3: Paro & Tiger's Nest", description: "Return to Paro. Hike up to the legendary Taktsang (Tiger's Nest) Monastery perched on a cliff." },
        { day: "Day 4: Departure", description: "Final breakfast in the dragon kingdom before your transfer to Paro International Airport." }
      ]}
      price="Starting from ₹25,000/person"
    />
  );
}
