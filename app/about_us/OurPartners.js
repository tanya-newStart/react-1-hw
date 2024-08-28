import styles from "./OurPartners.module.css";

const partnersIntro = {
  title: "Our Partners",
  description:
    "We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.",
};
const ourPartnersData = [
  {
    name: "Alphabet",
    logo: "/business_partners/alphabet-logo.png",
  },
  {
    name: "Amazon",
    logo: "/business_partners/amazon_logo.png",
  },
  {
    name: "CBC",
    logo: "/business_partners/CBC_Logo_White.png",
  },
  {
    name: "Microsoft",
    logo: "/business_partners/Microsoft-Logo-white.png",
  },
  {
    name: "NYU",
    logo: "/business_partners/nyu-logo.png",
  },
  {
    name: "Queens University",
    logo: "/business_partners/QueensLogo_white.png",
  },
  {
    name: "Samsung",
    logo: "/business_partners/samsung-logo.png",
  },
  {
    name: "Sodexo",
    logo: "/business_partners/sodexo-logo.png",
  },
];

export const OurPartners = () => {
  return (
    <section>
      <header className={styles.partnersHeader}>
        <p>{partnersIntro.description}</p>
      </header>
      <div className={styles.logos}>
        {ourPartnersData.map((partner, index) => (
          <div key={index}>
            <img
              src={partner.logo}
              alt={partner.name}
              className={styles.imageLogo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
