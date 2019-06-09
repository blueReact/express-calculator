(function () {
  "use strict";

  // articles.controller.js
  angular
    .module('myApp')
    .controller('mainController', mainController)

  mainController.$inject = ['$http', '$location', '$window'];

  function mainController($http, $location, $window) {

    var vm = this;
    vm.response = true;
    vm.error = true;

    vm.submit = function () {

      var data = {
        value: vm.value,
        value1: vm.value1,
        operator: vm.operator
      }

      $http({
          url: '/cal',
          method: "POST",
          data: data
        })
        .then(function (response) {
            // succcess
            vm.response = response.data;
          },
          function (error) {
            // failed
            vm.error = error;
          })


    }






  };

})();