import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Best Time to Visit Dooars for Jungle Safari (2026 Monthly Guide)",
  description: "When is the best time to visit Dooars for a jungle safari? Read our month-by-month guide on Gorumara, Jaldapara, and Buxa Tiger Reserve. Tips on animal sightings and weather.",
  keywords: ["best time to visit Dooars", "Dooars jungle safari timing", "Gorumara national park opening dates", "Jaldapara safari best month", "Dooars tourism guide"],
  alternates: {
    canonical: "/blog/best-time-to-visit-dooars-safari",
  },
};

export default function BlogDooarsTime() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <article className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <header className="mb-12">
          <nav className="flex gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#15803d]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#15803d]">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Best Time to Visit Dooars</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-black text-[#0f172a] mb-6 leading-tight">
            Best Time to Visit Dooars for Jungle Safari: A Month-by-Month Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8 border-b pb-8">
            <span className="bg-[#15803d]/10 text-[#15803d] px-3 py-1 rounded-full text-xs font-bold uppercase">Wildlife Guide</span>
            <span>May 29, 2026</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </header>

        <section className="prose prose-lg max-w-none text-[#4b5563] leading-relaxed space-y-8">
          <p className="text-xl leading-relaxed">
            The Dooars region, stretching from the Teesta River in the west to the Sankosh River in the east, is a paradise for wildlife enthusiasts. But a <strong>jungle safari in Dooars</strong> is highly dependent on the season. In this guide, we help you pick the perfect month to spot the One-Horned Rhino, Asian Elephant, and if you&apos;re lucky, the Royal Bengal Tiger.
          </p>

          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1590424744295-9831498b5391?auto=format&fit=crop&w=1200&q=80"
              alt="Rhino in Gorumara National Park Dooars"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mt-12 mb-6">The Golden Rule: June 15 to September 15</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-3xl my-8">
            <p className="text-red-700 font-bold">
              IMPORTANT: All National Parks and Wildlife Sanctuaries in West Bengal (Gorumara, Jaldapara, Chapramari, Buxa) remain CLOSED from June 15th to September 15th every year due to the monsoon and animal breeding season.
            </p>
          </div>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">Seasonal Breakdown</h2>
          
          <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Winter (November to February) - BEST TIME</h3>
          <p>
            This is undoubtedly the most pleasant time to visit. The weather is cool, the skies are clear, and the mist over the tea gardens creates a magical atmosphere.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sightings:</strong> High chance of seeing Rhinos and Elephants near salt licks.</li>
            <li><strong>Activities:</strong> Perfect for elephant safaris and jeep safaris.</li>
            <li><strong>Tip:</strong> Carry heavy woolens for early morning safaris.</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Spring (March to April) - HIGHEST SIGHTINGS</h3>
          <p>
            As the grass starts to dry up and is often burnt by forest officials to allow new growth, visibility inside the forest increases significantly.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sightings:</strong> Animals frequently come out to water holes as temperatures rise.</li>
            <li><strong>Photography:</strong> The best light and visibility for wildlife photography.</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Summer (May to Mid-June)</h3>
          <p>
            It can get hot and humid, but for the serious wildlife watcher, this is a secret window. The heat drives even the most elusive animals to the rivers and water bodies.
          </p>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">Safari Timings & Locations</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="p-4 font-bold text-[#0f172a]">Park Name</th>
                  <th className="p-4 font-bold text-[#0f172a]">Key Attraction</th>
                  <th className="p-4 font-bold text-[#0f172a]">Best Month</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Gorumara National Park</td>
                  <td className="p-4">One-Horned Rhino</td>
                  <td className="p-4">December - March</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Jaldapara National Park</td>
                  <td className="p-4">Elephant Safari</td>
                  <td className="p-4">January - April</td>
                </tr>
                <tr>
                  <td className="p-4">Buxa Tiger Reserve</td>
                  <td className="p-4">Trekking & Leopards</td>
                  <td className="p-4">October - May</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#15803d]/5 p-8 rounded-3xl my-12">
            <h3 className="text-xl font-bold text-[#0f172a] mb-4">Planning a Dooars Trip?</h3>
            <p className="mb-6 text-gray-700">
              We provide all-inclusive Dooars packages that include confirmed safari permits, stay in the best Lataguri resorts, and private pick-up from NJP.
            </p>
            <Link href="/dooars-tour-package" className="inline-block bg-[#15803d] text-white px-6 py-3 rounded-full font-bold">
              Explore Dooars Packages
            </Link>
          </div>
        </section>
      </article>
      <FAQ />
      <Footer />
    </main>
  );
}
