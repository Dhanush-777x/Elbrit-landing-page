"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/hero-img.png";
import vitaminsIcon from "@/assets/Frame-8363.png.svg";
import weightLossIcon from "@/assets/weight-loss.png";
import functionalFoodIcon from "@/assets/functional-food.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { MotionDiv } from "@/app/components/common/motion";
import { MotionH2 } from "@/app/components/common/motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="md:p-10 p-4">
      <MotionDiv
        className="bg-secondary p-6 pb-36 md:p-10 md:pb-36 rounded-lg container"
        style={{
          translateY: y,
        }}
      >
        <MotionH2
          className="text-primary text-center font-jost text-4xl md:text-6xl lg:text-8xl font-bold translate-y-12 md:translate-y-16"
          initial={{ backgroundPosition: "100%" }}
          animate={{ backgroundPosition: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(120deg, #17414F 45%, rgba(23, 65, 79, 0.6) 50%, #17414F 55%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Essential Vitamins
        </MotionH2>

        <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-6 mt-20 items-center">
          {/* First Column */}
          <div className="space-y-4 flex flex-col w-48 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-sm text-primary">Online Medical Supplies</h2>
            <p className="text-normal text-primary font-semibold font-jost">
              Get Your Vitamins & Minerals
            </p>
            <button className="bg-primary text-white px-6 w-48 py-2 rounded-full">
              Explore
            </button>
          </div>

          {/* Second Column */}
          <div className="relative order-1 md:order-2">
            <div className="bg-yellow-100 h-64 w-64 rounded-tl-[100px] rounded-br-[100px] relative">
              <motion.div
                initial={{
                  translateX: "0%",
                  translateY: "0%",
                }}
                animate={{
                  translateY: ["-30%", "-20%", "-30%"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={HeroImage}
                  alt="Hero Image"
                  width={288}
                  height={288}
                />
              </motion.div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col space-y-4 w-64 order-3 md:hidden lg:block">
            {/* First Sub-column */}
            <div className="flex items-center space-x-4">
              <Image
                src={vitaminsIcon}
                alt="Vitamins icon"
                height={45}
                width={45}
              />
              <div>
                <h3 className="text-lg font-bold">Vitamins</h3>
                <p className="text-sm text-gray-600">
                  Increased Vitamins and Minerals in your diet
                </p>
              </div>
            </div>
            {/* Second Sub-column */}
            <div className="flex items-center space-x-4">
              <Image
                src={weightLossIcon}
                alt="Vitamins icon"
                height={45}
                width={45}
              />
              <div>
                <h3 className="text-lg font-bold">Weight Loss</h3>
                <p className="text-sm text-gray-600">
                  Weight Loss Find scientifically proven solutions
                </p>
              </div>
            </div>
            {/* Third Sub-column */}
            <div className="flex items-center space-x-4">
              <Image
                src={functionalFoodIcon}
                alt="Vitamins icon"
                height={45}
                width={45}
              />
              <div>
                <h3 className="text-lg font-bold">Functional Foods</h3>
                <p className="text-sm text-gray-600">
                  Functional Foods from protein powders to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Column (Mobile & Tablet View) */}
        <div className="md:flex lg:hidden flex-row justify-evenly items-center order-3 mt-20 hidden">
          {/* First Sub-column */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 p-6">
            <Image
              src={vitaminsIcon}
              alt="Vitamins icon"
              height={40}
              width={40}
            />
            <div>
              <h3 className="text-lg font-bold">Vitamins</h3>
              <p className="text-sm text-gray-600">
                Increased Vitamins and Minerals in your diet
              </p>
            </div>
          </div>
          {/* Second Sub-column */}
          <div className="flex flex-col justify-center text-center items-center space-y-4 p-6">
            <Image
              src={weightLossIcon}
              alt="Weightloss icon"
              height={40}
              width={40}
            />
            <div>
              <h3 className="text-lg font-bold">Weight Loss</h3>
              <p className="text-sm text-gray-600">
                Weight Loss Find scientifically proven solutions
              </p>
            </div>
          </div>
          {/* Third Sub-column */}
          <div className="flex flex-col justify-center text-center items-center space-y-4 p-6">
            <Image
              src={functionalFoodIcon}
              alt="Vitamins icon"
              height={40}
              width={40}
            />
            <div>
              <h3 className="text-lg font-bold">Functional Foods</h3>
              <p className="text-sm text-gray-600">
                Functional Foods from protein powders to baby formula
              </p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Hero;
