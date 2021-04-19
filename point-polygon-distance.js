var det3 = require("robust-determinant-3");

module.exports = function(polygon, point, orientation) {
	
	var i;
	var m = [[0,0,1],[0,0,1],[point[0], point[1],1]];
	var min_pos = Number.MAX_VALUE
	var max_neg = -Number.MAX_VALUE
	var dist
	for(i = 0; i < polygon.length; i++){
		var idx1 = i;
		var idx2 = (i + 1)%polygon.length;
		m[0][0] = polygon[idx1][0];
		m[0][1] = polygon[idx1][1];
		m[1][0] = polygon[idx2][0];
		m[1][1] = polygon[idx2][1];
		
		var det = det3(m)
		
		
		var u = [polygon[idx2][0] - polygon[idx1][0], polygon[idx2][1] - polygon[idx1][1]];
		var v = [point[0] - polygon[idx1][0], point[1] - polygon[idx1][1]];
		var dot_u = (u[0]*u[0] + u[1]*u[1])
		var test = (u[0]*v[0] + u[1]*v[1])/dot_u  // projection test
		console.log(u)
		console.log(v)
		console.log(test)
		
		if(test <= 1 && test >=0){ // point is projected on line segment
			dist = det/Math.sqrt(dot_u)
			if(dist <= 0 && dist > max_neg){
				max_neg = dist
			}else if(dist>= 0 && dist < min_pos){
				min_pos = dist
			}
		}

	}
	
		console.log(max_neg)
		console.log(min_pos)
		
	if(min_pos == Number.MAX_VALUE && max_neg == -Number.MAX_VALUE){ // sitance from corners if no projection to line segments
		var tmp 
		dist = Number.MAX_VALUE;
		for(i = 0; i < polygon.length; i++){
			var u = [point[0] - polygon[i][0], point[1] - polygon[i][1]];
			tmp = Math.sqrt(u[0]*u[0] + u[1]*u[1])
			if(tmp < dist){
				dist = tmp
			}
		}
		if(orientation == "CCW"){ // distance of a point outside is NEGATIVE
			dist = -dist;
		}
	}else if(min_pos < -max_neg){
		dist = min_pos
	}else{
		dist = max_neg
	}
	
	if(orientation == "CCW"){ // distance of a point outside is NEGATIVE
		dist = -dist;
	}
  
  return {
	result: dist
  }
}





