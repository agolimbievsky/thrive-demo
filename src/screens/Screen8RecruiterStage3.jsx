import React, { useState } from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

const familyChecklist = [
  { label: 'Salary range compatible', detail: 'Yes — $90K to $115K aligns with Hartley offer of $105K' },
  { label: 'Subject specialization', detail: 'Yes — dyslexia and ADHD experience confirmed' },
  { label: 'Travel flexibility', detail: 'Yes — open to domestic travel' },
  { label: 'Full-time availability', detail: 'Yes' },
  { label: 'Start date', detail: 'Yes — August 1st aligns with family\'s request' },
]

const interviewQA = [
  {
    q: 'Walk me through your approach to building a relationship with a new student in the first two weeks.',
    a: 'I treat the first two weeks as observation and trust-building before anything else. I don\'t come in with a lesson plan on day one. I want to understand how Ethan moves through the world — when is he most alert, what frustrates him, what makes him light up. I might play a game, go for a walk, do a low-stakes activity together. The academic plan follows the relationship, not the other way around.',
    flag: null,
    note: 'Strong. Candidate understands that relationship is the prerequisite, not the outcome.',
  },
  {
    q: 'Tell me about a time you adapted your teaching strategy based on something unexpected you learned about a student.',
    a: 'I had a student who was shutting down every time I introduced written work. I assumed it was resistance. Turned out he had undiagnosed vision tracking issues that made reading physically uncomfortable. Once I caught that and we got him evaluated, everything changed. I had to completely rebuild the literacy block around oral and tactile approaches for several months. It reminded me that behavior is always communication.',
    flag: null,
    note: 'Very strong. Demonstrates diagnostic instinct and willingness to rebuild rather than push through.',
  },
  {
    q: 'How do you structure a school day for a single student while keeping them engaged and avoiding fatigue?',
    a: 'I follow the energy, not the clock. For a student with ADHD, a rigid 9-to-3 is going to produce diminishing returns by noon. I front-load literacy when focus is highest — usually the first 90 minutes. Then movement. Then math and reasoning. After lunch I use project-based work or interest-driven activities because that\'s where I can get engagement even when the tank is low.',
    flag: 'follow-up',
    flagNote: 'AI flag: Answer is strong in structure but does not address how this adapts on travel weeks when routine changes. Recommended follow-up: "How does your daily structure shift when the family is traveling and the physical environment changes?"',
    note: 'Good answer. Flag raised for travel-week adaptation — probed in debrief, see note below.',
  },
  {
    q: 'How would you handle a situation where a parent disagrees with your assessment of their child\'s progress?',
    a: 'I\'d want to understand what they\'re seeing that I\'m not. Parent observation at home is data I don\'t have access to. I\'d share my documentation — what I\'m measuring, how — and then ask them to walk me through their concern. Usually the disagreement is about framing or timeline, not the underlying facts. If we genuinely see different things, I treat that as a signal that I need to look harder.',
    flag: null,
    note: 'Strong. Positions parent as a collaborator with valid data, not an obstacle to manage.',
  },
  {
    q: 'What does a successful first year of private instruction look like to you, and how would you measure it?',
    a: 'Success in year one is mostly about foundation. I want Ethan to have a relationship with learning that isn\'t defined by frustration. Measurably: improved phonemic awareness and decoding fluency, reduction in avoidance behaviors around reading, and a daily structure he can predict and feel safe in. I\'d also want the family to feel genuinely informed — that they understand what we\'re working on and why.',
    flag: null,
    note: 'Excellent. Balances quantitative markers with relational and family-facing outcomes.',
  },
]

export default function Screen8RecruiterStage3({ formData, onAdvance }) {
  const [rubricScore, setRubricScore] = useState('strong')
  const [reviewNote, setReviewNote] = useState('Highly specific to Ethan\'s profile. Orton-Gillingham reference and separation of decoding from math reasoning show real diagnostic thinking. Confirmed in debrief.')
  const [expandedQ, setExpandedQ] = useState(null)
  const [interviewNotes, setInterviewNotes] = useState(
    interviewQA.reduce((acc, _, i) => ({ ...acc, [i]: interviewQA[i].note }), {})
  )

  return (
    <div>
      <StageHeader stage={3} title="ATS: Stage 3 Review — Sarah Chen for the Hartley Family" />

      {/* Family match + interview date */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Family Match Checklist</h3>
          <div className="space-y-3">
            {familyChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="text-sm font-medium text-gray-800">{item.label}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Interview Record</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Date</span>
              <span className="font-medium text-gray-800">Wednesday, July 9, 2026</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Format</span>
              <span className="font-medium text-gray-800">Video call, 58 minutes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Interviewer</span>
              <span className="font-medium text-gray-800">Jordan Mills, Thrive Placement</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Overall rating</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">Strong — Recommend advance</span>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed">Candidate was composed, direct, and clearly thinking about Ethan specifically rather than neurodiverse learners in the abstract. One follow-up raised on travel-week structure (see Q3 below).</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interview Q&A */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Interview Transcript Summary</h3>
        <p className="text-xs text-gray-500 mb-5">Click any question to expand notes. AI-flagged items are highlighted.</p>
        <div className="space-y-3">
          {interviewQA.map((item, i) => (
            <div
              key={i}
              className={`rounded-lg border transition-all duration-200 ${
                item.flag === 'follow-up'
                  ? 'border-amber-300 bg-amber-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <button
                onClick={() => setExpandedQ(expandedQ === i ? null : i)}
                className="w-full flex items-start gap-3 px-4 py-3 text-left cursor-pointer"
              >
                <span className={`text-xs font-bold shrink-0 mt-0.5 ${item.flag ? 'text-amber-600' : 'text-gray-400'}`}>Q{i + 1}</span>
                <span className="text-sm font-medium text-gray-800 flex-1">{item.q}</span>
                {item.flag === 'follow-up' && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-200 text-amber-800 shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Follow-up
                  </span>
                )}
                <svg
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${expandedQ === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedQ === i && (
                <div className="px-4 pb-4 border-t border-gray-200 pt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Candidate answer</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                  {item.flag === 'follow-up' && (
                    <div className="bg-amber-100 border border-amber-200 rounded-lg px-3 py-2.5">
                      <p className="text-xs font-semibold text-amber-800 mb-1">AI recommendation</p>
                      <p className="text-xs text-amber-700 leading-relaxed">{item.flagNote}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Interviewer note</p>
                    <textarea
                      value={interviewNotes[i]}
                      onChange={e => setInterviewNotes(prev => ({ ...prev, [i]: e.target.value }))}
                      rows={2}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none resize-none"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Work sample review */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Work Sample Review</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-5 border border-gray-100 max-h-48 overflow-y-auto">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{formData.workSample}</p>
        </div>
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Rubric Score</label>
          <div className="flex gap-2">
            {['Needs improvement', 'Satisfactory', 'Strong'].map(score => {
              const val = score.toLowerCase().replace(/\s+/g, '-')
              return (
                <button
                  key={val}
                  onClick={() => setRubricScore(val)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    rubricScore === val
                      ? val === 'strong' ? 'bg-green-100 text-green-700 ring-1 ring-green-300'
                        : val === 'satisfactory' ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-300'
                        : 'bg-red-100 text-red-700 ring-1 ring-red-300'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {score}
                </button>
              )
            })}
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Does this feel like genuine engagement with the student profile, or does it read as generic?
          </label>
          <textarea
            value={reviewNote}
            onChange={e => setReviewNote(e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-y"
          />
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-3 mb-8">
        <p className="text-sm text-green-800 font-medium">
          Sarah is a strong match for the Hartley family. Interview complete. Recommend advancing to Stage 4.
        </p>
      </div>

      <div className="flex justify-end">
        <PrimaryButton stage={3} onClick={onAdvance}>
          Initiate Stage 4
        </PrimaryButton>
      </div>
    </div>
  )
}
