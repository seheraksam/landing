function GoalsStep({ data, updateData, onNext, onPrev }) {
  const goals = [
    { id: 'spy', icon: '🔍', label: 'Spy on competitors' },
    { id: 'price', icon: '💰', label: 'Optimize pricing' },
    { id: 'market', icon: '📊', label: 'Research markets' },
    { id: 'stream', icon: '📺', label: 'Find streamers' },
    { id: 'launch', icon: '🚀', label: 'Plan launch timing' },
    { id: 'review', icon: '💬', label: 'Analyze reviews' }
  ]

  const toggleGoal = (id) => {
    const newGoals = data.goals.includes(id)
      ? data.goals.filter(g => g !== id)
      : [...data.goals, id]
    updateData({ goals: newGoals })
  }

  return (
    <div className="step step-form active">
      <div className="form-box">
        <div className="form-head">
          <p className="step-num">STEP 02 // MISSION SELECT</p>
          <h1 className="title-lg">
            WHAT'S <span className="glow-text">KILLING</span> YOUR REVENUE?
          </h1>
          <p className="sub">Select all that apply. Be honest - we've all got blind spots.</p>
        </div>
        <div className="chip-row">
          {goals.map(g => (
            <label key={g.id} className="n-chip">
              <input
                type="checkbox"
                name="goals"
                value={g.id}
                checked={data.goals.includes(g.id)}
                onChange={() => toggleGoal(g.id)}
              />
              <span className="n-chip-inner">{g.icon} {g.label}</span>
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

export default GoalsStep
