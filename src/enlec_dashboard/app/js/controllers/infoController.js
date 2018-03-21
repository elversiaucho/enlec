/**
    * file: infoController.js
    * description: Controlador info
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('infoController', infoController);
infoController.$inject= ['$rootScope', '$scope', '$http', 'infoService'];

function infoController($rootScope, $scope, $http, infoService)
{
	  //Definición de variables
		$scope.mensaje = "Info View";		

		$scope.findDataInfo = function findDataInfo()
		{
				var items = [];

				infoService.findDataInfo().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d)
						{
								items.push(d);
						});

						$scope.dataInfoList = items;
					};
	  };

		//Mensaje de error
		function error(error)
		{
				console.log(error);
		};
};
