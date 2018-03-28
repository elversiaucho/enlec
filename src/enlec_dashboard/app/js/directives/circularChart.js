/**
 * file: circularChart.js
 * description: Configuración directiva circular-chart
 * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
 * version: 1.0.0
 * date: 28/03/2018
 * company: Departamento Administrativo Nacional de Estadística - DANE
 **/
app_enlec.directive('circularChart', function() {
    var iFrame = {
        restrict: 'A',
        replace: false,
        scope: {
            data: '=data'
        },
        templateUrl: 'app/views/directives/circular-chart.html',
        link: linkCircularChart
    };

    return iFrame;
});

var linkCircularChart = function($scope, $element, $attrs) {
    var svg;
    var desagergaSexo = false;
    var colorTotal = "orange"

    $scope.$watch('data', drawChart);

    function drawChart(data) {

            /////data de prueba
      data_P = [
    /*{
       "filtro": "nacional",
       "category": "totalPersonas",
       "pregunta": "Total personas de 5 a�os y m�s*",
       "respuesta": "Total",
       "total": 42326,
       "pTotal": 100,
       "hombres": 20732,
       "pHombres": 49,
       "mujeres": 21594,
       "pMujeres": 51
     },*/
    /* {
       "filtro": "nacional",
       "category": "articulos",
       "pregunta": " Art�culos o documentos acad�micos en medios digitales",
       "respuesta": "Sí",
       "total": 11943,
       "pTotal": 28.2,
       "hombres": 5758,
       "pHombres": 27.8,
       "mujeres": 6186,
       "pMujeres": 28.6
     },*/

    /* {
       "filtro": "nacional",
       "category": "blogs",
       "pregunta": "Blogs o foros en internet",
       "respuesta": "Sí",
       "total": 6980,
       "pTotal": 16.5,
       "hombres": 3500,
       "pHombres": 16.9,
       "mujeres": 3481,
       "pMujeres": 16.1
     },
     
     {
       "filtro": "nacional",
       "category": "correos",
       "pregunta": "Correos electr�nicos",
       "respuesta": "Sí",
       "total": 16887,
       "pTotal": 39.9,
       "hombres": 8338,
       "pHombres": 40.2,
       "mujeres": 8549,
       "pMujeres": 39.6
     },
     
     {
       "filtro": "nacional",
       "category": "paginasWeb",
       "pregunta": "P�ginas web",
       "respuesta": "Sí",
       "total": 16344,
       "pTotal": 38.6,
       "hombres": 8116,
       "pHombres": 39.1,
       "mujeres": 8228,
       "pMujeres": 38.1
     },*/

    {
        "filtro": "nacional",
        "category": "redesSociales",
        "pregunta": "Redes sociales (Facebook, Twitter, Instagram, WhatsApp, etc.)",
        "respuesta": "Sí",
        "total": 27096,
        "pTotal": 64,
        "hombres": 13100,
        "pHombres": 63.2,
        "mujeres": 13996,
        "pMujeres": 64.8
    },

    {
        "filtro": "nacional",
        "category": "noticias",
        "pregunta": "Noticias o art�culos en medios digitales (revistas, peri�dicos, aplicaciones, etc.)",
        "respuesta": "Sí",
        "total": 12569,
        "pTotal": 29.7,
        "hombres": 6307,
        "pHombres": 30.4,
        "mujeres": 6262,
        "pMujeres": 29
    },

    {
        "filtro": "nacional",
        "category": "librosDigitales",
        "pregunta": "Libros digitales (total o parcialmente)",
        "respuesta": "Sí",
        "total": 6652,
        "pTotal": 15.7,
        "hombres": 3199,
        "pHombres": 15.4,
        "mujeres": 3454,
        "pMujeres": 16
    },

    {
        "filtro": "nacional",
        "category": "documentosdeTrabajo",
        "pregunta": "Documentos de trabajo en Internet",
        "respuesta": "Sí",
        "total": 7275,
        "pTotal": 17.2,
        "hombres": 3785,
        "pHombres": 18.3,
        "mujeres": 3490,
        "pMujeres": 16.2

    }
];
            //////

        const width = 960,
            height = 600,
            chartRadius = height / 2 - 40; // radio del grafico
        // var circuloData=[], data=[];

        if (typeof(data) != 'undefined') {

            if (typeof(data[0].hombres) != "undefined")
                desagergaSexo = true;
            colorTotal = "gray";
        }

        //console.log(circuloData=data);
        svg = d3.select($element[0]).append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        var tooltip = d3.select($element[0]).append('div')
            .attr('class', 'tooltip');
        var keys = data.map(function(d, i) {
            return d.pregunta;
        });

        const numArcs = keys.length;
        const PI = Math.PI,
            arcMinRadius = width / (numArcs * 4),
            arcPadding = 5,
            labelPadding = -5,
            numTicks = 15;


        var scale = d3.scaleLinear()
            .domain([0, 100 * 1.333]) //el dominio va hasta el valor que representa el 100% d3.max(data, d => d.value)
            .range([0, 2 * PI]);


        var ticks = scale.ticks(numTicks).slice(0, -1);

        //number of arcs

        const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;

        var arc = d3.arc()
            .innerRadius(function(d, i) {
                return getInnerRadius(i)
            }) //radio interno de cada arco
            .outerRadius(function(d, i) {
                return getOuterRadius(i)
            }) //radio externo de cada arco
            .startAngle(0)
            .endAngle(function(d, i) {
                return scale(d)
            }) //fin del angulo segun el dato

        var radialAxis = svg.append('g')
            .attr('class', 'r axis')
            .selectAll('g')
            .data(data)
            .enter().append('g');

        radialAxis.append('text') //texto 100%
            .attr('x', function() {
                return -((arcWidth + arcPadding) * numArcs + arcMinRadius)
            })
            .attr('y', 0)
            .text("100%");

        radialAxis.append('text') //texto de las opciones
            .attr('x', labelPadding)
            .attr('y', function(d, i) {
                return -getOuterRadius(i) + arcPadding
            })
            .text(function(d) {
                return d.pregunta
            });



        //data arcs
        var arcs = svg.append('g') //dibuja los arcs
            .attr('class', 'data')
            .selectAll('path')
            .data(data)
            .enter().append('path')
            .attr('class', 'arc')
            .style('fill', colorTotal);


        arcs.transition()
            .delay(function(d, i) {
                return i * 200
            })
            .duration(1000)
            .attrTween('d', arcTween);

        arcs.on('mousemove', showTooltip);
        arcs.on('mouseout', hideTooltip);
        ////////////




        //////////////////////////////////////
        //nuevos arcos de contorno
        //data arcs
        var arc3;
        for (var i = numArcs - 1; i >= 0; i--) {

            arc3 = d3.arc()
                .innerRadius(function() {
                    return getInnerRadius(i)
                })
                .outerRadius(function() {
                    return getOuterRadius(i)
                }) //-arcWidth/2
                .startAngle(0) //converting from degs to radians
                .endAngle(4.73);


            svg.append("path")
                .attr("d", arc3)
                .style('fill', "none")
                .style("stroke", "gray");
        }
        ///se muestran los arcos de filtro sexo
        if (desagergaSexo) {
            var arcHombres = d3.arc()
                .innerRadius(function(d, i) {
                    return getInnerRadius(i)
                })
                .outerRadius(function(d, i) {
                    return getOuterRadius(i) - (arcWidth / 2)
                })
                .startAngle(0)
                .endAngle(function(d, i) {
                    return scale((d.pTotal * d.hombres) / d.total)
                });

            arcs2 = svg.append('g') //dibuja los arcs
                .selectAll('path')
                .data(data)
                .enter().append('path')
                .attr('class', 'arc')
                .style('fill', "#0080ff");
            //.attr('d', arcSex);

            arcs2.transition()
                .delay(function(d, i) {
                    return i * 200
                })
                .duration(1000)
                .attrTween('d', arcTween)
                .attr('d', arcHombres);
            /***************************/ ///
            var arcMujeres = d3.arc()
                .innerRadius(function(d, i) {
                    return getInnerRadius(i) + (arcWidth / 2)
                })
                .outerRadius(function(d, i) {
                    return getOuterRadius(i)
                })
                .startAngle(0)
                .endAngle(function(d, i) {
                    return scale((d.pTotal * d.mujeres) / d.total)
                });
            //******
            arcs2 = svg.append('g') //dibuja los arcs
                .selectAll('path')
                .data(data)
                .enter().append('path')
                .attr('class', 'arc')
                .style('fill', "#bf00ff");
            //.attr('d', arcSex);

            arcs2.transition()
                .delay(function(d, i) {
                    return i * 200
                })
                .duration(1000)
                .attrTween('d', arcTween)
                .attr('d', arcMujeres);
        } else {
            var textP = svg.append('g') //texto de los porcentajes de cada opción
                .selectAll('text')
                .data(data)
                .enter().append('text')
                .attr('x', 5)
                .attr('y', function(d, i) {
                    return -getOuterRadius(i) + (arcWidth + arcPadding - 10)
                })
                .text(function(d, i) {
                    return d.pTotal + " %"
                })
                .style("fill", "white")
                .attr('font-size', 14);
        }

        function arcTween(d, i) {

            var interpolate = d3.interpolate(0, d.pTotal);
            return function(t) {
                return arc(interpolate(t), i)
            };

        }

        function showTooltip(d) {
            tooltip.style('left', (d3.event.pageX +10) + 'px') //
                .style('top',(d3.event.pageY -25 )+ 'px') //d3.event.pageY
                .style('display', 'inline-block')
                .html(d.pTotal + " %"); //
        }

        function hideTooltip() {
            tooltip.style('display', 'none');
        }

        function rad2deg(angle) {
            return angle * 180 / PI;
        }

        function getInnerRadius(index) {
            return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
        }

        function getOuterRadius(index) {
            return getInnerRadius(index) + arcWidth;
        }

    };
}