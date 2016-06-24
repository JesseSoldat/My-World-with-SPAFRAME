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
				if (el.parent('subitem-section').length === 0) {
					scope.setSubmenuPosition();
				};

				ctrl.setOpenMenuScope(scope);
			};
			scope.isVertical = function() {
				return ctrl.isVertical();
			};
			scope.setSubmenuPosition = function() {
				var pos = el.offset();
				console.log(pos);
				$('.subitem-section').css({ 'left' : pos.left + 20, 'top' : 36});

			}
		}

	}
};

menuGroupDir.$inject = [];

export default menuGroupDir;