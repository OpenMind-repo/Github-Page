app.controller("ctrlhome", function($rootScope,$scope,localStorageService,$http) {
    $rootScope.header = sitename+"|Home";

    ////load global 
    $scope.get_github_data();
    $scope.get_github_image();
    $rootScope.github_acount.img =  "https://avatars.githubusercontent.com/u/19405118?v=3";
    $rootScope.heading = "http://wallpapercave.com/wp/odw55VD.png";
    $rootScope.page_name="";
    $scope.get_repos();


    // | startFrom:currentPage*pageSize | limitTo:pageSize
    $scope.currentPage =  0;
    $scope.pageSize =  9;

    $scope.numberOfPages=function(){
        return Math.ceil($scope.repos_all.length/$scope.pageSize);                
    }

    
});
