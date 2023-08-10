import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import "./Footer.css";
const Footer = () => {
  return (
    // <footer id="footer">
    //   <div className="leftFooter">
    //     <h4>DOWNLOAD OUR APP</h4>
    //     <p>Download App for Android and IOS mobile phone</p>
    //     <img src={playStore} alt="playstore" />
    //     <img src={appStore} alt="Appstore" />
    //   </div>

    //   <div className="midFooter">
    //     <h1>ECOMMERCE.</h1>
    //     <p>High Quality is our first priority</p>

    //     <p>Copyrights 2021 &copy; MeAbhiSingh</p>
    //   </div>

    //   <div className="rightFooter">
    //     <h4>Follow Us</h4>
    //     <a href="http://instagram.com/meabhisingh">Instagram</a>
    //     <a href="http://youtube.com/6packprogramemr">Youtube</a>
    //     <a href="http://instagram.com/meabhisingh">Facebook</a>
    //   </div>
    // </footer>

    // New Footer

<div className=" ">

<footer style={{backgroundColor: ""}}>
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4">
       
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
       
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
       
      </div>
    </div>
  </div>
  <div className="text-white text-center p-3" style={{backgroundColor: "#000"}}>
    © 2023 Copyright:
    <a className="text-white" href="">Ecommerce</a>
  </div>
</footer>
</div>    

  );
};

export default Footer;
