function newListingService($http){
  this.saveListing = function(listingData){
    return $http({
      method  : 'POST',
      url     : '/listings',
      data    : listingData  
    });
  }

}

angular
  .module('app')
  .service('newListingService', newListingService)
