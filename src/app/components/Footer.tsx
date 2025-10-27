"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          We currently offer our services in Miami, Florida.
        </p>
        <p className="footer-subscription-text">Check zone availability.</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="footer-input"
              name="Zip code"
              type="Zip code"
              placeholder="Zip code"
            />
            <Button buttonStyle="btn--outline">Check Now</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link href="/sign-up">Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link href="/">Contact</Link>
            <Link href="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link href="/" className="social-logo">
              <Image
                src="/logo_white.png"
                alt="Lustra Cleaning"
                width={90}
                height={90}
              />
            </Link>
            <span className="website-rights">Lustra Cleaning© LLC 2025</span>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              href="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-facebook" />
            </Link>
            <Link
              className="social-icon-link twitter"
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
