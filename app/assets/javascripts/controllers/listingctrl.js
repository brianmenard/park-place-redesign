function listingCtrl($scope){
  $scope.listings = [
    {address: 'Unit 3908'},
    {address: 'Unit 5243'},
    {address: 'Unit 3407'}
  ];
}

angular
  .module('app')
  .controller('listingCtrl', listingCtrl)
