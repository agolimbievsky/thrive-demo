import React from 'react'

export default function ViewBadge({ view }) {
  const isCandidate = view === 'candidate'
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
        isCandidate
          ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200'
          : 'bg-orange-50 text-orange-700 ring-1 ring-orange-200'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${isCandidate ? 'bg-blue-500' : 'bg-orange-500'}`}
      />
      {isCandidate ? 'Candidate View' : 'Recruiter View'}
    </span>
  )
}
