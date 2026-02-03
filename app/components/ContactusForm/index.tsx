"use client";

import React, { useState } from "react";
import { Mail, MapPin, User, MessageSquare, X } from "lucide-react";

interface ContactusFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactusForm({ isOpen, onClose }: ContactusFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create email content
      const emailBody = `
New Contact Form Submission

Full Name: ${formData.fullName}
Email: ${formData.email}
Address: ${formData.address}
Description: ${formData.description}

Submitted on: ${new Date().toLocaleString()}
      `;

      // Send email using mailto link
      const mailtoLink = `mailto:info@trikoninnovations.com?subject=New Contact Form Submission - ${
        formData.fullName
      }&body=${encodeURIComponent(emailBody)}`;

      window.open(mailtoLink, "_blank");

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        address: "",
        description: "",
      });

      // Auto-close modal after successful submission
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitStatus("idle");
    setFormData({
      fullName: "",
      email: "",
      address: "",
      description: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full my-8 relative">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
              <p className="text-gray-600 mt-1">
                We&apos;d love to hear from you. Send us a message!
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-black"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-black"
                    placeholder="Enter your email"
                  />
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
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors text-black"
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
                  Description *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors resize-none text-black"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center">
                    ✓ Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center">
                    ✗ Something went wrong. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}
            </form>

            {/* Alternative Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Or contact us directly:</p>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:info@trikoninnovations.com"
                    className="hover:underline"
                  >
                    info@trikoninnovations.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactusForm;
