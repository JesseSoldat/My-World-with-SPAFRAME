import angular from 'angular';


import $ from 'jquery';
import _ from 'underscore';



//app modules
import './app-core/index';
import './app-frame/index';
import './app-menu/index';


angular
	.module('app', ['app.core','app.frame','app.menu']);
