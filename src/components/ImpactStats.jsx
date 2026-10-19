import styles from "./ImpactStats.module.css";

const stats = [
  { number: "12,000+", label: "Students Educated" },
  { number: "4,500+", label: "Women Empowered" },
  { number: "85", label: "Villages Reached" },
  { number: "21,000+", label: "Families Supported" },
];

export default function ImpactStats() {
  return (
    <section className={styles.impact}>
      <div className={styles.intro}>
        <h2>Our Impact in Action</h2>
        <p>
          Livelihoods, skills, education and women empowerment.
          <br />
          Measurable outcomes. Long-term local ownership.
        </p>
      </div>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
