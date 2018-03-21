/**
    * file: exampleController.js
    * description: Controlador example
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('exampleController', exampleController);
exampleController.$inject = ['$rootScope', '$scope', '$http', 'exampleService'];

function exampleController($rootScope, $scope, $http, exampleService)
{
		//Definición de variables
		$scope.year_2012 = 2012;
    $scope.year_2013 = 2013;
		$scope.mensaje = 'Example View';	

    $scope.findDataByYear = function findDataByYear(year)
    {
				var items = [];

				exampleService.findDataExample().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d)
						{
								if(d.year == year)
								{
										items.push(d);
								}
						});

						$scope.dataExampleList = items;
 						$scope.maxValue = Math.max.apply(Math, $scope.dataExampleList.map(function(d){ return d.valueSalario; }));
				};
    };

		//Función mensaje de error
		function error(error)
		{
			console.log(error);
		};

    //Data por default
    $scope.findDataByYear($scope.year_2013);
};
