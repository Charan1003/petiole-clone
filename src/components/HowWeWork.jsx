import styles from "./HowWeWork.module.css";

const steps = [
  {
    number: "01",
    title: "Listen",
    text: "We assess constraints with community members, women, youth, and local stakeholders.",
  },
  {
    number: "02",
    title: "Design",
    text: "Programs are shaped around practical barriers, livelihoods, and learning gaps, not generic templates.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "Execution happens through field teams, volunteers, self-help groups, and institutional partners.",
  },
  {
    number: "04",
    title: "Measure",
    text: "Outputs and outcomes are tracked via research, impact assessments, and transparent reporting.",
  },
];

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>How We Work</p>

      <h2>
        Community-owned programs disciplined on the ground from listening to
        measurable impact.
      </h2>

      <div className={styles.steps}>
        {steps.map((step) => (
          <article className={styles.card} key={step.number}>
            <span className={styles.number}>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
