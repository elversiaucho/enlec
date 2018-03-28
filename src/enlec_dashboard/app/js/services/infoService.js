/**
    * file: infoService.js
    * description: Servicio para la temática info
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.factory('infoService', infoService);
infoService.$inject = ['$http', '$q', 'CONFIG'];

function infoService($http, $q, CONFIG)
{
		var factory = {};
		var deferred = $q.defer();

  	factory.findDataInfo = function()
  	{
  			$http.get(CONFIG.ENDPOINT_INFO_1).then(result, error);

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
