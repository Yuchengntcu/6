var rgbled;

var color;



function color(p)
{
if (p == "p12")
	color = '#ff0000'
else if (p == "p1")
	color = '#ff6600'
else if (p == "p4")
	color = '#ffff00'
else if (p == "p8")
	color = '#000099'
else if (p == "p9")
	color = '#6600cc'
else 
	color = '#33ccff'

}

var newId = sessionStorage.getItem("NAME");
boardReady({board: 'Smart', device: newId, transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rgbled = getRGBLedCathode(board, 15, 12, 13)
  rgbled.setColor(color);

});







