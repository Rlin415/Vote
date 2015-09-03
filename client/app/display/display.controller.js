'use strict';

angular.module('voteAppApp')
  .controller('DisplayCtrl', function ($scope, $http, User, Auth, $routeParams) {
    var user = $routeParams.user;
    var pollid = $routeParams.pollid;
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.formData = {};
    $scope.getCurrentUser = Auth.getCurrentUser();

    $http.get('/api/polls/' + pollid).success(function(poll) {
      $scope.poll = poll;
    });

    $scope.vote = function() {
      if ($scope.poll.voted.indexOf($scope.getCurrentUser._id == -1 && $scope.formData.selection != undefined && $scope.isLoggedIn)) {
        $scope.poll.voted.push($scope.getCurrentUser._id);
        $scope.poll.choices[$scope.formData.selection].votes++;
        $http.patch('/api/polls/' + pollid, {choices: [{name: $scope.poll.choices[$scope.formData.selection].name, votes: $scope.poll.choices[$scope.formData.selection].votes}]}).then(function(poll) {
        });
      };
    };
  });
