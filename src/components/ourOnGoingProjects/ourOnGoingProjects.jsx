import React from 'react';
import './ourOnGoingProjects.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import newPic from "../../components/assets/8.jpg"
export default function SignatureProjects() {
  return (
    <div className="container-signature" style={{paddingTop:'100px'}}>
      <div className="content-wrappers">
        <div className="text-content " data-aos="fade-right">
          <h1 className="title">
            Our<br className="hide-on-small-screen" /> 
            Ongoing<br className="hide-on-small-screen" />
            Projects
          </h1>
          <p className="description">
          Farmland is not just a dream; it's a sound financial investment with growing demand in the market.
          </p>
          <div className="small-gallery">
          <Link to="/sylvan-retreat" className="gallery-image">
              <h3>sylvan retreat</h3>
              <img src={newPic} alt="sylvan retreat" />
            </Link>
          <Link to="/eco-nest" className="gallery-image">
              <h3>eco nest</h3>
              <img src="https://images.pexels.com/photos/26150406/pexels-photo-26150406/free-photo-of-aerial-view-of-a-country-road-stretching-past-vast-green-fields.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="eco next" />
            </Link>
          </div>
        </div>

        <div className="featured-image-wrapper"  data-aos="fade-left">
          <img src="https://rajavrukshagroup.in/wp-content/uploads/2023/12/pexels-jahoo-clouseau-388415-1536x810.jpg" className="featured-image" />
          <a href="/projects" className="discover-more-button">
          Read More         
            <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}