"use client";

import React, { useEffect } from "react";
import "../../Styles/CompanyProfile.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Image from "next/image";

export default function CompanyProfile() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const $ = require("jquery");
      require("slick-carousel");

      const $slider = $(".row7_CF");

      if ($slider.length > 0 && !$slider.hasClass("slick-initialized")) {
        $slider.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 3000,
          cssEase: "linear",
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 300, settings: "unslick" },
          ],
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>About Us | Transbolt Lightning Protection Experts</title>
        <meta
          name="description"
          content="CompanyProfile Transbolt – India&apos;s trusted provider of lightning protection systems, earthing solutions, and surge protection. Experience. Innovation. Safety."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="About Transbolt | Lightning Protection Specialists"
        />
        <meta
          property="og:description"
          content="Transbolt is a leading lightning protection company in India, offering advanced earthing, surge protection, and LPS installation services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.transbolt.in/About" />
        <meta property="og:site_name" content="Transbolt" />

        <meta
          name="keywords"
          content="about Transbolt, lightning protection company India, surge protection experts, earthing specialists, lightning arresters, LPS India"
        />
      </Head>

      <div className="container1_CF">
        <div className="row1_CF">
          <div className="col1_CF">
            <h2>About Us</h2>
          </div>
        </div>
      </div>

      <div className="container4_CF">
        <h2>How Transbolt Helps</h2>
        <div className="row7_CF">
          <div className="col9_CF">
            <h2>TRANSBOLT</h2>
          </div>
          <div className="col10_CF">
            <Image src="/images/BIS.jpg" width={200} height={162} alt="BIS" />
          </div>
          <div className="col11_CF">
            <Image src="/images/deal.jpg" width={200} height={200} alt="deal" />
          </div>
          <div className="col12_CF">
            <Image src="/images/earth.png" width={200} height={134} alt="earth" />
          </div>
          <div className="col13_CF">
            <Image src="/images/IEC_logo.jpg" width={200} height={52} alt="IEC_logo" />
          </div>
          <div className="col14_CF">
            <Image src="/images/spdd.png" width={200} height={195} alt="spdd" />
          </div>
        </div>
      </div>

      <div className="container2_CF">
        <div className="row2_CF">
          <div className="col2_CF">
            <p>
              "We are <b>INDIA'S FIRST</b> company to provide comprehensive Earthing,
              Lightning Protection, and over-voltage protection solutions,
              establishing a legacy of unparalleled safety and reliability. Our team
              of experts works around the clock to ensure the highest standards of
              safety and compliance. With a wealth of experience and a dynamic
              approach, we offer tailored services that meet the unique needs of our
              clients.
              <br />
              <br />
              We are proud to have protected India&apos;s most prestigious and
              critical projects, including airports, the New Parliament building,
              high-speed rail and metro projects, railway tunnel projects,
              refineries, tank farms, telecom sites, data centers, PV plants, and
              high-rise buildings."
            </p>
          </div>
        </div>
        <div className="row3_CF">
          <div className="col3_CF">
            <h2>Our Mission</h2>
          </div>
        </div>
        <div className="row4_CF">
          <div className="col4_CF">
            <Image src="/images/target.png" width={250} height={250} alt="trans-mision"  />
          </div>
          <div className="col5_CF">
            <p>
              Our mission is to provide the highest quality lightning protection,
              lightning detection and early warning system, earthing systems, surge
              protection, and power quality services for a smarter future. We are
              committed to safeguarding lives, infrastructure, and investments
              through innovative and reliable technologies. By continuously
              advancing our expertise and services, we aim to exceed customer
              expectations, promote sustainability, and set new industry standards.
              Our dedication to excellence drives us to deliver customized solutions
              that ensure safety, efficiency, and resilience in an ever-changing
              world.
            </p>
          </div>
        </div>
        <div className="row5_CF">
          <div className="col6_CF">
            <h2>Our Vision</h2>
          </div>
        </div>
        <div className="row6_CF">
          <div className="col7_CF">
            <p>
              At Transbolt, our vision is to be the leading force in powering safe,
              resilient, and future-ready infrastructure across India and beyond. We
              are committed to redefining standards in earthing, lightning
              protection, and over-voltage protection by delivering innovative,
              reliable, and comprehensive solutions for the most critical and
              complex projects. We envision a world where every structure — from
              high-rise towers to transport systems — is protected by intelligent,
              sustainable, and expertly engineered electrical safety systems. Through
              technological excellence, deep domain expertise, and a relentless
              focus on quality, we aim to empower progress while ensuring people,
              property, and systems remain secure in every storm.
            </p>
          </div>
          <div className="col8_CF">
            <Image src="/images/vision-1.png" width={500} height={387} alt="our-vision"  />
          </div>
        </div>
      </div>
    </>
  );
}