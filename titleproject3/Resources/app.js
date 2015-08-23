



var win = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2",	
	layout: "horizontal"
});


var title = Ti.UI.createLabel({
	text: "Gallery",
	color: "orange",
	font: { fontSize: 25, fontFamily: "Times Roman", fontWeight: "bold", fontStyle: "italic"},
	top: 200,
	left: 100,	
	backgroundColor: "#0a0a0a"
	
});

var next = function(){
	title.text = "Next Page";
};

title.addEventListener("click", next);

win.add(title);
win.open();