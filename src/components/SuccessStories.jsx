import styles from "./SuccessStories.module.css";

const stories = [
  {
    location: "Agra District",
    title: "A farm lab helped a smallholder plan for uncertain rains",
    text: "Farmers working with the Climate-Resilient Agriculture Lab adopted low-cost planning practices that reduced risk during an unpredictable monsoon.",
  },
  {
    location: "East Delhi",
    title: "Digital skills turned a young learner into a neighborhood tutor",
    text: "A participant from the Digital Inclusion & Innovation Program began using her new digital skills to support younger students in her community.",
  },
  {
    location: "Noida Fringe Settlements",
    title: "Vocational training opened doors to a green job",
    text: "A young trainee from an underserved settlement secured stable employment after completing a market-linked vocational course.",
  },
];

export default function SuccessStories() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Success Stories</p>

      <h2>
        Impact becomes trustworthy when it is human, specific and sustained.
      </h2>

      <div className={styles.content}>
        <img
          className={styles.image}
          src="success.webp"
          alt="A community worker speaking with a local woman"
        />

        <div className={styles.stories}>
          {stories.map((story) => (
            <article className={styles.card} key={story.location}>
              <p className={styles.location}>{story.location}</p>
              <h3>{story.title}</h3>
              <p className={styles.text}>{story.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
