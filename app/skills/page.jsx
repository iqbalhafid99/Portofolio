"use client";

import React from "react";
import Image from "next/image";
import FadeUp from "../components/motion/fadeUp";
import SlideIn from "../components/motion/SlideIn";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <div>
      <div>
        <Image
          src="/assets/images/skills.png"
          alt="Logo"
          width={1530}
          height={500}
          priority={true}
          className="w-auto h-auto -z-10 absolute bottom-10"
        />
      </div>
      <FadeUp>
        <div className="mt-5 text-center">
          <h1 className="md:text-5xl text-3xl font-bold">
            Professional Skills<span className="font-mono text-primary">.</span>
          </h1>
        </div>
      </FadeUp>
      <div className="mb-28 md:mt-32 mt-16 w-[90%] h-auto lg:h-[500px] rounded-3xl mx-auto border shadow-lg flex items-center justify-center">
        <div className="m-10 mx-auto flex flex-wrap gap-28 items-center justify-center">
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <SlideIn delay={0.2}>
              <div className="mb-4 flex items-end justify-between">
                <h1 className="text-2xl font-bold">JavaScript</h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  <Image
                    src="/assets/images/javascript-original.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </div>
              <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center  ">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"
                  animate={{ x: "900%" }}
                  transition={{
                    type: "spring",
                    duration: 2,
                    bounce: 0.5,
                    delay: 0.2,
                  }}
                ></motion.div>
              </div>
            </SlideIn>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <SlideIn delay={0.3}>
              <div className="mb-4 flex items-end justify-between">
                <h1 className="text-2xl font-bold">React</h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  <Image
                    src="/assets/images/react-original.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </div>
              <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center ">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"
                  animate={{ x: "600%" }}
                  transition={{
                    type: "spring",
                    duration: 2,
                    bounce: 0.5,
                    delay: 0.3,
                  }}
                ></motion.div>
              </div>
            </SlideIn>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <SlideIn delay={0.4}>
              <div className="mb-4 flex items-end justify-between">
                <h1 className="text-2xl font-bold">MongoDB</h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  <Image
                    src="/assets/images/mongodb-original.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </div>
              <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center ">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"
                  animate={{ x: "700%" }}
                  transition={{
                    type: "spring",
                    duration: 2,
                    bounce: 0.5,
                    delay: 0.4,
                  }}
                ></motion.div>
              </div>
            </SlideIn>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <SlideIn delay={0.5}>
              <div className="mb-4 flex items-end justify-between">
                <h1 className="text-2xl font-bold">Next JS</h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  <Image
                    src="/assets/images/nextjs-original.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </div>
              <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"
                  animate={{ x: "600%" }}
                  transition={{
                    type: "spring",
                    duration: 2,
                    bounce: 0.5,
                    delay: 0.5,
                  }}
                ></motion.div>
              </div>
            </SlideIn>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <SlideIn delay={0.6}>
              <div className="mb-4 flex items-end justify-between">
                <h1 className="text-2xl font-bold">Node JS</h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  <Image
                    src="/assets/images/nodejs-original.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </div>
              <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"
                  animate={{ x: "500%" }}
                  transition={{
                    type: "spring",
                    duration: 2,
                    bounce: 0.5,
                    delay: 0.6,
                  }}
                ></motion.div>
              </div>
            </SlideIn>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <SlideIn delay={0.7}>
              <div className="mb-4 flex items-end justify-between">
                <h1 className="text-2xl font-bold">Express JS</h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  <Image
                    src="/assets/images/express-original.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </div>
              <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"
                  animate={{ x: "500%" }}
                  transition={{
                    type: "spring",
                    duration: 2,
                    bounce: 0.5,
                    delay: 0.7,
                  }}
                ></motion.div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
