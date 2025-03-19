import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, X, Calendar, MapPin, Users, Camera, Music, Gift } from "lucide-react";

const Index = () => {
  // State and refs
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Background images for slider
  const backgroundImages = [
    "https://i.pinimg.com/736x/75/d9/8c/75d98c50342f812ca1a4ac9825e5d1c8.jpg",
    "https://i.pinimg.com/736x/a4/9a/c8/a49ac8fee5a2621b18c02a8a64524dbf.jpg",
    "https://i.pinimg.com/736x/04/f1/92/04f192c7c5fa6172a0e671ae1e402c08.jpg"
  ];
  
  // Auto transition background images
  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(backgroundInterval);
  }, []);
  
  // Handle scroll effects
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Reveal animations on scroll
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isInView) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500); // Initial check
    
    // Auto-rotate testimonials on mobile
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);
  
  // Data
  const galleries = [
    {
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
      title: "Social Events",
      icon: <Users size={20} className="text-gold" />,
      description: "Birthday parties, anniversaries, and social gatherings"
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      title: "Dream Weddings",
      icon: <Gift size={20} className="text-gold" />,
      description: "From intimate ceremonies to grand celebrations"
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
      title: "Corporate Events",
      icon: <Calendar size={20} className="text-gold" />,
      description: "Conferences, team building, and product launches"
    },
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
      title: "Special Celebrations",
      icon: <Camera size={20} className="text-gold" />,
      description: "Custom events tailored to your unique vision"
    },
  ];
  
  const testimonials = [
    {
      name: "Sejal Patil",
      role: "Bride",
      content: "Ridz Events made our dream wedding come true. Every detail was perfect, and our guests are still talking about it months later!",
      rating: 5,
    },
    {
      name: "Vighnesh Solkar",
      role: "Corporate Client",
      content: "Professional, creative, and extremely organized. Their attention to detail transformed our company event into something truly special.",
      rating: 5,
    },
    {
      name: "Lav Khandelwal",
      role: "Birthday Celebration",
      content: "They turned our vision into reality. An amazing experience from start to finish, with impeccable service every step of the way.",
      rating: 4,
    },
  ];

  const services = [
    {
      title: "Venue Selection",
      icon: <MapPin />,
      description: "Finding the perfect location that matches your vision and requirements."
    },
    {
      title: "Event Design",
      icon: <Camera />,
      description: "Creating stunning visual experiences through decor, lighting, and themes."
    },
    {
      title: "Entertainment",
      icon: <Music />,
      description: "Coordinating music, performances, and activities to engage your guests."
    },
    {
      title: "Catering",
      icon: <Gift />,
      description: "Exquisite food and beverage options tailored to your preferences."
    }
  ];

  // Parallax style
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.2}px)`,
  };

  return (
    <div className="overflow-hidden">
      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="glass-card bg-white/90 p-8 rounded-xl max-w-md w-full mx-4 shadow-3d animate-scale-up">
            <div className="relative">
              <button 
                className="absolute -right-2 -top-2 rounded-full p-1 bg-white/90 shadow-md hover:bg-white transition-all duration-300" 
                onClick={() => setShowWelcomeModal(false)}
              >
                <X size={18} className="text-gray-800" />
              </button>
              
              <div className="space-y-4">
                <div className="h-1 w-12 bg-gold rounded-full mx-auto"></div>
                <h2 className="text-2xl font-bold text-center text-gray-900 font-playfair">Welcome to Ridz Events</h2>
                
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop"
                    alt="Welcome to Ridz Events" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <p className="text-center text-gray-700 pt-2">
                  We transform visions into extraordinary experiences. Discover how we can make your next event unforgettable.
                </p>
                
                <button 
                  onClick={() => setShowWelcomeModal(false)}
                  className="w-full py-3 rounded-lg bg-gold hover:bg-gold-dark text-white font-medium transition-colors duration-300 flex items-center justify-center"
                >
                  Explore Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className=" relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background image slider */}
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1500"
            style={{
              backgroundImage: `url('${image}')`,
              filter: "brightness(0.4)",
              opacity: currentBackgroundIndex === index ? 1 : 0,
              ...parallaxStyle
            }}
          />
        ))}
        
        {/* Overlay gradients and effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>
        
        {/* Floating particles effect */}
        <div className="absolute w-64 h-64 bg-gold/10 rounded-full -top-20 -left-20 blur-3xl animate-float z-10"></div>
        <div className="absolute w-72 h-72 bg-gold/5 rounded-full bottom-20 -right-20 blur-3xl animate-float z-10" style={{animationDelay: "2s"}}></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-7xl font-playfair font-bold text-white mb-6 text-shadow animate-fade-down tracking-tight leading-tight">
              Creating <span className="text-gold">Unforgettable</span> Moments
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide animate-fade-up opacity-90 max-w-2xl mx-auto">
              Your Event, Our Passion — Where Vision Meets Flawless Execution
            </p>
            
            <div className="animate-fade-up" style={{animationDelay: "0.3s"}}>
              <Link
                to="/services"
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden bg-gold text-white rounded-full font-medium hover:bg-gold/90 transition-all duration-500"
              >
                <span className="absolute right-0 left-0 inset-y-0 translate-x-0 group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-white/0 via-white/20 to-white/0"></span>
                <span className="relative flex items-center z-10">
                  Explore Our Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </Link>
            </div>
          </div>
          
          {/* Slider indicators */}
          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-400 ${
                  index === currentBackgroundIndex ? 'bg-gold w-6' : 'bg-white/40'
                }`}
                onClick={() => setCurrentBackgroundIndex(index)}
              />
            ))}
          </div>
          
          {/* Scroll indicator */}
          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-up" style={{animationDelay: "0.6s"}}>
            <span className="text-white/60 text-sm mb-2">Scroll to discover</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1.5 h-1.5 bg-white/80 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div> */}
        </div>
      </section>
      
      {/* Services Section (New) */}
      <section 
        ref={servicesRef} 
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 reveal transform opacity-0">
            <div className="h-1 w-16 bg-gold rounded-full mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 tracking-tight">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail matters when creating an unforgettable event experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-8 hover:shadow-3d transition-all duration-500 reveal transform opacity-0 translate-y-10 hover:translate-y-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Event Gallery Section */}
      <section className="py-24 bg-gradient-elegant" ref={galleryRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 reveal transform opacity-0">
            <div className="h-1 w-16 bg-gold rounded-full mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 tracking-tight">
              Our Latest Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our world of extraordinary celebrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {galleries.map((item, index) => (
              <div
                key={index}
                className="gallery-item group h-80 relative overflow-hidden rounded-xl shadow-3d reveal transform transition-all duration-700 opacity-0 translate-y-10"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveGalleryIndex(index)}
                onMouseLeave={() => setActiveGalleryIndex(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 scale-100"
                />
                
                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeGalleryIndex === index 
                      ? 'bg-gradient-to-t from-black/80 via-black/30 to-black/10' 
                      : 'bg-gradient-to-t from-black/60 via-black/20 to-black/10'
                  }`}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-500">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      {item.icon}
                    </div>
                    <h3 
                      className={`text-white text-2xl font-playfair font-semibold transition-all duration-500 ${
                        activeGalleryIndex === index ? 'translate-y-0' : 'translate-y-2'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  
                  <div 
                    className={`transform transition-all duration-500 opacity-0 translate-y-4 ${
                      activeGalleryIndex === index ? 'opacity-100 translate-y-0' : ''
                    }`}
                  >
                    <div className="h-0.5 w-10 bg-gold mb-3"></div>
                    <p className="text-white/90 text-sm mb-4">
                      {item.description}
                    </p>
                    {/* <Link 
                      to={`/events/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3 rounded-full bg-white/80 backdrop-blur text-gray-900 shadow-sharp hover:shadow-elegant hover:bg-white transition-all duration-300"
            >
              <span>View All Events</span>
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={aboutRef} className="py-28 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-tr from-gold/10 to-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-gold/10 to-gold/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              className="space-y-6 reveal transform opacity-0 translate-x-10"
            >
              <div className="space-y-2">
                <div className="h-1 w-16 bg-gold rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 tracking-tight">
                  About Ridz Events
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of experience in event planning and management, we specialize in creating 
                bespoke experiences that leave lasting impressions. From corporate gatherings to 
                destination weddings, we handle every detail with precision and creativity.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of dedicated professionals works tirelessly to transform your vision into 
                reality, ensuring that every event is unique, memorable, and flawlessly executed.
              </p>
              
              <div className="pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                >
                  Explore Us
                </Link>
              </div>
            </div>
            
            <div 
              className="reveal transform opacity-0 -translate-x-10"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-48 h-48 border border-gold/20 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/20 rounded-lg"></div>
                
                {/* Main image */}
                <div className="relative z-10 rounded-lg overflow-hidden shadow-3d">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                    alt="Ridz Events Planning"
                    className="w-full h-[500px] object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between">
                    <div className="text-white">
                      <div className="text-4xl font-bold font-playfair">300+</div>
                      <div className="text-white/80 text-sm">Events Completed</div>
                    </div>
                    <div className="text-white">
                      <div className="text-4xl font-bold font-playfair">98%</div>
                      <div className="text-white/80 text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 reveal transform opacity-0">
            <div className="h-1 w-16 bg-gold rounded-full mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          
          {/* Desktop view - Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card glass-card p-8 rounded-2xl reveal opacity-0 translate-y-10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold" fill="#D4AF37" />
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-2 text-6xl text-gold/20 font-serif">"</div>
                  <p className="relative z-10 text-gray-700 italic leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-6xl text-gold/20 font-serif">"</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold/20 to-gold/40 flex items-center justify-center text-gold font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view - Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 glass-card p-6 rounded-2xl"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-gold" fill="#D4AF37" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic leading-relaxed mb-6">
                      {testimonial.content}
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold/20 to-gold/40 flex items-center justify-center text-gold font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonialIndex ? 'bg-gold w-6' : 'bg-gold/30'
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6 reveal transform opacity-0">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto reveal transform opacity-0" style={{animationDelay: "100ms"}}>
            Contact us today to start planning your next extraordinary celebration
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-white rounded-full font-medium hover:bg-gold-dark transition-colors duration-300 shadow-lg hover:shadow-xl reveal transform opacity-0"
            style={{animationDelay: "200ms"}}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
