let FrameCtrl = function($scope) {

	$scope.$on('menu-item-click', function (evt, data) {
		$scope.routeString = data.route;
	})
};

FrameCtrl.$inject = ['$scope'];

export default FrameCtrl;