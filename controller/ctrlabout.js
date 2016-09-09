app.controller("ctrlabout", function($rootScope,$scope,localStorageService,$http) {
	
	//load global 
    $rootScope.header = sitename+"|About";
    $scope.get_github_data();
    
    $rootScope.github_acount.img  = "http://icons.iconarchive.com/icons/aha-soft/people/256/user-info-icon.png";
    $rootScope.github_acount.quote = "About";
    $rootScope.heading = "http://myclassi.com/wp-content/uploads/2016/03/web-developer-3.jpg";
    $rootScope.page_name ="About";

});
