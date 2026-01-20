import Image from "next/image";
import Link from "next/link";

const cozyPicks = [
  {
    title: "Severance",
    author: "Ling Ma",
    cover: "/images/severance.png",
    alt: "Book cover of Severance by Ling Ma, featuring a simple, almost manuscript-like look, with a pink cover",
    tags: ["Dystopian", "When Life Feels on Autopilot"],
  },
  {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    cover: "/images/belljar.png",
    alt: "Book cover of Bell Jar by Sylvia Plath, featuring an illustration of a woman’s legs in stiletto heels ",
    tags: ["Autobiography", "High-Functioning Sadness"],
  },
  {
    title: "Madonna in a Fur Coat",
    author: "Sabahattin Ali",
    cover: "/images/madonna.png",
    alt: "Book cover of Madonna in a Fur Coat by Sabahattin Ali, featuring vintage imagery of a couple",
    tags: ["Literary Fiction", "Emotionally Invisible"],
  },
  {
    title: "Alone With You in the Ether",
    author: "Olivie Blake",
    cover: "/images/alonewithyou.png",
    alt: "Book cover of Alone With You in the Ether by Olivie Blake, featuring a minimalist design in muted tones",
    tags: ["Contemporary Romance", "What It Means To Be Unwell"],
  },
];

const loveThatLingers = [
  { title: "Normal People", author: "Sally Rooney", 
    cover: "/images/normalpeople.png", alt: "Book cover of Normal People by Sally Rooney, featuring a blue and green background with illustrations of a young man and woman",
    tags: ["Literary Fiction", "Almost, But Not Quite"],
  },
  { title: "Talking at Night", author: "Claire Daverley", 
    cover: "/images/talking.png", alt: "Book cover of Talking at Night by Claire Daverley, featuring an illustration of a couple leaning on each other while looking up at the sky",
    tags: ["Contemporary Romance", "The Enduring Power of Memory"],
  },
  { title: "Heart the Lover", author: "Lily King", 
    cover: "/images/heartlover.png", alt: "Book cover of Heart the Lover by Lily King, featuring an illustration of stylized eyes with white petals falling like tears on an orange background",
    tags: ["Coming of Age", "The Ache of Missed Chances"],
  },
];

const floatingThroughGrief = [
  { title: "Blue Sisters", author: "Coco Mellors", 
    cover: "/images/bluesisters.png", alt: "Book cover of Blue Sisters by Coco Mellors, featuring a portrait of one of the sisters",
    tags: ["Women's Fiction", "Complex bonds of Sisterhood"],
  },
  { title: "Sunbathing", author: "Isobel Beech", 
    cover: "/images/sunbathing.png", alt: "Book cover of Sunbathing by Isobel Beech, featuring a large white text over a blurred outdoor landscape image framed by a purple border",
    tags: ["Literary Fiction", "A Quiet Meditation on Grief"],
  },
  { title: "Crying in H Mart", author: "Michelle Zauner", 
    cover: "/images/crying.png", alt: "Book cover of Crying in H Mart by Michelle Zauner, featuring noodles being lifted by chopsticks against a vibrant red background",
    tags: ["Biography", "When Food Is the Only Way Back"],
  },
];

const academiaPerspectives = [
  { title: "The Idiot", author: "Elif Batuman", 
    cover: "/images/idiot.png", alt: "Book cover of The Idiot by Elif Batuman, featuring a simple design against a pale pink background with a single, large rock in the middle",
    tags: ["Literary Fiction", "Intellectually Lonely"],
  },
  { title: "The Secret History", author: "Donna Tartt", 
    cover: "/images/secrethistory.png", alt: "Book cover of The Secret History by Donna Tartt, featuring a close-up image of a classical statue’s face in beige tones, with the title and author’s name centered in black text",
    tags: ["Psychological Fiction", "The Destructiveness of Secrets"],
  },
  { title: "If We Were Villains", author: "M. L. Rio", 
    cover: "/images/villains.png", alt: "Book cover of If We Were Villains by M. L. Rio, featuring a human skull centered on a dark background, with the title written in white script and a thin yellow line crossing the skull horizontally",
    tags: ["Literary Thriller", "The Costs of Complicity"],
  },
];

function BookCard({ book, showTags = false }) {
  return (
    <div className="text-center">
      <div className="mx-auto w-fit">
        <Image
          src={book.cover}
          alt={book.title}
          width={140}
          height={200}
          className="rounded-lg object-cover shadow-sm transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="mt-4 font-semibold text-espresso dark:text-[#f9f8f0]">{book.title}</p>
      <p className="text-sm text-zinc-600 dark:text-[#f9f8f0]/80">{book.author}</p>

      {showTags && book.tags?.length ? (
        <div className="mt-3 space-y-1 text-xs text-zinc-500 dark:text-[#f9f8f0]/70">
          {book.tags.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <section className="flex justify-center">
          <main className="flex w-full max-w-3xl flex-col items-center gap-10 rounded-lg px-10 py-24 shadow bg-alice-blue text-espresso dark:bg-[#f9f8f0] dark:text-espresso">
            <Image
              src="/images/cover.jpg"
              alt="Artwork of Snoopy on a sofa reading a book"
              width={150}
              height={190}
              priority
              className="rounded-full object-cover scale-110"
            />

            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-espresso">
                Welcome to The Cozy Corner
              </h1>
              <p className="mt-4 text-zinc-600">
                A cozy online bookstore with hand-picked recommendations for every reader.
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href="/books"
                className="flex h-12 items-center justify-center rounded-full bg-dry-sage px-6 text-espresso hover:bg-sand"
              >
                Browse Books
              </Link>

              <Link
                href="/about"
                className="flex h-12 items-center justify-center rounded-full border px-6 hover:bg-espresso hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </main>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-espresso dark:text-[#f9f8f0]">
            This Week’s Cozy Picks
          </h2>

          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cozyPicks.map((book) => (
              <BookCard key={book.title} book={book} showTags />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-espresso dark:text-[#f9f8f0]">Browse By Feeling</h2>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-espresso dark:text-[#f9f8f0]">
              The Kind of Love That Lingers
            </h3>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {loveThatLingers.map((book) => (
                <BookCard key={book.title} book={book} showTags />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-espresso dark:text-[#f9f8f0]">Floating Through Grief</h3>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {floatingThroughGrief.map((book) => (
                <BookCard key={book.title} book={book} showTags />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-espresso dark:text-[#f9f8f0]">
              Academia Through Different Perspectives
            </h3>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {academiaPerspectives.map((book) => (
                <BookCard key={book.title} book={book} showTags />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-3xl rounded-lg bg-dry-sage px-8 py-10 text-center shadow">
            <h2 className="text-2xl font-semibold text-espresso">A Little Corner For You</h2>
            <p className="mt-2 text-sm text-espresso/80">A soft place to land</p>

            <form className="mt-6 space-y-4">
              <textarea
                rows={3}
                placeholder="What kind of book do you need right now?"
                className="w-full rounded-lg border border-espresso/20 bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 outline-none focus:border-espresso/40"
              />

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-md bg-espresso px-6 text-white transition-colors hover:bg-espresso/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}