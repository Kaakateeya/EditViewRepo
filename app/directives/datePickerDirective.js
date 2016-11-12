editviewapp.directive('datePicker', function() {
    return {
        scope: {
            strdate: '='
        },
        template: '<p class="input-group">' +
            '<input type="text" class="form-control" uib-datepicker-popup="dd-MM-yyyy"  ng-model="strdate" is-open="showdate" datepicker-options="dateOptions"  show-button-bar="false" close-text="Close" />' +
            '<span class="input-group-btn">' +
            '<button type="button" class="btn btn-default" ng-click="open2()"><i class="glyphicon glyphicon-calendar"></i></button>' +
            '</span></p>',
        link: function(scope, element) {

            // alert(scope.strdate);

            // scope.showdate = false;

            // scope.open2 = function() {
            //     scope.showdate = true;
            // };

        },
        controller: function($scope) {
            $scope.strdate = new Date($scope.strdate) //moment(new Date()).format();
            $scope.showdate = false;

            $scope.open2 = function() {
                $scope.showdate = true;
            };
        }
    }
});