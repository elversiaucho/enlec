/**
    * file: lecturaService.js
    * description: Servicio para la temática lectura
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.factory('lecturaService', lecturaService);
lecturaService.$inject = ['$http', '$q', 'CONFIG'];

function lecturaService($http, $q, CONFIG)
{
		var factory = {};
		var deferred1 = $q.defer();
		var deferred2 = $q.defer();
		var deferred3 = $q.defer();

		factory.findDataBar1 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_LECTURA_1).then(result, error);

				function result(result)
				{
        		deferred1.resolve(result.data);
        };

				return deferred1.promise;
  	};

		factory.findDataBar2 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_2).then(result, error);

				function result(result)
				{
						deferred2.resolve(result.data);
				};

				return deferred2.promise;
		};

		factory.findDataBar3 = function()
		{
				return $http.get(CONFIG.ENDPOINT_LECTURA_3).then(result, error);

				function result(result)
				{
						deferred3.resolve(result.data);
				};

				return deferred3.promise;
		};

		function error(error)
		{
			deferred1.reject(error)
		};

		return factory;
};
