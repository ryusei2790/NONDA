import { getApp, getApps, initializeApp, FirebaseApp } from 'firebase/app'
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  validateFirebaseConfig,
} from '../../constant/env'

// 環境変数の検証
if (!validateFirebaseConfig()) {
  throw new Error('Firebase configuration is incomplete. Please check your environment variables.')
}

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
}

// 重複初期化を防ぐための初期化関数
export const initializeFirebaseApp = (): FirebaseApp =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp()

// デフォルトエクスポート
export const app: FirebaseApp = initializeFirebaseApp()

// Firebaseアプリの確認
console.log('Firebase App initialized:', app)
console.log('Firebase App name:', app.name)
console.log('Firebase App options:', app.options)

export default app