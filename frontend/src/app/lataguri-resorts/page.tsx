import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Lataguri Resorts | Forest Stay Experience",
  description: "Book the finest resorts in Lataguri with Tourex. Enjoy comfortable stays amidst the greenery of Gorumara National Park and authentic forest vibes.",
  keywords: ["Lataguri resorts", "resorts near Gorumara", "forest resort Lataguri", "Dooars accommodation"],
};

export default function LataguriResortsPage() {
  return (
    <PackagePage 
      title="Lataguri Resorts & Stays"
      description="Wake up to the sounds of the wild in our handpicked Lataguri resorts. Nestled on the edge of Gorumara National Park, these retreats offer the perfect blend of luxury and nature."
      places={["Gorumara National Park", "Murti River", "Chapramari Wildlife Sanctuary", "Lataguri Nature Interpretation Center"]}
      itinerary={[
        { day: "Day 1: Arrival & Resort Check-in", description: "Arrive at NJP/Bagdogra. Transfer to your forest resort in Lataguri. Evening at leisure." },
        { day: "Day 2: Gorumara Jungle Safari", description: "Early morning or afternoon jungle safari to spot rhinos, elephants, and leopards." },
        { day: "Day 3: Murti & Local Sightseeing", description: "Visit the scenic Murti river bank and explore the nearby Chapramari forest." },
        { day: "Day 4: Departure", description: "Enjoy a final forest breakfast before your transfer back to Siliguri." }
      ]}
      price="Starting from ₹9,500/person"
    />
  );
}
