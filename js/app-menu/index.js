import angular from 'angular';

import MenuCtrl from './controllers/menu.ctrl';

import menuDir from './directives/menu.dir';
import menuItemDir from './directives/menuItem.dir';
import menuGroupDir from './directives/menuGroup.dir';

angular
	.module('app.menu', [])
	.controller('MenuCtrl', MenuCtrl)
	.directive('menuDir', menuDir)
	.directive('menuItemDir', menuItemDir)
	.directive('menuGroupDir', menuGroupDir)
	;