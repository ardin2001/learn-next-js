import { collection, getDocs, getFirestore } from "firebase/firestore";
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

export default GetData;
