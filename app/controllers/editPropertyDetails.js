editviewapp.controller('propertyCtrl', ['$uibModal', '$scope', 'propertyServices', 'commonFactory',
    'authSvc', 'sibblingServices',
    function(uibModal, scope, propertyServices, commonFactory, authSvc, sibblingServices) {
        scope.propertyArr = [];
        scope.proObj = {};
        scope.familyStatus = 'familyStatus';

        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        var isSubmit = true;

        propertyServices.getPropertyData(custID).then(function(response) {
            scope.propertyArr = response.data;
        });

        scope.populateProperty = function(item) {
            isSubmit = true;
            scope.proObj = {};
            scope.proObj.Custpropertyid = null;
            if (item !== undefined) {
                sibblingServices.allowblockWebusers(custID).then(function(response) {
                    var testArr = JSON.parse(response.data[0]);
                    console.log(testArr);
                    if (testArr[0].BranchID !== 342) {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'To edit <b style"=color: maroon">Property Details</b>, please contact your relationship manager  ' + testArr[0].FirstName1 + ((testArr[0].LastName) !== null ? testArr[0].LastName : "") + "(" + testArr[0].OfficialContactNumber + ")", 4500);
                    } else {
                        scope.proObj.Custpropertyid = item.Custpropertyid;
                        scope.proObj.ddlFamilyStatus = item.FamilyValuesID;
                        scope.proObj.rdlSharedProperty = item.SharedPropertyID === true ? 1 : 0;
                        scope.proObj.txtValueofproperty = item.PropertyValue;
                        scope.proObj.txtPropertydesc = item.PropertyDetails;
                        commonFactory.open('propertyContent.html', scope, uibModal);
                    }
                });
            } else {
                commonFactory.open('propertyContent.html', scope, uibModal);
            }
        };


        scope.propertySubmit = function(obj) {

            if (isSubmit) {
                isSubmit = false;
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

                scope.submitPromise = propertyServices.submitPropertyData(scope.propertyData).then(function(response) {
                    console.log(response);
                    commonFactory.closepopup();
                    if (response.data === 1) {

                        propertyServices.getPropertyData(custID).then(function(response) {
                            scope.propertyArr = response.data;
                        });
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });
            }

        };

        scope.cancel = function() {
            commonFactory.closepopup();
        };


    }
]);