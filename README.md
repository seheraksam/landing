# DataHumble Onboarding - React

Bu proje, DataHumble onboarding sayfasının React versiyonudur.

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Proje `http://localhost:5173` adresinde çalışacaktır.

## Build

```bash
npm run build
```

Build dosyaları `dist` klasörüne oluşturulacaktır.

## Proje Yapısı

```
src/
├── components/
│   ├── Header.jsx          # Header ve XP progress bar
│   └── steps/
│       ├── HookStep.jsx    # İlk hook ekranı
│       ├── ProfileStep.jsx  # Profil seçimi
│       ├── GoalsStep.jsx   # Hedef seçimi
│       ├── ToolsStep.jsx   # Araç seçimi
│       ├── FeaturesStep.jsx # Özellikler gösterimi
│       ├── BattleStep.jsx  # Karşılaştırma
│       ├── ProofStep.jsx   # Kanıt/testimonial
│       └── PricingStep.jsx  # Fiyatlandırma
├── App.jsx                 # Ana uygulama componenti
├── main.jsx                # React entry point
├── data.js                 # Veri sabitleri
└── index.css               # Global stiller
```

## Özellikler

- 8 adımlı onboarding süreci
- Responsive tasarım
- Cyberpunk/neon temalı UI
- Form validasyonu
- State yönetimi
- Smooth animasyonlar
