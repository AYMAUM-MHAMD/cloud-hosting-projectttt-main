"use client";

import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import styles from "./header.module.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface NavbarProps {
  isAdmin: boolean;
}
const Navbar = ({ isAdmin }: NavbarProps) => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.logo} href="/">
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
        <div className={styles.menu}>
          {Toggle ? (
            <IoCloseSharp onClick={() => setToggle((prev) => !prev)} />
          ) : (
            <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
          )}
        </div>
      </div>
      <div
        className={styles.navLinkWrapper}
        style={{
          clipPath: (Toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <ul className={styles.navLinks}>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/articles?pageNumber=1"
          >
            Articles
          </Link>
          {isAdmin && (
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/admin"
            >
              Admin Dashboard
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
