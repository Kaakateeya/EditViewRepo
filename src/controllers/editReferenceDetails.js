editviewapp.controller('referenceCtrl', ['$uibModal', '$scope', 'referenceServices', function(uibModal, scope, referenceServices) {
    scope.ReferenceArr = [];
    scope.open = function(url) {
        scope.modalInstance = uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: url,
            scope: scope
        });
    };

    scope.referencePopulate = function() {
        scope.open('referenceContent.html');

    }

    referenceServices.getReferenceData().then(function(response) {
        scope.ReferenceArr = response.data;
        console.log(response);
    });

}]);