'use strict';

// Módulo de la aplicación
var dasher = angular.module('enlec', ['ngRoute', 'ngResource']);

// Navegación
dasher.config(['$routeProvider', function ($routeProvider)
	       {
		   $routeProvider.when("/", {templateUrl:'views/dashboard.html', controller:'globalController'}).otherwise("/", {templateUrl:'views/dashboard.html'});
	       }]);

// Controlador global
dasher.controller('globalController', globalController);

globalController.$inject = ['$rootScope', '$scope', '$http'];

function globalController($rootScope, $scope, $http)
{

};
