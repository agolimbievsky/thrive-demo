import React from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

const disqualifierLabels = {
  experience: 'Direct teaching or tutoring experience',
  degree: 'Education-related degree',
  authorized: 'Authorized to work in the US',
  location: 'Located in or willing to relocate to qualifying state',
}

export default function Screen3RecruiterStage1({ formData, onAdvance }) {
  const { disqualifiers, structured } = formData

  return (
    <div>
      <StageHeader stage={1} title="ATS: Stage 1 Review" />

      {/* Candidate card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg">
              SC
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Sarah Chen</h3>
              <p className="text-sm text-gray-500">Applied March 28, 2026</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 ring-1 ring-green-200">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Passed Stage 1
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hard disqualifiers */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Hard Disqualifiers</h4>
            <div className="space-y-2.5">
              {Object.entries(disqualifiers).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${val ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {val ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm text-gray-700">{disqualifierLabels[key]}</span>
                  <span className={`text-xs font-medium ml-auto ${val ? 'text-green-600' : 'text-red-600'}`}>
                    {val ? 'Yes' : 'No'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Structured data */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Candidate Profile</h4>
            <div className="space-y-2">
              <DataRow label="Degree" value={`${structured.degreeLevel}, ${structured.fieldOfStudy}`} />
              <DataRow label="Experience" value={`${structured.yearsExperience} years`} />
              <DataRow label="Location" value={`${structured.currentState} (${structured.zipCode})`} />
              <DataRow label="Availability" value={structured.availability} />
              <DataRow label="Referral" value={structured.referralSource} />
              <div className="pt-1">
                <span className="text-xs text-gray-500 font-medium">Subject areas</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {structured.subjectAreas.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded-full text-xs bg-teal-50 text-teal-700 ring-1 ring-teal-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-3 mb-8">
        <p className="text-sm text-green-800">
          Sarah has been automatically advanced to Stage 2. An invitation email has been sent.
        </p>
      </div>

      <div className="flex justify-end">
        <PrimaryButton stage={1} onClick={onAdvance}>
          View Stage 2 Invitation
        </PrimaryButton>
      </div>
    </div>
  )
}

function DataRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between text-sm">
      <span className="text-gray-500 text-xs font-medium">{label}</span>
      <span className="text-gray-800 font-medium text-right">{value}</span>
    </div>
  )
}
