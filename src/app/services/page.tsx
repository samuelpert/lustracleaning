import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "60vh",
          padding: "4rem 2rem",
          background: "linear-gradient(135deg, #F4EDE4 0%, #FFFFFF 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#1F3C63",
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              color: "#5A6E8C",
              fontSize: "1.2rem",
              marginBottom: "3rem",
              lineHeight: "1.6",
            }}
          >
            Professional cleaning solutions designed for businesses and homes in
            Miami, Florida.
          </p>
        </div>
        <Cards />
      </div>
      <Footer />
    </>
  );
}
