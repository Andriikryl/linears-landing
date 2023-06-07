import { Container } from "@/components/Container";
import { Hero } from "@/components/Hearo";

export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero 
          title="Liniar is a better way to build products" 
          subtitle="Meet the new standart for modern softwere development. Streamline issues , sprints, and product roadmaps"
          />
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
