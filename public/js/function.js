const firebaseConfig = {
	apiKey: "AIzaSyAaqBS7dTCL2FKt8x1OtFuWfA-4INw1wQA",
	authDomain: "home-ktmt.firebaseapp.com",
	databaseURL: "https://home-ktmt-default-rtdb.firebaseio.com",
	projectId: "home-ktmt",
	storageBucket: "home-ktmt.appspot.com",
	messagingSenderId: "422094746846",
	appId: "1:422094746846:web:28bfceac4789d6a5b53e4f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
$(document).ready(function(){
    var database = firebase.database();
	var Light;
	var	Fan;
	var Conditioner;
	var Speaker;

	database.ref("/Home").on("value", function(snap){
		Light = snap.val().Light;
		Fan = snap.val().Fan;
		Conditioner = snap.val().Conditioner;
		Speaker = snap.val().Speaker;

		if( Light == "On"){   
			light.src ="../img/lighton.png";
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
			document.getElementById("st1").innerHTML =Light;
		} else {
			light.src = "../img/lightoff.png";
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
			document.getElementById("st1").innerHTML =Light;
		}
		if( Fan == "On"){   
			fan.src ="../img/fanon.png";
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
			document.getElementById("st2").innerHTML =Fan;
		} else {
			fan.src ="../img/fanoff.png";
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
			document.getElementById("st2").innerHTML =Fan;
		}
		if( Speaker == "On"){ 
			speaker.src = "../img/speakeron.png";   
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
			document.getElementById("st3").innerHTML =Speaker;
		} else {
			speaker.src ="../img/speakeroff.png";
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
			document.getElementById("st3").innerHTML =Speaker;
		}
		if( Conditioner == "On"){    
			conditioner.src ="../img/conditioneron.png";
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
			document.getElementById("st4").innerHTML =Conditioner;
		} else {
			conditioner.src ="../img/conditioneroff.png"
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
			document.getElementById("st4").innerHTML =Conditioner;
		}
		
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref("/Home").child("Light");
		if(Light == "On"){    
			firebaseRef.set("Off");	
			Light = "Off";
		} else {
			firebaseRef.set("On");
			Light = "On";	
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref("/Home").child("Fan");
		if(Fan == "On"){    
			firebaseRef.set("Off");	
			Fan = "Off";
		} else {
			firebaseRef.set("On");
			Fan = "On";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref("/Home").child("Conditioner");

		if(Conditioner == "On"){    
			firebaseRef.set("Off");
			Conditioner = "Off";
		} else {
			firebaseRef.set("On");
			Conditioner = "On";
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref("/Home").child("Speaker");

		if(Speaker == "On"){    
			firebaseRef.set("Off");
			Speaker = "Off";
		} else {
			firebaseRef.set("On");
			Speaker = "On";
		}
	})
});
