import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Empowering people. Enabling progress.</p>

        <h1>We turn commitments into measurable community impact</h1>

        <p className={styles.description}>
          We partner with corporates, government &amp; institutions to design
          &amp; implement inclusive development programmes that strengthen
          livelihoods, build skills, empower women &amp; create sustainable
          opportunities for communities.
        </p>

        <div className={styles.actions}>
          <Link href="/support" className={styles.primaryButton}>
            Support Our Mission
          </Link>
          <Link href="/program" className={styles.secondaryButton}>
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
