"use client";

import React from "react";
import Link from "next/link";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: string;
  buttonSize?: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle || "")
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize || "")
    ? buttonSize
    : SIZES[0];

  return (
    <Link href="/services" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
