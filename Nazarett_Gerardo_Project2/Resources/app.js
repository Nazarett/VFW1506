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
			desription: "A group of martial artist to represent the USA taekwondo team against the Japan taekwondo team."}, 
		
		{
			title: "Commando", 
			description: "An ex-military (John Matrix) does everything to recover his daughter after being kidnap by ex-fellow soldiers of his."}, 
		
		{
			title: "Lethal Weapon", 
			description: "Two LAPD (Los Angeles Police Department) are partnered unexpectedly, besides there differences and problems the manage to get the job done to put the bad guys out of commision."}];
		

//Table view and details

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var titleView = Ti.UI.createView({
	backgroundColor: "#fff",
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
	font: {fontSize: 20, familyFont: "Arial", fontStyle: "bold"},
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

var detail = function(){
	var showsDescription = Ti.UI.createWindow({
		backgroundColor:"#f5f5f5"
	});
	
	var showsTitleView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 65,
	top: 0
	});
	
	var showsBorder = Ti.UI.createView({
		backgroundColor : "#dbdbdb",
		height: 1,
		top: titleView.height + titleView.top
	});
	
	var showsTitleLabel = Ti.UI.createLabel({
		text:this.title,
		font: {fontSize: 20, familyFont: "Arial", fontStyle: "bold"},
		textAlign: "center",
		width: "100%",
		top: 30
	});
	
	var showsDetail = Ti.UI.createLabel({
		text: this.detail,
		font: {fontSize: 16, familyFont: "Arial"},
		top:showsBorder.height + showsBorder.top + 35,
		left: 5,
		right: 5
		});
		
		var closeButton = Ti.UI.createLabel({
			text: "Previous",
			backgroundColor: "#333",
			color: "#fff",
			height: 45,	
			font: {fontSize: 20, familyFont: "Arial"},
			width: "100%",
			bottom: 0,
			textAlign: "center"
			
		});
		
		var back = function(){
			showsDescription.close();
		};
		
		closeButton.addEventListener("click", back);
		
	showsTitleView.add(showsTitleLabel);
	showsDescription.add(showsTitleView, showsBorder,showsDetail, closeButton);
	
	showsDescription.open();
};

for(var i= 0, j= shows.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: shows[i].title,
		detail: shows[i].description,
		hasChild: true
	});
	showsSection.add(theRow);
	theRow.addEventListener("click", detail);
}



for(var i= 0, j= movies.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: movies[i].title,
		hasChild: true
	});
	moviesSection.add(theRow);
}

var tvSections = [showsSection, moviesSection];

content.setData(tvSections);

titleView.add(titleLabel);
mainWindow.add(titleView, border, content);
mainWindow.open();

