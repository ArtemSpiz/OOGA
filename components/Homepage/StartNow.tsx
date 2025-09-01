import Image from "next/image";
import Button from "../Common/Button";
import { UpRightArrow } from "../Common/Icons";

const StartNow = () => {
  return (
    <section className="relative flex flex-col items-center gap-6 overflow-hidden bg-[#030210] pt-[120px] pb-[60px] md:pt-[200px] md:pb-[100px]">
      <Image
        className="pointer-events-none absolute top-0 left-0 w-full object-cover md:hidden"
        src="/home/cta-mobile.png"
        alt="background"
        width={1366}
        height={689}
      />
      <Image
        className="pointer-events-none absolute top-0 left-0 hidden w-full object-cover md:block"
        src="/home/cta.png"
        alt="background"
        width={1920}
        height={1080}
      />
      <div className="flex flex-col gap-6 px-6 text-center md:px-0">
        <p className="text-[#6480A4]">{`[ Start Trading Now ]`}</p>
        <h1 className="text-[2rem] leading-[calc(2rem*1.2)] font-light text-[#D5F6FE] md:text-[3rem] md:leading-[calc(3rem*1.2)]">
          Begin Your Trading Journey
        </h1>
        <p className="text-sm text-[#D5F6FE]/80">
          Connect with traders, track opportunities, and grow your profits.
        </p>
      </div>
      <Button Icon={UpRightArrow}>Trade Now</Button>
    </section>
  );
};

export default StartNow;
