'use strict';

angular.module('voteAppApp')
  .controller('DisplayCtrl', function ($scope, $http, Auth, $routeParams) {
    var pollid = $routeParams.pollid;
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.formData = {};
    $scope.getCurrentUser = Auth.getCurrentUser();

    /***************** Configure Chart ****************/
    var ctx;
    var myBarChart;
    var data = {
      labels: [],
      datasets: [
          {
              label: 'My First dataset',
              fillColor: 'rgba(220,220,220,0.5)',
              strokeColor: 'rgba(220,220,220,0.8)',
              highlightFill: 'rgba(220,220,220,0.75)',
              highlightStroke: 'rgba(220,220,220,1)',
              data: []
          }
        ]
    };
    var runChart = function() {
      ctx = document.getElementById('myBarChart').getContext('2d');
      myBarChart = new Chart(ctx).Bar(data);
    };


    $http.get('/api/polls/' + pollid).success(function(poll) {
      $scope.poll = poll;
      $scope.poll.choices.forEach(function(pollChoices) {
      data.labels.push(pollChoices.name);
      data.datasets[0].data.push(pollChoices.votes);
      });
      $scope.urlPollName = encodeURIComponent($scope.poll.title);
      $scope.urlUserName = encodeURIComponent($scope.poll.user);
      runChart();
    });

    $scope.vote = function() {
      if ($scope.poll.voted.indexOf($scope.getCurrentUser._id === -1 && $scope.formData.selection !== undefined && $scope.isLoggedIn)) {
        $scope.poll.voted.push($scope.getCurrentUser._id);
        $scope.poll.choices[$scope.formData.selection].votes++;
        //update bar chart here
        myBarChart.datasets[0].bars[$scope.formData.selection].value = $scope.poll.choices[$scope.formData.selection].votes;
        myBarChart.update();

        $http.put('/api/polls/' + pollid, $scope.poll);
      }
    };

  });
