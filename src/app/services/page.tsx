import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceTabs from "../components/Servicetabs";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="services-page">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>
            Professional cleaning solutions designed for businesses and homes in
            Miami, Florida.
          </p>
        </div>

        <ServiceTabs />
      </div>
      <Footer />
    </>
  );
}
