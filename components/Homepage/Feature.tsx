import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import Image1 from "/public/home/dashboard-preview.png";
import Image1Mob from "/public/home/dashboard-preview-mob.png";
import gsap from "gsap";

const TagImages = [
  { image: Image1, imageMob: Image1Mob },
  { image: Image1, imageMob: Image1Mob },
  { image: Image1, imageMob: Image1Mob },
];

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;

    const prevImg = imagesRef.current[activeIndex];
    const nextImg = imagesRef.current[index];

    if (prevImg && nextImg) {
      gsap.to(prevImg, { y: -50, opacity: 0, duration: 0.5 });

      gsap.fromTo(
        nextImg,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
      );
    }

    setActiveIndex(index);
  };

  useEffect(() => {
    imagesRef.current.forEach((img, i) => {
      if (img) {
        gsap.set(img, { opacity: i === activeIndex ? 1 : 0, y: 0 });
      }
    });
  }, []);

  return (
    <section className="bg-[#030210]">
      <div className="max-w-custom-container mx-auto flex flex-col gap-11 px-6 py-[60px] md:flex-row md:gap-[70px] md:px-12 md:pt-[120px] md:pb-[80px]">
        <div className="flex flex-col gap-12 md:w-[420px]">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <p className="text-[#6480A4]">{`[ Key Features ]`}</p>
            <h1 className="text-[2rem] leading-[calc(2rem*1.2)] font-light text-[#D5F6FE] md:text-[3rem] md:leading-[calc(3rem*1.2)]">
              Powerful Tools, Smarter Trading
            </h1>
            <p className="text-sm text-[#D5F6FE]/80">
              Innovative tools to put you one step ahead of the rest
            </p>
          </div>
          <div className="flex flex-col">
            {["Trade", "Scan", "Explore"].map((elem, index) => (
              <p
                key={index}
                onClick={() => handleClick(index)}
                className={`cursor-pointer border-b border-white/30 py-5 text-lg font-light ${
                  index === activeIndex ? "text-[#38BDF8]" : "text-white/50"
                } last:border-b-0`}
              >
                {elem}
              </p>
            ))}
          </div>
        </div>

        <div className="relative flex h-[300px] min-w-0 w-full items-center md:h-[424px] md:flex-1">
          {TagImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-lg"
            >
              <Image
                className="h-full w-full object-contain max-md:hidden"
                src={img.image}
                alt="dashboard-preview"
                fill
              />
              <Image
                className="hidden h-full w-auto object-cover max-md:flex"
                src={img.imageMob}
                alt="dashboard-preview"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
