import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dooars Tour Package from Siliguri",
  description: "Explore the wild side of North Bengal with our premium Dooars tour package. Lataguri resorts, Gorumara jungle safari, and Jhalong escapes.",
  keywords: ["Dooars tour package", "Lataguri resort booking", "Dooars jungle safari", "North Bengal tours"],
};

export default function DooarsPage() {
  return (
    <PackagePage 
      title="Dooars Tour Package"
      description="Immerse yourself in the emerald forests of Dooars. From heart-pounding jungle safaris in Gorumara to peaceful retreats in Lataguri, we curate the ultimate wildlife experience."
      places={["Gorumara National Park", "Jaldapara Sanctuary", "Buxa Tiger Reserve", "Jhalong & Bindu", "Murti River", "Suntalekhola"]}
      itinerary={[
        { day: "Day 1: Arrival & Lataguri", description: "Arrive at NJP/Bagdogra. Transfer to Lataguri. Evening forest trail." },
        { day: "Day 2: Gorumara Safari", description: "Early morning jungle safari. Visit Murti river and local villages." },
        { day: "Day 3: Jhalong & Bindu", description: "Drive to the Bhutan border. Explore Jhalong's hydroelectric project and Bindu's serenity." },
        { day: "Day 4: Departure", description: "Last breakfast amidst the greens. Transfer back to Siliguri." }
      ]}
      price="Starting from ₹12,500/person"
    />
  );
}
