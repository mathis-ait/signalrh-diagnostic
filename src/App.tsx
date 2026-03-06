import { useState } from 'react'
import LandingScreen from './screens/LandingScreen'
import QuizScreen from './screens/QuizScreen'
import ResultsScreen from './screens/ResultsScreen'
import PricingScreen from './screens/PricingScreen'
import { DIAG_CONFIG, type DiagQuestion } from './data/moha-questions'
import { computeScoresFromMoha } from './lib/mohaScoring'
import type { MohaScoreResult } from './lib/mohaScoring'

type Screen = 'landing' | 'quiz' | 'results'

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing')
  const [effectif, setEffectif] = useState('10-49')
  const [diagId, setDiagId] = useState<'diag360' | 'diagPrevention'>('diag360')
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [currentQ, setCurrentQ] = useState(0)
  const [scoreResult, setScoreResult] = useState<MohaScoreResult | null>(null)

  const config = diagId === 'diag360' ? DIAG_CONFIG.diag1 : DIAG_CONFIG.diag2
  const questions = config.questions
  const q = questions[currentQ]

  function startDiag(id: 'diag360' | 'diagPrevention', eff: string) {
    setDiagId(id)
    setEffectif(eff)
    setAnswers({})
    setCurrentQ(0)
    setScreen('quiz')
  }

  function handleAnswer(value: string | string[]) {
    setAnswers(prev => ({ ...prev, [q.id]: value }))
  }

  function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const result = computeScoresFromMoha(answers, questions)
      setScoreResult(result)
      setScreen('results')
    }
  }

  function handleBack() {
    if (currentQ > 0) setCurrentQ(currentQ - 1)
    else setScreen('landing')
  }

  function handleReset() {
    setAnswers({})
    setCurrentQ(0)
    setScoreResult(null)
    setScreen('landing')
  }

  const currentAnswer = answers[q?.id ?? ''] ?? null

  return (
    <div className="min-h-screen bg-white">
      {screen === 'landing' && (
        <LandingScreen
          effectif={effectif}
          setEffectif={setEffectif}
          onSelectDiag1={(eff) => startDiag('diag360', eff)}
          onSelectDiag2={(eff) => startDiag('diagPrevention', eff)}
        />
      )}

      {screen === 'quiz' && q && (
        <QuizScreen
          question={{
            id: q.id,
            text: q.text,
            type: q.type,
            pilier: q.pilier,
            pilierIcon: q.pilierIcon,
            pilierColor: q.pilierColor,
            options: q.options,
          }}
          answer={currentAnswer as string | string[] | null}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
          current={currentQ + 1}
          total={questions.length}
          isLast={currentQ === questions.length - 1}
        />
      )}

      {screen === 'results' && scoreResult && (
        <div>
          <ResultsScreen
            piliers={scoreResult.piliers}
            globalPct={scoreResult.globalPct}
            globalLevel={scoreResult.globalLevel}
            modules={scoreResult.modules}
            totalPrice={scoreResult.totalPrice}
            effectif={effectif}
            onReset={handleReset}
            diagName={config.name}
          />
          <PricingScreen
            preSelectedModules={scoreResult.recommendedModuleIds}
          />
        </div>
      )}
    </div>
  )
}
