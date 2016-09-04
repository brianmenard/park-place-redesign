function listingCtrl($scope, $filter, $http, $stateParams, $state,
  newListingService, deleteListingService){

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
        //console.log(response);
        console.log(response.data);
        console.log($scope.listings);
        $scope.listings.push(response.data);
        //$scope.updateListings();  DONT WANT TO MAKE ANOTHER CALL
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
