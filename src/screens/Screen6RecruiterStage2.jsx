import React, { useState } from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

const screenerQuestions = [
  { key: 'q1', label: 'What draws you to working in a private, 1:1 setting?' },
  { key: 'q2', label: 'Tell me about your experience lesson planning, creating curriculum, and supplemental materials.' },
  { key: 'q3', label: 'Describe your educational background and what prepared you most.' },
]

const videoRubric = [
  { key: 'warm', label: 'Relational and warm', desc: 'Makes eye contact, speaks naturally, does not read from a script' },
  { key: 'polished', label: 'Polished', desc: 'Professional background, appropriate attire, minimal filler words' },
  { key: 'reliable', label: 'Reliable and on-it', desc: 'Submitted on time, follows prompt, stays within time limit, references prompt directly' },
  { key: 'dynamic', label: 'Dynamic', desc: 'Varies tone, shows personality, does not sound rehearsed' },
]

const profileTraits = [
  { key: 'warm', label: 'Relational and warm' },
  { key: 'dynamic', label: 'Dynamic' },
  { key: 'polished', label: 'Polished and professional' },
  { key: 'reliable', label: 'Reliable and on-it' },
]

export default function Screen6RecruiterStage2({ formData, onAdvance }) {
  const { screeners, logistics } = formData
  const [flagged, setFlagged] = useState({ q1: true, q2: true, q3: true })
  const [rubric, setRubric] = useState({ warm: true, polished: true, reliable: true, dynamic: true })
  const [traits, setTraits] = useState({ warm: true, dynamic: true, polished: true, reliable: true })

  return (
    <div>
      <StageHeader stage={2} title="ATS: Stage 2 Review — Sarah Chen" />

      {/* Written responses */}
      <div className="space-y-4 mb-8">
        {screenerQuestions.map((q, i) => (
          <div key={q.key} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Q{i + 1}: {q.label}</span>
              <button
                onClick={() => setFlagged(prev => ({ ...prev, [q.key]: !prev[q.key] }))}
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                  flagged[q.key] ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-400 hover:text-gray-600'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill={flagged[q.key] ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                Strong
              </button>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{screeners[q.key]}</p>
          </div>
        ))}
      </div>

      {/* Video rubric */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Video Rubric</h3>
        <div className="space-y-3">
          {videoRubric.map(item => (
            <label key={item.key} className="flex items-center gap-3 cursor-pointer group">
              <button
                onClick={() => setRubric(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                  rubric[item.key] ? 'bg-purple-500 border-purple-500' : 'border-gray-300 group-hover:border-gray-400'
                }`}
              >
                {rubric[item.key] && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <div>
                <span className="text-sm font-medium text-gray-800">{item.label}</span>
                <span className="text-xs text-gray-500 ml-2">{item.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Logistics summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Logistics Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <SummaryItem label="Salary range" value={`$${(logistics.salaryMin / 1000).toFixed(0)}K – $${(logistics.salaryIdeal / 1000).toFixed(0)}K`} />
          <SummaryItem label="Availability" value={logistics.availability} />
          <SummaryItem label="Location flexibility" value={logistics.locationFlex} />
          <SummaryItem label="Start date" value={logistics.startDate} />
        </div>
      </div>

      {/* Thrive profile assessment */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Thrive Profile Assessment</h3>
        <div className="grid grid-cols-2 gap-3">
          {profileTraits.map(trait => (
            <div key={trait.key} className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-100 bg-gray-50">
              <span className="text-sm text-gray-700">{trait.label}</span>
              <button
                onClick={() => setTraits(prev => ({ ...prev, [trait.key]: !prev[trait.key] }))}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  traits[trait.key]
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {traits[trait.key] ? 'Yes' : 'No'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Summary banner */}
      <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-3 mb-8">
        <p className="text-sm text-green-800 font-medium">
          Sarah passes the Thrive profile assessment. Logistics are compatible with the Hartley family opening.
        </p>
      </div>

      <div className="flex justify-end">
        <PrimaryButton stage={2} onClick={onAdvance}>
          Advance to Stage 3
        </PrimaryButton>
      </div>
    </div>
  )
}

function SummaryItem({ label, value }) {
  return (
    <div className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-100">
      <span className="block text-xs text-gray-500 font-medium mb-0.5">{label}</span>
      <span className="text-sm text-gray-800 font-medium">{value}</span>
    </div>
  )
}
