function Header({ step, totalSteps }) {
  const progress = ((step + 1) / totalSteps) * 100
  const stepText = `${step + 1}/${totalSteps}`

  return (
    <header className="header">
      <a href="#" className="logo">
        <div className="logo-box">DH</div>
        <span className="logo-text">DATA<span>HUMBLE</span></span>
      </a>
      <div className="xp-bar">
        <span className="xp-label">Progress</span>
        <div className="xp-track">
          <div className="xp-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="xp-text">{stepText}</span>
      </div>
    </header>
  )
}

export default Header
