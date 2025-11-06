"use client";

import Link from "next/link";
import { useMemo } from "react";
import { jsLessons } from "../../../content/js/lessons";
import CodeRunner from "../../../components/CodeRunner";
import Quiz from "../../../components/Quiz";

export default function JSLesson({ params }) {
  const lesson = useMemo(() => jsLessons.find(l => l.slug === params.slug), [params.slug]);
  if (!lesson) return <div>Lesson not found.</div>;
  const idx = jsLessons.findIndex(l => l.slug === lesson.slug);
  const prev = idx > 0 ? jsLessons[idx - 1] : null;
  const next = idx < jsLessons.length - 1 ? jsLessons[idx + 1] : null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
        <Link className="text-sm underline" href="/js">All lessons</Link>
      </div>
      <div className="card">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: lesson.html }} />
      </div>
      <CodeRunner mode="js" initialCode={lesson.code} />
      {lesson.quiz && lesson.quiz.length > 0 && <Quiz items={lesson.quiz} />}
      <div className="flex items-center justify-between">
        <div>
          {prev ? <Link className="btn btn-secondary" href={`/js/${prev.slug}`}>? {prev.title}</Link> : <span />}
        </div>
        <div>
          {next ? <Link className="btn btn-primary" href={`/js/${next.slug}`}>{next.title} ?</Link> : <span />}
        </div>
      </div>
    </div>
  );
}
