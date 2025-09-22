"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import LightLeft from "/public/comLightLeft.png";
import LightRight from "/public/comLightRight.png";

const Community = () => {
  const [animations, setAnimations] = useState<unknown[]>([]);

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const [card1, card2, card3] = await Promise.all([
          fetch("/videos/CommunityCard1.json").then((res) => res.json()),
          fetch("/videos/CommunityCard2.json").then((res) => res.json()),
          fetch("/videos/CommunityCard3.json").then((res) => res.json()),
        ]);
        setAnimations([card1, card2, card3]);
      } catch (error) {
        console.error("Failed to load animations:", error);
      }
    };

    loadAnimations();
  }, []);

  const details = [
    {
      heading: "Alpha",
      desc: "Integrated token broadcasting with filters, so you never miss a call",
      animationPath: "/videos/CommunityCard1.json",

    },
    {
      heading: "Chats",
      desc: "Stay connected through OOGA’s built-in chat system",
      animationPath: "/videos/CommunityCard2.json",

    },
    {
      heading: "Clans",
      desc: "Create your own trading groups and grow together",
      animationPath: "/videos/CommunityCard3.json",

    },
  ];

  return (
    <section id="community" className="relative bg-[#030210]">
      <div className="pointer-events-none absolute top-0 left-0 h-auto max-w-[500px]">
        <Image alt="LightLeft" src={LightLeft} />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-auto max-w-[511px] max-md:hidden">
        <Image alt="LightRight" src={LightRight} />
      </div>
      <div className="mx-auto flex max-w-[890px] flex-col gap-14 px-6 py-[80px]">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-[#6480A4]">{`[ Community ]`}</p>
          <h1 className="text-[2rem] leading-[calc(2rem*1.2)] font-light text-[#D5F6FE] md:text-[3rem] md:leading-[calc(3rem*1.2)]">
            Your Community, Your Edge
          </h1>
          <p className="text-sm text-[#D5F6FE]/80">
            Connect, Collaborate, and Trade Smarter
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {details.map((elem, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] transition-all duration-500 hover:border-[rgba(56,189,248,0.40)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)]"
              // onMouseEnter={() => handleMouseEnter(index)}
              // onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex flex-col gap-3 px-6 pt-6">
                <h2 className="text-center text-lg">{elem.heading}</h2>
                <p className="text-center text-sm font-light text-[#D5F6FE]/50">
                  {elem.desc}
                </p>
              </div>
              <div className="relative mt-auto w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/videos/card.png')",
                  }}
                />
                {animations[index] ? (
                  <Lottie
                    animationData={animations[index]}
                    loop={true}
                    autoplay={true}
                    className="relative z-10 h-auto w-full"
                  />
                ) : (
                  <div className="h-48 w-full animate-pulse rounded bg-gray-800" />
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
