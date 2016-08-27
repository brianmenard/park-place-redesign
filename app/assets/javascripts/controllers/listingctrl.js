function listingCtrl($scope, $filter, $http, $stateParams, $state, newListingService, deleteListingService){

  $scope.listings = {};

  $scope.updateListings = function(){
    $http.get('/listings')
       .then(function(res){
          $scope.listings = res.data;
        });
      };

  $scope.updateListings();

  $scope.searchInput = '';

  $scope.bedroomFilter = '';

  $scope.bathroomFilter = '';

  $scope.newListing = {};

  $http.get('/listings/' + $stateParams.listingId)
    .then(function(res){
      $scope.listing = res.data
    });

  $scope.createListing = function(listingData){
    newListingService.saveListing(listingData)
    .then(function(response){
        $scope.updateListings();
      });
  };

  $scope.deleteListing = function(listing){
    deleteListingService.deleteListing(listing)
    .then(function(response){
      $scope.updateListings();
      $state.go('listings');
    })
  };

}

angular
  .module('app')
  .controller('listingCtrl', listingCtrl)
