editviewapp.factory('relativeServices', ['$http', function(http) {
    return {
        getRelativeeData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getRelativeDetailsDisplay', { params: { CustID: "91035" } });
        }
    };
}]);