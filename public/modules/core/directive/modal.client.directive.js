angular.module('core').directive('modal', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).find(".btn-close, .overlay").click(function () {
				TweenMax.to($(element).find(".panel"), .3, {opacity: 0});
				TweenMax.to($(element).find(".overlay"), .3, {opacity: 0, onComplete: function() {
					$(element).hide();
					$(element).find("input").val("");
				}});
			});
		}
	};
});