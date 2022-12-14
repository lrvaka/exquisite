import "keen-slider/keen-slider.min.css";
import MainWrapper from "../components/ui/Main";
import Footer from "../components/ui/Footer";
import InfoSection from "../components/AboutComponents/InfoSection";
import WhyUsSection from "../components/AboutComponents/WhyUsSection";
import TestimonialSection from "../components/AboutComponents/TestimonialSection";
import HeaderSection from "../components/AboutComponents/HeaderSection";
import PortfolioSection from "../components/AboutComponents/PortfolioSection";
import ContactMessage from "../components/ui/ContactMessage";

const meta = {
  title: "About - Exquisite Wood Floors",
  description: "Learn more about the Exquisite Wood Floors family",
  url: "https://www.exquisitewoodfloors.com/about",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.jpeg",
  imageAlt: "Exquisite Wood Floors",
};

const About = () => {
  return (
    <MainWrapper heading={meta} pos="relative">
      <HeaderSection />

      <InfoSection />

      <WhyUsSection />

      <PortfolioSection />

      <TestimonialSection />

      <ContactMessage bgColor="bg-theme-500" headingColor="text-theme-100" textColor="text-theme-10" fillColor="fill-theme-100"/>

      <Footer bgColor="bg-theme-500" />
    </MainWrapper>
  );
};

export default About;
