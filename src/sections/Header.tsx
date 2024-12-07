import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={100} width={100} />
            <Menu className="block md:hidden" />
            <nav className="hidden md:flex gap-6 text-black items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
        </div>
    </header>
  );
};
