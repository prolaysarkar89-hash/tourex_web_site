import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Tour Package | Unforgettable Family Holidays",
  description: "Create lasting memories with our family-friendly tour packages. Perfectly paced itineraries for all ages across North Bengal and Sikkim.",
  keywords: ["family tour package", "family holiday North Bengal", "Sikkim family tour", "child friendly tours"],
};

export default function FamilyTourPage() {
  return (
    <PackagePage 
      title="Family Tour Package"
      description="Rekindle bonds amidst the serene hills and lush forests. Our family packages are designed with comfort and joy in mind, ensuring a magical experience for every generation."
      places={["Darjeeling", "Gangtok", "Kalimpong", "Mirik", "Jhalong", "Murti"]}
      itinerary={[
        { day: "Day 1: Arrival & Relax", description: "Arrive at NJP/Bagdogra. Comfortable transfer to your hotel. Evening for family leisure." },
        { day: "Day 2: Fun in Darjeeling", description: "Toy Train ride, visit to the Padmaja Naidu Himalayan Zoological Park, and evening at the Mall." },
        { day: "Day 3: Scenic Kalimpong", description: "Drive to Kalimpong. Visit the Science Centre and enjoy a family picnic at Delo Park." },
        { day: "Day 4: Departure", description: "A final family breakfast before we drop you back for your journey home." }
      ]}
      price="Starting from ₹18,000/family"
    />
  );
}
