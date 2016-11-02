editviewapp.factory('referenceServices', ['$http', function(http) {
    return {
        getReferenceData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getReferenceViewDetailsDisplay', { params: { CustID: "91035" } });
        }
    };
}]);