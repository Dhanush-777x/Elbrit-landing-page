import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Vitamin D Benefits for Your Health",
      date: "Dec 7, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog1-lg.png')]",
    },
    {
      id: 2,
      title: "Why Iron is Essential for Your Body",
      date: "Dec 6, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog1-sm.png')]",
    },
    {
      id: 3,
      title: "The Role of Magnesium in Muscle Recovery",
      date: "Dec 5, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog1-lg.png')]",
    },
    {
      id: 4,
      title: "Calcium Beyond Bones: The Hidden Benefits",
      date: "Dec 4, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog1-sm.png')]",
    },
    {
      id: 5,
      title: "Zinc: The Immune System’s Best Friend",
      date: "Dec 3, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog2-sm.png')]",
    },
    {
      id: 6,
      title: "Vitamin C: Nature’s Immunity Booster",
      date: "Dec 2, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog2-lg.png')]",
    },
    {
      id: 7,
      title: "How B Vitamins Improve Energy Levels",
      date: "Dec 1, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog2-sm.png')]",
    },
    {
      id: 8,
      title: "Trace Minerals: The Unsung Heroes of Nutrition",
      date: "Nov 30, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../assets/blog2-lg.png')]",
    },
  ];

  console.log(blogs[1].image);

  return (
    <section className="my-20">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-sm text-linkTextColor font-semibold mb-4 uppercase tracking-wider">
            OUR BLOG
          </h3>
          <h2 className="text-4xl font-bold font-jost text-primary">
            Latest News
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`relative overflow-hidden rounded-lg shadow-lg ${
                index === 0 || index === 2 || index === 4 || index === 5
                  ? "lg:row-span-2 h-48 lg:h-80"
                  : "lg:row-span-1 h-48 lg:h-48"
              } ` }
            >
              {/* Background Image */}
              <div className={`${blog.image}`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black hover:bg-black/30 transition-all duration-250 bg-opacity-50"></div>

              {/* Ribbon for Date */}
              <div className="absolute top-4 shadow-white">
                <p className="bg-white text-linkTextColor text-xs font-bold px-3 py-1 rounded-r-full">
                  {blog.date}
                </p>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 text-white">
                <h4 className="text-md font-semibold mt-10">{blog.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
