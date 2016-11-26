editviewapp.controller('referenceCtrl', ['$uibModal', '$scope', 'referenceServices', 'commonFactory', 'authSvc', function(uibModal, scope, referenceServices, commonFactory, authSvc) {


    scope.ReferenceArr = [];
    scope.refObj = {};
    scope.RelationshipType = 'RelationshipType';
    scope.Country = 'Country';
    scope.countryCode = 'countryCode';

    var logincustid = authSvc.getCustId();
    var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;



    scope.referencePopulate = function(item) {
        scope.refObj.RefrenceCust_Reference_ID = null;
        scope.refObj = {};
        if (item !== undefined) {
            scope.stateArr = commonFactory.StateBind(item.RefrenceCountry);
            scope.districtArr = commonFactory.districtBind(item.RefrenceStateID);

            scope.refObj.intCusID = custID;
            scope.refObj.RefrenceCust_Reference_ID = item.RefrenceCust_Reference_ID;
            scope.refObj.ddlRelationshiptype = item.ReletionShipTypeID;
            scope.refObj.txtFname = item.ReferenceFirstName;
            scope.refObj.txtLname = item.ReferenceLastName;
            scope.refObj.txtProfessiondetails = item.RefrenceProfessionDetails;
            scope.refObj.ddlCountry = item.RefrenceCountry;
            scope.refObj.ddlState = item.RefrenceStateID;
            scope.refObj.ddlDistrict = item.RefrenceDistrictID;
            scope.refObj.txtNativePlace = item.RefrenceNativePlaceID;
            scope.refObj.txtPresentlocation = item.RefenceCurrentLocation;

            scope.refObj.ddlMobileCountryID = item.RefrenceMobileCountryID;

            scope.refObj.txtMobileNumber = item.RefrenceMobileNumberID;


            if (commonFactory.checkvals(item.RefrenceAreaCode)) {
                scope.refObj.ddlLandLineCountryID = item.RefrenceLandCountryId;
                scope.refObj.txtAreCode = item.RefrenceAreaCode;
                scope.refObj.txtLandNumber = item.RefrenceLandNumber;

            } else {
                scope.refObj.ddlMobileCountryID2 = item.RefrenceLandCountryId;
                scope.refObj.txtMobileNumber2 = item.RefrenceLandNumber;

            }

            scope.refObj.txtEmails = item.RefrenceEmail;
            scope.refObj.txtNarrations = item.RefrenceNarration;
        }
        commonFactory.open('referenceContent.html', scope, uibModal);
    };

    referenceServices.getReferenceData(custID).then(function(response) {
        scope.ReferenceArr = response.data;
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
        referenceServices.submitReferenceData(scope.referenceData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
                referenceServices.getReferenceData(custID).then(function(response) {
                    scope.ReferenceArr = response.data;
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