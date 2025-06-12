'use client';

import { useState } from 'react';
import styles from './MessageForm.module.css';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'Failed to send message' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message"
          className={styles.input}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      {response && (
        <div className={styles.response}>
          <h3>Response:</h3>
          <pre className={styles.responseData}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 