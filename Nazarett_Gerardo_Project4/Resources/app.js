Titanium.UI.setBackgroundColor('#000');

var mainScreen = Ti.UI.createWindow({
	backgroundColor: "#fff"
});


var topView = Ti.UI.createView({
	backgroundColor: "#b4b8b8",
	height: 80,
	top: 0
	
});

var title = Ti.UI.createLabel({
	text: "Final Project",
	color: "#181d1d",
	font: {fontSize: 20, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
	top: 30,
	
	 
});

var buttonView = Ti.UI.createView({
	backgroundColor: "#44d7d5",
	height: topView.height + 30,
	top: title.top + 40
	
});

var fText = Ti.UI.createLabel({
	text: "Fotos",
	color: "white",
	font: {fontSize: 30, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
	textAlign: "center"

});

var images = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"fotos");
var myFotos = images.getDirectoryListing();

mainScreen.add(topView,buttonView);
topView.add(title);
buttonView.add(fText);
mainScreen.open();
