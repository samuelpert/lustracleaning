import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We're here to help! Whether you need a quote or have questions about
            our services, we'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
