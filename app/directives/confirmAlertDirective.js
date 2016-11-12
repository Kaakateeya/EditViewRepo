editviewapp.directive('ngConfirmClick', ['commonFactory',
    function() {
        return {
            scope: { val: '=' },
            link: function(scope, element, attr) {
                // var msg = attr.ngConfirmClick || "Are you sure?";
                // var clickAction = attr.confirmedClick;
                // element.bind('click', function(event) {
                //     if (scope.val != '') {
                //         if (window.confirm(msg)) {
                //             scope.$eval(clickAction)
                //         }
                //     }
                // });




                alert(23232);
            }
        };
    }
]);