import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gangtok Tour Package | City of Monasteries",
  description: "Experience the vibrant culture and stunning views of Gangtok. Book our customized Gangtok tour packages for the best local experiences.",
  keywords: ["Gangtok tour package", "Gangtok sightseeing", "MG Marg Gangtok", "Gangtok monasteries"],
};

export default function GangtokPage() {
  return (
    <PackagePage 
      title="Gangtok Tour Package"
      description="Discover the heart of Sikkim in the charming city of Gangtok. From the bustling MG Marg to the serene Enchey Monastery, experience a city that sits beautifully between tradition and modernity."
      places={["MG Marg", "Rumtek Monastery", "Banjhakri Falls", "Tashi Viewpoint", "Enchey Monastery", "Flower Exhibition Centre"]}
      itinerary={[
        { day: "Day 1: Arrival in Gangtok", description: "Transfer from NJP/Bagdogra to Gangtok. Check-in and enjoy an evening stroll at MG Marg." },
        { day: "Day 2: Full Day City Tour", description: "Visit Rumtek Monastery, Do Drul Chorten, and the Institute of Tibetology." },
        { day: "Day 3: Tsomgo Lake Excursion", description: "A day trip to the high-altitude Tsomgo Lake and the holy Baba Mandir." },
        { day: "Day 4: Departure", description: "Last minute souvenir shopping before your return transfer to Siliguri." }
      ]}
      price="Starting from ₹11,000/person"
    />
  );
}
