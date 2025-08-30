"use client";
import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TagsMenu from "../TagsMenu/TagsMenu";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.headerLink}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={css.navigationLink}
            >
              Home
            </Link>
          </li>
          <li>
            <TagsMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
