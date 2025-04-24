import React, { useState } from "react";

interface BlogPostProps {
  image: string;
  title: string;
  date: string;
  readTime: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  image,
  title,
  date,
  readTime,
}) => (
  <article className="w-full sm:max-w-[314px] transition-transform duration-300 hover:scale-[1.02]">
    <div className="w-full text-xl sm:text-2xl text-[#343633] font-semibold leading-tight">
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="aspect-[1.78] object-cover w-full rounded-xl hover:scale-105 transition-transform duration-500"
        />
        <h3 className="mt-4 line-clamp-2 min-h-[3rem]">{title}</h3>
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

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 21;
  const maxVisiblePages = 5;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`min-h-7 sm:min-h-9 w-7 sm:w-9 rounded-full ${
            i === currentPage
              ? "bg-[rgba(76,76,76,1)] text-white"
              : "text-[#343633] hover:bg-gray-100"
          } flex items-center justify-center transition-colors duration-200 text-sm sm:text-base`}
        >
          {String(i).padStart(2, "0")}
        </button>
      );
    }

    // For small screens, show fewer pages
    if (window.innerWidth < 640) {
      if (startPage > 1) {
        pages.unshift(
          <React.Fragment key="start-ellipsis">
            <button
              onClick={() => handlePageChange(1)}
              className="min-h-7 w-7 rounded-full text-[#343633] hover:bg-gray-100 flex items-center justify-center text-sm"
            >
              01
            </button>
            {startPage > 2 && (
              <span className="min-h-7 text-lg font-semibold leading-none w-5 flex items-center justify-center">
                ...
              </span>
            )}
          </React.Fragment>
        );
      }

      if (endPage < totalPages) {
        pages.push(
          <span key="end-ellipsis" className="min-h-7 text-lg font-semibold leading-none w-5 flex items-center justify-center">
            ...
          </span>
        );
      }
      
      return pages;
    }

    // For larger screens
    if (startPage > 1) {
      pages.unshift(
        <React.Fragment key="start-ellipsis">
          <button
            onClick={() => handlePageChange(1)}
            className="min-h-9 w-9 rounded-full text-[#343633] hover:bg-gray-100 flex items-center justify-center"
          >
            01
          </button>
          {startPage > 2 && (
            <span className="min-h-9 text-xl font-semibold leading-none w-9 flex items-center justify-center">
              ...
            </span>
          )}
        </React.Fragment>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <React.Fragment key="end-ellipsis">
          {endPage < totalPages - 1 && (
            <span className="min-h-9 text-xl font-semibold leading-none w-9 flex items-center justify-center">
              ...
            </span>
          )}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="min-h-9 w-9 rounded-full text-[#343633] hover:bg-gray-100 flex items-center justify-center"
          >
            {String(totalPages).padStart(2, "0")}
          </button>
        </React.Fragment>
      );
    }

    return pages;
  };

  return (
    <div className="w-full flex flex-wrap items-center gap-2 sm:gap-5 text-base sm:text-lg text-[#343633] font-medium whitespace-nowrap leading-tight justify-center mt-6 sm:mt-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 py-2 sm:py-3 ${
          currentPage === 1 ? "text-[#BCBCBC]" : "text-[#343633] hover:text-[#E92429]"
        } font-semibold text-center transition-colors duration-200`}
      >
        Prev
      </button>
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2.5">
        {renderPageNumbers()}
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-2 sm:py-3 ${
          currentPage === totalPages
            ? "text-[#BCBCBC]"
            : "text-[#343633] hover:text-[#E92429]"
        } text-center transition-colors duration-200`}
      >
        Next
      </button>
    </div>
  );
};

export const BlogGrid = () => {
  // Array of tile-related dummy images
  const tileImages = [
    "https://placehold.co/560x315/e92429/ffffff?text=Kitchen+Tiles",
    "https://placehold.co/560x315/343633/ffffff?text=Bathroom+Tiles",
    "https://placehold.co/560x315/252627/ffffff?text=Floor+Tiles",
    "https://placehold.co/560x315/007acc/ffffff?text=Wall+Tiles",
    "https://placehold.co/560x315/663399/ffffff?text=Designer+Tiles",
    "https://placehold.co/560x315/339966/ffffff?text=Outdoor+Tiles"
  ];

  // Blog post titles related to tiles
  const blogTitles = [
    "Top 10 Kitchen Tile Designs for 2025",
    "How to Choose the Perfect Bathroom Tiles",
    "Durable Floor Tiles for High-Traffic Areas",
    "Modern Wall Tile Patterns for Your Home",
    "Designer Tiles that Transform Your Space",
    "Weather-Resistant Outdoor Tiles Guide"
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto mt-6 sm:mt-10">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <BlogPost
                key={i}
                image={tileImages[i]}
                title={blogTitles[i]}
                date="Feb 26,2025"
                readTime="5 min read"
              />
            ))}
        </div>
      </div>
      <Pagination />
    </section>
  );
};
