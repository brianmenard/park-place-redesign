function listingCtrl($scope){

  $scope.keys = 0;
  $scope.fobs = 0;

  $scope.total = 0;

}

angular
  .module('app')
  .controller('residentsCtrl', residentsCtrl)
