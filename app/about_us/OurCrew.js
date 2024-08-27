import styles from "./OurCrew.module.css";

const ourCrewAbout = {
  description:
    "Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.",
};
const ourCrewData = [
  {
    title: "Captain",
    name: "Victor Glover",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Glover leads our missions with unparalleled expertise and a passion for space exploration.",
    image: "/crew/image-victor-glover.png",
  },
  {
    title: "Chief Astrophysicist",
    name: "Leo Redding",
    description:
      " Dr. Redding is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    image: "/crew/image-leo-redding.png",
  },
  {
    title: "Mission Specialist",
    name: "Alex Santos",
    description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    image: "/crew/image-alex-santos.png",
  },
  {
    title: "Crew Member",
    name: "Maya Patel",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    image: "/crew/image-maya-patel.png",
  },
];

export const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <section className={styles.container}>
      <header className={styles.crewHeader}>
        <h1>Meet your crew</h1>
        <p>{ourCrewAbout.description}</p>
      </header>
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
