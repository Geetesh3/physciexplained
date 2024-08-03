
const firebaseConfig = {
    apiKey: "AIzaSyDcwiDVr2jyTBuxs4tQu6OHvaUfL6NdJFI",
    authDomain: "physciexplained-40f47.firebaseapp.com",
    databaseURL: "https://physciexplained-40f47-default-rtdb.firebaseio.com",
    projectId: "physciexplained-40f47",
    storageBucket: "physciexplained-40f47.appspot.com",
    messagingSenderId: "724802637102",
    appId: "1:724802637102:web:6e796aa81beb6d78113ebf",
    measurementId: "G-VY64VRCS3Z"
};

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Handle form submission
  document.getElementById('loginForm').addEventListener('submit', loginUser);

  function loginUser(e) {
      e.preventDefault();

      // Get values
      const email = getInputVal('loginEmail');
      const password = getInputVal('loginPassword');

      // Sign in user
      auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // Redirect to dashboard or another page
              window.location.href = 'dashboard.html'; // Example redirect
          })
          .catch((error) => {
              // Handle Errors here.
              const loginMessageDiv = document.getElementById('loginMessage');
              loginMessageDiv.innerText = 'Error: ' + error.message;
              loginMessageDiv.style.display = 'block';
          });
  }

  // Function to get form values
  function getInputVal(id) {
      return document.getElementById(id).value;
  }