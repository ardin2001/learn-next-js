// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyD0cAw10iaDxLC6NSZKctoASNWTVFvs7_I",
  authDomain: "backend-learning-next-js.firebaseapp.com",
  projectId: "backend-learning-next-js",
  storageBucket: "backend-learning-next-js.appspot.com",
  messagingSenderId: "79623402938",
  appId: "1:79623402938:web:a153cad3a3b9b2a77ed983"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

export default App;