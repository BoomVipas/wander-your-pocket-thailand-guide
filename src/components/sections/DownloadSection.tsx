"use client";

import { motion } from "framer-motion";
import { Star, Download, Smartphone, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Solo Traveler from USA",
    rating: 5,
    text: "Finally, an app that actually understands what tourists need! The safety alerts saved me from a taxi scam, and the AI recommendations were spot-on. Worth every download!",
  },
  {
    name: "Somchai P.",
    role: "Bangkok Local",
    rating: 5,
    text: "I thought I knew Bangkok, but Wander showed me so many trendy places I never knew existed. The swipe feature is addicting! 🔥",
  },
  {
    name: "Michael R.",
    role: "Frequent Business Traveler",
    rating: 5,
    text: "The integrated QR payment and translation features are game-changers. No more fumbling with cash or language barriers. Wander made my Thailand trips 10x easier.",
  },
];

const trendingPlaces = [
  { name: "Rooftop Bar @ Icon Siam", category: "Nightlife", trending: "🔥 Top 1" },
  { name: "Chatuchak Weekend Market", category: "Shopping", trending: "🌟 Must-Visit" },
  { name: "Erawan Waterfall", category: "Nature", trending: "🏞️ Hidden Gem" },
  { name: "Art in Paradise Museum", category: "Culture", trending: "📸 Instagram" },
  { name: "Thip Samai Pad Thai", category: "Food", trending: "🍜 Iconic" },
  { name: "Sky Bar at Lebua", category: "Social", trending: "🌆 Sunset View" },
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 md:py-32 bg-gradient-to-br from-[#3d2d1a] via-[#4a3822] to-[#3d2d1a] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#d89a45] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#f4c17c] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Section with App Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Explore Thailand Like Never Before?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join thousands of travelers and locals who've made Wander their go-to guide. 
              Download now and start your adventure!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild size="lg" className="bg-white text-[#2a1b0d] hover:bg-gray-100 font-semibold text-lg px-8 py-7 text-left">
                <a href="https://apps.apple.com/th/app/wander-thailand/id6754048462" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center">
                    <Smartphone className="w-6 h-6 mr-3" />
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </div>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-7 text-left">
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center">
                    <Download className="w-6 h-6 mr-3" />
                    <div>
                      <div className="text-xs">Coming Soon to</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </div>
                </a>
              </Button>
            </div>

            <p className="text-sm text-gray-400">
              ✅ Free Forever • ✅ No Credit Card Required • ✅ Available Now
            </p>
          </motion.div>

          {/* Right: App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame Effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900 max-w-sm">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/S__66191380-1761722014584.jpg"
                  alt="Wander App Interface - Bangkok Map View"
                  width={400}
                  height={866}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d89a45] to-[#f4c17c] opacity-20 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            What People Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
              >
                <Quote className="w-8 h-8 text-[#f4c17c] mb-4" />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trending Places Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Trending Places in Thailand Right Now
          </h3>
          <p className="text-gray-300 mb-8">
            Discover what's hot and happening. Updated daily by our community.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {trendingPlaces.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
              >
                <div className="text-2xl mb-2">{place.trending}</div>
                <h4 className="font-semibold text-sm mb-1">{place.name}</h4>
                <p className="text-xs text-gray-400">{place.category}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <Button asChild size="lg" className="gradient-thailand text-white font-semibold text-xl px-12 py-8 hover:shadow-2xl transition-all group">
            <a href="https://apps.apple.com/th/app/wander-thailand/id6754048462" target="_blank" rel="noopener noreferrer">
              Create Your Trip Now
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}