// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCqsabzzzCyOxSjEEL1kcFMSIbia4C0D4U",
    authDomain: "intern-task-351a9.firebaseapp.com",
    databaseURL: "https://intern-task-351a9-default-rtdb.firebaseio.com",
    projectId: "intern-task-351a9",
    storageBucket: "intern-task-351a9.appspot.com",
    messagingSenderId: "882122346044",
    appId: "1:882122346044:web:879b04f45442d5bf243d39"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);

const submit = document.getElementById('reg_btn');
submit.addEventListener('click', register)

const log = document.getElementById('log')
log.addEventListener('click', login)

// Get all our input fields
var email, password, full_name, phone;


// Set up our register function
function register(e) {

    e.preventDefault();

    email = document.getElementById('sign_email').value
    password = document.getElementById('sign_pass').value
    full_name = document.getElementById('full_name').value
    phone = document.getElementById('sign_ph').value

    console.log(full_name, email, password, phone);

    // Move on with Auth
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        }
        );

    pushData(full_name, email, password, phone);

}

// Set up our login function
function login(e) {

    e.preventDefault();

    // Get all our input fields
    email = document.getElementById('email-id').value
    password = document.getElementById('pass-id').value

    signInWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            // Signed up 
            const user = userCredential.user;

            alert('User Logged In!!')

        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        });

    updateData('login');
}

//firebase realtime data move process

const pushData = (full_name, email, password, phone) => {
    var user = auth.currentUser;

    set(ref(database, 'users/' + user.uid), {
        name: full_name,
        email: email,
        password: password,
        phone: phone,

    })
        .then(() => {
            alert("Data saved successfully!");
            document.querySelector(".signup-pop").style.display = "none";

        })
        .catch((error) => {
            alert(error);
        });
};

//firebase realtime data update process
const updateData = (last_date) => {
    var user = auth.currentUser;

    update(ref(database, 'users/' + user.uid), {
        last_date: last_date,
    })
        .then(() => {
            alert("Data update successfully!");
            document.querySelector(".login-popup").style.display = "none";

        })
        .catch((error) => {
            alert(error);
        });
};