import React from "react";
import Image from "next/image";
import shapesImage from "@/assets/shapes.svg";

const Ingredients = () => {
  const firstRowCards = [
    {
      title: "Better Ingredients",
      description:
        "Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!",
      background: "bg-white",
      isWhiteCard: true,
      isLinkPresent: false,
    },
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      background: "bg-[url('../assets/vitaminc.png')] bg-cover bg-center",
      isLinkPresent: true,
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      background: "bg-[url('../assets/vitaminb3.png')] bg-cover bg-center",
      isLinkPresent: true,
    },
  ];

  const secondRowElements = [
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      background: "bg-[url('../assets/magnesium.png')] bg-cover bg-center",
      isLinkPresent: true,
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      background: "bg-[url('../assets/acid.png')] bg-cover bg-center",
      isLinkPresent: true,
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      background: "bg-[url('../assets/lacto.png')] bg-cover bg-center",
      isLinkPresent: true,
    },
    {
      image: true,
      imgSrc: shapesImage,
    },
  ];

  return (
    <section className="p-4 md:p-10">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {firstRowCards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg flex flex-col justify-between h-48 ${
                card.isWhiteCard ? "bg-white md:col-span-2 lg:col-span-1" : card.background
              }`}
            >
              <div className={`${card.isWhiteCard ? "md:w-full" : null}`}>
                {card.isWhiteCard ? (
                  <h3 className="text-sm text-linkTextColor font-semibold mb-2">
                    INGREDIENTS
                  </h3>
                ) : null}
                <h3
                  className={`text-lg font-bold text-gray-800 ${
                    card.isWhiteCard ? "text-[30px] pb-4" : null
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-gray-600 ${
                    card.isWhiteCard ? "text-xs text-black/60 mb-8" : null
                  }`}
                >
                  {card.description}
                </p>
              </div>

              {card.isLinkPresent ? (
                <a className="underline underline-offset-4 font-jost mt-4 text-sm font-semibold text-linkColorText">
                  SEE MORE
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-6">
          {secondRowElements.map((element, index) =>
            element.image ? (
              <div key={index} className="bg-white rounded-lg hidden lg:block md:w-fit h-48">
                <Image
                  src={element.imgSrc}
                  alt="Shape"
                  width={96}
                  height={96}
                  className="object-contain h-48"
                />
              </div>
            ) : (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg flex flex-col justify-between h-48 ${element.background} ${ element.title === "Lactobacillus" ? "md:col-span-2 lg:col-span-1" : "" }`}
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {element.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{element.description}</p>
                </div>
                {element.isLinkPresent ? (
                  <a className="underline underline-offset-4 font-jost mt-4 text-sm font-semibold text-linkColorText">
                    SEE MORE
                  </a>
                ) : null}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
