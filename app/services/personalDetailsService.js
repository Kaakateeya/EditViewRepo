editviewapp.factory('personalDetailsService', ["$http", function (http) {
    return {
        personalDetails: function (obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getpersonalMenuDetails', { params: {  CustID: "91035"  } });
        }
    }
}]);