editviewapp.factory('editviewServices', ['$http', function(http) {

    return {
        getEducationData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerEducationdetails', { params: { CustID: "91035" } });
        },
        getProfessionData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerProfessiondetails', { params: { CustID: "91035" } });
        },
        getAboutData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getEducationProfession_AboutYourself', { params: { CustID: obj, AboutYourself: '', flag: 0 } });
        },
        submitEducationData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPersonalUpdateEducationdetail', JSON.stringify(obj1));
        },
        submitProfessionData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPersonalUpdateProfessionDetails', JSON.stringify(obj1));
        },
        submitAboutUrData: function(obj1) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getEducationProfession_AboutYourself', { params: obj1 });
        }

    };

}]);