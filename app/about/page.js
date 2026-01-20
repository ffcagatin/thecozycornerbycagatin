import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
        {/* TEXT */}
        <div className="md:w-1/2">
          <h2 className="mb-4 text-3xl font-semibold text-espresso dark:text-[#f9f8f0]">
            About The Cozy Corner
          </h2>
          <p className="max-w-2xl text-zinc-700 dark:text-[#f9f8f0]">
            The Cozy Corner is a thoughtfully curated online bookstore for readers who feel deeply and read quietly.
            Each book is chosen for emotional resonance rather than trends, focusing on stories that explore love, grief, loneliness, identity, and connection in gentle, honest ways.
            The collection reflects experiences many readers recognize but rarely name — quiet longing, growing around loss, feeling out of place, and being seen by one person only. These are stories for those who find comfort in feeling understood.
            The Cozy Corner is meant to be a calm, intentional space for soft stories, heavy feelings, and gentle escapes.
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-eggshell/70">
            All Snoopy artworks are by the lovely artist{" "}
            <a
            href="https://www.instagram.com/reemillustrated"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-espresso"
            >
              @reemillustrated
              </a>
          </p>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/about.jpeg"
            alt="Artwork of Snoopy on a bed reading a book"
            width={350}
            height={350}
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}