import { Container } from "@/components/Container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/Hearo";

export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>Liniar is a better way to build products</HeroTitle>
            <HeroSubTitle>
              Meet the new standart for modern softwere development. Streamline
              issues , sprints, and product roadmaps
            </HeroSubTitle>
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
