/**
    * file: routes.js
    * description: Configuración de la navegación de la aplicación
    * author: Eduardo José Suárez Diaz - ejsuarezd@dane.gov.co
    * version: 1.0.0
    * date: 28/03/2018
    * company: Departamento Administrativo Nacional de Estadística - DANE
**/
app_enlec.config(configuration);
configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

function configuration($stateProvider, $urlRouterProvider)
{
    //Definición de vistas
    var views = {};

    views = {
                url: '/',
                views:
                {
                    '':
                        {
                            templateUrl:'app/views/main.html'
                        },
                        'header@main':
                        {
                          templateUrl:'app/views/templates/header.html'
                        },
                        'horizontalBarChart_1_2_View@main':
                        {
                            templateUrl:'app/views/main/horizontalBarChart_1_2_View.html'
                        },
                        'horizontalBarChart3View@main':
                        {
                            templateUrl:'app/views/main/horizontalBarChart3View.html'
                        },
                        'horizontalBarChart5View@main':
                        {
                            templateUrl:'app/views/main/horizontalBarChart5View.html'
                        },
                        'circularChart1View@main':
                        {
                            templateUrl:'app/views/main/circularChart1View.html'
                        },
                        'numeroChart1View@main':
                        {
                            templateUrl:'app/views/main/numeroChart1View.html'
                        },
                        'filterView@main':
                        {
                            templateUrl:'app/views/main/filterView.html',
                            controller:'filterController'
                        },
                        'footer@main':
                        {
                            templateUrl:'app/views/templates/footer.html'
                        }
                }
            };

    //Redireccionar vista principal main.html
    $urlRouterProvider.otherwise('/');

    //Vistas
    $stateProvider.state('main', views);
};
