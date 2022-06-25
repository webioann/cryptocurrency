import { collection, addDoc } from "firebase/firestore"
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore"; 

import { db } from "./firebase-config"; 

// create data base "users" ===================
const createDB = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
// create and update db ==========

const update_db = async () => {
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });

}
// delete doc ============
const remove_db = async () => {
    await deleteDoc(doc(db, "cities", "DC"));
}

// = read docs ===========

const getUser = async () => {
    const docSnap = await getDoc(doc(db, "cities", "SF"));
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    
}





