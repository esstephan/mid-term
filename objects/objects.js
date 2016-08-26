// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:

twitter.stockPrice = 18;

// 2. Bracket notation:

twitter['ceo']='Jack Dorsey';

// 3. Practice on your own:

var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";

twitter.address =twittersAddress;

// 4. Array:

twitter.tweets = ["Hi I'm tweeting", "silly cat meme", "yay SB32!"];

// 5. Loop through array:

for (i=0; i<twitter.tweets.length; i++){
	console.log(twitter.tweets[i]);
}

// 5. Invoke countCharacters:

twitter.countCharacters(twitter.tweets[1]);
//14

// 6. Loop through twitter object:

for (var key in twitter){
	console.log(key);
}
