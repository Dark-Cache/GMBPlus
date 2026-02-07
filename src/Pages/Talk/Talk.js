import React from 'react'
import "./Talk.css"

const Talk = () => {
  return (

    <section className="cta-section">
      <div className="cta-container">

        <span className="cta-tag">LET’S HAVE A TALK</span>

        <h1 className="cta-title">
          Everything Begins <br />
          with a <span>Friendly Conversation</span>
        </h1>

        <p className="cta-subtitle">
          <strong>Not in the mood to meet?</strong>
        </p>

        <p className="cta-text">
          We got it covered. We have all the tools to{" "}
          <strong>start our collaboration</strong> fast and effective.
          Swift execution is our modus operandi.
        </p>

        <div className="cta-buttons">
          <a href="/book-call" className="cta-btn primary">
            Book a Call
          </a>
          <a href="/get-started" className="cta-btn secondary">
            Get Started
          </a>
        </div>

      </div>
    </section>
        

  )
}

export default Talk