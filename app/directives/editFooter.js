editviewapp.directive('editFooter', function() {
    return {
        restrict: 'E',
        template: '<div class="col-lg-9">' +
            '{{loading}}<button class="button_custom  pull-right" ng-click="testtt();" ng-disabled="loading"  type="submit" promise-btn="submitPromise">Submit</button>' +
            '</div>' +
            ' <div class="col-lg-3">' +
            '<input value="Cancel"  class="button_custom button_custom_reset pull-right" ng-click="cancel();" type="button">' +
            ' </div>',
        link: function(scope, element, attrs) {

        }
    };
});