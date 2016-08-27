function deleteListingService($http){
  this.deleteListing = function(listing){
    return $http({
      method  : 'DELETE',
      url     : '/listings/' + listing.id
    });
  }

}

angular
  .module('app')
  .service('deleteListingService', deleteListingService)
