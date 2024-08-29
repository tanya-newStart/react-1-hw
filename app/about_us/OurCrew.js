import styles from "./OurCrew.module.css";
import { ourCrewAbout, ourCrewData } from "./crew.js";

export const OurCrew = () => {
  return (
    <section className={styles.container}>
      <p className={styles.crewIntro}>{ourCrewAbout.description}</p>
      <div className={styles.crewAbout}>
        {ourCrewData.map((member, index) => (
          <div key={index} className={styles.crewItem}>
            <div className={styles.crewImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.crewInfo}>
              <h3>{member.title}</h3>
              <h2>{member.name}</h2>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
