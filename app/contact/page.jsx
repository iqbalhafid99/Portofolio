import React from "react";
import { FaRegMap } from "react-icons/fa";
import { BsEnvelopeAt, BsTelephone, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className="lg:mx-20">
        <div className="text-center">
          <h1 className="mt-5 md:text-5xl text-3xl font-bold">
            Contact<span className="font-mono text-primary">.</span>
          </h1>
          {/* <p className="mt-6 text-base italic">Lets Talk With Me</p> */}
        </div>
        <div className="mx-10 mt-10 md:flex justify-center md:gap-20 lg:gap-60">
          <div className="flex flex-col gap-2 md:gap-14">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary border border-black shadow-lg shadow-primary">
                <FaRegMap size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Address</h1>
                <p className="mt-2 text-base italic">Batang, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary border border-black shadow-lg shadow-primary">
                <BsEnvelopeAt size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Email</h1>
                <p className="mt-2 text-base italic">mohiqbalhafid@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary border border-black shadow-lg shadow-primary">
                <BsTelephone size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Telephone</h1>
                <p className="mt-2 text-base italic">+62 899-251-3070</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary border border-black shadow-lg shadow-primary">
                <BsInstagram size={25} color="white" />
              </div>
              <div className="w-10 h-[2px] bg-slate-700"></div>
              <div className="ml-5 mt-8">
                <h1 className="font-bold text-2xl">Instagram</h1>
                <p className="mt-2 text-base italic">@iqbalhafid_</p>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="mt-24 md:mt-0">
            <div className="flex md:gap-4 lg:gap-20 flex-col md:flex-row">
              <div>
                <label className="font-bold text-slate-400 ml-4">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Jhon"
                  className="py-2 border-primary border-2 rounded-full w-full h-14 font-semibold text-slate-700 italic px-4 mt-4 bg-slate-50"
                />
              </div>
              <div className="mt-4 md:mt-0">
                <label className="font-bold text-slate-400 ml-4">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="py-2 border-primary border-2 rounded-full w-full h-14 font-semibold text-slate-700 italic px-4 mt-4 bg-slate-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="font-bold text-slate-400 ml-4">
                Your Email <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="example@example.com"
                className="py-2 border-primary border-2 rounded-full w-full h-14 font-semibold text-slate-700 italic px-4 mt-4 bg-slate-50"
              />
            </div>
            <div className="flex items-center justify-center mt-8">
              <div>
                <label className="font-bold text-slate-400 ml-4">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="70"
                  rows="10"
                  className="py-2 font-semibold text-slate-700 italic border-primary border-2 rounded-3xl w-full px-4 bg-slate-50 mt-4"
                ></textarea>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 my-4">
                * Accept the terms and conditions
              </p>
              <button className="mb-20 py-3 px-6 bg-primary text-sm text-white font-bold rounded-full hover:scale-105 hover:bg-red-500 hover:shadow-lg hover:shadow-primary duration-300">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
