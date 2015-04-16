var app = angular.module("MoviesApp", []);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}   

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

function myapifilms(response) {
    console.log(response);
    var appElement = document.querySelector('body');
    var $scope = angular.element(appElement).scope();
    $scope.$apply(function () {
        $scope.movies = response;
    });      
}

function tms(response){
    console.log(response);
//    var appElement = document.querySelector('body');
//    var $scope = angular.element(appElement).scope();
   // $scope.$apply(function () {
      //  $scope.movies = response;

    //});
}

app.filter('changeUrl', function () {
    return function (input, splitChar, splitIndex) {
        var movieId = input.split(splitChar)[splitIndex];
        var newUrl = "http://content6.flixster.com/movie/" + movieId;
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

/*
    $scope.nearbyMovies = function () {
        //alert("hi");
        var zip = $scope.searchByZip;
        $http.get("http://data.tmsapi.com/v1.1/movies/showings?startDate=" + today + "&zip=" + zip + "&api_key=s6z9c9fdyuaywsvxtxavt4eb&callback=JSON_CALLBACK")
        .success(function(data) {
            console.log(data);
        });
    }
    */
    // $scope.searchMovies = function () {
 //   var title = "avatar";
    //$http.jsonp("http://www.myapifilms.com/imdb?title=" + title + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
    //  console.log("fetching")

    //    $http.jsonp("http://www.myapifilms.com/imdb?title=iron&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=5&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&callback=JSON_CALLBACK")
    $http.jsonp("http://www.myapifilms.com/imdb/comingSoon?&callback=JSON_CALLBACK&format=JSONP&lang=en-us&date=2015-04")
   /*     .success(function (response) {
            ///          console.log(response);
            $scope.movies = response;
        });*/
    //  }

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


  //  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

  //  $scope.counter = 0;

    //$scope.loadMore = function () {

    //    var title = "avatar";
   //     $http.jsonp("http://www.myapifilms.com/imdb?title=" + title + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
   //      .success(function (response) {
   //          console.log(response);
    //         $scope.movies = response;
    //         for (var i = 0; i < 25; i++) {
    //             $scope.movies.push(++$scope.counter);
    //         };

//         })
   //     var last = $scope.images[$scope.images.length - 1];
    //    for (var i = 1; i <= 8; i++) {
     //       $scope.images.push(last + i);
    //    }
   // };
});
