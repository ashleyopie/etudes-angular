
       function ComposerCtrl($scope, $http){
      
       	//TODO: put into service
      //var dataurl ='https://gdata.youtube.com/feeds/api/videos?author=OnlyViolinVideos&v=2&orderby=updated&alt=json';
      var compfile='composers.json';
      $http.get(compfile).success(function(data){
        $scope.composers = data;
        console.log(data);
      });
      
      
    }