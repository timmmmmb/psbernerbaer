import Head from "next/head";
import Layout from "../components/layout";
import Header from '../components/header'
import Container from "../components/container";
import Link from 'next/link'
import dynamic from "next/dynamic";


export default function Contact() {
    const MapWithNoSSR = dynamic(() => import("../components/map"), {
        ssr: false
    });
    return (
        <>
            <Layout>

                <Head>
                    <title>Pistolenschützen Bernerbär</title>
                </Head>
                <Container>
                    <Header />
                    <div className="mx-auto w-4/6">
                        <section>
                            Wer sind wir? Wir sind die Bernerbären ein Pistolenschützen Verein welcher seit 1994 in der Region Bern aktiv ist. Momentan treffen wir uns 1 mal Pro Woche im Schiessstand Sand in der Nähe von Schöhnbühl.
                            Falls du interesse hast einmal das Pistolenschiessen auszuprobieren dann melde dich doch entweder per Email an frey.tim@outlook.com oder erschein direkt beim Training. Dieses findet immer am Dienstag von 18:00-19:30 statt.
                            Für eine Liste mit allen Aktuellen Termine folge diesem link:
                            <Link href="/posts/Neue%20Schiesstermine%202021">
                                <a> Schiessdaten</a>
                            </Link>
                        </section>


                        <section>
                            Wir schiessen im Schiessstand Sand in der Nähe von Schöhnbühl:
                        </section>

                        <section className="mx-auto h-96 w-96">
                            <MapWithNoSSR />
                        </section>
                    </div>
                </Container>
            </Layout>
        </>
    )
}