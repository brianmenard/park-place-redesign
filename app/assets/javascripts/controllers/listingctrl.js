function listingCtrl($scope, $filter, $http, $stateParams){

  $http.get('/listings')
       .then(function(res){
          $scope.listings = res.data;
        });

  $scope.searchInput = '';

  $scope.bedroomFilter = '';

  $scope.bathroomFilter = '';

  $scope.newListing = {};

  $http.get('/listings/' + $stateParams.listingId)
    .then(function(res){
      $scope.listing = res.data
    });

  $scope.saveListing = function(listing){
    $http({
      method  : 'POST',
      url     : '/listings',
      data    : $.param($scope.newListing),  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {

//    console.log(data);

    //if (!data.success) {
      // if not successful, bind errors to error variables
    //  $scope.errorName = data.errors.name;
      //$scope.errorSuperhero = data.errors.superheroAlias;
    //} else {
      // if successful, bind success message to message
      //$scope.message = data.message;
    //}
    });


  }

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
