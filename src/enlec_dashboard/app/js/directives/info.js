/**
    * file: infoChart.js
    * description: Configuración directiva info
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.directive('info', function()
{
		var iFrame = {
										restrict:'A',
										replace:false,
										scope:{data:'=data'},
										templateUrl:'app/views/directives/info.html',
										link:linkInfo
  								};

		return iFrame;
});

var linkInfo = function($scope, $element, $attrs)
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
				margin = {top:20, right:20, bottom:30, left:40};
      	width = 960 - margin.left - margin.right;
      	height = 100 - margin.top - margin.bottom;

				x = d3.scaleLinear().range([0, width]);
				y0 = d3.scaleBand().range([height, 0]).padding(0.5);
				y1 = d3.scaleBand().range([height, 0]).padding(0.5);

  			svg = d3.select($element[0]).append("svg")
      																	.attr("width", width + margin.left + margin.right)
      																	.attr("height", height + margin.top + margin.bottom)
    																 .append("g")
      												 					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    		x.domain([0, d3.max(data, function(d){ return d.value; })])
    		y0.domain(data.map(function(d) { return d.name; }));
				y1.domain(data.map(function(d) { return d.nameuno; }));

    		svg.selectAll(".barInfo").data(data).enter()
							.append("rect")
        					.attr("class", "barInfo")
        					.attr("width", function(d) { return x(d.value); })
        					.attr("y", function(d) { return y0(d.name); })
        					.attr("height", y0.bandwidth());

				svg.selectAll(".barSecundario").data(data).enter()
							.append("rect")
							    .attr("class", "barSecundario")
							    .attr("width", function(d) { return x(d.valueuno); })
							    .attr("y", function(d) { return y1(d.nameuno); })
							    .attr("height", y1.bandwidth())
									.attr("transform", "translate(0,10)");

    		svg.append("g")
        			.attr("transform", "translate(0," + height + ")")
        	 .call(d3.axisBottom(x));

    	 svg.append("g")
        		.call(d3.axisLeft(y0));
		};
};
