import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honeymoon Tour Package | Romantic Getaways",
  description: "Start your new journey together with our romantic honeymoon packages. Private stays, candlelit dinners, and enchanting views in the Himalayas.",
  keywords: ["honeymoon tour package", "romantic tour Darjeeling", "Sikkim honeymoon", "couple tour packages"],
};

export default function HoneymoonPage() {
  return (
    <PackagePage 
      title="Honeymoon Tour Package"
      description="Celebrate love in the lap of the Himalayas. From private balconies overlooking the Kanchenjunga to quiet walks through pine forests, we craft the perfect romantic escape."
      places={["Darjeeling", "Gangtok", "Ravangla", "Pelling", "Kalimpong", "Sittong"]}
      itinerary={[
        { day: "Day 1: Romantic Arrival", description: "Arrive at NJP/Bagdogra. Private transfer to a luxury resort. Evening candlelit dinner." },
        { day: "Day 2: Darjeeling Dreams", description: "Early morning sunrise at Tiger Hill, followed by a private tour of scenic tea estates." },
        { day: "Day 3: Enchanting Gangtok", description: "Transfer to Gangtok. Visit the flower exhibition and enjoy a sunset view from Tashi Viewpoint." },
        { day: "Day 4: Departure", description: "Savor a final mountain breakfast before your transfer back with memories for a lifetime." }
      ]}
      price="Starting from ₹22,000/couple"
    />
  );
}
