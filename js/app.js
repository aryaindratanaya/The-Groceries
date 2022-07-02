const app = angular.module("app", []);

app.controller("HomeCtrl", [
  "$scope",
  function ($scope) {
    $scope.angularMessage = "Hi, the AngularJS is working!";
    $("#j-query-message").text("Yep, the jQuery is also working!");
  },
]);
