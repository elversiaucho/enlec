/**
    * file: filterController.js
    * description: Controlador filter
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('filterController', filterController);
filterController.$inject= ['$rootScope', '$scope', '$http', 'lecturaService'];

function filterController($rootScope, $scope, $http, lecturaService)
{
		//Definición de variables
		$scope.impreso = "Impreso";
		$scope.digital = "Digital";
		$scope.temaList = [{"name":"Lectura"}, {"name":"Escritura"}, {"name":"Asistencia a bibliotecas"}, {"name":"Actividades con menores"}];
		$scope.ubicacionList = [{"name":"nacional"}, {"name":"cabecera"}, {"name":"Centros poblados y rural disperso"}, {"name":"32 ciudades"}];
		$scope.rangoList = [{"name":"5 años y más"}];
		$scope.mensaje = "Filter View";

		$scope.rangoSexo= [{"name":"Seleccione..."},{"name":"Mujer"},{"name":"Hombre"}];

		$scope.findDataBar1 = function findDataBar1()
		{
			  var items1 = [];

				lecturaService.findDataBar1().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d)
						{
								if(d.ubicacion == $scope.valor)
								{
										items1.push(d);
								}
						});

						$rootScope.dataBar1List = items1;
						$scope.findDataBar2();
				};
		};

		$scope.findDataBar2 = function findDataBar2()
		{
			  var items2 = [];

				lecturaService.findDataBar2().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d)
						{
								if(d.ubicacion == $scope.valor)
								{
										items2.push(d);
								}
						});

						$rootScope.dataBar2List = items2;
				};
		};

		//Mensaje de error
		function error(error)
		{
			console.log(error);
		};
}
