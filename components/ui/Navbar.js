"use client";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

const navbarItems = [
  { id: 1, title: "ABOUT US", link: "/about_us" },
  { id: 2, title: "DESTINATION", link: "/destination" },
  { id: 3, title: "NASA COLLABORATION", link: "/nasa_collaboration" },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavItem
              key={item.id}
              title={item.title}
              link={item.link}
              isActive={item.link === currentPath}
              index={index}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
