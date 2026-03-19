import React from "react";
import "./Team.css";

import team1 from "../../Assets/CEO1.png";
import team2 from "../../Assets/Ade.jpeg";
import team3 from "../../Assets/Red.jpeg";
// import team4 from "../../Assets/team4.jpg";

const OurTeam = () => {
  return (
    <section className="our-team-section">

      <div className="our-team-container">

        {/* HEADER */}
        <div className="our-team-header">
          <div>
            {/* <span className="our-team-number">04</span> */}
            <h2> Company Executives </h2>
            <p>
              We craft solutions that amplify key characteristics, achieving a
              harmonious balance of function and intent. Through careful
              analysis and collaborative engagement, our work transcends the
              conventional.
            </p>
          </div>

          {/* <button className="our-team-btn">Read more</button> */}
        </div>

        {/* TEAM GRID */}
        <div className="our-team-grid">

          <div className="team-card">
            <img src={team1} alt="Mr. Olayinka Yusuf" className="team-img-first" />
            <h4> Mr. Olayinka Yusuf</h4>
            <span> Managing Director </span>
          </div>

          <div className="team-card">
            <img src={team2} alt="Mr. Adeola Yusuf" />
            <h4> Mr. Adeola Yusuf | MSC GMNSE</h4>
            <span> Digital Architecture</span>
          </div>  

          <div className="team-card">
            <img src={team3} alt="Isabella Rodriguez" />
            <h4> Mrs. Adebukola Eichie </h4>
            <span> Account Manager </span>
          </div>

          <div className="team-card">
            {/* <img src={team4} alt="Ava Wilson" /> */}
            <h4> Mrs Damilola </h4>
            <span> Director of Facility Management </span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default OurTeam;
