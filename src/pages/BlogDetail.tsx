import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  category: string;
  content?: string;
}

// Define the blogPosts array outside the component to make it accessible throughout the file
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "What is a Virtual Event and How You Can Make it Successful!",
    date: "June 12, 2024",
    author: "Riddhi Gala",
    excerpt: "Virtual events have become an essential part of the modern business landscape. Learn the key strategies to ensure your virtual event engages attendees and achieves your objectives.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Virtual Events",
    content: "Virtual events have transformed how businesses connect with audiences worldwide. Unlike traditional in-person gatherings, virtual events offer unique opportunities for broader reach and deeper engagement when executed properly.\n\nThe key to a successful virtual event lies in thoughtful planning, engaging content, and seamless technical execution. Start by clearly defining your event objectives and understanding your target audience. This will guide all subsequent decisions from platform selection to content creation.\n\nChoose a reliable virtual event platform that offers the features you need - whether that's breakout rooms, networking capabilities, or interactive polls. Test your technology thoroughly before the event to prevent technical issues that could derail the experience.\n\nEngagement is perhaps the biggest challenge in virtual events. Combat digital fatigue by keeping sessions concise, incorporating interactive elements, and providing opportunities for attendees to participate actively rather than passively consuming content.\n\nFinally, don't underestimate the importance of professional production values. Quality audio, video, and visuals significantly impact how your brand is perceived. Consider hiring production specialists if budget allows.\n\nWith careful planning and execution, your virtual event can deliver meaningful connections and valuable experiences that rival or even surpass traditional in-person gatherings."
  },
  {
    id: 2,
    title: "5 Little Known Questions to Ask When Hiring an Event Planning Company",
    date: "June 5, 2024",
    author: "Riddhi Gala",
    excerpt: "Choosing the right event planner is crucial for your event's success. Discover the essential questions most clients forget to ask that could make all the difference in your selection process.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Planning Tips",
    content: "Selecting the right event planning company can make the difference between an ordinary event and an extraordinary one. While most clients focus on pricing and portfolio, there are several critical questions that often go unasked.\n\nFirst, inquire about their contingency planning. How does the company handle unexpected situations? Ask for specific examples of when things went wrong at previous events and how they resolved these issues. This reveals their problem-solving abilities and preparedness.\n\nSecond, understand their vendor relationships. A well-connected event planner can secure preferred pricing and priority service from quality vendors. Ask how they select their vendors and what happens if a vendor cancels at the last minute.\n\nThird, clarify their communication processes. Who will be your point of contact throughout planning and during the event itself? Will you have direct access to the lead planner or will you work with an assistant? Understanding the communication structure prevents frustration later.\n\nFourth, request information about their team structure for your event. How many staff members will be on-site? What are their roles? This ensures adequate coverage for all aspects of your event.\n\nFinally, ask about their post-event evaluation process. How do they measure success? Do they provide detailed reports after the event? This demonstrates their commitment to continuous improvement and accountability.\n\nBy asking these often-overlooked questions, you'll gain deeper insight into how the event planning company operates and whether they're the right fit for your specific needs."
  },
  {
    id: 3,
    title: "How to Multiply Your Time When Planning an Event",
    date: "May 28, 2024",
    author: "Riddhi Gala",
    excerpt: "Time management is the event planner's most valuable skill. Learn proven strategies to maximize efficiency and accomplish more in your event planning process.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Productivity",
    content: "Event planning requires juggling countless details under tight deadlines. To multiply your effective time, you need systems that amplify your productivity without sacrificing quality or attention to detail.\n\nStart by implementing the time multiplication framework: eliminate, automate, delegate, and then focus on what remains. First, ruthlessly eliminate non-essential tasks that don't meaningfully contribute to your event goals. Next, identify repetitive processes that can be automated through templates, checklists, or software solutions.\n\nDelegation is perhaps the most powerful time multiplication strategy. Identify team members' strengths and assign tasks accordingly. Provide clear instructions and expectations, then trust your team to execute while you maintain appropriate oversight.\n\nBatch similar tasks together to minimize context switching, which research shows can reduce productivity by up to 40%. For example, dedicate specific time blocks for vendor communications rather than responding to emails throughout the day.\n\nImplement a digital project management system that centralizes all event information, deadlines, and communications. This reduces time spent searching for information and ensures everyone has access to the latest updates.\n\nPrioritize tasks based on both urgency and importance using the Eisenhower Matrix. This prevents the common trap of letting urgent but unimportant matters consume your day while critical strategic work gets delayed.\n\nFinally, build buffer time into every timeline. Unexpected challenges inevitably arise, and having pre-allocated buffer prevents these surprises from derailing your entire schedule.\n\nBy applying these strategies consistently, you can effectively multiply your available time, allowing you to plan more complex events with less stress and greater success."
  },
  {
    id: 4,
    title: "How to Increase Client Retention Through Events!",
    date: "May 22, 2024",
    author: "Riddhi Gala",
    excerpt: "Customer events are powerful tools for building loyalty. Discover how strategically planned events can significantly boost your client retention rates and strengthen relationships.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    category: "Client Relations",
    content: "Client retention is the lifeblood of sustainable business growth, and strategically executed events can dramatically strengthen these valuable relationships. Well-designed client events create emotional connections that transactional interactions simply cannot match.\n\nThe first step in leveraging events for retention is segmentation. Different client tiers may warrant different types of events or experiences. Your approach for top-tier clients should differ from strategies for newer or smaller accounts.\n\nFocus on creating genuine value through your events. Educational workshops that address your clients' specific challenges position your company as a trusted advisor rather than just a vendor. Exclusive product previews or behind-the-scenes experiences make clients feel specially valued.\n\nPersonalization significantly impacts retention efforts. Use your CRM data to tailor events to client interests and preferences. Something as simple as acknowledging a client's professional milestone during an event can create lasting goodwill.\n\nIncorporate structured and unstructured networking opportunities. Clients who build relationships with your team members and other clients develop multiple connection points to your company, increasing switching costs.\n\nMeasure the impact of your events on retention metrics. Track attendance, engagement during the event, post-event feedback, and most importantly, changes in client behavior after events. Are they more responsive? Do they purchase additional services? Are they referring others?\n\nFinally, develop a year-round strategy rather than hosting isolated events. A consistent cadence of meaningful touchpoints maintains relationship momentum and prevents competitors from making inroads during quiet periods.\n\nBy thoughtfully implementing these strategies, events become not just a marketing expense but a powerful investment in client loyalty and long-term revenue."
  },
  {
    id: 5,
    title: "Discover How to Maximize Return at Your Next Sales / Dealer Meet!",
    date: "May 15, 2024",
    author: "Riddhi Gala",
    excerpt: "Sales and dealer meetings represent significant investments. Learn how to structure these events to generate maximum ROI through effective engagement and relationship building.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    category: "Sales Events",
    content: "Sales and dealer meetings require substantial investment of time, money, and organizational resources. Maximizing returns from these events demands strategic planning focused on concrete business outcomes.\n\nBegin with clearly defined, measurable objectives tied directly to business goals. Rather than vague aims like \"improving relationships,\" establish specific targets such as \"increase dealer orders by 15% compared to last quarter\" or \"secure commitments for the new product line from 80% of attending dealers.\"\n\nDesign your agenda as a strategic journey. The structure should build logically toward your key business objectives, with each session contributing to the overall narrative. Balance informational content with interactive elements that reinforce key messages and drive commitment.\n\nLeverage data and personalization to make the experience relevant to each participant. Pre-event surveys can identify specific challenges dealers are facing, allowing you to address these concerns directly during the meeting. Segment breakout sessions by dealer size, region, or product focus when appropriate.\n\nIntegrate technology thoughtfully to enhance engagement and measure participation. Mobile event apps can facilitate networking, provide easy access to materials, and collect real-time feedback on sessions. Use polling and other interactive tools to maintain energy and gather insights.\n\nTranscend traditional product presentations by demonstrating genuine understanding of your dealers' businesses. Show how your offerings solve their specific challenges and create competitive advantages in their markets. Case studies featuring successful dealers can be particularly powerful.\n\nFinally, implement a structured follow-up process. The days immediately following your event represent a critical window for converting momentum into action. Assign specific team members to follow up with each dealer based on conversations and interests expressed during the event.\n\nBy approaching your sales and dealer meetings with this strategic mindset, you'll transform them from obligatory gatherings into powerful drivers of business growth and partnership."
  },
  {
    id: 6,
    title: "Diwali Party Desserts You Can Have at Your Company Diwali Event",
    date: "May 8, 2024",
    author: "Riddhi Gala",
    excerpt: "Elevate your corporate Diwali celebration with authentic and innovative dessert options that will delight attendees and create a memorable cultural experience.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    category: "Cultural Events",
    content: "Diwali, the Festival of Lights, celebrates new beginnings and the triumph of light over darkness. A thoughtfully curated dessert selection can make your corporate Diwali celebration both authentic and memorable.\n\nTraditional Indian sweets form the foundation of any Diwali dessert table. Include classics like gulab jamun (soft milk solids soaked in rose-scented syrup), jalebi (crispy, syrup-soaked spirals), and barfi (fudge-like sweets in various flavors). These familiar favorites will delight attendees who celebrate Diwali personally while introducing others to authentic traditions.\n\nConsider offering a mix of regional specialties to showcase India's diverse culinary heritage. Mysore pak from South India, sandesh from Bengal, and mohanthal from Gujarat provide a culinary tour of different traditions. Brief description cards can add educational value while helping guests navigate options.\n\nBalance tradition with innovation through fusion desserts that blend Indian flavors with Western formats. Cardamom-infused cheesecake, saffron panna cotta, or rose-pistachio macarons offer familiar formats with distinctive Diwali flavors. These options often appeal to those less familiar with traditional Indian sweets.\n\nAccommodate dietary restrictions without compromising on celebratory spirit. Many traditional Indian sweets are already vegetarian, but consider including vegan, gluten-free, and reduced-sugar options clearly labeled for guests with specific needs.\n\nEnhance the experience with thoughtful presentation. Incorporate elements of traditional Diwali décor like diyas (oil lamps), marigold flowers, and rangoli patterns into your dessert display. Colorful serving dishes and traditional metal platters add authentic visual appeal.\n\nFinally, consider including take-home boxes so attendees can share the celebration with family members. This thoughtful touch extends the goodwill of your event beyond the workplace and honors the tradition of sharing sweets during Diwali.\n\nBy offering this carefully considered dessert selection, your corporate Diwali event will celebrate cultural traditions while creating an inclusive, memorable experience for all attendees."
  },
  {
    id: 7,
    title: "Event Ideas to Organize the Most \"Fun and Spooky\" Halloween Event!",
    date: "May 1, 2024",
    author: "Riddhi Gala",
    excerpt: "Create an unforgettable Halloween experience with our creative ideas for decorations, activities, and entertainment that strike the perfect balance between fun and fright.",
    image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e",
    category: "Seasonal Events",
    content: "Creating the perfect Halloween event requires balancing playful fun with just the right amount of spookiness. The most memorable Halloween experiences engage multiple senses while offering activities appropriate for your specific audience.\n\nSet the tone with atmospheric décor that transforms your venue. Beyond standard pumpkins and cobwebs, consider creating immersive themed areas – perhaps a haunted forest corner with twisted branches and twinkling lights, or an elegant vampire's dining room with vintage candelabras and deep red accents. Lighting dramatically impacts atmosphere; use colored bulbs, projected effects, and strategically placed candles (real or LED) to create ambiance.\n\nDesign interactive activities that encourage participation without forcing it. Escape rooms with Halloween themes, mystery-solving experiences where guests collect clues throughout the event, or creative workshops for crafting take-home items like custom potion bottles all create engagement while respecting different comfort levels with Halloween festivities.\n\nCurate a soundtrack that enhances the atmosphere without overwhelming conversation. Layer ambient sounds (creaking doors, distant howls) beneath carefully selected music. Consider hiring live performers – perhaps a theremin player for eerie melodies or a magician performing macabre illusions.\n\nFood and beverage offerings present opportunities for creativity that guests will eagerly photograph and share. Themed cocktails with dramatic presentations (smoking drinks, unexpected colors, garnishes that tell a story) become talking points. Food stations can incorporate theatrical elements, like a \"mad scientist\" creating instant ice cream using liquid nitrogen.\n\nIncorporate surprises throughout the event to maintain energy and excitement. Scheduled performances, unexpected character appearances, or special effects triggered at key moments create memorable highlights and prevent the experience from becoming static.\n\nFinally, create a signature photo opportunity with professional lighting and thoughtful design. This serves as both entertainment during the event and extends the experience through social sharing afterward.\n\nBy thoughtfully implementing these elements while considering your specific audience's preferences, you'll create a Halloween event that strikes the perfect balance between fun and frightful."
  },
  {
    id: 8,
    title: "Things You Must Know About Event Venues!",
    date: "April 24, 2024",
    author: "Riddhi Gala",
    excerpt: "Venue selection can make or break your event. Discover the critical factors to consider, hidden costs to watch for, and questions to ask before signing a venue contract.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    category: "Venues",
    content: "Venue selection forms the foundation of every successful event, yet many planners underestimate the complexity of this critical decision. Understanding the nuances of venue contracts and operations can prevent costly mistakes and ensure your event achieves its full potential.\n\nBeyond basic considerations like capacity and location, evaluate venues through the lens of your specific event objectives. A space that perfectly accommodates your attendee count might still fail if its layout hinders the networking that's central to your event's purpose. Create a weighted scorecard of venue features based on your event's unique priorities.\n\nVenue contracts often contain hidden restrictions that can impact your event execution. Common limitations include noise ordinances, load-in/load-out time constraints, and approved vendor requirements. Request a comprehensive list of restrictions before signing, and negotiate modifications for any that significantly impact your plans.\n\nUnderstand the venue's staffing model and how it affects your budget. Some venues appear less expensive initially but require you to hire additional staff for basic functions. Others include staffing but limit their responsibilities in ways that necessitate bringing in outside help. Clarify exactly what venue staff will handle and what remains your responsibility.\n\nTechnology infrastructure varies dramatically between venues and can significantly impact attendee experience. Evaluate not just the presence of AV equipment but its quality, compatibility with your needs, and associated costs. For venues without built-in systems, get accurate estimates for bringing in external technology, including power requirements and any union labor costs.\n\nInsurance and liability clauses deserve careful scrutiny. Venues increasingly transfer risk to event organizers through contractual language. Understand exactly what insurance coverage you'll need to secure, damage deposit policies, and specific circumstances that could trigger additional charges.\n\nFinally, investigate the venue's crisis response protocols and how they align with your needs. From medical emergencies to severe weather, understanding how the venue handles unexpected situations – and what responsibilities fall to you – is essential for risk management.\n\nBy thoroughly evaluating these often-overlooked aspects of venue selection, you'll make more informed decisions that support your event objectives while avoiding costly surprises."
  },
  {
    id: 9,
    title: "The Art of Event Storytelling: Creating Memorable Experiences",
    date: "April 18, 2024",
    author: "Riddhi Gala",
    excerpt: "Learn how to craft compelling narratives that transform ordinary events into immersive experiences your guests will never forget. Master the art of storytelling to elevate your events.",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c",
    category: "Event Design",
    content: "Great events tell meaningful stories that resonate with attendees long after the experience ends. As event planners, we're not just coordinating logistics—we're crafting narratives that engage emotions and create lasting memories.\n\nStory-driven events begin with a clear understanding of your audience and the message you want to convey. Ask yourself: What transformation do you want attendees to experience? What emotions should they feel at different stages? What should they remember most vividly?\n\nOnce you've established your core narrative, weave it through every touchpoint of the event journey. From save-the-dates that hint at the story to come, to thoughtfully designed event spaces that physically manifest your narrative, consistency reinforces your message and deepens engagement.\n\nContrast and pacing are essential storytelling elements that translate beautifully to event design. Create moments of high energy followed by contemplative experiences. Juxtapose different environments—perhaps transitioning from a minimalist, technology-focused space to a lush, nature-inspired setting—to emphasize different chapters in your story.\n\nLeverage sensory elements strategically to reinforce your narrative. Custom scents, carefully curated music, textural elements, and even food and beverage selections can all support different aspects of your story. These multisensory touchpoints create richly layered memories that remain vivid long after the event.\n\nPersonalization transforms general narratives into individual stories. Create opportunities for attendees to customize their experience while still remaining within your overarching narrative framework. Interactive elements that respond to individual choices help attendees feel like active participants rather than passive observers.\n\nFinally, design a powerful conclusion that provides both resolution and inspiration. The final moments of an event disproportionately influence how it will be remembered, so craft an ending that reinforces your core message while inspiring the specific actions or mindset shifts you hope to achieve.\n\nBy approaching event design through the lens of storytelling, you create experiences that transcend logistics and timelines to become transformative moments that genuinely impact your attendees."
  },
  {
    id: 10,
    title: "Sustainable Event Planning: Eco-Friendly Strategies That Impress",
    date: "April 12, 2024",
    author: "Riddhi Gala",
    excerpt: "Discover innovative ways to reduce your event's environmental footprint while creating stunning experiences. From zero-waste catering to digital solutions, sustainability can enhance your brand.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580",
    category: "Sustainability",
    content: "Sustainable event planning is no longer just a trend—it's becoming an expectation among attendees and stakeholders alike. Fortunately, eco-conscious choices can actually enhance the quality and creativity of your events while reducing environmental impact.\n\nStart with venue selection, as this decision influences many subsequent sustainability choices. Look for LEED-certified buildings, spaces committed to renewable energy, or venues with robust recycling and composting programs. Consider locations central to most attendees to minimize transportation emissions, or venues accessible by public transit.\n\nRedesign your approach to materials by embracing the circular economy. Rather than single-use decorations, invest in modular, reusable elements that can be reconfigured for different events. When custom elements are necessary, design with eventual repurposing or recycling in mind. Partner with local organizations that can repurpose floral arrangements, donate excess food, or reuse building materials after your event.\n\nDigital technology offers numerous opportunities to reduce paper waste. Beyond basic digital invitations and programs, consider dynamic event apps that update in real-time, eliminating the need for reprints when schedules change. Digital interaction tools can replace printed feedback forms while increasing participation rates.\n\nFood and beverage service presents significant opportunities for sustainable innovation. Partner with caterers committed to seasonal, local sourcing and precise portion control to minimize food waste. Consider plant-forward menus that significantly reduce the carbon footprint of your meals while showcasing creative culinary approaches. Insist on real serviceware rather than disposables, or investigate truly compostable alternatives when reusables aren't practical.\n\nMeasurement is essential for meaningful sustainability efforts. Establish baseline metrics for energy use, waste generation, carbon emissions, and water consumption, then track improvements over time. Many clients now request this data, so robust measurement systems position you as a forward-thinking partner.\n\nFinally, communicate your sustainability efforts thoughtfully. Rather than vague claims about being \"green,\" share specific actions and their measurable impact. Educate attendees about sustainability features in ways that enhance rather than detract from their experience.\n\nBy integrating these approaches, your events can become showcases for innovation that align with evolving values while delivering exceptional experiences."
  },
  {
    id: 11,
    title: "Event Technology Trends: The Digital Tools Reshaping the Industry",
    date: "April 5, 2024",
    author: "Riddhi Gala",
    excerpt: "From AI-powered attendee matching to augmented reality experiences, explore the cutting-edge technologies transforming how we plan, execute, and experience events in 2024.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Technology",
    content: "The event industry is experiencing unprecedented technological transformation, with digital tools reshaping every aspect of the planning process and attendee experience. Understanding these emerging technologies is essential for event professionals seeking to create innovative, engaging experiences.\n\nArtificial intelligence is revolutionizing personalization in events. AI-powered recommendation engines can suggest relevant sessions, exhibitors, or networking opportunities based on attendees' profiles and behavior. Natural language processing enables sophisticated chatbots that provide immediate, personalized responses to attendee questions, reducing staff burden while improving service quality.\n\nAugmented reality overlays digital content onto the physical environment, creating hybrid experiences that engage attendees in novel ways. From interactive venue maps and enhanced product demonstrations to immersive brand activations, AR adds digital layers of information and entertainment without requiring full immersion in virtual reality.\n\nAdvanced event analytics now extend beyond basic attendance metrics to comprehensive engagement measurement. Passive data collection through wearable technology, beacons, and facial analysis provides insights into attendee movement patterns, session engagement levels, and even emotional responses, enabling real-time adjustments to improve experiences.\n\nHybrid event platforms have evolved significantly, moving beyond simple livestreams to create unified experiences for in-person and remote attendees. The most effective platforms facilitate meaningful interaction between physical and virtual participants through shared activities, synchronized networking opportunities, and equivalent access to content and experiences.\n\nRFID and NFC technologies enable seamless, cashless transactions throughout events. Beyond basic payment processing, these systems can facilitate gamification through check-ins, automate lead generation for exhibitors, and provide valuable data on attendee preferences and behavior patterns.\n\nEvent cybersecurity has become a critical consideration as events collect increasing amounts of attendee data. Advanced encryption, biometric authentication, and comprehensive data management protocols protect sensitive information while complying with evolving privacy regulations.\n\nAs these technologies continue to evolve, the most successful event professionals will be those who thoughtfully integrate digital tools to enhance human connections rather than replace them, creating seamless experiences that leverage technology to facilitate more meaningful interactions."
  },
  {
    id: 12,
    title: "Color Psychology in Event Design: Influencing Mood and Behavior",
    date: "March 29, 2024",
    author: "Riddhi Gala",
    excerpt: "The colors you choose dramatically impact how attendees feel and interact during your event. Learn the science of color psychology and how to strategically use it in your event design.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    category: "Event Design",
    content: "Color is one of the most powerful and immediate tools available to event designers, influencing attendees' emotions, perceptions, and behaviors before they even consciously process their surroundings. Strategic use of color psychology can help achieve specific event objectives and create intentional attendee experiences.\n\nRed stimulates energy, passion, and urgency—making it effective for high-energy environments where you want to encourage activity and excitement. However, its intensity means it's best used as an accent rather than a dominant color for most events, as prolonged exposure can increase stress and anxiety levels.\n\nBlue evokes feelings of trust, stability, and professionalism, making it an excellent choice for corporate events, particularly in industries like finance, healthcare, or technology where reliability is paramount. Lighter blues promote calm and communication, while deeper blues convey authority and expertise.\n\nYellow captures attention instantly and stimulates optimism and creativity, making it ideal for innovation-focused events or brainstorming sessions. However, like red, it can overwhelm when overused, potentially increasing anxiety and eye fatigue.\n\nGreen balances environmental associations with perceptions of growth and renewal, making it appropriate for events highlighting sustainability, wellness, or development themes. It reduces stress and promotes equilibrium, helping attendees feel balanced and receptive to new information.\n\nPurple historically connects to luxury and creativity, making it suitable for premium events or those focused on artistic or imaginative themes. Its rarity in nature gives it a distinctive quality that can help branded events stand out in attendees' memories.\n\nBeyond individual colors, consider how color combinations and placement influence perception and navigation. High-contrast combinations direct attention to important information, while color-coding helps attendees intuitively understand different event zones or tracks without relying solely on signage.\n\nFinally, account for cultural variations in color interpretation, particularly for international events. Colors carry different associations across cultures—white signifies purity in Western contexts but represents mourning in some Eastern traditions, for example.\n\nBy thoughtfully incorporating color psychology into your event design strategy, you create environments that subtly guide attendee emotions and behaviors while reinforcing your event's core objectives and themes."
  }
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const foundPost = blogPosts.find(post => post.id === parseInt(id || '0'));
    setPost(foundPost || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <header className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium bg-primary/20 text-primary px-2 py-1 rounded">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">{post.title}</h1>
            <p className="text-gray-600 italic">By {post.author}</p>
          </header>

          <div className="mb-8">
            <img 
              src={`${post.image}?auto=format&fit=crop&w=1200&q=80`} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-serif text-2xl mb-4">Continue Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={`${relatedPost.image}?auto=format&fit=crop&w=500&q=80`} 
                          alt={relatedPost.title} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                        <span className="text-xs text-gray-500">{relatedPost.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;