
  myApp.controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.classActive = function( viewLocation ) {
      if( $scope.isActive(viewLocation) ) {
        return 'active-btn';
      }
      else {
        return 'inactive-btn';
      }
    }
  });