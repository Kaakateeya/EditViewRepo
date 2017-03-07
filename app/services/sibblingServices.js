editviewapp.factory('sibblingServices', ['$http', function(http) {
    return {
        getSibblingeData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getsiblingsDetailsDisplay', { params: { CustID: obj } });
        },
        submitSibBroData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerSibBrotherUpdatedetails', JSON.stringify(obj1));
        },
        submitSibSisData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerSibSisterUpdatedetails', JSON.stringify(obj1));
        },
        submitSibCountsData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/UpdateSibblingCounts', JSON.stringify(obj1));
        },
        allowblockWebusers: function(custid) {

            return http.get(editviewapp.apipath + 'StaticPages/getRegisteredBranchStatus', { params: { StrCustID: custid } });
        },
        // allowblockWebuserstuefalse: function(obj, Pagename) {
        //     if (obj[0].BranchID !== 342) {
        //         //alerts.timeoutoldalerts(scope, 'alert-danger', 'To edit < b style = color: maroon > ' + Pagename + ' < /b>, please contact your relationship manager  ' + obj.FirstName + obj.OfficialContactNumber, 2500);
        //         return false;
        //     } else {
        //         return true;
        //     }
        // }
    };
}]);