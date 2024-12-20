import Blog from "@/sections/Blog";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import Ingredients from "@/sections/Ingredients";

export default function Home() {
  return (
    <div className="">
        <Header />
        <Hero/>
        <Features />
        <Ingredients /> 
        <Blog />
        <Footer />
    </div>
     );
}
