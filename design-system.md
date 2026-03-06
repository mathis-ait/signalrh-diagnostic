# Design System — SignalRH Diagnostic

## Brand
SignalRH — plateforme B2B de prévention RPS. Ton: professionnel, clair, rassurant, moderne.

## Colors
- **Primary blue**: `#2073BB`
- **Dark blue**: `#003B76`
- **Gradient**: `from-[#2073BB] via-[#003B76] to-[#2073BB]`
- **Background**: `#ffffff` (white) with subtle ambient glows
- **Text primary**: `text-zinc-900`
- **Text secondary**: `text-zinc-600` / `text-zinc-500`
- **Text muted**: `text-zinc-400`
- **Borders**: `border-zinc-200`
- **Card bg**: `bg-white`
- **Light blue tint**: `bg-[#2073BB]/10`

## Typography
- Font stack: system UI / sans-serif
- Headings: `font-bold tracking-tight text-zinc-900`
- Large heading: `text-4xl md:text-5xl font-bold`
- Sub-heading: `text-lg md:text-xl text-zinc-700 font-medium`
- Body: `text-sm text-zinc-600`
- Label/badge: `text-xs font-bold uppercase tracking-wider`

## Buttons
- **Primary**: `bg-[#2073BB] text-white px-8 py-4 rounded-full font-medium hover:bg-[#003B76] transition-colors shadow-lg shadow-[#2073BB]/20`
- **Secondary**: `bg-zinc-100 text-zinc-900 px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors`
- **Ghost**: `text-zinc-500 hover:text-zinc-900 transition-colors`

## Cards
```
rounded-3xl bg-white border border-zinc-200 p-6 md:p-8 overflow-hidden shadow-2xl shadow-zinc-200/50
```
With optional top ambient glow:
```
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#2073BB]/10 blur-[100px] -z-10" />
```

## Badge / Pill
```
inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2073BB]/10 border border-[#2073BB]/30 text-xs font-bold text-[#003B76]
```

## Background glow effect (ambient)
```
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2073BB]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
```

## Progress bar
```
h-2 bg-zinc-100 rounded-full overflow-hidden
→ inner: h-full bg-gradient-to-r from-[#2073BB] to-[#003B76] rounded-full transition-all duration-500
```

## Answer options (questionnaire)
```
w-full text-left px-5 py-4 rounded-2xl border-2 transition-all
→ Unselected: border-zinc-200 text-zinc-700 hover:border-[#2073BB]/40 hover:bg-zinc-50
→ Selected: border-[#2073BB] bg-[#EFF6FF] text-[#1e40af]
```

## Layout
- Max width: `max-w-2xl` or `max-w-5xl` centered
- Page padding: `px-4 py-12`
- Section spacing: `mb-12`

## Animations
- Use `motion/react` (framer-motion fork): `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`
- Stagger with `delay: 0.1, 0.2, 0.3...`

## Score levels (risk)
- Bon (>75%): `bg-emerald-50 text-emerald-700 border-emerald-200` / bar `bg-emerald-500`
- Moyen (50-75%): `bg-yellow-50 text-yellow-700 border-yellow-200` / bar `bg-yellow-400`
- Faible (25-50%): `bg-orange-50 text-orange-700 border-orange-200` / bar `bg-orange-400`
- Critique (<25%): `bg-red-50 text-red-700 border-red-200` / bar `bg-red-500`

## Module colors
- PREVENTION: `#2073BB` (blue)
- SIGNALEMENT: `#D97706` (amber)
- REMONTEE_INFO: `#059669` (green)

## Logo
`/images/logo-signalrh.png` — use at `h-8` in navbar

## Icons
lucide-react library

## Key UX patterns
- White background, single column centered, max-w-2xl
- Card with rounded-3xl and shadow for main content
- Rounded-full buttons
- Ambient blue glow behind cards (subtle)
- Progress bar at top during quiz
- Pilier badge colored strip above question card
- Check circle (✓) for selected options
