import "keen-slider/keen-slider.min.css"
import ContactSection from "../components/HomeComponents/ContactSection"
import MainWrapper from "../components/ui/Main"
import Footer from "../components/ui/Footer"
import InfoSection from "../components/AboutComponents/InfoSection"
import WhyUsSection from "../components/AboutComponents/WhyUsSection"
import TestimonialSection from "../components/AboutComponents/TestimonialSection"
import HeaderSection from "../components/AboutComponents/HeaderSection"
import PortfolioSection from "../components/AboutComponents/PortfolioSection"

const meta = {
  title: "About - Exquisite Wood Floors",
  description: "Learn more about the Exquisite Wood Floors family",
  url: "https://www.exquisitewoodfloors.com/about",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
  imageAlt: "Exquisite Wood Floors",
}

const About = () => {
  return (
    <MainWrapper heading={meta} pos="relative">
      <HeaderSection />

      <InfoSection />

      <WhyUsSection />

      <PortfolioSection />

      <TestimonialSection />

      <ContactSection
        bgColor="brand.500"
        contactFormVariant="work"
        contactInfoTextColor="brand.200"
        headingColor="brand.200"
        formLabelColor="white"
        logoColor="white"
      />

      <Footer
        bgColor="brand.500"
        borderTop="1px solid #3a6061"
        color="brand.100"
      />
    </MainWrapper>
  )
}

export default About
