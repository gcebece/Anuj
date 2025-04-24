import React from "react";
import { SearchBar } from "./SearchBar";

export const BlogHeader = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between gap-px text-base font-normal whitespace-nowrap tracking-[-0.18px] pl-[50px] pt-10 pr-[50px]">
        <nav
          className="self-stretch flex items-center gap-[3px] my-auto"
          aria-label="Breadcrumb"
        >
          <div className="self-stretch flex items-center gap-px text-black my-auto">
            <a
              href="/"
              className="self-stretch hover:text-gray-600 transition-colors"
            >
              Home
            </a>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/15dc4804d4aee6ff1a6e3d8e279a509fdfda9f13?placeholderIfAbsent=true"
              alt="Breadcrumb separator"
              className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
            />
          </div>
          <span className="text-[#ED414F] self-stretch my-auto">Blogs</span>
        </nav>
        <SearchBar />
      </div>
      <div className="pl-[50px] pr-[43px] mt-10">
        <h1 className="text-[#343633] text-4xl font-semibold leading-[1.2] max-md:max-w-full">
          Discover everything about tiles.
        </h1>
      </div>
    </header>
  );
};

