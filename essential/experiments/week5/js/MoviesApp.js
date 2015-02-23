var app = angular.module("MoviesApp", []);

app.controller("MovieController",
    function ($scope) {

        var movies = [
            { title: "Avatar", rating: "PG-13", year: 2009, plot: "Takes place on the mystical land of Pandora" },
            { title: "Avengers 2: Age of Ultron", rating: "PG-13", year: 2015, plot: "Avengers Assemble to fight invaders" },
            { title: "Star Trek", rating: "PG-13", year: 2013, plot: "Adventures of Captain Kirk and Spock" }
        ];  

        $scope.movies = movies;

        $scope.addMovie = function () {
            var newMovie = {
                title: $scope.movie.title,
                rating: $scope.movie.rating,
                year: $scope.movie.year,
                plot: $scope.movie.plot
            };
            $scope.movies.push(newMovie);
        }

        $scope.removeMovie = function (movie) {
            var index = $scope.movies.indexOf(movie);
            $scope.movies.splice(index, 1);
        }

        $scope.selectMovie = function (movie) {
            $scope.movie = movie;
        }

        $scope.updateMovie = function () {
            alert($scope.movie.title);
        }
    });