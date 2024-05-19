import Link from "next/link";
import styles from "./header.module.css";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/utils/verifyToken";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const token = cookies().get("jwtToken")?.value || "";
  const Payload = verifyTokenForPage(token);
  return (
    <header className={styles.header}>
      <Navbar isAdmin={Payload?.isAdmin || false} />

      <div className={styles.right}>
        {Payload ? (
          <>
          <strong className="text-blue-800 md:text-xl capitalize">
          {Payload.username}
          </strong>
          <LogoutButton/>
          </>
        ) : (
          <>
            <Link className={styles.btn} href="/login">
              Login
            </Link>
            <Link className={styles.btn} href="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
