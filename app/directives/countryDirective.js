editviewapp.directive('countryDirective', ['SelectBindService', 'commonFactory', 'bindMdl',
    function(SelectBindService, commonFactory, bindMdl) {
        return {
            scope: {
                countryshow: '=',
                cityshow: '=',
                dcountry: '=',
                dstate: '=',
                ddistrict: '=',
                dcity: '=',
                othercity: '=',
                strothercity: '=',
                require: '='
            },
            templateUrl: editviewapp.templateroot + 'app/views/countryTemplate.html',
            link: function(scope, element, attr) {
                scope.countryArr = [];

                if (scope.countryshow === true) {
                    // var countryarray = [];
                    // countryarray = bindMdl.Country('get');
                    // if (countryarray.length > 0) {
                    //     scope.countryArr = countryarray;
                    // } else {
                    //     SelectBindService.countrySelect().then(function(response) {
                    //         scope.countryArr.push({ "label": "--select--", "title": "--select--", "value": "" });
                    //         _.each(response.data, function(item) {
                    //             scope.countryArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    //         });
                    //         bindMdl.Country('set', scope.countryArr);
                    //     });
                    // }
                    if (scope.dcountry !== undefined) {
                        scope.stateArr = commonFactory.StateBind(scope.dcountry);
                    }
                } else {
                    scope.dcountry = '1';
                    SelectBindService.stateSelect('1').then(function(response) {
                        scope.stateArr = [];
                        scope.stateArr.push({ "label": "--select--", "title": "--select--", "value": "" });
                        _.each(response.data, function(item) {
                            scope.stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                    });
                }
                if ((scope.dcountry === '1' || scope.dcountry === 1) && scope.dstate !== undefined) {
                    scope.districtArr = commonFactory.districtBind(scope.dstate);
                } else {
                    if (scope.dstate !== undefined) {
                        scope.cityeArr = commonFactory.districtBind(scope.dstate);
                    }
                }

                if (scope.cityshow === true && scope.cityeArr === undefined) {
                    if (scope.ddistrict !== undefined) {
                        scope.cityeArr = commonFactory.cityBind(scope.ddistrict);
                    }
                }

                scope.changeBind = function(type, parentval, countryVal) {
                    switch (type) {
                        case 'Country':
                            scope.stateArr = commonFactory.StateBind(parentval);
                            break;

                        case 'State':
                            if (countryVal === '1' || countryVal === 1) {
                                scope.districtArr = commonFactory.districtBind(parentval);
                            } else {
                                scope.districtArr = [];
                                scope.cityeArr = commonFactory.districtBind(parentval);
                            }
                            break;

                        case 'District':
                            if (scope.cityshow === true) {
                                scope.cityeArr = commonFactory.cityBind(parentval);
                            }
                            break;
                    }

                };
                scope.ShowCity = function() {
                    scope.cityinput = true;
                    scope.dcity = '';
                };
            }
        };
    }
]);