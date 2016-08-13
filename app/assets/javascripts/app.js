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

            .state('explore',{
              url: '/explore',
              templateUrl:'templates/explore.html'
            })
                .state('explore.shopping',{
                  url: '/shopping',
                  templateUrl: 'templates/shopping.html'
                })

                .state('explore.restaurants',{
                  url: '/restaurants',
                  templateUrl: 'templates/restaurants.html'
                })

            .state('lifestyle', {
              url: '/lifestyle',
              templateUrl: 'templates/lifestyle.html'
            })

            .state('listings', {
              url: '/listings',
              templateUrl: 'templates/listings.html',
              controller: 'listingCtrl'
            })

              .state('listings.new', {
                url: '/new',
                templateUrl: 'templates/listings/newform.html'
              })

            .state('listings_show', {
              url: '/listing/:listingId',
              templateUrl: 'templates/listings/show.html',
              controller: 'listingCtrl'
            })

            .state('residents', {
              url: '/residents',
              templateUrl: 'templates/residents.html',
              controller: 'residentsCtrl'
            })

    });
