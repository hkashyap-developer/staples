"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function AboutPage() {
  return (
    <div className=" dark:bg-black mx-auto relative  md:flex-row  bg-top bg-cover border-b-[1px] border-gray-600">
      <div className="bg-[rgba(255,255,255,0)] dark:bg-[rgba(0,0,0,0.8)] min-h-[280px] sm:min-h-[400px]   xl:pb-0 w-full flex justify-center flex-col">
        <div className="relative w-full max-w-4xl text-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-0  text-black dark:text-white text-[34px] sm:text-5xl 2xl:text-6xl font-bold tracking-tight relative z-10"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-black px-8 sm:px-0 mt-6 text-base md:text-xl  relative z-10 max-w-xl mx-auto"
          >
            Reach out to us today for quick support, inquiries, feedback, or
            orders.
          </motion.p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
