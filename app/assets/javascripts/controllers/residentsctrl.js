function residentsCtrl($scope){

  $scope.keys = 0;
  $scope.fobs = 0;

  $scope.total = 0;

  $scope.recalculate = function(){
    $scope.total = ($scope.keys*25) + ($scope.fobs*50)
  };

}

angular
  .module('app')
  .controller('residentsCtrl', residentsCtrl)
