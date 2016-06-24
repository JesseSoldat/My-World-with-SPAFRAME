import angular from 'angular';

import $ from 'jquery';

import FrameCtrl from './controllers/frame.ctrl';
import frameDir from './directives/frame.dir';

angular
	.module('app.frame', [])
	.controller('FrameCtrl', FrameCtrl)
	.directive('frameDir', frameDir);