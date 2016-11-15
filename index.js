/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */

var editviewapp = angular.module('KaakateeyaEdit', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'jcs-autoValidate', 'ngMaterial']);
editviewapp.apipath = 'http://183.82.0.58:8010/Api/';
editviewapp.templateroot = 'editview/';
/**
 * Configure the Routes
 */

editviewapp.config(function($stateProvider, $urlRouterProvider) {

    var states = [
        { name: 'editview', url: '/editview', templateUrl: editviewapp.templateroot + 'app/views/educationAndProfession.html', controller: 'eduAndProfCtrl' },
        { name: 'editview.editEducationAndProfession', url: editviewapp.templateroot + '/editEducationAndProfession', templateUrl: 'app/views/educationAndProfession.html', controller: 'eduAndProfCtrl' },
        { name: 'editview.editManagePhoto', url: '/editManagePhoto', templateUrl: editviewapp.templateroot + 'app/views/editManagePhoto.html', controller: 'managePhotoCtrl' },
        { name: 'editview.editparent', url: '/editparent', templateUrl: editviewapp.templateroot + 'app/views/editParentDetails.html', controller: 'parentCtrl' },
        { name: 'editview.editPartnerPreferences', url: '/editPartnerPreferences', templateUrl: editviewapp.templateroot + 'app/views/editPartnerPreferences.html', controller: 'partnerPreferenceCtrl' },
        { name: 'editview.editSiblingDetails', url: '/editSiblingDetails', templateUrl: editviewapp.templateroot + 'app/views/editSibblingDetails.html', controller: 'sibblingCtrl' },
        { name: 'editview.editAstro', url: '/editAstro', templateUrl: editviewapp.templateroot + 'app/views/editAstroDetails.html', controller: 'astroCtrl', isloginrequired: true },
        { name: 'editview.editProperty', url: '/editProperty', templateUrl: editviewapp.templateroot + 'app/views/editPropertyDetails.html', controller: 'propertyCtrl', isloginrequired: true },
        { name: 'editview.editRelative', url: '/editRelative', templateUrl: editviewapp.templateroot + 'app/views/editRelativeDetails.html', controller: 'relativeCtrl' },
        { name: 'editview.editReferences', url: '/editReferences', templateUrl: editviewapp.templateroot + 'app/views/editReferenceDetails.html', controller: 'referenceCtrl' }

    ];

    $urlRouterProvider.otherwise('editview');

    _.each(states, function(item) {
        var innerView = {
            "topbar@": {
                templateUrl: editviewapp.templateroot + "masterView/header.html"
            },
            "content@": {
                templateUrl: item.templateUrl,
                controller: item.controller
            },
            "bottompanel@": {
                templateUrl: editviewapp.templateroot + "masterView/footer.html"
            }
        };
        $stateProvider.state(item.name, {
            url: item.url,
            views: innerView
        })
    });
});




















editviewapp.controller('personalCtrl', ['$scope', 'personalDetailsService', function(scope, personalDetailsService) {

    personalDetailsService.personalDetails().then(function(response) {

        scope.PersonalObj = response.data;
    });
    scope.test = function() {
        alert('haha');

    }
}]);