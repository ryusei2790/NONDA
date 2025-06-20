import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to NONDA</h1>
      <div className={styles.links}>
        <Link href="/chat" className={styles.link}>
          チャットを始める
        </Link>
      </div>
    </main>
  );
}
