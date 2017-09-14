editviewapp.directive('contactDirective', ['SelectBindService', 'commonFactory', '$mdDialog', 'bindMdl', '$timeout',
    function(SelectBindService, commonFactory, mdDialog, bindMdl, timeout) {
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
            templateUrl: editviewapp.templateroot + 'app/views/contacttemplate.html',
            link: function(scope, element, attr) {
                scope.countryCodeArr = [];
                scope.amob = (scope.stralternative !== null && scope.stralternative !== '' && scope.stralternative !== undefined) ? true : false;
                scope.land = (scope.strareacode !== null && scope.strareacode !== '' && scope.strareacode !== undefined) ? true : false;
                scope.mail = (scope.strmail !== null && scope.strmail !== '' && scope.strmail !== undefined) ? true : false;
                scope.pmob = (scope.strmobile !== null && scope.strmobile !== '' && scope.strmobile !== undefined) ? true : false;

                // var countryCodeArray = [];

                // timeout(function() {
                //     countryCodeArray = bindMdl.countryCode('get');

                //     if (countryCodeArray.length > 0) {
                //         scope.countryCodeArr = countryCodeArray;
                //     } else {
                //         SelectBindService.countryCodeselect().then(function(response) {
                //             scope.countryCodeArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
                //             _.each(response.data, function(item) {
                //                 scope.countryCodeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                //                 if (scope.countryCodeArr.length === response.data.length) {
                //                     bindMdl.countryCode('set', scope.countryCodeArr);
                //                 }
                //             });
                //         });
                //     }
                // }, 1500);
                scope.showhidemob = function(ev, type) {

                    scope.confirm = null;
                    switch (type) {
                        case 'mob':
                            if (scope.pmob === false) {
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
                    if (strval !== "" && strval !== undefined && strval !== null) {
                        scope.confirm = commonFactory.showConfirm(ev, mdDialog, 'Are You Sure To Delete ' + strdisplay + ' Number', 'delete', 'cancel');
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

                        scope.clear(type);

                    }, function() {

                    });
                };


            }
        };
    }
]);