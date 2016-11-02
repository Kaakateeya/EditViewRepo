editviewapp.controller('propertyCtrl', ['$uibModal', '$scope', 'propertyServices', function(uibModal, scope, propertyServices) {
    scope.propertyArr = [];

    scope.open = function(url) {
        scope.modalInstance = uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: url,
            scope: scope
        });
    };
    propertyServices.getPropertyData().then(function(response) {
        scope.propertyArr = response.data;
        console.log(response);
    });

    scope.populateProperty = function() {
        scope.open('propertyContent.html');
    }

}]);