import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="max-w-[1250px] mx-auto p-5">
        <Hero />
        <Products />
        <About />
        <Contact />
      </div>
    </>
  );
}
