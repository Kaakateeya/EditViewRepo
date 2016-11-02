editviewapp.controller("sibblingCtrl", ['$scope', '$uibModal', 'sibblingServices', function(scope, uibModal, sibblingServices) {

    scope.sibblingCountArr = [];
    scope.BrotherArr = [];
    scope.sisterCountArr = [];
    // scope.open = function(url) {
    //     scope.modalInstance = uibModal.open({
    //         ariaLabelledBy: 'modal-title',
    //         ariaDescribedBy: 'modal-body',
    //         templateUrl: url,
    //         scope: scope
    //     });
    // };

    // scope.referencePopulate = function() {
    //     scope.open('referenceContent.html');

    // }

    sibblingServices.getSibblingeData().then(function(response) {
        scope.sibblingCountArr = JSON.parse(response.data[0]);
        scope.BrotherArr = JSON.parse(response.data[1]);
        scope.sisterCountArr = JSON.parse(response.data[2]);
        console.log(scope.sisterCountArr);
    });


}]);