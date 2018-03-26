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
					  	{
								"title":"PORCENTAJE DE PERSONAS DE 5 AÑOS Y MÁS QUE LEYERON EN SOPORTE DIGITAL - TOTAL NACIONAL",
								"ubicacion":"Total Nacional",
								"values":
													[
														{"key":"nacional", "valuePorcentaje":70.4, "unidadPorcentaje":"%", "valueMiles":42326, "unidadMiles":"(miles)"},
														{"key":"mujeres", "valuePorcentaje":30.4, "unidadPorcentaje":"%", "valueMiles":20000, "unidadMiles":"(miles)"},
														{"key":"hombres", "valuePorcentaje":40.0, "unidadPorcentaje":"%", "valueMiles":22326, "unidadMiles":"(miles)"}
													]
							}
					 ];



		var divPrincipal = d3.select($element[0])
		    										.selectAll('divPrincipal')
		    												.data(data).enter()
		    														.append('div')
																				.attr("class","contenedor-grupo-datos");

		var div1 = divPrincipal.selectAll('div1')
								 	.data(data).enter()
								 		.append('div')
											.attr("class","contenedor-porcentaje");

								div1.selectAll('h2')
											.data(data).enter()
												.append('h2')
													.attr("class","titulo-grafica")
												.append("span")
													.text(function(d) { return d.title });

							 div1.selectAll('h3')
						 	 			.data(data).enter()
						 					.append("h3")
													.attr("class", "Porcentaje-general")
											.append("span")
											  .text(function(d) { return data[0].values[0].valuePorcentaje + " %"}); //"70,4 %"

							 div1.selectAll('p')
									.data(data).enter()
										.append("p")
											.attr("class", "titulo-detalle-valor-general")
									  .append("span")
											 .text(function(d) { return d.ubicacion });


						div1.selectAll('p1')
								.data(data).enter()
									.append("p")
										 .attr("class", "texto-detalle-valor-general")
								  .append("span")
										.text(function(d) { return data[0].values[0].valueMiles + " miles" }); //42.326 (miles)



	var div2 = divPrincipal.selectAll('div2')
								.data(data).enter()
						  		 .append('div')
											.attr("class","row");



	var div2_1	=	div2.selectAll('div2_1')
							  	 .data(data).enter()
											.append('div')
												.attr("class","col-xs-6 col-md-6 col-lg-6");

						  div2_1.selectAll('h3')
									.data(data).enter()
										.append("h3")
											.attr("class", "Porcentaje-general-variable-1")
									  .append("span")
											.text(function(d) { return data[0].values[1].valuePorcentaje + " %"}); //30,4 %



							div2_1.selectAll('p')
								 	.data(data).enter()
										.append("p")
											.attr("class", "titulo-detalle-valor-general")
										.append("span")
										  .text(function(d) { return data[0].values[1].key }); //MUJERES





							 div2_1.selectAll('p1')
									 .data(data).enter()
											.append("p")
										 		.attr("class", "texto-detalle-valor-general")
											.append("span")
												.text(function(d) { return data[0].values[1].valueMiles + " (miles)" }); //20.000 (miles)


 var div2_2	=	div2.selectAll('div2_2')
								.data(data).enter()
						  		.append('div')
										.attr("class","col-xs-6 col-md-6 col-lg-6");



				  div2_2.selectAll('h3')
								.data(data).enter()
									.append("h3")
										.attr("class", "Porcentaje-general-variable-2")
								 .append("span")
										.text(function(d) { return data[0].values[2].valuePorcentaje + " %"}); //40,0 %


					  div2_2.selectAll('p')
							  		.data(data).enter()
											.append("p")
												.attr("class", "titulo-detalle-valor-general")
								 		  .append("span")
											 .text(function(d) { return data[0].values[2].key }); //"HOMBRES"


						div2_2.selectAll('p1')
								 .data(data).enter()
							 		 .append("p")
										 .attr("class", "texto-detalle-valor-general")
									 .append("span")
									   .text(function(d) { return data[0].values[2].valueMiles + " (miles)" }); //22.326 (miles)

	};
};
