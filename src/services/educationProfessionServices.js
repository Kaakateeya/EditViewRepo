editviewapp.factory('editviewServices',['$http',function(http){
    return{
       getEducationProfessionData:function(obj) {
         return http.get(editviewapp.apipath + 'CustomerPersonal/CgetCustomerEducationdetails',obj);
       }
    };
}]);