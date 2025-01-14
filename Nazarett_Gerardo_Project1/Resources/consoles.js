

var nextDisplay = function(){
	displayText.hide();
	
	var cConsolesLabel = Ti.UI.createLabel({
		text: myConsoles[1],
		color: "black",		font: {fontSize: 30, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
		textAlign: "center"
	});

	mainScreen.add(cConsolesLabel);
	
};

var previousDisplay = function(){
	displayText.hide();
	
	var pConsolesLabel = Ti.UI.createLabel({
		text: myConsoles[5],
		color: "black",
		font: {fontSize: 30, familyFont: "times roman", fontWeight: "bold", fontStyle: "Italic"},
		textAlign: "center"
	});
	
	mainScreen.add(pConsolesLabel);
	
};

nButtonView.addEventListener("click", nextDisplay);
pButtonView.addEventListener("click", previousDisplay);

