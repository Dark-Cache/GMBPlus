import React from "react";
import "./SayAbout.css";

import avatar1 from "../../Assets/Cl1.png";
import avatar2 from "../../Assets/Cl2.png";

const testimonials = [
  {
    text: "Their professional approach made finding the perfect property smooth and stress-free. Every detail was handled with care and transparency.",
    name: "Tijjani Adeyemi",
    role: "Civil Engineer",
    avatar: avatar2,
  },
  {
    text: "From property inspections to final documentation, their team ensured a seamless home buying experience. Highly reliable and efficient.",
    name: "Tunmise Adegbola",
    role: "Homeowner",
    avatar: avatar1,
  },
  {
    text: "Their expertise in property management and real estate advisory helped us maximize value and make informed investment decisions.",
    name: "James Smith",
    role: "Project Manager",
    avatar: avatar2,
  },
];

const Testimonials = () => {
  return (
    <section className="about-testimonial-section">
      <div className="about-testimonial-container">

        {/* Header */}
        <div className="about-testimonial-header">
          <h2>Why Say Our Customers</h2>
          <p>Our clients trust us for our reliability, attention to details, 
            and dedication to delivering projects on time </p> 
        </div>

        {/* Cards */}
        <div className="about-testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="about-testimonial-card" key={index}>
              <p className="about-testimonial-text">{item.text}</p>

              <div className="about-testimonial-user">
                <img src={item.avatar} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
