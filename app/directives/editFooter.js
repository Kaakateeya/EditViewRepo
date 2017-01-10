editviewapp.directive('editFooter', function() {
    return {
        restrict: 'E',
        template: '<div class="col-lg-9">' +
            '<button class="button_custom  pull-right" type="submit" promise-btn="submitPromise">Submit</button>' +
            '</div>' +
            ' <div class="col-lg-3">' +
            '<input value="Cancel" class="button_custom button_custom_reset  pull-right" ng-click="cancel();" type="button">' +
            ' </div>',
        link: function(scope, element, attrs) {


        }
    };
});