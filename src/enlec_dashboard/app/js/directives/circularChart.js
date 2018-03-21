/**
    * file: circularChart.js
    * description: Configuración directiva circular-chart
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.directive('circularChart', function()
{
		var iFrame = {
										restrict:'A',
										replace:false,
										scope:{data:'=data'},
										templateUrl:'app/views/directives/circular-chart.html',
										link:linkCircularChart
  								};

		return iFrame;
});

var linkCircularChart = function($scope, $element, $attrs)
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
