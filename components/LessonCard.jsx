import Link from "next/link";

export default function LessonCard({ lesson, basePath }) {
  return (
    <div className="card flex flex-col gap-3">
      <div>
        <h3 className="font-semibold text-lg">{lesson.title}</h3>
        <p className="text-gray-600 text-sm">{lesson.summary}</p>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Level: {lesson.level}</span>
        <span>{lesson.time} min</span>
      </div>
      <div>
        <Link className="btn btn-primary" href={`${basePath}/${lesson.slug}`}>Open Lesson</Link>
      </div>
    </div>
  );
}
