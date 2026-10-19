import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/program" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <img
          src="logo.png"
          alt="Petiole Foundation"
          className={styles.logoImage}
        />

        <span className={styles.brandCopy}>
          <strong>Petiole Foundation</strong>
          <small>
            An ISO 9001:2015 Certified | People. Partnership. Progress.
          </small>
        </span>
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}

        <Link href="/support" className={styles.supportButton}>
          Support Our Mission
        </Link>
      </nav>
    </header>
  );
}
