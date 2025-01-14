Ti.UI.setBackgroundColor("#000");

var myConsoles = ["Atari", "Colecovision", "Nintendo", "Sega", "Playstation", "Xbox"];

var mainScreen = Ti.UI.createWindow({
	//title: "Main screen", //Only for android
	backgroundColor: "#fff"
	
});

var myTopView = Ti.UI.createView({
	backgroundColor: "#c5122f",
	height: 50,
	top: 20
	
});

var myTitle = Ti.UI.createLabel({
	text: "Evolution Of Gaming Consoles",
	color: "white",
	font: {fontSize: 18, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
	top: 15,
	left: 30
	 
});

var pButtonView = Ti.UI.createView({
	backgroundColor: "gray",
	borderRadius: 4,
	borderWidth: 1,
	width: 100,
	height: 40,
	bottom: 25,
	left: 30
	
});

var pText = Ti.UI.createLabel({
	text: "Previous",
	color: "white",
	font: {fontSize: 20, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
	textAlign: "center"
});

var nButtonView = Ti.UI.createView({
	backgroundColor: "gray",
	borderRadius: 4,
	borderWidth: 1,
	width: 100,
	height: 40,
	bottom: 25,
	right: 30
});

var nText = Ti.UI.createLabel({
	text: "Next",
	color: "white",
	font: {fontSize: 20, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
	textAlign: "center"
});

var displayView = Ti.UI.createView({
	backgroundColor: "white",
	borderRadius: 5,
	borderColor: "gray",
	borderWidth: 3,
	width: 200,
	height: 300,
	top: 80,
	bottom: 10,
	left: 60,
	
});

var displayText = Ti.UI.createLabel({
	text: myConsoles[0],
	color: "black",
	font: {fontSize: 30, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
	textAlign: "center"
});

var loadFile = require("consoles");

mainScreen.add(myTopView, pButtonView, nButtonView, displayView);
myTopView.add(myTitle);
pButtonView.add(pText);
nButtonView.add(nText);
displayView.add(displayText);
mainScreen.open();
