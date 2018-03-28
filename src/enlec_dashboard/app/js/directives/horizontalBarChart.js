/**
    * file: horizontalBarChart.js
    * description: Configuración directiva horizontalBarChart
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.directive('horizontalBarChart', function()
{
		var iFrame = {
										restrict:'A',
										replace:false,
										scope:{data:'=data'},
										templateUrl:'app/views/directives/horizontal-bar-chart.html',
										link:linkHorizontalBarChart
  								};

		return iFrame;
});

var linkHorizontalBarChart = function($scope, $element, $attrs)
{
		//Declaración de variables
	  var margin, width, height;
		var x, xMax, y0, y1, z;
		var svg, g, element, rect;
		var titleCategorys;

		//Data
		$scope.$watch('data', drawChart);

		//Dibujar gráfico
		function drawChart(data)
		{
				var chart_id = "horizontalBarChart" + $scope.$id
		    $element[0].id = chart_id;

				margin = {top:20, bottom:50, left:100, right:20};

				width = parseInt(d3.select("#" + chart_id).style("width")) - margin.left - margin.right;
				height = parseInt(d3.select("#" + chart_id).style("height")) - margin.top - margin.bottom;

				xMax = d3.max(data, function (d) { return d3.max(d.data, function (d) { return d.percentage; }); });

				titleCategorys = data.map(function(d) { return d.data.map(function(d) { return d.key}); });

				x = d3.scaleLinear().domain([0, xMax]).rangeRound([0, width]);
				y0 = d3.scaleBand().domain(data.map(function(d) { return d.categorie })).rangeRound([height, 0]).paddingInner(0.1);
		    y1 = d3.scaleBand().domain(titleCategorys[0]).rangeRound([y0.bandwidth(), 0]).paddingInner(0.05);
				z = d3.scaleOrdinal().range(["#2A489B", "#E6007E"]);

				svg = d3.select("#" + chart_id).html("").append("svg")
																			.attr("width", width + margin.left + margin.right)
																			.attr("height", height + margin.top + margin.bottom);

				g = svg.append("g")
						  .attr("transform", "translate("+[margin.left, margin.top]+")");

				element = g.append("g").selectAll("g").data(data).enter()
											.append("g")
												.attr("transform", function(d) { return "translate(" + [0, y0(d.categorie)] + ")"; });

				rect = element.selectAll("rect").data(function(d) { return d.data }).enter()
				        .append("rect")
									.attr("y", function(d) { return y1(d.key); })
									.attr("width", function(d) { return x(d.percentage); })
									.attr("height", y1.bandwidth())
									.attr("fill", function(d) { return z(d.key); });

				svg.append("g")
							 .attr("transform", "translate("+[margin.left, margin.top]+")")
							 .call(d3.axisLeft(y0));

							 svg.append("g")
			 							.attr("transform", "translate("+[margin.left, height+20]+")")
			 							.call(d3.axisBottom(x));
		};
};
