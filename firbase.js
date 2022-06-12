
            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
            import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            const firebaseConfig = {
              apiKey: "AIzaSyCtrbjCDy4Mn0pcdE3HpCN1xLchtO-7rqU",
              authDomain: "fly-emirate.firebaseapp.com",
              projectId: "fly-emirate",
              storageBucket: "fly-emirate.appspot.com",
              messagingSenderId: "740483655605",
              appId: "1:740483655605:web:46bcffb031cd2b6affdbfc"
            };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            //database
            const database = getDatabase();
      

            

            window.signInUser=()=>{
                var em = email.value;
                var passW = password.value;
                signInWithEmailAndPassword(auth, em, passW).then((credential)=>{
                console.log(credential.user);
                location.href = 'userdashboard.html'
                }).catch((error)=>{
                console.log(error.message, error.code);
                console.log(error);
                })
            }

            window.tester=()=>{
                alert('bulshit')
            }



