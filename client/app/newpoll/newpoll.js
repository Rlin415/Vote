'use strict';

angular.module('voteAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newpoll', {
        templateUrl: 'app/newpoll/newpoll.html',
        controller: 'NewpollCtrl',
      });
  });
