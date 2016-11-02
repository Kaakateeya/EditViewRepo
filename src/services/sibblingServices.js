editviewapp.factory('sibblingServices', ['$http', function(http) {
    return {
        getSibblingeData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getsiblingsDetailsDisplay', { params: { CustID: "91035" } });
        }
    };
}]);