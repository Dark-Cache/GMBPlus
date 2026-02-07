import React from "react";
import "./Feedback.css";

const feedbackData = [
  {
    name: "John Smith",
    company: "TechNova",
    text: "The team exceeded our expectations with a sleek, modern design that truly represents our brand. The user experience is seamless, and our conversions have skyrocketed!",
    date: "03 January 2024",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Michael Anderson",
    company: "Luxe Beauty",
    text: "From the initial concept to the final execution, they nailed every aspect of our UI/UX. The branding feels premium, and the development was flawless!",
    date: "03 January 2024",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Mark Thompson",
    company: "COO, FinCore Solutions",
    text: "Our platform was outdated, but they transformed it into a cutting-edge experience. Our customers love the new interface, and engagement has doubled!",
    date: "03 January 2024",
    avatar: "https://i.pravatar.cc/100?img=56",
  },
];

const ClientFeedback = () => {
  return (
    <section className="client-feedback-section">
      <h2 className="client-feedback-title">What Our Clients Say</h2>

      <div className="client-feedback-grid">
        {feedbackData.map((item, index) => (
          <div className="client-feedback-card" key={index}>
            <div className="client-feedback-header">
              <img src={item.avatar} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.company}</span>
              </div>
            </div>

            <p className="client-feedback-text">{item.text}</p>
            <span className="client-feedback-date">{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientFeedback;
