import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-24 px-10 bg-white rounded-lg shadow">
        <Image
          src="/images/book1.png"
          alt="The Cozy Corner"
          width={120}
          height={160}
          priority
        />

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome to The Cozy Corner
          </h1>
          <p className="mt-4 text-zinc-600">
            A cozy online bookstore with hand-picked recommendations for every
            reader.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-12 items-center justify-center rounded-full bg-black px-6 text-white hover:bg-zinc-800"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border px-6 hover:bg-zinc-100"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}