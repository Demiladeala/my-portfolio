import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import WorkWithMe from "../components/WorkWithMe";
import CaseStudies from "../components/CaseStudies";

export default function Home() {
  return (
    <div className="bg-paper text-ink scroll-smooth">
      <Head>
        <title>Oluwademilade Ala — Frontend Engineer</title>
        <meta
          name="description"
          content="Frontend engineer building fast, conversion-focused e-commerce storefronts and dashboards. React, Next.js, TypeScript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="case-studies">
        <CaseStudies />
      </section>

      <section id="work-with-me">
        <WorkWithMe />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
