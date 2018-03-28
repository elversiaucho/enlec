/**
    * file: filterController.js
    * description: Controlador filter
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('filterController', filterController);
filterController.$inject= ['$rootScope', '$scope', '$http', 'lecturaService', 'menoresService', 'CONS', 'PARAMETERS'];

function filterController($rootScope, $scope, $http, lecturaService, menoresService, CONS, PARAMETERS)
{
	  ///////////////////////////////////////////////////////////////////////////////
		//Definición de variables
    ///////////////////////////////////////////////////////////////////////////////
    //Filtro Tema
		$scope.objTema = {};
		$scope.objTema.idTema = CONS.ID_TEMA_ACTIVIDADES_MENORES;
		$scope.objTema.temaList = PARAMETERS.temas;

    //Filtro Rango de edad
		$scope.objRangoEdad = {};
		var dataRangoEdad = PARAMETERS.rangosEdades;

		//Filtro Ubicación
		$scope.objUbicacion = {};
		$scope.objUbicacion.idUbicacion = CONS.ID_UBICACION_TOTAL_NACIONAL;
		$scope.objUbicacion.ubicacionList = PARAMETERS.ubicaciones;

		//Filtro Ciudad
		$scope.objCiudad = {};
	 	$scope.objCiudad.idCiudad = CONS.ID_NO_CIUDAD;
		$scope.objCiudad.isCiudad = CONS.FALSE;
		var dataCiudad = PARAMETERS.ciudades;

 		$scope.changeTema = function changeTema(idTema)
 		{
	 			var items = [];

   			angular.forEach(dataRangoEdad, function(d, i)
				{
		 			if(d.idTema == idTema)
		 			{
			 			items.push(d);
		 			}
	 			});

	 			$scope.objRangoEdad.idRangoEdad = items[CONS.ID_VALOR_INICIAL].idRangoEdad;
				$scope.objRangoEdad.rangoEdadList = items;
 		};

 		$scope.changeUbicacion = function changeUbicacion(idUbicacion)
 		{
			  var filtro;

				if(idUbicacion == CONS.ID_UBICACION_32_CIUDADES)
				{
	 				var items = [];

   				angular.forEach(dataCiudad, function(d, i)
					{
		 				if(d.idUbicacion == idUbicacion)
		 				{
			 				items.push(d);
		 				}
	 			  });

	 				$scope.objCiudad.idCiudad = items[CONS.ID_VALOR_INICIAL].idCiudad;
					$scope.objCiudad.ciudadList = items;
					$scope.objCiudad.isCiudad = true;
				}
				else
				{
						$scope.objCiudad.idCiudad = CONS.ID_NO_CIUDAD;
						$scope.objCiudad.ciudadList = CONS.NULL;
						$scope.objCiudad.isCiudad = CONS.FALSE;
				}

	 		  filtro = {"idTema":$scope.objTema.idTema,
									"idRangoEdad":$scope.objRangoEdad.idRangoEdad,
									"idUbicacion":idUbicacion,
									"idCiudad":$scope.objCiudad.idCiudad};

	 			$scope.getMenoresCuadro_1_2(filtro);
 		};

 		$scope.changeCiudad = function changeCiudad(idCiudad)
 		{
	 			var filtro;

				filtro = {"idTema":$scope.objTema.idTema,
									"idRangoEdad":$scope.objRangoEdad.idRangoEdad,
									"idUbicacion":$scope.objUbicacion.idUbicacion,
									"idCiudad":idCiudad};

 				$scope.getMenoresCuadro_1_2(filtro);
 	  };

		$scope.getMenoresCuadro_1_2 = function getMenoresCuadro_1_2(filtro)
		{
				var items1 = [];

				menoresService.getMenoresCuadro_1_2().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d, i)
						{
								if(d.idTema == filtro.idTema
									  && d.idRangoEdad == filtro.idRangoEdad
										    && d.idUbicacion == filtro.idUbicacion
												   && d.idCiudad == filtro.idCiudad)
								{
										angular.forEach(d.values, function(d,i)
										{
												items1.push(d);
										});
							  }
					 });

					$rootScope.dataMenores_1_2_List = items1;
			}
		};

		$scope.getMenoresCuadro_3_4 = function getMenoresCuadro_3_4(filtro)
		{

		};

		$scope.getMenoresCuadro_5_6 = function getMenoresCuadro_5_6(filtro)
		{
		};

		$scope.getMenoresCuadro_7_8 = function getMenoresCuadro_7_8(filtro)
		{
		};

		//Mensaje de error
		function error(error)
		{
			console.log(error);
		};
}
