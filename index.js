/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */

var editviewapp = angular.module('Kaakateeya', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
editviewapp.apipath = 'http://183.82.0.58:8010/Api/';
/**
 * Configure the Routes
 */
editviewapp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    //.when("/", { templateUrl: "src/views/educationAndProfession.html",controller:'ModalControlleraa' })

    // Pages
    .when("/", { templateUrl: "src/popupDemo/modelDemo.html", controller: "ModalControlleraa" })
    // .when("/faq", { templateUrl: "partials/faq.html", controller: "PageCtrl" })
    // .when("/pricing", { templateUrl: "partials/pricing.html", controller: "PageCtrl" })
    // .when("/services", { templateUrl: "partials/services.html", controller: "PageCtrl" })
    // .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })
    // //edit Pages
    .when("/editEducationAndProfession", { templateUrl: "src/views/educationAndProfession.html", controller: "eduAndProfCtrl" })
    .when("/editManagePhoto", { templateUrl: "src/views/editManagePhoto.html", controller: "managePhotoCtrl" })
    .when("/editparent", { templateUrl: "src/views/editParentDetails.html", controller: "parentCtrl" })
    .when("/editPartnerPreferences", { templateUrl: "src/views/editPartnerPreferences.html", controller: "partnerPreferenceCtrl" })
    .when("/editSiblingDetails", { templateUrl: "src/views/editSibblingDetails.html", controller: "sibblingCtrl" })
    .when("/editAstro", { templateUrl: "src/views/editAstroDetails.html", controller: "astroCtrl" })
    .when("/editProperty", { templateUrl: "src/views/editPropertyDetails.html", controller: "propertyCtrl" })
    .when("/editRelative", { templateUrl: "src/views/editRelativeDetails.html", controller: "relativeCtrl" })
    .when("/editReferences", { templateUrl: "src/views/editReferenceDetails.html", controller: "referenceCtrl" })



    // Blog
    .when("/blog", { templateUrl: "partials/blog.html", controller: "BlogCtrl" })
    .when("/blog/post", { templateUrl: "partials/blog_item.html", controller: "BlogCtrl" })
    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

}]);


editviewapp.controller('personalCtrl', ['$scope','personalDetailsService', function (scope,personalDetailsService) {

personalDetailsService.personalDetails().then(function(response){
  console.log(response.data);
scope.PersonalObj=response.data;
});

  // scope.PersonalObj = {
  //   Cust_ID: '91035',
  //   ProfileID: '210910352',//
  //   FirstName: '',
  //   LastName: '',
  //   Name: 'Anil S',//
  //   Borncountry: 'India',//
  //   Age: '26',//
  //   DateofBirth: '22 Aug 1990',
  //   Caste: 'Reddy',//
  //   SubCaste: '',//
  //   Religion: 'Hindu ',//
  //   Complexion: 'Fair',//
  //   Height: "6'0 in - 183",//
  //   IsBornCountry: '',
  //   MartialStatus: 'Unmarried ',//
  //   ProfileStatusID: '',
  //   HeightInCentimeters: '',
  //   ComplexionID: '',
  //   CountryID: '',
  //   DateOfBirth: '',//
  //   SubCasteID: '',
  //   CasteID: '',
  //   ReligionID: '',
  //   MaritalStatusID: '',
  //   Mothertongue: 'Telugu'//
  // };



}]);

