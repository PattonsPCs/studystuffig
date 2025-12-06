'use client'

import { useState, useEffect, useCallback, FormEvent } from 'react'
import { Exam } from '@/data/exams'

interface ExamViewProps {
  examId: string
  exams: Exam[]
  setGlobalScore: (score: number) => void
  setActiveId: (id: string) => void
}

export default function ExamView({ examId, exams, setGlobalScore, setActiveId }: ExamViewProps) {
  const exam = exams.find(e => e.id === examId)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)

  const handleSubmit = useCallback(() => {
    if (!exam || submitted) return
    
    setSubmitted(true)
    let correct = 0
    exam.questions.forEach((q, i) => {
      if (answers[i] === q.ans) {
        correct++
      }
    })
    const percentage = Math.round((correct / exam.questions.length) * 100)
    setScore(correct)
    setGlobalScore(percentage)
  }, [exam, submitted, answers, setGlobalScore])

  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0 && !submitted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === null || prev <= 1) {
            handleSubmit()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [timeLeft, submitted, handleSubmit])

  const startExam = () => {
    if (exam) {
      setTimeLeft(exam.time * 60)
      setSubmitted(false)
      setAnswers({})
      setScore(null)
    }
  }

  if (!exam) {
    return <div>Exam not found</div>
  }

  if (timeLeft === null) {
    return (
      <div className="max-w-2xl mx-auto pt-12 text-center fade-in">
        <h1 className="text-4xl font-black mb-4">{exam.title}</h1>
        <p className="mb-8">{exam.desc}</p>
        <button
          onClick={startExam}
          className="bg-red-600 text-white font-bold py-4 px-12 rounded-full shadow-xl"
        >
          Start {exam.time} Min Timer
        </button>
      </div>
    )
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isCritical = timeLeft < 300

  return (
    <div className="max-w-4xl mx-auto pb-20 relative fade-in">
      <div className="sticky top-0 bg-white/95 p-4 border-b flex justify-between items-center z-10">
        <span className="font-bold">{exam.title}</span>
        <span className={`font-mono font-bold bg-slate-100 p-2 rounded ${isCritical ? 'timer-critical' : ''}`}>
          {minutes}:{seconds < 10 ? '0' : ''}{seconds}
        </span>
      </div>
      <form id="e-form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
        {exam.questions.map((q, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border mb-6">
            <p className="font-bold mb-4">
              {i + 1}. {q.q}
            </p>
            {q.options.map((option, j) => (
              <label
                key={j}
                className="flex items-center p-3 border rounded mb-2 hover:bg-slate-50 cursor-pointer"
              >
                <input
                  type="radio"
                  name={`q${i}`}
                  value={j}
                  checked={answers[i] === j}
                  onChange={() => {
                    if (!submitted) {
                      setAnswers({ ...answers, [i]: j })
                    }
                  }}
                  disabled={submitted}
                  className="mr-3"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        ))}
        {!submitted && (
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-5 rounded-xl"
          >
            Submit
          </button>
        )}
      </form>
      {submitted && score !== null && (
        <div className="max-w-3xl mx-auto pt-10 text-center fade-in">
          <h1 className="text-6xl font-black mb-2">
            {Math.round((score / exam.questions.length) * 100)}%
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Score: {score}/{exam.questions.length}
          </p>
          <div className="text-left space-y-2">
            {exam.questions.map((q, i) => {
              const isCorrect = answers[i] === q.ans
              return (
                <div
                  key={i}
                  className={`p-4 border rounded mb-2 ${
                    isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}
                >
                  <p className={`font-bold text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    Q{i + 1}: {isCorrect ? 'Correct' : 'Incorrect'}
                  </p>
                  <p className="text-sm">{q.q}</p>
                  <p className="text-xs text-slate-500">Ans: {q.options[q.ans]}</p>
                </div>
              )
            })}
          </div>
          <button
            onClick={() => {
              setTimeLeft(null)
              setSubmitted(false)
              setAnswers({})
              setScore(null)
            }}
            className="mt-8 text-blue-600 font-bold hover:underline"
          >
            Retake
          </button>
        </div>
      )}
    </div>
  )
}

