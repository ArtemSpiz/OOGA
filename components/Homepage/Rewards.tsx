import Image from "next/image";
import { Coin, Gift, Relation } from "../Common/Icons";

const Rewards = () => {
  const rewards = [
    {
      Icon: Gift,
      heading: "Weekly Giveaway",
      desc: "OOGA gives it's users 5% of all trading fees, every week.",
    },
    {
      Icon: Coin,
      heading: "Cashback",
      desc: "Start earings immeddiately with up to 35% Cashback",
    },
    {
      Icon: Relation,
      heading: "Referrals",
      desc: "Grow your network with 35% multi-tier referral commissions",
    },
  ];

  return (
    <section className="bg-[#030210]">
      <div className="max-w-custom-container mx-auto flex flex-col justify-between gap-[84px] pt-[60px] md:flex-row md:gap-11 md:px-12 md:pt-[100px]">
        <div className="flex flex-col gap-16 px-6 md:w-[40%] md:px-0">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <p className="text-[#6480A4]">{`[ Rewards ]`}</p>
            <h1 className="text-[2rem] leading-[calc(2rem*1.2)] font-light text-[#D5F6FE] md:text-[3rem] md:leading-[calc(3rem*1.2)]">
              Best-In-Class Rewards
            </h1>
            <p className="text-sm text-[#D5F6FE]/80">
              Boost Your Earnings with Every Trade
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {rewards.map(({ Icon, desc, heading }, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-3 border-l border-white/20 px-6"
                >
                  <div className="h-6 w-6">
                    <Icon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg">{heading}</h2>
                    <p className="text-sm text-[#D5F6FE]/50">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <Image
          className="w-full md:hidden"
          src="/home/reward-mobile.png"
          alt="rewards"
          width={1366}
          height={689}
        /> */}
        <video className="w-[50%] max-md:w-[120%]" autoPlay muted loop playsInline>
          <source src="/videos/RewardsVideo.mp4" type="video/mp4" />
        </video>

        {/* <Image
          className="hidden w-[60%] md:block"
          src="/home/reward.png"
          alt="rewards"
          width={1366}
          height={689}
        /> */}
      </div>
    </section>
  );
};

export default Rewards;
