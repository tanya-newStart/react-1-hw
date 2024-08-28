import { OurValues } from "./OurValues";
import { OurMission } from "./OurMission";
import { OurCrew } from "./OurCrew";
import { OurPartners } from "./OurPartners";

import styles from "./page.module.css";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <section className="card">
          <h2>Our Mission</h2>
          <OurMission />
        </section>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>Meet our crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
