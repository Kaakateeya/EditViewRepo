editviewapp.factory('astroServices', ['$http', function(http) {
    return {
        getAstroData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getAstroDetailsDisplay', { params: { CustID: "91022" } });
        }
    };
}]);