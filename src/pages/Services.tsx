import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, CheckCircle2, ChevronDown } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openService, setOpenService] = useState(null);

  const toggleDropdown = (index) => {
    setOpenService(openService === index ? null : index);
  };

  const services = [
    {
      title: "Corporate Events",
      description: "Professional event planning for business excellence.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      items: [
        "Conferences & Seminars",
        "Business Meetings",
        "Product Launches",
        "Trade Shows & Expos",
        "Corporate Retreats & Team-Building Events",
        "Award Ceremonies",
        "Networking Events",
        "Training & Workshops"
      
      ]
    },
    {
      title: "Social Events",
      description: "Creating magical moments for life's special occasions.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      items: [
        "Weddings & Receptions",
        "Pre-Wedding Rituals (Haldi,Mehndi)",
        "Engagement Parties",
        "Anniversaries",
        "Birthday Parties",
        "Baby Showers & Gender Reveal Parties",
        "Housewarming Parties",
        "Reunions (School, College, Family)"
      ]
    },
    {
      title: "Cultural Events",
      description: "Honoring traditions with respect and elegance.",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
      items: [
        "Festivals & Cultural Celebrations",
        "Religious Ceremonies",
        "Temple Events & Poojas",
        "Community Gatherings"
      ]
    },
    {
      title: "Concerts & Entertainment",
      description: "Bringing entertainment to life with style.",
      image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44",
      items: [
        "Music Festivals & Concerts",
        "Theatre & Live Performances",
        "Stand-Up Comedy Shows",
        "Fashion Shows"
      ]
    },
    {
      title: "Sports & Outdoor Events",
      description: "Managing dynamic outdoor experiences.",
      image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
      items: [
        "Marathons & Races",
        "Sports Tournaments",
        "Adventure & Trekking Events"
      ]
    },
    {
      title: "Public & Government Events",
      description: "Organizing impactful public gatherings.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      items: [
        "Political Rallies",
        "Public Awareness Campaigns",
        "Charity & Fundraising Events",
        "NGO & Social Welfare Events"
      ]
    },
    {
      title: "Educational Events",
      description: "Facilitating knowledge-sharing experiences.",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
      items: [
        "School Events",
        "College Fests",
        "Graduation Ceremonies",
        "Alumni Meets",
        "Science Fairs & Exhibitions"
      ]
    },
    {
      title: "Private & Luxury Events",
      description: "Curating exclusive, high-end experiences.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      items: [
        "Destination Weddings",
        "High-Profile Celebrity Events",
        "VIP Parties & Gala Dinners"
      ]
    },
    {
      title: "Brand & Marketing Events",
      description: "Creating impactful brand experiences.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      items: [
        "Influencer Meetups",
        "Brand Promotions",
        "Store Openings",
        "Mall Activations"
      ]
    },
    {
      title: "Virtual & Hybrid Events",
      description: "Bridging physical and digital experiences.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
      items: [
        "Online Webinars",
        "Virtual Conferences",
        "Hybrid Events (In-person + Virtual)"
      ]
    }
  ];

  const responsibilities = [
    "Venue Selection & Booking",
    "Budget Planning & Management",
    "Catering & Menu Planning",
    "Decor & Theme Design",
    "Entertainment & Performances",
    "Photography & Videography",
    "Invitation & Guest Management",
    "Vendor Coordination",
    "Logistics & Transport",
    "Security & Safety Planning",
    "On-Day Event Execution"
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we create extraordinary experiences tailored to your vision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-100">{service.description}</p>

                    
                  </div>
                  
                </div>
                
                <div className="p-6">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex justify-between items-center text-gray-900 font-semibold py-0 px-1 bg-white rounded-md hover:bg-gray-300 transition"
                  >
                    Our Services <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openService === index ? "rotate-180" : ""}`} />
                  </button>

                  {openService === index && (
                    <ul className="mt-4 space-y-2 transition-all duration-300">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

<Link
                    to="/contact"
                    className="mt-6 inline-flex items-center text-gold hover:text-gold-dark transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;