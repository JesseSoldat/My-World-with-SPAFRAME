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

			scope.closeMenu = function() {
				scope.isOpen = false;
			};

			scope.clicked = function() {
				scope.isOpen = !scope.isOpen;

				ctrl.setOpenMenuScope(scope);
			};
			scope.isVertical = function() {
				return ctrl.isVertical();
			};
		}

	}
};

menuGroupDir.$inject = [];

export default menuGroupDir;