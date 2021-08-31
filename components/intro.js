import Link from 'next/link'

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Pistolenschützen Bernerbär
        </h1>
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <Link href="/">
          <a>Hauptseite</a>
        </Link>
        <Link href="/posts/Neue%20Schiesstermine%202021"><a>Schiessdaten</a>
        </Link>
        <Link href="/contact">
          <a>Kontakt</a>
        </Link>
      </section>
    </>
  )
}
