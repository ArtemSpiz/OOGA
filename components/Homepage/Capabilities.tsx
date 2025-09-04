"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import LightLeft from "/public/advancedLightLeft.png";
import LightRight from "/public/advancedLightRight.png";

const Capabilities = () => {
  const videoRefs: Record<string, React.RefObject<HTMLVideoElement>> = {
    card1: useRef<HTMLVideoElement>(null!),
    card2: useRef<HTMLVideoElement>(null!),
    card3: useRef<HTMLVideoElement>(null!),
    card4: useRef<HTMLVideoElement>(null!),
  };

  const reverseAnimation: Record<string, number | null> = {
    card1: null,
    card2: null,
    card3: null,
    card4: null,
  };

  useEffect(() => {
    Object.keys(videoRefs).forEach((key) => {
      const video = videoRefs[key].current;
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

  const handleMouseEnter = (key: string) => {
    const video = videoRefs[key].current;
    if (video) {
      if (reverseAnimation[key]) {
        cancelAnimationFrame(reverseAnimation[key]!);
        reverseAnimation[key] = null;
      }
      video.playbackRate = 1;
      video.currentTime = 0;
      video.play().catch(() => {
        video.currentTime = 0;
      });
    }
  };

  const handleMouseLeave = (key: string) => {
    const video = videoRefs[key].current;
    if (video) {
      video.pause();

      const step = () => {
        if (!videoRefs[key].current) return;
        const v = videoRefs[key].current!;
        if (v.currentTime > 0.05) {
          v.currentTime -= 0.03;
          reverseAnimation[key] = requestAnimationFrame(step);
        } else {
          v.currentTime = 0;
          cancelAnimationFrame(reverseAnimation[key]!);
          reverseAnimation[key] = null;
        }
      };

      reverseAnimation[key] = requestAnimationFrame(step);
    }
  };

  return (
    <section className="relative bg-[#030210]">
      <div className="pointer-events-none absolute top-[-100px] left-0 h-auto max-w-[600px]">
        <Image alt="LightLeft" src={LightLeft} />
      </div>
      <div className="pointer-events-none absolute top-[-100px] right-0 h-auto max-w-[611px] max-md:hidden">
        <Image alt="LightLeft" src={LightRight} />
      </div>
      <div className="mx-auto flex max-w-[890px] flex-col gap-14 px-6 py-[80px]">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-[#6480A4]">{`[ Capabilities ]`}</p>
          <h1 className="text-[2rem] leading-[calc(2rem*1.2)] font-light text-[#D5F6FE] md:text-[3rem] md:leading-[calc(3rem*1.2)]">
            Advanced Infrastructure
          </h1>
          <p className="text-sm text-[#D5F6FE]/80">
            Maximize speed, control, and connectivity in your trades
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col gap-6 md:w-[498px]">
            <div
              className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.40)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] max-md:h-[200px] max-md:border max-md:border-[rgba(56,189,248,0.40)] md:h-[159.523px]"
              onMouseEnter={() => handleMouseEnter("card1")}
              onMouseLeave={() => handleMouseLeave("card1")}
            >
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3">
                <h2 className="text-xl">Turnkey</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  OOGA Is Non-Custodial and has no access to user private keys
                </p>
              </div>
              <video
                ref={videoRefs.card1}
                className="absolute right-0 bottom-[-25px] h-[149px] w-[149px] rounded-full max-md:right-[-20px] max-md:bottom-[-15px]"
                muted
                playsInline
                preload="metadata"
                poster="/videos/CapabilitiesCard1Poster.jpg"
              >
                <source src="/videos/CapabilitiesCard1.mp4" type="video/mp4" />
                <source
                  src="/videos/CapabilitiesCard1.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div
              className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.40)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] max-md:h-[200px] max-md:border max-md:border-[rgba(56,189,248,0.40)] md:h-[210.058px]"
              onMouseEnter={() => handleMouseEnter("card2")}
              onMouseLeave={() => handleMouseLeave("card2")}
            >
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3 md:mb-[110px]">
                <h2 className="text-xl">Multi-Wallet Support</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  Buy and sell simultaneously to elevate your trades
                </p>
              </div>
              <video
                ref={videoRefs.card2}
                className="absolute right-0 bottom-[-25px] h-[149px] w-[149px] rounded-full max-md:right-[-20px] max-md:bottom-[-15px]"
                muted
                playsInline
                preload="metadata"
                poster=""
              >
                <source src="/videos/CapabilitiesCard2.mp4" type="video/mp4" />
                <source
                  src="/videos/CapabilitiesCard2.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-[390px]">
            <div
              className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.40)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] max-md:h-[200px] max-md:border max-md:border-[rgba(56,189,248,0.40)] md:h-[209.058px]"
              onMouseEnter={() => handleMouseEnter("card3")}
              onMouseLeave={() => handleMouseLeave("card3")}
            >
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3 md:mb-[110px]">
                <h2 className="text-xl">Dedicated Nodes</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  Trade efficiently with the fastest fills
                </p>
              </div>
              <video
                ref={videoRefs.card3}
                className="absolute right-0 bottom-[-25px] h-[149px] w-[149px] rounded-full max-md:right-[-20px] max-md:bottom-[-15px]"
                muted
                playsInline
                preload="metadata"
                poster=""
              >
                <source src="/videos/CapabilitiesCard3.mp4" type="video/mp4" />
                <source
                  src="/videos/CapabilitiesCard3.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div
              className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.40)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] max-md:h-[200px] max-md:border max-md:border-[rgba(56,189,248,0.40)] md:h-[159.523px]"
              onMouseEnter={() => handleMouseEnter("card4")}
              onMouseLeave={() => handleMouseLeave("card4")}
            >
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3">
                <h2 className="text-xl">Social Layer</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  First trading-social platform
                </p>
              </div>
              <video
                ref={videoRefs.card4}
                className="absolute right-0 bottom-[-25px] h-[149px] w-[149px] rounded-full max-md:right-[-20px] max-md:bottom-[-15px]"
                muted
                playsInline
                preload="metadata"
                poster=""
              >
                <source src="/videos/CapabilitiesCard4.mp4" type="video/mp4" />
                <source
                  src="/videos/CapabilitiesCard4.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
