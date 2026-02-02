import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export function Header() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#113B29] border-b-2 border-l-2 border-r-2 border-[#2F7C57] rounded-[32px] h-[68px] px-6 py-3 w-full max-w-[1000px] flex items-center justify-between">
      <Link href="/" className="h-11 w-[49px] relative">
        <Image
          src="/images/logo-ubuntukids.png"
          alt="Ubuntu Kids Logo"
          fill
          className="object-cover"
        />
      </Link>

      <div className="flex items-center gap-5">
        <div className="flex items-center h-full">
          <Link href="#home" className="px-3 py-2 text-sm font-medium text-[#eee] font-montserrat">
            Home
          </Link>
          <Link href="#about" className="px-3 py-2 text-sm font-medium text-[#eee] font-montserrat">
            About
          </Link>
          <Link href="#tokenomics" className="px-3 py-2 text-sm font-medium text-[#eee] font-montserrat">
            Tokenomics
          </Link>
          <Link href="#roadmap" className="px-3 py-2 text-sm font-medium text-[#eee] font-montserrat">
            Roadmap
          </Link>
        </div>

        <Button className="text-base p-0 max-h-[44px] w-max flex items-center justify-center">
          Buy Now
        </Button>
      </div>
    </nav>
  );
}
