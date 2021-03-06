angular.module('page').controller('ContactController', [
	'$scope',
	'$http',
	function ($scope, $http) {
		$scope.sendContact = function() {
			var alert = $("<div id='alert'><div class='box'><img src='public/images/success.png'><span>Sent</span></div></div>");
			var d = {
				"channel": "#landing",
				"text": "Contact From " + $scope.form.email,
				"attachments" : [
					{
						"title": "Contact Information",
						"text": "Name : " + $scope.form.name + "\nCompany : " + $scope.form.company + "\nPhone : " + $scope.form.phone + "\nMessage : " + $scope.form.msg
					}
				]
			};

			$http({
				url: "https://hooks.slack.com/services/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",
				data: d,
				method: 'POST',
				headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(function(data) {
				console.log("OK", data);

				$scope.form.name = "";
				$scope.form.email = "";
				$scope.form.company = "";
				$scope.form.msg = "";

				$("body").append(alert);
				TweenMax.to($("#alert"), .3, {opacity: 1, onComplete: function () {
					TweenMax.fromTo( $("#alert .box"), 1, { scale: 0.5, opacity: 0}, { scale: 1, opacity: 1, ease:Elastic.easeOut, onComplete:function() {
						TweenMax.to($("#alert"), .3, {delay: 1, scale: 0.5, opacity: 0, onComplete: function () {
							$("#alert").remove();
						}});
					}});
				}});
			}).error(function(err) {console.log("ERR", err)})
		};
	}
]);