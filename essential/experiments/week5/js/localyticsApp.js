var app = angular.module("localyticsApp", []);

app.controller("localyticsController",
    function ($scope) {

        
        $scope.add = function (num1, num2) {
            $scope.result = parseInt(num1) + parseInt(num2);
        }


    });