
var info = function(){
	var infoWindow = Ti.UI.createWindow({
		title: this.text,
		backgroundColor: "#fff"
		
	});
	
	var infoText = Ti.UI.createLabel({
		text: this.details,
		top: 30,
		left: 15,
		right: 15
	});
	infoWindow.add(infoText);
	newWindow.openWindow(infoWindow);
};

var list = function(){
	var seperation = 30;
	for(s in playing){
		var titleLabel = Ti.UI.createLabel({
			text: playing[s].theHeader,
			left: 0,
			right: 0,
			top: seperation,
			height: 25,
			backgroundColor: "#1e1a1a",
			font: {fontSize: 20, familyFont: "Times Roman"},
			textAlign: "center",
			color: "orange"
			
		});
		seperation = titleLabel.top + titleLabel.height + 10;
		console.log(seperation);
		for(m in playing[s].nameList){ 
			var playingLabel = Ti.UI.createLabel({
				text: playing[s].nameList[m].title,
				details: playing[s].nameList[m].description,
				left: 0,
				right: 0,
				top: seperation,
				height: 25,
				backgroundColor: "#fff",
				borderColor: "orange",
				font: {fontSize: 20, familyFont: "Times Roman"},
				textAlign: "center",
				color: "#1e1a1a"
				
			});
			mainWindow.add(playingLabel);
			seperation = playingLabel.top + playingLabel.height + 10;
			playingLabel.addEventListener("click", info );
			
		}
		mainWindow.add(titleLabel);
		seperation = playingLabel.top + playingLabel.height + 40; 
	}
};
		
list();