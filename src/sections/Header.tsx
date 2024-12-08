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
              <a href="#">Features</a>
              <a href="#">Ingredients</a>
              <a href="#">Blogs</a>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight shadow-md">
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
