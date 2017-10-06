editviewapp.directive("alertDirective", ['commonFactory', '$uibModal', '$timeout', '$sce',

    function(commonFactory, uibModal, timeout, $sce) {
        var modalinstance;
        return {
            restrict: "E",
            templateUrl: "app/views/oldAlert.html",
            link: function(scope, element, attrs) {
                scope.$on('showAlertPopupccc', function(event, cls, msg, time) {
                    scope.typecls = cls;
                    scope.msgs = $sce.trustAsHtml(msg);
                    modalinstance = uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'oldAlert.html',
                        scope: scope,
                        windowClass: 'editAlertcls',
                    });
                    timeout(function() {
                        scope.close();
                    }, time || 4500);
                });
                scope.close = function() {
                    modalinstance.close();
                };
            }
        };
    }
]);