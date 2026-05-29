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
      title="Sikkim Tour Package 2026: The Land of Monasteries"
      description="Tourex provides premium, all-inclusive Sikkim tour packages covering Gangtok, North Sikkim (Lachen & Lachung), and Pelling. Our 2026 itineraries feature private luxury transport, local expert guides, and confirmed permits for Tsomgo Lake and Gurudongmar Lake."
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
      places={["Gangtok", "Tsomgo Lake", "Baba Mandir", "Nathula Pass", "Lachen", "Lachung", "Yumthang Valley", "Gurudongmar Lake"]}
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
