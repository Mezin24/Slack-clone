import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC1cIFm812yRQ4ARHpF6t_9Dc2gYC4to9I',
  authDomain: 'slack-clone-9300a.firebaseapp.com',
  projectId: 'slack-clone-9300a',
  storageBucket: 'slack-clone-9300a.appspot.com',
  messagingSenderId: '365824840622',
  appId: '1:365824840622:web:ec228c64e2623f24b7ee3f',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
