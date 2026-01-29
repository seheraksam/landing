function ToolsStep({ data, updateData, onNext, onPrev }) {
  const tools = [
    { id: 'steamspy', label: 'SteamSpy' },
    { id: 'vginsights', label: 'VG Insights' },
    { id: 'gamalytic', label: 'Gamalytic' },
    { id: 'steamdb', label: 'SteamDB' },
    { id: 'none', label: 'None (yet)' }
  ]

  const toggleTool = (id) => {
    const newTools = data.tools.includes(id)
      ? data.tools.filter(t => t !== id)
      : [...data.tools, id]
    updateData({ tools: newTools })
  }

  return (
    <div className="step step-form active">
      <div className="form-box">
        <div className="form-head">
          <p className="step-num">STEP 03 // ENEMY RECON</p>
          <h1 className="title-lg">
            WHAT HAVE YOU <span className="glow-text">TRIED</span> BEFORE?
          </h1>
          <p className="sub">No judgment. We'll show you why DataHumble hits different.</p>
        </div>
        <div className="chip-row">
          {tools.map(t => (
            <label key={t.id} className="n-chip">
              <input
                type="checkbox"
                name="tools"
                value={t.id}
                checked={data.tools.includes(t.id)}
                onChange={() => toggleTool(t.id)}
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
            SHOW ME THE WEAPONS{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToolsStep
