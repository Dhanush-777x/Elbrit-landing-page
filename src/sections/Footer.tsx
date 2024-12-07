import Phone from "@/assets/phone.svg";
import Mail from "@/assets/mail.svg";
import Location from "@/assets/location.svg";
import Logo from "@/assets/logo.png";
import locationIcon from "@/assets/locationIcon.svg"
import Image from "next/image";


const Footer = () => {
  const cards = [
    {
      id: 1,
      image: Phone, // Replace with your image URL
      heading: "About Us",
      description:
        "Learn more about our mission, vision, and the team driving innovation.",
    },
    {
      id: 2,
      image: Mail, // Replace with your image URL
      heading: "Contact Us",
      description: "Reach out to us for support, inquiries, or collaboration.",
    },
    {
      id: 3,
      image: Location, // Replace with your image URL
      heading: "Follow Us",
      description: "Stay connected with us on social media platforms.",
    },
  ];

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-6">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center gap-4 bg-[#215D72] p-4 rounded-lg"
            >
              {/* Image/Logo */}
              <Image
                src={card.image.src}
                width={50}
                height={50}
                alt={card.heading}
                className="object-cover"
              />

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-semibold">{card.heading}</h3>
                <p className="text-sm text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logo and Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="gap-4 flex flex-col items-center justify-center w-full">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <Image
                src={Logo} // Replace with your logo URL
                width={60}
                height={60}
                alt="Logo"
                className="bg-white p-6 w-32 rounded-lg"
              />
            </div>
            {/* Company Info */}
            <p className="text-white text-sm mt-4 text-center">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-center items-center text-center text-white text-sm border-t border-gray-700 pt-4">
          <Image src={locationIcon} width={10} height={10} alt="LocationIcon" className="mr-2" />
          {new Date().getFullYear()} Elbrit Life Sciences Private Limited. C20,
          BKC, G Block, Mumbai 400051
        </div>
      </div>
    </footer>
  );
};

export default Footer;
