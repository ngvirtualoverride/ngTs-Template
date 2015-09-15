((): void => {

    // var app = angular.module('demoApp', ['ngRoute', 'ngAnimate']);

    // app.config(['$routeProvider', ($routeProvider) => {
    //     $routeProvider.when('/',
    //     {
    //         controller: 'demoApp.CustomersController',
    //         templateUrl: 'app/views/customers.html',
    //         controllerAs: 'vm'
    //     })
    //     .when('/orders/:customerId',
    //     {
    //         controller: 'demoApp.OrdersController',
    //         templateUrl: 'app/views/orders.html',
    //         controllerAs: 'vm'
    //     });
    // }]);

    angular
        .module('demoApp', ['ui.router', 'ngAnimate'])
        .config(['$stateProvider', ($stateProvider) => {
            $stateProvider
                .state('customers', {
                    url: '/',
                    templateUrl: 'app/views/customers.html',
                    controller: 'demoApp.CustomersController',
                    controllerAs: 'vm'                         
                })
                .state('orders', {
                    url: '/orders/:customerId',
                    templateUrl: 'app/views/orders.html',
                    controller: 'demoApp.OrdersController',
                    controllerAs: 'vm'
                });
        }]);

})();
