

import Firebase  from "firebase";

class FirebaseConfig {

  constructor()
  {
      // Initialize Firebase
      this.config = {
          apiKey: "AIzaSyAB-cj9kvBB57hnPdCt59KIvDfOXl_-3Aw",
          authDomain: "neuralfactura.firebaseapp.com",
          databaseURL: "https://neuralfactura.firebaseio.com",
          projectId: "neuralfactura",
          storageBucket: "neuralfactura.appspot.com",
          messagingSenderId: "375228386275"
      };

      this.ref = Firebase.initializeApp(config);
      //consola
      console.log("Conexion establecida", this.ref.toString());
  }

    //autenticar usuario
    getAutentication(email, password)
    {
        //realizar la autenticacion
        this.ref.auth().signInWithEmailAndPassword(email, password).then(function(data) {
            return true
        }).catch(function(error) {

            return false;
        });

    }
}

