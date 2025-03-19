import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  const reelVideos = [
    {
      id: 1,
      title: "Womaniye Band",
      description: "Womaniye Band – Unleashing music, power, and unstoppable vibes!",
      videoUrl: "https://www.instagram.com/reel/DHIw0zpKR8o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
      thumbnailUrl: "https://i.pinimg.com/736x/c1/d4/41/c1d44102cf4390daf9f4779178902380.jpg",
      type: "instagram",
    },
    {
      id: 2,
      title: "Kinjal Deva",
      description: "Kinjal Dave live in concert — an unforgettable night of music and entertainment!",
      videoUrl: "https://www.instagram.com/reel/DHIw0zpKR8o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
      thumbnailUrl: "https://pbs.twimg.com/media/EMPyVtEVAAA_3zs.jpg:large",
      type: "instagram",
    },
    {
      id: 3,
      title: "Conference Event",
      description: "Join us for a power-packed conference designed to inspire, connect, and drive success!",
      videoUrl: "https://www.instagram.com/reel/DGxEfBRKrln/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
      thumbnailUrl: "https://i.pinimg.com/736x/e3/f6/39/e3f6392ab5628ed241d831697492cbac.jpg",
      type: "instagram",
    },
    {
      id: 4,
      title: "Haldi ",
      description: "Haldi Magic for the bride & groom!",
      videoUrl: "https://www.instagram.com/reel/DGz0PPxqAY1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
      thumbnailUrl: "https://i.pinimg.com/736x/60/eb/66/60eb66152499aba4a2f152bf3bc5dbfc.jpg",
      type: "instagram",
    },
    {
      id: 5,
      title: "Birthday",
      description: "Celebrate your day with joy & memories!",
      videoUrl: "https://www.instagram.com/reel/DG4y01FKMRr/?igsh=MWlkM2kwMGlzaTk5MQ%3D%3D",
      thumbnailUrl: "https://www.fnp.com/images/pr/l/v20210623021345/birthday-balloon-decor-for-husband_1.jpg",
      type: "instagram",
    }
  ];

  const events = [
    {
      title: "Tech Conference 2023",
      description: "Annual technology conference featuring industry leaders and innovative discussions",
      image: "https://i.pinimg.com/736x/ff/55/ca/ff55ca25f210bc0747dbbf930392af6b.jpg",
      type: "Corporate",
    },
    {
      title: "Wedding",
      description: "Elegant destination wedding celebration with timeless romantic touches",
      image: "https://i.pinimg.com/736x/3f/72/54/3f72540970639a7c7184528b036d0ecd.jpg",
      type: "Social",
    },
    {
      title: "Product Launch Expo",
      description: "Exclusive product showcase event with interactive demonstrations",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      type: "Corporate",
    },
    {
      title: "Team Building Retreat",
      description: "Corporate retreat focused on team bonding and strategic planning",
      image: "https://i.pinimg.com/736x/5d/be/e9/5dbee904477436b0e482c472727ba79d.jpg",
      type: "Corporate",
    },
    {
      title: "Annual Awards",
      description: "Prestigious ceremony celebrating industry achievements and excellence",
      image: "https://i.pinimg.com/736x/fe/da/14/feda14891885695fb6edcce5c98ede4e.jpg",
      type: "Corporate",
    },
    {
      title: "Cultural Festival",
      description: "Vibrant celebration of diverse traditions and cultural performances",
      image: "https://i.pinimg.com/736x/2c/14/9a/2c149a5e2c295ccf50988553d56923aa.jpg",
      type: "Cultural",
    },
    {
      title: "Music Festival",
      description: "Multi-stage music event featuring top artists and emerging talents",
      image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44",
      type: "Entertainment",
    },
    {
      title: "Charity Fundraiser",
      description: "Impactful fundraising event supporting community initiatives",
      image: "https://media.istockphoto.com/id/863105740/photo/childrens-sports-team-charity-drive-for-donations-local-disaster-relief.jpg?s=612x612&w=0&k=20&c=FyCwE77TifwASnpyRS00B0xnS0fkiLVFSq-wZOWBe8I=",
      type: "Public",
    },
    {
      title: "Fashion Show",
      description: "High-end fashion showcase featuring leading designers and trends",
      image: "https://5.imimg.com/data5/FF/EJ/IG/GLADMIN-64046641/selection-011-500x500.png",
      type: "Entertainment",
    },
    {
      title: "Virtual Conference",
      description: "Interactive online event connecting global participants seamlessly",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
      type: "Virtual",
    },
    {
      title: "Religious Ceremony",
      description: "Sacred traditional ceremony with authentic cultural elements",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rlZVUEZOd6xkghAY298c0A-rCbp1JdJFiw&s",
      type: "Cultural",
    },
    {
      title: "Brand Activation",
      description: "Innovative brand experience event with consumer engagement",
      image: "https://media.licdn.com/dms/image/C4E12AQEAC_SvuCfBnQ/article-cover_image-shrink_600_2000/0/1611656476402?e=2147483647&v=beta&t=wCIYyHxegOqwB6W7YRn9GG3h5uRNIs8KHa1XxbySa28",
      type: "Marketing",
    },
    {
      title: "College Festival",
      description: "Dynamic student-led event showcasing talents and creativity",
      image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d",
      type: "Educational",
    },
  ];

  const renderVideoContent = (reel) => {
    if (reel.type === "youtube") {
      return (
        <iframe 
          className="w-full h-full"
          src={reel.videoUrl} 
          title={reel.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      );
    } else if (reel.type === "instagram") {
      return (
        <div className="relative w-full h-full">
          <img 
            src={reel.thumbnailUrl} 
            alt={reel.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href={reel.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black/70 hover:bg-black/90 text-white font-medium py-2 px-4 rounded-full flex items-center gap-2 transition-colors"
            >
              Watch on Instagram <ExternalLink size={16} />
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-10 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Festivity Browser
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Explore our collection of exceptional events and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Reels section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Event Reels</h2>
          
          <Carousel className="mx-auto">
            <CarouselContent>
              {reelVideos.map((reel) => (
                <CarouselItem key={reel.id} className="md:basis-2/3 lg:basis-3/4 mx-auto">
                  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                    <AspectRatio ratio={16/7}>
                      {renderVideoContent(reel)}
                    </AspectRatio>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{reel.title}</h3>
                      <p className="text-gray-300">{reel.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 text-white" />
            <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 text-white" />
          </Carousel>
        </div>
      </section>

      {/* Events carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
          
          <Carousel className="mx-auto">
            <CarouselContent>
              {events.slice(0, 6).map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <AspectRatio ratio={16/10}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end">
                      <span className="text-white text-sm font-medium mb-2">{event.type}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-200 text-sm">{event.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </section>

      {/* All events grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">All Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AspectRatio ratio={16/9}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end">
                  <span className="text-white text-sm font-medium mb-2">{event.type}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-200 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;