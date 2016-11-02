editviewapp.controller("parentCtrl", ['$uibModal', '$scope', 'parentServices', 'commonFactory', function(uibModal, scope, parentServices, commonFactory) {

    parentServices.getParentData('91035').then(function(response) {
        scope.parentArr = JSON.parse(response.data[0]);
        scope.addressArr = JSON.parse(response.data[1]);
        scope.physicalArr = JSON.parse(response.data[2]);
        console.log(scope.physicalArr);
    });
    scope.populateParentModel = function() {
        commonFactory.open('parentModalContent.html', scope, uibModal);
    }





}]);