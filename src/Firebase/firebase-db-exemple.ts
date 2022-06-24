import { collection, addDoc } from "firebase/firestore"
import { doc, setDoc, deleteDoc } from "firebase/firestore"; 

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

// Add a new document in collection "cities"
const update_db = async () => {
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });

}
const remove_db = async () => {
    await deleteDoc(doc(db, "cities", "DC"));
}








