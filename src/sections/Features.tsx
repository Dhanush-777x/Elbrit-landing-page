import React from "react";
import Image from "next/image";
import feature1 from "@/assets/feature1.svg";
import feature2 from "@/assets/feature2.svg";
import feature3 from "@/assets/feature3.svg";
import feature4 from "@/assets/feature4.svg";
import feature5 from "@/assets/feature5.svg";
import feature6 from "@/assets/feature6.svg";

const Features = () => {
  const features = [
    {
      icon: feature1,
      title: "Clinically Studied",
      description:
        "All products that we offer have undergone lab and safety tests",
    },
    {
      icon: feature2,
      title: "Vegetarian Friendly",
      description:
        "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      icon: feature3,
      title: "Made in India",
      description:
        "Shop local and explore health products made right here in India",
    },
    {
      icon: feature4,
      title: "Free Shipping",
      description:
        "We deliver to your door with no shipping costs on your orders",
    },
    {
      icon: feature5,
      title: "No Risk",
      description:
        "We ensure that all products are safe and within their use-by date",
    },
    {
      icon: feature6,
      title: "GMO Free",
      description:
        "Natural, no modified products and derivatives for those who need it",
    },
  ];

  return (
    <section className="relative z-0" id="featuresSection">
      <div
        className="container mx-auto -translate-y-24 md:-translate-y-28"
      >
        <div className="bg-primary rounded-[60px] p-10 pb-0 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg -translate-y-24"
              >
                <div className="flex items-center justify-center w-20 h-20 p-7 bg-white text-white rounded-full mb-4 text-2xl border-b-4 border-primary/90 shadow-lg">
                  <Image
                    src={feature.icon.src}
                    height={40}
                    width={40}
                    alt="feature1"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
