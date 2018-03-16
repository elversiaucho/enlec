//Navegación
app_enlec.config(configuracion);
configuracion.$inject = ['$stateProvider', '$urlRouterProvider'];

function configuracion($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
                                    url: '/',
                                    views:
                                    {
                                        '':
                                            {
                                                templateUrl:'app/views/dashboard.html',
                                                controller:'mainController'
                                            },
                                            'header@main':
                                            {
                                              templateUrl:'app/views/templates/header.html'
                                            },
                                            'exampleView@main':
                                            {
                                                templateUrl:'app/views/dashboard/exampleView.html',
                                                controller:'exampleController'
                                            },
                                            'infoView@main':
                                            {
                                                templateUrl:'app/views/dashboard/infoView.html',
                                                controller:'infoController'
                                            },
                                            'barChartView@main':
                                            {
                                                templateUrl:'app/views/dashboard/barChartView.html'
                                            },
                                            'footer@main':
                                            {
                                                templateUrl:'app/views/templates/footer.html'
                                            }
                                    }
                        });
};
