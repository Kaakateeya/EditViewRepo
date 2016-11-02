editviewapp.controller("astroCtrl", ['$uibModal', '$scope', 'astroServices', function(uibModal, scope, astroServices) {
    scope.starLanguage = 'starLanguage';
    scope.open = function(url) {
        scope.modalInstance = uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: url,
            scope: scope
        });
    };


    scope.populateAstro = function() {
        scope.open('astroContent.html');
    }
    astroServices.getAstroData('91022').then(function(response) {
        scope.AstroArr = JSON.parse(response.data[0]);
    });

}]);