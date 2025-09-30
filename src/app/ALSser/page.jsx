'use client'
import Image from "next/image"
export default function ALSser(){
    return(
        <>
        <div className="main1_ALSser">
        <div className="container1_ALSser">
            <div className="row1_ALSser">
                <div className="col1_ALSser">
<Image src="/images/page1.png" width={333} height={303} alt="page11"/>
                </div>
                <div className="col2_ALSser">
<p>At Advance Lightning Services, we specialize in providing comprehensive lightning protection solutions for residential, commercial, and industrial properties. With years of hands-on experience and a commitment to the highest safety standards, our mission is simple: to protect lives, property, and critical infrastructure from the destructive power of lightning</p>
               <li> Lightning Risk Assessment and Adequacy studies</li>
               <li> Advance Lightning Protection design Services</li>
               <li>Lightning monitoring and detection system</li>
               <li> Lightning audits according to IS / IEC / EN 62305...</li>
                </div>
            </div>
        </div>
        </div>

              <style jsx>{`
                    @font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato/Lato-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal; 
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal; 
}
      .main1_ALSser{
      padding:30px 0px;
      }
        .container1_ALSser {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_ALSser {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_ALSser,
        .col2_ALSser {
          width: 45%;
        }

        .col1_ALSser img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_ALSser p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_ALSser li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"

        }

        @media (max-width: 768px) {
          .col1_ALSser,
          .col2_ALSser {
            width: 100%;
          }

          .row1_ALSser{
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}