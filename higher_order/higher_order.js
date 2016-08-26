// loop is built here for you
var loop = function(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i);
    }
  };

// write your talkToUser function here:
var talkToUser = function(collection, promptType){
	if (promptType === 'log'){
		loop(collection,function(item, index){
			console.log(index+1 + '. ' + item);
		});
	}
	else if (promptType === 'alert'){
		loop (collection, function(item, index){
			alert(index+1 + '. ' + item);
		})
	}
	else if (promptType === 'prompt'){
		loop (collection, function(item, index){
			prompt(index+1 + '. ' + item);
		})
	};
};

// Use this to test your talkToUser function:

var funFacts = [

"A moment is a medieval unit of time equal to 1.5 minutes or 1/40 of an hour.",

"It can be a protracted process but, explained simply, sake is made when rice is ground, washed and steamed.",

"A person's ABO type is determined by the presence or absence of the A or B substance on his red cells.",

"Jupiter is the fastest spinning planet in our Solar System rotating on average once in just under 10 hours. "

];

talkToUser(funFacts, 'log');