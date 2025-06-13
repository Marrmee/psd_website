"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function FloatingLightsAnimation() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set mounted to true after component mounts on client side
    setIsMounted(true)
    
    // This effect runs only on client-side
    const headers = document.querySelectorAll(".header")
    headers.forEach((header, index) => {
      setTimeout(() => {
        header.classList.add("visible")
      }, index * 3500)
    })
  }, [])

  return (
    <div className="animation-wrapper">
      <div className="animation-container">
        {/* Animated text headers - only render after client-side mount */}
        {isMounted && (
          <>
            <p id="head1" className="header">
              Accelerating Personalized Medicine Research
            </p>
            <p id="head2" className="header">
              Decentralized
            </p>
            <p id="head3" className="header">
              Transparent
            </p>
            <p id="head4" className="header">
              Funding research for life-altering diseases
            </p>
            <p id="head5" className="header">
              Welcome to Poscidon
            </p>
          </>
        )}

        {/* Floating light particles */}
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      </div>  

      <style jsx>{`
        .animation-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .animation-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: radial-gradient(#010737, #020a4f);
          animation: fadeIn 1s ease-out;
        }

        .light {
          position: absolute;
          width: 0px;
          opacity: .75;
          background-color: white;
          box-shadow: #e9f1f1 0px 0px 20px 2px;
          opacity: 0;
          top: 100vh;
          bottom: 0px;
          left: 0px;
          right: 0px;
          margin: auto;
          pointer-events: none;
        }

        .x1 {
          animation: floatUp 4s infinite linear;
          transform: scale(1.0);
        }

        .x2 {
          animation: floatUp 7s infinite linear;
          transform: scale(1.6);
          left: 15%;
        }

        .x3 {
          animation: floatUp 2.5s infinite linear;
          transform: scale(.5);
          left: -15%;
        }

        .x4 {
          animation: floatUp 4.5s infinite linear;
          transform: scale(1.2);
          left: -34%;
        }

        .x5 {
          animation: floatUp 8s infinite linear;
          transform: scale(2.2);
          left: -57%;
        }

        .x6 {
          animation: floatUp 3s infinite linear;
          transform: scale(.8);
          left: -81%;
        }

        .x7 {
          animation: floatUp 5.3s infinite linear;
          transform: scale(3.2);
          left: 37%;
        }

        .x8 {
          animation: floatUp 4.7s infinite linear;
          transform: scale(1.7);
          left: 62%;
        }

        .x9 {
          animation: floatUp 4.1s infinite linear;
          transform: scale(0.9);
          left: 85%;
        }

        @keyframes floatUp {
          0% {
            top: 100vh;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            top: 0vh;
            opacity: .8;
          }
          75% {
            opacity: 1;
          }
          100% {
            top: -100vh;
            opacity: 0;
          }
        }

        .header {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: 200;
          color: white;
          font-size: 3.5em;
          width: 100%;
          text-align: center;
          opacity: 0;
          pointer-events: none;
        }

        .header.visible {
          opacity: 1;
        }

        #head1 {
          animation: fadeOut 3s ease-in;
        }

        #head2 {
          animation: fadeOut 3s ease-in;
          animation-delay: 3.5s;
        }

        #head3 {
          animation: fadeOut 3s ease-in;
          animation-delay: 7s;
        }

        #head4 {
          animation: fadeOut 3s ease-in;
          animation-delay: 10.5s;
        }

        #head5 {
          animation: finalFade 3s ease-in;
          animation-fill-mode: forwards;
          animation-delay: 14s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          80% {
            opacity: .9;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes finalFade {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          80% {
            opacity: .9;
          }
          100% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .header {
            font-size: 1.5em;
            width: 90%;
          }
          
          .animation-button {
            width: 250px;
            font-size: 1.1em;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .header {
            font-size: 2em;
            width: 95%;
          }
          
          .animation-button {
            width: 280px;
            font-size: 1.2em;
            height: 55px;
            padding: 0 15px;
          }

          .external-button {
            width: 280px;
            font-size: 1.2em;
            height: 55px;
            padding: 0 15px;
          }
        }

        .external-button-container {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          pointer-events: auto;
        }

        .external-button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: white;
          width: 350px;
          height: 70px;
          font-size: 1.5em;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
          padding: 0 30px;
          white-space: nowrap;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          pointer-events: auto;
        }

        .external-button:hover {
          border: 3px solid #ffffff;
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  )
}
