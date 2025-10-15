"use client";

import { Brain, Heart, Shuffle, Shield, Languages, Navigation, Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Trip Planner",
    description: "Get personalized recommendations based on your preferences. Create full-day plans with just a few clicks. Detailed suggestions on what to expect while wandering.",
    gradient: "bg-gradient-to-br from-[#d89a45] to-[#f4c17c]",
  },
  {
    icon: Heart,
    title: "Tinder for Places",
    description: "Swipe right to save trending spots, left to skip. Discover vibrant photos and videos of the hottest places. Algorithm keeps you exploring new gems.",
    gradient: "bg-gradient-to-br from-[#f4c17c] to-[#d89a45]",
  },
  {
    icon: Shuffle,
    title: "Random Place Picker",
    description: "Can't decide? We'll pick for you! Filter by activity, food, nightlife, or chill spots. Perfect for impromptu adventures within your radius.",
    gradient: "bg-gradient-to-br from-[#b97a2c] to-[#d89a45]",
  },
  {
    icon: Shield,
    title: "Safety & Emergency",
    description: "Real-time safety alerts and scam detection. One-touch connection to tourist police with GPS. Verified transportation options with meter enforcement.",
    gradient: "bg-gradient-to-br from-[#6ca77c] to-[#d89a45]",
  },
  {
    icon: Languages,
    title: "Smart Translation",
    description: "Real-time voice translation for Thai-English conversations. Visual translation for signs, menus, and documents. Cultural context and etiquette tips included.",
    gradient: "bg-gradient-to-br from-[#f4c17c] to-[#b97a2c]",
  },
  {
    icon: Navigation,
    title: "Smart Navigation",
    description: "Multi-modal route planning with BTS, MRT, buses, and boats. Real-time traffic updates with alternative routes. Offline maps available for download.",
    gradient: "bg-gradient-to-br from-[#b97a2c] to-[#f4c17c]",
  },
  {
    icon: Zap,
    title: "All-in-One Platform",
    description: "Budget tracking with currency conversion. Weather and air quality alerts. Trip planning with collaborative features. No app-switching needed!",
    gradient: "bg-gradient-to-br from-[#d89a45] to-[#6ca77c]",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-[#fdf1df] to-[#f5e8d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need in{" "}
            <span className="gradient-text">One App</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop juggling multiple apps. Wander combines AI recommendations, place discovery, 
            payments, navigation, and safety features all in one seamless experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold mb-4">
            And the best part? <span className="gradient-text">It's completely free!</span>
          </p>
          <p className="text-muted-foreground">
            No hidden fees, no subscriptions, no credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}