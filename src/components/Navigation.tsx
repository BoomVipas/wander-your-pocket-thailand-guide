"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Wander_Logo-1760545080563.png"
                alt="Wander Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold gradient-text">Wander</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="#audience" className="text-sm font-medium hover:text-primary transition-colors">
              For Who
            </Link>
            <Link href="#download" className="text-sm font-medium hover:text-primary transition-colors">
              Download
            </Link>
            <Button asChild className="gradient-thailand text-white font-semibold">
              <Link href="#download">Get Started Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link
              href="#features"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#solutions"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#audience"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              For Who
            </Link>
            <Link
              href="#download"
              className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
            <div className="px-4">
              <Button asChild className="w-full gradient-thailand text-white font-semibold">
                <Link href="#download">Get Started Free</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}