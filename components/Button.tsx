import Link from "next/link";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: "bg-primary-gradient hover:text-shadow hover:shadow-promary",
      secondary:
        " text-offWhite bg-white bg-opacity-10 botrder border-border-white backdrop-filter-[12px] [&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className=" icon-wrapper">{children}</span>
);

export const Button = ({
  children,
  href,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Link className={buttonClasses({ variant, size })} href={href}>
      {children}
    </Link>
  );
};
