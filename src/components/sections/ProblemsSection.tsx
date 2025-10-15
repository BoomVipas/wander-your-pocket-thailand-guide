"use client";

import { AlertTriangle, Wallet, MessageSquare, MapPin, Wifi, Layers } from "lucide-react";
import PainPointCard from "@/components/PainPointCard";

const painPoints = [
  {
    icon: AlertTriangle,
    problem: "Safety and security concerns plague tourists in Thailand. From taxi scams to road accidents, visitors face constant threats.",
    solution: "Wander provides real-time safety alerts, scam detection AI, verified transportation booking, and one-touch emergency access to tourist police with GPS tracking.",
    stats: "48% of tourist complaints involve scams",
  },
  {
    icon: Wallet,
    problem: "Payment nightmares: ATMs only give 1,000 baht notes that vendors refuse. Foreigners can't access Thai QR payment systems, forcing risky cash dependence.",
    solution: "Integrated tourist QR payment through TAGTHAi Easy Pay partnership. Multi-currency wallet, bill splitting, and real-time exchange rate optimization.",
    stats: "100% of tourists excluded from PromptPay",
  },
  {
    icon: MessageSquare,
    problem: "Language barriers create frustration and confusion. Research shows only 2.62/5.0 satisfaction with English communication. Pronunciation difficulties escalate into conflicts.",
    solution: "AI-powered real-time voice and visual translation. Cultural context explanations, common phrases with audio, and camera-based menu translation.",
    stats: "Thai vendors struggle with R sounds and fast English",
  },
  {
    icon: MapPin,
    problem: "Transportation chaos: Severe traffic, taxi meter refusals, unreliable public transport info, and left-side driving confusion for tourists.",
    solution: "Smart multi-modal route planning with BTS, MRT, buses, and verified taxis. Real-time traffic updates with alternative routes and safety ratings.",
    stats: "Thailand has one of world's highest road fatality rates",
  },
  {
    icon: Wifi,
    problem: "Connectivity gaps on islands and remote areas. Slow WiFi, high roaming charges, and complex local SIM card processes requiring documentation.",
    solution: "Built-in eSIM marketplace for easy data plan activation. WiFi finder with speed ratings, offline maps for key areas, and 24/7 tech support.",
    stats: "Limited reliable internet in popular tourist islands",
  },
  {
    icon: Layers,
    problem: "No centralized platform exists. Tourists juggle separate apps for attractions, transport, payments, and emergencies. Government apps have failed with booking system crashes.",
    solution: "Wander is the ONLY all-in-one platform integrating trip planning, place discovery, payments, navigation, safety alerts, and emergency services. One app. Everything you need.",
    stats: "This is the massive gap Wander fills!",
  },
];

export default function ProblemsSection() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-[#fdf4e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Real Problems</span> Tourists Face
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Traveling in Thailand shouldn't be stressful. These are the daily pain points 
            that Wander solves, making your journey safe, seamless, and enjoyable.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              icon={point.icon}
              problem={point.problem}
              solution={point.solution}
              stats={point.stats}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 p-8 rounded-2xl gradient-thailand text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Don't let these problems ruin your Thailand adventure
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Wander is the first customer-centric platform designed specifically to solve 
            every tourist pain point in one comprehensive, easy-to-use app.
          </p>
          <p className="text-xl font-semibold">
            Download now and experience the difference. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}