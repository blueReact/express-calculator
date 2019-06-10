// route-config.js
angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "partials/calculator.partial.html",
      controller: 'mainController',
      controllerAs: 'vm'
    })

    .otherwise({
      templateUrl: 'partials/404.partial.html',
      controller: 'mainController',
      controllerAs: 'vm'
    });

}