import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import App from "@/utils/db/firestore";
import * as argon2 from "argon2";

const DB = getFirestore(App);

async function PostDataUser(
  collectionName: string,
  addData: any,
  type: string
) {
  if (typeof addData == "string") {
    addData = JSON.parse(addData);
  }
  const q = query(
    collection(DB, collectionName),
    where("email", "==", addData.email)
  );
  const querySnapshot = await getDocs(q);
  const data: any = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  if (data.length == 0) {
    if (type == "credentials") {
      const hash = await argon2.hash(addData.password);
      addData.password = hash;
    }
    const docRef = await addDoc(collection(DB, collectionName), addData);
    return { status: true, data: { id: docRef.id, ...addData } };
  }
  return { status: false, data: null };
}

async function GetDataUserById(collectionName: string, id: string) {
  const docRef = doc(DB, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.data()) {
    const data = { id: docSnap.id, ...docSnap.data() };
    return { status: true, data };
  }
  return { status: false, data: null };
}

async function UpdateDataUser(
  collectionName: string,
  id: string,
  dataUpdate: any
) {
  await updateDoc(doc(DB, collectionName, id), dataUpdate);
}

async function LoginUser(collectionName: string, dataLogin: any) {
  if (typeof dataLogin == "string") {
    dataLogin = JSON.parse(dataLogin);
  }
  const q = query(
    collection(DB, collectionName),
    where("email", "==", dataLogin.email)
  );
  const querySnapshot = await getDocs(q);
  const data: any = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  if (data.length > 0) {
    return { status: true, message: "Login Success", data };
  }
  return { status: false, message: "Login Failed", data: null };
}

export { PostDataUser, GetDataUserById, UpdateDataUser, LoginUser };
