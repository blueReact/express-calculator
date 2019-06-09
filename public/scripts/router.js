// route-config.js
angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {

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



  // // removes URL hash
  // $locationProvider.html5Mode(true);

}