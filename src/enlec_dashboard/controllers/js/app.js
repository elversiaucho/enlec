//Módulo de la aplicación
var app_enlec = angular.module('enlec', ['ui.router', 'ngResource']);

//Navegación
app_enlec.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
                                    url: '/',
                                    views:
                                    {
                                        '':
                                            {
                                                templateUrl:'views/main.html',
                                                controller:'mainController'
                                            },
                                        'exampleView@main':
                                        {
                                            templateUrl:'views/subviews/exampleView.html',
                                            controller:'exampleController'
                                        },
                                        'infoView@main':
                                        {
                                            templateUrl:'views/subviews/infoView.html',
                                            controller:'infoController'
                                        },
                                        'header@main':
                                        {
                                            templateUrl:'views/template/header.html'
                                        },
                                        'footer@main':
                                        {
                                            templateUrl:'views/template/footer.html'
                                        }
                                    }
                        });
}]);

//Asignación controladores
app_enlec.controller('mainController', mainController);
app_enlec.controller('exampleController', exampleController);
app_enlec.controller('infoController', infoController);

//Injección controladores
mainController.$inject = ['$scope'];
exampleController.$inject = ['$rootScope', '$scope', '$http', 'exampleService'];
infoController.$inject= ['$scope'];

//Definición controladores
function infoController($scope)
{
		$scope.ms = "Información";
};

function mainController($scope)
{
		$scope.mensaje = "Welcome 10";
};

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
