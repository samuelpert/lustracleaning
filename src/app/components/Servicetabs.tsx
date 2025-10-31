"use client";

import React, { useState } from "react";

type ServiceType = "commercial" | "construction" | "house";

interface ServiceData {
  title: string;
  description: string;
  features: string[];
  pricing: {
    title: string;
    items: { service: string; price: string }[];
  };
  additionalInfo: string;
}

const servicesData: Record<ServiceType, ServiceData> = {
  commercial: {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning solutions for offices, retail spaces, and commercial properties. We understand that a clean workspace enhances productivity and creates a positive impression on clients.",
    features: [
      "Office spaces and corporate buildings",
      "Retail stores and shopping centers",
      "Medical facilities and clinics",
      "Restaurants and food service areas",
      "Educational institutions",
      "Gym and fitness centers",
      "Banks and financial institutions",
    ],
    pricing: {
      title: "Commercial Rates",
      items: [
        { service: "Small Office (< 2,000 sq ft)", price: "$150 - $250" },
        {
          service: "Medium Office (2,000 - 5,000 sq ft)",
          price: "$250 - $450",
        },
        { service: "Large Office (> 5,000 sq ft)", price: "$450+" },
        { service: "Retail Space Cleaning", price: "$200 - $500" },
        { service: "Deep Cleaning Services", price: "$300 - $800" },
        { service: "Recurring Weekly Service", price: "15% Discount" },
      ],
    },
    additionalInfo:
      "All rates are estimates and may vary based on specific requirements, frequency, and facility condition. Contact us for a personalized quote.",
  },
  construction: {
    title: "Post-Construction Cleaning",
    description:
      "Specialized cleaning for newly built or renovated properties. We handle the tough job of removing construction debris, dust, and materials, leaving your space move-in ready.",
    features: [
      "Debris and dust removal",
      "Window and glass cleaning",
      "Floor cleaning and polishing",
      "Paint and adhesive removal",
      "Fixture and appliance cleaning",
      "Cabinet and countertop detailing",
      "Final touch-ups and inspection",
    ],
    pricing: {
      title: "Construction Cleaning Rates",
      items: [
        { service: "Small Project (< 1,500 sq ft)", price: "$300 - $500" },
        {
          service: "Medium Project (1,500 - 3,000 sq ft)",
          price: "$500 - $900",
        },
        { service: "Large Project (> 3,000 sq ft)", price: "$900+" },
        { service: "Rough Cleaning (Phase 1)", price: "$0.15 - $0.25/sq ft" },
        { service: "Final Cleaning (Phase 2)", price: "$0.20 - $0.35/sq ft" },
        {
          service: "Touch-up Cleaning (Phase 3)",
          price: "$0.10 - $0.15/sq ft",
        },
      ],
    },
    additionalInfo:
      "Post-construction cleaning requires specialized equipment and expertise. Prices vary based on project scope and debris level. We offer package deals for all three phases.",
  },
  house: {
    title: "House Cleaning",
    description:
      "Comprehensive residential cleaning services tailored to your home's needs. Whether you need regular maintenance or a one-time deep clean, we've got you covered.",
    features: [
      "Kitchen cleaning and sanitization",
      "Bathroom deep cleaning",
      "Living areas and bedrooms",
      "Dusting and vacuuming",
      "Floor mopping and polishing",
      "Window cleaning (interior)",
      "Laundry and linen service (add-on)",
    ],
    pricing: {
      title: "House Cleaning Rates",
      items: [
        { service: "Studio/1 Bedroom", price: "$100 - $150" },
        { service: "2 Bedrooms", price: "$150 - $200" },
        { service: "3 Bedrooms", price: "$200 - $280" },
        { service: "4+ Bedrooms", price: "$280+" },
        { service: "Deep Cleaning", price: "+$100 - $150" },
        { service: "Move In/Out Cleaning", price: "$250 - $450" },
      ],
    },
    additionalInfo:
      "Regular cleaning packages available with discounted rates. Deep cleaning recommended for first service or homes that haven't been professionally cleaned in 6+ months.",
  },
};

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>("commercial");

  const activeService = servicesData[activeTab];

  return (
    <div className="service-tabs-container">
      {/* Tab Buttons */}
      <div className="service-tabs">
        <button
          className={`service-tab ${
            activeTab === "commercial" ? "active" : ""
          }`}
          onClick={() => setActiveTab("commercial")}
        >
          <i className="fas fa-building"></i>
          Commercial
        </button>
        <button
          className={`service-tab ${
            activeTab === "construction" ? "active" : ""
          }`}
          onClick={() => setActiveTab("construction")}
        >
          <i className="fas fa-hard-hat"></i>
          Construction
        </button>
        <button
          className={`service-tab ${activeTab === "house" ? "active" : ""}`}
          onClick={() => setActiveTab("house")}
        >
          <i className="fas fa-home"></i>
          House
        </button>
      </div>

      {/* Tab Content */}
      <div className="service-content">
        <div className="service-content-grid">
          {/* Left Column - Service Details */}
          <div className="service-details">
            <h2>{activeService.title}</h2>
            <p className="service-description">{activeService.description}</p>

            <h3>What's Included:</h3>
            <ul className="service-features">
              {activeService.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="service-additional-info">
              <i className="fas fa-info-circle"></i>
              <p>{activeService.additionalInfo}</p>
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="service-pricing">
            <div className="pricing-card">
              <h3>{activeService.pricing.title}</h3>
              <div className="pricing-items">
                {activeService.pricing.items.map((item, index) => (
                  <div key={index} className="pricing-item">
                    <span className="pricing-service">{item.service}</span>
                    <span className="pricing-price">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pricing-cta">
                <p>Need a custom quote?</p>
                <a href="/contact" className="pricing-btn">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
