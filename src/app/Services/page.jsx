import "../../Styles/Service.css"
import Link from "next/link"
import Image from "next/image"
export default function Solutions(){
    return(
        <>
      <div className="main1_Service">
        <div className="container_Service">
            
        </div>
        <div className="container1_Service">
            <div className="row1_Service">
                <div className="col1_Service">
                    <Image src="/images/page1.png" width={250} height={290} alt="page1"/>
                    <h3>Advance Lightning Services</h3>
                    <Link href="./ALSser">Read more</Link>
                </div>
                <div className="col2_Service">
                    <Image src="/images/ser2.png" width={250} height={290} alt="ser2"/>
                    <h3>High-End Earthing Simulations</h3>
                    <Link href="./HEE">Read more</Link>
                </div>
            </div>
                <div className="row2_Service">
            <div className="col3_Service">
                    <Image src="/images/ser3.png" width={250} height={290} alt="ser3"/>
                    <h3>Electrical Safety Audits</h3>
                    <Link href="./ESA">Read more</Link>
            </div>
            <div className="col4_Service">
                    <Image src="/images/ser4.png" width={250} height={290} alt="ser4"/>
                    <h3>Power Quality Analysis</h3>
                    <Link href="./PQA">Read more</Link>
            </div>
        </div>
        <div className="row3_Service">
            <div className="col5_Service">
                    <Image src="/images/ser5.png" width={250} height={290} alt="ser5"/>
                    <h3>Power System Studies</h3>
                    <Link href="./PSS">Read more</Link>
            </div>
        </div>
        </div>
        </div>     
        </>
    )
}