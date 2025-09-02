import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Grow = () => {
  const text = `OOGA brings trading and community together in a decentralized space, giving you the tools to earn more, explore the market, and grow
  alongside a network of like-minded traders.`;

  const words = text.split(" ");
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!wordRefs.current.length) return;

    gsap.set(wordRefs.current, { color: "rgba(255,255,255,0.3)" });

    gsap.to(wordRefs.current, {
      color: "rgba(255,255,255,1)",
      stagger: 0.02,
      ease: "power5.inOut",
      scrollTrigger: {
        trigger: wordRefs.current[0]?.parentElement,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="bg-[#030210]">
      <div className="max-w-custom-container mx-auto flex flex-col items-center justify-center gap-10 px-6 py-[60px] md:min-h-[470px]">
        <p className="text-center text-[#6480A4]">{`[ Trade, Connect, Grow ]`}</p>
        <h1 className="text-center text-[1.75rem] leading-[calc(1.75rem*1.2)] font-light md:max-w-[1024px] md:text-[2.75rem] md:leading-[calc(2.75rem*1.2)]">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                wordRefs.current[i] = el;
              }}
              className="inline-block"
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Grow;
