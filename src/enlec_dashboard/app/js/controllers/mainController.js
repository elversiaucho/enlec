//Asignación controladores
app_enlec.controller('mainController', mainController);
mainController.$inject = ['$rootScope', '$scope'];

function mainController($rootScope, $scope)
{
		$scope.mensaje = "Welcome 11";
};
