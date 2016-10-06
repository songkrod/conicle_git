angular.module('page').controller('ContactController', [
	'$scope',
	'$http',
	function ($scope, $http) {
		$scope.sendContact = function() {
			var d = {
				"channel": "#landing",
				"text": "Contact From " + $scope.form.email,
				"attachments" : [
					{
						"title": "Contact Information",
						"text": "Name : " + $scope.form.name + "\nCompany : " + $scope.form.company + "\nMessage : " + $scope.form.msg
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
			}).error(function(err) {console.log("ERR", err)})
		};
	}
]);