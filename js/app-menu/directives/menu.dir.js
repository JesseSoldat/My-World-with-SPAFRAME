let menuDir = function() {
	return {
		transclude: true,
		controller: 'MenuCtrl',
		scope: {

		},
		templateUrl: './templates/menu.tpl.html'
	}
};

menuDir.$inject = [];

export default menuDir;