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
      image: Phone,
      heading: "Phone Number",
      description:
        "+974 3118 1843",
    },
    {
      id: 2,
      image: Mail, 
      heading: "Email Address",
      description: "Elbrithcqhr@gmail.com",
    },
    {
      id: 3,
      image: Location, 
      heading: "Office Location",
      description: "Ambassador Street, Zone 61",
    },
  ];

  return (
    <footer className="bg-primary text-white py-10" id="footerSection">
      <div className="container mx-auto px-6">
        {/* Cards Section */}
        <div className="flex gap-4 justify-center flex-wrap lg:flex-nowrap lg:justify-evenly mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex w-full md:w-1/2 lg:w-1/3 justify-start items-center gap-8 bg-[#215D72] px-6 py-4 rounded-lg shadow-md hover:shadow-lg"
            >
              {/* Image/Logo */}
              <Image
                src={card.image.src}
                width={60}
                height={60}
                alt={card.heading}
                className="object-cover w-12 h-12"
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
          <div className="gap-4 flex flex-row items-center justify-center w-full">
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
