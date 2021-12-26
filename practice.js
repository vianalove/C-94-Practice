var firebaseConfig = {
    apiKey: "AIzaSyCOqH3z8jarBzKDoLq3txq3_9LEbanVkok",
    authDomain: "kwitter-15f93.firebaseapp.com",
    databaseURL: "https://kwitter-15f93-default-rtdb.firebaseio.com",
    projectId: "kwitter-15f93",
    storageBucket: "kwitter-15f93.appspot.com",
    messagingSenderId: "440078673909",
    appId: "1:440078673909:web:382337ec05dc940d8ae2bc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose :"creating value"
  });
}
