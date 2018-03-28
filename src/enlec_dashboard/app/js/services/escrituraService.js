/**
    * file: escrituraService.js
    * description: Servicio para la temática Escritura
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.factory('escrituraService', escrituraService);
escrituraService.$inject = ['$http', '$q', 'CONFIG'];

function escrituraService($http, $q, CONFIG)
{
		var factory = {};
		var deferred1 = $q.defer();
		var deferred2 = $q.defer();
		var deferred3 = $q.defer();
    var deferred4 = $q.defer();
    var deferred5 = $q.defer();
    var deferred6 = $q.defer();
    var deferred7 = $q.defer();
    var deferred8 = $q.defer();

		factory.getEscrituraCuadro1 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_1).then(result, error);

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

    factory.getEscrituraCuadro2 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_2).then(result, error);

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

    factory.getEscrituraCuadro3 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_3).then(result, error);

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

    factory.getEscrituraCuadro4 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_4).then(result, error);

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

    factory.getEscrituraCuadro5 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_5).then(result, error);

				function result(result)
				{
        		deferred5.resolve(result.data);
        };

        function error(error)
        {
          deferred5.reject(error)
        };

				return deferred5.promise;
  	};

    factory.getEscrituraCuadro1 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_6).then(result, error);

				function result(result)
				{
        		deferred6.resolve(result.data);
        };

        function error(error)
        {
          deferred6.reject(error)
        };

				return deferred6.promise;
  	};

    factory.getEscrituraCuadro7 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_7).then(result, error);

				function result(result)
				{
        		deferred7.resolve(result.data);
        };

        function error(error)
        {
          deferred7.reject(error)
        };

				return deferred7.promise;
  	};

    factory.getEscrituraCuadro8 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_ESCRITURA_CUADRO_8).then(result, error);

				function result(result)
				{
        		deferred8.resolve(result.data);
        };

        function error(error)
        {
          deferred8.reject(error)
        };

				return deferred8.promise;
  	};

		return factory;
};
