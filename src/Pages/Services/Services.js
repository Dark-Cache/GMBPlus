import React from "react";
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
            of high-quality chemical products for various industries. We follow strict quality and 
            regulatory standards to ensure consistency and safety. Clients are guided through 
            product selection to ensure the right solutions for their operations. Our supply 
            chain supports timely delivery and dependable availability. We provide 
            transparent quotation processes and open communication for inquiries. 
            Office visits and meetings can be arranged to discuss applications and compliance. 
            Our goal is to deliver efficient, safe, and long-term chemical supply solutions.
          </p>
        </div>
        <div className="service-image">
          <img src={img1} alt="Industrial Chemicals" />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="service-row reverse">
        <div className="service-image">
          <img src={img2} alt="Facilities Management" />
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
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="service-row">
        <div className="service-content">
          <h2>IT Solutions</h2>
          <p>
            Our IT solutions focus on supplying reliable software and hardware systems that support modern 
            business operations. We assess client requirements to recommend suitable technologies. 
            Our solutions improve performance, security, and scalability. We ensure compatibility 
            with existing systems to minimize disruption. Clients receive professional guidance 
            throughout the process. Our approach reduces operational risks and downtime. 
            We deliver dependable IT infrastructure that supports business growth.
          </p>
        </div>
        <div className="service-image">
          <img src={img3} alt="IT Solutions" />
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="service-row reverse">
        <div className="service-image">
          <img src={img4} alt="Property & Estate Management" />
        </div>
        <div className="service-content">
          <h2>Property & Estate Management</h2>
          <p>
            Our property and estate management services are designed to protect and enhance property value. 
            We manage residential and commercial properties through structured oversight and maintenance. 
            Routine inspections and preventive maintenance reduce long-term costs. We ensure compliance 
            with safety and regulatory standards. Clients receive transparent updates and reports. 
            Our team handles day-to-day property operations professionally. We deliver efficient 
            management that ensures long-term sustainability.
          </p>
        </div>
      </div>

      <Feedback />

    </section>
  );
};

export default Services;
