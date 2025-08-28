import { projectData } from "@/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) return notFound();

  return (
    <main className="min-h-screen px-4 py-12 max-w-4xl mx-auto text-white">
      <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
        <Image
          src={project.src}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#7b92b4] to-[#6f87ae] bg-clip-text text-transparent">
        {project.title}
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Technologies utilisées</h2>
        <div className="flex gap-4 flex-wrap">
          {project.technologies.map((tech, i) => (
            <Image
              key={i}
              src={tech}
              alt="tech"
              width={40}
              height={40}
              className="rounded"
            />
          ))}
        </div>
      </div>

      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-medium py-2 px-6 rounded hover:bg-gray-200 transition"
        >
          Visit website
        </Link>
      )}
    </main>
  );
}
