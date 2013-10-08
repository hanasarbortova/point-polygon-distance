point-polygon-distance
==========
Compute distance of a point from an arbitrary shaped polygon

## Example

```javascript
var ppDist = require("./point-polygon-distance.js")

var polygon = [ [0,0],
				[20,0],
				[10,10],
				[0,10]
				];
		
var point = [-5,5];

console.log(ppDist(polygon,point,"CCW"))
```

## Install

    npm install point-polygon-distance
    
## API

### `require("point-polygon-distance")(polygon,point,"CCW")`

Compute distance of a point from an arbitrary shaped polygon (either perpendicular
distance from a line segment (if projection exists) or distance from the nearest vertex)

* `polygon` list of vertices (CW or CCW order)
* `point` a point to be tested
* `orientation` either "CW" or "CCW" indicating the vertices list orientation


**Returns** A positive number indicating the point-polygon distance for point outside polygon.
Negative number for a point inside polygon(absolute value is equal to the distance to the nearest edge)

## Credits
(c) 2013 Hana Sarbortova. MIT License