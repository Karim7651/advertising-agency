import React from 'react'

export default function ContactForm() {
  return (
<div className="container my-4 border border border-1" >
  <div className="row justify-content-center">
    <div className="col-lg-9">
      <h1 className="mb-3">Contact Us</h1>
      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control border border-black" id="name" name="name" required/>
          </div>
          <div className="col-md-6">
            <label for="LastName" className="form-label">Last Name</label>
            <input type="text" className="form-control border border-black" id="LastName" name="LastName" required/>
          </div>
          <div className="col-md-6">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control border border-black" id="email" name="email" required/>
          </div>
          <div className="col-md-6">
            <label for="subject" className="form-label">Subject</label>
            <input type="text" className="form-control border border-black" id="subject" name="subject"/>
          </div>
          <div className="col-12">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control border border-danger-subtle" id="message" name="message" rows="19" required></textarea>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-12">
                <button type="submit" className="btn btn-dark w-100 fw-bold " >Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    
  );
}
