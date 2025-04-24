import React from "react";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="w-full sm:w-[221px] mb-6 sm:mb-0">
    <h3 className="text-[#F1F1F1] text-base sm:text-lg font-medium leading-tight">
      {title}
    </h3>
    <div className="flex flex-col text-xs text-[#999] font-normal mt-3 sm:mt-5">
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="self-stretch mt-1 first:mt-0 hover:text-white transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-[#343633] w-full px-4 py-10 sm:px-6 md:px-10 lg:p-[100px]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          <FooterColumn
            title="Choose Tiles by Area"
            links={[
              "Kitchen Tiles",
              "Bathroom Tiles",
              "Outdoor Tiles",
              "Living Hall Tile",
              "Bedroom Tiles",
              "Step Tile",
              "Terrance Tile",
              "Parking tile",
            ]}
          />
          <FooterColumn
            title="Choose Tiles by Application"
            links={[
              "Wall Tiles",
              "Floor Tiles",
              "Parking Tiles",
              "Cool roof Tiles",
              "Exterior Wall Tiles",
            ]}
          />
          <FooterColumn
            title="Choose Tiles by Style"
            links={[
              "Granite Tiles",
              "Wood Tiles",
              "Marble Tiles",
              "Stone Tiles",
              "Metallic Tiles",
            ]}
          />
          <FooterColumn
            title="Choose Tiles by Color"
            links={["-", "-", "-", "-", "-"]}
          />
          <FooterColumn
            title="Choose Tiles by Size"
            links={[
              "300*300mm",
              "450*300mm",
              "600*300mm",
              "600*600mm",
              "900*600mm",
              "1200*600mm",
              "1600*800mm",
              "1800*1200mm",
              "2400*800mm",
              "2400*1200mm",
              "3150*1600mm",
            ]}
          />
          <FooterColumn
            title="Choose Tiles by Finish"
            links={[
              "Matt Finish",
              "Glossy Finish",
              "Sugar Finish Tiles",
              "Hi-Glossy Finish",
            ]}
          />
          <FooterColumn
            title="Others"
            links={[
              "sanitary ware - Health ware",
              "Fittings",
              "Bath Tubs",
              "Imported Sanitary ware",
              "Glass Bowl & Mirrors",
              "LED Mirrors",
              "Corner & Step Beadings",
              "Border Tiles",
              "Vanities",
              "Manhole Cover",
              "Water Tank",
              "Stainless Steel Sinks",
              "Handmade Sink",
              "Quartz Sinks",
              "Imported Sinks",
              "Grouts - Joint Fillers",
              "Epoxy Grout",
              "Spacers 3mm | 4mm | 5mm | 6mm",
            ]}
          />
          <FooterColumn
            title="Other Tiles"
            links={[
              "Picture Tiles",
              "Customized Tiles",
              "Handmade Tiles",
              "Rangoli Tiles",
            ]}
          />
          <FooterColumn
            title="Corporate"
            links={["About Us", "Events & Article", "Blogs"]}
          />
        </div>
      </div>
      
      <div className="border-t-[color:var(--text-white-fd,#FFF)] w-full mt-8 sm:mt-11 pt-5 border-t-2 border-solid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="font-medium w-full">
            <div className="w-full">
              <h3 className="text-white text-base sm:text-lg leading-tight">Headquarters</h3>
              <address className="self-stretch w-full text-xs sm:text-sm text-[rgba(208,208,208,1)] tracking-[-0.15px] leading-[21px] mt-3 sm:mt-5 not-italic">
                Anuj Tiles Mall, Thoppur,
                <br />
                Madurai, Tamilnadu - 625008.
                <br />
                Contact us - **********
                <br />
                Email-
              </address>
            </div>
          </div>
          
          <div className="w-full">
            <h3 className="text-[#F1F1F1] text-base sm:text-lg font-medium leading-tight">
              Policy
            </h3>
            <div className="flex flex-col text-xs text-[#999] font-normal mt-3 sm:mt-5">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="mt-1 hover:text-white transition-colors">
                Delivery Policy
              </a>
              <a href="#" className="mt-1 hover:text-white transition-colors">
                Return & Exchange Policy
              </a>
            </div>
          </div>
          
          <div className="w-full">
            <h3 className="text-white text-base sm:text-lg font-medium leading-tight">
              Connect
            </h3>
            <div className="flex w-full items-center gap-4 mt-3 sm:mt-5">
              {[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/15a2c370f84b0b4246b5317673a810d9d115debc?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/608ff52fbe0b9d548ce0d093a0e80bbf7d4eec5c?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/8a4b109d21d07f3cb6e2eb3a5f12134534c9718b?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/83b6430e47ff549ac979eb42934faebc76157491?placeholderIfAbsent=true",
              ].map((url, i) => (
                <a
                  key={i}
                  href="#"
                  className="aspect-square object-contain w-6 sm:w-8 self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity"
                >
                  <img src={url} alt={`Social media ${i + 1}`} className="w-full h-full" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="w-full text-base sm:text-lg text-[#F1F1F1] font-medium leading-tight">
              Payments
            </h3>
            <div className="flex flex-wrap items-center gap-1 mt-3 sm:mt-5">
              {[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/65e96600fbb5273afbb59318f08e05bc78bc2f06?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/ce3578cd8418d97ae19d49de9c4e47965ea215d3?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/7063a4bc472a3e6c6bd8c5f80c3b06659577d444?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e67ead114fa590b966dcbe1a998d2a6c873bd5?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/1d48e7da3a6af3f25b262820544692217cfd1dcb?placeholderIfAbsent=true",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/4472a07b945a02c8e3791c179f45e732054f29b4?placeholderIfAbsent=true",
              ].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Payment method ${i + 1}`}
                  className="aspect-square object-contain w-12 sm:w-16 self-stretch shrink-0 my-auto"
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-[#999] mt-8 pt-4 border-t border-gray-700">
          © {new Date().getFullYear()} Anuj Tiles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
