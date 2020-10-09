import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDI1-bPQHpHlS8jh46CxzMsb5YLg1tXqKU',
  authDomain: 'discordkailash.firebaseapp.com',
  databaseURL: 'https://discordkailash.firebaseio.com',
  projectId: 'discordkailash',
  storageBucket: 'discordkailash.appspot.com',
  messagingSenderId: '350669791646',
  appId: '1:350669791646:web:411aff9dc7c5a23367b68f',
  measurementId: 'G-VC3W1M2XWN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
