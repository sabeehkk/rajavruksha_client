import React, { useState } from "react";
import "./jobCareer.css"
import axios from 'react-axios';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};
  
    // Form validation
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "This field is required. Please input a valid email.";
    if (!formData.phone) formErrors.phone = "This field is required. Please input a phone number.";
  
    setErrors(formErrors);
  
    // If there are no form errors, proceed with submitting the data
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/careerForm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Form submitted successfully", data);
        } else {
          console.error("Form submission failed", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred during form submission", error);
      }
    }
  };

  return (
    <section className="containers" >
      <div className="job-description" data-aos="fade-right">
        <h2>BUSINESS DEVELOPMENT EXECUTIVE</h2>
        <h3>JOB Role Description</h3>
        <p>
          The Business Development Executive will be responsible for new business
          development and overall business growth. Duties will include identifying
          new business opportunities, building and maintaining client relationships,
          developing and executing sales strategies, and providing excellent customer
          service and support.
        </p>
        <h4>Qualifications</h4>
        <p>MBA in Marketing</p>
        <h4>Skills</h4>
        <ul>
          <li>New Business Development & Lead Generation.</li>
          <li>Excellent Communication.</li>
          <li>Proven track record in meeting and exceeding sales targets.</li>
          <li>Ability to work independently and as part of a team.</li>
          <li>Strong problem-solving and decision-making skills.</li>
          <li>Positive attitude and willingness to learn and adapt to new challenges.</li>
          <li>Experience in the real estate is a plus.</li>
          <li>Four wheeler driving mandatory for Male candidates.</li>
          <li>Candidates with multiple linguistic proficiency are preferred.</li>
        </ul>
        <h4>Experience</h4>
        <p>1-2 Years</p>
        <h4>Salary</h4>
        <p>15K-30K</p>
      </div>
      <form className="career-form" data-aos="fade-left"  onSubmit={handleSubmit} typeof="intype">
        <h2>Career Form</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone no"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form" >
          <label htmlFor="file">Upload CV *</label>
          <input 
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".doc,.docx,.pdf"
            />
        </div>
      
        <div className="form-group">
          {/* <input type="checkbox" id="consent" required /> */}
          <label htmlFor="consent">
            I hereby authorize Rajavruksha Realtors Pvt Ltd to contact me via phone and
            email regarding my enquiry. I understand that this communication may
            include follow-up calls, emails, and other messages to assist with my
            enquiry and provide further information about your services. This will
            override the registry on DND/NDNC.
          </label>
        </div>

        
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default CareerForm;
