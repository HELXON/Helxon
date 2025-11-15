"use client";

/* eslint-disable @next/next/no-img-element */

import React from "react";
import Spline from "@splinetool/react-spline";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import vorxocGreenLogo from "@/app/assets/vorxocGreen.svg";
// import BounceCards from "./BounceCards";

import CrowdStrikeLogo from "@/app/assets/EndpointLogos/CrowdStrike_logo.svg";
import ESETLogo from "@/app/assets/EndpointLogos/ESET_logo.svg";
import KasperskyLogo from "@/app/assets/EndpointLogos/Kaspersky_logo.svg";
import McAfeeLogo from "@/app/assets/EndpointLogos/McAfee_logo.svg";
import SentinelOneLogo from "@/app/assets/EndpointLogos/SentinelOne_logo.svg";

import "./UnifiedSolution.scss";

export function UnifiedSolution() {
  const endpointLogos = [
    CrowdStrikeLogo,
    ESETLogo,
    KasperskyLogo,
    McAfeeLogo,
    SentinelOneLogo,
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <section className="unified-solution">
      <div className="unified-solution__spline-wrapper">
        <video
          className="unified-solution__background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/robotBackground.mp4" type="video/mp4" />
        </video>
        <Spline scene="robotScene.splinecode" wasmPath="/" />
      </div>

      <div className="unified-solution__content">
        <div className="unified-solution__main-content">
          <div className="unified-solution__branding">
            <div className="unified-solution__branding-wrapper">
              <img
                src={vorxocGreenLogo.src ?? vorxocGreenLogo}
                alt="VORXOC"
                className="unified-solution__logo"
              />
              <span className="unified-solution__by-line">By Helxon</span>
            </div>
          </div>

          <h1 className="unified-solution__headline">
            All your security tools.
            <br />
            One intelligent SOC platform
          </h1>

          <p className="unified-solution__description">
            VORxoc by Helxon is a unified Security Operations Center as a Service
            (SOCaaS) platform that integrates with any security tool or data
            source giving you total visibility, faster detection, and automated
            response from one intelligent platform.
          </p>

          <button className="unified-solution__learn-more-btn">
            <span>Learn More</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="unified-solution__integration">
        <div className="unified-solution__integration-icon">
          <DotLottieReact
            src="https://lottie.host/b32a48b1-def6-42a7-bfbf-8f81a44af1e2/wyVSxiXQYK.lottie"
            loop
            autoplay
          />
        </div>
        <h2 className="unified-solution__integration-title">
          Seamless Integration
        </h2>
        <p className="unified-solution__integration-description">
          VORxoc connects effortlessly with your existing ecosystem from
          firewalls, SIEMs, cloud workloads, and endpoints to identity systems and
          compliance tools. Our platform supports API-based integration with
          industry leaders.
        </p>
      </div>

      {/* <div className="unified-solution__bounce-cards">
        <BounceCards
          className="unified-solution__bounce-cards-component"
          images={endpointLogos}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div> */}
    </section>
  );
}

