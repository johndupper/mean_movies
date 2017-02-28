var app = angular.module('movies', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('index', {
    url: '/',
    templateUrl: 'templates/index.html'
    controller: 'indexCtrl',
    controllerAs: '$ctrl'
  });
});

app.controller('indexCtrl', function($http) {
  // do stuff
});
