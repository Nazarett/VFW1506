//JSON

var playing= {
	"shows":{
		"theHeader": "Shows",
		"nameList": [
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
				
	],
	
		"footer": "On Tv"
},

	"movies":{
		"theHeader": "Movies",
		 "nameList": [
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
			
		],
		
		"footer": "Coming Soon"
	}
	
};

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#cccccc"
});

var newWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var bringFile = require("eventListener");

newWindow.open();