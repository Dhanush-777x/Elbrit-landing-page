import React from "react";

const Ingredients = () => {
  const ingredients = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      background: "bg-blue-100",
      image: "/path/to/vitamin-c.png",
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      background: "bg-blue-100",
      image: "/path/to/vitamin-b3.png",
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      background: "bg-blue-100",
      image: "/path/to/magnesium.png",
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      background: "bg-blue-100",
      image: "/path/to/hyaluronic-acid.png",
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      background: "bg-blue-100",
      image: "/path/to/lactobacillus.png",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-gray-800 font-bold text-xl tracking-wide">
            INGREDIENTS
          </h2>
          <h1 className="text-gray-900 text-3xl font-extrabold mt-2">
            Better Ingredients
          </h1>
          <p className="text-gray-600 mt-4">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high-quality products!
          </p>
        </div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg flex flex-col justify-between ${ingredient.background}`}
            >
              <div>
                {/* Image */}
                <div className="h-20 w-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                  <img
                    src={ingredient.image}
                    alt={ingredient.title}
                    className="h-16 w-16 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {ingredient.title}
                </h3>
                <p className="text-gray-600 text-center mt-2">
                  {ingredient.description}
                </p>
              </div>

              {/* Button */}
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full mx-auto">
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
