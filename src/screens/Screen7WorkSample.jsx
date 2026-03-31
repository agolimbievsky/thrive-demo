import React, { useState } from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

const timeSlots = [
  { id: 'a', day: 'Tuesday, July 8', time: '10:00 – 11:00 AM ET' },
  { id: 'b', day: 'Wednesday, July 9', time: '2:00 – 3:00 PM ET' },
  { id: 'c', day: 'Thursday, July 10', time: '11:00 AM – 12:00 PM ET' },
  { id: 'd', day: 'Friday, July 11', time: '9:00 – 10:00 AM ET' },
]

export default function Screen7WorkSample({ formData, setFormData, onAdvance }) {
  const [selectedSlot, setSelectedSlot] = useState('b')

  return (
    <div>
      <StageHeader stage={3} title="Stage 3: Interview Invitation" />

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden max-w-2xl mx-auto">
        {/* Email header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="space-y-1.5">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-14">From</span>
              <span className="text-sm text-gray-800">Thrive Education Partners &lt;placements@thrive-ed.com&gt;</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-14">To</span>
              <span className="text-sm text-gray-800">Sarah Chen &lt;sarah.chen@email.com&gt;</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-14">Subject</span>
              <span className="text-sm text-gray-900 font-semibold">Interview invitation — next steps with Thrive</span>
            </div>
          </div>
        </div>

        {/* Email body */}
        <div className="px-6 py-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">Dear Sarah,</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            We have reviewed your Stage 2 submission and are pleased to invite you to a final interview with our placement team. This conversation will be approximately 45 to 60 minutes. We will discuss your background, your approach to working with neurodiverse learners, and your thinking on the work sample below.
          </p>

          {/* Time slots */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-3">Please select a time that works for you</p>
            <div className="space-y-2">
              {timeSlots.map(slot => (
                <label
                  key={slot.id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedSlot === slot.id
                      ? 'border-amber-400 bg-amber-100'
                      : 'border-gray-200 bg-white hover:border-amber-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="slot"
                    value={slot.id}
                    checked={selectedSlot === slot.id}
                    onChange={() => setSelectedSlot(slot.id)}
                    className="sr-only"
                  />
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    selectedSlot === slot.id ? 'border-amber-500' : 'border-gray-300'
                  }`}>
                    {selectedSlot === slot.id && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{slot.day}</span>
                  <span className="text-sm text-gray-500 ml-auto">{slot.time}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Assignment section */}
          <div className="border-t border-gray-100 pt-5 mb-5">
            <p className="text-sm font-semibold text-gray-900 mb-2">Before your interview: Work sample assignment</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              To help us understand your instructional approach, please complete the assignment below and submit it at least 24 hours before your scheduled interview. This is not a test — it is an opportunity for you to show us how you think.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Assignment</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                You are being considered for a placement with a family in Miami, Florida. Their son, Ethan, is 9 years old and has been diagnosed with dyslexia and ADHD. He is bright and curious but has struggled in traditional school settings. The family is looking for a full-time private teacher to design and lead a fully individualized academic program. The family travels domestically approximately 6 weeks per year.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Using this profile, design a two-week introductory learning plan. Include: your approach to assessment in week one, your proposed daily structure, and two sample lesson activities tailored to his learning profile.
              </p>
            </div>
          </div>

          {/* Work sample text area */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your submission</label>
            <textarea
              value={formData.workSample}
              onChange={e => setFormData(prev => ({ ...prev, workSample: e.target.value }))}
              rows={10}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 leading-relaxed focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-y"
              placeholder="Type your response here..."
            />
          </div>

          <p className="text-sm text-gray-500">
            — The Thrive Placement Team
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <PrimaryButton stage={3} onClick={onAdvance}>
          Confirm Interview &amp; Submit Work Sample
        </PrimaryButton>
      </div>
    </div>
  )
}
