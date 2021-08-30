import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          Created By Tim Frey
          <Link href="/disclaimer">
            <p>Datenschutz</p>
          </Link>
        </div>
      </Container>
    </footer>
  )
}
