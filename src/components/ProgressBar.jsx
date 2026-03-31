import React from 'react'

const STAGES = [
  { num: 1, label: 'Application', color: 'teal' },
  { num: 2, label: 'Deep Screening', color: 'purple' },
  { num: 3, label: 'Family Match', color: 'amber' },
  { num: 4, label: 'Due Diligence', color: 'green' },
]

const colorMap = {
  teal: { active: 'bg-teal-500', text: 'text-teal-700', light: 'bg-teal-100', line: 'bg-teal-500' },
  purple: { active: 'bg-purple-500', text: 'text-purple-700', light: 'bg-purple-100', line: 'bg-purple-500' },
  amber: { active: 'bg-amber-500', text: 'text-amber-700', light: 'bg-amber-100', line: 'bg-amber-500' },
  green: { active: 'bg-green-500', text: 'text-green-700', light: 'bg-green-100', line: 'bg-green-500' },
}

export default function ProgressBar({ currentStage, currentScreen }) {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-4">
      <div className="flex items-center gap-0">
        {STAGES.map((stage, i) => {
          const isActive = stage.num === currentStage
          const isCompleted = stage.num < currentStage
          const colors = colorMap[stage.color]

          return (
            <React.Fragment key={stage.num}>
              <div className="flex flex-col items-center flex-1">
                <div className="flex items-center w-full">
                  {i > 0 && (
                    <div
                      className={`h-0.5 flex-1 transition-colors duration-300 ${
                        isCompleted || isActive ? colors.line : 'bg-gray-200'
                      }`}
                    />
                  )}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 shrink-0 ${
                      isActive
                        ? `${colors.active} text-white shadow-md`
                        : isCompleted
                        ? `${colors.active} text-white`
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      stage.num
                    )}
                  </div>
                  {i < STAGES.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 transition-colors duration-300 ${
                        isCompleted ? colorMap[STAGES[i + 1].color].line : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`text-xs mt-1.5 font-medium transition-colors duration-300 ${
                    isActive ? colors.text : isCompleted ? 'text-gray-600' : 'text-gray-400'
                  }`}
                >
                  {stage.label}
                </span>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
