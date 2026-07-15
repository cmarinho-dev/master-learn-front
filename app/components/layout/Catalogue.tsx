import { Course as Courses } from "@/app/models/course";
import Course from "../ui/Course";

async function getCourses(): Promise<Courses[] | null> {
  try {
    const res = await fetch("https://cmarinho-master-learn.vercel.app/courses", {
      next: { revalidate: 300 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function Catalogue() {
  const courses = await getCourses();

  return (
    <section aria-labelledby="catalogue-title">
      <h2 id="catalogue-title" className="text-xl font-semibold mb-4">
        Explore o catálogo
      </h2>
      {courses && courses.length > 0 ? (
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
      ) : (
        <p className="text-text-secondary py-8 text-center">
          Não foi possível carregar os cursos no momento. Tente novamente mais
          tarde.
        </p>
      )}
    </section>
  );
}

export default Catalogue;
