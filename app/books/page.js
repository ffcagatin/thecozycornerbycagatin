import Image from "next/image";

const books = [
  {
    title: "Alone With You in the Ether",
    author: "Olivie Blake",
    cover: "/images/alonewithyou.png",
    alt: "Book cover of Alone With You in the Ether by Olivie Blake, featuring a minimalist design in muted tones",
    tags: ["Mental Health", "Emotional Dependency"],
  },
  {
    title: "Blue Sisters",
    author: "Coco Mellors",
    cover: "/images/bluesisters.png",
    alt: "Book cover of Blue Sisters by Coco Mellors, featuring a portrait of one of the sisters",
    tags: ["Family Dynamics", "Grief & Loss"],
  },
  {
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    cover: "/images/crying.png",
    alt: "Book cover of Crying in H Mart by Michelle Zauner, featuring noodles being lifted by chopsticks against a vibrant red background",
    tags: ["Mother Loss", "Cultural Identity"],
  },
  {
    title: "Days at the Morisaki Bookshop",
    author: "Satoshi Yagisawa",
    cover: "/images/morisaki.png",
    alt: "Book cover of Days at the Morisaki Bookshop by Satoshi Yagisawa, featuring an inviting and colorful illustration of the titular old wooden bookshop in Tokyo's Jimbocho district",
    tags: ["New Beginnings", "Healing"],
  },
  {
    title: "Heart the Lover",
    author: "Lily King",
    cover: "/images/heartlover.png",
    alt: "Book cover of Heart the Lover by Lily King, featuring an illustration of stylized eyes with white petals falling like tears on an orange background",
    tags: ["Longing", "Quiet Devotion"],
  },
  {
    title: "If We Were Villains",
    author: "M. L. Rio",
    cover: "/images/villains.png",
    alt: "Book cover of If We Were Villains by M. L. Rio, featuring a human skull centered on a dark background, with the title written in white script and a thin yellow line crossing the skull horizontally",
    tags: ["Dark Academia", "Obsession"],
  },
  {
    title: "Madonna in a Fur Coat",
    author: "Sabahattin Ali",
    cover: "/images/madonna.png",
    alt: "Book cover of Madonna in a Fur Coat by Sabahattin Ali, featuring vintage imagery of a couple",
    tags: ["Alienation", "Yearning"],
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    cover: "/images/normalpeople.png",
    alt: "Book cover of Normal People by Sally Rooney, featuring a blue and green background with illustrations of a young man and woman",
    tags: ["Miscommunication", "Will-They-Won't-They"],
  },
  {
    title: "Severance",
    author: "Ling Ma",
    cover: "/images/severance.png",
    alt: "Book cover of Severance by Ling Ma, featuring a simple, almost manuscript-like look, with a pink cover",
    tags: ["Post-Apocalyptic", "Immigrant Experience"],
  },
  {
    title: "Sunbathing",
    author: "Isobel Beech",
    cover: "/images/sunbathing.png",
    alt: "Book cover of Sunbathing by Isobel Beech, featuring a large white text over a blurred outdoor landscape image framed by a purple border",
    tags: ["Private Mourning", "Sitting With Sadness"],
  },
  {
    title: "Talking at Night",
    author: "Claire Daverley",
    cover: "/images/talking.png",
    alt: "Book cover of Talking at Night by Claire Daverley, featuring an illustration of a couple leaning on each other while looking up at the sky",
    tags: ["Opposites Attract", "Late-Night Connection"],
  },
  {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    cover: "/images/belljar.png",
    alt: "Book cover of Bell Jar by Sylvia Plath, featuring an illustration of a woman’s legs in stiletto heels ",
    tags: ["Existential Crisis", "Societal Pressure"],
  },
  {
    title: "The Five People You Meet in Heaven",
    author: "Mitch Albom",
    cover: "/images/fivepeople.png",
    alt: "Book cover of The Five People You Meet in Heaven by Mitch Albom, featuring an illustration of a Ferris wheel against a beige background and framed by a red border",
    tags: ["Afterlife", "Interconnectedness"],
  },
  {
    title: "The Idiot",
    author: "Elif Batuman",
    cover: "/images/idiot.png",
    alt: "Book cover of The Idiot by Elif Batuman, featuring a simple design against a pale pink background with a single, large rock in the middle",
    tags: ["Intellectual isolation", "Out of Place"],
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    cover: "/images/secrethistory.png",
    alt: "Book cover of The Secret History by Donna Tartt, featuring a close-up image of a classical statue’s face in beige tones, with the title and author’s name centered in black text",
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