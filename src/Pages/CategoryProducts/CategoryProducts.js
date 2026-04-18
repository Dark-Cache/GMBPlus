import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import "./CategoryProducts.css";

import chemIcon from "../../Assets/crane.gif";
import waterIcon from "../../Assets/save-water.gif";
import specIcon from "../../Assets/molecular-science.gif";

const categoryData = {
  "construction-chemicals": {
    icon: chemIcon,
    title: "Construction Chemicals",
    subtitle: "Piling • Slurry Stabilisation • Concrete Enhancement",
    color: "#0b2545",
    products: [
      {
        id: "antisol",
        name: "ANTISOL FL 30000",
        chemical: "Polyanionic Cellulose Polymer (PAC)",
        sector: "Construction & Civil Engineering | Oil & Gas Drilling",
        description:
          "A high-performance fluid loss additive and viscosity modifier manufactured in Germany. ANTISOL is the preferred PAC polymer for bored pile operations, diaphragm wall construction, and deep excavation slurry systems in Nigeria. It dissolves in water to form a viscous, stable gel that prevents slurry from penetrating the borehole walls, ensuring excavation stability.",
        packSizes: ["20 kg Polyethene (PE) bags"],
        specs: [
          { label: "Viscosity (1% solution)", value: "3,520 mPas (min 2,500)" },
          { label: "pH (1% aqueous)", value: "7.8 (range 7.0–9.5)" },
          { label: "Moisture content", value: "5.6% (max 10%)" },
          { label: "Sodium Chloride", value: "0.21% (max 2.0%)" },
          { label: "Substitution Degree", value: "1.04" },
        ],
        origin: "🇩🇪 Germany",
        tag: "Fluid Loss Additive",
      },
      {
        id: "bentonite",
        name: "BENTONITE",
        chemical: "Drilling-Grade Sodium Bentonite",
        sector: "Construction & Civil Engineering | Foundation Engineering",
        description:
          "High-swelling sodium bentonite is the primary slurry material for all types of bored pile and rotary drilling operations. When mixed with water, it forms a thixotropic slurry that stabilises borehole walls and prevents collapse during deep excavation. GMB Plus supplies premium drilling-grade bentonite imported from certified sources for use on infrastructure, real estate, and commercial construction projects.",
        packSizes: ["25 kg bags", "50 kg jumbo bags"],
        specs: [
          { label: "Swelling Index", value: "High — maximum slurry formation" },
          { label: "Fluid Loss", value: "Low — prolonged excavation stability" },
          { label: "Compatibility", value: "All pile diameters and drilling methods" },
          { label: "Particle Size", value: "Optimised for borehole applications" },
          { label: "Origin", value: "🇨🇳 China" },
          { label: "Standards", value: "API 13A compliant grade available" },
        ],
        origin: "🇨🇳 China",
        tag: "Drilling Slurry",
      },
    ],
  },
  "water-treatment-chemicals": {
    icon: waterIcon,
    title: "Water Treatment Chemicals",
    subtitle: "Disinfection • pH Control • Coagulation",
    color: "#0077b6",
    products: [
      {
        id: "chlorine",
        name: "CHLORINE 70%",
        chemical: "Calcium Hypochlorite — Ca(ClO)₂",
        sector: "Water Treatment | Healthcare | Swimming Pools | Estates",
        description:
          "Chlorine is the most widely used disinfectant in Nigeria for potable water treatment, borehole sanitation, estate water systems, swimming pools, and hospital hygiene management. With a minimum 70% available chlorine content, a small quantity treats large volumes of water effectively. GMB Plus imports certified Chlorine from the United States, with full NAFDAC registration and SON approval for use in drinking water applications.",
        packSizes: ["45 kg plastic drum", "25 kg drum", "4 × 1 kg sachet carton"],
        specs: [
          { label: "Available Chlorine", value: "Minimum 70%" },
          { label: "pH (1% solution)", value: "10.0 – 11.0" },
          { label: "Moisture content", value: "Max 7%" },
          { label: "Form", value: "White granules or tablets" },
          { label: "Origin", value: "🇺🇸 United States" },
          { label: "Certifications", value: "NAFDAC Registered | SON Certified | WHO-approved grade" },
        ],
        origin: "🇺🇸 United States",
        tag: "Disinfectant",
      },
      {
        id: "limbux",
        name: "LIMBUX HYDRATED LIME",
        chemical: "Calcium Hydroxide — Ca(OH)₂ — High Purity",
        sector: "Water Treatment | Construction | Environmental | Agriculture",
        description:
          "Limbux is a high-purity, high-calcium hydrated lime produced by Buxton Lime Limited in the United Kingdom under ISO 9001, 14001, 50001, and 45001 certified conditions. It is used for pH correction in potable water treatment, effluent neutralisation, soil stabilisation in civil engineering, and heavy metal removal from water systems. Its exceptional purity (97% Ca(OH)₂) makes it one of the finest hydrated limes available on the Nigerian market.",
        packSizes: ["25 kg bags (750 bags per 20ft container)"],
        specs: [
          { label: "Calcium Hydroxide", value: "97.0% typical (min 95%)" },
          { label: "Moisture", value: "0.25% (max 0.75%)" },
          { label: "Bulk Density", value: "450–520 kg/m³" },
          { label: "Mean Particle Size (D50)", value: "7–9 μm" },
          { label: "BET Surface Area", value: "14–18 m²/g" },
          { label: "Origin", value: "🇬🇧 United Kingdom (Buxton Lime Ltd)" },
          { label: "Standards", value: "BS EN 459-1, BS EN 459-2, ISO 9001" },
        ],
        origin: "🇬🇧 United Kingdom",
        tag: "pH Correction",
      },
      {
        id: "alum",
        name: "ALUMINIUM SULPHATE",
        chemical: "Alum — Al₂(SO₄)₃ — Non-Ferric Grade",
        sector: "Water Treatment | Wastewater | Construction",
        description:
          "Aluminium sulphate (Alum) is an essential coagulant in drinking water and wastewater treatment processes. It neutralises the electrical charge of suspended particles, causing them to clump together and settle out of solution — dramatically improving water clarity. GMB Plus supplies non-ferric grade alum suitable for potable water treatment per WHO and Nigerian water quality guidelines. Also used in construction for soil conditioning.",
        packSizes: ["25 kg bags", "50 kg bags"],
        specs: [
          { label: "Chemical Formula", value: "Al₂(SO₄)₃" },
          { label: "Grade", value: "Non-ferric — suitable for potable water" },
          { label: "Forms Available", value: "Granular and lump" },
          { label: "Standards", value: "Conforms to WHO water treatment standards" },
          { label: "Origin", value: "🇮🇳 India" },
          { label: "Application", value: "Coagulation, turbidity removal, pH reduction" },
        ],
        origin: "🇮🇳 India",
        tag: "Coagulant",
      },
    ],
  },
  "specialty-surfactant-chemicals": {
    icon: specIcon,
    title: "Specialty & Surfactant Chemicals",
    subtitle: "Surfactants • Plasticisers • Industrial Specialty",
    color: "#6b21a8",
    products: [
      {
        id: "sls",
        name: "SODIUM LAURYL SULPHATE (SLS)",
        chemical: "Anionic Surfactant — CH₃(CH₂)₁₁OSO₃Na",
        sector: "Detergent Manufacturing | Pharmaceuticals | Personal Care | Textiles",
        description:
          "Sodium Lauryl Sulphate (SLS) is one of the most widely used anionic surfactants in industrial and consumer applications. As an excellent emulsifier, foaming agent, and detergent base, SLS is used in personal care product manufacturing, industrial cleaning formulations, pharmaceutical manufacturing, and textile processing. GMB Plus imports SLS from certified manufacturers in India and China, with full quality documentation.",
        packSizes: ["25 kg bags (rice type)", "25 kg bags (macaroni type)"],
        specs: [
          { label: "Chemical Formula", value: "CH₃(CH₂)₁₁OSO₃Na" },
          { label: "Active Content", value: "90–93% (powder) or 28–30% (liquid)" },
          { label: "Ionic Character", value: "Anionic surfactant" },
          { label: "pH (1% solution)", value: "7.5 – 9.5" },
          { label: "Origin", value: "🇮🇳 India | 🇨🇳 China" },
          { label: "Applications", value: "Detergent mfg | Pharma | Personal care | Textiles" },
        ],
        origin: "🇮🇳 India | 🇨🇳 China",
        tag: "Surfactant",
      },
      {
        id: "lignosulphonate",
        name: "SODIUM LIGNOSULPHONATE",
        chemical: "Concrete Plasticiser & Water Reducer",
        sector: "Construction | Concrete Production | Infrastructure",
        description:
          "Sodium Lignosulphonate is an organic concrete admixture derived from wood pulp. Used as a water-reducing plasticiser in cement and concrete production, it improves workability, reduces water content by 5–10%, and enhances the final strength of concrete structures. Ideal for high-performance concrete mixes on construction sites, precast concrete facilities, and infrastructure projects in Nigeria.",
        packSizes: ["25 kg bags"],
        specs: [
          { label: "Water Reduction", value: "5–10%" },
          { label: "Standards", value: "Conforms to ASTM C494 Type D" },
          { label: "pH (10% solution)", value: "8.0 – 10.0" },
          { label: "Form", value: "Brown granular powder, water-soluble" },
          { label: "Origin", value: "🇨🇳 China" },
          { label: "Also Known As", value: "Lignosulfonate, Dispersant MF" },
        ],
        origin: "🇨🇳 China",
        tag: "Plasticiser",
      },
    ],
  },
};

const CategoryProducts = () => {
  const { slug } = useParams();
  const category = categoryData[slug];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qty, setQty] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      const w = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${w}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://formspree.io/f/mpqkqplv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        e.target.reset();
        setQty("");
        setIsModalOpen(false);
        setIsThankYouOpen(true);
      } else {
        alert("Something went wrong.");
      }
    } catch {
      alert("Network error.");
    }
    setIsLoading(false);
  };

  if (!category) {
    return (
      <div className="cp-not-found">
        <h2>Category not found.</h2>
        <Link to="/chemical">← Back to Chemical</Link>
      </div>
    );
  }

  return (
    <section className="cp">

      {/* BACK */}
      <div className="cp-back">
        <Link to="/chemical">← Back to Chemical</Link>
      </div>

      {/* HEADER */}
      <div className="cp-header" style={{ borderColor: category.color }}>
        <img src={category.icon} alt={category.title} className="cp-header-icon" />
        <div>
          <p className="cp-subtitle">{category.subtitle}</p>
          <h1 style={{ color: category.color }}>{category.title}</h1>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="cp-products">
        {category.products.map((product, i) => (
          <div className="cp-product-card" key={product.id}>

            {/* BADGE */}
            <div className="cp-tag" style={{ background: category.color }}>{product.tag}</div>

            {/* TOP */}
            <div className="cp-product-top">
              <div>
                <h2>{product.name}</h2>
                <p className="cp-chemical">{product.chemical}</p>
                <p className="cp-sector"><strong>Sector:</strong> {product.sector}</p>
              </div>
              <div className="cp-origin">{product.origin}</div>
            </div>

            <hr className="cp-divider" />

            {/* BODY */}
            <div className="cp-product-body">

              {/* DESCRIPTION */}
              <div className="cp-desc">
                <h3>Product Description</h3>
                <p>{product.description}</p>

                <h3>Pack Sizes Available</h3>
                <ul>
                  {product.packSizes.map((size, j) => (
                    <li key={j}>📦 {size}</li>
                  ))}
                </ul>
              </div>

              {/* SPECS */}
              <div className="cp-specs">
                <h3>Key Technical Specifications</h3>
                <div className="cp-specs-table">
                  {product.specs.map((spec, j) => (
                    <div className="cp-spec-row" key={j}>
                      <span className="cp-spec-label">{spec.label}</span>
                      <span className="cp-spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ORDER BUTTON */}
            <button
              className="cp-order-btn"
              style={{ background: category.color }}
              onClick={() => {
                setSelectedProduct(product.name);
                setIsModalOpen(true);
              }}
            >
              Place an Order →
            </button>

          </div>
        ))}
      </div>

      {/* ORDER MODAL */}
      {isModalOpen && (
        <div className="cp-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="cp-modal" onClick={(e) => e.stopPropagation()}>

            <div className="cp-modal-header">
              <div>
                <h2>Place an Order</h2>
                <p>{selectedProduct}</p>
              </div>
              <button className="cp-modal-close" onClick={() => setIsModalOpen(false)}>
                <IoCloseSharp />
              </button>
            </div>

            <div className="cp-modal-body">
              <form className="cp-form" onSubmit={handleSubmit}>
                <input type="hidden" name="product" value={selectedProduct} />
                <input type="hidden" name="category" value={category.title} />
                <input type="hidden" name="_subject" value={`New Order — ${selectedProduct}`} />

                <div className="cp-form-group">
                  <label>Company Name / Full Name</label>
                  <input type="text" name="fullName" placeholder="Company Name / Full Name" required />
                </div>

                <div className="cp-form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Enter email address" required />
                </div>

                <div className="cp-form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" placeholder="Enter phone number" required />
                </div>

                <div className="cp-form-group">
                  <label>Quantity Required</label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g. 10 bags, 2 drums"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    required
                  />
                </div>

                <div className="cp-form-group">
                  <label>Delivery Location</label>
                  <input type="text" name="location" placeholder="Enter delivery address" required />
                </div>

                <div className="cp-form-group">
                  <label>Additional Message (optional)</label>
                  <textarea name="message" placeholder="Any special requirements..." rows="3"></textarea>
                </div>

                <button
                  type="submit"
                  className="cp-submit-btn"
                  style={{ background: category.color }}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit Order"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* THANK YOU MODAL */}
      {isThankYouOpen && (
        <div className="cp-modal-overlay" onClick={() => setIsThankYouOpen(false)}>
          <div className="cp-thankyou" onClick={(e) => e.stopPropagation()}>
            <button className="cp-modal-close" onClick={() => setIsThankYouOpen(false)}>✕</button>
            <div className="cp-thankyou-icon">✓</div>
            <h2>Order Received!</h2>
            <p>Thank you for your order. Our team will contact you within 24 hours to confirm details.</p>
            <button className="cp-thankyou-btn" onClick={() => setIsThankYouOpen(false)}>Close</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default CategoryProducts;
