import React from "react";
import "./How.css";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "We understand your business needs, goals, and current financial situation through a detailed consultation.",
    icon: "🔍",
    color: "lime",
  },
  {
    number: "02",
    title: "Strategy Development",
    text: "Our experts create a customized strategy tailored to your specific requirements and objectives.",
    icon: "📄",
    color: "green",
  },
  {
    number: "03",
    title: "Implementation",
    text: "We work closely with your team to implement the strategy, ensuring smooth execution.",
    icon: "📈",
    color: "lime",
  },
  {
    number: "04",
    title: "Ongoing Support",
    text: "Continuous monitoring and optimization to ensure sustained growth and long-term success.",
    icon: "✅",
    color: "green",
  },
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="process-container">

        {/* Header */}
        <div className="process-header">
          <span className="process-badge">Our Process</span>
          <h2>How We Work With You</h2>
          <p>
            A simple, proven process that delivers exceptional results for your business
          </p>
        </div>

        {/* Timeline */}
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <span className="step-number">{step.number}</span>

              <div className={`step-icon ${step.color}`}>
                {step.icon}
              </div>

              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
