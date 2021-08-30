import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <p className="px-1">Created By Tim Frey</p>
          <p className="px-1">
            <Link href="/disclaimer">
              Datenschutz
            </Link>
          </p>
        </div>

      </Container>
    </footer>
  )
}
