import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArticleCardProps {
  image: string;
  title: string;
  date: string;
  readTime: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  date,
  readTime,
}) => (
  <article className="w-full sm:w-[314px] mx-auto transition-transform duration-300 hover:scale-[1.02]">
    <div className="text-xl sm:text-2xl text-[#343633] font-semibold leading-snug">
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="aspect-[1.78] object-cover w-full rounded-xl hover:scale-105 transition-transform duration-500"
        />
        <h3 className="mt-4 line-clamp-2 min-h-[3.5rem]">{title}</h3>
      </div>
    </div>
    <div className="w-full max-w-[194px] mt-2">
      <div className="flex w-full items-center gap-[9px] text-sm sm:text-base text-[#252627] font-normal">
        <time className="self-stretch my-auto">{date}</time>
        <div className="border bg-[#252627] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(37,38,39,1)] border-solid" />
        <span className="self-stretch my-auto">{readTime}</span>
      </div>
      <a
        href="#"
        className="block self-stretch w-[110px] max-w-full text-base sm:text-lg text-[#E92429] font-semibold leading-none mt-2 hover:underline transition-all duration-200"
      >
        Read more
      </a>
    </div>
  </article>
);

const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&auto=format&fit=crop",
    title: "How to Choose the Perfect Floor Tiles for Your Madurai Home",
    date: "Feb 26, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&auto=format&fit=crop",
    title: "Anuj Tiles: Wall Tiles Trends for 2025",
    date: "Feb 24, 2025",
    readTime: "4 min read"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop",
    title: "Designing Modern Bathrooms with Anuj Tiles",
    date: "Feb 20, 2025",
    readTime: "7 min read"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?w=800&auto=format&fit=crop",
    title: "Kitchen Tile Patterns That Impress Your Guests",
    date: "Feb 18, 2025",
    readTime: "6 min read"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop",
    title: "Outdoor Tiles Selection Guide for Ramnad Climate",
    date: "Feb 15, 2025",
    readTime: "5 min read"
  }
];

export const LatestArticles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [articlesPerPage, setArticlesPerPage] = useState(3);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Responsive articles per page
  const getArticlesPerPage = (width: number) => {
    if (width < 640) return 1; // Mobile: 1 article
    if (width < 1024) return 2; // Tablet: 2 articles
    return 3; // Desktop: 3 articles
  };
  
  // Update articles per page on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setArticlesPerPage(getArticlesPerPage(width));
    };
    
    handleResize(); // Initialize on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  const handlePrevSlide = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };
  
  const handleNextSlide = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };
  
  // Get current articles to display
  const displayedArticles = articles.slice(
    currentPage * articlesPerPage, 
    Math.min((currentPage + 1) * articlesPerPage, articles.length)
  );

  return (
    <section className="w-full py-8 sm:py-12 md:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#343633] text-center text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-2">
          Latest Articles
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-10">Tile design inspiration from <span className="text-[#E92429] font-medium">Anuj Tiles</span></p>
        
        <div className="relative px-6 md:px-12 lg:px-16">
          {/* Articles Container */}
          <div className={`
            grid
            ${articlesPerPage === 1 ? 'grid-cols-1' : ''}
            ${articlesPerPage === 2 ? 'grid-cols-1 sm:grid-cols-2' : ''}
            ${articlesPerPage === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}
            gap-6 sm:gap-8 mx-auto justify-center
          `}>
            {displayedArticles.map(article => (
              <ArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
          
          {/* Navigation Dots - Mobile & Tablet */}
          <div className="flex justify-center mt-6 gap-2 sm:hidden">
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
          
          {/* Navigation Arrows - Responsive positioning */}
          <div className="flex justify-between items-center mt-6 md:mt-0">
            <button
              onClick={handlePrevSlide}
              className={`aspect-square ${
                currentPage === 0 ? "bg-[#999]" : "bg-[#E92429] hover:bg-[#c91f24]"
              } w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md absolute left-0 top-1/2 -translate-y-1/2 md:-left-5 lg:-left-10`}
              aria-label="Previous slide"
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
            
            <button
              onClick={handleNextSlide}
              className={`aspect-square ${
                currentPage >= totalPages - 1 ? "bg-[#999]" : "bg-[#E92429] hover:bg-[#c91f24]"
              } w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md absolute right-0 top-1/2 -translate-y-1/2 md:-right-5 lg:-right-10`}
              aria-label="Next slide"
              disabled={currentPage >= totalPages - 1}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>
          
          {/* Page Indicator */}
          <div className="hidden sm:flex justify-center mt-8 text-sm text-gray-500">
            <span>{currentPage + 1} of {totalPages}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
