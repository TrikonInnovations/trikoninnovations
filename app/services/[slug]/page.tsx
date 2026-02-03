import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { getServiceBySlug, serviceSlugs } from "../services-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (

    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${service.color} text-white`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2g+PC9nPjwvc3ZnPg==')] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
              <Icon className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
              Service
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mt-6 max-w-2xl leading-relaxed">
            {service.heroDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Full description */}
        <section className="mb-20">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
            {service.fullDescription}
          </p>
        </section>

        {/* Why choose us */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Why choose us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} text-white font-bold text-sm mb-4`}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How we work
          </h2>
          <div className="space-y-6">
            {service.process.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 md:gap-8 items-start bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold flex items-center justify-center text-lg md:text-xl`}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            What you get
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {service.deliverables.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5 text-green-600" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section
          className={`rounded-3xl bg-gradient-to-r ${service.color} text-white p-8 md:p-12 text-center`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {service.ctaTitle}
          </h2>
          <p className="text-white/95 text-lg mb-8 max-w-xl mx-auto">
            {service.ctaDescription}
          </p>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
