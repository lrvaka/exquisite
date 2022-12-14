import Head from "next/head";
import dynamic from "next/dynamic";
import SlideShowSection from "../components/HomeComponents/SlideshowSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import Footer from "../components/ui/Footer";
import React from "react";
import MainWrapper from "../components/ui/Main";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import AboutUsSection from "../components/HomeComponents/AboutUsSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import MarqueeSection from "../components/HomeComponents/MarqueeSection";
import ContactMessage from "../components/ui/ContactMessage";

const MessageSection = dynamic(() =>
  import("../components/HomeComponents/MessageSectionAnimation")
);

const meta = {
  title: "Exquisite Wood Floors: Hardwood Flooring You Can Trust",
  description:
    "We make any living space exquisite with our reliable and appealing hardwood flooring",
  url: "https://www.exquisitewoodfloors.com",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.jpeg",
  imageAlt: "Exquisite Wood Floors",
};

const Home = (props) => {
  return (
    <MainWrapper heading={meta}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <MarqueeSection />
      <AboutUsSection />
      <TestimonialSection />
      <ServicesSection />
      <MessageSection />
      <SlideShowSection />
      <ContactMessage />
      <Footer bgColor="bg-theme-500" />
    </MainWrapper>
  );
};

export default Home;
