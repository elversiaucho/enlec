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
                            templateUrl:'app/views/main.html',
                            controller:'mainController'
                        },
                        'header@main':
                        {
                          templateUrl:'app/views/templates/header.html'
                        },
                        'exampleView@main':
                        {
                            templateUrl:'app/views/main/exampleView.html',
                            controller:'exampleController'
                        },
                        'infoView@main':
                        {
                            templateUrl:'app/views/main/infoView.html',
                            controller:'infoController'
                        },
                        'horizontalBarChart1View@main':
                        {
                            templateUrl:'app/views/main/horizontalBarChart1View.html',
                            controller:'horizontalBarController'
                        },
                        'horizontalBarChart2View@main':
                        {
                            templateUrl:'app/views/main/horizontalBarChart2View.html',
                            controller:'horizontalBarController'
                        },
                        'circularChart1View@main':
                        {
                            templateUrl:'app/views/main/circularChart1View.html',
                            controller:'circularController'
                        },
                        'numeroChart1View@main':
                        {
                            templateUrl:'app/views/main/numeroChart1View.html',
                            controller:'numeroController'
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
