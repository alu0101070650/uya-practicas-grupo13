var firebaseConfig = {
  apiKey: "AIzaSyARHzKpgB9nUTbU5E3IW6K6fotRxLnGKQ8",
  authDomain: "banco-tiempo-fe841.firebaseapp.com",
  databaseURL: "https://banco-tiempo-fe841.firebaseio.com",
  projectId: "banco-tiempo-fe841",
  storageBucket: "banco-tiempo-fe841.appspot.com",
  messagingSenderId: "262764826548",
  appId: "1:262764826548:web:c3defccd2e5ea1c9ae6ce1",
  measurementId: "G-92CR92L8DM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const container = document.getElementById("root");

const db = firebase.firestore();
/*
db.collection("anuncios")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const p = document.createElement("p");
      p.innerHTML = `Anuncio ${doc.id}: ${doc.data().title}<br>${
        doc.data().details
      }`;
      container.appendChild(p);
    });
  });
*/

db.collection("anuncios").onSnapshot((querySnapshot) => {
  container.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const p = document.createElement("p");
    p.innerHTML = `Anuncio ${doc.id}: ${doc.data().title}<br>${
      doc.data().details
    }`;

    const a = document.createElement("a");
    a.innerHTML = "Eliminar";
    a.href = "#";
    a.addEventListener("click", () => {
      doc.ref
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    });

    container.appendChild(p);
    container.appendChild(a);
  });
});

const form = document.getElementById("crear-anuncio");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const details = document.getElementById("details").value;
  db.collection("anuncios")
    .add({
      title: title,
      details: details,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
