import React from "react";
import { Star, Quote, Building, CheckCircle } from "lucide-react";

function Page() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Trikon Innovations transformed our business with their exceptional web development services. The team delivered beyond our expectations with a modern, scalable solution that has increased our online presence by 300%.",
      project: "E-commerce Platform Development",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "InnovateLab",
      image: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Working with Trikon was a game-changer for our startup. Their expertise in mobile app development and their attention to detail helped us launch our product ahead of schedule. Highly recommended!",
      project: "Mobile App Development",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthFirst",
      image: "/api/placeholder/100/100",
      rating: 5,
      content:
        "The digital marketing campaign designed by Trikon Innovations exceeded all our KPIs. Their strategic approach and creative solutions helped us achieve 150% growth in just 6 months.",
      project: "Digital Marketing Campaign",
    },
    {
      name: "David Park",
      role: "CTO",
      company: "DataFlow Solutions",
      image: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Trikon's backend development expertise is outstanding. They built a robust API infrastructure that handles millions of requests daily. Their code quality and documentation are top-notch.",
      project: "Backend Infrastructure",
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "DesignHub",
      image: "/api/placeholder/100/100",
      rating: 5,
      content:
        "The UI/UX design work by Trikon is simply brilliant. They understood our brand perfectly and created an intuitive user experience that our customers love. The conversion rates improved dramatically.",
      project: "UI/UX Design",
    },
    {
      name: "James Wilson",
      role: "Operations Manager",
      company: "CloudTech",
      image: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Trikon's DevOps services streamlined our entire development process. Their cloud infrastructure setup and CI/CD pipeline implementation reduced our deployment time by 80%.",
      project: "DevOps & Cloud Solutions",
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Quote className="h-16 w-16 text-blue-600 mr-4" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Client Testimonials
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience working with us.
          </p>
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

      {/* Testimonials Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced our
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-blue-600" />
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Project Type */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                    <CheckCircle className="h-4 w-4" />
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Building className="h-3 w-3" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s create something amazing together and add your story to
            our growing list of satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg">
              Start Your Project
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors text-lg">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
