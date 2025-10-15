"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, description, gradient, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full p-6 md:p-8 rounded-2xl bg-white border border-[#e5d4bc] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 rounded-2xl ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl ${gradient} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}