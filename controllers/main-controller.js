

 function PhoneListCtrl($scope, $http){
		 	//var dataurl ='https://gdata.youtube.com/feeds/api/videos?author=OnlyViolinVideos&v=2&orderby=updated&alt=json';
			var dataurl='youtube2.json';
		 	$http.get(dataurl).success(function(data){
				$scope.vids = data;
				console.log(data);
		 	});

		}
