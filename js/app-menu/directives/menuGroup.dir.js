let menuGroupDir = function () {
	return {
		require: '^menuDir',
		transclude: true,
		scope: {
			label: '@',
			icon: '@',
			route: '@'

		},
		templateUrl: './templates/menuGroup.tpl.html'

	}
};

menuGroupDir.$inject = [];

export default menuGroupDir;