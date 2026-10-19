import Link from "next/link";
import styles from "./DonationPlans.module.css";

const plans = [
  {
    amount: "Rs. 500",
    title: "Starter Support",
    text: "Helps fund learning kits, self-help group materials, or field logistics.",
  },
  {
    amount: "Rs. 1000",
    title: "Monthly Momentum",
    text: "Contributes to recurring delivery for one active livelihood or education stream.",
  },
  {
    amount: "Rs. 2500",
    title: "Family Impact",
    text: "Supports a deeper basket of services for women-led households in one community.",
  },
  {
    amount: "Rs. 5000",
    title: "Program Lift",
    text: "Strengthens skill development or climate-resilient agriculture with measurable leverage.",
  },
];

export default function DonationPlans() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Donation Plans</p>

      <h2>
        Flexible giving that supports livelihoods, skills and education with
        clarity.
      </h2>

      <div className={styles.plans}>
        {plans.map((plan) => (
          <article className={styles.plan} key={plan.amount}>
            <strong>{plan.amount}</strong>
            <h3>{plan.title}</h3>
            <p>{plan.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.banner}>
        <div>
          <h3>Give with confidence. Follow the impact with clarity.</h3>
          <p>
            Support transparent programs backed by field execution, impact
            assessments, and regular reporting.
          </p>
        </div>

        <Link href="/support" className={styles.button}>
          Support the Mission
        </Link>
      </div>
    </section>
  );
}
