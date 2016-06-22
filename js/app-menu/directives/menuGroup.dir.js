let menuGroupDir = function () {
	return {
		require: '^menuDir',
		transclude: true,
		scope: {
			label: '@',
			icon: '@',
			route: '@'

		},
		templateUrl: './templates/menuGroup.tpl.html',
		link: function(scope, el, attr, ctrl) {
			scope.isOpen = false;

			scope.clicked = function() {
				scope.isOpen = !scope.isOpen;
			}
			scope.isVertical = function() {
				return true;
			}
		}

	}
};

menuGroupDir.$inject = [];

export default menuGroupDir;