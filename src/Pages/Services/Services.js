import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import img1 from "../../Assets/Supply.jpg";
import img2 from "../../Assets/Clean.jpg";
import img3 from "../../Assets/Tech4.jpg";
import img4 from "../../Assets/Manage.jpg";

import Feedback from "../Feedback/Feedback";

const Services = () => {
  return (
    <section className="services-showcase">

      {/* HEADER */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We deliver integrated solutions across industrial chemicals,
          facilities management, IT services, and property management,
          combining expertise, efficiency, and reliability.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="service-row">
        <div className="service-content">
          <h2>Industrial Chemicals</h2>
          <p>
            Our industrial chemicals service focuses on the safe production and reliable distribution 
            of high-quality chemical products for diverse industries. We operate under strict quality 
            and regulatory standards, guiding clients in selecting the right solutions for their 
            operations. Supported by a dependable supply chain, we ensure timely delivery and 
            consistent availability. Transparent quotations, open communication, and the option 
            of office visits or meetings allow us to deliver efficient, safe, and long-term chemical 
            supply solutions.
          </p>

          <div className="learn-more">
          <Link to="/chemical"> Learn More </Link>
        </div>

        </div>
        <div className="service-image">
          <img src={img1} alt="Industrial Chemicals" style={{width: '100%', maxWidth: '700px', height: '370px', objectFit: 'cover'}} />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="service-row reverse">
        <div className="service-image">
          <img src={img2} alt="Facilities Management" style={{width: '100%', maxWidth: '700px', height: '370px', objectFit: 'cover'}} />
        </div>
        <div className="service-content">
          <h2>Facilities Management</h2>
          <p>
            Our facilities management services support the smooth operation of commercial and industrial 
            environments. We provide professional staffing, cleaning, and maintenance services tailored 
            to each facility. Equipment supply and rental services are offered to meet operational needs. 
            All services are coordinated to improve efficiency and reduce downtime. Clients receive clear 
            quotations and detailed service information. Continuous monitoring ensures consistent service 
            quality. We help organizations maintain safe, clean, and well-managed facilities.
          </p>

          <div className="learn-more">
          <Link to="/facility"> Learn More </Link>
        </div>

        </div>
      </div>

      {/* SECTION 3 */}
      <div className="service-row">
        <div className="service-content">
          <h2>IT Solutions</h2>
          <p>
            Our facilities management services ensure the smooth operation of commercial and industrial 
            environments through professional staffing, cleaning, maintenance, and equipment supply or 
            rental. All services are coordinated to improve efficiency and minimize downtime, supported
            by clear quotations and detailed service information. Continuous monitoring ensures consistent 
            quality, helping organizations maintain safe, clean, and well-managed facilities.
          </p>

          <div className="learn-more">
          <Link to="/it"> Learn More </Link>
        </div>

        </div>
        <div className="service-image">
          <img src={img3} alt="IT Solutions" style={{width: '100%', maxWidth: '700px', height: '370px', objectFit: 'cover'}} />
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="service-row reverse">
        <div className="service-image">
          <img src={img4} alt="Property & Estate Management" style={{width: '100%', maxWidth: '700px', height: '370px', objectFit: 'cover'}} />
        </div>
        <div className="service-content">
          <h2>Property & Estate Management</h2>
          <p>
            Our property and estate management services focus on protecting and enhancing property value through 
            structured oversight and maintenance of residential and commercial properties. Routine inspections, 
            preventive maintenance, and strict compliance with safety and regulatory standards help reduce 
            long-term costs. With transparent updates and professional handling of daily operations, we 
            deliver efficient management that supports long-term sustainability.
          </p>

          <div className="learn-more">
          <Link to="/property"> Learn More </Link>
          </div>

        </div>
      </div>

      <Feedback />

    </section>
  );
};

export default Services;
