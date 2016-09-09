app.controller("ctrlcontact", function($rootScope,$scope,localStorageService,$http) {

	$rootScope.header = sitename+"|Contact";
	$scope.get_github_data();
	$rootScope.github_acount.img = "http://icons.iconarchive.com/icons/treetog/junior/256/contacts-icon.png";
	$rootScope.heading = "http://pre03.deviantart.net/fd91/th/pre/f/2014/004/e/2/there_s_no_place_like_127_0_0_1_by_jokkaboler-d70v5ax.jpg";
	$rootScope.page_name ="Contact";

	$scope.mail =  server.email;

	$scope.send_email  =  function(){
	  $http({
        method: "POST",
        url:"http://formspree.io/"+$scope.mail,
        headers: {
        	'Accept': 'application/json',
	        'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : $.param($scope.mail_data),

      }).then(function mySuccess(response){
          var a = response.data;
          $("#success").modal("show");
      })
	}
});