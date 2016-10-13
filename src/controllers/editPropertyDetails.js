

  editviewapp.controller('propertyCtrl', function ($uibModal, $log, $scope) {

  $scope.items = ['item1', 'item2', 'item3'];

 
  $scope.animationsEnabled = true;
  $scope.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'propertyContent.html',
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




