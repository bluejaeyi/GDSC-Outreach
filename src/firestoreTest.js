import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./lib/firebase.js";

export async function testFirestore() {
  // write
  const ref = await addDoc(collection(db, "test"), {
    message: "Firestore connected ✅",
    createdAt: Date.now(),
  });
  console.log("Wrote doc:", ref.id);

  // read
  const snap = await getDocs(collection(db, "test"));
  console.log("Read docs:");
  snap.forEach((d) => console.log(d.id, d.data()));
}
