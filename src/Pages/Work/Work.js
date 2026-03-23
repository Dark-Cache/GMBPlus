import React from "react";
import "./Work.css";

// Import your images
import work1 from "../../Assets/Chemical.jpg";
import work2 from "../../Assets/Chemical.jpg";
import work3 from "../../Assets/Chemical.jpg";
import work4 from "../../Assets/Chemical.jpg";
import work5 from "../../Assets/Chemical.jpg";
import work6 from "../../Assets/Chemical.jpg";
import work7 from "../../Assets/Chemical.jpg";
import work8 from "../../Assets/Chemical.jpg";
import work9 from "../../Assets/Chemical.jpg";
import work10 from "../../Assets/Chemical.jpg";

const works = [
  {
    image: work1,
    client: "Nigeria Law School | Lagos.",
    location: "Lagos.",
    workdone: "Supply of Chlorine and water treatment reagents for the Law School campus water treatment and distribution facility.",
  },

  {
    image: work2,
    client: "Italian Embassy | Lagos",
    location: "Lagos.",
    workdone: "Supply of water treatment chemicals and full treatment of portable water systems to meet international diplomatic health and safety standards.",
  },
  {
    image: work3,
    client: "Lagos State Polytechnic | Lagos.",
    location: "Ikorodu, Lagos.",
    workdone: "Supply of water treatment and construction chemicals. Treatment of portable water across the polytechnic campus. Ongoing supply relationship.",
  }
  ,
  {
    image: work4,
    client: "Lagos State Model College | Lagos",
    location: "Ikorodu, Lagos",
    workdone: "Supply of water treatment chemicals and on-site portable water treatment for the student body and school administrative facilities.",
  },
  {
    image: work5,
    client: "AT Tanzreel School | Lagos.",
    location: "Igbogbo, Lagos.",
    workdone: "Supply of water treatment chemicals and on-site treatment of portable water supply for the school campus and student population.",
  },
  {
    image: work6,
    client: "Larry Bids Nigeria Ltd | Lagos.",
    location: "Lagos",
    workdone: "Supply of Antisol FL 30000 (PAC) and Bentonite for bored pile and deep foundation piling operations at active construction sites.",
  },
  {
    image: work7,
    client: "Natufe Estate | Surulere Lagos.",
    location: "Ikorodu, Lagos",
    workdone: "Supply of Chlorine, Hydrated Lime & Aluminium Sulphate. Full treatment of estate portable water systems for all residential units.",
  },
  {
    image: work8,
    client: "Provas Estate Management Company | Lagos.",
    location: "Ikorodu, Lagos",
    workdone: "Ongoing supply of water treatment chemicals. Treatment and management of portable water across multiple residential estate assets.",
  },
  {
    image: work9,
    client: "St. Kizito Clinic | Lekki, Lagos.",
    location: "Ikorodu, Lagos",
    workdone: "Supply of water treatment chemicals, including Chlorine 70% for hospital water purification, sanitation compliance, and hygiene management.",
  },
  {
    image: work10,
    client: "Viva Bella Estate | Lagos.",
    location: "Ikorodu, Lagos",
    workdone: "Supply of Chlorine, Hydrated Lime, and Alum Sulphate. Ongoing treatment of estate portable water to meet WHO-compliant standards.",
  },
];

const Work = () => {
  return (
    <section className="work">
      {/* HEADER */}
      <div className="work-header">
        <h1>
          RECENT — <br />
          WORKS FROM <br /> ©2018-2024
        </h1>
      </div>

      {/* GRID */}
      <div className="work-grid">
        {works.map((item, index) => (
          <div className="work-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="work-info">
              <h3>{item.client}</h3>
              {/* <h4>{item.location}</h4> */}
              <p>{item.workdone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;