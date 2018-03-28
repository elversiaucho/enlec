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
		$scope.mensaje = "Filter View";

///////////////////////////////////////////////////////////////////////////////
//Filtros
$scope.objTema = {};
$scope.objTema.idTema = 4;
$scope.objTema.temaList = [
{"idTema":1, "nameTema":"Lectura"},
{"idTema":2, "nameTema":"Escritura"},
{"idTema":3, "nameTema":"Asistencia a bibliotecas"},
{"idTema":4, "nameTema":"Actividades con menores de 5 años"}
];

$scope.objRangoEdad = {};


$scope.objUbicacion = {};
$scope.objUbicacion.idUbicacion = 111;
$scope.objUbicacion.ubicacionList = [
{"idUbicacion":111, "nameUbicacion":"Total nacional"},
{"idUbicacion":112, "nameUbicacion":"Cabeceras"},
{"idUbicacion":113, "nameUbicacion":"Centros poblados y rural disperso"},
{"idUbicacion":114, "nameUbicacion":"32 ciudades"}
];

$scope.objCiudad = {};
	 $scope.objCiudad.idCiudad = 0;
///////////////////////////////////////////////////////////////////////////////
$scope.objCiudad.isCiudad = false;


 $scope.changeTema = function changeTema(idTema)
 {
	 var data = [
	 {"idRangoEdad":11, "nameRangoEdad":"5 años y más", "idTema":1},
	 {"idRangoEdad":12, "nameRangoEdad":"5 a 11", "idTema":1},
	 {"idRangoEdad":13, "nameRangoEdad":"12 a 25", "idTema":1},
	 {"idRangoEdad":14, "nameRangoEdad":"26 a 40", "idTema":1},
	 {"idRangoEdad":15, "nameRangoEdad":"41 a 64", "idTema":1},
	 {"idRangoEdad":16, "nameRangoEdad":"65 años y más", "idTema":1},
	 {"idRangoEdad":17, "nameRangoEdad":"12 años y más", "idTema":2},
	 {"idRangoEdad":18, "nameRangoEdad":"12 a 25", "idTema":2},
	 {"idRangoEdad":19, "nameRangoEdad":"26 a 40", "idTema":2},
	 {"idRangoEdad":20, "nameRangoEdad":"41 a 64", "idTema":2},
	 {"idRangoEdad":21, "nameRangoEdad":"65 años y más", "idTema":2},
	 {"idRangoEdad":22, "nameRangoEdad":"5 años y más", "idTema":3},
	 {"idRangoEdad":23, "nameRangoEdad":"5 a 11", "idTema":3},
	 {"idRangoEdad":24, "nameRangoEdad":"12 a 25", "idTema":3},
	 {"idRangoEdad":25, "nameRangoEdad":"26 a 40", "idTema":3},
	 {"idRangoEdad":26, "nameRangoEdad":"41 a 64", "idTema":3},
	 {"idRangoEdad":27, "nameRangoEdad":"65 años y más", "idTema":3},
	 {"idRangoEdad":28, "nameRangoEdad":"0 a 4 años", "idTema":4}
	 ];

	 var items = [];


   angular.forEach(data, function(d, i){

		 if(d.idTema == idTema)
		 {

			 items.push(d);
		 }
	 })

	 $scope.objRangoEdad.idRangoEdad = items[0].idRangoEdad;
$scope.objRangoEdad.rangoEdadList = items;
 };


 $scope.changeUbicacion = function changeUbicacion(idUbicacion)
 {


	 var data = [
	 {"idCiudad":97001, "nameCiudad":"Mitú", "idUbicacion":114},
	 {"idCiudad":99001, "nameCiudad":"Puerto Carreño", "idUbicacion":114},
	 {"idCiudad":94001, "nameCiudad":"Inírida", "idUbicacion":114},
	 {"idCiudad":91001, "nameCiudad":"Leticia", "idUbicacion":114},
	 {"idCiudad":95001, "nameCiudad":"San José del Guaviare", "idUbicacion":114},
	 {"idCiudad":86001, "nameCiudad":"Mocoa", "idUbicacion":114},
	 {"idCiudad":81001, "nameCiudad":"Arauca", "idUbicacion":114},
	 {"idCiudad":85001, "nameCiudad":"Yopal", "idUbicacion":114},
	 {"idCiudad":44001, "nameCiudad":"Riohacha", "idUbicacion":114},
	 {"idCiudad":70001, "nameCiudad":"Sincelejo", "idUbicacion":114},
	 {"idCiudad":23001, "nameCiudad":"Montería", "idUbicacion":114},
	 {"idCiudad":20001, "nameCiudad":"Valledupar", "idUbicacion":114},
	 {"idCiudad":47001, "nameCiudad":"Santa Marta", "idUbicacion":114},
	 {"idCiudad":13001, "nameCiudad":"Cartagena", "idUbicacion":114},
	 {"idCiudad":8001, "nameCiudad":"Barranquilla", "idUbicacion":114},
	 {"idCiudad":15001, "nameCiudad":"Tunja", "idUbicacion":114},
	 {"idCiudad":50001, "nameCiudad":"Villavicencio", "idUbicacion":114},
	 {"idCiudad":68001, "nameCiudad":"Bucaramanga", "idUbicacion":114},
	 {"idCiudad":54001, "nameCiudad":"Cúcuta", "idUbicacion":114},
	 {"idCiudad":88564, "nameCiudad":"San Andrés", "idUbicacion":114},
	 {"idCiudad":11001, "nameCiudad":"Bogotá", "idUbicacion":114},
	 {"idCiudad":18001, "nameCiudad":"Florencia", "idUbicacion":114},
	 {"idCiudad":41001, "nameCiudad":"Neiva", "idUbicacion":114},
	 {"idCiudad":63001, "nameCiudad":"Armenia", "idUbicacion":114},
	 {"idCiudad":17001, "nameCiudad":"Manizales", "idUbicacion":114},
	 {"idCiudad":66001, "nameCiudad":"Pereira", "idUbicacion":114},
	 {"idCiudad":73001, "nameCiudad":"Ibagué", "idUbicacion":114},
	 {"idCiudad":27001, "nameCiudad":"Quibdó", "idUbicacion":114},
	 {"idCiudad":5001, "nameCiudad":"Medellín", "idUbicacion":114},
	 {"idCiudad":19001, "nameCiudad":"Popayán", "idUbicacion":114},
	 {"idCiudad":52001, "nameCiudad":"Pasto", "idUbicacion":114},
	 {"idCiudad":76001, "nameCiudad":"Cali", "idUbicacion":114}
	 ];


if(idUbicacion == 114)
{
	 var items = [];


   angular.forEach(data, function(d, i){

		 if(d.idUbicacion == idUbicacion)
		 {

			 items.push(d);
		 }
	 });

	 $scope.objCiudad.idCiudad = items[0].idCiudad;
$scope.objCiudad.ciudadList = items;
$scope.objCiudad.isCiudad = true;

}
else {
	$scope.objCiudad.idCiudad = 0;
$scope.objCiudad.ciudadList = null;
$scope.objCiudad.isCiudad = false;
}



	 var filtro = {"idTema":$scope.objTema.idTema, "idRangoEdad":$scope.objRangoEdad.idRangoEdad, "idUbicacion":$scope.objUbicacion.idUbicacion, "idCiudad":$scope.objCiudad.idCiudad};


	 $scope.getMenoresCuadro1(filtro);

	 //$scope.getMenoresCuadro3(filtro);
	 //$scope.getMenoresCuadro5(filtro);
	 //$scope.getMenoresCuadro7(filtro);
 };


 $scope.changeCiudad = function changeCiudad(idCiudad)
 {





	 var filtro = {"idTema":$scope.objTema.idTema, "idRangoEdad":$scope.objRangoEdad.idRangoEdad, "idUbicacion":$scope.objUbicacion.idUbicacion, "idCiudad":$scope.objCiudad.idCiudad};


 $scope.getMenoresCuadro1(filtro);
	 //$scope.getMenoresCuadro1(filtro);
	 //$scope.getMenoresCuadro3(filtro);
	 //$scope.getMenoresCuadro5(filtro);
	 //$scope.getMenoresCuadro7(filtro);

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

var filtro = {"idTema":$scope.objTema.idTema,
"idRangoEdad":$scope.objRangoEdad.idRangoEdad,
"idUbicacion":$scope.objUbicacion.idUbicacion,
"idCiudad":$scope.objCiudad.idCiudad};



								if(d.idTema == filtro.idTema && d.idRangoEdad == filtro.idRangoEdad && d.idUbicacion == filtro.idUbicacion && d.idCiudad == filtro.idCiudad)
								{


									angular.forEach(d.values, function(d,i){

									items1.push(d);
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
