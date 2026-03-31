import React, { useState, useEffect, useCallback } from 'react'
import ProgressBar from './components/ProgressBar'
import ViewBadge from './components/ViewBadge'
import Screen1HardDisqualifiers from './screens/Screen1HardDisqualifiers'
import Screen2StructuredData from './screens/Screen2StructuredData'
import Screen3RecruiterStage1 from './screens/Screen3RecruiterStage1'
import Screen4Invitation from './screens/Screen4Invitation'
import Screen5Stage2Form from './screens/Screen5Stage2Form'
import Screen6RecruiterStage2 from './screens/Screen6RecruiterStage2'
import Screen7WorkSample from './screens/Screen7WorkSample'
import Screen8RecruiterStage3 from './screens/Screen8RecruiterStage3'
import Screen9DueDiligence from './screens/Screen9DueDiligence'
import Screen10Final from './screens/Screen10Final'
import CandidateDatabase from './screens/CandidateDatabase'

const SCREEN_CONFIG = [
  { stage: 1, view: 'candidate' },
  { stage: 1, view: 'candidate' },
  { stage: 1, view: 'recruiter' },
  { stage: 2, view: 'candidate' },
  { stage: 2, view: 'candidate' },
  { stage: 2, view: 'recruiter' },
  { stage: 3, view: 'candidate' },
  { stage: 3, view: 'recruiter' },
  { stage: 4, view: 'recruiter' },
  { stage: 4, view: 'complete' },
]

const defaultFormData = {
  disqualifiers: {
    experience: true,
    degree: true,
    authorized: true,
    location: true,
  },
  structured: {
    degreeLevel: "Master's degree",
    fieldOfStudy: 'Special Education',
    yearsExperience: 8,
    subjectAreas: ['Elementary literacy', 'Special education', 'Neurodiverse learners'],
    currentState: 'Illinois',
    zipCode: '60614',
    availability: 'Full-time',
    referralSource: 'Referral from colleague',
  },
  screeners: {
    q1: 'After eight years in traditional classroom settings, I found myself most energized in the moments I could work one-on-one with a student who needed a different approach. Private instruction allows me to build a relationship with a child over time and adapt continuously in ways a classroom never could. I am particularly drawn to working with neurodiverse learners because the progress is deeply personal and the stakes feel real.',
    q2: 'In my last role I was the lead designer of the literacy curriculum for our special education department across three grade levels. I built the scope and sequence from scratch, created all supplemental materials, and trained two other teachers on the approach. I have always owned the curriculum rather than delivered someone else\'s.',
    q3: 'My Master\'s in Special Education from Michigan gave me a strong foundation in individualized instruction and assessment. But what prepared me most was a fellowship I completed in my third year working exclusively with students with dyslexia using Orton-Gillingham methods. That experience shaped how I think about building a learning relationship before building a curriculum.',
  },
  logistics: {
    salaryMin: 90000,
    salaryIdeal: 115000,
    availability: 'Full-time, Monday through Friday',
    locationFlex: 'Open to relocation, available to travel domestically',
    startDate: 'August 1st',
  },
  workSample: `Week 1 focus: relationship building and informal assessment. I would spend the first three days observing Ethan in different contexts before administering any formal assessment. I would use a modified reading inventory alongside some open-ended math tasks to understand not just his level but his processing style and frustration triggers.

Daily structure proposal: 90 minutes of literacy in the morning when his focus is freshest, a movement break, 60 minutes of math and reasoning, lunch and unstructured time, then project-based work in the afternoon tied to his interests to build intrinsic motivation.

Sample activity 1: a phoneme-mapping exercise using manipulatives and color coding, grounded in Orton-Gillingham principles, paced to avoid cognitive overload.

Sample activity 2: a math story problem set built around topics Ethan has expressed interest in, designed to separate reading decoding from mathematical reasoning so we can isolate where the difficulty actually lives.`,
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [visible, setVisible] = useState(true)
  const [formData, setFormData] = useState(defaultFormData)
  const [showDatabase, setShowDatabase] = useState(false)

  const goToScreen = useCallback((index) => {
    setVisible(false)
    setTimeout(() => {
      window.scrollTo({ top: 0 })
      setCurrentScreen(index)
      setVisible(true)
    }, 250)
  }, [])

  const advance = useCallback(() => {
    goToScreen(currentScreen + 1)
  }, [currentScreen, goToScreen])

  const reset = useCallback(() => {
    setFormData(defaultFormData)
    setShowDatabase(false)
    goToScreen(0)
  }, [goToScreen])

  const openDatabase = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setShowDatabase(true)
      setVisible(true)
    }, 200)
  }, [])

  const backFromDatabase = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setShowDatabase(false)
      setVisible(true)
    }, 200)
  }, [])

  const config = SCREEN_CONFIG[currentScreen] || { stage: 4, view: 'complete' }
  const isCandidate = config.view === 'candidate'
  const isRecruiter = config.view === 'recruiter'
  const bgClass = showDatabase
    ? 'bg-gray-50'
    : isCandidate
    ? 'bg-[#fefdfb]'
    : isRecruiter
    ? 'bg-[#eef1f6]'
    : 'bg-white'

  const screens = [
    <Screen1HardDisqualifiers formData={formData} setFormData={setFormData} onAdvance={advance} />,
    <Screen2StructuredData formData={formData} setFormData={setFormData} onAdvance={advance} />,
    <Screen3RecruiterStage1 formData={formData} onAdvance={advance} />,
    <Screen4Invitation onAdvance={advance} />,
    <Screen5Stage2Form formData={formData} setFormData={setFormData} onAdvance={advance} />,
    <Screen6RecruiterStage2 formData={formData} onAdvance={advance} />,
    <Screen7WorkSample formData={formData} setFormData={setFormData} onAdvance={advance} />,
    <Screen8RecruiterStage3 formData={formData} onAdvance={advance} />,
    <Screen9DueDiligence onAdvance={advance} />,
    <Screen10Final onReset={reset} onViewDatabase={openDatabase} />,
  ]

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Thrive</h1>
            <span className="text-sm text-gray-400 font-medium">Education Partners</span>
          </div>
          {!showDatabase && config.view !== 'complete' && (
            <ViewBadge view={config.view} />
          )}
        </div>
        {!showDatabase && (
          <ProgressBar currentStage={config.stage} currentScreen={currentScreen} />
        )}
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div
          className={`transition-all duration-300 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {showDatabase ? (
            <CandidateDatabase formData={formData} onBack={backFromDatabase} />
          ) : (
            screens[currentScreen]
          )}
        </div>
      </main>
    </div>
  )
}
