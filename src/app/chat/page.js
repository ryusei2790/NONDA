import Link from 'next/link';
import MessageForm from '../components/MessageForm';
import styles from './page.module.css';

export default function ChatPage() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← ホームに戻る
        </Link>
        <h1>チャット</h1>
      </div>
      
      <div className={styles.chatContainer}>
        {/* チャットメッセージを表示するエリア */}
        <div className={styles.messages}>
          {/* メッセージがここに表示されます */}
        </div>
        
        <MessageForm />
      </div>
    </main>
  );
}