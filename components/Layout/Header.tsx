import Image from "next/image";
import Link from "next/link";
import { Discord, TwitterX, UpRightArrow } from "../Common/Icons";
import Button from "../Common/Button";
import { useState } from "react";

const Header = () => {
  const navigations = [
    { name: "Infrastructure", href: "/" },
    { name: "Rewards", href: "/" },
    { name: "Community", href: "/" },
    { name: "Docs", href: "/" },
  ];

  const navigationsMob = [
    { name: "Advanced Infrastructure", href: "/" },
    { name: "Rewards", href: "/" },
    { name: "Community", href: "/" },
    { name: "Docs", href: "/" },
  ];

  const [isActive, setIsActive] = useState(false);

  const handleBtnMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`absolute left-0 z-20 h-full w-full backdrop-blur-sm transition-all duration-500 md:hidden ${isActive ? "top-0" : "-top-full"}`}
      >
        <div className="flex flex-col items-center gap-14 bg-[#040404]/90 px-6 pt-[142px] pb-12">
          <div className="flex flex-col gap-8">
            {navigationsMob.map((elem, index) => {
              return (
                <Link
                  className="text-center font-light"
                  key={index}
                  href={elem.href}
                >
                  {elem.name}
                </Link>
              );
            })}
          </div>
          <div>
            <div className="flex items-center gap-12">
              <Link
                href="https://x.com"
                target="_blank"
                className="hover:text-primary h-6 w-6 transition-all duration-300"
              >
                <TwitterX />
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                className="hover:text-primary h-6 w-6 transition-all duration-300"
              >
                <Discord />
              </Link>
            </div>
          </div>
          <div className="w-full *:w-full">
            <Button variant="outline" Icon={UpRightArrow}>
              Trade Now
            </Button>
          </div>
        </div>
      </nav>
      <header className="relative z-30 w-full">
        <div className="max-w-custom-container mx-auto flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-[26px]">
          <Image
            className="h-[44px] w-[150px] object-contain"
            src="/logo.png"
            alt="logo"
            width={200}
            height={100}
          />

          <button
            onClick={handleBtnMenu}
            className="flex h-6 w-6 items-center justify-center md:hidden"
          >
            <span className="relative block h-px w-[18px]">
              <span
                className={`absolute left-0 inline-block h-full w-full transition-all ${isActive ? "bg-primary top-0 rotate-45" : "top-1.5 rotate-0 bg-white"}`}
              />
              <span
                className={`absolute top-0 left-0 inline-block h-full w-full transition-all ${isActive ? "bg-primary scale-0" : "scale-100 bg-white"}`}
              />
              <span
                className={`absolute left-0 inline-block h-full w-full transition-all ${isActive ? "bg-primary top-0 -rotate-45" : "-top-1.5 rotate-0 bg-white"}`}
              />
            </span>
          </button>

          <div className="hidden items-center gap-10 md:flex">
            <nav className="flex items-center gap-8">
              {navigations.map((elem, index) => {
                return (
                  <Link
                    className="hover:text-primary font-light transition-colors"
                    key={index}
                    href={elem.href}
                  >
                    {elem.name}
                  </Link>
                );
              })}
            </nav>
            <div className="h-3.5 w-px bg-white/30" />
            <div className="flex items-center gap-8">
              <Link
                href="https://x.com"
                target="_blank"
                className="hover:text-primary h-6 w-6 transition-colors"
              >
                <TwitterX />
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                className="hover:text-primary h-6 w-6 transition-colors"
              >
                <Discord />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" Icon={UpRightArrow}>
              Trade Now
            </Button>
          </div>
        </div>
        <div className="h-px w-full bg-white/30" />
      </header>
    </>
  );
};

export default Header;
