import Link from "next/link";
import LessonCard from "../components/LessonCard";
import { jsLessons } from "../content/js/lessons";
import { angularLessons } from "../content/angularjs/lessons";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">AngularJS Fun Lab</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn modern JavaScript (ES6) and AngularJS 1.x from scratch with interactive labs,
          playful examples, and quick quizzes. No fluff ? just fun, practical learning.
        </p>
        <div className="flex justify-center gap-3">
          <Link className="btn btn-primary" href="/js">Start with JavaScript</Link>
          <Link className="btn btn-secondary" href="/angularjs">Jump to AngularJS</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">JavaScript ES6 ? Featured Lessons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jsLessons.slice(0,3).map((l) => (
            <LessonCard key={l.slug} basePath="/js" lesson={l} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">AngularJS ? Featured Lessons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {angularLessons.slice(0,3).map((l) => (
            <LessonCard key={l.slug} basePath="/angularjs" lesson={l} />
          ))}
        </div>
      </section>
    </div>
  );
}
