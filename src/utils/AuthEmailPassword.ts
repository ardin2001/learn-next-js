import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import App from "./db/firestore";
const auth = getAuth(App);

async function CreateAccount(data: any) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    return { status: true, data: user };
  } catch (error: any) {
    const errorMessage = error.message;
    return { status: false, data: errorMessage };
  }
}

async function LoginAccount(data: any) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    return { status: true, data: user };
  } catch (error: any) {
    const errorMessage = error.message;
    return { status: false, data: errorMessage };
  }
}

async function GetData(collectionName: string) {
  
}

export { CreateAccount,LoginAccount };
