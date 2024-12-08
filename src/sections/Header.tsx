import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md z-[1000]">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={100} width={100} className="bg-white p-4 rounded-lg shadow-md" />
            <Menu className="block md:hidden" />
            <nav className="hidden md:flex gap-6 text-black items-center">
              <a href="#ingredientsSection">Ingredients</a>
              <a href="#blogSection">Blogs</a>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight shadow-md hover:scale-105 transition-all duration-200">
                <a href="#footerSection">Contact Us</a>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
