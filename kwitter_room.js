
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
   document.getElementById("user_name").innerHTML= "Welcome " + user_name + "🙂🫵";
   
   function addRoom(){
         room_name= document.getElementById("room_name").value;
   
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
   
         localStorage.setItem("room_name", room_name);
         window.location="kwitter_page.html";
   }
   
   function redirectToRoomName(name){
         localStorage.setItem("room_name", name);
         window.location="kwitter_page.html";
   }
   
   
   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
         });});}
   getData();
   

