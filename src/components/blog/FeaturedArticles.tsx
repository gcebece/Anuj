import React from "react";

interface ArticleProps {
  image: string;
  title: string;
  description?: string;
  date: string;
  readTime: string;
}

const SideArticle: React.FC<ArticleProps> = ({
  image,
  title,
  date,
  readTime,
}) => (
  <article className="w-full">
    <div className="w-full text-2xl text-[#343633] font-medium leading-none">
      <img
        src={image}
        alt={title}
        className="aspect-[1.77] object-contain w-full rounded-md"
      />
      <h3 className="mt-4">{title}</h3>
    </div>
    <div className="flex w-full items-center gap-1.5 text-base text-[#252627] font-normal mt-2">
      <time className="self-stretch my-auto">{date}</time>
      <div className="border bg-[#252627] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(37,38,39,1)] border-solid" />
      <span className="self-stretch my-auto">{readTime}</span>
    </div>
    <a
      href="#"
      className="block self-stretch w-[110px] max-w-full text-xs text-[#E92429] font-semibold leading-none mt-2 hover:underline"
    >
      Read more
    </a>
  </article>
);

export const FeaturedArticles = () => {
  return (
    <section className="pl-[50px] pr-[43px] pb-20">
      <h2 className="self-stretch w-[1332px] max-w-full gap-2.5 text-2xl text-[#343633] font-semibold mt-10 pl-[17px]">
        Featured articles
      </h2>
      <div className="flex w-full gap-10 justify-center flex-wrap mt-10">
        <article className="flex min-w-60 flex-col items-stretch grow shrink w-[1043px]">
          <div className="max-w-full w-[1080px]">
            <div className="w-full text-2xl text-[#343633] font-semibold">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd61df7b71a86807cb8bc655f1faf3ec854c7da?placeholderIfAbsent=true"
                alt="Featured Article"
                className="aspect-[1.78] object-contain w-full rounded-xl"
              />
              <h3 className="mt-[15px]">lorem ipsum</h3>
            </div>
            <p className="text-[#252627] text-base font-normal leading-6 mt-3">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
          </div>
          <div className="flex flex-col items-stretch justify-center mt-2">
            <div className="flex min-h-[30px] items-center gap-[9px] text-base text-[#252627] font-normal">
              <time className="self-stretch my-auto">Feb 26,2025</time>
              <div className="border bg-[#252627] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(37,38,39,1)] border-solid" />
              <span className="self-stretch my-auto">5min read</span>
            </div>
            <a
              href="#"
              className="text-lg text-[#E92429] font-semibold leading-none mt-3 hover:underline"
            >
              Read more
            </a>
          </div>
        </article>
        <div className="flex flex-col items-center justify-center grow shrink w-[149px] gap-8">
          <SideArticle
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/56b803e2ebc50fcd2118faac7c481ebfd513bf8d?placeholderIfAbsent=true"
            title="lorem ipsum"
            date="Feb 26,2025"
            readTime="5 min read"
          />
          <SideArticle
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/44ca6a8216251d204f910fda783f484e2b195cf9?placeholderIfAbsent=true"
            title="lorem ipsum"
            date="Feb 26,2025"
            readTime="5 min read"
          />
          <SideArticle
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/b769fb9ef922a693960fe596580b576228970921?placeholderIfAbsent=true"
            title="lorem ipsum"
            date="Feb 26,2025"
            readTime="5 min read"
          />
        </div>
      </div>
    </section>
  );
};
