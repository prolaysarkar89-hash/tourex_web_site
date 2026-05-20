import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silk Route Tour Package | Journey Through History",
  description: "Experience the legendary Silk Route with our specialized tour packages. Witness the zig-zag loops of Zuluk and the serene beauty of high-altitude lakes.",
  keywords: ["Silk Route tour", "Zuluk tour package", "Old Silk Route Sikkim", "Silk Route sightseeing"],
};

export default function SilkRoutePage() {
  return (
    <PackagePage 
      title="Silk Route Tour Package"
      description="Retrace the steps of ancient traders on the historic Silk Route. From the mesmerizing hair-pin bends of Zuluk to the pristine waters of Kupup Lake, this is a journey through time and clouds."
      places={["Zuluk", "Gnathan Valley", "Kupup Lake", "Thambi Viewpoint", "Lungthung", "Aritar"]}
      itinerary={[
        { day: "Day 1: Arrival at Aritar", description: "Transfer from Siliguri to Aritar. Visit Lampokhari Lake and the old British bungalow." },
        { day: "Day 2: Zuluk & Zig-Zag Loops", description: "Ascend to Zuluk via the iconic zig-zag road. Enjoy sunset at Thambi Viewpoint." },
        { day: "Day 3: Gnathan Valley & Kupup", description: "Explore the high-altitude Gnathan Valley and the legendary Elephant Lake at Kupup." },
        { day: "Day 4: Departure", description: "Descend from the high altitudes with unforgettable memories. Return transfer to Siliguri." }
      ]}
      price="Starting from ₹14,000/person"
    />
  );
}
