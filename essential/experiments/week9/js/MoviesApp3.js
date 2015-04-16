var app = angular.module("MoviesApp", []);


app.filter('changeUrl', function () {
    return function (input, splitChar, splitIndex) {
        //fetch the part of the url after /movie/
        var movieId = input.split(splitChar)[splitIndex];
        //append this movie id to the flixter url
        var newUrl = "http://content6.flixster.com/movie/" + movieId;
        //if a poster for a movie is not present return NO image found poster.
        if (movieId != null) {
            return newUrl;
        } else {
            return "http://d18i5l0cp5i5h1.cloudfront.net/static/images/movie.none.det.gif";
        }
    }
});

app.controller("MovieController", function ($scope, $http) {

    var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?page_limit=16&page=1&country=us&apikey=m8r83jtnrvy92y4w5hxm39cb&callback=JSON_CALLBACK";
    $http.jsonp(url).success(function (data) {
        console.log(data.movies);
        $scope.upcomingmovies = data.movies;
    });
});