let menuCtrl = function($scope, $rootScope) {

	$scope.isVertical = true;
	$scope.showMenu = true;

	this.getActiveElement = function() {
		return $scope.activeElement;
	};
	this.setActiveElement = function(el) {
		$scope.activeElement = el;
	};
	this.isVertical = function() {
		return $scope.isVertical;
	};
	this.setRoute = function(route) {
		$rootScope.$broadcast('menu-item-click', {route: route})
	};
	this.setOpenMenuScope = function(scope) {
		$scope.OpenMenuScope = scope;

	};
	$scope.toggleMenuOrientation = function() {
		if ($scope.OpenMenuScope) {
			$scope.OpenMenuScope.closeMenu();
		}
		$scope.isVertical = !$scope.isVertical;

		$rootScope.$broadcast('menu-orientation-change', { isMenuVertical: $scope.isVertical});
	};
	$scope.$on('menu-show', function (evt, data) {
		
		$scope.showMenu = data.show;
	});
};

menuCtrl.$inject = ['$scope', '$rootScope'];

export default menuCtrl;