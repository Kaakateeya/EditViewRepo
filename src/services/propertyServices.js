editviewapp.factory('propertyServices', ['$http', function(http) {
    return {
        getPropertyData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getPropertyDetailsDisplay', { params: { CustID: "91035" } });
        }
    };
}]);