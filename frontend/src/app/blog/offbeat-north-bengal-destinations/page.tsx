import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "10 Best Offbeat North Bengal Destinations for 2026",
  description: "Escape the crowds in Darjeeling and explore offbeat North Bengal. From the orange orchards of Sittong to the river canyons of Yelbong. Your local travel guide.",
  keywords: ["offbeat North Bengal destinations", "Sittong orange village", "Yelbong river canyon trekking", "Ahaldara viewpoint", "unexplored North Bengal", "Tourex travel blog"],
  alternates: {
    canonical: "/blog/offbeat-north-bengal-destinations",
  },
};

export default function BlogOffbeatNorthBengal() {
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
            <span className="text-gray-900">Offbeat North Bengal</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-black text-[#0f172a] mb-6 leading-tight">
            10 Best Offbeat North Bengal Destinations to Escape the Crowds
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8 border-b pb-8">
            <span className="bg-[#15803d]/10 text-[#15803d] px-3 py-1 rounded-full text-xs font-bold uppercase">Offbeat Guide</span>
            <span>May 29, 2026</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </header>

        <section className="prose prose-lg max-w-none text-[#4b5563] leading-relaxed space-y-8">
          <p className="text-xl leading-relaxed">
            While Darjeeling and Kalimpong remain the crown jewels, the real magic of North Bengal lies in its quiet corners. If you are tired of tourist traps and want to experience the raw, unfiltered beauty of the Himalayas, this guide to <strong>offbeat North Bengal destinations</strong> is for you.
          </p>

          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
              alt="Offbeat North Bengal Viewpoint"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mt-12 mb-6">1. Sittong: The Orange Village</h2>
          <p>
            Located in the Kurseong division, Sittong is famous for its vast orange orchards. During winter, the entire village turns bright orange. Stay in a local homestay, wake up to the sound of birds, and enjoy fresh orange juice straight from the trees.
          </p>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">2. Yelbong: The River Canyon Trek</h2>
          <p>
            For adventure seekers, Yelbong offers one of the most unique experiences in India—river canyoning. Trek through limestone caves, waterfalls, and narrow canyons carved by the river over thousands of years.
          </p>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">3. Ahaldara: 360-Degree Views</h2>
          <p>
            Ahaldara is a small hilltop near Selphu that offers a 360-degree view of the mountains and the Teesta River. On a clear day, you can see the entire range of Kanchenjunga standing tall against the horizon.
          </p>

          <div className="bg-[#15803d]/5 border-l-4 border-[#15803d] p-8 rounded-r-3xl my-12">
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Want an Offbeat Itinerary?</h3>
            <p className="italic">
              We specialize in mapping the unmapped. Check our <Link href="/north-bengal-tour-package" className="text-[#15803d] underline">North Bengal Packages</Link> and ask for a "Hidden Gems" customization.
            </p>
          </div>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">4. Chatakpur: An Eco-Village Paradise</h2>
          <p>
            Perched at 7,887 feet, Chatakpur is a small forest village that offers incredible views of Kanchenjunga. It is a plastic-free zone and perfect for those looking for silence and solitude.
          </p>

          <section className="mt-20 p-12 bg-[#0f172a] text-white rounded-[40px] text-center">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-6">Explore the Unseen North Bengal</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Skip the crowded tourist spots. Let our local experts guide you to the hidden treasures of the Himalayas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-[#15803d] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-bold transition-all">
                Plan My Offbeat Trip
              </Link>
            </div>
          </section>
        </section>
      </article>
      <FAQ />
      <Footer />
    </main>
  );
}
