"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Map, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5e8d5] to-[#fdf4e5]" />
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#d89a45]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#f4c17c]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e5d4bc] mb-4">
            <Compass className="w-4 h-4 text-[#d89a45]" />
            <span className="text-sm font-semibold text-[#d89a45]">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The First In-Depth <span className="gradient-text">Digital Guide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed to help you experience Thailand in your very own way
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-thailand flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Born from Curiosity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Born from the curiosity of local travelers, Wander blends local insights, 
                    feedback, and discovery to craft a guide that feels alive. We go beyond the 
                    surface — mapping stories behind places, connecting hidden cafés with creative 
                    studios, tracing local festivals, and curating routes that change with the 
                    rhythm of Thai trends.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b97a2c] to-[#d89a45] flex items-center justify-center flex-shrink-0">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To make exploration effortless and personalized. Wander isn't just a list of 
                    places; it's a living ecosystem that evolves with travelers and locals alike. 
                    Whether you're chasing sunrise hikes in Chiang Mai or late-night ramen in Ari, 
                    our platform guides you with precision, personality, and care.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4c17c] to-[#b97a2c] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Authenticity Over Algorithms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every recommendation comes from real insight, local context, and a genuine love 
                    for Thailand's culture and community. We believe in curating experiences that 
                    matter, not just what trends on social media.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="relative glass-effect rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d89a45]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="text-6xl text-[#d89a45] font-serif mb-4">"</div>
                <p className="text-2xl font-semibold mb-4 leading-relaxed">
                  To truly travel in Thailand, you don't just move — you wander.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-[#d89a45] to-[#b97a2c] rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats/Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl gradient-thailand mx-auto mb-4 flex items-center justify-center">
              <Map className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Living Ecosystem</h4>
            <p className="text-sm text-muted-foreground">
              Constantly evolving with Thailand's trends and local insights
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b97a2c] to-[#d89a45] mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Local Insights</h4>
            <p className="text-sm text-muted-foreground">
              Crafted by travelers who know Thailand inside and out
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4c17c] to-[#d89a45] mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Personalized Journey</h4>
            <p className="text-sm text-muted-foreground">
              Every route tells a story, every place has meaning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}