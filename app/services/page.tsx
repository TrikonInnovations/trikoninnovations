import React from "react";
import {
  ArrowRight,
  Globe,
  Code,
  TrendingUp,
  Palette,
  Smartphone,
  BarChart3,
} from "lucide-react";

function Page() {
  const services = [
    {
      title: "Website Design",
      description:
        "Create stunning, responsive websites that captivate your audience and drive conversions.",
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      features: [
        "Responsive Design",
        "User Experience (UX)",
        "Modern UI/UX",
        "SEO Optimization",
        "Performance Optimization",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs and requirements.",
      icon: <Code className="h-12 w-12 text-green-600" />,
      features: [
        "Custom Applications",
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to grow your online presence and reach.",
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      features: [
        "Social Media Marketing",
        "Content Marketing",
        "SEO & SEM",
        "Email Marketing",
        "Analytics & Reporting",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business
            thrive in the digital age. From concept to execution, we&apos;re
            here to turn your vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${service.color} p-8 text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <ArrowRight className="h-6 w-6 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What we offer:
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="px-8 pb-8">
                <button
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600">
              We also provide specialized solutions to meet your unique business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Palette className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brand Identity
              </h3>
              <p className="text-gray-600 text-sm">
                Logo design, brand guidelines, and visual identity
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Smartphone className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mobile Development
              </h3>
              <p className="text-gray-600 text-sm">
                iOS and Android app development
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <BarChart3 className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Business Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Data analysis and business intelligence
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Let&apos;s discuss how we can help transform your business with our
            services
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
