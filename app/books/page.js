import Image from "next/image";

const books = [
  {
    title: "Alone With You in the Ether",
    author: "Olivie Blake",
    cover: "/images/alonewithyou.png",
    tags: ["Mental Health", "Emotional Dependency"],
  },
  {
    title: "Blue Sisters",
    author: "Coco Mellors",
    cover: "/images/bluesisters.png",
    tags: ["Family Dynamics", "Grief & Loss"],
  },
  {
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    cover: "/images/crying.png",
    tags: ["Mother Loss", "Cultural Identity"],
  },
  {
    title: "Days at the Morisaki Bookshop",
    author: "Satoshi Yagisawa",
    cover: "/images/morisaki.png",
    tags: ["New Beginnings", "Healing"],
  },
  {
    title: "Heart the Lover",
    author: "Lily King",
    cover: "/images/heartlover.png",
    tags: ["Longing", "Quiet Devotion"],
  },
  {
    title: "If We Were Villains",
    author: "M. L. Rio",
    cover: "/images/villains.png",
    tags: ["Dark Academia", "Obsession"],
  },
  {
    title: "Madonna in a Fur Coat",
    author: "Sabahattin Ali",
    cover: "/images/madonna.png",
    tags: ["Alienation", "Yearning"],
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    cover: "/images/normalpeople.png",
    tags: ["Miscommunication", "Will-They-Won't-They"],
  },
  {
    title: "Severance",
    author: "Ling Ma",
    cover: "/images/severance.png",
    tags: ["Post-Apocalyptic", "Immigrant Experience"],
  },
  {
    title: "Sunbathing",
    author: "Isobel Beech",
    cover: "/images/sunbathing.png",
    tags: ["Private Mourning", "Sitting With Sadness"],
  },
  {
    title: "Talking at Night",
    author: "Claire Daverley",
    cover: "/images/talking.png",
    tags: ["Opposites Attract", "Late-Night Connection"],
  },
  {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    cover: "/images/belljar.png",
    tags: ["Existential Crisis", "Societal Pressure"],
  },
  {
    title: "The Five People You Meet in Heaven",
    author: "Mitch Albom",
    cover: "/images/fivepeople.png",
    tags: ["Afterlife", "Interconnectedness"],
  },
  {
    title: "The Idiot",
    author: "Elif Batuman",
    cover: "/images/idiot.png",
    tags: ["Intellectual isolation", "Out of Place"],
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    cover: "/images/secrethistory.png",
    tags: ["Dark Academia", "Social Class"],
  },
];

export default function BooksPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-4xl font-semibold text-espresso dark:text-[#f9f8f0]">Book Recommendations</h2>
      <p className="mt-3 max-w-2xl text-espresso/70 dark:text-[#f9f8f0]/70">
        A small library of stories chosen for emotional resonance.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {books.map((book) => (
          <article
            key={book.title}
            className="group rounded-2xl border border-espresso/10 bg-alice-blue/40 dark:bg-eggshell dark:text-espresso p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex justify-center">
              <Image
                src={book.cover}
                alt={book.title}
                width={180}
                height={260}
                className="rounded-lg shadow-sm"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold leading-snug text-espresso">
                {book.title}
              </h3>
              <p className="mt-1 text-sm italic text-espresso/70">{book.author}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-espresso/15 bg-eggshell px-3 py-1 text-xs text-espresso/80 dark:bg-dry-sage/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}