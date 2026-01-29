import { compData } from '../../data'

function BattleStep({ onNext, onPrev }) {
  const c = compData

  return (
    <div className="step step-battle active">
      <div className="battle-box">
        <div className="battle-head">
          <div className="vs-row">
            <div className="vs-logo dh">DH</div>
            <span className="vs-badge">VS</span>
            <div className="vs-logo">ALL</div>
          </div>
          <p className="step-num">STEP 05 // BATTLE ANALYSIS</p>
          <h1 className="title-lg">
            WHY STUDIOS <span className="glow-text">SWITCH</span>
          </h1>
          <p className="sub">{c.tag} - Here's the real comparison.</p>
        </div>
        <div className="battle-cards">
          <div className="battle-card win">
            <div className="battle-card-head">
              <div className="battle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>DATAHUMBLE WINS</h3>
            </div>
            <div className="battle-list">
              {c.wins.map((w, i) => (
                <div key={i} className="battle-item">
                  <svg className="yes" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: w }} />
                </div>
              ))}
            </div>
          </div>
          <div className="battle-card">
            <div className="battle-card-head">
              <div className="battle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3>THE OTHERS FAIL</h3>
            </div>
            <div className="battle-list">
              {c.loses.map((l, i) => (
                <div key={i} className="battle-item">
                  <svg className="no" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <button className="btn btn-ghost" onClick={onPrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="btn btn-neon" onClick={onNext}>
            SEE THE PROOF{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BattleStep
