console.log("Unit testing with Node Unit Module");

module.exports = {

	add: function(val1, val2){
		checkArguments(val1, val2);
		return val1 + val2;
	},

	subtract: function(val1, val2){
		checkArguments(val1, val2);
		return val1 - val2;
	},
	multiply :function(val1, val2){
		checkArguments(val1, val2);
		return val1 * val2;
	},

	devide : function(val1, val2){
		checkArguments(val1, val2);
		return val1 / val2;
	},

	addAsync : function(val1,val2, callback){

		setTimeout(function(){

			var error = checkArguments(val1, val2);

			if(error){
				callback(error, null);
			} else {
				callback(null, val1+val2);
			}

		}, 1000);

	}
}

function checkArguments(val1, val2){

	if(isNaN(val1)){
		throw new Error("Invalid Agr1");
	}
	if(isNaN(val2)){
		throw new Error("Invalid Agr2");
	}

	return;
}