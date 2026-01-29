import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils'

export default async function Home() {

  const projects = await getProjects();



  return (
    <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6">

      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Portfolio</p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
          <span className="bg-gradient-to-r from-green-300 via-yellow-350 to-orange-400 bg-clip-text text-transparent">
            Teddy Henderson
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">Seattle-based artist exploring color, texture, and light.</p>
        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-green-300 via-yellow-350 to-orange-400" />
      </div>

      <h2 className="mt-24 font-semibold text-gray-700 text-3xl">My Work</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            {project.image?.url && (
              <>
                <Image
                  src={project.image.url}
                  alt={project.image.alt || project.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                { /**  the hover overlay that displays the alt text */ }
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.image.alt || project.name}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
