import MessageForm from './components/MessageForm';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to NONDA</h1>
      <MessageForm />
    </main>
  );
}
