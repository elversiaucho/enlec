/**
    * file: exampleChart.js
    * description: Configuración directiva exampleChart
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.directive('exampleChart', function()
{
		var iFrame = {
										restrict:'A',
										replace:false,
										scope:{
														 data:'=data',
											       max:'=max'
													 },
										templateUrl:'app/views/directives/example-chart.html',
										link:linkExampleChart
  								};

		return iFrame;
});

var linkExampleChart = function($scope, $element, $attrs)
{
	  //Declaración de variables
		var svg;
		var path;

		//Data
		$scope.$watch('data', drawChart);

		//Dibujar gráfico
		function drawChart(data)
		{
				svg = d3.select($element[0])
									.append("div")
										.attr("class", "barChart");

				function format(number)
				{
						return "$ " + number.toString().replace(/\B(?=(\d{6})+(?!\d))/g, "'")
																					 .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
				}

				path =	svg.selectAll('div')
										.data(data).enter().append("div")
													.style("width", function(d) { return (d * 100) / $scope.max + "% "; })
													.text(function(d) { return format(d); })
													.style("text-anchor", "middle");
		};
};
