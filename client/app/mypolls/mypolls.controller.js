'use strict';

angular.module('voteAppApp')
  .controller('MypollsCtrl', function ($scope, $http, User, Auth) {
    $scope.getCurrentUser = Auth.getCurrentUser();

    $http.get('/api/polls/all/' + $scope.getCurrentUser._id).success(function(Polls) {
      $scope.polls = Polls;
    });

    $scope.deletePoll = function(poll) {
      $http.delete('/api/polls/' + poll._id).success(function() {
          $http.get('/api/polls/all' + $scope.getCurrentUser._id).success(function(Polls) {
            $scope.polls = Polls;
          });
        });
    };



  });
