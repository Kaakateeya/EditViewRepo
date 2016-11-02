editviewapp.factory('parentServices', ['$http', function(http) {
    return {
        getParentData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getParentDetailsDisplay', { params: { CustID: obj } });
        },
        submitParentData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerParentUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);