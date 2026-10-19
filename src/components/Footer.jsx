import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.about}>
          <div className={styles.brand}>
            <img src="logo.png" alt="" />
            <strong>Petiole Foundation</strong>
          </div>

          <p>
            Petiole Foundation partners with communities to build sustainable
            livelihoods, skills, education and women empowerment through
            human-centered programs.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <h2>Support</h2>
          <Link href="/support">Donate</Link>
          <Link href="/contact">Partner with us</Link>
          <Link href="/support">Fund a program</Link>
          <Link href="/#how-we-work">How we work</Link>
        </div>

        <div className={styles.linkGroup}>
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/program">Programs</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.contact}>
          <h2>Reach Us</h2>
          <p>
            <strong>Email</strong>
            <a href="mailto:hello@petiole.org">hello@petiole.org</a>
          </p>
          <p>
            <strong>Contact Number</strong>
            <a href="tel:+919580102060">+91 95801 02060</a>
          </p>
          <p>
            <strong>Toll-free Number</strong>
            <a href="tel:18008890802">1800 889 0802</a>
          </p>
          <p>
            <strong>Address</strong>
            Registered Address: 372, Mohanpur, Bharapur, Fatehabad, Agra, Uttar
            Pradesh 283111, India
          </p>

          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"></a>
            <a href="#" aria-label="Instagram"></a>
            <a href="#" aria-label="LinkedIn"></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Petiole Foundation. All rights reserved.</span>
        <span>Powered by Techno Particles</span>
      </div>
    </footer>
  );
}
