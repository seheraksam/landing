function PricingStep({ data, updateData, onPrev }) {
  const getRecommendedPlan = () => {
    if (data.team === 'large' || data.team === 'mid') return 'studio'
    if (data.team === 'small' || data.goals.length >= 3) return 'pro'
    return 'indie'
  }

  const selectPlan = (planId) => {
    updateData({ plan: planId })
  }

  const rec = getRecommendedPlan()

  const plans = [
    {
      id: 'indie',
      name: 'INDIE',
      price: '$19',
      note: 'For solo devs',
      features: [
        'Core market analytics',
        '100 game lookups/month',
        'Basic competitor tracking',
        'Email support'
      ],
      tag: rec === 'indie' ? 'RECOMMENDED' : null
    },
    {
      id: 'pro',
      name: 'PRO',
      price: '$49',
      note: 'For serious studios',
      features: [
        'Everything in Indie',
        'Unlimited lookups',
        'Streamer discovery',
        'Review AI',
        'API access'
      ],
      tag: rec === 'pro' ? 'MOST POPULAR' : null
    },
    {
      id: 'studio',
      name: 'STUDIO',
      price: '$149',
      note: 'For growing teams',
      features: [
        'Everything in Pro',
        'Up to 10 seats',
        'Custom alerts',
        'Priority support',
        'Success manager'
      ],
      tag: rec === 'studio' ? 'FOR TEAMS' : null
    }
  ]

  return (
    <div className="step step-pricing active">
      <div className="pricing-box">
        <div className="pricing-head">
          <p className="step-num">STEP 07 // CHOOSE YOUR LOADOUT</p>
          <h1 className="title-lg">
            PICK YOUR <span className="glow-text">WEAPON</span>
          </h1>
          <p className="sub">14-day free trial on all plans. No credit card required.</p>
        </div>
        <div className="price-grid">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`price-card ${rec === plan.id ? 'rec' : ''} ${data.plan === plan.id ? 'sel' : ''}`}
              onClick={() => selectPlan(plan.id)}
            >
              {plan.tag && <div className="price-tag">{plan.tag}</div>}
              <h3>{plan.name}</h3>
              <div className="price-amt">{plan.price}<span>/MO</span></div>
              <div className="price-note">{plan.note}</div>
              <div className="price-list">
                {plan.features.map((feature, i) => (
                  <div key={i} className="price-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="cta-zone">
          <a href={`checkout.html?plan=${data.plan}`} className="btn btn-neon btn-cta">
            START FREE TRIAL{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <div className="trust-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            NO CREDIT CARD • CANCEL ANYTIME • 14-DAY FREE TRIAL
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingStep
