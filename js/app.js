                                                                    
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/settings/profile");	

	$stateProvider
		.state('settings', {
			url: "/settings",
			templateUrl: "templates/settings.html"
		})
		.state('settings.profile', {
			url: "/profile",
			templateUrl: "templates/profile.html"
		})
		.state('settings.account', {
			url: "/account",
			templateUrl: "templates/account.html"
		});
	
});


app.controller("ctrl", function ($scope) {
    $scope.hello="hello";
});