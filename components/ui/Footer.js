"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SocialMediaItem from "./SocialMediaItem";
import { socialLinks } from "./data";
import styles from "./Footer.module.css";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialLinks.map((link) => (
            <SocialMediaItem
              key={link.id}
              url={link.url}
              title={link.title}
              icon={link.icon}
            ></SocialMediaItem>
          ))}
        </ul>
      </div>
    </footer>
  );
};
