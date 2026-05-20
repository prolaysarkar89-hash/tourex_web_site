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
      title="Darjeeling Tour Package"
      description="Step into the misty charm of the 'Queen of Hills'. Witness the first light of dawn painting the Kanchenjunga in gold and wander through emerald tea gardens that stretch beyond the horizon."
      places={["Tiger Hill", "Batasia Loop", "Ghoom Monastery", "Japanese Peace Pagoda", "Himalayan Mountaineering Institute", "Nightingale Park"]}
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
