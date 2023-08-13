import Section from "../layouts/Section";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Section id="contact" title="Contact" des="Contact With Me">
      <div className="w-full">
        <div className="w-full h-auto flex flex-col gap-6 lgl:flex-row justify-between">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
