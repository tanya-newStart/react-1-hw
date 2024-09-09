import Link from "next/link";
import classNames from "classnames";
import styles from "./Navbar.module.css";

const NavItem = ({ title, link, isActive, index }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{`0${index + 1}`}</b> {title}
      </Link>
    </li>
  );
};

export default NavItem;
