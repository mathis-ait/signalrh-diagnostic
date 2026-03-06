import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Mode sélection de vibe (temporaire)
const VIBE_MODE = true;

import Vibe1 from './screens/Vibe1'
import Vibe2 from './screens/Vibe2'
import Vibe3 from './screens/Vibe3'
import Vibe4 from './screens/Vibe4'
import Vibe5 from './screens/Vibe5'
import App from './App'

const VIBES_INFO = [
  { id: 1, name: "Dark SaaS", desc: "Dark navy, electric blue, Linear/Vercel style" },
  { id: 2, name: "Corporate HR", desc: "White/blue, split layout, dashboard mockup" },
  { id: 3, name: "Bold Gradient", desc: "Full blue gradient, giant typography" },
  { id: 4, name: "Soft Modern", desc: "Blobs, rounded, 3-step process" },
  { id: 5, name: "Editorial Premium", desc: "Typographic, flat, score preview card" },
]

function VibeSelector() {
  const [selected, setSelected] = useState<number | null>(null)

  if (!VIBE_MODE) return <App />

  if (selected === null) {
    return (
      <div className="min-h-screen bg-slate-900 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <img src="/images/logo-signalrh.png" className="h-8" alt="SignalRH" />
            <span className="text-slate-400 text-sm">— Sélection du design</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-2">Choisir un vibe</h1>
          <p className="text-slate-400 mb-10">5 styles disponibles pour le diagnostic QVCT — cliquez pour voir le rendu complet</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VIBES_INFO.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v.id)}
                className="text-left rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 p-6 transition-all group"
              >
                <div className="text-5xl font-black text-blue-500 mb-3">{v.id}</div>
                <div className="font-bold text-white text-lg mb-1">{v.name}</div>
                <div className="text-slate-400 text-sm">{v.desc}</div>
                <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300">Voir →</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const VibeMap: Record<number, React.ComponentType> = { 1: Vibe1, 2: Vibe2, 3: Vibe3, 4: Vibe4, 5: Vibe5 }
  const SelectedVibe = VibeMap[selected]

  return (
    <div>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-slate-900/95 backdrop-blur border border-slate-700 rounded-full px-5 py-2.5 shadow-2xl">
        <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white text-sm transition-colors">← Vibes</button>
        <span className="text-white font-bold text-sm">Vibe {selected} — {VIBES_INFO[selected-1].name}</span>
        {VIBES_INFO.map(v => (
          <button key={v.id} onClick={() => setSelected(v.id)}
            className={`w-7 h-7 rounded-full text-xs font-bold transition-all ${selected === v.id ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}>
            {v.id}
          </button>
        ))}
      </div>
      <SelectedVibe />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VibeSelector />
  </StrictMode>,
)
