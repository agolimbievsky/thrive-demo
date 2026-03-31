import React from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

const screenerQuestions = [
  { key: 'q1', label: 'What draws you to working in a private, 1:1 setting?' },
  { key: 'q2', label: 'Tell me about your experience lesson planning, creating curriculum, and supplemental materials. What was your role in that process?' },
  { key: 'q3', label: 'Describe your educational background and what prepared you most for working with students in a private setting.' },
]

export default function Screen5Stage2Form({ formData, setFormData, onAdvance }) {
  const { screeners, logistics } = formData

  const updateScreener = (key, val) => {
    setFormData(prev => ({
      ...prev,
      screeners: { ...prev.screeners, [key]: val },
    }))
  }

  const updateLogistics = (key, val) => {
    setFormData(prev => ({
      ...prev,
      logistics: { ...prev.logistics, [key]: val },
    }))
  }

  return (
    <div>
      <StageHeader stage={2} title="Stage 2: Tell us more about you" />

      {/* Written screeners */}
      <div className="space-y-6 mb-8">
        {screenerQuestions.map((q, i) => (
          <div key={q.key} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              <span className="text-purple-600 mr-1">Q{i + 1}.</span> {q.label}
            </label>
            <textarea
              value={screeners[q.key]}
              onChange={e => updateScreener(q.key, e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 leading-relaxed focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-y"
            />
          </div>
        ))}
      </div>

      {/* Logistics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-5">Logistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Salary minimum</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
              <input
                type="number"
                value={logistics.salaryMin}
                onChange={e => updateLogistics('salaryMin', parseInt(e.target.value) || 0)}
                className="w-full rounded-lg border border-gray-300 pl-7 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Salary ideal</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
              <input
                type="number"
                value={logistics.salaryIdeal}
                onChange={e => updateLogistics('salaryIdeal', parseInt(e.target.value) || 0)}
                className="w-full rounded-lg border border-gray-300 pl-7 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Availability</label>
            <input
              type="text"
              value={logistics.availability}
              onChange={e => updateLogistics('availability', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Location flexibility</label>
            <input
              type="text"
              value={logistics.locationFlex}
              onChange={e => updateLogistics('locationFlex', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Target start date</label>
            <input
              type="text"
              value={logistics.startDate}
              onChange={e => updateLogistics('startDate', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Video prompt */}
      <div className="bg-white rounded-xl border border-purple-200 p-6 shadow-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-1.5">Video Introduction</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Please record and upload a 60 to 90 second video introducing yourself, describing your teaching style, and explaining what draws you to private 1:1 education.
            </p>
            <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 rounded-lg">
              <button className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 cursor-pointer hover:bg-purple-300 transition-colors">
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div>
                <p className="text-sm font-medium text-purple-800">sarah_chen_intro.mp4</p>
                <p className="text-xs text-purple-500">Video submitted</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <PrimaryButton stage={2} onClick={onAdvance}>
          Submit Stage 2
        </PrimaryButton>
      </div>
    </div>
  )
}
