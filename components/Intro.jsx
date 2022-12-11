import styles from "../styles/Intro.module.css";
import Image from "next/legacy/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brandName}>AV0CAD0 </span>
          DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src={"/img/Avocado.png"}
          layout="fill"
          objectFit="cover"
          alt=""
          priority={true}
        />
      </div>
    </div>
  );
};

export default Intro;
