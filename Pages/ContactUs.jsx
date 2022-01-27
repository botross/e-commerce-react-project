import React from 'react';
import Contact from "../images/Contact.webp"
function ContactUs() {
  return (
      <>
      <img src={Contact} alt=""  width={"100%"} />
    <div className="row my-5">
    <h4 className="mx-5 mt-5  display-5 st"><strong>Get In Touch</strong></h4>
      <div className="col-lg-6 m-5 border p-5 col-sm-12">

  <form class="px-4 py-3"> 
  <div className="row">
    <div className="col-lg-6 col-xs-12">
    <div class="mb-5">
    <label for="First" className="form-label h5 mb-3">First name</label>
  <input type="email" className="form-control form-control-md" id="First" />
  </div>
    </div>
    <div className="col-lg-6 col-xs-12">
    <div className="mb-5">
    <label for="Last" className="form-label h5  mb-3">Last name</label>
  <input type="email" className="form-control form-control-md" id="Last" />
  </div>
    </div>
    <div className="col-lg-12 ">

  <div className="mb-5">
  <label for="Email" className="form-label h5  mb-3">Email address</label>
  <input type="email" className="form-control form-control-md" id="Email" placeholder="name@example.com"/>
</div>

    </div>
    <div className="col-lg-12">
<div className="mb-5">
  <label for="Subject" className="form-label h5  mb-3">Subject</label>
  <input type="email" className="form-control form-control-md" id="Subject" />
</div>
</div>
<div className="col-lg-12">
<div className="mb-3">
  <label for="message" className="form-label h5 mb-3">Message</label>
  <textarea className="form-control form-control-md" id="message" rows="3"></textarea>
</div>
</div>


  </div>

  </form>
  <div className="dropdown-divider"></div>


    <button className="btn btn-primary w-100 mt-5">Send Message</button>
</div>
        <div className="col-lg-5 align-self-center">
        <div class="p-4 border mb-3">
<span class="d-block text-primary h5 text-uppercase">New York</span>
<p class="mb-0 h6">203 Fake St. Mountain View, San Francisco, California, USA</p>
</div>
<div class="p-4 border mb-3">
<span class="d-block text-primary h5 text-uppercase">London</span>
<p class="mb-0 h6">203 Fake St. Mountain View, San Francisco, California, United kingdom</p>
</div>
<div class="p-4 border mb-3">
<span class="d-block text-primary h5 text-uppercase">Canada</span>
<p class="mb-0 h6">203 Fake St. Mountain View, San Francisco, Tronto, Canada</p>
</div>
<div class="p-4 border mb-3">
<span class="d-block text-primary h5 text-uppercase">Australia</span>
<p class="mb-0 h6">203 Fake St. Mountain View, San Francisco, Tronto, Australia</p>
</div>
        </div>
    </div>
      </>   
  )
  }
export default ContactUs;
