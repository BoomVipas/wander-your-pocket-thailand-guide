"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, MapPin, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf1df] via-[#f5e8d5] to-[#f3e2c9]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d89a45]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f4c17c]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#b97a2c]/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-[#e5d4bc] mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#d89a45]" />
              <span className="text-sm font-semibold text-[#d89a45]">
                Thailand's First Digital Guide
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Your Personalized{" "}
              <span className="gradient-text">Local Guide</span> In Your Pocket
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              The only app you need when you land in Thailand. Discover trending places, 
              get AI recommendations, and explore like a local. All free.
            </motion.p>

            {/* Key Features Quick List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-[#e5d4bc]">
                <MapPin className="w-4 h-4 text-[#d89a45]" />
                <span className="text-sm font-medium">AI Trip Planner</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-[#e5d4bc]">
                <TrendingUp className="w-4 h-4 text-[#b97a2c]" />
                <span className="text-sm font-medium">Trending Places</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-[#e5d4bc]">
                <Heart className="w-4 h-4 text-[#c76a4d]" />
                <span className="text-sm font-medium">Swipe & Save</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <Button asChild size="lg" className="gradient-thailand text-white font-semibold text-lg px-8 py-6 hover:shadow-xl transition-all">
                <Link href="#download">
                  Download on App Store
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 hover:shadow-lg transition-all border-[#e5d4bc]">
                <Link href="#features">Watch Demo</Link>
              </Button>
            </motion.div>

            {/* App Store Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text-muted-foreground"
            >
              🎉 Now available on the App Store • Free download • No credit card required
            </motion.p>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 w-48 p-4 rounded-2xl glass-effect shadow-xl z-10"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl gradient-thailand" />
                  <div>
                    <p className="font-semibold text-sm">Grand Palace</p>
                    <p className="text-xs text-muted-foreground">Bangkok</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -right-10 w-48 p-4 rounded-2xl glass-effect shadow-xl z-10"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4c17c] to-[#d89a45]" />
                  <div>
                    <p className="font-semibold text-sm">Chatuchak Market</p>
                    <p className="text-xs text-muted-foreground">Shopping</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Phone Image Placeholder */}
              <div className="relative w-full aspect-[9/16] bg-gradient-to-br from-[#3d2d1a] to-[#2a1b0d] rounded-[3rem] shadow-2xl overflow-hidden border-8 border-[#2a1b0d]">
                <div className="absolute inset-0 gradient-thailand opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Wander_Logo-1760545080563.png"
                    alt="Wander App"
                    width={120}
                    height={120}
                    className="opacity-50"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[#e5d4bc]"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">5,000+</h3>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">10,000+</h3>
            <p className="text-sm text-muted-foreground">Places Listed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</h3>
            <p className="text-sm text-muted-foreground">Partner Venues</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">4.9★</h3>
            <p className="text-sm text-muted-foreground">App Store Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}