var ppDist = require("./point-polygon-distance.js")

var polygon = [ [0,0],
				[20,0],
				[10,10],
				[0,10]
				];
		
var point = [11,11];

console.log(ppDist(polygon,point,"CCW"))		
				