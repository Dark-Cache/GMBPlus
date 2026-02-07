import React from "react";
import "./Say.css";

const testimonials = [
  {
    text: "Their efficient chemical production and distribution ensured quality supply and seamless coordination.",
    name: "Jacob Williams",
    role: "Factory Worker",
    avatar: "./Assert/Fact.jpg",
  },
  {
    text: "Their facilities management services simplified staffing, cleaning, and equipment operations.",
    name: "Sydney Reynolds",
    role: "Estate Supervisor",
    avatar: "",
  },
  {
    text: "Their reliable software and hardware supply improved system performance and efficiency.",
    name: "Nathan Carter",
    role: "Tech CEO",
    avatar: "/images/avatar3.jpg",
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
