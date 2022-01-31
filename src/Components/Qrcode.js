import react from "react";
import './Qrcode.css'



 function Qrcode() {
     return (
        <div className="qrcode">
            <div className="container">
                 
                 <img className="scanner" src="images/logo.png" alt=""/>
                <div>
                <h1>Improve your front-end skills by building projects</h1>
                
                <p> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </p> 
                </div>
            </div>
         </div>
        
        
     );

 }
  export default Qrcode;