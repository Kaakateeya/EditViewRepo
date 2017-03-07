editviewapp.factory('SpouseServices', ['$http', function(http) {
    return {
        getSpouseData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerPersonalSpouse_Details', { params: { CustID: obj } });
        },
        submitSpouseData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/UpdateSpoucedetails_Customersetails', JSON.stringify(obj1));
        },
        submitChildeData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/UpdateSpouseChildDetails', JSON.stringify(obj1));
        }
    };
}]);