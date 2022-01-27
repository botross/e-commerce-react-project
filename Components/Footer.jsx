import React from 'react';
import {FaGoogle , FaTwitter , FaFacebook , FaHome , FaInstagram ,FaLinkedin ,FaGithub ,FaMailBulk ,FaPhone} from "react-icons/fa"
function Footerr() {
  return(

    <>
    
<footer className="text-center text-lg-start bg-light text-muted mt-5">

  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
   
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
 
 
    <div>
      <span  className="me-4 text-reset">
        <FaFacebook />
      </span>
      <span  className="me-4 text-reset">
      <FaTwitter />
      </span>
      <span  className="me-4 text-reset">
        <FaGoogle />
      </span>
      <span  className="me-4 text-reset">
        <FaInstagram/>
      </span>
      <span  className="me-4 text-reset">
        <FaLinkedin/>
      </span>
      <span className="me-4 text-reset">
        <FaGithub/>
      </span>
    </div>
   
  </section>
 


  <section className="">
    <div className="container text-center text-md-start mt-5">
   
      <div className="row mt-3">
     
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>SHOPMAX
          </h6>
          <p>
          Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      

     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
      

       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
       

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><FaHome/> New York, NY 10012, US</p>
          <p>
            <FaMailBulk />
              info@example.com
          </p>
          <p><FaPhone /> + 01 234 567 88</p>
          <p><FaPhone /> + 01 234 567 89</p>
        </div>
      
      </div>
    </div>
  </section>

</footer>
    </>

  )
  }
export default Footerr;
