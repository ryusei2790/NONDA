'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../lib/firebase/firebase';
import styles from './MessageForm.module.css';

interface ResponseData {
  message?: string;
  error?: string;
  [key: string]: any;
}

export default function MessageForm() {

  // Firebaseアプリの確認

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Firebase Firestoreにメッセージを保存
      const db = getFirestore(app);
      console.log('Firestore instance:', db);
      
      const docRef = await addDoc(collection(db, 'messages'), {
        text: message,
        timestamp: new Date(),
        userId: 'user123' // 実際のユーザーIDに置き換える
      });
      
      setResponse({ 
        success: true, 
        message: 'Message sent successfully!',
        docId: docRef.id 
      });
      setMessage(''); // フォームをクリア
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'Failed to send message' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
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