export default function ContactPage() {
  return (
    <section className="max-w-md">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

      <form className="bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded dark:border-espresso dark:text-espresso"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded dark:border-espresso dark:text-espresso"
        />
        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded dark:border-espresso dark:text-espresso"
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-zinc-800">
          Send Message
        </button>
      </form>
    </section>
  );
}