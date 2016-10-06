angular.module('core').directive('pageScroll', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// $(element).toolbar(scope.$eval(attrs.toolbarTip));

			$(element).find("ul li a").click(function () {
				var tmpID = $(this).attr("href");

				$('html, body').stop(true, false).animate({
					scrollTop: ($(tmpID).offset().top - 70)
				}, 500);
			})
		}
	};
});