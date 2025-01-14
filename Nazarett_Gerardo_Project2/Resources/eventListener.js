var sDetail = function(){
	var showsDescription = Ti.UI.createWindow({
		backgroundColor:"#f5f5f5"
	});
	
	var showsTitleView = Ti.UI.createView({
	backgroundColor: "#2f98b2",
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
		color:"#fff",
		font: {fontSize: 20, familyFont: "Times Roman", fontStyle: "bold"},
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
			backgroundColor: "#2f98b2",
			color: "#fff",
			height: 45,	
			font: {fontSize: 20, familyFont: "Times Roman"},
			width: "100%",
			bottom: 0,
			textAlign: "center"
			
		});
		
		var sBack = function(){
			showsDescription.close();
		};
		
		closeButton.addEventListener("click", sBack);
		
	showsTitleView.add(showsTitleLabel);
	showsDescription.add(showsTitleView, showsBorder,showsDetail, closeButton);
	
	showsDescription.open();
};

//Loop
for(var i= 0, j= shows.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: shows[i].title,
		detail: shows[i].description,
		hasChild: true
	});
	showsSection.add(theRow);
	theRow.addEventListener("click", sDetail);
}

var mDetail = function(){
	var moviesDescription = Ti.UI.createWindow({
		backgroundColor:"#f5f5f5"
	});
	
	var moviesTitleView = Ti.UI.createView({
	backgroundColor: "#2f98b2",
	height: 65,
	top: 0
	});
	
	var moviesBorder = Ti.UI.createView({
		backgroundColor : "#dbdbdb",
		height: 1,
		top: titleView.height + titleView.top
	});
	
	var moviesTitleLabel = Ti.UI.createLabel({
		text:this.title,
		color:"#fff",
		font: {fontSize: 20, familyFont: "Times Roman", fontStyle: "bold"},
		textAlign: "center",
		width: "100%",
		top: 30
	});
	
	var moviesDetail = Ti.UI.createLabel({
		text: this.detail,
		font: {fontSize: 16, familyFont: "Arial"},
		top:moviesBorder.height + moviesBorder.top + 35,
		left: 5,
		right: 5
		});
		
		var closeButton = Ti.UI.createLabel({
			text: "Previous",
			backgroundColor: "#2f98b2",
			color: "#fff",
			height: 45,	
			font: {fontSize: 20, familyFont: "Times Roman"},
			width: "100%",
			bottom: 0,
			textAlign: "center"
			
		});
		
		var mBack = function(){
			moviesDescription.close();
		};
		
		closeButton.addEventListener("click", mBack);
		
	moviesTitleView.add(moviesTitleLabel);
	moviesDescription.add(moviesTitleView, moviesBorder,moviesDetail, closeButton);
	
	moviesDescription.open();
};

//Loop
for(var i= 0, j= movies.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: movies[i].title,
		detail: movies[i].description,
		hasChild: true
	});
	moviesSection.add(theRow);
	theRow.addEventListener("click", mDetail);
}
