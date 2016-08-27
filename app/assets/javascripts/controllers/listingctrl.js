function listingCtrl($scope, $filter, $http, $stateParams, newListingService){

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

}

angular
  .module('app')
  .controller('listingCtrl', listingCtrl)

/**
{address: 'Unit 3908',
  price: '$1700/mo',
  bedrooms: '1',
  bathrooms: '1',
  description: 'Lovely one bedroom with large windows'},
{address: 'Unit 5243',
  price: '$2450/mo',
  bedrooms: '2',
  bathrooms: '1',
  description: 'Two bedroom on the 52nd floor, pet friendly'},
{address: 'Unit 3407',
  price: '$1650/mo',
  bedrooms: '1',
  bathrooms: '2',
  description: 'One bedroom with newly renovated kitchen'}

**/
