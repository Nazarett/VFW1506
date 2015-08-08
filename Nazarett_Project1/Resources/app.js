Ti.UI.setBackgroundColor("#000");

var mainScreen = Ti.UI.createWindow({
	backroundColor: "red"
	
});

var myFirstLook = Ti.UI.createView({
	backroundColor:("#333"),
	borderRadius:5,
	borderWidth:1,
	width:100,
	height:100
});
mainScreen.add(myFirstLook);
mainScreen.open();
