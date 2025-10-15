"use client";

import { motion } from "framer-motion";
import { Users, Plane, MapPin, Sparkles } from "lucide-react";

const audiences = [
  {
    icon: MapPin,
    title: "Thai Locals",
    subtitle: "Ages 15-30 • Students & Young Professionals",
    color: "from-[#d89a45] to-[#f4c17c]",
    features: [
      "Wide variety of activities and workshops",
      "New and trendy places (really up-to-date)",
      "Easy to use for impromptu situations",
      "Randomizer for immediate suggestions",
      "Tinder-style place discovery (restaurants, activities, social spots)",
      "Fast-paced trend updates",
    ],
  },
  {
    icon: Users,
    title: "First-Time Visitors",
    subtitle: "Ages 18-35 • Solo, Groups, or Family",
    color: "from-[#b97a2c] to-[#d89a45]",
    features: [
      "Personalized and local-level recommendations",
      "Useful tips and tricks to raise awareness",
      "Deeply researched high-quality cultural souvenirs",
      "Integrated budget tracking",
      "Language translation",
      "Weather warnings and routing",
    ],
  },
  {
    icon: Plane,
    title: "Frequent Flyers",
    subtitle: "Seasoned Travelers • Experience Seekers",
    color: "from-[#f4c17c] to-[#d89a45]",
    features: [
      "Exploring new in-trend areas, foods, and activities",
      "Deeply researched high-quality souvenirs and snacks",
      "E-wallet / QR payment integration",
      "Advanced trip planning tools",
      "Exclusive partnership deals",
      "Priority booking for workshops and venues",
    ],
  },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="py-20 md:py-32 bg-gradient-to-b from-[#fdf1df] to-[#f5e8d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built For <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a local looking for the next trending spot, a first-time visitor 
            needing guidance, or a frequent traveler seeking hidden gems—Wander has you covered.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-[#e5d4bc] hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${audience.color} mb-4 transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{audience.subtitle}</p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {audience.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Sparkles className="w-4 h-4 text-[#d89a45] flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}