import { ourValuesData } from "./values";
import styles from "./OurValues.module.css";

export const OurValues = () => {
  return (
    <section className={styles.container}>
      {ourValuesData.map((value) => (
        <div key={value.id} className={styles.valueItem}>
          <h3>{value.title}</h3>
          <img src={value.icon} alt={value.title} className={styles.icon} />
          <p>{value.description}</p>
        </div>
      ))}
    </section>
  );
};
