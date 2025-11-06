"use client";

import { useState } from "react";

export default function Quiz({ items = [] }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = items.reduce((acc, it, idx) => acc + (answers[idx] === it.answer ? 1 : 0), 0);
  const allAnswered = items.length > 0 && Object.keys(answers).length === items.length;

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Quick Quiz</h4>
        {submitted && (
          <div className="text-sm">Score: <span className="font-semibold">{score}/{items.length}</span></div>
        )}
      </div>
      <ol className="space-y-4 list-decimal pl-5">
        {items.map((it, idx) => (
          <li key={idx} className="space-y-2">
            <div className="font-medium">{it.q}</div>
            <div className="grid sm:grid-cols-3 gap-2">
              {it.choices.map((c, i) => {
                const chosen = answers[idx] === i;
                const isCorrect = submitted && i === it.answer;
                const isWrong = submitted && chosen && i !== it.answer;
                return (
                  <button
                    key={i}
                    className={`border rounded px-3 py-2 text-left text-sm transition-colors ${
                      chosen ? 'border-indigo-500' : 'border-gray-200'
                    } ${isCorrect ? 'bg-green-100 border-green-500' : ''} ${isWrong ? 'bg-red-100 border-red-500' : ''}`}
                    onClick={() => !submitted && setAnswers({ ...answers, [idx]: i })}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>
      <div className="flex gap-2">
        <button className="btn btn-primary" disabled={!allAnswered || submitted} onClick={() => setSubmitted(true)}>Check Answers</button>
        {submitted && <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setAnswers({}); }}>Reset</button>}
      </div>
    </div>
  );
}
