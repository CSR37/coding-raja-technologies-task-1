let firebaseConfig = {
  apiKey: "AIzaSyBdPqUHDBIeBFlct7iJkAYerBT6AWBBgd8",
  authDomain: "blogging-website-29ffc.firebaseapp.com",
  projectId: "blogging-website-29ffc",
  storageBucket: "blogging-website-29ffc.appspot.com",
  messagingSenderId: "62786293677",
  appId: "1:62786293677:web:4a31792feb198e81dd1b24"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();