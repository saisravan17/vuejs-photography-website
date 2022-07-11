import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6zLbiNXBLyoytFMIbHpB1f62fxnUacPA",
  authDomain: "portfolio-29452.firebaseapp.com",
  projectId: "portfolio-29452",
  storageBucket: "portfolio-29452.appspot.com",
  messagingSenderId: "351914270829",
  appId: "1:351914270829:web:eea5beab67ef4ffc8a5f64"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const projectFirestore = firebase.firestore()

export{
  firebaseApp,
  auth,
  projectFirestore,
};

createApp(App).use(router).mount('#app')