
// function f1(a) {
// 	return {
// 		sum: function (b) {
// 			return a+b
// 		}		
// 	,minus: function (b) {
// 			return a-b
// 		}
// 	}
// }

function f2(a) {
	this.res = a;
	this.sum = function (a) {
		this.res += a;
		return this;
	}
	return this;
}