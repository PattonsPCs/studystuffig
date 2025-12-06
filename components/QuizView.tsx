'use client'

import { useState, FormEvent } from 'react'
import { Quiz, QuizQuestion } from '@/data/quizzes'

interface QuizViewProps {
  quizId: string
  quizData: Record<string, Quiz>
}

export default function QuizView({ quizId, quizData }: QuizViewProps) {
  const quiz = quizData[quizId]
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)

  if (!quiz) {
    return <div>Quiz not found</div>
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    let correct = 0
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.ans) {
        correct++
      }
    })
    setScore(correct)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="max-w-3xl mx-auto fade-in pb-20">
      <h1 className="text-3xl font-black mb-4">{quiz.title}</h1>
      <form id="q-form" onSubmit={handleSubmit}>
        {quiz.questions.map((q, i) => {
          const isCorrect = submitted && answers[i] === q.ans
          const isWrong = submitted && answers[i] !== q.ans
          return (
            <div
              key={i}
              className={`bg-white p-6 rounded-xl border mb-6 ${
                isCorrect ? 'correct-ans' : isWrong ? 'wrong-ans' : ''
              }`}
            >
              <p className="font-bold mb-4">
                {i + 1}. {q.q}
              </p>
              {q.options.map((option, j) => (
                <label
                  key={j}
                  className="flex items-center p-3 border rounded mb-2 cursor-pointer hover:bg-slate-50"
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
                    className="mr-3 text-blue-600"
                  />
                  <span>{option}</span>
                </label>
              ))}
              {submitted && (
                <div className={`mt-4 text-sm p-3 rounded ${
                  isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {isCorrect ? `Correct! ${q.exp}` : `Wrong. Ans: ${q.options[q.ans]}. ${q.exp}`}
                </div>
              )}
            </div>
          )
        })}
        {!submitted && (
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg"
          >
            Submit
          </button>
        )}
        {submitted && score !== null && (
          <div className="text-center mt-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-2xl font-bold">Score: {score}/{quiz.questions.length}</p>
          </div>
        )}
      </form>
    </div>
  )
}

