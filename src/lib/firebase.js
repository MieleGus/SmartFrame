import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAYTjnlsNQZgNSJqodHoRqo__bwRyhWJx8",
    authDomain: "smartframe-gus.firebaseapp.com",
    databaseURL: "https://smartframe-gus.firebaseio.com",
    projectId: "smartframe-gus",
    storageBucket: "smartframe-gus.appspot.com",
    messagingSenderId: "11874624319",
    appId: "1:11874624319:web:0a53db22da084410a7e98a"
  };

firebase.initializeApp(firebaseConfig)
export default firebase
