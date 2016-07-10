function app(){

}

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider
            .state('test', {
                url: '/test',
                templateUrl: 'templates/test.html'
            })
    });
