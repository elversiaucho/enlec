/**
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Servicios
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
//Servicio para el componente gráfico exampleChart
app_enlec.service('exampleService', service);
service.$inject = ['$http'];

function service($http)
{
		var endpointExampleChart = 'app/models/json/exampleChart/dataExampleChart.json';

  	this.findDataExample = function ()
  	{
  		return $http.get(endpointExampleChart);
  	};
};
