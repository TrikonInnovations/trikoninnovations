import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Service not found</h1>
        <p className="text-gray-600 mb-8">
          The service you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          View all services
        </Link>
      </div>
    </div>
  );
}
