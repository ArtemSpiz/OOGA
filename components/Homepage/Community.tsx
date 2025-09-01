import Image from "next/image";
import LightLeft from "/public/comLightLeft.png";
import LightRight from "/public/comLightRight.png";

const Community = () => {
  const details = [
    {
      heading: "Alpha",
      desc: "Integrated scanning bots with advanced filters so you never miss a call",
      img: "/home/community/1.png",
    },
    {
      heading: "Chats",
      desc: "Collaborate with OOGA's custom social network",
      img: "/home/community/2.png",
    },
    {
      heading: "Clans",
      desc: "Create your own trading groups and grow together",
      img: "/home/community/3.png",
    },
  ];

  return (
    <section className="relative bg-[#030210]">
      <div className="pointer-events-none absolute top-0 left-0 h-auto max-w-[600px]">
        <Image alt="LightLeft" src={LightLeft} />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-auto max-w-[611px] max-md:hidden">
        <Image alt="LightLeft" src={LightRight} />
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
          {details.map((elem, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-gradient-to-b from-white/5 to-white/[2%]"
              >
                <div className="flex flex-col gap-3 px-6 pt-6">
                  <h2 className="text-center text-lg">{elem.heading}</h2>
                  <p className="text-center text-sm font-light text-[#D5F6FE]/50">
                    {elem.desc}
                  </p>
                </div>
                <Image
                  className="mt-auto w-full object-cover"
                  alt="community-reward-img"
                  src={elem.img}
                  width={500}
                  height={400}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
