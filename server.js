var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

//Accès vers twitter
var T = new Twit(config);
var idRecent = 0;

var params = {
  q: '#rhythmgame',
  count: 10,
  lang: 'en',
  tweet_mode: 'extended'
}

setInterval(requete, 2000);



function requete() {
	T.get('search/tweets', params, function(err, data, response) {
	  if(!err) {
	  	console.log("////////////////////////////////////");
		for(let i = data.statuses.length-1; i >= 0; i--){
			if(!data.statuses[i].rewteeted && data.statuses[i].id > idRecent) {
			    let text = data.statuses[i].full_text;
			    console.log(text);
			    console.log("-------------------------------------");
				idRecent = data.statuses[i].id;
			}
	    }
	  } else {
	    console.log(err);
	  }
	});
}