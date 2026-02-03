import React from "react";
import Link from "next/link";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  Globe,
  Code,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function Page() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Innovation First",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that set new industry standards.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Client Partnership",
      description:
        "We build long-term relationships, working closely with clients to understand their unique needs.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Excellence",
      description:
        "Quality is non-negotiable. We deliver exceptional results that exceed expectations.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: "Creative Solutions",
      description:
        "We think outside the box to solve complex challenges with innovative approaches.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const expertise = [
    "Full-Stack Development",
    "UI/UX Design",
    "Mobile App Development",
    "Cloud Solutions",
    "Digital Marketing",
    "E-commerce Platforms",
    "API Integration",
    "Performance Optimization",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Your vision, <span className="text-blue-600">our</span>
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">expertise, </span>let&apos;s
                  create impact
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Do you have a project, a technical challenge, or an idea to
                bring to life? The <strong>Trikon Innovations</strong> team is
                here to support you in achieving your ambitions in digital
                solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contactus"
                  className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg inline-flex items-center gap-2 justify-center"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#values"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-medium hover:bg-black hover:text-white transition-colors text-lg text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <Code className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Development
                    </h3>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <Palette className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Design
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <Globe className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Digital
                    </h3>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Growth
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div id="values" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from the smallest project
              to the largest transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Expertise That Drives Results
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our team brings together diverse skills and deep industry
                knowledge to deliver solutions that make a real difference.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                <p className="text-blue-100 mb-6">
                  Let&apos;s discuss how we can help bring your ideas to life
                </p>
                <Link
                  href="/contactus"
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you want to discuss a software proof of concept, explore
            digital opportunities, or simply seek expert advice, we&apos;re here
            to help.
          </p>
          <Link
            href="/contactus"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
