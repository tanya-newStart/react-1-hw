import styles from "./OurMission.module.css";

const ourMissionData = {
  description:
    "At Galactica, our mission is to unlock the wonders of the universe for everyone. We believe that space is the final frontier and that the opportunity to explore it should be within everyone’s reach. Our journeys are designed to inspire, educate, and provide a once-in-a-lifetime experience that transcends the ordinary.",
};

export const OurMission = () => {
  return (
    <section className={styles.container}>
      <p>{ourMissionData.description}</p>
    </section>
  );
};
