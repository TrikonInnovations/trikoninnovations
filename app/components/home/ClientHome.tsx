"use client";
import { Sparkles, ArrowRight, Star, Zap, Code } from "lucide-react";
import { useState } from "react";
import ContactusForm from "../ContactusForm";

export default function ClientHome() {
  const [openContactUs, setOpenContactUs] = useState(false);

  return (
    <div className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
              <Sparkles className="h-4 w-4" />
              Innovation at its finest
            </div>

            {/* Main Headings */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                From Idea to
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Innovation
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transforming Visions into Reality
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We turn your boldest ideas into powerful digital solutions. From
              concept to deployment, we&apos;re here to make innovation happen.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-gray-600">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">100% Client Satisfaction</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => setOpenContactUs(true)}
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-lg">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Digital Innovation
              </h3>
              <p className="text-gray-600">
                Cutting-edge solutions for modern businesses
              </p>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white p-2 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold">25+</div>
                <div className="text-xs">Team</div>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 bg-orange-500 text-white p-2 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold">5+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactusForm
        isOpen={openContactUs}
        onClose={() => setOpenContactUs(false)}
      />
    </div>
  );
}
