import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyBWfp_DhWL4Sj9PZWbE7IIANoX1zZWaRv8",
  authDomain: "react-demo-4e282.firebaseapp.com",
  databaseURL: "https://react-demo-4e282.firebaseio.com",
  projectId: "react-demo-4e282",
  storageBucket: "react-demo-4e282.appspot.com",
  messagingSenderId: "53944064673"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
