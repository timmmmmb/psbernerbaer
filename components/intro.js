import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Pistolenschützen Bernerbär
        </h1>
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h3>Hauptseite</h3>
        <h3>Schiessdaten</h3>
        <h3>Kontakt</h3>
      </section>
    </>
  )
}
