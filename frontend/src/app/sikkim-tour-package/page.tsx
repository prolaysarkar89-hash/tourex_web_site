import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sikkim Tour Package | Explore the Land of Peaks",
  description: "Discover the hidden gems of Sikkim with our curated tour packages. From Gangtok's monasteries to the high-altitude wonders of Tsomgo Lake.",
  keywords: ["Sikkim tour package", "Sikkim tourism", "Tsomgo Lake", "North Sikkim tour"],
};

export default function SikkimPage() {
  return (
    <PackagePage 
      title="Sikkim Tour Package"
      description="Adventure awaits in the land of prayer flags and rugged peaks. Experience the spiritual calm of ancient monasteries and the raw beauty of high-altitude glacial lakes."
      places={["Gangtok", "Tsomgo Lake", "Baba Mandir", "Nathula Pass", "Rumtek Monastery", "Tashi Viewpoint"]}
      itinerary={[
        { day: "Day 1: Arrival in Gangtok", description: "Arrive at NJP/Bagdogra and transfer to Gangtok. Enjoy the evening exploring MG Marg." },
        { day: "Day 2: Tsomgo Lake & Baba Mandir", description: "Visit the ethereal Tsomgo Lake and the historic Baba Harbhajan Singh Memorial." },
        { day: "Day 3: Gangtok Local Sightseeing", description: "Explore Rumtek Monastery, Do Drul Chorten Stupa, and the Directorate of Handicraft & Handloom." },
        { day: "Day 4: Departure", description: "Savor your last morning in the hills before heading back to Siliguri for departure." }
      ]}
      price="Starting from ₹16,000/person"
    />
  );
}
