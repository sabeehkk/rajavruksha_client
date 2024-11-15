import React, { useEffect, useState, useRef } from "react";
import "./jobCareer.css"

const BdeInternCareer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact_no: "",
        file: null,
    });
    const [errors, setErrors] = useState({});
    const fileInputRef = useRef(null);

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
        if (!formData.name) formErrors.name = "Enter the name";
        if (!formData.email) formErrors.email = "Please enter a valid email.";
        if (!formData.contact_no) formErrors.contact_no = "Please enter a phone number.";
        if (!formData.file) formErrors.file = "Please upload a file.";

        setErrors(formErrors);

        // If there are no form errors, proceed with submitting the data
        if (Object.keys(formErrors).length === 0) {
            try {
                const formDataToSubmit = new FormData();
                formDataToSubmit.append("name", formData.name);
                formDataToSubmit.append("email", formData.email);
                formDataToSubmit.append("contact_no", formData.contact_no);
                formDataToSubmit.append("file", formData.file);
                const response = await fetch("http://localhost:3000/careerForm", {
                    method: "POST",
                    body: formDataToSubmit
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Form submitted successfully", data);
                    alert("Form Submitted Successfully")
                    setFormData({
                        name: "",
                        email: "",
                        contact_no: "",
                        file: null,
                    })
                    fileInputRef.current.value = null;
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
                <h2>BUSINESS DEVELOPMENT EXECUTIVE INTERN</h2>
                <h3>Intern Program Details</h3>
                <p>
                    The internship program For Business Development Executive is set for a period of 3 months where in the interns will be trained in the below mentioned aspects.
                </p>
                {/* <h4>Qualifications</h4>
                <p>BBA, BBM, B.COM, MBA</p> */}
                {/* <h4>Skills</h4> */}
                <ul className="list-methods">
                    <li>Client communication12.</li>
                    <li>Negotiation skills.</li>
                    <li>Sales Techniques and Strategies.</li>
                    <li>Product/Service Knowledge.</li>
                    <li>Market Research and Industry Analysis.</li>
                    <li>Relationship Building and Networking.</li>
                    <li>Adaptability and Agility.</li>
                    <li>Ethical Marketing Practices.</li>
                    <li>Communication and Presentation Skills.</li>
                    <li>Time Management and Organization.</li>
                    <li>Handling Rejections and Resilience.</li>
                </ul>
                <p>During the internship program the interns will be provided a stipend amount of Rs.5,000/- to Rs.8,000/- monthly. Post the internship program the interns will be offered employment based on the assessment at the end of internship program. </p>
                <h4>Qualifications</h4>
                <p>BBA, BBM, B.COM, MBA</p>
                <h4>Requirements</h4>
                <p>Good communication and interpersonal skills.</p>
                <p>Passionate in learning new concepts</p>
                <p>Willing to research new marketing trends.</p>
                {/* <p>1-2 Years</p>
                <h4>Salary</h4>
                <p>15K-30K</p> */}
                <h4>Age</h4>
                <p>19-25 years</p>
                <h4>Timings</h4>
                <p>9.30 am to 6.30 pm</p>
                <h4>Job Category:<p>Business Development Executive Intern</p></h4>
                <h4>Job Type:<p>Internship </p> </h4>
                <h4>Internship Location:<p>Bangalore</p> </h4>
            </div>
            <form className="career-form" data-aos="fade-left" onSubmit={handleSubmit} enctype="multipart/form-data">
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
                        name="contact_no"
                        placeholder="Phone no"
                        value={formData.contact_no}
                        onChange={handleChange}
                    />
                    {errors.contact_no && <span className="error">{errors.contact_no}</span>}
                </div>

                <div className="form" style={{ marginLeft: "1rem"}}>
                    <label htmlFor="file" >Upload CV *</label>
                    <input
                         style={{backgroundColor:'#ffffff' }}
                        type="file"
                        id="file"
                        name="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".doc,.docx,.pdf"
                    />
                    {errors.file && <span className="error" style={{ marginLeft: "0rem", marginTop: "-13px" }}>{errors.file}</span>}
                </div>

                <div className="form-group" style={{ marginLeft: "1rem" }}>
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

export default BdeInternCareer;