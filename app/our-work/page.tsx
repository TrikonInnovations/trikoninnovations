import React from "react";
import Link from "next/link";
import {
  Brain,
  Database,
  Building2,
  FileSearch,
  MessageSquare,
  LayoutDashboard,
  Package,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

function Page() {
  const ragProducts = [
    {
      title: "RAG-Powered Knowledge Assistant",
      description:
        "Enterprise search and Q&A that uses your documents and data. Ask questions in natural language and get accurate answers grounded in your own knowledge base.",
      icon: <FileSearch className="h-10 w-10 text-blue-600" />,
      features: ["Document retrieval", "Semantic search", "Citation-backed answers", "Multi-source RAG"],
      tag: "RAG · AI",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart Document Chat",
      description:
        "Chat with PDFs, contracts, and internal docs using retrieval-augmented generation. Reduces search time and helps teams find information instantly.",
      icon: <MessageSquare className="h-10 w-10 text-violet-600" />,
      features: ["PDF & doc ingestion", "Conversational AI", "Context-aware responses", "Audit trail"],
      tag: "RAG · LLM",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Internal Knowledge Hub",
      description:
        "Centralized AI assistant that indexes wikis, tickets, and runbooks. Delivers precise answers with source links for compliance and trust.",
      icon: <Brain className="h-10 w-10 text-emerald-600" />,
      features: ["Unified knowledge base", "Real-time indexing", "Role-based access", "Slack/Teams integration"],
      tag: "RAG · Enterprise",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const enterpriseProducts = [
    {
      title: "Enterprise ERP Suite",
      description:
        "End-to-end ERP for finance, inventory, procurement, HR, and manufacturing. Streamline operations, reporting, and compliance in one platform.",
      icon: <Building2 className="h-10 w-10 text-amber-600" />,
      features: ["Finance & accounting", "Inventory & supply chain", "HR & payroll", "Manufacturing & production"],
      tag: "ERP",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Unified Business Dashboard",
      description:
        "Single dashboard for KPIs, sales, inventory, and team performance. Real-time analytics and customizable reports for decision-making.",
      icon: <LayoutDashboard className="h-10 w-10 text-indigo-600" />,
      features: ["Real-time analytics", "Custom reports", "Role-based views", "Export & scheduling"],
      tag: "Enterprise",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Procurement & Inventory System",
      description:
        "Purchase orders, vendor management, stock tracking, and reorder automation. Integrated with ERP and accounting for full traceability.",
      icon: <Package className="h-10 w-10 text-rose-600" />,
      features: ["PO & approvals", "Vendor portal", "Stock alerts", "Barcode & batch tracking"],
      tag: "ERP · SCM",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  const highlights = [
    { icon: <Sparkles className="h-5 w-5" />, text: "RAG & LLM-powered intelligence" },
    { icon: <Shield className="h-5 w-5" />, text: "Enterprise-grade security & compliance" },
    { icon: <Zap className="h-5 w-5" />, text: "Scalable for growing teams" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero */}
      <div className="text-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 mb-6">
            <Sparkles className="h-4 w-4" />
            Products we build
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From RAG-powered AI assistants to full-scale enterprise ERP—we build
            products that solve real business problems.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                {h.icon}
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RAG Products */}
      <div className="py-16 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-100 p-2 rounded-xl">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                RAG & AI Products
              </h2>
              <p className="text-gray-600 mt-1">
                Retrieval-augmented generation for smarter search and conversation
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ragProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 mb-4">
                  {product.tag}
                </span>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient} text-white mb-4`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Database className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise / ERP */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-amber-100 p-2 rounded-xl">
              <Building2 className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Enterprise Apps & ERP
              </h2>
              <p className="text-gray-600 mt-1">
                Full-featured business systems for operations, finance, and supply chain
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterpriseProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 mb-4">
                  {product.tag}
                </span>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient} text-white mb-4`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Database className="h-4 w-4 text-amber-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Want something like this for your business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We build custom RAG solutions and enterprise apps tailored to your workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors text-lg inline-flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
