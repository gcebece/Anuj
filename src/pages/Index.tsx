import React from "react";
import { Header } from "@/components/layout/Header";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { FeaturedArticles } from "@/components/blog/FeaturedArticles";
import { LatestArticles } from "@/components/blog/LatestArticles";
import { VideoLibrary } from "@/components/blog/VideoLibrary";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Footer } from "@/components/layout/Footer";
import { TileSpecialistForm } from "@/components/TileSpecialistForm";

export default function Index() {
  return (
    <main className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      <BlogHeader />
      <FeaturedArticles />
      <LatestArticles />
      <TileSpecialistForm />
      <div className="flex w-full flex-col items-stretch py-20">
        <BlogCategories />
        <BlogGrid />
      </div>
      <VideoLibrary />
      <Footer />
    </main>
  );
}
