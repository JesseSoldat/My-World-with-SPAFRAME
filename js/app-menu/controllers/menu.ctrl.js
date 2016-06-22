let menuCtrl = function($scope) {

	this.getActiveElement = function() {
		return $scope.activeElement;
	};
	this.setActiveElement = function(el) {
		$scope.activeElement = el;
	};
};

menuCtrl.$inject = ['$scope'];

export default menuCtrl;