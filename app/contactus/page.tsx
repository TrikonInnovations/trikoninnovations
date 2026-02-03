import React from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, User } from "lucide-react";

function Page() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Us",
      details: "info@trikoninnovations.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Call Us",
      details: "+977-9704528366",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Visit Us",
      details: "Gokarneshowr, Kathmandu",
      description: "Attarkhel, Jorpati, Kathmandu",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="h-16 w-16 text-blue-600 mr-4" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Get In Touch
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-800 font-medium mb-1">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24
              hours
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="relative">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="relative">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black bg-white"
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Description *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-black bg-white"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
