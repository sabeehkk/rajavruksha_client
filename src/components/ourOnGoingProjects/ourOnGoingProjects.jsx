import React from 'react';
import './ourOnGoingProjects.css'

export default function SignatureProjects() {
  return (
    <div className="container-signature" style={{paddingTop:'100px'}}>
      <div className="content-wrappers">
        <div className="text-content">
          <h1 className="title">
            Our<br/>
            Ongoing<br />
            Projects
          </h1>
          <p className="description">
          Farmland is not just a dream; it's a sound financial investment with growing demand in the market.
          </p>
          <div className="small-gallery">
            <div className="gallery-image">
                <img src="https://img.freepik.com/free-photo/sunrise-farmland_181624-15672.jpg?t=st=1731255777~exp=1731259377~hmac=1b21efdd4b5208ae4e3283a4d31e9482d2a33b571799fe89d8179dc52e59d7e0&w=1060" alt="" />
            </div>
            <div className="gallery-image">
            <img src="https://img.freepik.com/free-photo/sunrise-farmland_181624-15672.jpg?t=st=1731255777~exp=1731259377~hmac=1b21efdd4b5208ae4e3283a4d31e9482d2a33b571799fe89d8179dc52e59d7e0&w=1060" alt="" />

            </div>
            {/* <div className="gallery-image"></div> */}
          </div>
        </div>
        <div className="featured-image-wrapper">
          <img src="https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-23127.jpg?t=st=1731255565~exp=1731259165~hmac=aaa61a690bb91df716e6d0620bd87262ad4519edb6651450a542f202c28091dd&w=740" className="featured-image" />
          <a href="/projects" className="discover-more-button">
          Read More
            <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}