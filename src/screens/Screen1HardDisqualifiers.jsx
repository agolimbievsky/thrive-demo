import React from 'react'
import StageHeader from '../components/StageHeader'
import Toggle from '../components/Toggle'
import PrimaryButton from '../components/PrimaryButton'

const questions = [
  { key: 'experience', label: 'Do you have direct teaching or tutoring experience?' },
  { key: 'degree', label: 'Is your degree in an education-related field?' },
  { key: 'authorized', label: 'Are you authorized to work in the United States?' },
  { key: 'location', label: 'Are you currently located in or willing to relocate to Texas, California, Florida, Illinois, or New York?' },
]

const subjectTags = ['Elementary Literacy', 'Special Education', 'Neurodiverse Learners', 'Orton-Gillingham']

export default function Screen1HardDisqualifiers({ formData, setFormData, onAdvance }) {
  const { disqualifiers } = formData

  const update = (key, val) => {
    setFormData(prev => ({
      ...prev,
      disqualifiers: { ...prev.disqualifiers, [key]: val },
    }))
  }

  return (
    <div>
      <StageHeader stage={1} title="Stage 1: Initial Application" />

      {/* Candidate info card — pulled from resume */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-5 overflow-hidden">
        <div className="bg-teal-50 border-b border-teal-100 px-6 py-3 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">Pulled from resume</span>
        </div>
        <div className="px-6 py-5">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xl shrink-0">
              SC
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Sarah Chen</h3>
              <p className="text-sm text-gray-500">sarah.chen@email.com · (312) 555-0174 · Chicago, IL 60614</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <ResumeField label="Degree" value="Master's, Special Education" />
            <ResumeField label="Institution" value="University of Michigan" />
            <ResumeField label="Experience" value="8 years" />
            <ResumeField label="Availability" value="Full-time" />
          </div>
          <div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Subject areas</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {subjectTags.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 ring-1 ring-teal-200">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Qualifier questions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Thank you for your interest in Thrive Education Partners. Before we get started, please confirm the following.
        </p>

        <div className="space-y-3 mb-5">
          {questions.map(q => (
            <Toggle
              key={q.key}
              label={q.label}
              value={disqualifiers[q.key]}
              onChange={(val) => update(q.key, val)}
            />
          ))}
        </div>

        <p className="text-xs text-gray-400 italic mb-6">
          If any answer is No, your application cannot proceed at this time.
        </p>

        <div className="flex justify-end">
          <PrimaryButton stage={1} onClick={onAdvance}>
            Continue
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

function ResumeField({ label, value }) {
  return (
    <div>
      <span className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">{label}</span>
      <span className="text-sm font-semibold text-gray-800">{value}</span>
    </div>
  )
}
