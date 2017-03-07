editviewapp.controller('referenceCtrl', ['$uibModal', '$scope', 'referenceServices', 'commonFactory',
    'authSvc', 'sibblingServices', 'editviewServices',
    function(uibModal, scope, referenceServices, commonFactory, authSvc, sibblingServices, editviewServices) {


        scope.ReferenceArr = [];
        scope.refObj = {};
        scope.RelationshipType = 'RelationshipType';
        scope.Country = 'Country';
        scope.countryCode = 'countryCode';
        scope.deleteDisplayTxt = 'reference';
        var isSubmit = true;
        scope.identityID = 0;
        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;



        scope.referencePopulate = function(item) {
            isSubmit = true;
            scope.refObj.RefrenceCust_Reference_ID = null;
            scope.refObj = {};

            if (item !== undefined) {
                sibblingServices.allowblockWebusers(custID).then(function(response) {
                    var testArr = JSON.parse(response.data[0]);
                    console.log(testArr);
                    if (testArr[0].BranchID !== 342) {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'To edit <b style"=color: maroon">Reference Details</b>, please contact your relationship manager  ' + testArr[0].FirstName1 + ((testArr[0].LastName) !== null ? testArr[0].LastName : "") + "(" + testArr[0].OfficialContactNumber + ")", 4500);
                    } else {
                        // scope.stateArr = commonFactory.StateBind(item.RefrenceCountry);
                        // scope.districtArr = commonFactory.districtBind(item.RefrenceStateID);

                        scope.refObj.intCusID = custID;
                        scope.refObj.RefrenceCust_Reference_ID = item.RefrenceCust_Reference_ID;
                        scope.refObj.ddlRelationshiptype = 318;

                        console.log(scope.refObj.ddlRelationshiptype);

                        scope.refObj.txtFname = item.ReferenceFirstName;
                        scope.refObj.txtLname = item.ReferenceLastName;
                        scope.refObj.txtProfessiondetails = item.RefrenceProfessionDetails;
                        scope.refObj.ddlCountry = commonFactory.checkvals(item.RefrenceCountry) ? parseInt(item.RefrenceCountry) : null;
                        scope.refObj.ddlState = commonFactory.checkvals(item.RefrenceStateID) ? parseInt(item.RefrenceStateID) : null;
                        scope.refObj.ddlDistrict = commonFactory.checkvals(item.RefrenceDistrictID) ? parseInt(item.RefrenceDistrictID) : null;
                        scope.refObj.txtNativePlace = item.RefrenceNativePlaceID;
                        scope.refObj.txtPresentlocation = item.RefenceCurrentLocation;

                        scope.refObj.ddlMobileCountryID = commonFactory.checkvals(item.RefrenceMobileCountryID) ? parseInt(item.RefrenceMobileCountryID) : null;

                        scope.refObj.txtMobileNumber = item.RefrenceMobileNumberID;

                        if (commonFactory.checkvals(item.RefrenceAreaCode)) {
                            scope.refObj.ddlLandLineCountryID = commonFactory.checkvals(item.RefrenceLandCountryId) ? parseInt(item.RefrenceLandCountryId) : null;
                            scope.refObj.txtAreCode = item.RefrenceAreaCode;
                            scope.refObj.txtLandNumber = item.RefrenceLandNumber;

                        } else {
                            scope.refObj.ddlMobileCountryID2 = commonFactory.checkvals(item.RefrenceLandCountryId) ? parseInt(item.RefrenceLandCountryId) : null;
                            scope.refObj.txtMobileNumber2 = item.RefrenceLandNumber;

                        }

                        scope.refObj.txtEmails = item.RefrenceEmail;
                        scope.refObj.txtNarrations = item.RefrenceNarration;
                        commonFactory.open('referenceContent.html', scope, uibModal);

                    }
                });
            } else {
                commonFactory.open('referenceContent.html', scope, uibModal);
            }
        };

        referenceServices.getReferenceData(custID).then(function(response) {
            scope.ReferenceArr = response.data;
            console.log(scope.ReferenceArr);
        });

        scope.changeBind = function(type, parentval) {
            switch (type) {
                case 'Country':
                    scope.stateArr = commonFactory.StateBind(parentval);
                    break;

                case 'State':
                    scope.districtArr = commonFactory.districtBind(parentval);
                    break;
            }

        };

        scope.refenceSubmit = function(obj) {

            if (isSubmit) {
                isSubmit = false;

                scope.referenceData = {
                    GetDetails: {
                        CustID: custID,
                        RelationshiptypeID: obj.ddlRelationshiptype,
                        Firstname: obj.txtFname,
                        Lastname: obj.txtLname,
                        Employedin: null,
                        Professiongroup: null,
                        Profession: null,
                        Professiondetails: obj.txtProfessiondetails,
                        CountryID: obj.ddlCountry,
                        StateID: obj.ddlState,
                        DistrictID: obj.ddlDistrict,
                        Nativeplace: obj.txtNativePlace,
                        Presentlocation: obj.txtPresentlocation,
                        MobileCountryID: obj.ddlMobileCountryID,
                        MobileNumber: obj.txtMobileNumber,
                        LandLineCountryID: commonFactory.checkvals(obj.ddlMobileCountryID2) ? obj.ddlMobileCountryID2 : (commonFactory.checkvals(obj.ddlLandLineCountryID) ? obj.ddlLandLineCountryID : null),
                        LandLineAreaCode: commonFactory.checkvals(obj.txtMobileNumber2) ? null : (commonFactory.checkvals(obj.txtAreCode) ? obj.txtAreCode : null),
                        LandLineNumber: commonFactory.checkvals(obj.txtMobileNumber2) ? obj.txtMobileNumber2 : (commonFactory.checkvals(obj.txtLandNumber) ? obj.txtLandNumber : null),
                        Emails: obj.txtEmails,
                        Narration: obj.txtNarrations,
                        Cust_Reference_ID: scope.refObj.RefrenceCust_Reference_ID
                    },
                    customerpersonaldetails: {
                        intCusID: custID,
                        EmpID: null,
                        Admin: null
                    }
                };
                scope.submitPromise = referenceServices.submitReferenceData(scope.referenceData).then(function(response) {
                    console.log(response);
                    commonFactory.closepopup();
                    if (response.data === 1) {
                        referenceServices.getReferenceData(custID).then(function(response) {
                            scope.ReferenceArr = response.data;
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


        scope.DeletePopup = function(id) {
            scope.identityID = id;
            commonFactory.open('app/views/deletepopup.html', scope, uibModal, 'sm');
        };

        scope.deleteSubmit = function(type) {
            editviewServices.DeleteSection({ sectioname: 'Reference', CustID: custID, identityid: scope.identityID }).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                referenceServices.getReferenceData(custID).then(function(response) {
                    scope.ReferenceArr = response.data;
                    console.log(scope.ReferenceArr);
                });
            });
        };



    }
]);