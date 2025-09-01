import Image from "next/image";
import LightLeft from "/public/advancedLightLeft.png";
import LightRight from "/public/advancedLightRight.png";

const Capabilities = () => {
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
          <div className="flex flex-col gap-6 md:w-[55%]">
            <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.4)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] hover:shadow-lg">
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3">
                <h2 className="text-xl">Turnkey</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  OOGA Is Non-Custodial and has no access to user private keys
                </p>
              </div>
              <Image
                className="absolute right-0 bottom-0 h-[175px] w-[175px] object-contain md:bottom-[-8%]"
                src="/home/capability/1.png"
                alt="icon"
                height={500}
                width={500}
              />
            </div>
            <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.4)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] hover:shadow-lg">
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3 md:mb-[110px]">
                <h2 className="text-xl">Multi-Wallet Support</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  Buy and sell simultaneously to elevate your trades
                </p>
              </div>
              <Image
                className="absolute right-0 bottom-0 h-[175px] w-[175px] object-contain md:bottom-[-8%]"
                src="/home/capability/2.png"
                alt="icon"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-[45%]">
            <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.4)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] hover:shadow-lg">
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3 md:mb-[110px]">
                <h2 className="text-xl">Dedicated Nodes</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  Trade efficiently with the fastest fills
                </p>
              </div>
              <Image
                className="absolute right-0 bottom-0 h-[175px] w-[175px] object-contain md:bottom-[-8%]"
                src="/home/capability/3.png"
                alt="icon"
                height={500}
                width={500}
              />
            </div>
            <div className="relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-white/5 to-white/[2%] p-8 transition-all duration-500 hover:border-[rgba(56,189,248,0.4)] hover:bg-[linear-gradient(180deg,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.01)_100%)] hover:shadow-lg">
              <div className="relative z-10 mb-16 flex w-[60%] flex-col gap-3">
                <h2 className="text-xl">Social Layer</h2>
                <p className="text-sm text-[#D5F6FE]/50">
                  First trading-social platform
                </p>
              </div>
              <Image
                className="absolute right-0 bottom-0 h-[175px] w-[175px] object-contain md:bottom-[-8%]"
                src="/home/capability/4.png"
                alt="icon"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
