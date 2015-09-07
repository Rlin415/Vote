'use strict';

angular.module('voteAppApp')
  .controller('NewpollCtrl', function ($scope, $http, User, Auth) {
    $scope.placeHolders = ['Seattle', 'Portland'];
    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.choices = ['', ''];

    $scope.addChoice = function() {
      $scope.placeHolders.push('New Choice');
      $scope.choices.push('');
    };

    $scope.removeChoice = function(index) {
      $scope.placeHolders.splice(index, 1);
      $scope.choices.splice(index, 1);
    };

    $scope.addPoll = function() {
        $scope.createdTime = new Date();
        var poll = {
        title: $scope.pollName,
        choices: $scope.choices.map(function(item) {return {name: item, votes: 0};}),
        userId: $scope.getCurrentUser._id,
        user: $scope.getCurrentUser.name,
        voted: [],
        created: $scope.createdTime.getTime()
      };
      $http.post('/api/polls', poll).success(function() {
        $scope.placeHolders = ['Seattle', 'Portland'];
        $scope.pollName = '';
        $scope.choices = [];
        window.location.href = '/mypolls'
      });
    };
  });
