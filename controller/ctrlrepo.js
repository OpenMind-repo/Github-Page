app.controller("ctrlrepo", function($rootScope,$scope,$routeParams,localStorageService,$http) {
    $rootScope.header = sitename+"|Repo";

    //load global 
    $scope.get_github_data();
    $scope.get_github_image();
    $rootScope.heading = "http://wallpapercave.com/wp/odw55VD.png";
    $rootScope.page_name=$routeParams.name;

    $scope.singlerepo = {};
    $scope.relation_repo_contributor = [];	
    $scope.allcommits = [];
    $scope.countcommits= 0;

    $rootScope.get_repos_contributor = function(){
        $http({
            method: "GET",
            url: server.host+"/repos/"+username+"/"+$rootScope.page_name+"/contributors"
        }).then(function mySuccess(response){
            var a = response.data;
            $scope.relation_repo_contributor  =a;
            $scope.get_count_commit();
        })
    }
    $rootScope.get_detail_repo = function(){
        $http({
            method: "GET",
            url: server.host+"/repos/"+username+"/"+$rootScope.page_name
        }).then(function mySuccess(response){
            var a = response.data;
            $scope.singlerepo  =a;
			

        })
    }

    $scope.get_count_commit = function(){
    	for(var i =0;i < $scope.relation_repo_contributor.length; i++){
    		$scope.countcommits += $scope.relation_repo_contributor[i].contributions;
    	}
    }

    $scope.get_repos_comits = function(){
        $http({
            method: "GET",
            url: server.host+"/repos/"+username+"/"+$rootScope.page_name+"/commits"
        }).then(function mySuccess(response){
            var a = response.data;
            $scope.allcommits  =a;
        })
    }



    //load in class
    $scope.get_detail_repo();
    $scope.get_repos_comits();
    $rootScope.get_repos_contributor();
});
