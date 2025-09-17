import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        Header!
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Home Page!
        </h1>
      </main>
      <footer className={styles.footer}>
        <h3>Footer!</h3>
      </footer>
    </div>
  );
}
