import React from "react";
import Image from "next/image";

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
      <div className="mt-5 text-center">
        <h1 className="md:text-5xl text-3xl font-bold">
          Professional Skills<span className="font-mono text-primary">.</span>
        </h1>
      </div>
      <div className="mb-28 md:mt-32 mt-16 w-[90%] h-auto lg:h-[500px] rounded-3xl mx-auto border shadow-lg flex items-center justify-center">
        <div className="m-10 mx-auto flex flex-wrap gap-28 items-center justify-center">
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <div className="mb-4 flex items-end justify-between">
              <h1 className="text-2xl font-bold">JavaScript</h1>
              <Image
                src="/assets/images/javascript-original.png"
                alt="Logo"
                width={80}
                height={80}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"></div>
            </div>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <div className="mb-4 flex items-end justify-between">
              <h1 className="text-2xl font-bold">React</h1>
              <Image
                src="/assets/images/react-original.png"
                alt="Logo"
                width={80}
                height={80}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"></div>
            </div>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <div className="mb-4 flex items-end justify-between">
              <h1 className="text-2xl font-bold">MongoDB</h1>
              <Image
                src="/assets/images/mongodb-original.png"
                alt="Logo"
                width={80}
                height={80}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"></div>
            </div>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <div className="mb-4 flex items-end justify-between">
              <h1 className="text-2xl font-bold">Next JS</h1>
              <Image
                src="/assets/images/nextjs-original.png"
                alt="Logo"
                width={80}
                height={80}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"></div>
            </div>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <div className="mb-4 flex items-end justify-between">
              <h1 className="text-2xl font-bold">Node JS</h1>
              <Image
                src="/assets/images/nodejs-original.png"
                alt="Logo"
                width={80}
                height={80}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"></div>
            </div>
          </div>
          <div className="md:w-1/4 mx-auto md:mx-0 w-[80%]">
            <div className="mb-4 flex items-end justify-between">
              <h1 className="text-2xl font-bold">Express JS</h1>
              <Image
                src="/assets/images/express-original.png"
                alt="Logo"
                width={80}
                height={80}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            <div className=" mx-auto md:mx-0 w-full rounded-full h-[5px] bg-black flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary shadow-md shadow-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
