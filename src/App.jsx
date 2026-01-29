import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import HookStep from './components/steps/HookStep'
import ProfileStep from './components/steps/ProfileStep'
import GoalsStep from './components/steps/GoalsStep'
import ToolsStep from './components/steps/ToolsStep'
import FeaturesStep from './components/steps/FeaturesStep'
import BattleStep from './components/steps/BattleStep'
import ProofStep from './components/steps/ProofStep'
import PricingStep from './components/steps/PricingStep'

const TOTAL_STEPS = 8

function App() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    role: '',
    team: '',
    goals: [],
    tools: [],
    plan: 'pro'
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  const next = () => {
    if (validate()) {
      if (step < TOTAL_STEPS - 1) {
        setStep(step + 1)
      }
    }
  }

  const prev = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const validate = () => {
    if (step === 1 && (!data.role || !data.team)) {
      alert('Please complete your profile to continue.')
      return false
    }
    if (step === 2 && data.goals.length === 0) {
      alert('Select at least one goal.')
      return false
    }
    return true
  }

  const updateData = (updates) => {
    setData(prev => ({ ...prev, ...updates }))
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <HookStep onNext={next} />
      case 1:
        return <ProfileStep data={data} updateData={updateData} onNext={next} onPrev={prev} />
      case 2:
        return <GoalsStep data={data} updateData={updateData} onNext={next} onPrev={prev} />
      case 3:
        return <ToolsStep data={data} updateData={updateData} onNext={next} onPrev={prev} />
      case 4:
        return <FeaturesStep data={data} onNext={next} onPrev={prev} />
      case 5:
        return <BattleStep onNext={next} onPrev={prev} />
      case 6:
        return <ProofStep onNext={next} onPrev={prev} />
      case 7:
        return <PricingStep data={data} updateData={updateData} onPrev={prev} />
      default:
        return null
    }
  }

  return (
    <>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>
      
      <Header step={step} totalSteps={TOTAL_STEPS} />
      
      <main className="main">
        {renderStep()}
      </main>
      
      <footer className="footer">
        <a href="https://datahumble.com">DataHumble</a>
        <a href="https://datahumble.com/privacy">Privacy</a>
        <a href="https://datahumble.com/terms">Terms</a>
      </footer>
    </>
  )
}

export default App
