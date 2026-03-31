import React from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

export default function Screen4Invitation({ onAdvance }) {
  return (
    <div>
      <StageHeader stage={2} title="Stage 2: Invitation" subtitle="Sarah has received the following email" />

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden max-w-2xl mx-auto">
        {/* Email header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="space-y-1.5">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-14">From</span>
              <span className="text-sm text-gray-800">Thrive Education Partners &lt;applications@thrive-ed.com&gt;</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-14">To</span>
              <span className="text-sm text-gray-800">Sarah Chen &lt;sarah.chen@email.com&gt;</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-14">Subject</span>
              <span className="text-sm text-gray-900 font-semibold">You've been invited to continue your Thrive application</span>
            </div>
          </div>
        </div>

        {/* Email body */}
        <div className="px-6 py-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">Dear Sarah,</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Thank you for your interest in Thrive. We reviewed your application and would like to learn more about you.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Please take 15 to 20 minutes to answer a few questions and record a short video introduction. This gives our team a fuller picture of who you are before we reach out to discuss next steps.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            We look forward to learning more about you.
          </p>
          <p className="text-sm text-gray-500">
            — The Thrive Team
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <PrimaryButton stage={2} onClick={onAdvance}>
          Begin Stage 2
        </PrimaryButton>
      </div>
    </div>
  )
}
