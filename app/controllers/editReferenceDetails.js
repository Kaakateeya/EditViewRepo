editviewapp.controller('referenceCtrl', ['$uibModal', '$scope', 'referenceServices', 'commonFactory', function(uibModal, scope, referenceServices, commonFactory) {

    var custID = '91035';
    scope.ReferenceArr = [];
    scope.refObj = {};
    scope.RelationshipType = 'RelationshipType';
    scope.Country = 'Country';
    scope.countryCode = 'countryCode';

    scope.referencePopulate = function(item) {
        scope.refObj.RefrenceCust_Reference_ID = null;
        scope.refObj = {};
        if (item != undefined) {
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


            if (item.RefrenceAreaCode != '' && item.RefrenceAreaCode != null) {
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
    }

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

    }



    scope.refenceSubmit = function(obj) {
        scope.referenceData = {
            GetDetails: {
                CustID: 91035,
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
                LandLineCountryID: obj.ddlMobileCountryID2 != '0' && obj.ddlMobileCountryID2 != null ? obj.ddlMobileCountryID2 : (obj.ddlLandLineCountryID != '0' && obj.ddlLandLineCountryID != null ? obj.ddlLandLineCountryID : null),
                LandLineAreaCode: obj.txtMobileNumber2 != '' && obj.txtMobileNumber2 != null ? null : (obj.txtAreCode != '' && obj.txtAreCode != null ? obj.txtAreCode : null),
                LandLineNumber: obj.txtMobileNumber2 != '0' && obj.txtMobileNumber2 != null ? obj.txtMobileNumber2 : (obj.txtLandNumber != '0' && obj.txtLandNumber != null ? obj.txtLandNumber : null),
                Emails: obj.txtEmails,
                Narration: obj.txtNarrations,
                Cust_Reference_ID: scope.refObj.RefrenceCust_Reference_ID
            },
            customerpersonaldetails: {
                intCusID: 91035,
                EmpID: null,
                Admin: null
            }
        }

        debugger;
        referenceServices.submitReferenceData(scope.referenceData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });


    }

    scope.cancel = function() {
        commonFactory.closepopup();
    };


}]);