import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function Disclaimer() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Pistolenschützen Bernerbär</title>
                </Head>
                <Container>
                    <Intro />
                    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                            Datenschutzerklärung
                        </h1>
                    </section>
                    <section className="mt-16 mb-16 md:mb-12 whitespace-pre-wrap">
                        <b>Nutzung von Google Analytics</b>
                        <p> </p>
                        <p>Wir verwenden Google Analytics, um die Website-Nutzung zu analysieren. Die daraus gewonnenen Daten werden genutzt, um unsere Website sowie Werbemaßnahmen zu optimieren.</p>
                        <p> </p>
                        <p>Google Analytics ist ein Webanalysedienst, der von Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, United States) betrieben und bereitgestellt wird. Google verarbeitet die Daten zur Website-Nutzung in unserem Auftrag und verpflichtet sich vertraglich zu Maßnahmen, um die Vertraulichkeit der verarbeiteten Daten zu gewährleisten.</p>
                        <p> </p>
                        <p>Während Ihres Website-Besuchs werden u.a. folgende Daten aufgezeichnet:</p>
                        <p> </p>
                        <ul>
                            <li>Aufgerufene Seiten</li>
                            <li>Die Erreichung von "Website-Zielen"</li>
                            <li>Ihr Verhalten auf den Seiten (beispielsweise Klicks, Scroll-Verhalten und Verweildauer)</li>
                            <li>Ihr ungefährer Standort (Land und Stadt)</li>
                            <li>Ihre IP-Adresse (in gekürzter Form, sodass keine eindeutige Zuordnung möglich ist)</li>
                            <li>Technische Informationen wie Browser, Internetanbieter, Endgerät und Bildschirmauflösung</li>
                            <li>Herkunftsquelle Ihres Besuchs (d.h. über welche Website bzw. über welches Werbemittel Sie zu uns gekommen sind)</li>
                            <li>Diese Daten werden an einen Server von Google in den USA übertragen.</li>
                        </ul>
                        <p> </p>
                        <p>Google Analytics speichert Cookies in Ihrem Webbrowser für die Dauer von zwei Jahren seit Ihrem letzten Besuch. Diese Cookies enthaltene eine zufallsgenerierte User-ID, mit der Sie bei zukünftigen Website-Besuchen wiedererkannt werden können.</p>
                        <p> </p>
                        <p>Die aufgezeichneten Daten werden zusammen mit der zufallsgenerierten User-ID gespeichert, was die Auswertung pseudonymer Nutzerprofile ermöglicht. Sonstige Daten bleiben in aggregierter Form unbefristet gespeichert.</p>
                        <p> </p>
                        <p>Sollten Sie mit der Erfassung nicht einverstanden sein, können Sie diese mit der einmaligen Installation des Browser-Add-ons zur Deaktivierung von Google Analytics unterbinden.</p>
                        <p> </p>
                        <p>Quelle: traffic3.net</p>
                    </section>
                </Container>
            </Layout>
        </>
    )
}
