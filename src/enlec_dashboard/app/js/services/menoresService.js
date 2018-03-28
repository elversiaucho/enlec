/**
    * file: menoresService.js
    * description: Servicio para la temática Menores de 5 años
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.factory('menoresService', menoresService);
menoresService.$inject = ['$http', '$q', 'CONFIG'];

function menoresService($http, $q, CONFIG)
{
		var factory = {};
		var deferred1 = $q.defer();
		var deferred2 = $q.defer();
		var deferred3 = $q.defer();
    var deferred4 = $q.defer();    

		factory.getMenoresCuadro_1_2 = function()
  	{
 				$http.get(CONFIG.ENDPOINT_MENORES_CUADRO_1_2).then(result, error);

				function result(result)
				{
        		deferred1.resolve(result.data);
        };

        function error(error)
        {
          deferred1.reject(error)
        };

				return deferred1.promise;
  	};

		factory.getMenoresCuadro_3_4 = function()
  	{
 				$http.get(CONFIG.ENDPOINT_MENORES_CUADRO_3_4).then(result, error);

				function result(result)
				{
        		deferred2.resolve(result.data);
        };

        function error(error)
        {
          deferred2.reject(error)
        };

				return deferred2.promise;
  	};

		factory.getMenoresCuadro_5_6 = function()
		{
				$http.get(CONFIG.ENDPOINT_MENORES_CUADRO_5_6).then(result, error);

				function result(result)
				{
						deferred3.resolve(result.data);
				};

				function error(error)
				{
					deferred3.reject(error)
				};

				return deferred3.promise;
		};

		factory.getMenoresCuadro_7_8 = function()
  	{
 				$http.get(CONFIG.ENDPOINT_MENORES_CUADRO_7_8).then(result, error);

				function result(result)
				{
        		deferred4.resolve(result.data);
        };

        function error(error)
        {
          deferred4.reject(error)
        };

				return deferred4.promise;
  	};

		return factory;
};
