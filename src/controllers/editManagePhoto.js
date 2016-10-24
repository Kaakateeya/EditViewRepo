
editviewapp.controller("managePhotoCtrl", ['$uibModal', '$log', '$scope', function (uibModal, log, scope) {

    scope.open = function (url) {
        scope.modalInstance = uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: url,
            scope: scope
        });
    };


    scope.AddImage = function () {
        scope.open('AddimagePopup.html');
    }


}]);