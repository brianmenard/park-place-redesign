function listingCtrl($scope, $filter){
  $scope.listings = [
    {address: 'Unit 3908',
      price: '$1700/mo',
      description: 'Lovely one bedroom with large windows'},
    {address: 'Unit 5243',
      price: '$2450/mo',
      description: 'Two bedroom on the 52nd floor, pet friendly'},
    {address: 'Unit 3407',
      price: '$1650/mo',
      description: 'One bedroom with newly renovated kitchen'}
  ];

  $scope.searchInput = '';

  $scope.refilter = function(){
    $scope.filteredList = $filter('filter')(this.listings, this.searchInput);
  };

  $scope.refilter();

}

angular
  .module('app')
  .controller('listingCtrl', listingCtrl)
