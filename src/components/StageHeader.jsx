import React from 'react'

const colorMap = {
  1: 'border-teal-300 bg-teal-50 text-teal-800',
  2: 'border-purple-300 bg-purple-50 text-purple-800',
  3: 'border-amber-300 bg-amber-50 text-amber-800',
  4: 'border-green-300 bg-green-50 text-green-800',
}

export default function StageHeader({ stage, title, subtitle }) {
  return (
    <div className={`rounded-lg border px-6 py-4 mb-8 ${colorMap[stage]}`}>
      <h2 className="text-lg font-bold">{title}</h2>
      {subtitle && <p className="text-sm mt-1 opacity-80">{subtitle}</p>}
    </div>
  )
}
