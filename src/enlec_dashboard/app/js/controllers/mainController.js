/**
    * file: mainController.js
    * description: Controlador main
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('mainController', mainController);
mainController.$inject= ['$rootScope', '$scope', '$http'];

function mainController($rootScope, $scope, $http)
{
    //Definición de variables
		$scope.mensaje = "Main View";
};
