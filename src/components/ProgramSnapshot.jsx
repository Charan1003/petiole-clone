import Link from "next/link";
import styles from "./ProgramSnapshot.module.css";

const programs = [
  {
    title: "Sustainable Livelihoods",
    text: "Community-owned pathways that strengthen income, resilience, and economic self-reliance.",
    href: "/program",
  },
  {
    title: "Skill Development",
    text: "Practical and industry-relevant capabilities for employability and entrepreneurship.",
    href: "/program",
  },
  {
    title: "Education",
    text: "Inclusive learning support that helps women, girls, and young people access opportunity.",
    href: "/program",
  },
];

export default function ProgramSnapshot() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Program Snapshot</p>

      <h2>
        Livelihoods, learning and inclusion shaped around real community
        priorities.
      </h2>

      <div className={styles.content}>
        <div className={styles.programs}>
          {programs.map((program) => (
            <article className={styles.program} key={program.title}>
              <span className={styles.programLabel}>Program Area</span>
              <div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.support}>
          <p className={styles.supportLabel}>Support Pathways</p>
          <h3>
            Two clear actions for supporters who want to contribute with
            confidence.
          </h3>
          <Link href="/support">
            Fund accountable work across approved program areas.
          </Link>
          <Link href="/contact">
            Start a partnership or request more information.
          </Link>
        </aside>
      </div>
    </section>
  );
}
