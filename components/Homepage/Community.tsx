import Image from "next/image";
import { useRef } from "react";
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

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const interval = setInterval(() => {
      if (video.currentTime <= 0) {
        video.pause();
        clearInterval(interval);
      } else {
        video.currentTime -= 0.005;
      }
    }, 12);
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
                loop
                playsInline
                preload="auto"
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
