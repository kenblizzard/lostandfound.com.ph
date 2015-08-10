//I'm not quite sure whether the postProvince and postCity would be enough to tell the location of the item. Maybe we need to narrow it down... 
//location search engine of facebook or google maps, I think, would be better

//I'm not quite sure how mongodb stores newline, but I've used "\n" here...
var users = [
	{
		username: "reginein",
		password: "S$#ns0ft",
		email: "reginegracein@gmail.com",
		accountActive: true,
		dateRegistered: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
		ipAddr: "192.168.1.41",
		lastLoginDate: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
		name: "Regine Grace In",
		userProvince: "Metro Manila",
		userCity: "Caloocan City",
		mobileNo: "9152904626",
		landline: "3612345",
		inboxMsgs: [
			{
				inboxId: 6357938730600002347,
				sender: "kenblizzard",
				subject: "Starmobile Jump Neo Inquiry",
				body: "Hello there, beautiful. I'm claiming my lost phone.\n\nHope I can meet up with you ASAP.\n\nWhen will you be available? Name your prize, plus I'll be treating you to a fine-dining restaurant.\nP.S. I love you very much.",
				date: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				read: false
			}
		],
		sentMsgs: [
		
		],
		posts: [
			{
				type: "found",
				postId: 635793873060000000,
				title: "Harry Potter The Complete Series Book 1-7 (paperback)",
				category: "books, sports and hobbies",
				description: "Complete Harry potter Series. In good condition",
				photos: [ 
					"http://d2zlxto7hswzbf.cloudfront.net/images_olxph/85086399_1_1000x700.jpg"
				],
				postProvince: "Metro Manila",
				postCity: "Caloocan City",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: true
			},
			{
				type: "lost",
				postId: 635793873060000323,
				title: "Harry Potter books 7 pcs",
				category: "books, sports and hobbies",
				description: "Used Harry Potter books not mint. Sold as set. Meet ups can be in Cubao area only.",
				photos: [ 
					"http://d2zlxto7hswzbf.cloudfront.net/images_olxph/85213233_1_1000x700_rev001.jpg"
				],
				postProvince: "Abra",
				postCity: "Bangued",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: false
			},
			{
				type: "found",
				postId: 635793873060000324,
				title: "Harry Potter Gryffindor Slytherin Scarf",
				category: "clothing and accessories",
				description: "High Quality Scarves\nNot Official Merchandise\n\nAvailable \nGryffindor (2) / Slytherin (1)\n\nApprox 195cm*25cm\n\nFree Shipping Anywhere in the Philippines\n**Preferred Meet Up Places **\nWaltermart Munoz\n5th Avenue LRT\nZ Square Banawe\nJollibee Sto. Domingo Quezon City\nSM San Lazaro\nLRT1 Blumentritt until Edsa\nQuezon Avenue MRT\nTrinoma\nSM Sta Mesa\n\nFor other meet up locations, ask seller.",
				photos: [ 
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/73676015_3_1000x700.jpg",
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/73676015_4_1000x700.jpg",
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/73676015_5_1000x700.jpg",
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/73676015_6_1000x700.jpg",
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/73676015_1_1000x700.jpg",
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/73676015_2_1000x700.jpg"
				],
				postProvince: "Laguna",
				postCity: "Cabuyao",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: true
			},
			{
				type: "found",
				postId: 635793873060000327,
				title: "Starmobile Jump Neo",
				category: "mobile phones and tablets",
				description: "Call or text for faster transaction\n09068028734\n\nMeet up: SM North, Monumento, Trinoma, Waltermart Munoz",
				photos: [ 
					"http://d2zlxto7hswzbf.cloudfront.net/images_olxph/85189456_1_1000x700.jpg",
					"http://d2zlxto7hswzbf.cloudfront.net/images_olxph/85189456_2_1000x700.jpg",
					"http://d2zlxto7hswzbf.cloudfront.net/images_olxph/85189456_3_1000x700.jpg"
				],
				postProvince: "Metro Manila",
				postCity: "Manila",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: true
			}
		],
		bookmarkedPosts: [
		
		],
		subscribedSearches: [
		
		]
	},
	{
		username: "kenblizzard",
		password: "S$#ns0ft",
		email: "kenneth.bolico@gmail.com",
		accountActive: true,
		dateRegistered: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
		ipAddr: "192.168.1.42",
		lastLoginDate: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
		name: "Kenneth J. Bolico",
		userProvince: "Metro Manila",
		userCity: "Manila",
		mobileNo: "9330726232",
		landline: "36456789",
		inboxMsgs: [
		
		],
		sentMsgs: [
			{
				sentId: 6357938730600002347,
				recipient: "reginein",
				subject: "Starmobile Jump Neo Inquiry",
				body: "Hello there, beautiful. I'm claiming my lost phone.\n\nHope I can meet up with you ASAP.\n\nWhen will you be available? Name your prize, plus I'll be treating you to a fine-dining restaurant.\nP.S. I love you very much.",
				date: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1))
			}
		],
		posts: [
			{
				type: "lost",
				postId: 635793873060000456,
				title: "Starmobile Jump Neo",
				category: "mobile phones and tablets",
				description: "I've lost it somewhere in V. Mapa, Sta. Mesa Manila on my way to work. I'm willing to treat the finder to any restaurant he/she wants.",
				photos: [ 
					"http://d2zlxto7hswzbf.cloudfront.net/images_olxph/85189456_1_1000x700.jpg"
				],
				postProvince: "Metro Manila",
				postCity: "Manila",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: true
			}
		],
		bookmarkedPosts: [
		
		],
		subscribedSearches: [
		
		]
	},
	{
		username: "testuser",
		password: "",
		email: "regine@seansoftinc.com",
		accountActive: true,
		dateRegistered: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
		ipAddr: "124.107.151.126",
		lastLoginDate: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
		name: "Test User",
		userProvince: "Rizal",
		userCity: "Angono",
		mobileNo: "9330726232",
		landline: "3612345",
		inboxMsgs: [
		
		],
		sentMsgs: [
		
		],
		posts: [
			{
				type: "found",
				postId: 635793873060012345,
				title: "Harry Potter books",
				category: "books, sports and hobbies",
				description: "Harry Potter Order of the Phoenix & Deathly Hallows",
				photos: [ 
					"http://d2nc7ssst0481o.cloudfront.net/images_olxph/343487_1_1000x700.jpg",
					"http://d2nc7ssst0481o.cloudfront.net/images_olxph/84761856_1_1000x700.jpg"
				],
				postProvince: "Abra",
				postCity: "Bangued",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: true
			},
			{
				type: "lost",
				postId: 635793873060012346,
				title: "Harry Potter Slytherin Scarf High Quality Scarves\nNot Official Merchandise",
				category: "clothing and accessories",
				description: "High Quality Scarves\nNot Official Merchandise\n\nAvailable \nGryffindor (2) / Slytherin (1)\n\nApprox 195cm*25cm\n\nFree Shipping Anywhere in the Philippines\n**Preferred Meet Up Places **\nWaltermart Munoz\n5th Avenue LRT\nZ Square Banawe\nJollibee Sto. Domingo Quezon City\nSM San Lazaro\nLRT1 Blumentritt until Edsa\nQuezon Avenue MRT\nTrinoma\nSM Sta Mesa\n\nFor other meet up locations, ask seller.",
				photos: [ 
					"http://d2zlxto7hswzbf.cloudfront.net/images_olxph/84786446_4_1000x700.jpg"
				],
				postProvince: "Laguna",
				postCity: "Cabuyao",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: true
			},
			{
				type: "found",
				postId: 635793873060012347,
				title: "Souvenir from Warner Brothers Studio Tour London - The Making of Harry Potter (6 pages). Passport - Making of Harry Potter ",
				category: "books, sports and hobbies",
				description: "Souvenir from Warner Brothers Studio Tour London - The Making of Harry Potter (6 pages). \n\nP50 each or 4 for P150. \nMon to Fri - meet up in MOA\nSat to Sun - meet up in Tiendesitas, Megamall or Greenhills area\n\nText- 0917- 8930130",
				photos: [ 
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/85484614_1_1000x700.jpg",
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/85484614_2_1000x700.jpg",
					"http://d3sczgjfkoadtq.cloudfront.net/images_olxph/85484614_3_1000x700.jpg"
				],
				postProvince: "Metro Manila",
				postCity: "Pasig",				
				datePosted: getDate(new Date(2015, 1, 1), new Date(2015, 5, 1)),
				postActive: true
			}
		],
		bookmarkedPosts: [
		
		],
		subscribedSearches: [
		
		]
	}
];

function getDate(start, end){
	if (!start) {
		console.log('No start date provided');
		throw 'failed to find a start date';
	}

	if (!end) {
		console.log('No end date provided');
		throw 'failed to find an end date';
	}	
	var newdate = new Date(start.getTime() + (Math.floor(Math.random() * end.getMonth()) + 1)-50 * (end.getTime() - start.getTime())-100);
	console.log(newdate);
	return newdate;
}

var MongoClient = require('mongodb').MongoClient,
	config = require('../config/config');
	url = config.dburl;
	
// Connect to the db
MongoClient.connect(url, function(err, db) {
	if(err) {
		console.log('Failed to connect: ', err);
		return;
	}

	usersCollection = db.collection('users');
	
	usersCollection.drop();
	
	console.log("We are connected to " + url);


	usersCollection.insert(users, function(err,data) {
		if(err) {
			console.log(err);
		}
		console.log('success');
	})
});
