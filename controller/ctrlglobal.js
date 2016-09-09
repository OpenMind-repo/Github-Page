app.controller("ctrlglobal", function($rootScope,$scope,localStorageService,$http) {

    $scope.github_acount = {};
    $scope.avatar = "";
    $rootScope.page_name ="";
    $scope.repos_all = [];
    $rootScope.github_acount ={
        name : "",
        img : "",
        quote: "",
        url : "",
    }
    

    $scope.get_github_data =  function(){
        $http({
            method: "GET",
            url: server.host+"/users/"+username
        }).then(function mySuccess(response){
            var a = response.data;
            $rootScope.github_acount.name = a.name ;
            $rootScope.github_acount.quote =  a.bio;
            $rootScope.github_acount.url =  a.html_url;

        })
    }

    $scope.get_github_image =  function(){
        $http({
            method: "GET",
            url: server.host+"/users/"+username
        }).then(function mySuccess(response){
            var a = response.data;
            $rootScope.github_acount.img  = a.avatar_url;

        })   
    }

    $scope.get_repos =  function(){
        $http({
            method: "GET",
            url: server.host+"/users/"+username+"/repos"
        }).then(function mySuccess(response){
            var a = response.data;
            $scope.repos_all = a;
        })
         
    }

    

});
