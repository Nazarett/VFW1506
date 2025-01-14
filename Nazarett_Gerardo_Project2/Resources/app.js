//Main Backgraound

Ti.UI.setBackgroundColor("#000");

//Data

var shows = [
		{
			title: "Arrow", 
			description: "A man Oliver Quenn was lost in a island for five years, found his way back home to become a night vigilante to protect his city from those who threatened it."}, 

		{
			title: "Flash", 
			description: "Barry Allen was struck by lighting and gain powers to become the fastest man alive and now he uses his power to protect his city from bad guys, he is THE FLASH."}, 

		{
			title: "Smallville",
			description: "Story of Kal-El (Clark Kent) when he arrived earth (Smallville) before becoming the man of steel or also known as Superman."}];

var movies = [
		{
			title: "Best Of The Best", 
			description: "A group of martial artist to represent the USA taekwondo team against the Japan taekwondo team and brig the gold home."}, 
		
		{
			title: "Commando", 
			description: "An ex-military (John Matrix) does everything to recover his daughter after being kidnap by ex-fellow soldiers of his."}, 
		
		{
			title: "Lethal Weapon", 
			description: "Two LAPD (Los Angeles Police Department) are partnered unexpectedly, besides there differences and problems the manage to get the job done to put the bad guys out of commision."}];
		

//variables

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var titleView = Ti.UI.createView({
	backgroundColor: "#2f98b2",
	height: 65,
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor : "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text:"Tv Shows & Movies",
	color: "#fff",
	font: {fontSize: 20, familyFont: "Times Roman", fontStyle: "bold"},
	textAlign: "center",
	width: "100%",
	top: 30
	
});

var content = Ti.UI.createTableView({
	top: border.height + border.top
});

if(Ti.Platform.name === "iPhone OS"){
	content.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var showsSection = Ti.UI.createTableViewSection({
	headerTitle: "Shows",
	footerTitle: "On Tv"
});

var moviesSection = Ti.UI.createTableViewSection({
	headerTitle: "Movies",
	footerTitle: "Coming Soon"
});


var tvSections = [showsSection, moviesSection];

content.setData(tvSections);

var bringFile = require("eventListener");

//add and open
titleView.add(titleLabel);
mainWindow.add(titleView, border, content);
mainWindow.open();

