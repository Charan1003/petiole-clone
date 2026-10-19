import styles from "./Mission.module.css";

const points = [
  {
    title: "Corporate Partnerships",
    text: "CSR-ready implementation across livelihoods, education, skills, and climate-resilient agriculture.",
  },
  {
    title: "Volunteer Activation",
    text: "Structured opportunities for individuals, campuses, and employee groups to engage.",
  },
  {
    title: "Public Trust",
    text: "Reports, impact assessments, and transparent giving pathways build credibility over time.",
  },
];

export default function Mission() {
  return (
    <section className={styles.mission}>
      <img
        className={styles.image}
        src="/images/heading.webp"
        alt="A community meeting with a local development worker"
      />

      <div className={styles.content}>
        <p className={styles.label}>Mission</p>

        <h2>
          We work where essential opportunity is uneven, and we stay long enough
          to make progress visible.
        </h2>

        <p className={styles.description}>
          Petiole Foundation integrates livelihoods, skill development,
          education and women empowerment into community-driven programs aligned
          with the Sustainable Development Goals.
        </p>

        <div className={styles.cards}>
          {points.map((point) => (
            <article className={styles.card} key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
