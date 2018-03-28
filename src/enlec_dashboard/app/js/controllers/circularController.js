/**
    * file: circularController.js
    * description: Controlador circular
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.controller('circularController', circularController);

/*app_enlec.controller('myController', myController);


function myController('$rootScope', '$form', '$http', 'temporalService') {

         $form.filtrar = function(filtro){
          alert(filtro);
         };

    };

myController.$inject= ['$rootScope', '$form', '$http', 'temporalService'];*/

circularController.$inject= ['$rootScope', '$scope', '$http', 'temporalService'];

function circularController($rootScope, $scope, $http, temporalService)
{
	 $scope.circular="desde Controller circular";
   $scope.findCircularData  = findCircularData('cabeceras');


 function findCircularData(filtro)
			{
       //alert("hola filtro:"+filtro);
				var items = [];
        var fSexo=$scope.filtrarSexo=filtro;
        
        switch(fSexo){
            case 'cabeceras':
                fSexo=1;
                break;

            case 'centrosP':
                fSexo=2;
                break;
            
            default: fsexo = 0;
                break;
         }

			temporalService.findCircularData().then(success, error);

				//Obtener data
				function success(data)
				{
						angular.forEach(data, function(d)
						{
								items.push(d);
						});

				//$scope.dataInfoList = items;		
        var i=0;
        var circuloData=[], dataLc1=[];

        angular.forEach(items[fSexo], function(value, key) {
        if (value[0].respuesta=='Sí'){
            dataLc1=dataLc1.concat(value[0]);
          }
        });
        $scope.dataInfoList = dataLc1;
        
			};
        
	  };

		//Mensaje de error
		function error(error)
		{
				console.log(error);
		};

};