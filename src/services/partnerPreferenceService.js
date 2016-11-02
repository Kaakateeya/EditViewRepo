editviewapp.factory('partnerPreferenceServices', ['$http', function(http) {
    return {
        getPartnerPreferenceData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerpartnerpreferencesDetailsDisplay', { params: { CustID: "91035" } });
        }
    };
}]);