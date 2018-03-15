app_enlec.directive('exampleChart', function()
{
		var iFrame = {
										restrict:'A',
										replace:false,
										scope:{
														 data:'=data',
											       max:'=max'
													 },
										templateUrl:'views/directives/example-chart.html',
										controller:'chartController'
  								};

		return iFrame;
});

app_enlec.controller('chartController', chartController);

chartController.$inject = ['$scope', '$element', '$attrs'];

function chartController($scope, $element, $attrs)
{
	  //Declaración de variables
		var svg;
		var path;

		$scope.$watch('data', function(data)
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
		});
}
