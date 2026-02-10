import Image from "next/image";
import Link from "next/link";
import FadeUp from "./components/motion/FadeUp";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative">
        <Image
          src="/assets/images/Miqhasa.png"
          alt="Logo"
          width={1920}
          height={424}
          priority={true}
          className="w-auto h-auto -z-10 absolute md:top-[300px] top-[200px]"
        />
      </div>
      <div className="mx-8 md:mx-20 mt-2 flex lg:flex-row-reverse lg:mt-0 lg:gap-52 md:mt-32 flex-col items-center md:justify-center">
        <div>
          <FadeUp delay={0.2}>
            <Image
              src="/assets/images/Header.png"
              alt="Logo"
              width={576}
              height={828}
              priority={true}
              className="w-64 md:w-auto md:h-auto"
            />
          </FadeUp>
        </div>
        <FadeUp delay={0.4}>
          <div className="text-center lg:text-left -mt-8 md:mt-0">
            <h3 className="text-black font-semibold text-2xl">Hello! I am</h3>
            <h2 className="text-primary font-[600] text-3xl my-8">
              Moh. Iqbal Hafid
            </h2>
            <div className="relative -z-10">
              <h1 className="text-[#8f8f8f] font-[800] text-6xl md:text-8xl mt-4">
                Web <br />
                Developer
              </h1>
              <h1 className="text-primary font-[800] text-6xl absolute -top-[19px] left-[2px] md:text-8xl mt-4">
                Web <br />
                Developer
              </h1>
            </div>
            <p className="mt-4 text-[#8f8f8f]">
              Since creative designers often interact with <br /> creative
              teams, managers and clients, <br /> they need strong communication
              skills.
            </p>
            <FadeUp delay={0.6}>
              <div className="flex gap-9 items-center justify-center mt-4 lg:justify-start">
                <Link href={"/"}>
                  <Image
                    src="/assets/images/Instagram.png"
                    alt="Logo"
                    width={27}
                    height={27}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/assets/images/github.png"
                    alt="Logo"
                    width={27}
                    height={27}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/assets/images/Linkedin.png"
                    alt="Logo"
                    width={27}
                    height={27}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </Link>
              </div>
            </FadeUp>
            <div className="mt-10">
              <FadeUp delay={0.8}>
                <button className="mb-20 py-2 px-6 bg-primary text-white font-bold rounded-xl hover:scale-105 hover:bg-red-500 hover:shadow-lg hover:shadow-primary duration-300">
                  My Resume
                </button>
              </FadeUp>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
