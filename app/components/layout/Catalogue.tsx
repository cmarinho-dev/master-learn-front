import { Course as Courses } from "@/app/models/course";
import Course from "../ui/Course";

async function getCourses() {
  const res = await fetch("https://cmarinho-master-learn.vercel.app/courses", {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

async function Catalogue() {
  const courses: Courses[] = await getCourses();
  return (
    <div>
      <div className="flex flex-wrap content-center justify-center gap-5">
        {courses.map((course) => (
          <Course
            key={course.id}
            name={course.name}
            description={course.description}
            author={course.author}
            coverUrl={course.cover_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
