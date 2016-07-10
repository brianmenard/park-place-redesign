function app(){

}

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/index.html'
            })

            .state('about', {
              url: '/about',
              templateUrl: 'templates/about.html'
            })

            .state('neighborhood',{
              url: '/neighborhood',
              templateUrl:'templates/neighborhood.html'
            })

            .state('lifestyle', {
              url: '/lifestyle',
              templateUrl: 'templates/lifestyle.html'
            })

            .state('listings', {
              url: 'listings',
              templateUrl: 'templates/listings.html'
            })
    });
