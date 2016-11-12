editviewapp.factory('referenceServices', ['$http', function(http) {
    return {
        getReferenceData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getReferenceViewDetailsDisplay', { params: { CustID: obj } });
        },
        submitReferenceData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerReferencedetailsUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);