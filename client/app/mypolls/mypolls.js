'use strict';

angular.module('voteAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mypolls', {
        templateUrl: 'app/mypolls/mypolls.html',
        controller: 'MypollsCtrl'
      });
  });
