import React from "react";
import {
  Users,
  Palette,
  Code,
  Database,
  Smartphone,
  Server,
  ArrowRight,
  Zap,
  Linkedin,
  Github,
  Mail,
  Bug,
} from "lucide-react";

function Page() {
  const teamCategories = [
    {
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      color: "from-blue-500 to-blue-600",
      members: [
        {
          name: "Sarah Chen",
          role: "Senior UI/UX Designer",
          expertise: ["User Research", "Prototyping", "Design Systems"],
          experience: "8+ years",
        },
        {
          name: "Alex Rodriguez",
          role: "Visual Designer",
          expertise: ["Brand Identity", "Illustration", "Motion Design"],
          experience: "5+ years",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-green-600" />,
      color: "from-green-500 to-green-600",
      members: [
        {
          name: "Michael Kim",
          role: "Lead Frontend Developer",
          expertise: ["React", "TypeScript", "Next.js"],
          experience: "10+ years",
        },
        {
          name: "Emma Thompson",
          role: "Frontend Developer",
          expertise: ["Vue.js", "CSS", "Accessibility"],
          experience: "4+ years",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      color: "from-purple-500 to-purple-600",
      members: [
        {
          name: "David Park",
          role: "Senior Backend Engineer",
          expertise: ["Node.js", "Python", "Microservices"],
          experience: "12+ years",
        },
        {
          name: "Lisa Wang",
          role: "Backend Developer",
          expertise: ["Java", "Spring Boot", "PostgreSQL"],
          experience: "6+ years",
        },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Server className="h-8 w-8 text-orange-600" />,
      color: "from-orange-500 to-orange-600",
      members: [
        {
          name: "James Wilson",
          role: "DevOps Engineer",
          expertise: ["Kubernetes", "Terraform", "CI/CD"],
          experience: "7+ years",
        },
        {
          name: "Nina Patel",
          role: "Cloud Engineer",
          expertise: ["AWS", "Azure", "Security"],
          experience: "5+ years",
        },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-red-600" />,
      color: "from-red-500 to-red-600",
      members: [
        {
          name: "Carlos Mendez",
          role: "Mobile Team Lead",
          expertise: ["iOS", "Swift", "React Native"],
          experience: "9+ years",
        },
        {
          name: "Sophie Anderson",
          role: "Android Developer",
          expertise: ["Android", "Kotlin", "Jetpack"],
          experience: "6+ years",
        },
      ],
    },
    {
      title: "Quality Assurance",
      icon: <Bug className="h-8 w-8 text-teal-600" />,
      color: "from-teal-500 to-teal-600",
      members: [
        {
          name: "Rachel Foster",
          role: "QA Team Lead",
          expertise: [
            "Test Automation",
            "Performance Testing",
            "Security Testing",
          ],
          experience: "8+ years",
        },
        {
          name: "Marcus Johnson",
          role: "QA Engineer",
          expertise: ["Manual Testing", "API Testing", "Mobile Testing"],
          experience: "5+ years",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-16 w-16 text-blue-600 mr-4" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Meet Our Team
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re a diverse team of passionate professionals, each bringing
            unique expertise and creativity to deliver exceptional digital
            solutions.
          </p>
        </div>
      </div>

      {/* Team Categories */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expertise Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each team member specializes in their domain, ensuring we deliver
              the best possible solutions
            </p>
          </div>

          <div className="space-y-16">
            {teamCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${category.color} p-8 text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {category.icon}
                      <div>
                        <h3 className="text-3xl font-bold mb-2">
                          {category.title}
                        </h3>
                        <p className="text-white/90 text-lg">
                          Creating amazing digital experiences
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-8 w-8 opacity-80" />
                  </div>
                </div>

                {/* Team Members Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">
                              {member.name}
                            </h4>
                            <p className="text-gray-600 font-medium mb-2">
                              {member.role}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Zap className="h-4 w-4" />
                              <span>{member.experience}</span>
                            </div>
                          </div>
                        </div>

                        {/* Expertise Tags */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">
                            Expertise:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-white text-gray-700 text-xs rounded-full border border-gray-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                          <a
                            href="#"
                            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a
                            href="#"
                            className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          <a
                            href="#"
                            className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work with Our Amazing Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss your project and see how our talented team can
            bring your vision to life.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
