angular.module('page').controller('ConicleController', [
	'$scope',
	'$http',
	function ($scope, $http) {
		$scope.showModal = function ($id) {
			var modal = $("#" + $id);
			modal.show();
			animateModal(modal);
		}

		function animateModal(modal) {
			TweenMax.to(modal.find(".overlay"), .3, {opacity: 1, onComplete: function () {
				TweenMax.fromTo( modal.find(".panel"), 1, { scale: 0.5, opacity: 0}, { scale: 1, opacity: 1, ease:Elastic.easeOut, onComplete:function() {
				}});
			}});
		}

		$scope.requestDemo = function() {
			var d = {
				"channel": "#request-demo",
				"text": "Contact From " + $scope.demo.email,
				"attachments" : [
					{
						"title": "Contact Information",
						"text": "Name : " + $scope.demo.name + "\nCompany : " + $scope.demo.company + "\nPhone : " + $scope.demo.phone
					}
				]
			};

			sendSlack(d, $("#request-demo"));
		};

		$scope.requestPDF = function() {
			var d = {
				"channel": "#request-pdf",
				"text": "Contact From " + $scope.pdf.email,
				"attachments" : [
					{
						"title": "Contact Information",
						"text": "Name : " + $scope.pdf.name + "\nCompany : " + $scope.pdf.company + "\nPhone : " + $scope.pdf.phone
					}
				]
			};

			sendSlack(d, $("#request-pdf"));
		};

		function sendSlack(d, modal) {
			var alert = $("<div id='alert'><div class='box'><img src='public/images/success.png'><span>Sent</span></div></div>");

			$http({
				url: "https://hooks.slack.com/services/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",
				data: d,
				method: 'POST',
				headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(function(data) {

				$scope.demo.name = "";
				$scope.demo.email = "";
				$scope.demo.company = "";
				$scope.demo.phone = "";

				$scope.pdf.name = "";
				$scope.pdf.email = "";
				$scope.pdf.company = "";
				$scope.pdf.phone = "";

				$("body").append(alert);
				TweenMax.to($("#alert"), .3, {opacity: 1, onComplete: function () {
					TweenMax.fromTo( $("#alert .box"), 0.3, { scale: 0.5, opacity: 0}, { scale: 1, opacity: 1, ease:Elastic.easeOut, onComplete:function() {
						TweenMax.to($("#alert"), .3, {delay: 1, scale: 0.5, opacity: 0, onComplete: function () {
							$("#alert").remove();
							$("#request-demo .overlay").click();
						}});
					}});
				}});
			}).error(function(err) {console.log("ERR", err)});
		}
	}
]);