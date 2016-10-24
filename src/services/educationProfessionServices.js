editviewapp.factory('editviewServices', ['$http', function (http) {
  return {
    getEducationData: function (obj) {
      debugger;
      return http.get(editviewapp.apipath + 'CustomerPersonal/CgetCustomerEducationdetails', { params: { ICustID: "91022" } });
    },
    getProfessionData: function (obj) {
      return http.get(editviewapp.apipath + 'CustomerPersonal/CgetCustomerProfessiondetails', { params: { ICustID: "91022" } });
    },
    submitEducationData: function (obj1) {
      return http.post(editviewapp.apipath + 'CustomerPersonal/CgetEducationdetails_Updatecustomer',JSON.stringify(obj1) );
    },
    submitProfessionData: function (obj1) {
      return http.post(editviewapp.apipath + 'CustomerPersonal/CgetProfessionDetails_Customer',JSON.stringify(myData) );
    }
  };
}]);