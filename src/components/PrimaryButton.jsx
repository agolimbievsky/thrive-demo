import React from 'react'

const stageColors = {
  1: 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500',
  2: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
  3: 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500',
  4: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
}

export default function PrimaryButton({ children, onClick, stage = 1, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-lg text-white font-semibold text-sm shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${stageColors[stage] || stageColors[1]} ${className}`}
    >
      {children}
    </button>
  )
}
