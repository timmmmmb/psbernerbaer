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
                            News
                        </h1>
                    </section>

                </Container>
            </Layout>
        </>
    )
}
