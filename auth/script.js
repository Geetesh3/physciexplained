

// Initialize Firebase
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
  const database = firebase.database();

  // Handle form submission
  document.getElementById('signupForm').addEventListener('submit', submitForm);

  function submitForm(e) {
      e.preventDefault();

      // Get values
      const name = getInputVal('name');
      const gender = getInputVal('gender');
      const address = getInputVal('address');
      const dob = getInputVal('dob');
      const schoolName = getInputVal('schoolName');
      const board = getInputVal('board');
      const username = getInputVal('username');
      const email = getInputVal('email');
      const password = getInputVal('password');

      // Save user
      saveUser(name, gender, address, dob, schoolName, board, username, email, password);
  }

  // Function to get form values
  function getInputVal(id) {
      return document.getElementById(id).value;
  }

  // Save the user to firebase
  function saveUser(name, gender, address, dob, schoolName, board, username, email, password) {
      const newUserRef = database.ref('students').push();
      newUserRef.set({
          name: name,
          gender: gender,
          address: address,
          dob: dob,
          schoolName: schoolName,
          board: board,
          username: username,
          email: email,
          password: password
      }).then(() => {
          // Show success message and redirect
          const messageDiv = document.getElementById('message');
          messageDiv.innerText = 'Signup successful! Redirecting to login page...';
          messageDiv.style.display = 'block';
          setTimeout(() => {
              window.location.href = '/auth/login.html'; // Redirect to login page after 2 seconds
          }, 2000);
      }).catch((error) => {
          // Handle errors
          const messageDiv = document.getElementById('message');
          messageDiv.innerText = 'Error: ' + error.message;
          messageDiv.style.color = 'red';
          messageDiv.style.display = 'block';
      });
}

  