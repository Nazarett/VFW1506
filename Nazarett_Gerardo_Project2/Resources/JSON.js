//JSON

var playing= {
	"shows":{
		"theTitle": "Shows",
		"playingList": [
		{ 
			"title": "Arrow", 
			"description": "A man lost in a island for five years, finds his way back home and becomes a night vigilante to keep his city safe from crime.",
		
		},
		{
			"title": "Commando", 
			"description": "John Matrix (ex-military) does everything posible to recover his kidnap daughter from some colleges of his."
		},
		{
			"title": "Smallville",
			"description": "Story of Kal-El (Clark Kent) when he arrived earth (Smallville) before becoming the man of steel or also known as Superman."
		}
				
	]
},

	"movies":{
		"theTitle": "movies",
		 "playingList": [
		 {
		 
			"title": "Best Of The Best", 
			"description": "A group of martial artist to represent the USA taekwondo team against the Japan taekwondo team."
		
		}, 
		{
				
			"title": "Commando", 
			"description": "An ex-military (John Matrix) does everything to recover his daughter after being kidnap by ex-fellow soldiers of his."
		}, 
		{
			
			"title": "Lethal Weapon", 
			"description": "Two LAPD (Los Angeles Police Department) are partnered unexpectedly, besides there differences and problems the manage to get the job done to put the bad guys out of commision."
			}
			
		]
	}
	
};

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var list = function(){
	var seperation = 80;
	for(s in shows){
		var titleLabel = Ti.UI.createLabel({
			text:"Tv Shows & Movies",
			font: {fontSize: 20, familyFont: "Arial", fontStyle: "bold"},
			textAlign: "center",
			width: "100%",
			top: 30
			
		});
		seperation = titleLabel.top + titleLabel.height + 10;
		console.log(seperation);
		for(m in shows[s].shows.playingList)
		{
			var playingLabel = Ti.UI.createLabel({
				text: shows[s].playingList[m].name,
				details: shows[s].playingList[m].description,
				left: 30,
				right: 15,
				top: 30,
				height: 25,
				backgroundColor: "#ffffff",
				font: {fontSize: 20, familyFont: "Arial"},
				color: "#333"
				
			});
			mainWindow.add(playingLabel);
			seperation = playingLabel.top + playingLabel.height + 10;
			
		}
		mainWindow.add(titleLabel);
		seperation = playingLabel.top + playingLabel.height + 40; 
	}
};
		
playin();

mainWindow.open();


