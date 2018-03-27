/**
    * file: horizontalBarController.js
    * description: Controlador horizontalBar
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('horizontalBarController', horizontalBarController);
horizontalBarController.$inject= ['$rootScope', '$scope', '$http', 'lecturaService'];

function horizontalBarController($rootScope, $scope, $http, lecturaService)
{
		$scope.findDataBar1 = function findDataBar1(filtro)
		{
				var items = [];

				lecturaService.findDataBar1().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d)
						{
								if(d.ubicacion == filtro)
								{
										items.push(d);
								}
						});

						$rootScope.dataBar1List = items;
				};
	};

	 $scope.findDataBar2 = function findDataBar2(filtro)
	 {
		 	var items = [];

			lecturaService.findDataBar2().then(success, error);

			//Obtener data
			function success(data)
			{
					angular.forEach(data, function(d)
					{
							if(d.ubicacion == filtro)
							{
									items.push(d);
							}
					});

					$rootScope.dataBar2List = items;
			};
	 };

	 $scope.findDataBar3 = function findDataBar3()
   {
			var items = [];

			lecturaService.findDataBar3().then(success, error);

			//Obtener data
			function success(data)
			{
					angular.forEach(data, function(d)
					{
							if(d.ubicacion == filtro)
							{
									items.push(d);
							}
					});

					$rootScope.dataBar3List = items;
			};
	};

	//Mensaje de error
	function error(error)
	{
			console.log(error);
	};
};
