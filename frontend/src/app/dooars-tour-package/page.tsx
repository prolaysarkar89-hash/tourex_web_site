import PackagePage from "@/components/PackagePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dooars Tour Package 2026 | Jungle Safari & Lataguri Resort Booking",
  description: "Experience the ultimate Dooars jungle safari. Book Gorumara, Jaldapara, and Buxa tour packages with Tourex. Premium Lataguri resorts and expert local forest guides.",
  keywords: [
    "Dooars tour package", 
    "Gorumara jungle safari booking", 
    "Lataguri forest tour", 
    "Jaldapara Rhino safari", 
    "Dooars tourism", 
    "Buxa Jayanti tour itinerary",
    "best Dooars travel agency"
  ],
  alternates: {
    canonical: "/dooars-tour-package",
  },
  openGraph: {
    title: "Wild Dooars: Jungle Safaris & Forest Escapes | Tourex",
    description: "Discover the emerald forests of North Bengal. Book your Gorumara or Jaldapara safari with the local experts.",
    url: "https://www.tourextravel.com/dooars-tour-package",
    images: [{ url: "https://images.unsplash.com/photo-1590424744295-9831498b5391?auto=format&fit=crop&w=1200&q=80" }]
  }
};

export default function DooarsPage() {
  return (
    <PackagePage 
      title="Dooars Tour Package: Into the Emerald Wild"
      description="Book all-inclusive Dooars tour packages from Siliguri with Tourex. We provide expert-led jungle safaris in Gorumara and Jaldapara, confirmed Lataguri resort bookings, and private transport. Experience the wild beauty of North Bengal with 10+ years of local expertise."
      image="https://images.unsplash.com/photo-1590424744295-9831498b5391?auto=format&fit=crop&w=1200&q=80"
      places={["Gorumara National Park", "Jaldapara Rhino Sanctuary", "Buxa Tiger Reserve", "Lataguri Forest", "Jhalong Hydro-Project", "Bindu (Bhutan Border)", "Murti Riverfront", "Suntalekhola"]}
      itinerary={[
        { 
          day: "Day 1: Arrival & The Lataguri Forest Experience", 
          description: "Meet our representative at NJP or Bagdogra. Enjoy a 2-hour drive through the scenic tea gardens of Malbazar to reach Lataguri, the gateway to Gorumara. Check into your forest resort. In the evening, visit the Nature Interpretation Center or enjoy a tribal dance performance." 
        },
        { 
          day: "Day 2: Gorumara Jungle Safari & Murti Riverfront", 
          description: "An early morning Jeep Safari into Gorumara National Park. Keep your eyes peeled for Rhinos, Bison (Gaurs), and Peacocks at the Jatraprasad Watchtower. Later, spend a relaxing afternoon by the crystal-clear Murti River, perfect for birdwatching and photography." 
        },
        { 
          day: "Day 3: Jhalong, Bindu & The Bhutan Border Escapades", 
          description: "Drive to Jhalong on the banks of the Jaldhaka River. Visit Bindu, the last village on the Indian side, offering breathtaking views of the Bhutanese hills. Explore the cardamom plantations and the unique rocky terrain of the river valley." 
        },
        { 
          day: "Day 4: Optional Jaldapara Safari or Transfer to Buxa", 
          description: "Extend your adventure with a visit to Jaldapara for an iconic Elephant Safari (subject to availability). Alternatively, explore the historic Buxa Fort and the riverside beauty of Jayanti, often called the 'Queen of Dooars'." 
        },
        { 
          day: "Day 5: Departure with the Wild in Your Heart", 
          description: "After a final breakfast amidst the bird calls, we transfer you back to Siliguri (NJP/Bagdogra). Carry the fresh air and wild memories of Dooars back home." 
        }
      ]}
      price="Starting from ₹12,500/person"
    />
  );
}
