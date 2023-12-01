import firebase from "firebase/app"
import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyBUBOIe7PIn-yaZUzej8eNNCcDE-imiVMY",
    authDomain: "project-language-1c19c.firebaseapp.com",
    projectId: "project-language-1c19c",
    storageBucket: "project-language-1c19c.appspot.com",
    messagingSenderId: "287566985200",
    appId: "1:287566985200:web:ba9a5d64a132b31b7c0f35"
  };


  
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export {projectFirestore}