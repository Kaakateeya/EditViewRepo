editviewapp.factory('astroServices', ['$http', function(http) {
    return {
        getAstroData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getAstroDetailsDisplay', { params: { CustID: obj } });
        },
        submitAstroData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerAstrodetailsUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);