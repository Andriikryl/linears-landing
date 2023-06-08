import { Button, IconWrapper } from "@/components/Button";
import { Container } from "@/components/Container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/Hearo";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Button href="/" variant="secondary" size="small">
        Linear 2023 Realease - Built for scale <IconWrapper>~</IconWrapper>
      </Button>
      <Hero>
        <HeroTitle>Liniar is a better way to build products</HeroTitle>
        <HeroSubTitle>
          Meet the new standart for modern softwere development. Streamline
          issues , sprints, and product roadmaps
        </HeroSubTitle>
        <Button href="/" variant="primary" size="large">
          Get Started
        </Button>
        <img src="/img/hero.webp" alt="hero image" />
      </Hero>
    </Container>
  );
}
