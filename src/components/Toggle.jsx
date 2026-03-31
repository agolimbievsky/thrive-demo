import React from 'react'

export default function Toggle({ value, onChange, label }) {
  return (
    <label className="flex items-center justify-between py-3 px-4 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition-colors">
      <span className="text-sm text-gray-700 pr-4">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 shrink-0 cursor-pointer ${
          value ? 'bg-teal-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 shadow-sm ${
            value ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </label>
  )
}
