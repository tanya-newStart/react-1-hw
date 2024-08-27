import { OurValues } from "./OurValues";
import { OurMission } from "./OurMission";
import { OurCrew } from "./OurCrew";

import styles from "./page.module.css";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return <p> ADD OUR Partners HERE </p>;
};

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <section className="card">
          <h2>Our Mission</h2>
          <OurMission />
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <OurCrew />
        </section>

        {/* TASK - React 1 week 1 */}
        {/* Add in the "OurPartners" component here */}
      </main>
    </div>
  );
};

export default Crew;
