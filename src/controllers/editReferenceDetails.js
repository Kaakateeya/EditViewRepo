

editviewapp.controller('referenceCtrl', function ($uibModal, $log, $scope) {

    $scope.items = ['item1', 'item2', 'item3'];


    $scope.animationsEnabled = true;
    $scope.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'referenceContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$scope',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    };
});
