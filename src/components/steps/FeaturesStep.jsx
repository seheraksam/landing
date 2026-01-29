import { useState } from 'react'
import { featureData } from '../../data'

function FeaturesStep({ data, onNext, onPrev }) {
  const [activeTab, setActiveTab] = useState('spy')
  
  const tabs = ['spy', 'price', 'market', 'stream', 'launch', 'review']
  const tabLabels = {
    spy: 'COMP INTEL',
    price: 'PRICING',
    market: 'MARKET',
    stream: 'STREAMERS',
    launch: 'LAUNCH',
    review: 'REVIEWS'
  }

  return (
    <div className="step step-features active">
      <div className="features-box">
        <div className="features-head">
          <p className="step-num">STEP 04 // ARSENAL</p>
          <h1 className="title-lg">
            YOUR <span className="glow-text">WEAPONS</span>
          </h1>
        </div>
        <div className="tab-nav">
          {tabs.map(t => (
            <button
              key={t}
              className={`tab-btn ${t === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {tabLabels[t]}
            </button>
          ))}
        </div>
        {tabs.map(t => {
          const f = featureData[t]
          return (
            <div key={t} className={`tab-content ${t === activeTab ? 'active' : ''}`}>
              <div className="tab-media">
                <img src={f.gif} alt={f.title} />
              </div>
              <div className="tab-info">
                <span className="tab-cat">{f.cat}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="tab-stat">
                  <span className="num">{f.stat.num}</span>
                  <span className="txt">{f.stat.txt}</span>
                </div>
                <div className="benefit-col">
                  {f.benefits.map((b, i) => (
                    <div key={i} className="b-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
        <div className="features-btns">
          <button className="btn btn-ghost" onClick={onPrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="btn btn-neon" onClick={onNext}>
            SEE HOW WE COMPARE{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturesStep
