import angular from 'angular';

import MenuCtrl from './controllers/menu.ctrl';

import menuDir from './directives/menu.dir';

angular
	.module('app.menu', [])
	.controller('MenuCtrl', MenuCtrl)
	.directive('menuDir', menuDir)
	;