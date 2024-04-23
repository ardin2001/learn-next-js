import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import App from "@/utils/db/firestore";

const DB = getFirestore(App);

async function GetData(collectionName: string) {
  const querySnapshot = await getDocs(collection(DB, collectionName));
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return data;
}

async function PostData(collectionName: string, addData: any) {
  const q = query(
    collection(DB, collectionName),
    where("name", "==", addData.name)
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  console.log('addData', addData)
  if (data.length == 0) {
    const docRef = await addDoc(collection(DB, collectionName), addData);
    return { status: true, data: { id: docRef.id, ...addData } };
  }
  return { status: false, data: null };
}

async function PostDataFirebase(collectionName: string, data: any) {
  const docRef = await addDoc(collection(DB, collectionName), data);
  console.log("Document written with ID: ", docRef.id);
  return docRef;
}

async function DeleteData(collectionName: string, id: string) {
  await deleteDoc(doc(DB, collectionName, id));
}

async function GetDataDetail(collectionName: string, id: string) {
  const docRef = doc(DB, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.data()) {
    const data = { id: docSnap.id, ...docSnap.data() };
    return { status: true, data };
  }
  return { status: false, data: null };
}

async function UpdateData(collectionName: string, id: string, dataUpdate: any) {
  await updateDoc(doc(DB, collectionName, id), dataUpdate);
}

export {
  GetData,
  PostData,
  DeleteData,
  GetDataDetail,
  UpdateData,
  PostDataFirebase,
};
