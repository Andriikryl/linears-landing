import React from "react";
interface HeroProps {
  children: React.ReactNode;
}
interface HeroElementProps {
  children: React.ReactNode;
}
export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <h1 className="text-5xl md:text-8xl my-6 text-gradient">{children}</h1>
  );
};
export const HeroSubTitle = ({ children }: HeroElementProps) => {
  return <h1 className="text-lg mb-12 text-primary-text">{children}</h1>;
};
export const Hero = ({ children }: HeroProps) => {
  return <div className=" text-center">{children}</div>;
};
