import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Bengal Tour Package | Best Travel Agency in Siliguri",
  description: "Customized North Bengal tour packages including Darjeeling, Kalimpong, and Dooars. Experience authentic travel with Tourex local experts.",
  keywords: ["North Bengal tour package", "best travel agency in Siliguri", "North Bengal tourism", "customized tours"],
};

export default function NorthBengalPage() {
  return (
    <PackagePage 
      title="North Bengal Tour Package"
      description="The definitive North Bengal experience. From the majestic Kanchenjunga in Darjeeling to the mysterious forests of Dooars, we bring you the soul of the hills."
      places={["Darjeeling", "Kalimpong", "Lataguri", "Mirik", "Kurseong", "Sittong"]}
      itinerary={[
        { day: "Day 1: Siliguri to Darjeeling", description: "Pick up from Siliguri. Scenic drive to the Queen of Hills." },
        { day: "Day 2: Darjeeling Sightseeing", description: "Tiger Hill sunrise, Batasia Loop, and local tea gardens." },
        { day: "Day 3: Kalimpong Adventure", description: "Transfer to Kalimpong. Visit Delo Park and Cactus Nursery." },
        { day: "Day 4: Dooars Transition", description: "Descend to the plains. Overnight at a forest resort." },
        { day: "Day 5: Departure", description: "Morning walk in the woods. Drop at Siliguri." }
      ]}
      price="Starting from ₹15,000/person"
    />
  );
}
