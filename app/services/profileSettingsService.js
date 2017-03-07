editviewapp.factory('profileSettingsService', ['$http', function(http) {
    return {
        getProfileSettingData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerprofilesettingDetails', { params: { CustID: obj } });
        },
        submitGradeData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerProfileSetting_Gradeselection', JSON.stringify(obj1));
        },
        submitProfileSettingAndDispalyData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerProfileSetting_ProfileSetting', JSON.stringify(obj1));
        }
    };
}]);