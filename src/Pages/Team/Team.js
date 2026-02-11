import React from "react";
import "./Team.css";

// import team1 from "../../Assets/team1.jpg";
// import team2 from "../../Assets/team2.jpg";
// import team3 from "../../Assets/team3.jpg";
// import team4 from "../../Assets/team4.jpg";

const OurTeam = () => {
  return (
    <section className="our-team-section">

      <div className="our-team-container">

        {/* HEADER */}
        <div className="our-team-header">
          <div>
            {/* <span className="our-team-number">04</span> */}
            <h2>Our team</h2>
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
            {/* <img src={team1} alt="Michael Scott" /> */}
            <h4>Michael Scott</h4>
            <span>Co-Founder, Chief Architect</span>
          </div>

          <div className="team-card">
            {/* <img src={team2} alt="Chandler Rigs" /> */}
            <h4>Chandler Rigs</h4>
            <span>Co-Founder, Architect</span>
          </div>

          <div className="team-card">
            {/* <img src={team3} alt="Isabella Rodriguez" /> */}
            <h4>Isabella Rodriguez</h4>
            <span>Architect</span>
          </div>

          {/* <div className="team-card">
            <img src={team4} alt="Ava Wilson" />
            <h4>Ava Wilson</h4>
            <span>3D Artist</span>
          </div> */}

        </div>

      </div>

    </section>
  );
};

export default OurTeam;
