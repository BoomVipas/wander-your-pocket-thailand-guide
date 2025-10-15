"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface PainPointCardProps {
  icon: LucideIcon;
  problem: string;
  solution: string;
  stats?: string;
  index: number;
}

export default function PainPointCard({ icon: Icon, problem, solution, stats, index }: PainPointCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="h-full p-6 md:p-8 rounded-2xl bg-white border border-[#e5d4bc] hover:shadow-xl transition-all duration-300">
        {/* Problem Section */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-3 rounded-xl bg-[#c76a4d]/10">
            <Icon className="w-6 h-6 text-[#c76a4d]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-2">Problem</h3>
            <p className="text-muted-foreground leading-relaxed">{problem}</p>
            {stats && (
              <p className="mt-2 text-sm font-semibold text-[#c76a4d]">{stats}</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e5d4bc] my-6" />

        {/* Solution Section */}
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-xl bg-[#6ca77c]/10">
            <CheckCircle2 className="w-6 h-6 text-[#6ca77c]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-2">Wander Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{solution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}