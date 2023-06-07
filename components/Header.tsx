import Link from "next/link";
import { Logo } from "./icons/logo";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className=" fixed top-0 left-0 w-full border-b border-white-a08">
      <Container className="flex items-center h-[var(--navigation-height)]">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[3.8rem] h-[3.8rem] mr-4" /> Linear
        </Link>
        <nav className="h-full">
          <ul className="flex items-center h-full [&_a]:text-sm gap-5">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>
        <div className=" ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Log in
          </Link>
          <Link href="#">Sign up</Link>
        </div>
      </Container>
    </header>
  );
};
