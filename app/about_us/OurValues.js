import styles from "./OurValues.module.css";

const ourValuesData = [
  {
    title: "Exploration",
    description:
      "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
  },
  {
    title: "Innovation",
    description:
      "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
  },
  {
    title: "Community",
    description:
      "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
  },
];

export const OurValues = () => {
  return (
    <section className={styles.container}>
      {ourValuesData.map((value, index) => (
        <div key={index} className={styles.valueItem}>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </section>
  );
};
