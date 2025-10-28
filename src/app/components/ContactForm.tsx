"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission - replace with your actual API call
    try {
      // TODO: Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll get back to you soon.",
      });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        {/* Form Section */}
        <div className="form-section">
          <h2 className="form-title">Send Us a Message</h2>
          <p className="form-subtitle">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Tell us about your cleaning needs..."
                rows={6}
              />
            </div>

            {submitStatus.type && (
              <div
                className={`form-status ${
                  submitStatus.type === "success"
                    ? "form-status-success"
                    : "form-status-error"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit-btn"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Support Info Section */}
        <div className="support-section">
          <h2 className="support-title">Get A Personalized Quote</h2>
          <p className="support-subtitle">
            Reach out to us directly for immediate assistance
          </p>

          <div className="support-info">
            <div className="support-item">
              <div className="support-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="support-details">
                <h3>Email</h3>
                <a href="mailto:info@lustracleaning.com">
                  lustraserviceshq@gmail.com
                </a>
              </div>
            </div>

            <div className="support-item">
              <div className="support-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="support-details">
                <h3>Office</h3>
                <a href="tel:+13055551234">(786) 599-7382 or (786) 299-2684</a>
              </div>
            </div>

            <div className="support-item">
              <div className="support-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="support-details">
                <h3>Location</h3>
                <p>Miami, Florida</p>
              </div>
            </div>
          </div>

          <div className="support-hours">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
