"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { angularLessons } from "../../content/angularjs/lessons";
import LessonCard from "../../components/LessonCard";
import CodeRunner from "../../components/CodeRunner";

export default function AngularIndex() {
  const [active, setActive] = useState(angularLessons[0]);
  const idx = useMemo(() => angularLessons.findIndex(l => l.slug === active.slug), [active]);
  const prev = idx > 0 ? angularLessons[idx - 1] : null;
  const next = idx < angularLessons.length - 1 ? angularLessons[idx + 1] : null;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AngularJS 1.x Track</h1>
        <p className="text-gray-600">Hands-on lessons plus a live AngularJS sandbox.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-3">
          <div className="text-sm text-gray-500">Lessons</div>
          <div className="space-y-3">
            {angularLessons.map((l) => (
              <button
                key={l.slug}
                onClick={() => setActive(l)}
                className={`w-full text-left card hover:border-indigo-300 ${active.slug === l.slug ? 'border-indigo-400' : ''}`}
              >
                <div className="font-medium">{l.title}</div>
                <div className="text-sm text-gray-600">{l.summary}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <div className="card">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: active.html }} />
          </div>
          <CodeRunner mode="angular" initialHtml={active.htmlTemplate} initialJs={active.jsTemplate} />
          <div className="flex items-center justify-between">
            <div>
              {prev ? <button className="btn btn-secondary" onClick={()=>setActive(prev)}>\u2190 {prev.title}</button> : <span />}
            </div>
            <div>
              {next ? <button className="btn btn-primary" onClick={()=>setActive(next)}>{next.title} \u2192</button> : <span />}
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        Want to revisit JavaScript first? <Link className="underline" href="/js">Head to JS track \u2192</Link>
      </div>
    </div>
  );
}
