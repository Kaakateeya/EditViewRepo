editviewapp.controller('propertyCtrl', ['$uibModal', '$scope', 'propertyServices', 'commonFactory', 'authSvc', function(uibModal, scope, propertyServices, commonFactory, authSvc) {
    scope.propertyArr = [];
    scope.proObj = {};
    scope.familyStatus = 'familyStatus';

    var logincustid = authSvc.getCustId();
    var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;


    propertyServices.getPropertyData(custID).then(function(response) {
        scope.propertyArr = response.data;
    });

    scope.populateProperty = function(item) {
        scope.proObj = {};
        scope.proObj.Custpropertyid = null;
        if (item !== undefined) {
            scope.proObj.Custpropertyid = item.Custpropertyid;
            scope.proObj.ddlFamilyStatus = item.FamilyValuesID;
            scope.proObj.rdlSharedProperty = item.SharedPropertyID === true ? 1 : 0;
            scope.proObj.txtValueofproperty = item.PropertyValue;
            scope.proObj.txtPropertydesc = item.PropertyDetails;
        }

        commonFactory.open('propertyContent.html', scope, uibModal);
    };


    scope.propertySubmit = function(obj) {
        scope.propertyData = {
            GetDetails: {
                FamilyStatus: obj.ddlFamilyStatus,
                Issharedproperty: obj.rdlSharedProperty,
                Valueofproperty: obj.txtValueofproperty,
                PropertyType: '281',
                Propertydescription: obj.txtPropertydesc,
                Showingviewprofile: obj.rbtShowViewProfile,
                Custpropertyid: scope.proObj.Custpropertyid,
                PropertyID: scope.proObj.Custpropertyid,
                CustId: custID
            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        };

        propertyServices.submitPropertyData(scope.propertyData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
                propertyServices.getPropertyData(custID).then(function(response) {
                    scope.propertyArr = response.data;
                });
            } else {
                alert('Updation failed');
            }
        });
    };

    scope.cancel = function() {
        commonFactory.closepopup();
    };


}]);