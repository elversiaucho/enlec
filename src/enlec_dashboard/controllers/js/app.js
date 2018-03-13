'use strict';

//Módulo de la aplicación
var app_enlec = angular.module('enlec', ['ngRoute', 'ngResource']);

//Navegación
app_enlec.config(['$routeProvider', function ($routeProvider)
{
	$routeProvider.when("/", {templateUrl:'views/dashboard.html', controller:'globalController'}).otherwise("/", {templateUrl:'views/dashboard.html'});
}]);

//Controlador global
app_enlec.controller('globalController', globalController);

/**
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Servicios
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
//Servicio para el componente gráfico exampleChart
app_enlec.service('exampleService', ['$http', function($http)
{
		var endpointExampleChart = 'models/json/exampleChart/dataExampleChart.json';

  	this.findDataExample = function ()
  	{
  		return $http.get(endpointExampleChart);
  	};
}]);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

globalController.$inject = ['$rootScope', '$scope', '$http', 'exampleService'];

function globalController($rootScope, $scope, $http, exampleService)
{
		$scope.year_2012 = 2012;
    $scope.year_2013 = 2013;

    $scope.findDataByYear = function findDataByYear(year)
    {
				var itemsUniversitario = [];

				exampleService.findDataExample().then(function(response)
				{
		 				angular.forEach(response.data, function(value)
			 			{
				 				if(value.year == year)
				 				{
					 				itemsUniversitario.push(value);
				 				}
			 			});

						$scope.dataExampleList = itemsUniversitario;
						$scope.maxValue = Math.max.apply(Math, $scope.dataExampleList.map(function(item){ return item.valueSalario; }));
		 		},
				function(error)
	 			{
			 		$scope.status = 'No se pudo cargar la data para el servicio exampleService (findDataExample): ' + error.message;
	 			});
			};

			//Data por default
			$scope.findDataByYear($scope.year_2013);
}
