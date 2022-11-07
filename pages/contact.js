import ContactSection from "../components/ui/ContactSection";
import Footer from "../components/ui/Footer";
import MainWrapper from "../components/ui/Main";

const meta = {
  title: "Contact - Exquisite Wood Floors",
  description: "Get A Quote Today!",
  url: "https://www.exquisitewoodfloors.com/contact",
  twitter: "https://twitter.com/ewfny",
  imageUrl: "https://www.exquisitewoodfloors.com/images/twitter.png",
  imageAlt: "Exquisite Wood Floors",
};

const Contact = () => {
  return (
    <MainWrapper heading={meta}>
      <div className="lg:pt-56">
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
      </div>
    </MainWrapper>
  );
};
export default Contact;