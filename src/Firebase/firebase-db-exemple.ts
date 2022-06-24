import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase-config"; 

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
