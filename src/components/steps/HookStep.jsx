function HookStep({ onNext }) {
  return (
    <div className="step step-hook active">
      <div className="hook-tag">LIVE</div>
      <h1 className="title-xl">
        STOP GETTING<br />
        <span className="glow-text">DESTROYED</span>
      </h1>
      <p className="sub">
        Your competitors know your revenue. They track your wishlists. They see your price changes.<br />
        You're playing blind. <strong className="glow-text">Time to arm yourself.</strong>
      </p>
      <div className="hook-stats">
        <div className="h-stat">
          <div className="h-stat-num">2,847<span>+</span></div>
          <div className="h-stat-label">Studios Armed</div>
        </div>
        <div className="h-stat">
          <div className="h-stat-num">$<span>127</span>M</div>
          <div className="h-stat-label">Revenue Tracked</div>
        </div>
        <div className="h-stat">
          <div className="h-stat-num">50K<span>+</span></div>
          <div className="h-stat-label">Games Analyzed</div>
        </div>
      </div>
      <div className="btn-row">
        <button className="btn btn-neon" onClick={onNext}>
          ARM YOURSELF{' '}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      <p className="mono" style={{ marginTop: '24px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        2 MIN SETUP • NO CREDIT CARD • CANCEL ANYTIME
      </p>
    </div>
  )
}

export default HookStep
