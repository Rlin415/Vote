'use strict';

angular.module('voteAppApp')
  .controller('MainCtrl', function ($scope, $http, Auth, $location) {
    $scope.description = [];
    $scope.newPoll = false;
    $scope.poll = {};
    $scope.errors = {};

    Auth.isLoggedInAsync(function(bool) {
      $scope.isLoggedIn = bool;
    });

    $scope.description.push($scope.poll = {
      img: '/assets/images/prepper-polls-surveys.png',
      alt: 'polls',
      title: 'Live Results',
      descrip: 'Receive live data of your active polls'
    });

    $scope.description.push($scope.globe = {
      img: '/assets/images/globe.jpg',
      alt: 'globe',
      title: 'Works Everywhere',
      descrip: 'Our polls work tablets, smartphones, netbooks, and notebooks'
    });

    $scope.description.push($scope.globe = {
      img: '/assets/images/twitter.png',
      alt: 'twitter',
      title: 'Social Integration',
      descrip: 'Social share buttons encourage poll voters to spread the word'
    });
  });
