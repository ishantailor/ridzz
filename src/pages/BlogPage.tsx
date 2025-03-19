
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const blogPosts = [
    {
      id: 1,
      title: "What is a Virtual Event and How You Can Make it Successful!",
      date: "June 12, 2024",
      author: "Riddhi Gala",
      excerpt: "Virtual events have become an essential part of the modern business landscape. Learn the key strategies to ensure your virtual event engages attendees and achieves your objectives.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "Virtual Events"
    },
    {
      id: 2,
      title: "5 Little Known Questions to Ask When Hiring an Event Planning Company",
      date: "June 5, 2024",
      author: "Riddhi Gala",
      excerpt: "Choosing the right event planner is crucial for your event's success. Discover the essential questions most clients forget to ask that could make all the difference in your selection process.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Planning Tips"
    },
    {
      id: 3,
      title: "How to Multiply Your Time When Planning an Event",
      date: "May 28, 2024",
      author: "Riddhi Gala",
      excerpt: "Time management is the event planner's most valuable skill. Learn proven strategies to maximize efficiency and accomplish more in your event planning process.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "Productivity"
    },
    {
      id: 4,
      title: "How to Increase Client Retention Through Events!",
      date: "May 22, 2024",
      author: "Riddhi Gala",
      excerpt: "Customer events are powerful tools for building loyalty. Discover how strategically planned events can significantly boost your client retention rates and strengthen relationships.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
      category: "Client Relations"
    },
    {
      id: 5,
      title: "Discover How to Maximize Return at Your Next Sales / Dealer Meet!",
      date: "May 15, 2024",
      author: "Riddhi Gala",
      excerpt: "Sales and dealer meetings represent significant investments. Learn how to structure these events to generate maximum ROI through effective engagement and relationship building.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      category: "Sales Events"
    },
    {
      id: 6,
      title: "Diwali Party Desserts You Can Have at Your Company Diwali Event",
      date: "May 8, 2024",
      author: "Riddhi Gala",
      excerpt: "Elevate your corporate Diwali celebration with authentic and innovative dessert options that will delight attendees and create a memorable cultural experience.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      category: "Cultural Events"
    },
    {
      id: 7,
      title: "Event Ideas to Organize the Most \"Fun and Spooky\" Halloween Event!",
      date: "May 1, 2024",
      author: "Riddhi Gala",
      excerpt: "Create an unforgettable Halloween experience with our creative ideas for decorations, activities, and entertainment that strike the perfect balance between fun and fright.",
      image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e",
      category: "Seasonal Events"
    },
    {
      id: 8,
      title: "Things You Must Know About Event Venues!",
      date: "April 24, 2024",
      author: "Riddhi Gala",
      excerpt: "Venue selection can make or break your event. Discover the critical factors to consider, hidden costs to watch for, and questions to ask before signing a venue contract.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      category: "Venues"
    },
    {
      id: 9,
      title: "The Art of Event Storytelling: Creating Memorable Experiences",
      date: "April 18, 2024",
      author: "Riddhi Gala",
      excerpt: "Learn how to craft compelling narratives that transform ordinary events into immersive experiences your guests will never forget. Master the art of storytelling to elevate your events.",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c",
      category: "Event Design"
    },
    {
      id: 10,
      title: "Sustainable Event Planning: Eco-Friendly Strategies That Impress",
      date: "April 12, 2024",
      author: "Riddhi Gala",
      excerpt: "Discover innovative ways to reduce your event's environmental footprint while creating stunning experiences. From zero-waste catering to digital solutions, sustainability can enhance your brand.",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580",
      category: "Sustainability"
    },
    {
      id: 11,
      title: "Event Technology Trends: The Digital Tools Reshaping the Industry",
      date: "April 5, 2024",
      author: "Riddhi Gala",
      excerpt: "From AI-powered attendee matching to augmented reality experiences, explore the cutting-edge technologies transforming how we plan, execute, and experience events in 2024.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Technology"
    },
    {
      id: 12,
      title: "Color Psychology in Event Design: Influencing Mood and Behavior",
      date: "March 29, 2024",
      author: "Riddhi Gala",
      excerpt: "The colors you choose dramatically impact how attendees feel and interact during your event. Learn the science of color psychology and how to strategically use it in your event design.",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      category: "Event Design"
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically have your newsletter signup logic
      alert(`Thanks for subscribing with ${email}! You'll receive our latest event planning tips.`);
      setEmail('');
    }
  };

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FFFAF5]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block">
            <span className="relative z-10">Event Planning Blog</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1"></span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Insights, inspirations, and expert tips from seasoned event planners to help you create unforgettable experiences that leave lasting impressions on your guests.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:flex">
            <div className="lg:w-1/2 overflow-hidden">
              <img 
                src={`${blogPosts[0].image}?auto=format&fit=crop&w=1200&q=80`} 
                alt={blogPosts[0].title} 
                className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/20 rounded-full"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm text-gray-500 ml-3">{blogPosts[0].date}</span>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {blogPosts[0].author}</span>
                  <Link 
                    to={`/blog/${blogPosts[0].id}`}
                    className="px-5 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:translate-x-1"
                  >
                    Read Featured Post
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 overflow-x-auto sticky top-20 pt-3 pb-3 bg-[#FFFAF5]/90 backdrop-blur-sm z-10"
        >
          {/* <div className="flex gap-2 pb-2">
            {categories.map(category => (
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)}
                className={`inline-block text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.slice(1).map((post) => (
            <motion.div 
              key={post.id} 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={`${post.image}?auto=format&fit=crop&w=800&q=80`} 
                  alt={post.title} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium bg-white/90 text-primary px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-sm font-medium text-white hover:underline block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="font-serif text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">By {post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg p-8 shadow-inner"
        >
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl mb-3">Event Planning Insights</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive event planning tips, industry trends, and creative inspiration delivered directly to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            Join over 5,000 event professionals who receive our updates
          </div>
        </motion.div>

        {/* Event Planning Resources */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <h3 className="font-serif text-2xl text-center mb-8 relative inline-block mx-auto">
            <span className="relative z-10">Event Planning Resources</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/40 -z-10 transform -rotate-1"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h4 className="font-serif text-lg font-semibold mb-2">Event Planning </h4>
              <p className="text-gray-600 text-sm mb-3">
                Tap To Download Our Portfolio 
              </p>
              <a href="https://drive.google.com/file/d/1eSvrZUHwU3McCqa1nR0zKYzsXSmF-6Qn/view?usp=drive_link" className="text-primary text-sm font-medium hover:underline inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">Download Now</a>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h4 className="font-serif text-lg font-semibold mb-2">FAQs for Event Clients</h4>
              <p className="text-gray-600 text-sm mb-3">
                Common questions answered about budgeting, timelines, vendor selection, and more.
              </p>
              <a href="#" className="text-primary text-sm font-medium hover:underline inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">Read FAQs</a>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4 className="font-serif text-lg font-semibold mb-2">Venue Directory</h4>
              <p className="text-gray-600 text-sm mb-3">
                Explore our curated list of exceptional event venues across different locations.
              </p>
              <a href="https://www.google.com/maps/dir//A+-+804,+8th+Floor,+Northern+Supermus,+Bharucha+Road,+SV+Rd,+Dahisar+East,+Maharashtra+400068/@19.2493815,72.7798923,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b1365b4653ab:0xecaa624631d86ef!2m2!1d72.862294!2d19.2493999?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D
              // 
              
              
              #" className="text-primary text-sm font-medium hover:underline inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">Browse Venues</a>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 p-8 bg-accent/50 rounded-lg"
        >
          <h3 className="font-serif text-2xl text-center mb-8">What Event Planners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary/30 rounded-full"></div>
              <div className="text-2xl text-primary mb-4">"</div>
              <p className="text-gray-700 mb-4 italic">
                The blog posts on event technology saved our corporate event. We implemented the exact solutions mentioned and saw significant engagement improvements.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                       alt="Testimonial profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">Yogesh Abhang</p>
                  <p className="text-sm text-gray-500">Corporate Event Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary/30 rounded-full"></div>
              <div className="text-2xl text-primary mb-4">"</div>
              <p className="text-gray-700 mb-4 italic">
                I've saved thousands of dollars using the budget templates from this blog. The practical advice is what sets it apart from other event planning resources.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                       alt="Testimonial profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">Ritik Joshi</p>
                  <p className="text-sm text-gray-500">Wedding Planner</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;