import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darjeeling Tour Package | Experience the Queen of Hills",
  description: "Book our premium Darjeeling tour package to witness the majestic sunrise at Tiger Hill, explore lush tea gardens, and ride the iconic Toy Train.",
  keywords: ["Darjeeling tour package", "Darjeeling sightseeing", "Tiger Hill sunrise", "Toy Train Darjeeling"],
};

export default function DarjeelingPage() {
  return (
    <PackagePage 
      title="Darjeeling Tour Package 2026: The Queen of Hills"
      description="Tourex offers curated Darjeeling tour packages including heritage tea garden stays, Himalayan Railway toy train rides, and the legendary Tiger Hill sunrise. Our 2026 packages feature private transport from Siliguri and local expertise for a stress-free Himalayan escape."
      image="https://images.unsplash.com/photo-1626696716912-42da0938c66e?auto=format&fit=crop&w=1200&q=80"
      places={["Tiger Hill Sunrise", "Batasia Loop", "Ghoom Monastery", "Japanese Peace Pagoda", "Himalayan Mountaineering Institute", "Happy Valley Tea Estate"]}
      itinerary={[
        { day: "Day 1: Arrival in Darjeeling", description: "Meet our representative at NJP/Bagdogra and enjoy a scenic drive through winding hills to Darjeeling." },
        { day: "Day 2: Tiger Hill & Local Tour", description: "Early morning sunrise at Tiger Hill. Visit Batasia Loop, Ghoom Monastery, and the Himalayan Mountaineering Institute." },
        { day: "Day 3: Tea Gardens & Mirik", description: "Explore world-famous tea estates and take a day trip to the serene Mirik Lake for boating and relaxation." },
        { day: "Day 4: Departure", description: "Morning at leisure for shopping at Mall Road. Transfer back to Siliguri for your onward journey." }
      ]}
      price="Starting from ₹13,500/person"
    />
  );
}
