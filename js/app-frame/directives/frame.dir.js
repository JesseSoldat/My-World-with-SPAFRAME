let frameDir = function() {
	return {
		transclude: true,
		controller: 'FrameCtrl',
		scope: {
			title: '@',
			subtitle: '@',
			icon: '@'
		},
		templateUrl: './templates/frame.tpl.html'
	}
};

frameDir.$inject = [];

export default frameDir;