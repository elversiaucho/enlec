/**
    * file: bibliotecaService.js
    * description: Servicio para la temática Asistencia a bibliotecas
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.factory('bibliotecaService', bibliotecaService);
bibliotecaService.$inject = ['$http', '$q', 'ENDPOINT'];

function bibliotecaService($http, $q, ENDPOINT)
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

		factory.getBibliotecaCuadro1 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_1).then(result, error);

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

    factory.getBibliotecaCuadro2 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_2).then(result, error);

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

    factory.getBibliotecaCuadro3 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_3).then(result, error);

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

    factory.getBibliotecaCuadro4 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_4).then(result, error);

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

    factory.getBibliotecaCuadro5 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_5).then(result, error);

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

    factory.getBibliotecaCuadro1 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_6).then(result, error);

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

    factory.getBibliotecaCuadro7 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_7).then(result, error);

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

    factory.getBibliotecaCuadro8 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_BIBLIOTECA_CUADRO_8).then(result, error);

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
