// import "../../Styles/Solutions.css"
// import Link from "next/link"
// import Image from "next/image"
// export default function Solutions(){
//     return(
//         <>
//       <div className="main1_Solutions">
//         <div className="container1_Solutions">
//             <div className="row1_Solutions">
//                 <div className="col1_Solutions">
//                     <Image src="/images/one1.png" width={250} height={277} alt="one1"/>
//                     <h3>Advance Earthing Solutions</h3>
//                     <Link href="./AES">Read more</Link>
//                 </div>
//                 <div className="col2_Solutions">
//                     <Image src="/images/ltpt.jpg" width={250} height={290} alt="two2"/>
//                     <h3>Advance Lightning System</h3>
//                     <Link href="./ALS">Read more</Link>
//                 </div>
//             </div>
//                 <div className="row2_Solutions">
//             <div className="col3_Solutions">
//                     <Image src="/images/three3.png" width={250} height={277} alt="three3"/>
//                     <h3>Smart Over-voltage Protection System</h3>
//                     <Link href="./SOV">Read more</Link>
//             </div>
//             <div className="col4_Solutions">
//                     <Image src="/images/solar-EPC.png" width={250} height={277} alt="four4"/>
//                     <h3>Solar EPC</h3>
//                     <Link href="./SVS">Read more</Link>
//             </div>
//         </div>
//         <div className="row3_Solutions">
//             <div className="col5_Solutions">
//                     <Image src="/images/five5.png" width={250} height={277} alt="five5"/>
//                     <h3>Advance UL Certified Fire Safety Solution</h3>
//                     <Link href="./AUS">Read more</Link>
//             </div>
//         </div>
//         </div>
//         </div>     
//         </>
//     )
// }

import "../../Styles/Solutions.css"
import Link from "next/link"
import Image from "next/image"
export default function Solutions(){
    return(
        <>
      <div className="main1_Solutions">
        <div className="container1_Solutions">
            <div className="row1_Solutions">
                <div className="col1_Solutions">
                    {/* <Image src="/images/Advance-Lightning.png" width={250} height={277} alt="one1"/> */}
                    <Image src="/images/ALS11.jpeg" width={250} height={277} alt="one1"/>
                    <h3>Advance Earthing Solutions</h3>
                    <Link href="./AES">Read more</Link>
                </div>
                <div className="col2_Solutions">
                    <Image src="/images/ltpt.jpg" width={250} height={290} alt="two2"/>
                    <h3>Advance Lightning System</h3>
                    <Link href="./ALS">Read more</Link>
                </div>
            </div>
                <div className="row2_Solutions">
            <div className="col3_Solutions">
                    <Image src="/images/three3.png" width={250} height={277} alt="three3"/>
                    <h3>Smart Over-voltage Protection System</h3>
                    <Link href="./SOV">Read more</Link>
            </div>
            <div className="col4_Solutions">
                    <Image src="/images/solar-EPC.png" width={250} height={277} alt="four4"/>
                    <h3>Solar EPC</h3>
                    <Link href="./SVS">Read more</Link>
            </div>
        </div>
        <div className="row3_Solutions">
            <div className="col5_Solutions">
                    <Image src="/images/Fire-Safety.png" width={250} height={277} alt="five5"/>
                    <h3>Advance UL Certified Fire Safety Solution</h3>
                    <Link href="./AUS">Read more</Link>
            </div>
                       <div className="col6_Solutions">
                    <Image src="/images/BESS.png" width={250} height={277} alt="five5"/>
                    <h3>Battery Energy Storage Systems</h3>
                    <Link href="./BESS">Read more</Link>
            </div>
        </div>
        </div>
        </div>     
        </>
    )
}