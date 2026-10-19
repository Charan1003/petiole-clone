import Link from "next/link";
import styles from "./FocusAreas.module.css";

const programs = [
  {
    title: "Sustainable Livelihoods",
    image: "Sustainable.webp",
    text: "Entrepreneurship, agriculture-based initiatives, micro-enterprises, self-help groups, and cooperatives that strengthen economic self-reliance.",
  },
  {
    title: "Skill Development",
    image: "skill.webp",
    text: "Vocational training, digital and financial literacy, life skills, and industry-relevant competencies for employability and entrepreneurship.",
  },
  {
    title: "Women Empowerment",
    image: "enterprise.webp",
    text: "Equitable opportunities in education, employment, entrepreneurship, and leadership that enable women to participate meaningfully.",
  },
  {
    title: "Education",
    image: "education.webp",
    text: "Inclusive, quality education with a focus on women and girls through scholarships, mentoring, remedial support, and digital learning.",
  },
  {
    title: "Climate-Resilient Agriculture",
    image: "lab.webp",
    text: "Sustainable agriculture, green livelihoods, and climate adaptation practices that protect ecosystems and incomes.",
  },
];

export default function FocusAreas() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Focus Areas</p>

      <h2 className={styles.heading}>
        Program verticals connected by one operating standard: dignity, rigor
        and accountability.
      </h2>

      <article className={styles.featured}>
        <img src="focus.webp" alt="Women learning to use digital technology" />

        <div className={styles.featuredContent}>
          <p className={styles.featuredLabel}>Lead Program</p>
          <h3>Digital Inclusion</h3>
          <p>
            Technology access, digital literacy, online learning, and innovation
            hubs that expand reach for excluded groups.
          </p>
          <Link href="/program">Explore Program</Link>
        </div>
      </article>

      <div className={styles.grid}>
        {programs.map((program) => (
          <article className={styles.card} key={program.title}>
            <img src={program.image} alt="" />
            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>Focus Area</p>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <Link href="/program">Explore Program</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
