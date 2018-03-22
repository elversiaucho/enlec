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
	var svg;
	var path;
	var path1;
	var data;
	var columns;

	//Data
	$scope.$watch('data', drawChart);

	//Dibujar gráfico
	function drawChart(data)
	{
		  data = [
								{ "title" : "Indicador", "valuePorcentaje":70.4, "area":"Total Nacional", "valueArea":42326, "unidad":"miles"}

						];

		columns = ['date', 'close'];

		var span = d3.select($element[0])
		    .selectAll('div')
		    .data(data)
		    .enter()
		    .append('p')
		    .text("Hola")
				.attr("class","div");




	};
};
