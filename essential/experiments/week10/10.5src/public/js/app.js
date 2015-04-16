var app = angular.module("FormApp", [])
app.controller("FormController", ["$scope", "$http",

function ($scope, $http) {
    var id = 771315639;
    var moviesDetailsUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '.json?apikey=' + 'm8r83jtnrvy92y4w5hxm39cb' + '&callback=JSON_CALLBACK';
    var userEmail = "bhumitra@ymail.com";

    var movieshows = [];
    //  var showtimes = [];
    //   var zip = "02120";

    $scope.dispshowtimes = function (form) {
        showtimesURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=2015-04-16&zip=" + form.zip + "&api_key=9tgadcfyrsvqtzuydytxu6v4";
        console.log(showtimesURL);

        $http.get(showtimesURL).success(function (response) {
            movieshows = response;
            console.log(movieshows);

            for (i = 0; i < movieshows.length; i++) {
                console.log(movieshows[i].title);
                if (movieshows[i].title == "Home") {
                    $scope.showtimes = movieshows[i].showtimes;
                    console.log($scope.showtimes);
                    //  alert("hurr");
                }

            }

        });

    }

    $http.jsonp(moviesDetailsUrl).success(function (data) {
        console.log(data.movies);
        $scope.upcomingmovies = data.movies;
        $scope.movie_id = data.id;
        $scope.synopsis = data.synopsis;
        $scope.title = data.title;
        $scope.poster = "http://content6.flixster.com/movie/" + data.posters.thumbnail.split('/movie/')[1];
        //    console.log($scope.poster);
        $scope.critics_score = data.ratings.critics_score;
        $scope.audience_score = data.ratings.audience_score;
        $scope.studio = data.studio;
        $scope.releaseDate = data.release_dates.theater;


        if (userEmail == null) {
            $("#likeUnlikeBtn").prop('disabled', true);
            $scope.likeUnlikeText = "Please login to Like!"
        }
        else {
            $http.get("/checklikeUnlike/" + id + "/" + userEmail)
           .success(function (response) {
               $scope.likeUnlikeText = response;
           });
        }
    });




    console.log("fetch");

    $scope.likeUnlike = function () {
        var id = $scope.movie_id;
        if ($scope.likeUnlikeText == "Like") {
            $http.get("/like/" + id + "/" + userEmail)
             .success(function (response) {
                 console.log("Successfully liked");
                 $scope.likeUnlikeText = response;
             });
        }
        else {
            $http.get("/unlike/" + id + "/" + userEmail)
             .success(function (response) {
                 console.log("Successfully unliked");
                 $scope.likeUnlikeText = response;
             });
        }
    }

    $scope.changeClass = function (likeUnlikeText) {
        if (userEmail == undefined) {
            return "btn btn-disabled";
        }
        else {
            if (likeUnlikeText == "Like")
                return "btn btn-success";
            if (likeUnlikeText == "Unlike")
                return "btn btn-danger";
        }
    }

    $scope.getLikedMovies = function () {
        $scope.likedMovies = [];
        var emailToFetch = "bhumitra@ymail.com";

        $http.get("/getLikes/" + emailToFetch)
             .success(function (response) {
                 if (response != null || response != undefined) {
                     console.log(response);
                     $.each(response, function (idx, obj) {
                         var movie_id = obj.movieid;
                         var moviesDetailsUrlLikes = 'http://api.rottentomatoes.com/api/public/v1.0/movies/' + movie_id + '.json?apikey=' + 'm8r83jtnrvy92y4w5hxm39cb' + '&callback=JSON_CALLBACK';
                         console.log(moviesDetailsUrlLikes);
                         $http.jsonp(moviesDetailsUrlLikes).success(function (mdata) {
                             $scope.likedMovies.push(mdata);
                         });

                     });
                 }
             });
    }
    $scope.getLikedMovies();
}]);