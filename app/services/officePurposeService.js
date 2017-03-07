editviewapp.factory('officePurposeServices', ['$http', function(http) {
    return {
        getofficeData: function(iflag, obj, text) {
                return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerPersonaloffice_purpose', { params: { flag: iflag, ID: obj, AboutProfile: text } });
            }
            // ,
            // submitofficeData: function(obj1) {
            //     return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPropertyUpdatedetails', JSON.stringify(obj1));
            // }
    };
}]);