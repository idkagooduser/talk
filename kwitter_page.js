
const firebaseConfig = {
apiKey: "AIzaSyDj6vgsn9T_A2JPASxCWgxEKb0p7j6X1Ds",
authDomain: "letschat-fa8c1.firebaseapp.com",
databaseURL: "https://letschat-fa8c1-default-rtdb.firebaseio.com",
projectId: "letschat-fa8c1",
storageBucket: "letschat-fa8c1.appspot.com",
messagingSenderId: "513725214449",
appId: "1:513725214449:web:c563aac5338deff6690350"   
      
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      Like:0
     }) ;

     document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

