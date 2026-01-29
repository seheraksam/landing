# DataHumble Onboarding - Entegrasyon Rehberi

Bu projeyi başka bir büyük projeye entegre etmek için birkaç yöntem:

## Yöntem 1: Klasör Olarak Kopyalama (En Basit)

### Adımlar:

1. **Onboarding klasörünü hedef projeye kopyala:**
```bash
# Hedef projenin içinde
cp -r /path/to/landing/src/components/onboarding /path/to/big-project/src/components/
cp -r /path/to/landing/src/data/onboarding.js /path/to/big-project/src/data/
cp /path/to/landing/src/index.css /path/to/big-project/src/styles/onboarding.css
```

2. **CSS'i import et:**
```jsx
// Ana App.jsx veya layout dosyasında
import './styles/onboarding.css'
```

3. **Component'i kullan:**
```jsx
import OnboardingFlow from './components/onboarding/OnboardingFlow'

function App() {
  return <OnboardingFlow />
}
```

---

## Yöntem 2: NPM Paketi Olarak Yayınlama

### Adımlar:

1. **package.json'ı paket için hazırla:**
```json
{
  "name": "@datahumble/onboarding",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "files": ["dist"],
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

2. **Build script ekle:**
```json
{
  "scripts": {
    "build:lib": "vite build --mode library"
  }
}
```

3. **vite.config.js'i library moduna çevir:**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'DataHumbleOnboarding',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
```

4. **Entry point oluştur:**
```js
// src/index.js
export { default } from './App'
export { default as OnboardingFlow } from './App'
```

5. **Yayınla:**
```bash
npm publish
```

6. **Hedef projede kullan:**
```bash
npm install @datahumble/onboarding
```

```jsx
import OnboardingFlow from '@datahumble/onboarding'
```

---

## Yöntem 3: Git Submodule Olarak Ekleme

### Adımlar:

1. **Onboarding'ı ayrı bir repo'ya taşı**

2. **Hedef projede submodule ekle:**
```bash
git submodule add https://github.com/your-org/onboarding.git src/components/onboarding
```

3. **Kullan:**
```jsx
import OnboardingFlow from './components/onboarding/src/App'
```

---

## Yöntem 4: Monorepo Yapısı (Lerna/Nx/Turborepo)

### Turborepo Örneği:

```
big-project/
├── apps/
│   ├── web/          # Ana uygulama
│   └── onboarding/   # Onboarding uygulaması
├── packages/
│   └── shared/       # Paylaşılan kodlar
└── turbo.json
```

**turbo.json:**
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

**apps/web/package.json:**
```json
{
  "dependencies": {
    "@big-project/onboarding": "workspace:*"
  }
}
```

---

## Yöntem 5: Direkt Import (Aynı Repo)

Eğer onboarding zaten büyük projenin içindeyse:

```jsx
// src/pages/OnboardingPage.jsx
import OnboardingFlow from '../components/onboarding/App'
import '../styles/onboarding.css'

export default function OnboardingPage() {
  return <OnboardingFlow />
}
```

---

## CSS Entegrasyonu

CSS'i global olarak eklemek yerine CSS Modules veya styled-components kullanabilirsiniz:

### CSS Modules:
```jsx
// Rename: onboarding.module.css
import styles from './onboarding.module.css'

<div className={styles.step}>
```

### Styled Components:
```jsx
import styled from 'styled-components'

const Step = styled.div`
  /* CSS buraya */
`
```

---

## State Management Entegrasyonu

Eğer Redux/Zustand/Jotai kullanıyorsanız:

```jsx
// Zustand örneği
import { useOnboardingStore } from '../store/onboarding'

function OnboardingFlow() {
  const { step, data, next, prev } = useOnboardingStore()
  // ...
}
```

---

## Routing Entegrasyonu

React Router ile:

```jsx
// routes.jsx
import { Route } from 'react-router-dom'
import OnboardingFlow from './components/onboarding/App'

<Route path="/onboarding" element={<OnboardingFlow />} />
```

Next.js ile:

```jsx
// pages/onboarding.js
import OnboardingFlow from '../components/onboarding/App'

export default function OnboardingPage() {
  return <OnboardingFlow />
}
```

---

## Önerilen Yaklaşım

**Küçük-Orta Projeler için:** Yöntem 1 (Klasör kopyalama)
**Büyük Projeler için:** Yöntem 4 (Monorepo)
**Paylaşımlı Paket için:** Yöntem 2 (NPM paketi)
