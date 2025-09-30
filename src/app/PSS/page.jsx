'use client'
import Image from "next/image"
export default function PSS(){
    return(
        <>
        <div className="main1_PSS">
        <div className="container1_PSS">
            <div className="row1_PSS">
                <div className="col1_PSS">
                    <Image src="/images/ser5.png" width={333} height={303} alt="ser55"/>
                </div>
                <div className="col2_PSS">
                    <p>Transbolt supports solar and battery storage projects with reliable earthing, surge, and lightning protection systems. Our solutions ensure the safety, stability, and longevity of renewable energy infrastructure across all scales — from rooftop setups to utility-scale plants.</p>
                <li> End-to-end Solar EPC solutions for small & medium-scale projects</li>
                <li> Cutting-edge engineering with efficient procurement</li>
                <li> Reliable, sustainable infrastructure via solar innovation</li>
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
      .main1_PSS{
      padding:30px 0px;
      }
        .container1_PSS {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_PSS{
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_PSS,
        .col2_PSS {
          width: 45%;
        }

        .col1_PSS img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_PSS p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_PSS li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"
        }

        @media (max-width: 768px) {
          .col1_PSS,
          .col2_PSS {
            width: 100%;
          }

          .row1_PSS {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}