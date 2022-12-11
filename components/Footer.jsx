import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link} passHref>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40"
                height="40"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          123 5TH AVENUE,
          <br />
          NEW YORK, USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@AVOCADO.COM
          <br /> 123 456 7890
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          ALL RIGHTS RESERVED
          <br />© 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;
