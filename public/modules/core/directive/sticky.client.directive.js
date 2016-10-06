angular.module('core').directive('stickyNav', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// $(element).toolbar(scope.$eval(attrs.toolbarTip));

			$(window).scroll(function (event) {
				var scroll = $(window).scrollTop();
				if ( scroll > 0 ) {
					if ( !$(element).hasClass("showed") ) {
						$(element).addClass("showed")
					}
				} else {
					if ( $(element).hasClass("showed") ) {
						$(element).removeClass("showed")
					}
				}

			});
		}
	};
});