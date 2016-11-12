editviewapp.controller("relativeCtrl", ['$uibModal', '$scope', 'relativeServices', 'commonFactory', function(uibModal, scope, relativeServices, commonFactory) {

    var custid = '104613';

    scope.fbObj = {};
    scope.fsObj = {};
    scope.mbObj = {};
    scope.msObj = {};
    scope.countryCode = 'countryCode';
    scope.indiaStates = 'indiaStates';

    relativeServices.getRelativeeData(custid).then(function(response) {
        scope.FBArr = JSON.parse(response.data[0]);
        scope.FSArr = JSON.parse(response.data[1]);
        scope.MBrr = JSON.parse(response.data[2]);
        scope.MSArr = JSON.parse(response.data[3]);
        console.log(scope.FBArr);
        console.log(scope.FSArr);
        console.log(scope.MBrr);
        console.log(scope.MSArr);

    });

    scope.relativePopulatePopulate = function(type, item) {

        switch (type) {
            case 'FB':
                scope.fbObj.FatherbrotherCustfamilyID = null;
                scope.fbObj = {};
                if (item != undefined) {
                    scope.fbObj.FatherbrotherCustfamilyID = item.FatherbrotherCustfamilyID;
                    scope.fbObj.rdlFBElderORyounger = item.FatherBrotherElderyounger == 'Elder' ? 324 : (item.FatherBrotherElderyounger == 'Younger' ? 323 : '-1');
                    scope.fbObj.txtFatherbrothername = item.FatherbrotherName;
                    scope.fbObj.txtFBEducationdetails = item.FatherBrotherEducationDetails;
                    scope.fbObj.txtFBProfessiondetails = item.FatherbrotherProfessionDetails;

                    scope.fbObj.ddlFBMobileCountryID = item.FatherbrotherMobileCode;
                    scope.fbObj.txtFBMobileNumber = item.FatherbrotherMobileNumber;

                    if (item.FatherbrotherLandaraecode != '' && item.FatherbrotherLandaraecode != null) {
                        scope.fbObj.ddlFBLandLineCountry = item.FatherbrotherLandCountryCode;
                        scope.fbObj.txtFBAreCode = item.FatherbrotherLandaraecode;
                        scope.fbObj.txtFBLandNumber = item.FatherbrotherLandNumber;
                    } else {
                        scope.fbObj.ddlFBMobileCountryID2 = item.FatherbrotherLandCountryCode;
                        scope.fbObj.txtFBMobileNumber2 = item.FatherbrotherLandNumber;
                    }

                    scope.fbObj.txtFBEmails = item.FatherbrotherEmail;
                    scope.fbObj.txtCurrentLocation = item.FatherbrotherCurrentLocation;

                }
                commonFactory.open('FBModalContent.html', scope, uibModal);
                break;

            case 'FS':
                scope.fsObj.FatherSisterCustfamilyID = null;
                scope.fsObj = {};
                if (item != undefined) {

                    scope.fsDistrict = commonFactory.districtBind(item.FatherSisterspousestateId);

                    scope.fsObj.FatherSisterCustfamilyID = item.FatherSisterCustfamilyID;
                    scope.fsObj.rdlFSElderYounger = item.FatherSisterElderyounger == 'Elder' ? 326 : (item.FatherSisterElderyounger == 'Younger' ? 325 : '-1');
                    scope.fsObj.txtFathersistername = item.FatherSisterName;
                    scope.fsObj.txtFSHusbandfirstname = item.SpouceFName;
                    scope.fsObj.txtFSHusbandlastname = item.SpoucelName;
                    scope.fsObj.txtFSHEDucation = item.FatherSisterSpouseEducationDetails;
                    scope.fsObj.txtFSProfessiondetails = item.FathersisterSpouseProfessionDetails;
                    scope.fsObj.ddlFSHStateID = item.FatherSisterspousestateId;
                    scope.fsObj.ddlFSHDistrictID = item.FatherSisterspouseDistrictId;
                    scope.fsObj.txtFSHNativePlace = item.FathersisterSpouseNativePlace;

                    scope.fsObj.ddlFSMObileCountryID = item.FatherSisterMobilecodeid;
                    scope.fsObj.txtFSMobileNumber = item.FatherSisterspouseMobileNumber;

                    if (item.FatherSisterspouseLandaraecode != '' && item.FatherSisterspouseLandaraecode != null) {
                        scope.fsObj.ddlFSHLandCountryID = item.FatherSisterlandcontrycodeid;
                        scope.fsObj.txtFSHAreaNumber = item.FatherSisterspouseLandaraecode;
                        scope.fsObj.txtFSHNUmber = item.FatherSisterspouseLandNumber;

                    } else {
                        scope.fsObj.ddlFSMObileCountryID2 = item.FatherSisterlandcontrycodeid;
                        scope.fsObj.txtFSMobileNumber2 = item.FatherSisterspouseLandNumber;
                    }

                    scope.fsObj.txtFSHEmails = item.FatherSisterspouseEmail;
                    scope.fsObj.txtFSHCurrentLocation = item.FatherSisterCurrentLocation;

                }
                commonFactory.open('FSModalContent.html', scope, uibModal);
                break;

            case 'MB':
                scope.mbObj.MotherBrotherCustfamilyID = null;
                scope.mbObj = {};
                if (item != undefined) {
                    scope.mbObj.MotherBrotherCustfamilyID = item.MotherBrotherCustfamilyID;
                    scope.mbObj.rdlMBElderYounger = item.MotherBrotherElderyounger == 'Elder' ? 328 : (item.MotherBrotherElderyounger == 'Younger' ? 327 : '-1');
                    scope.mbObj.txtMBName = item.MotherBrotherName;
                    scope.mbObj.txtMBEducation = item.MotherBrotherEducationDetails;
                    scope.mbObj.txtMBProfessiondetails = item.MotherBrotherProfessionDetails;

                    scope.mbObj.ddlMBCountriCode = item.MotherBrotherMobileCode;
                    scope.mbObj.txtMBMobileNum = item.MotherBrotherMobileNumber;

                    if (item.MotherBrotherLandaraecode != '' && item.MotherBrotherLandaraecode != null) {
                        scope.mbObj.ddlMBLandLineCountryCode = item.MotherBrotherLandCountryCode;
                        scope.mbObj.txtMBAreaCode = item.MotherBrotherLandaraecode;
                        scope.mbObj.txtMBLandLineNum = item.MotherBrotherLandNumber;

                    } else {
                        scope.mbObj.ddlMBCountriCode2 = item.MotherBrotherLandCountryCode;
                        scope.mbObj.txtMBMobileNum2 = item.MotherBrotherLandNumber;
                    }

                    scope.mbObj.txtMBEmails = item.MotherBrotherEmail;
                    scope.mbObj.txtMBCurrentLocation = item.MotherBrotherCurrentLocation;

                }
                commonFactory.open('MBModalContent.html', scope, uibModal);
                break;
            case 'MS':
                scope.msObj.MotherSisterCustfamilyID = null;
                scope.msObj = {};
                if (item != undefined) {

                    scope.msDistrict = commonFactory.districtBind(item.spousestateid);

                    scope.msObj.MotherSisterCustfamilyID = item.MotherSisterCustfamilyID;
                    scope.msObj.rdlMSElderYounger = item.MotherSisterElderyounger == 'Elder' ? 330 : (item.MotherSisterElderyounger == 'Younger' ? 329 : '-1');
                    scope.msObj.txtMSName = item.MotherSisterName;
                    scope.msObj.txtMsHusbandfirstname = item.SpouceFName;
                    scope.msObj.txtMsHusbandlastname = item.SpoucelName;
                    scope.msObj.ddlMSisState = item.spousestateid;
                    scope.msObj.ddlMsDistrict = item.spousedistrictID;
                    scope.msObj.txtMSNativePlace = item.MotherSisterSpouseNativePlace;
                    scope.msObj.txtMSHEducation = item.MothersisterspouseEducationdetails;
                    scope.msObj.txtMSProfessiondetails = item.MotherSisterProfessionDetails;

                    scope.msObj.ddlMSCounCodeID = item.MotherSisterMobileCodeId;
                    scope.msObj.txtMSMObileNum = item.MotherSisterspouseMobileNumber;

                    if (item.MotherSisterspouseLandaraecode != '' && item.MotherSisterspouseLandaraecode != null) {
                        scope.msObj.ddlMSLLCounCode = item.MotherSisterSpouselandcodeid;
                        scope.msObj.txtMSArea = item.MotherSisterspouseLandaraecode;
                        scope.msObj.txtLLNum = item.MotherSisterspouseLandNumber;
                    } else {
                        scope.msObj.ddlMSCounCodeID2 = item.MotherSisterSpouselandcodeid;
                        scope.msObj.txtMSMObileNum2 = item.MotherSisterspouseLandNumber;
                    }

                    scope.msObj.txtMSEmail = item.MotherSisterspouseEmail;
                    scope.msObj.txtMSCurrentLocation = item.MotherSisterCurrentLocation;

                }
                commonFactory.open('MSModalContent.html', scope, uibModal);
                break;
        }

    }

    scope.changeBind = function(type, parentval) {

        switch (type) {
            case 'fs':
                scope.fsDistrict = commonFactory.districtBind(parentval);
                break;

            case 'ms':
                scope.msDistrict = commonFactory.districtBind(parentval);
                break;
        }
    }

    scope.FBSubmit = function(obj) {
        scope.FBData = {
            GetDetails: {
                CustID: custid,
                Fatherbrothername: obj.txtFatherbrothername,
                FBElderYounger: obj.rdlFBElderORyounger,
                FBEmployedin: null,
                FBProfessiongroup: null,
                FBProfession: null,
                FBProfessiondetails: obj.txtFBProfessiondetails,
                FBMobileCountryID: obj.ddlFBMobileCountryID,
                FBMobileNumber: obj.txtFBMobileNumber,
                FBLandLineCountryID: obj.ddlFBMobileCountryID2 != '0' && obj.ddlFBMobileCountryID2 != null ? obj.ddlFBMobileCountryID2 : (obj.ddlFBLandLineCountry != '0' && obj.ddlFBLandLineCountry != null ? obj.ddlFBLandLineCountry : null),
                FBLandAreaCode: obj.txtFBMobileNumber2 != '' && obj.txtFBMobileNumber2 != null ? null : (obj.txtFBAreCode != '' && obj.txtFBAreCode != null ? obj.txtFBAreCode : null),
                FBLandNumber: obj.txtFBMobileNumber2 != '' && obj.txtFBMobileNumber2 != null ? obj.txtFBMobileNumber2 : (obj.txtFBLandNumber != '' && obj.txtFBLandNumber != null ? obj.txtFBLandNumber : null),
                FBEmails: obj.txtFBEmails,
                FBCurrentLocation: obj.txtCurrentLocation,
                FatherbrotherCust_familyID: scope.fbObj.FatherbrotherCustfamilyID,
                FatherBrotherEducationDetails: obj.txtFBEducationdetails,

            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitFBData(scope.FBData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    }

    scope.FSSubmit = function(obj) {
        scope.FSData = {
            GetDetails: {
                CustID: custid,
                FSFathersistername: obj.txtFathersistername,
                FSElderYounger: obj.rdlFSElderYounger,
                FSHusbandfirstname: obj.txtFSHusbandfirstname,
                FSHusbandlastname: obj.txtFSHusbandlastname,
                FSCountryID: 1,
                FSHStateID: obj.ddlFSHStateID,
                FSHDistrict: obj.ddlFSHDistrictID,
                FSNativeplace: obj.txtFSHNativePlace,
                FSHEmployedin: null,
                FSHProfessiongroup: null,
                FSHProfession: null,
                FSHProfessiondetails: obj.txtFSProfessiondetails,
                FSHMobileCountryID: obj.ddlFSMObileCountryID,
                FSHMObileNumber: obj.txtFSMobileNumber,
                FSHLandCountryID: obj.ddlFSMObileCountryID2 != '0' && obj.ddlFSMObileCountryID2 != null ? obj.ddlFSMObileCountryID2 : (obj.ddlFSHLandCountryID != '0' && obj.ddlFSHLandCountryID != null ? obj.ddlFSHLandCountryID : null),
                FSHLandAreaCode: obj.txtFSMobileNumber2 != '' && obj.txtFSMobileNumber2 != null ? null : (obj.txtFSHAreaNumber != '' && obj.txtFSHAreaNumber != null ? obj.txtFSHAreaNumber : null),
                FSHLandNumber: obj.txtFSMobileNumber2 != '' && obj.txtFSMobileNumber2 != null ? obj.txtFSMobileNumber2 : (obj.txtFSHNUmber != '' && obj.txtFSHNUmber != null ? obj.txtFSHNUmber : null),
                FSHEmails: obj.txtFSHEmails,
                FSCurrentLocation: obj.txtFSHCurrentLocation,
                FatherSisterCust_familyID: scope.fsObj.FatherSisterCustfamilyID,
                FSHEducationdetails: obj.txtFSHEDucation
            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitFSData(scope.FSData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    }

    scope.MBSubmit = function(obj) {
        scope.MBData = {
            GetDetails: {
                CustID: custid,
                Motherbrothername: obj.txtMBName,
                MBElderYounger: obj.rdlMBElderYounger,
                MBEmployedin: null,
                MBProfessiongroup: null,
                MBProfession: null,
                MBProfessiondetails: obj.txtMBProfessiondetails,
                MBMobileCountryID: obj.ddlMBCountriCode,
                MBMObileNumber: obj.txtMBMobileNum,
                MBLandLineCountryID: obj.ddlMBCountriCode2 != '0' && obj.ddlMBCountriCode2 != null ? obj.ddlMBCountriCode2 : (obj.ddlMBLandLineCountryCode != '0' && obj.ddlMBLandLineCountryCode != null ? obj.ddlMBLandLineCountryCode : null),
                MBLandAreaCode: obj.txtMBMobileNum2 != '' && obj.txtMBMobileNum2 != null ? null : (obj.txtMBAreaCode != '' && obj.txtMBAreaCode != null ? obj.txtMBAreaCode : null),
                MBLandNumber: obj.txtMBMobileNum2 != '' && obj.txtMBMobileNum2 != null ? obj.txtMBMobileNum2 : (obj.txtMBLandLineNum != '' && obj.txtMBLandLineNum != null ? obj.txtMBLandLineNum : null),
                MBEmails: obj.txtMBEmails,
                MBCurrentLocation: obj.txtMBCurrentLocation,
                MBMotherBrotherCust_familyID: scope.mbObj.MotherBrotherCustfamilyID,
                MBEducationdetails: obj.txtMBEducation
            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitMBData(scope.MBData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    }

    scope.MSSubmit = function(obj) {
        scope.MSData = {
            GetDetails: {
                CustID: custid,
                Mothersistername: obj.txtMSName,
                MSElderYounger: obj.rdlMSElderYounger,
                MSHusbandfirstname: obj.txtMsHusbandfirstname,
                MSHusbandlastname: obj.txtMsHusbandlastname,
                MSCountryID: 1,
                MSMSHStateID: obj.ddlMSisState,
                MSMSHDistrictID: obj.ddlMsDistrict,
                MSNativeplace: obj.txtMSNativePlace,
                MSEmployedin: null,
                MSProfession: null,
                MSProfessiondetails: obj.txtMSProfessiondetails,
                MSMSHMobileCountryID: obj.ddlMSCounCodeID,
                MSMObileNumber: obj.txtMSMObileNum,
                MSHLandlineCountryID: obj.ddlMSCounCodeID2 != '' && obj.ddlMSCounCodeID2 != '0' && obj.ddlMSCounCodeID2 != null ? obj.ddlMSCounCodeID2 : (obj.ddlMSLLCounCode != '' && obj.ddlMSLLCounCode != '0' && obj.ddlMSLLCounCode != null ? obj.ddlMSLLCounCode : null),
                MSLandAreaCode: obj.txtMSMObileNum2 != '' && obj.txtMSMObileNum2 != null ? null : (obj.txtMSArea != '' && obj.txtMSArea != null ? obj.txtMSArea : null),
                MSLandNumber: obj.txtMSMObileNum2 != '' && obj.txtMSMObileNum2 != null ? obj.txtMSMObileNum2 : (obj.txtLLNum != '' && obj.txtLLNum != null ? obj.txtLLNum : null),
                MSHEmails: obj.txtMSEmail,
                MSCurrentLocation: obj.txtMSCurrentLocation,
                MSCust_familyID: scope.msObj.MotherSisterCustfamilyID,
                MSEducationdetails: obj.txtMSHEducation
            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitMSData(scope.MSData).then(function(response) {
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