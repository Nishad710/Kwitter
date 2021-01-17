var firebaseConfig = {
      apiKey: "AIzaSyDp9hKUoKzyAXsitwoMz58Q6ElOUs32VYA",
      authDomain: "kwitter-eccd4.firebaseapp.com",
      databaseURL: "https://kwitter-eccd4-default-rtdb.firebaseio.com",
      projectId: "kwitter-eccd4",
      storageBucket: "kwitter-eccd4.appspot.com",
      messagingSenderId: "187920172274",
      appId: "1:187920172274:web:575ae11b9a9729efca7c6b",
      measurementId: "G-V50XRRZX1J"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}