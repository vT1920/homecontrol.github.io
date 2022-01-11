firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  // User is signed in.
    document.getElementById("logined_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("user-id").innerHTML =email_id;
    }
    } 
    else {
      // No user is signed in.
      document.getElementById("logined_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
});

function signIn(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .catch(function(error) {
    window.alert("Error: Wrong email or password. Please try again !!" );
  });
}
function signUp(){
  const email = document.getElementById("email_field").value
  const password = document.getElementById("password_field").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      window.alert("Error: Please fill in email and password" );
    });
}
function signOut(){
  firebase.auth().signOut();
  window.alert("Sign out");
  }
function forgotPass(){
  var auth =firebase.auth()
  var userEmail = document.getElementById("email_field").value;
  firebase.auth().sendPasswordResetEmail(userEmail)
  .then(() => {
    firebase.auth().signOut();
    window.alert("Email has been sent to you.Please check and verify.");
  })
  .catch((error) => {
  window.alert("Error: Please fill in email ");
  });
}