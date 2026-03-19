import React from "react";
import "./Say.css";

import avatar1 from "../../Assets/Cl1.png";
import avatar2 from "../../Assets/Cl2.png";

const testimonials = [
  {
    text: "Their efficient chemical production and distribution ensured quality supply and seamless coordination.",
    name: "Jacob Williams",
    role: "Factory Worker",
    avatar: avatar1,
  },
  {
    text: "Their facilities management services simplified staffing, cleaning, and equipment operations.",
    name: "Sydney Reynolds",
    role: "Estate Supervisor",
    avatar: avatar2,
  },
  {
    text: "Their reliable software and hardware supply improved system performance and efficiency.",
    name: "Nathan Carter",
    role: "Tech CEO",
    avatar: avatar2,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        {/* Header */}
        <div className="testimonial-header">
          <h2>What Our Clients Say</h2>
          <p>Our clients’ words reflect our commitment to excellence.</p>
        </div>

        {/* Cards */}
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-user">
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
