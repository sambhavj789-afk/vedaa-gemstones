import { Link } from 'react-router-dom'

// What the removed section got wrong was not its size but its emptiness: a
// small heading marooned in a wide void. Here the sentence is the content and
// it spans the measure, so the space around it reads as deliberate.
//
// Nothing in it is said anywhere else on the site. It answers the question a
// short catalogue invites -- why so few? -- which nothing else does.
export default function Credo() {
  return (
    <section className="bg-basalt text-porcelain">
      <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <div className="rule" />

        <div className="reveal pt-14 md:pt-16">
          <p className="max-w-4xl font-display text-3xl leading-[1.22] md:text-5xl">
            A short catalogue is a decision,
            <br className="hidden md:block" /> not a limitation.
          </p>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-8 md:mt-14">
          <p className="max-w-xl text-[0.95rem] leading-relaxed text-porcelain/65">
            What is here is what we would be glad to own ourselves. A stone that
            does not earn its place does not get one, and we would rather leave
            the page short than fill it.
          </p>
          <Link
            to="/about"
            className="link-underline font-sans text-[0.66rem] uppercase tracking-widest2 text-gilt"
          >
            More about Vedaa
          </Link>
        </div>
      </div>
    </section>
  )
}
