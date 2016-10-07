angular.module('core').directive('pageScroll', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// $(element).toolbar(scope.$eval(attrs.toolbarTip));

			$(element).click(function () {
				$('html, body').stop(true, false).animate({
					scrollTop: ($(attrs.pageScroll).offset().top - 60)
				}, 500);
			});
		}
	};
});