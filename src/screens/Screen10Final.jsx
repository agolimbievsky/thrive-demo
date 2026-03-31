import React from 'react'

const tags = [
  'Special Education', 'Dyslexia', 'ADHD', 'Elementary Literacy',
  'Orton-Gillingham', 'Domestic Travel', 'Full-time', 'Chicago',
]

export default function Screen10Final({ onReset, onViewDatabase }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {/* Success icon */}
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-8">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Candidate presented to the Hartley family.
      </h2>
      <p className="text-base text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
        Sarah Chen's profile, resume, and work sample have been shared. The family will conduct their own interviews and make the final hiring decision.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 max-w-md">
        {tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 ring-1 ring-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-xs text-gray-400 italic mb-10 max-w-md">
        Sarah's record has been saved to the candidate database and tagged for future matching regardless of outcome.
      </p>

      {/* Secondary actions */}
      <div className="flex gap-3">
        <button
          onClick={onReset}
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Run another candidate
        </button>
        <button
          onClick={onViewDatabase}
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          View candidate database
        </button>
      </div>
    </div>
  )
}
