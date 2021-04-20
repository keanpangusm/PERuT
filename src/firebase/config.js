import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB20uia_xA40I321pIlfmVRpzO-ACuMS3E",
  authDomain: "perut-edf98.firebaseapp.com",
  databaseURL: "https://perut-edf98-default-rtdb.firebaseio.com",
  projectId: "perut-edf98",
  storageBucket: "perut-edf98.appspot.com",
  messagingSenderId: "671007743747",
  appId: "1:671007743747:web:47bc733621c9deee421336",
  measurementId: "G-PJQKSKW4GH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };