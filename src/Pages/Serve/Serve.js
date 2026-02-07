import React from 'react'
import "./Serve.css";

import chemical from "../../Assets/Chemical.jpg";
import facility from "../../Assets/Facility.jpg";
import estate from "../../Assets/Estate.jpg";
import repair from "../../Assets/Why.jpg";


const Serve = () => {
  return (
        <section className="market-section">
      <div className="market-container">

        {/* Header */}
        <div className="market-header">
          <h2>We offer several Services for you</h2>
          <span className="market-divider"></span>
          <p>
            Over the past 25 years, we have supported diverse industries by
            delivering reliable, innovative, and sustainable service solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="market-grid">


            {/* Card 1 */}
          <div className="market-card">
            <img src={facility} alt="Facility" />
            <h3> Facilities management </h3>
            <p>
              Reliable solutions for infrastructure, facilities operations,
              equipment support, and technology services.
            </p>
            <a href="/facility" className="read-more">READ MORE →</a>
          </div>



          {/* Card 2 */}
          <div className="market-card">
            <img src={chemical} alt="Industrial Sector" />
            <h3> Industrial Chemicals </h3>
            <p>
              Supporting industrial operations through chemical supply,
              facilities management, and operational services.
            </p>
          </div>


          {/* Card 3 */}
          <div className="market-card">
            <img src={estate} alt="Property" />
            <h3> Properties & Estates Management </h3>
            <p>
              Property, estate, and facilities management solutions tailored
              to agricultural and commercial environments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="market-card">
            <img src={repair} alt="IT" />
            <h3> IT Solutions </h3>
            <p>
              We provide reliable IT solutions through the supply of quality 
              software and hardware, system deployment, and technical 
              support services.
            </p>
          </div>

        </div>
      </div>
    </section>


  )
}

export default Serve