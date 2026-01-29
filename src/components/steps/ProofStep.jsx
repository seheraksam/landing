function ProofStep({ onNext, onPrev }) {
  return (
    <div className="step step-proof active">
      <div className="proof-box">
        <p className="step-num">STEP 06 // PROOF</p>
        <h1 className="title-lg">
          JOIN 2,847 STUDIOS<br />
          <span className="glow-text">ALREADY WINNING</span>
        </h1>
        <div className="proof-stats">
          <div className="p-stat">
            <div className="p-stat-num">2,847<span>+</span></div>
            <div className="p-stat-label">Active Studios</div>
          </div>
          <div className="p-stat">
            <div className="p-stat-num">94<span>%</span></div>
            <div className="p-stat-label">Data Accuracy</div>
          </div>
          <div className="p-stat">
            <div className="p-stat-num">4.9<span>/5</span></div>
            <div className="p-stat-label">User Rating</div>
          </div>
        </div>
        <div className="testimonial">
          <blockquote>
            "DataHumble showed us we were <span>pricing 40% below market</span>. One adjustment and our revenue jumped <span>$23K in the first month</span>. The ROI was instant."
          </blockquote>
          <div className="t-author">
            <div className="t-avatar">MK</div>
            <div className="t-info">
              <h4>Mike Kowalski</h4>
              <span>Founder, Crimson Pixel Studios • 127K copies sold</span>
            </div>
          </div>
        </div>
        <div className="btn-row" style={{ marginTop: '48px' }}>
          <button className="btn btn-ghost" onClick={onPrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="btn btn-neon" onClick={onNext}>
            CHOOSE YOUR PLAN{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProofStep
