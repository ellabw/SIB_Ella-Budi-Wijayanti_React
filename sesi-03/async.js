// const fetchTweets = async () => {
// const response = await
// fetch ("https://api.faketweet.com/tweets");

// const tweets = await response.json();
// let tweets = tweets.filter(tweet => tweet.stars > 50);
// tweets = tweets.filter(tweet => tweet.rts > 50);
// console.log(tweets);
// }

import fetch from 'node-fetch';

(async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');

	let tweets = await response.json();
	// tweets = tweets.filter(tweet => tweet.stars > 50);
	// tweets = tweets.filter(tweet => tweet.rts > 50);
	console.log(tweets.length);
})();