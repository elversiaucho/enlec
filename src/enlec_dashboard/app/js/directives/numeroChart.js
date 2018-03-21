/**
    * file: numeroChart.js
    * description: Configuración directiva numero-chart
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.directive('numeroChart', function()
{
		var iFrame = {
										restrict:'A',
										replace:false,
										scope:{data:'=data'},
										templateUrl:'app/views/directives/numero-chart.html',
										link:linkNumeroChart
  								};

		return iFrame;
});

var linkNumeroChart = function($scope, $element, $attrs)
{
		//Declaración de variables
		var margin, width, height;
		var x, y0;
		var svg;

		//Data
		$scope.$watch('data', drawChart);

		//Dibujar gráfico
		function drawChart(data)
		{
		};
};
