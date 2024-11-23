import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Button from "@/ui-compnents/buttons/Button";
function Navbar() {
  return (
      <nav className={styles.nav_wrapper}>
      <div className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo-white.png" alt="Logo" width={210} height={72.1} />
      </div>
      <div className={styles.nav_elements}>
        <div>
          Products
        </div>
        <div>
          Industry
        </div>
        <div>
          Resources
        </div>
        <div>
          Services
        </div>
        <div>
          Company
        </div>
        <div>
          Customers
        </div>
        <Button text="Requet Demo"/>
        <Button text="Contact Us"/>
      </div>
      </div> 
    </nav>
  );
}

export default Navbar;
