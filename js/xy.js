var XY = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

XY.prototype.toString = function() {
	return this.x+","+this.y;
}

XY.prototype.plus = function(xy) {
	return new this.constructor(this.x+xy.x, this.y+xy.y);
}

XY.prototype.minus = function(xy) {
	return new this.constructor(this.x-xy.x, this.y-xy.y);
}

XY.prototype.clone = function() {
	return new this.constructor(this.x, this.y);
}
