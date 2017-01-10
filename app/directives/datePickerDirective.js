editviewapp.directive('datePicker', function() {
    return {
        scope: {
            strdate: '='
        },
        template: '<p class="input-group">' +
            '<input type="text" class="form-control" style="width:84%;"  uib-datepicker-popup="MM/dd/yyyy"  ng-model="strdate" is-open="showdate"  show-button-bar="false" close-text="Close" />' +
            '<span class="input-group-btn">' +
            '<button type="button" class="btn btn-default" style="position: relative;height: 5%;height: 30px;display:block;" ng-click="open2()"><ng-md-icon icon="perm_contact_calendar" style="fill:#665454" size="20"></ng-md-icon></button>' +
            '</span></p>',

        // template: '<datetimepicker ng-model="strdate"  ' +
        //     ' date-format="dd-MM-yyyy" ' +
        //     ' date-options="dateOptions" ' +
        //     ' date-disabled="isDisabledDate(date, mode)" ng-required=false> ' +
        //     '</datetimepicker>',

        link: function(scope, element) {
            if (scope.strdate !== '')
                scope.strdate = new Date(scope.strdate); //moment(new Date()).format();
            scope.showdate = false;

            scope.open2 = function() {
                scope.showdate = true;
            };

        }
    };
});