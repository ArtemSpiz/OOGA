import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative max-w-[100vw] overflow-hidden bg-[#030210] py-20 md:py-[100px]">
      <div className="flex flex-col gap-14 px-6 md:w-full md:flex-row md:justify-between">
        <Image
          className="h-[44px] w-[150px] object-contain"
          src="/logo.png"
          width={500}
          height={500}
          alt="logo"
        />
        <div className="flex items-center justify-between md:justify-end md:gap-[112px]">
          <div className="flex flex-col gap-6">
            <p className="text-lg">Community</p>
            <div className="flex flex-col gap-4">
              <Link
                className="text-sm font-light text-[#A8A8A8]"
                href="https://linkedin.com"
                target="_blank"
              >
                Linkedin
              </Link>
              <Link
                className="text-sm font-light text-[#A8A8A8]"
                href="https://x.com"
                target="_blank"
              >
                X (Twitter)
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg">Company</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Link className="text-sm font-light text-[#A8A8A8]" href="/">
                  Privacy policy
                </Link>
                <Link className="text-sm font-light text-[#A8A8A8]" href="/">
                  Terms of service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[1440px] max-w-[100vw] -translate-x-1/2">
        <Image height={100} width={1440} src="/home/footerBg.png" alt=" " />
      </div>
    </footer>
  );
};

export default Footer;
