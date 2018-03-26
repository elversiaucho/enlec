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
		var deferred_1 = $q.defer();
		var deferred_2 = $q.defer();
		var deferred_3 = $q.defer();
		var deferred1 = $q.defer();
		var deferred2 = $q.defer();
		var deferred3 = $q.defer();
		var deferred4 = $q.defer();
		var deferred5 = $q.defer();
		var deferred6 = $q.defer();
		var deferred7 = $q.defer();
		var deferred8 = $q.defer();
		var deferred9 = $q.defer();
		var deferred10 = $q.defer();
		var deferred11 = $q.defer();
		var deferred12 = $q.defer();
		var deferred13 = $q.defer();
		var deferred14 = $q.defer();
		var deferred15 = $q.defer();
		var deferred16 = $q.defer();
		var deferred17 = $q.defer();
		var deferred18 = $q.defer();

		factory.findDataBar1 = function(filtro)
  	{
 				$http.get(CONFIG.ENDPOINT_LECTURA_1).then(result, error);

				function result(result)
				{
        		deferred_1.resolve(result.data);
        };

				function error(error)
				{
					deferred_1.reject(error)
				};

				return deferred_1.promise;
  	};

		factory.findDataBar2 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_2).then(result, error);

				function result(result)
				{
						deferred_2.resolve(result.data);
				};

				function error(error)
				{
					deferred_2.reject(error)
				};

				return deferred_2.promise;
		};

		factory.findDataBar3 = function()
		{
				return $http.get(CONFIG.ENDPOINT_LECTURA_3).then(result, error);

				function result(result)
				{
						deferred_3.resolve(result.data);
				};

				function error(error)
				{
					deferred_3.reject(error)
				};

				return deferred_3.promise;
		};

		factory.getLecturaCuadro1 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_1).then(result, error);

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

		factory.getLecturaCuadro2 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_2).then(result, error);

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

		factory.getLecturaCuadro3 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_3).then(result, error);

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

		factory.getLecturaCuadro4 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_4).then(result, error);

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

		factory.getLecturaCuadro5 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_5).then(result, error);

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

		factory.getLecturaCuadro6 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_6).then(result, error);

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

		factory.getLecturaCuadro7 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_7).then(result, error);

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

		factory.getLecturaCuadro8 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_8).then(result, error);

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

		factory.getLecturaCuadro9 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_9).then(result, error);

				function result(result)
				{
						deferred9.resolve(result.data);
				};

				function error(error)
				{
					deferred9.reject(error)
				};

				return deferred9.promise;
		};

		factory.getLecturaCuadro10 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_10).then(result, error);

				function result(result)
				{
						deferred10.resolve(result.data);
				};

				function error(error)
				{
					deferred10.reject(error)
				};

				return deferred10.promise;
		};

		factory.getLecturaCuadro11 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_11).then(result, error);

				function result(result)
				{
						deferred11.resolve(result.data);
				};

				function error(error)
				{
					deferred11.reject(error)
				};

				return deferred11.promise;
		};

		factory.getLecturaCuadro12 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_12).then(result, error);

				function result(result)
				{
						deferred12.resolve(result.data);
				};

				function error(error)
				{
					deferred12.reject(error)
				};

				return deferred12.promise;
		};

		factory.getLecturaCuadro13 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_13).then(result, error);

				function result(result)
				{
						deferred13.resolve(result.data);
				};

				function error(error)
				{
					deferred13.reject(error)
				};

				return deferred13.promise;
		};

		factory.getLecturaCuadro14 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_14).then(result, error);

				function result(result)
				{
						deferred14.resolve(result.data);
				};

				function error(error)
				{
					deferred14.reject(error)
				};

				return deferred14.promise;
		};

		factory.getLecturaCuadro15 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_15).then(result, error);

				function result(result)
				{
						deferred15.resolve(result.data);
				};

				function error(error)
				{
					deferred15.reject(error)
				};

				return deferred15.promise;
		};

		factory.getLecturaCuadro16 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_16).then(result, error);

				function result(result)
				{
						deferred16.resolve(result.data);
				};

				function error(error)
				{
					deferred16.reject(error)
				};

				return deferred16.promise;
		};

		factory.getLecturaCuadro17 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_17).then(result, error);

				function result(result)
				{
						deferred17.resolve(result.data);
				};

				function error(error)
				{
					deferred17.reject(error)
				};

				return deferred17.promise;
		};

		factory.getLecturaCuadro18 = function(filtro)
		{
				$http.get(CONFIG.ENDPOINT_LECTURA_CUADRO_18).then(result, error);

				function result(result)
				{
						deferred18.resolve(result.data);
				};

				function error(error)
				{
					deferred18.reject(error)
				};

				return deferred18.promise;
		};

		return factory;
};
