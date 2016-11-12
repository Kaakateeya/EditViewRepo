/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */

var editviewapp = angular.module('Kaakateeya', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'jcs-autoValidate', 'ngMaterial']);
editviewapp.apipath = 'http://183.82.0.58:8010/Api/';
/**
 * Configure the Routes
 */

editviewapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/editEducationAndProfession", { templateUrl: "app/views/educationAndProfession.html", controller: "eduAndProfCtrl" })
        .when("/editManagePhoto", { templateUrl: "app/views/editManagePhoto.html", controller: "managePhotoCtrl" })
        .when("/editparent", { templateUrl: "app/views/editParentDetails.html", controller: "parentCtrl" })
        .when("/editPartnerPreferences", { templateUrl: "app/views/editPartnerPreferences.html", controller: "partnerPreferenceCtrl" })
        .when("/editSiblingDetails", { templateUrl: "app/views/editSibblingDetails.html", controller: "sibblingCtrl" })
        .when("/editAstro", { templateUrl: "app/views/editAstroDetails.html", controller: "astroCtrl" })
        .when("/editProperty", { templateUrl: "app/views/editPropertyDetails.html", controller: "propertyCtrl" })
        .when("/editRelative", { templateUrl: "app/views/editRelativeDetails.html", controller: "relativeCtrl" })
        .when("/editReferences", { templateUrl: "app/views/editReferenceDetails.html", controller: "referenceCtrl" })

    // Blog
    .when("/blog", { templateUrl: "partials/blog.html", controller: "BlogCtrl" })
        .when("/blog/post", { templateUrl: "partials/blog_item.html", controller: "BlogCtrl" })
        // else 404
        .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

}]);


editviewapp.controller('personalCtrl', ['$scope', 'personalDetailsService', function(scope, personalDetailsService) {

    personalDetailsService.personalDetails().then(function(response) {

        scope.PersonalObj = response.data;
    });
    scope.test = function() {
        alert('haha');

    }
}]);