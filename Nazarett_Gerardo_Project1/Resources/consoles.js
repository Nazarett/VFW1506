var myConsoles = ["Atari", "Colecovision", "Nintendo", "Sega", "Playstation", "Xbox"];

var nextDisplay = function(){
	displayText.hide();
	
	var consolesLabel = Ti.UI.createLabel({
		text: myConsoles[1],
		color: "black",
		font: {fontSize: 30, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
		textAlign: "center"
	});
	
	mainScreen.add(consolesLabel);
};

nButtonView.addEventListener("click", nextDisplay);

