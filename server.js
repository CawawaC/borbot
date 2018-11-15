var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));


var T = new Twit(config);

// T.post('statuses/update', { status: 'Look, I am tweeting!' }, function(err, data, response) {
//   console.log(data)
// });



var params = {
  q: '#aadn',
  count: 10,
  result_type: 'recent',
  lang: 'fr',
  tweet_mode: 'extended'
}

T.get('search/tweets', params, function(err, data, response) {
  if(!err) {
	for(let i = 0; i < data.statuses.length; i++){
		if(!data.statuses[i].rewteeted) {
		    let text = data.statuses[i].full_text;
		    console.log(text);
		    console.log("-------------------------------------");
		}
    }
  } else {
    console.log(err);
  }
});