import Link from "next/link";
import { jsLessons } from "../../content/js/lessons";
import LessonCard from "../../components/LessonCard";

export const metadata = { title: "JavaScript ES6 Lessons" };

export default function JSIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">JavaScript ES6 Track</h1>
        <p className="text-gray-600">Start here to build strong fundamentals with modern JavaScript.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jsLessons.map((l) => (
          <LessonCard key={l.slug} basePath="/js" lesson={l} />
        ))}
      </div>
      <div className="text-sm text-gray-500">
        Prefer AngularJS already? <Link className="underline" href="/angularjs">Jump to AngularJS ?</Link>
      </div>
    </div>
  );
}
