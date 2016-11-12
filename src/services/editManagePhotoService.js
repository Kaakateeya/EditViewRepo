editviewapp.factory('editmanagePhotoServices', ['$http', function(http) {
    return {
        getPhotoData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/GetphotosofCustomer', { params: { Custid: '104084', EmpID: 2 } });
        }
    };
}]);