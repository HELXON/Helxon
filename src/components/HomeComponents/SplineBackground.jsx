"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import "./SplineBackground.scss";

export function SplineBackground() {
  return (
    <div className="spline-background">
      <Spline scene="scene.splinecode" wasmPath="/" />
    </div>
  );
}

