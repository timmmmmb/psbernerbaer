import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-4 md:mb-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          <Image
            src='/favicon/512x512.jpg'
            alt='Bernerbär Logo'
            className={cn('shadow-sm',
              'hover:shadow-md transition-shadow duration-200'
            )}
            width='128px'
            height='128px'
          />
          Pistolenschützen Bernerbär
        </h1>
      </section>
      <section className="items-center md:justify-between mt-4 mb-32 md:mb-16">
        <Link href="/">
          <a className="m-8">Hauptseite</a>
        </Link>
        <Link href="/news"><a className="m-8">News</a>
        </Link>
        <Link href="/posts/Neue%20Schiesstermine%202021"><a className="m-8">Schiessdaten</a>
        </Link>
        <Link href="/contact">
          <a className="m-8">Kontakt</a>
        </Link>
      </section>
    </>
  )
}
