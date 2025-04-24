import React, { useState } from "react";

interface CategoryButtonProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, active, onClick }) => (
  <button
    className={`self-stretch px-2.5 py-1.5 sm:py-1 rounded-[35px] border-2 text-sm sm:text-base ${
      active
        ? "bg-[rgba(76,76,76,1)] text-white border-[rgba(153,153,153,1)]"
        : "bg-white text-[#343633] border-[rgba(228,231,233,1)]"
    } hover:opacity-90 transition-colors`}
    onClick={onClick}
  >
    {label}
  </button>
);

// Sample blog data
const blogData = [
  { id: 1, title: "The Complete Guide to Floor Tiles", category: "Floor Tiles" },
  { id: 2, title: "Modern Wall Tile Designs", category: "Wall Tiles" },
  { id: 3, title: "How to Choose Countertop Materials", category: "Counter top" },
  { id: 4, title: "Bold Color Choices for Your Kitchen", category: "Colours" },
  { id: 5, title: "Pattern Mixing in Bathroom Design", category: "Pattern" },
  { id: 6, title: "Floor Tiles for High Traffic Areas", category: "Floor Tiles" },
  { id: 7, title: "Contemporary Wall Tile Trends", category: "Wall Tiles" },
  { id: 8, title: "Maintaining Your Tile Countertops", category: "Counter top" },
];

export const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Floor Tiles");
  
  const categories = [
    "Floor Tiles", 
    "Wall Tiles", 
    "Counter top", 
    "Colours", 
    "Pattern"
  ];
  
  // Filter blog posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? blogData
    : blogData.filter(post => post.category === activeCategory);
    
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // You could emit an event here or use context to notify other components
    console.log(`Category changed to: ${category}`);
    console.log(`Found ${filteredPosts.length} posts in this category`);
  };

  return (
    <section className="flex w-full flex-col items-stretch px-4 sm:px-6 md:px-10 lg:px-[100px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#343633]">
        Explore Your Interests
      </h2>
      <div className="w-full max-w-4xl text-base font-normal mt-6 md:mt-10">
        <div className="flex w-full items-center gap-2 sm:gap-3 md:gap-5 flex-wrap">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => handleCategoryChange(category)}
            />
          ))}
        </div>
        
        <div className="mt-4 sm:mt-6">
          <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base">
            {filteredPosts.length} posts in {activeCategory}
          </p>
          <ul className="space-y-1 sm:space-y-2">
            {filteredPosts.map(post => (
              <li key={post.id} className="border-l-4 border-[#343633] pl-3 py-1 text-sm sm:text-base">
                <a href="#" className="text-[#343633] hover:text-[#E92429] line-clamp-1">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
