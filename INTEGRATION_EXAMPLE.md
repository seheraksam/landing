# Pratik Entegrasyon Örnekleri

## Senaryo 1: Next.js Projesine Ekleme

### 1. Dosyaları kopyala:
```bash
# Next.js projenizde
mkdir -p components/onboarding
cp -r /path/to/landing/src/components/* components/onboarding/
cp -r /path/to/landing/src/data.js components/onboarding/data.js
cp /path/to/landing/src/index.css styles/onboarding.css
```

### 2. Sayfa oluştur:
```jsx
// pages/onboarding.js veya app/onboarding/page.jsx
import dynamic from 'next/dynamic'
import '../styles/onboarding.css'

const OnboardingFlow = dynamic(() => import('../components/onboarding/App'), {
  ssr: false
})

export default function OnboardingPage() {
  return <OnboardingFlow />
}
```

---

## Senaryo 2: Create React App Projesine Ekleme

### 1. Klasör yapısı:
```
src/
├── components/
│   └── onboarding/
│       ├── App.jsx
│       ├── components/
│       └── data.js
└── styles/
    └── onboarding.css
```

### 2. App.js'de kullan:
```jsx
// src/App.js
import './styles/onboarding.css'
import OnboardingFlow from './components/onboarding/App'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  
  if (showOnboarding) {
    return <OnboardingFlow onComplete={() => setShowOnboarding(false)} />
  }
  
  return <YourMainApp />
}
```

---

## Senaryo 3: Vite Projesine Ekleme (Mevcut Proje)

### 1. Kopyala:
```bash
cp -r landing/src/components/onboarding your-project/src/components/
cp landing/src/data.js your-project/src/data/onboarding.js
cp landing/src/index.css your-project/src/styles/onboarding.css
```

### 2. Import et:
```jsx
// src/main.jsx veya App.jsx
import './styles/onboarding.css'
import OnboardingFlow from './components/onboarding/App'
```

---

## Senaryo 4: Custom Hook ile State Yönetimi

Eğer büyük projede state management varsa:

```jsx
// hooks/useOnboarding.js
import { useState } from 'react'

export function useOnboarding() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    role: '',
    team: '',
    goals: [],
    tools: [],
    plan: 'pro'
  })

  const next = () => {
    if (step < 7) setStep(step + 1)
  }

  const prev = () => {
    if (step > 0) setStep(step - 1)
  }

  const updateData = (updates) => {
    setData(prev => ({ ...prev, ...updates }))
  }

  return { step, data, next, prev, updateData }
}
```

Sonra componentlerde kullan:
```jsx
import { useOnboarding } from '../hooks/useOnboarding'

function ProfileStep() {
  const { data, updateData, next, prev } = useOnboarding()
  // ...
}
```

---

## Senaryo 5: Context API ile Global State

```jsx
// contexts/OnboardingContext.jsx
import { createContext, useContext, useState } from 'react'

const OnboardingContext = createContext()

export function OnboardingProvider({ children }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    role: '',
    team: '',
    goals: [],
    tools: [],
    plan: 'pro'
  })

  const value = {
    step,
    setStep,
    data,
    setData,
    next: () => setStep(s => Math.min(s + 1, 7)),
    prev: () => setStep(s => Math.max(s - 1, 0))
  }

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  )
}

export const useOnboarding = () => useContext(OnboardingContext)
```

Kullanım:
```jsx
// Ana App'te
<OnboardingProvider>
  <OnboardingFlow />
</OnboardingProvider>

// Componentlerde
const { step, data, next, prev } = useOnboarding()
```

---

## Senaryo 6: Redux/Zustand Entegrasyonu

### Zustand örneği:
```jsx
// store/onboardingStore.js
import create from 'zustand'

export const useOnboardingStore = create((set) => ({
  step: 0,
  data: {
    role: '',
    team: '',
    goals: [],
    tools: [],
    plan: 'pro'
  },
  next: () => set((state) => ({ 
    step: Math.min(state.step + 1, 7) 
  })),
  prev: () => set((state) => ({ 
    step: Math.max(state.step - 1, 0) 
  })),
  updateData: (updates) => set((state) => ({
    data: { ...state.data, ...updates }
  }))
}))
```

Componentlerde:
```jsx
import { useOnboardingStore } from '../store/onboardingStore'

function ProfileStep() {
  const { data, updateData, next, prev } = useOnboardingStore()
  // ...
}
```

---

## CSS Çakışmalarını Önleme

CSS'i scope'lamak için:

### 1. CSS Modules:
```bash
# Tüm .css dosyalarını .module.css yap
onboarding.module.css
```

### 2. CSS-in-JS:
```jsx
import styled from 'styled-components'

const StepContainer = styled.div`
  /* Stiller buraya */
`
```

### 3. Prefix ekle:
```css
/* Tüm class'lara prefix ekle */
.onboarding-step { }
.onboarding-header { }
```

---

## Build ve Deploy

### Standalone build:
```bash
npm run build
# dist/ klasöründe static dosyalar oluşur
```

### Başka projeye embed:
```html
<!-- HTML'de -->
<div id="onboarding-root"></div>
<script type="module" src="/path/to/onboarding/dist/index.js"></script>
```

---

## TypeScript Desteği

Eğer TypeScript kullanıyorsanız:

```tsx
// types/onboarding.ts
export interface OnboardingData {
  role: string
  team: string
  goals: string[]
  tools: string[]
  plan: 'indie' | 'pro' | 'studio'
}

export interface OnboardingProps {
  onComplete?: (data: OnboardingData) => void
  initialStep?: number
}
```

```tsx
// components/onboarding/App.tsx
import { OnboardingProps, OnboardingData } from '../../types/onboarding'

export default function OnboardingFlow({ 
  onComplete, 
  initialStep = 0 
}: OnboardingProps) {
  // ...
}
```
