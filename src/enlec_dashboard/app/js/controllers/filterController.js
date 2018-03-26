/**
    * file: filterController.js
    * description: Controlador filter
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('filterController', filterController);
filterController.$inject= ['$rootScope', '$scope', '$http', 'lecturaService', 'menoresService'];

function filterController($rootScope, $scope, $http, lecturaService, menoresService)
{
		//Definición de variables
		$scope.impreso = "Impreso";
		$scope.digital = "Digital";
		//$scope.temaList = [{"name":"Lectura"}, {"name":"Escritura"}, {"name":"Asistencia a bibliotecas"}, {"name":"Actividades con menores"}];
		//$scope.ubicacionList = [{"name":"nacional"}, {"name":"cabecera"}, {"name":"Centros poblados y rural disperso"}, {"name":"32 ciudades"}];
		//$scope.rangoList = [{"name":"5 años y más"}];
		$scope.mensaje = "Filter View";

		$scope.defaultTema = {};
        $scope.defaultTema.idTema = 4;

        $scope.defaultTema.temaList = [{
          id: 1,
          name: "Lectura"
        }, {
          id: 2,
          name: "Escritura"
        }, {
          id: 3,
          name: "Asistencia a bibliotecas"
        }, {
          id: 4,
          name: "Actividades con menores"
        }];

				$scope.defaultRangoEdad = {};
						$scope.defaultRangoEdad.idEdad = 1;

						$scope.defaultUbicacion = {};
								$scope.defaultUbicacion.idUbicacion = "nacional";


								$scope.defaultCiudad = {};
$scope.defaultCiudad.idCiudad = 1;




 $scope.getChangeTema = function getChangeTema(idTema)
 {
	 if(idTema == 1 || idTema == 3)
	{
		$scope.defaultRangoEdad.edadList = [{



			id: 1,
			name: "5 años y más"
		},
		{
			id: 2,
			name: "5 a 11"
		},
		{
			id: 3,
			name: "12 a 25"
		},
		{
			id: 4,
			name: "26 a 40"
		},
		{
			id: 5,
			name: "41 a 64"
		},
		{
			id: 6,
			name: "65 años y más"
		}];
	}
	else 	 if(idTema == 2)
		{
			$scope.defaultRangoEdad.edadList = [{



				id: 1,
				name: "12 años y más"
			},
			{

				id: 2,
				name: "12 a 25"
			},
			{
				id: 3,
				name: "26 a 40"
			},
			{
				id: 4,
				name: "41 a 64"
			},
			{
				id: 5,
				name: "65 años y más"
			}];
		}

	 else if(idTema == 4)
	{
		$scope.defaultRangoEdad.edadList = [{
			id: 1,
			name: "0 a 4 años"
		}];
	}

	$scope.defaultUbicacion.ubicacionList = [{
		id: "nacional",
		name: "Total nacional"
	},
	{
		id: "cabeceras",
		name: "Cabeceras"
	},
	{
		id: "centrosPoblados",
		name: "Centros poblados y rural disperso"
	},
	{
		id: "32Ciudades",
		name: "32 ciudades"
	}];





 };


 $scope.getChangeUbicacion = function getChangeUbicacion(idUbicacion)
 {
	 if(idUbicacion == "nacional" || idUbicacion == "cabeceras" || idUbicacion == "centrosPoblados")
	 {
		 $scope.defaultCiudad.ciudadList = null;
	 }

	 else if(idUbicacion == "32Ciudades")
	 {


		 $scope.defaultCiudad.ciudadList = [{
			 id: 1,
			 name: "Mitú"
		 },
		 {
			 id: 2,
			 name: "Puerto Carreño"
		 },
		 {
			 id: 3,
			 name: "Inírida"
		 },
		 {
			 id: 4,
			 name: "Leticia"
		 },
		 {
			 id: 5,
			 name: "San José del Guaviare"
		 },
		 {
			 id: 6,
			 name: "Mocoa"
		 },
		 {
			 id: 7,
			 name: "Arauca"
		 },
		 {
			 id: 8,
			 name: "Yopal"
		 }
		 ,
		 {
			 id: 9,
			 name: "Riohacha"
		 },
		 {
			 id: 10,
			 name: "Sincelejo"
		 },
		 {
			 id: 11,
			 name: "Montería"
		 },
		 {
			 id: 12,
			 name: "Valledupar"
		 },
		 {
			 id: 13,
			 name: "Santa Marta"
		 },
		 {
			 id: 14,
			 name: "Cartagena"
		 },
		 {
			 id: 15,
			 name: "Barranquilla"
		 },
		 {
			 id: 16,
			 name: "Tunja"
		 },
		 {
			 id: 17,
			 name: "Villavicencio"
		 },
		 {
			 id: 18,
			 name: "Bucaramanga"
		 },
		 {
			 id:19,
			 name: "Cúcuta"
		 },
		 {
			 id: 20,
			 name: "San Andrés"
		 },
		 {
			 id: 21,
			 name: "Bogotá"
		 },
		 {
			 id: 22,
			 name: "Florencia"
		 },
		 {
			 id: 23,
			 name: "Neiva"
		 },
		 {
			 id: 24,
			 name: "Armenia"
		 },
		 {
			 id: 25,
			 name: "Manizales"
		 },
		 {
			 id: 26,
			 name: "Pereira"
		 },
		 {
			 id: 27,
			 name: "Ibagué"
		 },
		 {
			 id: 28,
			 name: "Quibdó"
		 },
		 {
			 id: 29,
			 name: "Medellín"
		 },
		 {
			 id: 30,
			 name: "Popayán"
		 },
		 {
			 id: 31,
			 name: "Pasto"
		 },
		 {
			 id: 32,
			 name: "Cali"
		 }
		 ];
	 }

	 var filtro = {"idTema":$scope.defaultTema.idTema, "idEdad":$scope.defaultRangoEdad.idEdad, "idUbicacion":$scope.defaultUbicacion.idUbicacion, "idCiudad":$scope.defaultCiudad.idCiudad};

	 $scope.getMenoresCuadro1(filtro);
	 $scope.getMenoresCuadro3(filtro);
	 $scope.getMenoresCuadro5(filtro);
	 $scope.getMenoresCuadro7(filtro);
 };

		$scope.getMenoresCuadro1 = function getMenoresCuadro1(filtro)
		{
				var items1 = [];

				menoresService.getMenoresCuadro1().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d, i)
						{
								if(i == filtro.idUbicacion)
								{
										angular.forEach(d, function(d, i)
										{
												if(d.pregunta != "Total personas de 0 a 4 años")
												{
														items1.push({"category":d.pregunta,
 																				 "data":[
 																										{"key":"hombres", "value":d.pHombres},
 																									  {"key":"mujeres", "value":d.pMujeres}
 																		 					  ]
 														 						});
												};
								   });
							}
					 });
					$rootScope.dataBar1List = items1;
			}
		};

		$scope.getMenoresCuadro3 = function getMenoresCuadro3(filtro)
		{
				var items1 = [];

				menoresService.getMenoresCuadro3().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d, i)
						{
								if(i == filtro.idUbicacion)
								{
										angular.forEach(d, function(d, i)
										{
												if(d.pregunta != "Total personas de 0 a 4 años")
												{
														items1.push({"category":d.pregunta,
 																				 "data":[
 																										{"key":"hombres", "value":d.pHombres},
 																									  {"key":"mujeres", "value":d.pMujeres}
 																		 					  ]
 														 						});
												};
								   });
							}
					 });
					$rootScope.dataBar3List = items1;
			}
		};

		$scope.getMenoresCuadro5 = function getMenoresCuadro5(filtro)
		{
				var items1 = [];

				menoresService.getMenoresCuadro5().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d, i)
						{
								if(i == filtro.idUbicacion)
								{
										angular.forEach(d, function(d, i)
										{
												if(d.pregunta != "Total personas de 0 a 4 años")
												{
														items1.push({"category":d.pregunta,
 																				 "data":[
 																										{"key":"hombres", "value":d.pHombres},
 																									  {"key":"mujeres", "value":d.pMujeres}
 																		 					  ]
 														 						});
												};
								   });
							}
					 });
					$rootScope.dataBar5List = items1;
			}
		};

		$scope.getMenoresCuadro7 = function getMenoresCuadro7(filtro)
		{
				var items1 = [];

				menoresService.getMenoresCuadro7().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d, i)
						{
								if(i == filtro.idUbicacion)
								{
										angular.forEach(d, function(d, i)
										{
												if(d.pregunta != "Total personas de 0 a 4 años")
												{
														items1.push({"category":d.pregunta,
 																				 "data":[
 																										{"key":"hombres", "value":d.pHombres},
 																									  {"key":"mujeres", "value":d.pMujeres}
 																		 					  ]
 														 						});
												};
								   });
							}
					 });
					$rootScope.dataBar7List = items1;
			}
		};



		//Mensaje de error
		function error(error)
		{
			console.log(error);
		};
}
