"use client";

import "../../Styles/Projects.css";
import Head from 'next/head';
import Image from "next/image";

export default function Projects() {

  return (
    <>
      <Head>
        <title>Our Projects | Transbolt Lightning Protection Across India</title>
        <meta name="description" content="Explore Transbolt's completed lightning protection projects across residential, industrial, and commercial sectors. Trusted by leading clients across India." />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Transbolt | Lightning Protection Project Portfolio" />
        <meta property="og:description" content="View our successful lightning protection system implementations for factories, commercial buildings, hospitals, schools, and infrastructure sites across India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.transbolt.in/projects" />
        <meta property="og:site_name" content="Transbolt" />

        <meta name="keywords" content="lightning protection projects, lightning arrestor installation, electrical safety systems, earthing projects, industrial lightning protection, Transbolt India" />
      </Head>
      <div>
        <div className="cont1_projects" >
          <div className="row1_projects">
            <div className="col1_projects">
              <h2>Our Expertise</h2>
              <p>
                At Transbolt, we deliver cutting-edge protection solutions tailored for the world's most critical infrastructure. From tank farms and refineries to high-speed rail, telecom sites, and data centers, our systems ensure uncompromised safety and reliability.
              </p>
            </div>
          </div>
        </div>

        <div className="cont2_projects" >







           <div className="row2_projects">
            <div className="col2_projects">
              <Image src="/images/pro1.avif" width={300} height={200} alt="pro1" />
              <h2>Tank Farm Protection solution</h2>
            </div>
            <div className="col3_projects">
              <Image src="/images/pro2.avif" width={300} height={200} alt="pro2" />
              <h2>Refinery protection solution</h2>
            </div>
            <div className="col4_projects">
              <Image src="/images/pro3.avif" width={300} height={200} alt="pro3" />
              <h2>Indian Parliament Building Protection</h2>
            </div>
          </div> 

          <div className="row3_projects">
            <div className="col5_projects">
              <Image src="/images/pro4.avif" width={300} height={200} alt="pro4" />
              <h2>Safeguarding critical infrastructure of the Indian Armed Forces</h2>
            </div>
            <div className="col6_projects">
              <Image src="/images/pro5.avif" width={300} height={200} alt="pro5" />
              <h2>Protection solution for Solar Power Plants</h2>
            </div>
            <div className="col7_projects">
              <Image src="/images/pro6.avif" width={300} height={200} alt="pro6" />
              <h2>Telecom site protection</h2>
            </div>
          </div>

          <div className="row4_projects">
            <div className="col8_projects">
              <Image src="/images/pro7.avif" width={300} height={200} alt="pro7" />
              <h2>Protection solution for High Speed Rail project</h2>
            </div>
            <div className="col9_projects">
              <Image src="/images/pro8.avif" width={300} height={200} alt="pro8" />
              <h2>Protecting India's Skyline</h2>
            </div>
            <div className="col10_projects">
              <Image src="/images/pro9.avif" width={300} height={200} alt="pro9" />
              <h2>Protected Medical Infrastructure & Equipments</h2>
            </div>
          </div>

          <div className="col11_projects">
            <Image src="/images/pro10.avif" width={300} height={200} alt="pro10" />
            <h2>Data Centre Protection</h2>
          </div>
        </div> 
      </div>
    </>
  );
}