import Button from "../Common/Button";
import { UpRightArrow } from "../Common/Icons";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const points = [
    {
      heading: "Turnkey",
      desc: "OOGA Is Non-Custodial and has no access to user private keys",
    },
    {
      heading: "Dedicated Nodes",
    },
    {
      heading: "Multi-Wallet Support",
    },
    {
      heading: "Social Layer",
    },
  ];

  return (
    <>
      <div className="absolute inset-0 h-full max-h-[740px] w-full object-cover">
        {/* <Spline
          className="pointer-events-none"
          scene="https://prod.spline.design/yYRZ0N8vHhXbNQIz/scene.splinecode"
        /> */}
      </div>
      <div className="absolute inset-0 hidden h-full max-h-[740px] w-full bg-gradient-to-b from-transparent from-80% to-[#030210] md:block" />
      <section className="max-w-custom-container relative z-10 mx-auto flex flex-col justify-between gap-11 px-6 pt-[86px] pb-[68px] md:flex-row md:px-12 md:pb-[150px]">
        <div className="flex flex-col gap-11 md:gap-[102px]">
          <div className="flex flex-col gap-5">
            <h1 className="text-center text-[2.5rem] leading-[calc(2.5rem*1.2)] font-light md:text-left md:text-[5rem] md:leading-[calc(5rem*1.2)]">
              Navigate DeFi With Confidence
            </h1>
            <p className="text-center md:text-left">
              Advanced Analytics. Trusted Infrastructure. Seamless Execution.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:mb-2 md:flex-row">
            <Button Icon={UpRightArrow}>Trade Now</Button>
            <Button variant="outline" Icon={UpRightArrow}>
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex flex-col rounded-lg p-6 backdrop-blur-[36px] md:mt-auto">
          {points.map((elem, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 border-b border-white/30 py-3 last:border-b-0"
              >
                <h2 className="text-lg">{elem.heading}</h2>
                {elem.desc ? (
                  <p className="text-sm font-light">{elem.desc}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
