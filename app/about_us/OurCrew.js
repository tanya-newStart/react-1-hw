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
              <img src={member.image} />
            </div>
            <div className={styles.crewInfo}>
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
