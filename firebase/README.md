# Práctica Firebase

[Visitar la pagina](https://alu0101070650.github.io/uya-practicas-grupo13/firebase/index.html)

Se ha creado un pequeño ejemplo de como usar `Firebase` para proporcionar un backend sencillo a una app web sin necesidad de escribir código, en este ejemplo se puede visualizar, crear y eliminar ofertas de servicios para el `Banco de Tiempo`.

Lo primero que tenemos que hacer es importar las librerías necesarias para interactuar con `Firebase`, en este caso usaremos `firebase-analytics` (para proporcionar analiticas) y `firebase-firestore` (para interactuar con la base de datos Firestore). También importamos el archivo `app.js` que contendrá el código de nuestra app.

``` html
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script defer src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#available-libraries -->
  <script defer src="https://www.gstatic.com/firebasejs/7.2.3/firebase-analytics.js"></script>
  <script defer src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>

  <script defer src="app.js"></script>
```

En `app.js` inicializamos la app usando el siguiente fragmento de código:

``` javascript
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

const db = firebase.firestore();
```

Ahora ya podemos hacer uso de la base de datos, en este caso usaremos el metodo `collection` para obtener una referencia a una colección de la base de datos, y luego usaremos el metodo `onSnapshot` para registrar un `Event Listener` que será llamado cada vez que haya algún cambio en la colección que nos interese, que en este caso es la colección `anuncios`.

``` javascript
db.collection("anuncios").onSnapshot((querySnapshot) => {
    // querySnapshot contiene las referencias de los documentos de la colección
});
```

A continuación vemos una imagen de la base de datos inicial, que contiene dos anuncios.

![antes de la insercion](images/antes.png)

Después de añadir un anuncio mediante nuestra web app esté se muestra automaticamente tanto en la web app como en la consola de `Firebase`.

![despues de la insercion](images/despues.png)
