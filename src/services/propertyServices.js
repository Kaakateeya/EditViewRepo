editviewapp.factory('propertyServices', ['$http', function(http) {
    return {
        getPropertyData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getPropertyDetailsDisplay', { params: { CustID: obj } });
        },
        submitPropertyData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPropertyUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);