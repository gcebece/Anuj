import React, { useState } from "react";

interface VideoCardProps {
  image: string;
  title: string;
  date: string;
  watchTime: string;
  hasPlayButton?: boolean;
  videoUrl?: string;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  image,
  title,
  date,
  watchTime,
  hasPlayButton,
  videoUrl,
  onPlay,
}) => (
  <article className="flex flex-col w-[314px] mx-auto">
    <div className="w-full text-2xl text-[#343633] font-semibold leading-none">
      <div 
        className={`relative w-full overflow-hidden rounded-xl ${hasPlayButton ? "group cursor-pointer" : ""}`}
        onClick={hasPlayButton ? onPlay : undefined}
      >
        <img
          src={image}
          alt={title}
          className="aspect-[1.78] object-cover w-full transition-transform duration-300 group-hover:scale-105"
        />
        {hasPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-white fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        <h3 className="mt-4">{title}</h3>
      </div>
    </div>
    <div className="w-full mt-2">
      <div className="flex items-center gap-[9px] text-base text-[#252627] font-normal">
        <time className="self-stretch">{date}</time>
        <div className="border bg-[#252627] h-6 w-px border-[rgba(37,38,39,1)] border-solid" />
        <span className="self-stretch">{watchTime}</span>
      </div>
      <div className="flex items-center gap-[13px] text-lg text-[#E92429] font-semibold leading-none mt-2">
        <a 
          href="#" 
          className="hover:underline"
          onClick={(e) => {
            e.preventDefault();
            onPlay();
          }}
        >
          Watch more
        </a>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-[#E92429] fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      </div>
    </div>
  </article>
);

// Video player modal component
const VideoModal: React.FC<{ videoUrl: string; onClose: () => void }> = ({ videoUrl, onClose }) => (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
    <div className="relative w-full max-w-4xl">
      <button 
        onClick={onClose}
        className="absolute -top-10 right-0 text-white hover:text-gray-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="aspect-video w-full bg-black">
        <iframe 
          src={videoUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

export const VideoLibrary = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  // Dummy videos with different content and video URLs
  const allVideos = [
    {
      image: "https://placehold.co/314x180/e92429/ffffff?text=Tile+Design",
      title: "Modern Tile Design Trends 2025",
      date: "Feb 26, 2025",
      watchTime: "5 min Watch",
      hasPlayButton: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Sample YouTube embed
    },
    {
      image: "https://placehold.co/314x180/343633/ffffff?text=Installation",
      title: "DIY Tile Installation Guide",
      date: "Mar 15, 2025",
      watchTime: "8 min Watch",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      image: "https://placehold.co/314x180/252627/ffffff?text=Maintenance",
      title: "Tile Maintenance Tips & Tricks",
      date: "Apr 10, 2025",
      watchTime: "4 min Watch",
      hasPlayButton: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      image: "https://placehold.co/314x180/007acc/ffffff?text=Bathroom",
      title: "Bathroom Tile Inspiration Ideas",
      date: "May 5, 2025",
      watchTime: "6 min Watch",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      image: "https://placehold.co/314x180/663399/ffffff?text=Kitchen",
      title: "Kitchen Backsplash Options",
      date: "Jun 20, 2025",
      watchTime: "7 min Watch",
      hasPlayButton: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      image: "https://placehold.co/314x180/339966/ffffff?text=Outdoor",
      title: "Outdoor Patio Tile Selection",
      date: "Jul 15, 2025",
      watchTime: "9 min Watch",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    }
  ];

  // Number of videos to show per page
  const videosPerPage = 3;
  const totalPages = Math.ceil(allVideos.length / videosPerPage);
  
  // Get current page videos
  const currentVideos = allVideos.slice(
    currentPage * videosPerPage, 
    (currentPage + 1) * videosPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const playVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="relative w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-[#343633] text-center text-4xl font-semibold leading-[1.2] mb-12">
          Video Library
        </h2>
        
        {/* Video Grid */}
        <div className="relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
              {currentVideos.map((video, index) => (
                <VideoCard
                  key={index}
                  image={video.image}
                  title={video.title}
                  date={video.date}
                  watchTime={video.watchTime}
                  hasPlayButton={video.hasPlayButton}
                  videoUrl={video.videoUrl}
                  onPlay={() => playVideo(video.videoUrl)}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation arrows - positioned outside the grid */}
          <button
            onClick={handlePrevious}
            className="absolute -left-6 md:left-0 top-1/2 -translate-y-1/2 bg-[#999] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#777] transition-colors duration-200 z-10"
            aria-label="Previous videos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-6 md:right-0 top-1/2 -translate-y-1/2 bg-[#343633] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors duration-200 z-10"
            aria-label="Next videos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Page indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full ${
                currentPage === index ? "bg-[#E92429]" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal videoUrl={activeVideo} onClose={closeVideo} />
      )}
    </section>
  );
};
