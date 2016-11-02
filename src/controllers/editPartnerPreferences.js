editviewapp.controller("partnerPreferenceCtrl", ['partnerPreferenceServices', '$scope', '$uibModal', 'commonFactory', function(partnerPreferenceServices, scope, uibModal, commonFactory) {
    scope.partnerPrefArr = [];
    partnerPreferenceServices.getPartnerPreferenceData().then(function(response) {
        scope.partnerPrefArr = response.data;
    });

    scope.partnerprefPopulate = function() {
        commonFactory.open('partnerPrefContent.html', scope, uibModal);
    }
}]);