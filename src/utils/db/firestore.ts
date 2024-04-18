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
  apiKey: 'AIzaSyDnrjdN93QHpMeIbI89e96-VcsBaYMnAvo',
  authDomain: 'project-belajar-next-js.firebaseapp.com',
  projectId: 'project-belajar-next-js',
  storageBucket: 'project-belajar-next-js.appspot.com',
  messagingSenderId: '1022375553707',
  appId: '1:1022375553707:web:c8f5fe232f01e97921a5ee'
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

export default App;