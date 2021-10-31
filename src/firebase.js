import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBJZg3zoMZ9vbH8Tum5ddJ5vYPGawRdwFs',
  authDomain: 'coderhouse-14680.firebaseapp.com',
  projectId: 'coderhouse-14680',
  storageBucket: 'coderhouse-14680.appspot.com',
  messagingSenderId: '321451485047',
  appId: '1:321451485047:web:715a7597bb22d464f0e372',
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
