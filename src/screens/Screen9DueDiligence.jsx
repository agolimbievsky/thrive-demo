import React, { useState, useEffect } from 'react'
import StageHeader from '../components/StageHeader'
import PrimaryButton from '../components/PrimaryButton'

const checklistItems = [
  { key: 'background', label: 'Background check', detail: 'Initiated and cleared' },
  { key: 'references', label: 'Reference checks', detail: 'Completed — two references contacted via automated request' },
  { key: 'nda', label: 'NDA', detail: 'Signed by candidate' },
  { key: 'compensation', label: 'Compensation and availability', detail: 'Confirmed in writing' },
  { key: 'referral', label: 'Referral source', detail: 'Confirmed — referred by Jordan Mills' },
]

const alignmentPoints = [
  {
    icon: '🎓',
    title: 'Specialized credentials match the student profile exactly',
    body: 'Sarah holds a Master\'s in Special Education from the University of Michigan and completed a fellowship in Orton-Gillingham methodology — the evidence-based framework most widely used for students with dyslexia. Ethan\'s diagnosis is not a learning curve for Sarah; it is her primary area of expertise.',
  },
  {
    icon: '🧠',
    title: 'Her work sample showed she was thinking about Ethan specifically',
    body: 'Most candidates describe general approaches. Sarah\'s work sample separated decoding difficulty from mathematical reasoning — a diagnostic distinction that signals she has already begun thinking about how Ethan\'s dyslexia may affect performance across subjects, not just literacy.',
  },
  {
    icon: '🤝',
    title: 'Her philosophy matches what the Hartley family described they need',
    body: 'In her interview, Sarah said: "The academic plan follows the relationship, not the other way around." This mirrors the family\'s own language about wanting someone who will take time to understand Ethan before expecting results.',
  },
  {
    icon: '✈️',
    title: 'Logistics are fully compatible',
    body: 'Sarah is available full-time from August 1st, open to domestic travel, and her salary expectation ($90K–$115K) is within the Hartley offer of $105K. There are no logistical obstacles to placement.',
  },
  {
    icon: '⭐',
    title: 'Passed all four Thrive profile dimensions',
    body: 'Relational and warm, dynamic, polished and professional, reliable and on-it. Her video introduction and live interview were consistent with her written materials — no gap between presentation and substance.',
  },
]

export default function Screen9DueDiligence({ onAdvance }) {
  const [checked, setChecked] = useState({})

  useEffect(() => {
    checklistItems.forEach((item, i) => {
      setTimeout(() => {
        setChecked(prev => ({ ...prev, [item.key]: true }))
      }, 400 + i * 350)
    })
  }, [])

  return (
    <div>
      <StageHeader stage={4} title="Stage 4: Ready to Present — Sarah Chen" />

      {/* Due diligence checklist */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Due Diligence Checklist</h3>
        <div className="space-y-3">
          {checklistItems.map(item => (
            <div
              key={item.key}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300 ${
                checked[item.key] ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <button
                onClick={() => setChecked(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-300 cursor-pointer ${
                  checked[item.key] ? 'bg-green-500 border-green-500' : 'border-gray-300'
                }`}
              >
                <svg
                  className={`w-3.5 h-3.5 text-white transition-all duration-300 ${
                    checked[item.key] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <div>
                <span className={`text-sm font-medium transition-colors duration-300 ${checked[item.key] ? 'text-green-800' : 'text-gray-700'}`}>
                  {item.label}
                </span>
                <p className={`text-xs mt-0.5 transition-colors duration-300 ${checked[item.key] ? 'text-green-600' : 'text-gray-500'}`}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Presentation packet */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">

        {/* Packet header */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-green-200 text-xs font-semibold uppercase tracking-widest mb-1">Thrive Education Partners · Candidate Presentation</p>
              <h2 className="text-2xl font-bold text-white mb-0.5">Sarah Chen</h2>
              <p className="text-green-100 text-sm">Proposed placement · Hartley Family · Miami, FL · August 2026</p>
            </div>
            <div className="text-right">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                SC
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Special Education', 'Dyslexia', 'ADHD', 'Orton-Gillingham', '8 Years Experience', 'Full-time', 'Travel-ready'].map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white">{tag}</span>
            ))}
          </div>
        </div>

        <div className="px-8 py-6 space-y-7">

          {/* At a glance */}
          <div>
            <SectionHeading>At a Glance</SectionHeading>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GlanceCard label="Degree" value="Master's, Special Education" sub="University of Michigan" />
              <GlanceCard label="Experience" value="8 years" sub="K–6 literacy, neurodiverse learners" />
              <GlanceCard label="Salary" value="$90K – $115K" sub="Within Hartley offer of $105K" />
              <GlanceCard label="Start date" value="August 1st" sub="Confirmed in writing" />
            </div>
          </div>

          {/* Why this candidate */}
          <div>
            <SectionHeading>Why Sarah Chen for the Hartley Family</SectionHeading>
            <div className="space-y-4">
              {alignmentPoints.map((pt, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-2xl shrink-0">{pt.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{pt.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thrive assessment */}
          <div>
            <SectionHeading>Thrive Assessment Summary</SectionHeading>
            <div className="grid grid-cols-2 gap-3">
              {[
                { trait: 'Relational and warm', note: 'Built rapport quickly in interview. Speaks about students as individuals, not profiles.' },
                { trait: 'Dynamic', note: 'Varied tone and energy across the interview. Showed genuine enthusiasm without performing it.' },
                { trait: 'Polished and professional', note: 'Video submission and live interview were consistent. No gap between presentation and substance.' },
                { trait: 'Reliable and on-it', note: 'Work sample submitted ahead of deadline. Followed all prompts directly and precisely.' },
              ].map(item => (
                <div key={item.trait} className="p-4 rounded-lg border border-green-100 bg-green-50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-green-900">{item.trait}</span>
                  </div>
                  <p className="text-xs text-green-700 leading-relaxed pl-6">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work sample score + interview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Work Sample Score</p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                Strong
              </span>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">Highly specific to the student profile. Referenced Orton-Gillingham by name and correctly separated decoding from mathematical reasoning — a diagnostic distinction that signals genuine expertise.</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Interview Assessment</p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                Strong — Advance
              </span>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">Candidate was composed, direct, and clearly thinking about this student specifically. One follow-up raised and resolved in debrief regarding travel-week routine adaptation.</p>
            </div>
          </div>

          {/* Footer note */}
          <div className="border-t border-gray-100 pt-5">
            <p className="text-xs text-gray-400 leading-relaxed">
              This candidate summary was prepared by Thrive Education Partners following completion of a four-stage screening process including structured application review, written screeners, video assessment, work sample evaluation, and live interview. Thrive stands behind this recommendation. Background check cleared. References completed. NDA signed.
            </p>
          </div>

        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-3 mb-8">
        <p className="text-sm text-green-800 font-medium">
          Sarah Chen is ready to present to the Hartley family.
        </p>
      </div>

      <div className="flex justify-end">
        <PrimaryButton stage={4} onClick={onAdvance}>
          Present to Family
        </PrimaryButton>
      </div>
    </div>
  )
}

function SectionHeading({ children }) {
  return (
    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">
      {children}
    </h3>
  )
}

function GlanceCard({ label, value, sub }) {
  return (
    <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-sm font-bold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
    </div>
  )
}
