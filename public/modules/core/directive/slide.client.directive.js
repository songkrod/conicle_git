angular.module('core').directive('slide', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// $(element).toolbar(scope.$eval(attrs.toolbarTip));

			scope.$on('Last', function(event){
				var info = {
					index: 0,
					max: $(element).find(".slide .slide-item").length
				};

				for (var i = 0; i < info.max; i++) {
					$(element).find(".pag .pag-wrap").append($("<span></span>"));
				};

				$(element).find(".pag .pag-wrap span").eq(0).addClass("active");

				$(element).find(".pag .pag-wrap span").click(function () {
					var currentIndex = $(this).index();
					setPag(currentIndex);
					play($(element).find(".slide-pack .slide-item").eq(currentIndex));
				});

				setPag(0);
				play($(element).find(".slide-pack .slide-item").eq(0));

				function play(slideItem) {

					var oldElement = $(element).find(".slide .slide-item.active");
					slideItem.css({"z-index": 3, "opacity": 1});

					TweenMax.to(slideItem.find(".image"), .5, {"left":"0%", opacity: 1});
					TweenMax.to(slideItem.find(".svg"), .5, {opacity: 1, onComplete: function () {
						TweenMax.to(slideItem.find(".content"), .5, {"right":"0%", opacity: 1, onComplete: function () {
							clearStyle(oldElement);
							slideItem.addClass("active").css("z-index", 2);
						}});
					}});
				}

				function clearStyle(slideItem) {
					slideItem.removeClass("active");
					slideItem.find(".image").attr("style", "");
					slideItem.find(".svg").attr("style", "");
					slideItem.find(".content").attr("style", "");
				}

				function setPag(index) {
					$(element).find(".pag .pag-wrap span.active").removeClass("active").parent().find("span").eq(index).addClass("active");
				}
			});
		}
	};
});