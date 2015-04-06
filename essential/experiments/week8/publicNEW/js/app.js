var app = angular.module("FormApp", [])

app.controller("FormController",
function ($scope,$http) {
    $http.get("/api/form")
    .success(function (response) {
        $scope.forms = response
    });

    $scope.remove = function (id) {
        //  alert(id)
        $http.delete("/api/form/" + id)
        .success(function (response) {
            $scope.forms=response
        });
    }

    $scope.add = function (form) {
        alert(form.name);
        $http.post("/api/form/", form)
        .success(function (response) {
            $scope.forms = response;
        });
    }

    $http.get("/api/form")
       .success(function (response) {
           $scope.forms = response;
       });

});