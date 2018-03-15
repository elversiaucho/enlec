//Asignación controladores
app_enlec.controller('exampleController', exampleController);
exampleController.$inject = ['$rootScope', '$scope', '$http', 'exampleService'];

function exampleController($rootScope, $scope, $http, exampleService)
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
};
