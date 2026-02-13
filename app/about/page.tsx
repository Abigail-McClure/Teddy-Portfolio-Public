import Link from "next/link";
export const metadata = {
  title: "About – Teddy Henderson",
  description: "Learn more about Seattle-based artist Teddy Henderson.",
};

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-white">
        <Link
          href="/"
          className="fixed right-6 top-6 rounded-lg border border-[hsla(90,27%,57%,0.85)] bg-white/80 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          home
        </Link>

        <p className="text-sm uppercase tracking-[0.3em] text-white/80">about</p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[hsla(80,40%,67%,0.9)] via-[hsla(48,81%,79%,0.9)] to-[hsla(1,55%,64%,1.0)] bg-clip-text text-transparent">
          Teddy Henderson
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-white/90">
          My work takes inspiration from the natural world and then twists it around to create
          funky, organic, abstract pieces that are all my own. I explore with structure and texture, in
          pursuit of visually stimulating complex unidentifiable forms that have yet to be manifested into
          existence. I aim for my artwork to resemble some sort of life or organic matter from an alternate
          dimension, whether that be a creature, plant, rock formation, etc. Stepping into a display of my
          pieces should feel like stepping into a different world.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white/90">
          I incorporate many different mediums into my pieces; however, I am very loyal to my
          love for ceramics and always find a way back to it. I find the concept of using organic matter
          from the earth to create artwork comforting. Although ceramics is my main medium, I tend to
          incorporate small details using other materials such as glass into my pieces. When looking for
          inspiration, I like to explore outdoors to find interesting forms & textures that I can integrate into
          my work.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white/90">
          I create art for the purpose of bringing me and others joy. I find happiness in creating fun,
          funky pieces, and I aspire for viewers to feel the whimsy and magic that I intend to convey with
          my art. Moving forward, I am interested in finding ways for my work to further interact with the
          environment.
        </p>
      </div>
    </div>
  );
}
