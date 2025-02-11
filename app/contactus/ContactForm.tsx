"use client";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    age: 0,
    dob: new Date(),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      // Validate form data before submission
      if (
        !formData.name ||
        !formData.email ||
        !formData.company ||
        !formData.message
      ) {
        alert("Please fill in all fields");
        return;
      }

      // Check email validity using a simple regex
      const isValidEmail = formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!isValidEmail) {
        alert("Please enter a valid email address");
        return;
      }

      event.preventDefault();

      try {
        // Send email to subash.lama@gmail.com
        const response = await fetch(`mailto:subash.lama@gmail.com`);
        const body = await response.body();
        body.write(`Thank you for your message!`);
        await body.close();

        alert("Your message was sent successfully!");
        setFormData({
          ...formData,
          submitted: true,
        });
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      event.preventDefault();
    }
  };

  const thanking = document.getElementById("thank-you");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message..."
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <button type="submit" variant="default">
            {formData.submit
              ? "Message submitted successfully!"
              : "Send your message"}
            <button class="mt-4 py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              {formData.submit ? "Submitting..." : "Submit"}
            </button>
          </button>

          <div
            id="thank-you"
            className="mt-4 text-center py-2 px-4 bg-green-100 text-green-800 rounded-md"
          >
            Thank you for your message!
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
