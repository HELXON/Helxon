"use client";

import "./Button.scss";

export function Button({
  children,
  variant = "default",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const baseClass = "button";
  const variantClass = `button--${variant}`;
  const combinedClass = [baseClass, variantClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

