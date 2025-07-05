// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where  } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGctEnZ7OeBsF2Med8bEX3EuFV-xnkhw",
  authDomain: "vanlife-by-ali.firebaseapp.com",
  projectId: "vanlife-by-ali",
  storageBucket: "vanlife-by-ali.firebasestorage.app",
  messagingSenderId: "1074435871647",
  appId: "1:1074435871647:web:447adde9834d86e746e3aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")


export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return vans
}

export async function getVan(id) {
    const vanDocRef = doc(db, "vans", id)
    const snapshot = await getDoc(vanDocRef)
    const van = {
        ...snapshot.data(),
        id
    }

    return van
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const hostVans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id : doc.id
    }))
    
    return hostVans
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}



export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    return data
}
// export async function getVans(id) {
    //     const url = id ? `/api/vans/${id}` : "/api/vans"
    //     const res = await fetch(url)
    //     if (!res.ok) {
        //         throw {
            //             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans



// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }
// }