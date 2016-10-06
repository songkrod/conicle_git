angular.module('core').directive('slideItem', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// $(element).toolbar(scope.$eval(attrs.toolbarTip));
			
			if (scope.$last){
				scope.$emit('Last');
			}
		}
	};
});