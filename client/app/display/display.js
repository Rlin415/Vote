'use strict';

angular.module('voteAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:user/:pollid', {
        templateUrl: 'app/display/display.html',
        controller: 'DisplayCtrl'
      });
  });
