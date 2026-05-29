import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "How to Plan a Budget Trip to Bhutan from India (2026 Guide)",
  description: "Want to visit Bhutan on a budget? Learn about SDF fees, permit requirements, budget stays in Thimphu & Paro, and how to save money on your Bhutan trip from India.",
  keywords: ["budget trip to Bhutan from India", "Bhutan SDF fee for Indians", "cheap Bhutan tour packages", "Bhutan permit for Indian citizens", "plan Bhutan trip 2026"],
  alternates: {
    canonical: "/blog/budget-bhutan-trip-from-india",
  },
};

export default function BlogBhutanBudget() {
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
            <span className="text-gray-900">Budget Bhutan Trip Guide</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-black text-[#0f172a] mb-6 leading-tight">
            How to Plan a Budget Trip to Bhutan from India in 2026
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8 border-b pb-8">
            <span className="bg-[#15803d]/10 text-[#15803d] px-3 py-1 rounded-full text-xs font-bold uppercase">Budget Travel</span>
            <span>May 29, 2026</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        <section className="prose prose-lg max-w-none text-[#4b5563] leading-relaxed space-y-8">
          <p className="text-xl leading-relaxed">
            Bhutan, the Kingdom of Happiness, is often perceived as an expensive destination. While the Sustainable Development Fee (SDF) has changed the landscape, it is still very possible for Indian travelers to experience the magic of Bhutan without breaking the bank. Here is your <strong>2026 budget guide to Bhutan</strong>.
          </p>

          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=80"
              alt="Tiger's Nest Monastery Bhutan Budget Travel"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mt-12 mb-6">1. Understanding the SDF for Indians</h2>
          <p>
            Currently, Indian citizens are required to pay an <strong>SDF of ₹1,200 per person per night</strong>. While this is a fixed cost, children between the ages of 6 and 12 pay 50% (₹600), and those under 6 are exempt. 
          </p>
          <p className="font-bold text-[#15803d]">Strategy: Limit your stay to 4-5 nights to keep the SDF component manageable while covering Thimphu, Paro, and Punakha.</p>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">2. Entering via Phuntsholing (The Land Route)</h2>
          <p>
            Flights to Paro (PBH) from Delhi or Kolkata can be expensive. To save significant money:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>Take a train to <strong>Hasimara</strong> (West Bengal) or a flight to <strong>Bagdogra (IXB)</strong>.</li>
            <li>Travel by road to the border town of Jaigaon.</li>
            <li>Walk across the gate to Phuntsholing and complete your permits there.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">3. Budget Accommodation Tips</h2>
          <p>
            Avoid the luxury 5-star dzongs if you are on a budget. Thimphu and Paro have excellent 3-star hotels and homestays that offer authentic Bhutanese hospitality for <strong>₹2,500 - ₹3,500 per night</strong>.
          </p>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">4. Eat Like a Local</h2>
          <p>
            Bhutanese cuisine is delicious and affordable. Look for local eateries serving:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ema Datshi:</strong> The national dish of chilies and cheese.</li>
            <li><strong>Jasha Maroo:</strong> Spicy minced chicken.</li>
            <li><strong>Suja:</strong> Traditional butter tea.</li>
          </ul>
          <p>Local meals usually cost between ₹300 and ₹500 per person.</p>

          <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">5. Shared Transport vs. Private Taxis</h2>
          <p>
            While private taxis are convenient, they can cost ₹3,000 - ₹4,500 per day. For solo travelers or couples, check for <strong>shared coasters or buses</strong> running between Thimphu and Paro, though these require advance booking at the bus terminals.
          </p>

          <div className="bg-[#0f172a] text-white p-10 rounded-[40px] my-12">
            <h3 className="text-2xl font-bold mb-4">Want a Hassle-Free Budget Trip?</h3>
            <p className="text-gray-300 mb-8">
              We offer specially curated "Budget Bhutan" packages that optimize your route, handle all permit documentation, and include the best-value homestays.
            </p>
            <Link href="/bhutan-tour-package" className="bg-[#15803d] text-white px-8 py-3 rounded-full font-bold">
              Check Bhutan Packages
            </Link>
          </div>
        </section>
      </article>
      <FAQ />
      <Footer />
    </main>
  );
}
