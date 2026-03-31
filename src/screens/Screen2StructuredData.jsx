import React from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

const degreeOptions = ['Associate degree', "Bachelor's degree", "Master's degree", 'Doctoral degree']
const fieldOptions = ['Special Education', 'Elementary Education', 'Secondary Education', 'Early Childhood Education', 'Curriculum & Instruction', 'Educational Psychology', 'Reading/Literacy', 'TESOL/ESL']
const subjectOptions = ['Elementary literacy', 'Special education', 'Neurodiverse learners', 'Math', 'Science', 'Social Studies', 'Foreign Language', 'Music', 'Art', 'Physical Education', 'STEM', 'Test Prep', 'Executive Functioning']
const stateOptions = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
const availabilityOptions = ['Full-time', 'Part-time', 'Contract/Temporary']
const referralOptions = ['Referral from colleague', 'LinkedIn', 'Job board', 'Google search', 'Industry conference', 'Social media', 'Other']

export default function Screen2StructuredData({ formData, setFormData, onAdvance }) {
  const { structured } = formData

  const update = (key, val) => {
    setFormData(prev => ({
      ...prev,
      structured: { ...prev.structured, [key]: val },
    }))
  }

  const toggleSubject = (subject) => {
    const current = structured.subjectAreas
    if (current.includes(subject)) {
      update('subjectAreas', current.filter(s => s !== subject))
    } else {
      update('subjectAreas', [...current, subject])
    }
  }

  return (
    <div>
      <StageHeader stage={1} title="Stage 1: Tell us about yourself" />

      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Degree level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Highest degree level</label>
            <select
              value={structured.degreeLevel}
              onChange={e => update('degreeLevel', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            >
              {degreeOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>

          {/* Field of study */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Field of study</label>
            <select
              value={structured.fieldOfStudy}
              onChange={e => update('fieldOfStudy', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            >
              {fieldOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>

          {/* Years of experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Years of experience</label>
            <input
              type="number"
              value={structured.yearsExperience}
              onChange={e => update('yearsExperience', parseInt(e.target.value) || 0)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              min={0}
              max={50}
            />
          </div>

          {/* Current state */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Current state</label>
            <select
              value={structured.currentState}
              onChange={e => update('currentState', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            >
              {stateOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>

          {/* ZIP code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">ZIP code</label>
            <input
              type="text"
              value={structured.zipCode}
              onChange={e => update('zipCode', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              maxLength={5}
            />
          </div>

          {/* How did you hear */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">How did you hear about Thrive?</label>
            <select
              value={structured.referralSource}
              onChange={e => update('referralSource', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            >
              {referralOptions.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
          <div className="flex gap-3 flex-wrap">
            {availabilityOptions.map(opt => (
              <label
                key={opt}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-colors text-sm ${
                  structured.availability === opt
                    ? 'border-teal-500 bg-teal-50 text-teal-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="availability"
                  value={opt}
                  checked={structured.availability === opt}
                  onChange={() => update('availability', opt)}
                  className="sr-only"
                />
                <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  structured.availability === opt ? 'border-teal-500' : 'border-gray-300'
                }`}>
                  {structured.availability === opt && <span className="w-2 h-2 rounded-full bg-teal-500" />}
                </span>
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Subject areas */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Subject areas</label>
          <div className="flex flex-wrap gap-2">
            {subjectOptions.map(subject => (
              <button
                key={subject}
                type="button"
                onClick={() => toggleSubject(subject)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  structured.subjectAreas.includes(subject)
                    ? 'bg-teal-100 text-teal-700 ring-1 ring-teal-300'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {structured.subjectAreas.includes(subject) && '✓ '}{subject}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <PrimaryButton stage={1} onClick={onAdvance}>
            Submit Application
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
