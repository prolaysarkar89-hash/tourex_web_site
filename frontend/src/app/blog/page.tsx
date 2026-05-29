import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tourex Blog: Travel Guides, Tips & Stories from North Bengal",
  description: "Explore the latest travel guides, transport tips, and offbeat stories from Darjeeling, Sikkim, Dooars, and Bhutan. Plan your perfect Himalayan escape with Tourex.",
  keywords: ["North Bengal travel blog", "Darjeeling travel tips", "Sikkim guide", "Dooars wildlife blog", "Bhutan budget travel"],
};

const posts = [
  {
    title: "NJP to Darjeeling Taxi Fare & Travel Guide (2026 Update)",
    excerpt: "Everything you need to know about reaching the Queen of Hills from NJP station. Shared cabs, private cars, and latest 2026 rates.",
    slug: "njp-to-darjeeling-taxi-fare",
    category: "Transport",
    image: "https://images.unsplash.com/photo-1626696716912-42da0938c66e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Best Time to Visit Dooars for Jungle Safari (Month-by-Month)",
    excerpt: "A complete month-by-month guide for wildlife enthusiasts visiting Gorumara and Jaldapara. Know when the parks are open and sightings are high.",
    slug: "best-time-to-visit-dooars-safari",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1590424744295-9831498b5391?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "How to Plan a Budget Trip to Bhutan from India (2026 Guide)",
    excerpt: "Bhutan on a budget? Yes, it's possible. Learn about the latest SDF fees, permit requirements, and how to save money as an Indian traveler.",
    slug: "budget-bhutan-trip-from-india",
    category: "Budget Travel",
    image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "10 Best Offbeat North Bengal Destinations for 2026",
    excerpt: "Escape the crowds in Darjeeling and explore offbeat North Bengal. From the orange orchards of Sittong to the river canyons of Yelbong.",
    slug: "offbeat-north-bengal-destinations",
    category: "Offbeat Guide",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogIndex() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black text-[#0f172a] mb-6 tracking-tight">
            Tourex <span className="text-[#15803d]">Blog.</span>
          </h1>
          <p className="text-xl text-[#4b5563] max-w-2xl mx-auto leading-relaxed">
            Local expertise, cinematic stories, and essential travel guides for your next Himalayan escape.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#15803d] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-display font-bold text-[#0f172a] mb-4 group-hover:text-[#15803d] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-[#4b5563] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center text-[#15803d] font-bold gap-2">
                <span>Read Story</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-8">Ready for the real thing?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Stop reading and start exploring. Our local experts are ready to curate your stress-free North Bengal adventure.
          </p>
          <Link href="/packages" className="bg-[#15803d] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all inline-block">
            View All Packages
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
