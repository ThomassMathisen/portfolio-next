import styles from "../styles/Services.module.css";
import Image from "next/legacy/image";
import Link from "next/link";

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>What can we do for you?</h1>
        <h1 className={styles.subtitle}>Services we offer</h1>
        <div className={styles.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>
              <div className={styles.service}>
                <div className={styles.catInfo}>{service.desc}</div>
                <span className={styles.cat}>{service.title}</span>
                <div className={styles.media}>
                  {service.video ? (
                    <video
                      className={styles.video}
                      autoPlay
                      muted
                      loop
                      src={`/img/${service.video}`}
                    />
                  ) : (
                    <Image
                      src={`/img/${service.photo}`}
                      priority={true}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
