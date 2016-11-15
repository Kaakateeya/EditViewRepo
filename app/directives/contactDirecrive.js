editviewapp.directive('contactDirective', ['SelectBindService', 'commonFactory', '$mdDialog', function(SelectBindService, commonFactory, mdDialog) {
    return {
        scope: {
            dmobile: '=',
            strmobile: '=',
            dalternative: '=',
            stralternative: '=',
            dland: '=',
            strareacode: '=',
            strland: '=',
            strmail: '=',
            emailhide: '='
        },
        templateUrl: 'editview/app/views/contacttemplate.html',
        link: function(scope, element, attr) {

            scope.amob = (scope.stralternative != null && scope.stralternative != '' && scope.stralternative != undefined) ? true : false;
            scope.land = (scope.strareacode != null && scope.strareacode != '' && scope.strareacode != undefined) ? true : false;
            scope.mail = (scope.strmail != null && scope.strmail != '' && scope.strmail != undefined) ? true : false;
            scope.pmob = (scope.strmobile != null && scope.strmobile != '' && scope.strmobile != undefined) ? true : false;

            SelectBindService.countryCodeselect().then(function(response) {
                scope.countryCodeArr = [];
                scope.countryCodeArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
                _.each(response.data, function(item) {
                    scope.countryCodeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });

            scope.showhidemob = function(ev, type) {
                debugger;
                scope.confirm = null;
                switch (type) {
                    case 'mob':
                        if (scope.pmob == false) {
                            scope.pmob = true;
                        } else {
                            var lNaumber = scope.strland;
                            scope.checkMobile(ev, lNaumber, 'land', 'landline');
                        }
                        break;

                    case 'land':

                        var lNaumber1 = scope.stralternative;
                        scope.checkMobile(ev, lNaumber1, 'mob', 'alternative');
                        break;

                    case 'mail':
                        scope.mail = true;
                        break;
                }

            };

            scope.checkMobile = function(ev, strval, type, strdisplay) {
                debugger;
                if (strval != "" && strval != undefined) {
                    scope.confirm = commonFactory.showConfirm(ev, mdDialog, 'Are You Sure To Delete ' + strdisplay + ' Number', 'delete', 'cancel')
                    scope.test(type);

                } else {
                    scope.clear(type);
                }
            };
            scope.clear = function(type) {

                if (type === 'mob') {
                    scope.amob = false;
                    scope.land = true;
                    scope.dalternative = "";
                    scope.stralternative = "";
                } else {
                    scope.amob = true;
                    scope.land = false;
                    scope.dland = "";
                    scope.strareacode = "";
                    scope.strland = "";

                }
            };

            scope.test = function(type) {

                mdDialog.show(scope.confirm).then(function() {
                    debugger;
                    scope.clear(type);

                }, function() {

                });
            };


        }
    }
}]);