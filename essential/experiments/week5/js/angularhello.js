var app = angular.module("AngularHelloApp", []);

app.controller("AngularHelloController",
function ($scope) {

    var employee = {
        first: "Hello",
        last: "World"
    };

    $scope.employee = employee;

    var employees = [
        { first: "Bhumi", last: "Nagar" },
        { first: "Jose", last: "Annunziato" },
    ];

    $scope.employees = employees;

    $scope.hello = "Hello From Angular JS";
    $scope.goodbye = "Bye From Angular JS";
    console.log("AngularHelloController");
});