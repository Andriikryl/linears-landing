import { Container } from "@/components/Container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/Hearo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero>
            <HeroTitle>Liniar is a better way to build products</HeroTitle>
            <HeroSubTitle>
              Meet the new standart for modern softwere development. Streamline
              issues , sprints, and product roadmaps
            </HeroSubTitle>
            <img src="/img/hero.webp" alt="hero image" />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
