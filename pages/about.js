import "keen-slider/keen-slider.min.css";
import ContactSection from "../components/HomeComponents/ContactSection";
import MainWrapper from "../components/ui/Main";
import Footer from "../components/ui/Footer";
import InfoSection from "../components/AboutComponents/InfoSection";
import WhyUsSection from "../components/AboutComponents/WhyUsSection";
import TestimonialSection from "../components/AboutComponents/TestimonialSection";
import HeaderSection from "../components/AboutComponents/HeaderSection";
import PortfolioSection from "../components/AboutComponents/PortfolioSection";

const meta = {
  title: "About - Exquisite Wood Floors",
  description: "Learn more about the Exquisite Wood Floors family",
  url: "https://www.exquisitewoodfloors.com/about",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
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

      <ContactSection
        bgColor="bg-theme-500"
        infoSectionColor="text-theme-100"
        headingColor="text-theme-100"
        formLabelColor="text-theme-10"
        inputBorderColor="border-b-theme-100"
        inputTextColor="text-theme-10"
        iconColor="text-theme-10"
      />

      <Footer bgColor="bg-theme-500" textColor="text-theme-100" />
    </MainWrapper>
  );
};

export default About;
