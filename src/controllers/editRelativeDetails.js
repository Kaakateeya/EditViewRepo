editviewapp.controller("relativeCtrl", ['$uibModal', '$scope', 'relativeServices', function(uibModal, scope, relativeServices) {

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

    relativeServices.getRelativeeData().then(function(response) {
        scope.FBArr = JSON.parse(response.data[0]);
        scope.FSArr = JSON.parse(response.data[1]);
        scope.MBrr = JSON.parse(response.data[2]);
        scope.MSArr = JSON.parse(response.data[3]);
        console.log(response);
    });

}]);