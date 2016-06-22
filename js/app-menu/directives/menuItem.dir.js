let menuItemDir = function () {
	return {
		require: '^menuDir',
		scope: {
			label: '@',
			icon: '@',
			route: '@'

		},
		templateUrl: './templates/menuItem.tpl.html'

	}
};

menuItemDir.$inject = [];

export default menuItemDir;