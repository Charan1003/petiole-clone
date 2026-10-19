import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Their outreach model creates better follow-through because communities feel informed, respected and consistently supported.",
    name: "Dev Pandey",
    role: "Training Expert",
  },
  {
    quote:
      "The team works with empathy, but also with structure. You can see how planning, reporting and trust all connect on the ground.",
    name: "Yogesh Patil",
    role: "Development Enthusiast",
  },
  {
    quote:
      "Petiole Foundation stands out for disciplined execution, responsive communication and a clear ability to translate intent into credible field delivery.",
    name: "Neeraj",
    role: "CSR",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Voices of Trust</p>

      <h2>
        Communities, supporters and partners validate the quality of the work.
      </h2>

      <div className={styles.cards}>
        {testimonials.map((testimonial) => (
          <article className={styles.card} key={testimonial.name}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <div>
              <strong>{testimonial.name}</strong>
              <p>{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
