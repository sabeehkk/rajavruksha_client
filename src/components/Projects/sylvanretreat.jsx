import React from 'react';
import { Link } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import '../../components/Projects/sylvanStlyle.css';

import Img1 from "../../img/project-details.jpg";
import Img2 from "../../img/plan.png";
import Img3 from "../../img/24-hours.png";
import Img4 from "../../img/group.png";
import Img5 from "../../img/best-price.png";
import Img6 from "../../img/bedroom.jpg";
import Img7 from "../../img/hallroom.jpg";
import Img8 from "../../img/kitchen.jpg";
import bg from "../../components/assets/editone.jpg";
import VideoModal from "../../components/ModalVideo";
import Tour from "../../components/tour/index";
import Amenities from "../../components/Amenities/amenities";


function Sylvanretreat() {
  const sylvanAmenities =["Water Supply","Electricity","Fencing and Security","Paver road","Individual water connection","Children's park & Garden"]

  return (
    <div className="project-details-area pt-4">
      <div className="container">
        <div className="row">
        <div style={{color:'black'}} data-aos="fade-right" data-aos-delay="200" className="col-12">
          {/* <h3>Theme</h3> */}
         The theme of Sylvan Retreat is to create a harmonious and immersive living experience that seamlessly <br />
          integrates with the natural surroundings. Envisioned as a sanctuary away from the hustle and bustle of <br />
          urban life, the project aims to celebrate the beauty of nature.
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12" style={{ height: "500px" }}>
        <Tour />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12" style={{ height: "500px" }}>
          <Amenities amenities={sylvanAmenities} projectType={"sylvan-retreat"}/>
          </div>
          <div className="col-12 mt-4">
            <div className="project-details-top-text"  data-aos="fade-up">
              <h3>Discover Your Agricultural Dream:</h3>
              <p>
              Escape the hustle and bustle of city life and embark on a journey to a tranquil and fertile oasis. Introducing our exclusive collection of 25 farmland plots, each a canvas of opportunity for you to cultivate your agricultural aspirations.
              </p>
              <h3>Agricultural Canvas Ready for Your Vision</h3>
              <p>
              These 25 farmland plots offer an invitation to realize your agricultural dreams. Whether you dream of orchards, Apiculture, Organic farms, or a combination of them all, these plots are the ideal blank canvas to bring your vision to life. Let your imagination run wild and watch your agricultural dreams flourish.
              </p>
              <h3 style={{fontWeight:'bold'}}>Key Features:</h3>
             <p><span><VscDebugBreakpointLog style={{width:'20px',height:'20px'}}/></span> <span style={{fontWeight:'bold' ,color:'black'}}>Rich Soil and Fertile Land</span>: Our farmland is renowned for its rich and fertile soil, providing the ideal foundation for a thriving agricultural venture.</p>
             <p><span><VscDebugBreakpointLog style={{width:'20px',height:'20px'}}/></span> <span style={{fontWeight:'bold' ,color:'black'}}>Scenic Views:</span> Enjoy breathtaking vistas of rolling hills and serene landscapes that will inspire and soothe your soul.</p>
             <p><span><VscDebugBreakpointLog style={{width:'20px',height:'20px'}}/></span> <span style={{fontWeight:'bold' ,color:'black'}}>Water Resources:</span> Abundant access to natural water sources, ensuring your crops will flourish year-round.</p>
             <p><span><VscDebugBreakpointLog style={{width:'20px',height:'20px'}}/></span> <span style={{fontWeight:'bold' ,color:'black'}}>Security:</span> We prioritize your investment's safety, providing 24/7 security to protect your agricultural pursuits.</p>
            </div>
        <h2 style={{textAlign:'center'}}>Why Choose Us</h2>
        
            <div className="project-overview">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img src={'https://rajavrukshagroup.in/wp-content/uploads/2023/11/planting.png'} alt="Expertise in Agriculture" className='syl-img'/>
                    <h5>Expertise in Agriculture</h5>
                    <p>Our team of agricultural experts is   ready to assist and advise you in every step of your farming journey.</p>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img src={'https://rajavrukshagroup.in/wp-content/uploads/2023/11/earning.png'} alt="Project time" className='syl-img'/>
                    <h5>Investment Potential
                    </h5>
                    <p>Farmland is not just a dream; it's a sound financial investment with growing demand in the market.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img src={'https://rajavrukshagroup.in/wp-content/uploads/2023/11/planet-earth.png'} alt="People worked" className='syl-img' />
                    <h5>Sustainability
                    </h5>
                    <p>We're committed to sustainable farming practices and environmental conservation.
                  </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img src={'https://rajavrukshagroup.in/wp-content/uploads/2023/11/compliance.png'} alt="Project cost" className='syl-img'/>
                    <h5>Legal Compliance</h5>
                    <p>Hassel free process in terms of your documentations that carries from our experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sylvanretreat
