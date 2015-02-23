var app = angular.module("AngularEvents", []);
app.controller("EventsController",
function ($scope) {

    $scope.LocationDetails = "Place to visit around the world. This text will change on clicking the image above"
    $scope.taj = function () {
        console.log("Taj Mahal");
        $scope.LocationDetails = "Taj Mahal at Agra, India"
    }
    $scope.christ = function () {
        console.log("Christ the Redeemer");
        $scope.LocationDetails = "Christ the Redeemer, Rio De Janeiro"
    }
    $scope.pisa = function () {
        console.log("Leaning tower of pisa");
        $scope.LocationDetails = "Leaning tower of Pisa, Italy"
    }
    $scope.eifel = function () {
        console.log("Tower");
        $scope.LocationDetails = "Eiffel Tower in Paris"
    }
});