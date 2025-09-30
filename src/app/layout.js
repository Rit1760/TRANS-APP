'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import Loading from "./Loading.jsx"; 
import './globals.css';

// import { Poppins } from 'next/font/google';

// const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const crsr = document.querySelector("#crsr");
    const moveCursor = (e) => {
      gsap.to(crsr, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <html lang="en">
      <body >
        <div id="crsr"></div>
        <Loading>
          <Header />
          <main>{children}</main>
          <Footer />
        </Loading>
      </body>
    </html>
  );
}