import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "corporate",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, phone, eventType, message } = formData;
    
    // Format message for WhatsApp
    const whatsappMessage = `Hello! I would like to inquire about an event.\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n🎉 Event Type: ${eventType}\n📝 Message: ${message}`;
    
    // Replace with the actual WhatsApp number (include country code, e.g., +919876543210)
    const phoneNumber = "+918779613166";
    
    // WhatsApp API Link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect user to WhatsApp
    window.open(whatsappLink, "_blank");

    // Show success message
    toast.success("Thank you for your response! We'll get in touch soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "corporate",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                Let's create something extraordinary together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                >
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Social Events</option>
                  <option value="social">Cultural Events</option>
                  <option value="concert">Concerts & Entertainment</option>
                  <option value="sports">Sports & Outdoor Events</option>
                  <option value="government">Public & Government Events</option>
                  <option value="education">Educational Events</option>
                  <option value="brand">Brand & Marketing Events</option>
                  <option value="virtual">Virtual & Hybrid Events </option>
                  <option value="other">Other.. </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
