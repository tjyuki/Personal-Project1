angular.module("d2d", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider
      .otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        controller: "homeCtrl",
        templateUrl: "components/home/homeTmpl.html"
      })

      .state("about", {
        url: "/about",
        controller: "aboutCtrl",
        templateUrl: "components/about/aboutTmpl.html"
      })

      .state("login", {
        url: "/login",
        controller: "loginCtrl",
        templateUrl: "components/login/loginTmpl.html"
      })

      .state("signup", {
        url: "/signup",
        controller: "loginCtrl",
        templateUrl: "components/signup/signupTmpl.html"
      })

  });
