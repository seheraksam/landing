function ProfileStep({ data, updateData, onNext, onPrev }) {
  const roles = [
    { id: 'dev', icon: '👨‍💻', title: 'Developer', desc: 'Building games' },
    { id: 'pub', icon: '📚', title: 'Publisher', desc: 'Releasing games' },
    { id: 'mark', icon: '📈', title: 'Marketing', desc: 'Promoting games' },
    { id: 'other', icon: '🎮', title: 'Other', desc: 'Just curious' }
  ]
  
  const teams = [
    { id: 'solo', label: 'Solo' },
    { id: 'small', label: '2-10' },
    { id: 'mid', label: '11-50' },
    { id: 'large', label: '50+' }
  ]

  return (
    <div className="step step-form active">
      <div className="form-box">
        <div className="form-head">
          <p className="step-num">STEP 01 // QUICK PROFILE</p>
          <h1 className="title-lg">
            WHO ARE WE <span className="glow-text">ARMING</span> TODAY?
          </h1>
          <p className="sub">This takes 30 seconds. We'll customize everything based on your answers.</p>
        </div>
        <div className="neon-grid neon-grid-4" style={{ marginBottom: '32px' }}>
          {roles.map(r => (
            <label key={r.id} className="neon-card">
              <input
                type="radio"
                name="role"
                value={r.id}
                checked={data.role === r.id}
                onChange={(e) => updateData({ role: e.target.value })}
              />
              <div className="neon-inner">
                <span className="neon-icon">{r.icon}</span>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </label>
          ))}
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Team size?</p>
        <div className="chip-row">
          {teams.map(t => (
            <label key={t.id} className="n-chip">
              <input
                type="radio"
                name="team"
                value={t.id}
                checked={data.team === t.id}
                onChange={(e) => updateData({ team: e.target.value })}
              />
              <span className="n-chip-inner">{t.label}</span>
            </label>
          ))}
        </div>
        <div className="btn-row">
          <button className="btn btn-ghost" onClick={onPrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="btn btn-neon" onClick={onNext}>
            CONTINUE{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileStep
