editviewapp.directive('countryDirective', ['SelectBindService', 'commonFactory', function(SelectBindService, commonFactory) {
    return {
        scope: {
            countryshow: '=',
            cityshow: '=',
            dcountry: '=',
            dstate: '=',
            ddistrict: '=',
            dcity: '=',
            othercity: '=',
            strothercity: '='
        },
        templateUrl: 'src/views/countryTemplate.html',
        link: function(scope, element, attr) {

            console.log(scope.strothercity);


            if (scope.countryshow === true) {
                SelectBindService.countrySelect().then(function(response) {
                    scope.countryArr = [];
                    scope.countryArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
                    _.each(response.data, function(item) {
                        scope.countryArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                });
                scope.stateArr = commonFactory.StateBind(scope.dcountry);
            } else {
                SelectBindService.stateSelect('1').then(function(response) {
                    scope.stateArr = [];
                    scope.stateArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
                    _.each(response.data, function(item) {
                        scope.stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                });
            }

            scope.districtArr = commonFactory.districtBind(scope.dstate);
            if (scope.cityshow === true) {
                scope.cityeArr = commonFactory.cityBind(scope.ddistrict);
            }

            scope.changeBind = function(type, parentval) {
                switch (type) {
                    case 'Country':
                        scope.stateArr = commonFactory.StateBind(parentval);
                        break;

                    case 'State':
                        scope.districtArr = commonFactory.districtBind(parentval);
                        break;

                    case 'District':
                        if (scope.cityshow === true) {
                            scope.cityeArr = commonFactory.cityBind(parentval);
                        }
                        break;

                }

            }

            scope.ShowCity = function() {
                scope.cityinput = true;
                scope.dcity = '';
            }



        }
    }
}]);