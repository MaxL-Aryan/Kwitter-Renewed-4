//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD6EWjHvvnQmNBXj5oncqJuT7ptjL_x1iM",
      authDomain: "kwitter-ae778.firebaseapp.com",
      databaseURL: "https://kwitter-ae778-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae778",
      storageBucket: "kwitter-ae778.appspot.com",
      messagingSenderId: "989607291373",
      appId: "1:989607291373:web:b1c419f09fb0fd8a919fe4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function leave()
{
      window.location="kwitter_room.html";
}