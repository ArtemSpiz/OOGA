"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import LightLeft from "/public/comLightLeft.png";
import LightRight from "/public/comLightRight.png";

const Community = () => {
  const details = [
    {
      heading: "Alpha",
      desc: "Integrated scanning bots with advanced filters so you never miss a call",
      video: "/videos/CommunityCard1.mp4",
    },
    {
      heading: "Chats",
      desc: "Collaborate with OOGA's custom social network",
      video: "/videos/CommunityCard2.mp4",
    },
    {
      heading: "Clans",
      desc: "Create your own trading groups and grow together",
      video: "/videos/CommunityCard3.mp4",
    },
  ];

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const reverseAnimations = useRef<(number | null)[]>([null, null, null]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.currentTime = 0;
        video.load();

        const handleLoadedData = () => {
          video.currentTime = 0;
        };

        video.addEventListener("loadeddata", handleLoadedData);

        return () => {
          video.removeEventListener("loadeddata", handleLoadedData);
        };
      }
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (reverseAnimations.current[index]) {
        cancelAnimationFrame(reverseAnimations.current[index]!);
        reverseAnimations.current[index] = null;
      }
      video.playbackRate = 1;
      video.currentTime = 0;
      video.play().catch(() => {
        video.currentTime = 0;
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.pause();

    const step = () => {
      if (!videoRefs.current[index]) return;
      const v = videoRefs.current[index];
      if (v.currentTime > 0.05) {
        v.currentTime -= 0.03;
        reverseAnimations.current[index] = requestAnimationFrame(step);
      } else {
        v.currentTime = 0;
        if (reverseAnimations.current[index]) {
          cancelAnimationFrame(reverseAnimations.current[index]!);
          reverseAnimations.current[index] = null;
        }
      }
    };

    reverseAnimations.current[index] = requestAnimationFrame(step);
  };

  return (
    <section className="relative bg-[#030210]">
      <div className="pointer-events-none absolute top-0 left-0 h-auto max-w-[600px]">
        <Image alt="LightLeft" src={LightLeft} />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-auto max-w-[611px] max-md:hidden">
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
              className="flex flex-col gap-4 overflow-hidden rounded-lg bg-gradient-to-b from-white/5 to-white/[2%]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex flex-col gap-3 px-6 pt-6">
                <h2 className="text-center text-lg">{elem.heading}</h2>
                <p className="text-center text-sm font-light text-[#D5F6FE]/50">
                  {elem.desc}
                </p>
              </div>
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                className="mt-auto w-full object-cover"
                muted
                playsInline
                preload="metadata"
                poster=""
              >
                <source src={elem.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
