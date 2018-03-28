
/**
    * file: temporalService.js
    * description: Servicio para la temática example
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.factory('temporalService', temporalService);
temporalService.$inject = ['$http', '$q', 'ENDPOINT'];

function temporalService($http, $q, ENDPOINT)
{
		var factory = {};
		var deferred = $q.defer();

  	factory.findCircularData = function ()
  	{
  			$http.get(ENDPOINT.LECTURA_CUADRO_1).then(result, error);

				function result(result)
				{
						deferred.resolve(result.data);
				};

				return deferred.promise;
  	};

		function error(error)
		{
			deferred.reject(error)
		};

		return factory;
};
