import React from "react";
import "./Journey.css";

import begIcon from "../../Assets/hourglass.gif"
import obsIcon from "../../Assets/obstacle.gif"
import inoIcon from "../../Assets/growth.gif"
import gloIcon from "../../Assets/travel-destination.gif"
import aheadIcon from "../../Assets/focus.gif"
import furIcon from "../../Assets/handshake.gif"


const steps = [
  {
    number: "01",
    title: "From Humble Beginnings",
    text: "Our journey began with a simple vision to deliver reliable business solutions. Early client conversations shaped the foundation of our growth.",
    icon: <img src={begIcon} alt="icon" className="cus-icon" />,
    color: "green",
  },
  {
    number: "02",
    title: "Milestones and Achievements",
    text: "Growing trust led us to expand into chemicals, facilities, IT, and property services. Strong systems and transparency marked key milestones along the way.",
    icon: <img src={obsIcon} alt="icon" className="cus-icon" />,
    color: "lime",
  },
  {
    number: "03",
    title: "Innovations and Growth",
    text: "Innovation drove improvements across production, service delivery, and operations. This phase strengthened our capacity to serve at scale.",
    icon: <img src={inoIcon} alt="icon" className="cus-icon" />,
    color: "green",
  },
  {
    number: "04",
    title: "Our Global Reach",
    text: "Our network expanded across regions and industries. Consistency, compliance, and reliability defined our reputation.",
    icon: <img src={gloIcon} alt="icon" className="cus-icon" />,
    color: "lime",
  },
  {
    number: "05",
    title: "Looking Ahead",
    text: "We focus on sustainable growth and continuous improvement. Adapting to change keeps us future-ready.",
    icon: <img src={aheadIcon} alt="icon" className="cus-icon" />,
    color: "green",
  },
  {
    number: "06",
    title: "Partnering for the Future",
    text: "We grow alongside our clients through collaboration and trust. Together, we continue the journey forward.",
    icon: <img src={furIcon} alt="icon" className="cus-icon" />,
    color: "lime",
  },
];

const Process = () => {
  return (
    <section className="jor-section">
      <div className="jor-container">

        {/* Header */}
        <div className="jor-header">
          <span className="jor-badge">Our Journey</span>
          <h2>The GMBPlus Journey Story</h2>
          <p>
            A proven journey shaped by experience, delivering reliable results at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="jor-timeline">
          {steps.map((step, index) => (
            <div className="jor-step" key={index}>
              <div className={`jor-icon ${step.color}`}>
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
