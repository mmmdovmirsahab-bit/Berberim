import { db } from "./firebase.js";
import {
collection,getDocs,doc,getDoc,addDoc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const path = window.location.pathname;


/* ===== HOME ===== */
if(path.includes("index")){

const list=document.getElementById("barberList");

const snap = await getDocs(collection(db,"barbers"));

snap.forEach(d=>{
const b=d.data();

list.innerHTML+=`
<div class="card barber" onclick="go('${d.id}')">
<h3>${b.name}</h3>
<p>${b.salon}</p>
</div>`;
});

window.go=(id)=>{
location.href=`profile.html?id=${id}`;
}
}


/* ===== PROFILE ===== */
if(path.includes("profile")){

const id=new URLSearchParams(location.search).get("id");

const snap=await getDoc(doc(db,"barbers",id));
const b=snap.data();

profile.innerHTML=`<h2>${b.name}</h2><p>${b.bio}</p>`;

b.services.forEach(s=>{
services.innerHTML+=`${s.name} - ${s.price}₼<br>`;
});

const revSnap=await getDocs(collection(db,"reviews"));

revSnap.forEach(r=>{
if(r.data().barberId==id)
reviews.innerHTML+=`<p>${r.data().text}</p>`;
});

window.addReview=async()=>{
await addDoc(collection(db,"reviews"),{
barberId:id,
text:revText.value
});
location.reload();
}

window.book=async()=>{
await addDoc(collection(db,"bookings"),{
barberId:id,
date:date.value
});
alert("Rezerv edildi");
}
}