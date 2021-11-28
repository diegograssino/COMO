import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBefee2wTUPncNwkYiqG18lPZoc56_sU0A',
  authDomain: 'como-40467.firebaseapp.com',
  databaseURL: 'https://como-40467-default-rtdb.firebaseio.com',
  projectId: 'como-40467',
  storageBucket: 'como-40467.appspot.com',
  messagingSenderId: '437713637110',
  appId: '1:437713637110:web:97d1e8537178b840fb66d7',
  measurementId: 'G-0NY7S1791Y',
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
