angular.module('page').controller('CustomerController', [
	'$scope',
	function ($scope) {
		$scope.clients = {
			"ais" : {
				"color": "#78c400",
				"logo": "public/images/logo-cus-ais.png",
				"image": "public/images/cus-ais.jpg",
				"text": {
					"title": "All-in-One AIS HR development platform",
					"detail1": "Implementing all Conicle learning platforms; ONDEMAND and CONNECT, to develop and grow all teams in the company from AIS HQ to all departments and branches all around the country.",
					"detail2": "AIS or Advanced Info Service Public Co., Ltd. is Thailand's largest mobile phone operator with more than 40 million subscribers providing full length of digital products and services."
				}
			},
			"unilever" : {
				"color": "#17375e",
				"logo": "public/images/logo-cus-unilever.png",
				"image": "public/images/cus-unilever.jpg",
				"text": {
					"title": "Workshop On-the-Go",
					"detail1": "Applying Conicle ONDEMAND and LIVE to broadcast company's workshop to business partners around the country via web and mobile device anywhere anytime.",
					"detail2": "Unilever is one of the world's largest consumer goods company. Its products include food, beverages, cleaning agents and personal care products and more."
				}
			},
			"pacrim" : {
				"color": "#d90202",
				"logo": "public/images/logo-cus-pacrim.png",
				"image": "public/images/cus-pacrim.jpg",
				"text": {
					"title": "The Hybrid Learning",
					"detail1": "Utilizing the capabilities of Conicle ONDEMAND to enhance learning experience by combining offline workshop with online self-learning",
					"detail2": "PacRim Group is a leading HR consulting partner of organizations providing new services to match the dynamic & fast-changing needs for leadership development and growth."
				}
			},
			"click4clever" : {
				"color": "#00d2a7",
				"logo": "public/images/logo-cus-click4clever.png",
				"image": "public/images/cus-click4clever.jpg",
				"text": {
					"title": "Tutors on your hand",
					"detail1": "Using Conicle ONDEMAND to be ClickforClever's online course marketplace integrated with payment system to sell and provide online courses directly to their customers.",
					"detail2": 'ClickforClever.com is one of the most popular online tutoring website among high school students in Thailand providing variety of courses with the concept "Online Edutainment".'
				}
			}
		}
	}
]);