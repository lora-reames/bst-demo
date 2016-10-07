angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Drivers) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.drivers = Drivers.all();
  $scope.remove = function(driver) {
    Drivers.remove(driver);
  };
})

.controller('DriverDetailCtrl', function($scope, $stateParams, Drivers) {
  $scope.driver = Drivers.get($stateParams.driverId);
})

.controller('MapCtrl', function($scope) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGIiLCJhIjoiY2l0ejlpNGd2MGJoajJ0bjRyOWswa29zciJ9.1LIOfpJ1f4DDO7o253VH_g';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.79, 32.77], // TODO base on company / driver locations
    zoom: 6
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableOffline: true
  };
});
