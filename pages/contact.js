import ContactSection from "../components/ui/ContactSection";
import Footer from "../components/ui/Footer";

const Contact = () => {
  return (
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
  );
};
export default Contact;
