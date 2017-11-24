/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */

var editviewapp = angular.module('KaakateeyaEdit', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap',
    'ngMaterial', 'ngMdIcons', 'jcs-autoValidate', 'angularPromiseButtons'
]);

editviewapp.apipath = 'http://183.82.0.58:8010/Api/';
// editviewapp.apipath = 'http://183.82.0.58:8010/Api/';
// editviewapp.apipath = 'http://54.169.133.223:8070/Api/';
// editviewapp.apipath = '/webroot/Api/';
// editviewapp.apipath = 'http://52.66.131.254:8010/Api/';
// editviewapp.apipath = 'http://183.82.0.58:3000/Api/'

editviewapp.templateroot = 'editview/';

// editviewapp.templateroot = '';

editviewapp.GlobalImgPath = 'http://d16o2fcjgzj2wp.cloudfront.net/';
editviewapp.GlobalImgPathforimage = 'https://s3.ap-south-1.amazonaws.com/kaakateeyaprod/';

editviewapp.prefixPath = 'Images/ProfilePics/';
editviewapp.S3PhotoPath = '';
editviewapp.Mnoimage = editviewapp.GlobalImgPath + "Images/customernoimages/Mnoimage.jpg";
editviewapp.Fnoimage = editviewapp.GlobalImgPath + "Images/customernoimages/Fnoimage.jpg";
editviewapp.accesspathdots = editviewapp.GlobalImgPathforimage + editviewapp.prefixPath;

editviewapp.BucketName = 'kaakateeyaprod';
/**
 * Configure the Routes
 */
editviewapp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var states = [
        { name: 'editview', url: '/editview', templateUrl: editviewapp.templateroot + 'app/views/educationAndProfession.html', controller: 'eduAndProfCtrl', isloginrequired: true },
        { name: 'editview.editEducationAndProfession', url: '/editEducationAndProfession', templateUrl: editviewapp.templateroot + 'app/views/educationAndProfession.html', controller: 'eduAndProfCtrl', isloginrequired: true },
        { name: 'editview.editManagePhoto', url: '/editManagePhoto', templateUrl: editviewapp.templateroot + 'app/views/editManagePhoto.html', controller: 'managePhotoCtrledit', isloginrequired: true },
        { name: 'editview.editparent', url: '/editparent', templateUrl: editviewapp.templateroot + 'app/views/editParentDetails.html', controller: 'parentCtrl', isloginrequired: true },
        { name: 'editview.editPartnerPreferences', url: '/editPartnerPreferences', templateUrl: editviewapp.templateroot + 'app/views/editPartnerPreferences.html', controller: 'partnerPreferenceCtrl', isloginrequired: true },
        { name: 'editview.editSiblingDetails', url: '/editSiblingDetails', templateUrl: editviewapp.templateroot + 'app/views/editSibblingDetails.html', controller: 'sibblingCtrl', isloginrequired: true },
        { name: 'editview.editAstro', url: '/editAstro', templateUrl: editviewapp.templateroot + 'app/views/editAstroDetails.html', controller: 'astroCtrl', isloginrequired: true },
        { name: 'editview.editProperty', url: '/editProperty', templateUrl: editviewapp.templateroot + 'app/views/editPropertyDetails.html', controller: 'propertyCtrl', isloginrequired: true },
        { name: 'editview.editRelative', url: '/editRelative', templateUrl: editviewapp.templateroot + 'app/views/editRelativeDetails.html', controller: 'relativeCtrl', isloginrequired: true },
        { name: 'editview.editReferences', url: '/editReferences', templateUrl: editviewapp.templateroot + 'app/views/editReferenceDetails.html', controller: 'referenceCtrl', isloginrequired: true },
        { name: 'editview.horoDisplay', url: '/horoDisplay', templateUrl: editviewapp.templateroot + 'app/views/horoDisplay.html', controller: 'horoDisplayCtrl', isloginrequired: false },
        // { name: 'editview.editSpouse', url: '/editSpouse', templateUrl: editviewapp.templateroot + 'app/views/editSpouseDetails.html', controller: 'Spousectrl', isloginrequired: true }

    ];

    $urlRouterProvider.otherwise('editview');

    _.each(states, function(item) {
        if (item.name === 'editview.horoDisplay') {
            var innerView = {
                "content@": {
                    templateUrl: item.templateUrl,
                    controller: item.controller
                }
            };
        } else {
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
        }


        $stateProvider.state(item.name, {
            url: item.url,
            views: innerView,
            data: {
                requiresLogin: item.isloginrequired == null ? true : item.isloginrequired,
            }
        })
        $locationProvider.html5Mode(true);
    });
});


editviewapp.controller('personalCtrl', ['$scope', 'personalDetailsService', 'authSvc', 'personalmodel', '$timeout',
    function(scope, personalDetailsService, authSvc, personalmodel, timeout) {
        var logincustid = authSvc.getCustId();

        var CustID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

        scope.unreviewedLinks = function() {
            personalDetailsService.menuReviewstatus(CustID).then(function(response) {
                scope.menuReviewdata = JSON.parse(response.data);
                _.each(scope.menuReviewdata, function(item) {
                    var SectionID = item.SectionID;
                    if (SectionID === 11 || SectionID === 12 || SectionID === 13 || SectionID == 15) {
                        scope.lnkparentsReview = true;
                    }
                    if (SectionID === 14 || SectionID === 25 || SectionID === 26) {
                        scope.lnksiblingsReview = true;
                    }
                    if (SectionID === 27 || SectionID === 28 || SectionID === 32 || SectionID === 33) {
                        scope.lnkrelativesReview = true;
                    }
                    if (SectionID === 6 || SectionID === 7 || SectionID === 8) {
                        scope.lnkeducationandprofReview = true;
                    }
                    if (SectionID === 16 || SectionID === 22) {
                        scope.lnkpartnerReview = true;
                    }
                    if (SectionID === 23) {
                        scope.lnkastroReview = true;
                    }
                    if (SectionID === 29) {
                        scope.lnkreferenceReview = true;
                    }
                    if (SectionID === 34) {
                        scope.lnkpropertyReview = true;
                    }
                });
            });
        };

        scope.personalDetails = function() {
            personalDetailsService.personalDetails(CustID).then(function(response) {
                scope.PersonalObj = response.data;
                scope.imgsrc = authSvc.getprofilepic();
            });
        };

        scope.pageload = function() {
            if (personalmodel.currentCustID === CustID) {
                scope.imgsrc = authSvc.getprofilepic();
                scope.menuReviewdata = personalmodel.menuReviewdata;
                scope.PersonalObj = personalmodel.PersonalObj;
            } else {
                scope.personalDetails();
                scope.unreviewedLinks();
                timeout(function() {
                    personalmodel.setCustID(CustID, scope.PersonalObj, scope.menuReviewdata);
                }, 500);
            }
        };
        scope.pageload();

    }
]);