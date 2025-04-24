import React, { useState } from "react";
import { Search, Mic, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!categoryMenuOpen);
  };

  return (
    <header className="w-full py-2 relative">
      <div className="w-full px-0 mx-0">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 px-4">
          {/* Mobile Menu Button (visible only on small screens) */}
          <button 
            className="lg:hidden text-[#ED414F] p-1" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <img
            data-lov-id="src\components\layout\Header.tsx:11:10"
            data-lov-name="img"
            data-component-path="src\components\layout\Header.tsx"
            data-component-line="11"
            data-component-file="Header.tsx"
            data-component-name="img"
            data-component-content="%7B%22className%22%3A%22h-16%20w-auto%20my-auto%20object-contain%22%7D"
            src="/anuj logo.png"
            alt="Anuj Tiles Madurai & Ramnad"
            className="h-10 sm:h-12 md:h-16 w-auto my-auto object-contain"
          />

          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#ED414F] font-medium">
              TILE VISUALIZER
            </a>
            <a href="#" className="text-gray-700 hover:text-[#ED414F] font-medium">
              GET CATALOG
            </a>
            <a href="#" className="text-gray-700 hover:text-[#ED414F] font-medium">
              CONTACT US
            </a>
          </nav>

          {/* Search Bar (hidden on very small screens) */}
          <div className="hidden sm:block flex-1 max-w-xl relative">
            <Input
              type="text"
              placeholder="search bar"
              className="w-full pl-4 pr-12 py-2 rounded-full border-2 border-[#F1707B] focus:border-[#F1707B]"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button aria-label="Voice search" className="text-gray-400 hover:text-[#ED414F]">
                <Mic className="h-5 w-5" />
              </button>
              <button aria-label="Search" className="text-gray-400 hover:text-[#ED414F]">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Action Buttons (simplified on mobile) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search button (visible only on very small screens) */}
            <button aria-label="Search" className="sm:hidden text-[#ED414F] hover:opacity-80">
              <Search className="h-6 w-6" />
            </button>
            
            <button 
              aria-label="Favorites"
              className="relative text-[#ED414F] hover:opacity-80"
            >
              <Heart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              aria-label="Shopping cart"
              className="relative text-[#ED414F] hover:opacity-80"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu (hidden by default) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md absolute z-50 left-0 right-0 py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-[#ED414F] font-medium py-2 border-b border-gray-100">
                TILE VISUALIZER
              </a>
              <a href="#" className="text-gray-700 hover:text-[#ED414F] font-medium py-2 border-b border-gray-100">
                GET CATALOG
              </a>
              <a href="#" className="text-gray-700 hover:text-[#ED414F] font-medium py-2">
                CONTACT US
              </a>
            </nav>
          </div>
        )}

        {/* Secondary Navigation - Category Bar */}
        <div className="relative">
          {/* Mobile Category Toggle */}
          <button 
            onClick={toggleCategoryMenu}
            className="md:hidden w-full flex items-center justify-center py-2 bg-[#F1707B] text-white"
          >
            <span>Categories</span>
            <span className="ml-2">{categoryMenuOpen ? '▲' : '▼'}</span>
          </button>
          
          {/* Categories - Desktop always visible, mobile only when toggled */}
          <nav className={`
            ${categoryMenuOpen ? 'flex' : 'hidden'} md:flex
            flex-col md:flex-row items-start md:items-center md:justify-center
            md:space-x-4 lg:space-x-8 border-t border-b py-2 bg-[#F1707B]
            overflow-x-auto whitespace-nowrap max-w-full px-4
          `}>
            <a href="#" className="text-white hover:text-gray-200 py-2 md:py-0 w-full md:w-auto">
              ALL PRODUCT
            </a>
            <a href="#" className="text-white hover:text-gray-200 py-2 md:py-0 w-full md:w-auto">
              PRODUCT
            </a>
            <a href="#" className="text-white hover:text-gray-200 py-2 md:py-0 w-full md:w-auto">
              CUSTOMIZED TILE
            </a>
            <a href="#" className="text-white hover:text-gray-200 py-2 md:py-0 w-full md:w-auto">
              ABOUT US
            </a>
            <a href="#" className="text-white hover:text-gray-200 py-2 md:py-0 w-full md:w-auto">
              SERVICE AND SUPPORT
            </a>
            <a href="#" className="text-white hover:text-gray-200 py-2 md:py-0 w-full md:w-auto">
              CUSTOMER WALL
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
