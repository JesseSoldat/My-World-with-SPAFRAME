let FrameCtrl = function($scope, $window, $rootScope) {

	$scope.isMenuVertical = true;
	$scope.isMenuVisible = true;
	$scope.isMenuButtonVisible = true;

	$scope.$on('menu-item-click', function (evt, data) {
		$scope.routeString = data.route;
	});
	$scope.$on('menu-orientation-change', function (evt, data) {
		$scope.isMenuVertical = data.isMenuVertical;
	});
	$($window).on('resize.framework', function() {
		$scope.$apply(function () {
			checkWidth();
		})
	});
	$scope.$on('$destroy', function () {
		$($window).off('resize.framework');
	});

	let checkWidth = function () {
		var width = Math.max($($window).width(), $window.innerWidth);
		// console.log(width);
		$scope.isMenuVisible = (width > 768);
		$scope.isMenuButtonVisible = !$scope.isMenuVisible;

	};
	$scope.menuButtonClicked = function() {
		
		$scope.isMenuVisible =!$scope.isMenuVisible;

		broadcastMenuState();

	};
	let broadcastMenuState = function () {
		
		$rootScope.$broadcast('menu-show', {show: $scope.isMenuVisible});
		
	};
};

FrameCtrl.$inject = ['$scope','$window','$rootScope'];

export default FrameCtrl;