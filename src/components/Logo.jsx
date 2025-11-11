"use client";

import Image from "next/image";
import HelxonLogo from "@/app/assets/HelxonLogo.png";
import "./Logo.scss";

export function Logo() {
  return (
    <div className="logo">
      <div className="logo__icon">
        <Image
          src={HelxonLogo}
          alt="Helxon Logo"
          className="logo__img"
          width={156}
          height={51}
          priority
        />
      </div>
    </div>
  );
}

