/*
  configurasi untuk routing
  pada aplikasi
  dimana yang mengatur routes
  app...
*/

app.config(['$routeProvider',
  function($routeProvider ,localStorageServiceProvider) {

    $routeProvider
      .when('/',{
         templateUrl :View+"/home.html",
         controller  :"ctrlhome"
        })
      .when('/about',{
         templateUrl:View+"/about.html",
         controller:"ctrlabout"
      })
      .when('/contact',{
        templateUrl:View+"/contact.html",
        controller:"ctrlcontact"
      })
      .when('/repo/:name',{
        templateUrl:View+"/repo.html",
        controller:"ctrlrepo"
      })
      .otherwise({
         templateUrl:View+"/404.html"
      })
    }
  ,]);