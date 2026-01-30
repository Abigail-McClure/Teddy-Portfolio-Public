import Image from 'next/image';
import Link from "next/link";
import { getProjects } from '@/sanity/sanity-utils'

export default async function Home() {

  const projects = await getProjects();



  return (
    <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6">
    <Link
    href="/about"
    className="fixed right-6 top-6 rounded-lg border border-[hsla(90,27%,57%,0.85)] bg-white/80 px-3 py-1 text-sm font-medium
    text-gray-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white
    hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
    about
    </Link>

      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Portfolio</p>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
          <span className="bg-gradient-to-r from-[hsla(90,27%,57%,0.85)] via-[hsla(48,81%,71%,1.00)] to-[hsla(2,39%,68%,0.8)] bg-clip-text text-transparent">
            Teddy Henderson 
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">Seattle-based 3D artist exploring color, texture, and light</p>
        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[hsla(85,25%,57%,0.9)] via-[hsla(48,81%,71%,1.00)] to-[hsla(2,39%,68%,0.8)]" />
      </div>

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
