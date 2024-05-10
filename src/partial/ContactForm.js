import React from 'react'
import useState from 'react'
export default function ContactForm() {
  const [formData,setFormData] = React.useState(
    {
      name:"",
      lastName:"",
      email:"",
      subject:"",
      message:""
    }
  )
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
  };
  function handleSubmit(event) {
    event.preventDefault();

    // 1. Validate email
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (
      formData.name.length === 0 ||
      formData.lastName.length === 0 ||
      formData.subject === 0 ||
      formData.message.length < 10
    ) {
      alert("Please make sure to fill all fields properly.");
      return;
    }
    //valid submission work goes here
    console.log("Form submitted successfully!", formData);
  }
  function handleChange(event){
    console.log("here")
    const {name,value,type} = event.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name] : value
      }
    })
  }
  return (
<div className="container my-4 border border border-1" >
  <div className="row justify-content-center">
    <div className="col-lg-9">
      <h1 className="mb-3">Contact Us</h1>
      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label" >Name</label>
            <input type="text" className="form-control border border-black" id="name" name="name" value={formData.name} onChange={handleChange} required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="LastName" className="form-label">Last Name</label>
            <input type="text" className="form-control border border-black" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control border border-black" id="email" name="email" value={formData.email} onChange={handleChange}  required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control border border-black" id="subject" value={formData.subject} onChange={handleChange}  name="subject"/>
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control border border-danger-subtle" id="message" name="message" value={formData.message} onChange={handleChange}  rows="19" required></textarea>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-12">
                <button type="submit" onClick={handleSubmit} className="btn btn-dark w-100 fw-bold " >Send</button>
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
