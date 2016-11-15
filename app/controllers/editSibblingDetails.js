editviewapp.controller("sibblingCtrl", ['$scope', '$uibModal', 'sibblingServices', 'commonFactory', function(scope, uibModal, sibblingServices, commonFactory) {

    scope.countryCode = 'countryCode';
    scope.sibblingCountArr = [];
    scope.BrotherArr = [];
    scope.sisterArr = [];
    scope.broObj = [];
    scope.sisObj = [];
    scope.caste = 'caste';
    scope.indiaStates = 'indiaStates';
    scope.sibCountsBindArr = commonFactory.numbersBind('', 0, 10);
    scope.SibCountObj = {};
    scope.BroCount = null;
    scope.SisCount = null;
    scope.CountryVal = '1';

    var custID = '104613';

    scope.sibblingPopulatePopulate = function(type, item) {

        switch (type) {
            case 'sibCounrt':
                if (item != undefined) {
                    scope.SibCountObj.ddlnoofsiblings = item.NoOfBrothers;
                    scope.SibCountObj.ddlnoofelderrother = item.NoOfElderBrothers;
                    scope.SibCountObj.ddlnoofyoungerbrother = item.NoOfYoungerBrothers;
                    scope.SibCountObj.ddlnoofsisters = item.NoOfSisters;
                    scope.SibCountObj.ddlnoofeldersisters = item.NoOfElderSisters;
                    scope.SibCountObj.ddlnoofyoungersisters = item.NoOfYoungerSisters;
                }
                commonFactory.open('SibblingCountPopup.html', scope, uibModal);


                break;

            case 'brother':

                if (item != undefined && scope.BrotherArr.length <= parseInt(scope.BroCount)) {
                    scope.broObj.SibilingCustfamilyID = null;
                    scope.broObj = {};
                    if (item != undefined) {
                        scope.brodistrictArr = commonFactory.districtBind(item.BroSpouseFatherStateID);

                        scope.broObj.SibilingCustfamilyID = item.SibilingCustfamilyID;
                        scope.broObj.rdlBElderYounger = item.brotherYoungerORelder == 'Elder' ? 42 : (item.brotherYoungerORelder == 'Younger' ? 41 : '-1');
                        scope.broObj.txtBName = item.SibilingName;
                        scope.broObj.txtbrotherreducation = item.SibilingEducationDetails;
                        scope.broObj.txtbrotherprofession = item.SibilingProfessionDetails;
                        scope.broObj.txtBCompanyname = item.SibilingCompany;
                        scope.broObj.txtBJoblocation = item.SibilingJobPLace;

                        scope.broObj.ddlBMObileCountryID = item.SibilingMobileCode;
                        scope.broObj.txtBmobilenumber = item.SibilingLandNumber;

                        if (item.SibilingLandaraecode != '' && item.SibilingLandaraecode != null) {
                            scope.broObj.ddlBLandLineCountryID = item.SibilngLandCountryCode;
                            scope.broObj.txtBAreCode = item.SibilingLandaraecode;
                            scope.broObj.txtBLandNumber = item.SibilingLandNumber;
                        } else {
                            scope.broObj.ddlBMObileCountryID2 = item.SibilngLandCountryCode;
                            scope.broObj.txtBmobilenumber2 = item.SibilingLandNumber;

                        }

                        scope.broObj.txtBEmails = item.SibilingEmail;

                        scope.broObj.rdlBIsMarried = item.SibilingMarried;
                        scope.broObj.txtBWifeName = item.SibilingSpouseName;
                        scope.broObj.txtbrotherwifeeducation = item.SibilingSpouseEducationDetails;
                        scope.broObj.txtbrotherwifeprofession = item.SibilingSpouseProfessionDetails;
                        //scope.broObj.chkboxbrotherwifeprofession = item.;
                        scope.broObj.txtBWifeCompanyName = item.spoucecompanyName;
                        scope.broObj.txtBwifeJoblocation = item.spoucejobloc;

                        scope.broObj.ddlBWMobileCode = item.SibilingSpouseMobileCode;

                        scope.broObj.txtBWifeMobileNumber = item.SibilingSpouceMobileNumber;

                        if (item.SibilingSpouseLandareCode != '' && item.SibilingSpouseLandareCode != null) {
                            scope.broObj.ddlBWifeLandLineCountryCode = item.SibilingSpouseLandCode;
                            scope.broObj.txtBWifeLandLineAreaCode = item.SibilingSpouseLandareCode;
                            scope.broObj.txtBWifeLandLineNumber = item.SibilngSpouseLandnumber;
                        } else {
                            scope.broObj.ddlBWMobileCode2 = item.SibilingSpouseLandCode;
                            scope.broObj.txtBWifeMobileNumber2 = item.SibilngSpouseLandnumber;

                        }

                        scope.broObj.txtwifeEmail = item.SpouseEmail;
                        scope.broObj.txtBWifeFatherSurName = item.SFsurname;
                        scope.broObj.txtBWWifeFatherName = item.SFname;
                        scope.broObj.ddlborherspousefathercaste = item.SibilingSpouseFatherCasteID;
                        scope.broObj.ddlBroSpousefatherState = item.BroSpouseFatherStateID;
                        scope.broObj.ddlBroSpousefatherDistrict = item.BroSpouseFatherDistrictID;
                        scope.broObj.txtBroSpousefatherCity = item.BroSpouseFatherCity;


                    }
                    commonFactory.open('brotherModalContent.html', scope, uibModal);
                } else if (item === undefined && scope.BrotherArr.length < parseInt(scope.BroCount)) {
                    scope.broObj.SibilingCustfamilyID = null;
                    scope.broObj = {};
                    commonFactory.open('brotherModalContent.html', scope, uibModal);
                } else {
                    alert('Cannot add more brothers');
                }
                break;

            case 'sister':
                if (item != undefined && scope.sisterArr.length <= parseInt(scope.SisCount)) {

                    scope.sisObj.SibilingCustfamilyID = null;
                    scope.sisObj = {};

                    if (item != undefined) {
                        debugger;
                        scope.sisdistrictArr = commonFactory.districtBind(item.BroSpouseFatherStateID);

                        scope.sisObj.SibilingCustfamilyID = item.SibilingCustfamilyID;
                        scope.sisObj.rbtSElderyounger = item.SisterElderORyounger == 'Elder' ? '322' : (item.SisterElderORyounger == 'Younger' ? '321' : '-1');
                        scope.sisObj.txtSisterName = item.SibilingName;
                        scope.sisObj.txtsisEducation = item.SibilingEducationDetails;
                        scope.sisObj.txtsisProfession = item.SibilingProfessionDetails;
                        //scopsisroObj.chksisProfession = item.;
                        scope.sisObj.txtSCompanyName = item.SibilingCompany;
                        scope.sisObj.txtSjobloc = item.SibilingJobPLace;

                        scope.sisObj.ddlSMobileCountyCodeID = item.SibilingMobileCode;
                        scope.sisObj.txtSMobileNumber = item.SibilingMobileNumber;


                        if (item.SibilingLandaraecode != '' && item.SibilingLandaraecode != null) {
                            scope.sisObj.ddlSLandLineCountryCodeID = item.SibilngLandCountryCode;
                            scope.sisObj.txtSAreacoude = item.SibilingLandaraecode;
                            scope.sisObj.txtSNumber = item.SibilingLandNumber;
                        } else {
                            scope.sisObj.ddlSMobileCountyCodeID2 = item.SibilngLandCountryCode;
                            scope.sisObj.txtSMobileNumber2 = item.SibilingLandNumber;

                        }

                        scope.sisObj.txtSEmails = item.SibilingEmail;
                        scope.sisObj.rdlSIsMarried = item.SibilingMarried;
                        scope.sisObj.txtShusName = item.SibilingName;
                        scope.sisObj.txtHusbandEducation = item.SibilingSpouseEducationDetails;
                        scope.sisObj.txtHusbandProfession = item.SibilingSpouseProfessionDetails;
                        scope.sisObj.txtShusCompanyName = item.spoucecompanyName;
                        scope.sisObj.txtShusjobloc = item.spoucejobloc;

                        scope.sisObj.ddlSHusMobileCountryID = item.sisterspousemobilecode;
                        scope.sisObj.txtSHusMobileNumber = item.SibilingSpouceMobileNumber;

                        if (item.SibilingSpouseLandareCode != '' && item.SibilingSpouseLandareCode != null) {
                            scope.sisObj.ddlSHusLandCountryID = item.SpousesisterLandCode;
                            scope.sisObj.txtSHusLandNumber = item.SibilngSpouseLandnumber;
                            scope.sisObj.txtSHusLandArea = item.SibilingSpouseLandareCode;
                        } else {
                            scope.sisObj.ddlSHusMobileCountryID2 = item.SpousesisterLandCode;
                            scope.sisObj.txtSHusMobileNumber2 = item.SibilngSpouseLandnumber;

                        }

                        scope.sisObj.txtHusbandEmail = item.SpouseEmail;
                        scope.sisObj.txtHusbandFatherSurName = item.SpouceFatherLName;
                        scope.sisObj.txtHusbandFatherName = item.SpouceFatherFName;
                        scope.sisObj.ddlsisterspusefathercaste = item.SibilingSpouseFatherCasteId;
                        scope.sisObj.ddlSisSpouceFatherState = item.SisSpouseFatherStateID;
                        scope.sisObj.ddlSisSpouceFatherDistrict = item.SisSpouseFatherDitrictID;
                        scope.sisObj.txtSisSpouceFatherCity = item.SisSpousefatherCity;

                    }
                    commonFactory.open('sisterModalContent.html', scope, uibModal);
                } else if (item === undefined && scope.sisterArr.length < parseInt(scope.SisCount)) {

                    scope.sisObj.SibilingCustfamilyID = null;
                    scope.sisObj = {};
                    commonFactory.open('sisterModalContent.html', scope, uibModal);
                } else {
                    alert('Cannot add more sisters');
                }
                break;
        }

    }

    sibblingServices.getSibblingeData(custID).then(function(response) {
        scope.sibblingCountArr = JSON.parse(response.data[0]);
        scope.BrotherArr = JSON.parse(response.data[1]);
        scope.sisterArr = JSON.parse(response.data[2]);
        console.log(scope.sibblingCountArr);

        scope.BroCount = scope.sibblingCountArr[0].NoOfBrothers;
        scope.SisCount = scope.sibblingCountArr[0].NoOfSisters;


    });


    scope.sibBroSubmit = function(obj) {
        scope.sibBroData = {
            GetDetails: {
                CustID: custID,
                BroName: obj.txtBName,
                BroElderYounger: obj.rdlBElderYounger,
                BroEducationcategory: null,
                BroEducationgroup: null,
                BroEducationspecialization: null,
                BroEmployedin: null,
                BroProfessiongroup: null,
                BroProfession: null,
                BroCompanyName: obj.txtBCompanyname,
                BroJobLocation: obj.txtBJoblocation,
                BroMobileCountryCodeID: obj.ddlBMObileCountryID,
                BroMobileNumber: obj.txtBmobilenumber,
                BroLandCountryCodeID: obj.ddlBMObileCountryID2 != '0' && obj.ddlBMObileCountryID2 != null ? obj.ddlBMObileCountryID2 : (obj.ddlBLandLineCountryID != '0' && obj.ddlBLandLineCountryID != null ? obj.ddlBLandLineCountryID : null),
                BroLandAreaCode: obj.txtBmobilenumber2 != '' && obj.txtBmobilenumber2 != null ? null : (obj.txtBAreCode != '' && obj.txtBAreCode != null ? obj.txtBAreCode : null),
                BroLandNumber: obj.txtBmobilenumber2 != '' && obj.txtBmobilenumber2 != null ? obj.txtBmobilenumber2 : (obj.txtBLandNumber != '' && obj.txtBLandNumber != null ? txtBLandNumber.Text : null),
                BroEmail: obj.txtBEmails,
                BIsMarried: obj.rdlBIsMarried,
                BroWifeName: obj.txtBWifeName,
                BroWifeEducationcategory: null,
                BroWifeEducationgroup: null,
                BroWifeEducationspecialization: null,
                BroWifeEmployedin: null,
                BroWifeProfessiongroup: null,
                BroWifeProfession: null,
                BroWifeCompanyName: obj.txtBWifeCompanyName,
                BroWifeJobLocation: obj.txtBwifeJoblocation,
                BroWifeMobileCountryCodeID: obj.ddlBWMobileCode,
                BroWifeMobileNumber: obj.txtBWifeMobileNumber,
                BroWifeLandCountryCodeID: obj.ddlBWMobileCode2 != '0' && obj.ddlBWMobileCode2 != null ? obj.ddlBWMobileCode2 : obj.ddlBWifeLandLineCountryCode != '0' && obj.ddlBWifeLandLineCountryCode != null ? obj.ddlBWifeLandLineCountryCode : null,
                BroWifeLandAreacode: obj.txtBWifeMobileNumber2 != '' && obj.txtBWifeMobileNumber2 != null ? null : obj.txtBWifeLandLineAreaCode != '' && obj.txtBWifeLandLineAreaCode != null ? obj.txtBWifeLandLineAreaCode : null,
                BroWifeLandNumber: obj.txtBWifeMobileNumber2 != '' && obj.txtBWifeMobileNumber2 != null ? obj.txtBWifeMobileNumber2 : obj.txtBWifeLandLineNumber != '' && obj.txtBWifeLandLineNumber != null ? obj.txtBWifeLandLineNumber : null,
                BroWifeFatherSurName: obj.txtBWifeFatherSurName,
                BroWifeFatherName: obj.txtBWWifeFatherName,
                BroSibilingCustfamilyID: scope.broObj.SibilingCustfamilyID,
                BroEducationDetails: obj.txtbrotherreducation,
                BrowifeEducationDetails: obj.txtbrotherwifeeducation,
                BroProfessionDetails: obj.txtbrotherprofession,
                BroWifeProfessionDetails: obj.txtbrotherwifeprofession,
                BroSpouseFatherCountryID: '1',
                BroSpouseFatherStateID: obj.ddlBroSpousefatherState,
                BroSpouseFatherDitrictID: obj.ddlBroSpousefatherDistrict,
                BroSpouseFatherNativePlace: obj.txtBroSpousefatherCity,
                BrotherSpouseEmail: obj.txtwifeEmail,
                SibilingSpouseFatherCasteID: obj.ddlborherspousefathercaste,

            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        sibblingServices.submitSibBroData(scope.sibBroData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    }

    scope.sibSisSubmit = function(obj) {
        scope.sibSisData = {
            GetDetails: {
                CustID: custID,
                SisName: obj.txtSisterName,
                SisElderYounger: obj.rbtSElderyounger,
                SisEducationcategory: null,
                SisEducationgroup: null,
                SisEducationspecialization: null,
                SisEmployedin: null,
                SisProfessiongroup: null,
                SisProfession: null,
                SisCompanyName: obj.txtSCompanyName,
                SisJobLocation: obj.txtSjobloc,
                SisMobileCountryCodeID: obj.ddlSMobileCountyCodeID,
                SisMobileNumber: obj.txtSMobileNumber,
                SisLandCountryCodeID: obj.ddlSMobileCountyCodeID2 != '0' && obj.ddlSMobileCountyCodeID2 != null ? obj.ddlSMobileCountyCodeID2 : obj.ddlSLandLineCountryCodeID != '0' && obj.ddlSLandLineCountryCodeID != null ? obj.ddlSLandLineCountryCodeID : null,
                SisLandAreaCode: obj.txtSMobileNumber2 != '' && obj.txtSMobileNumber2 != null ? null : obj.txtSAreacoude != '' && obj.txtSAreacoude != null ? obj.txtSAreacoude : null,
                SisLandNumber: (obj.txtSMobileNumber2 != '' && obj.txtSMobileNumber2 != null) ? obj.txtSMobileNumber2 : obj.txtSNumber != '' && obj.txtSNumber != null ? obj.txtSNumber : null,
                SisEmail: obj.txtSEmails,
                SIsMarried: obj.rdlSIsMarried,
                SisHusbandName: obj.txtShusName,
                SisHusbandEducationcategory: null,
                SisHusbandEducationgroup: null,
                SisHusbandEducationspecialization: null,
                SisHusbandEmployedin: null,
                SisHusbandProfessiongroup: null,
                SisHusbandProfession: null,
                SisHusCompanyName: obj.txtShusCompanyName,
                SisHusJobLocation: obj.txtShusjobloc,
                SisHusbandMobileCountryCodeID: obj.ddlSHusMobileCountryID,
                SisHusbandMobileNumber: obj.txtSHusMobileNumber,
                SisHusbandLandCountryCodeID: obj.ddlSHusMobileCountryID2 != '0' && obj.ddlSHusMobileCountryID2 != null ? obj.ddlSHusMobileCountryID2 : obj.ddlSHusLandCountryID != '0' && obj.ddlSHusLandCountryID != null ? obj.ddlSHusLandCountryID : null,
                SisHusbandLandAreacode: obj.txtSHusMobileNumber2 != '' && obj.txtSHusMobileNumber2 != null ? null : obj.txtSHusLandArea != '' && obj.txtSHusLandArea != null ? obj.txtSHusLandArea : null,
                SisHusbandLandNumber: obj.txtSHusMobileNumber2 != '' && obj.txtSHusMobileNumber2 != null ? obj.txtSHusMobileNumber2 : obj.txtSHusLandNumber != '' && obj.txtSHusLandNumber != null ? obj.txtSHusLandNumber : null,
                SisHusbandFatherSurName: obj.txtHusbandFatherSurName,
                SisHusbandFatherName: obj.txtHusbandFatherName,
                SisSibilingCustfamilyID: scope.sisObj.SibilingCustfamilyID,
                siseducationdetails: obj.txtsisEducation,
                sisprofessiondetails: obj.txtsisProfession,
                sisspouseeducationdetails: obj.txtHusbandEducation,
                sisspouseprofessiondetails: obj.txtHusbandProfession,
                SisSpouseFatherCountryID: '1',
                SisSpouseFatherStateID: obj.ddlSisSpouceFatherState,
                SisSpouseFatherDitrictID: obj.ddlSisSpouceFatherDistrict,
                SisSpouseFatherNativePlace: obj.txtSisSpouceFatherCity,
                SisSpouseEmail: obj.txtHusbandEmail,
                SibilingSpouseFatherCasteID: obj.ddlsisterspusefathercaste,

            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        sibblingServices.submitSibSisData(scope.sibSisData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    }

    scope.changeBind = function(type, parentval) {
        switch (type) {
            case 'State':
                scope.brodistrictArr = commonFactory.districtBind(parentval);
                break;
            case 'sisState':
                scope.sisdistrictArr = commonFactory.districtBind(parentval);
                break;
        }

    }


    scope.cancel = function() {
        commonFactory.closepopup();
    };

    scope.housewiseChk = function(item) {
        if (item.chksisProfession === true) {
            item.txtsisProfession = 'HouseWife';
        } else {
            item.txtsisProfession = '';
        }
    }



    scope.checkVal = function(val) {
        return (val != '' && val != undefined) ? val : 0;

    }
    scope.sibblingCountsSubmit = function(obj) {

        var totalnofBrothers = parseInt(scope.checkVal(obj.ddlnoofsiblings));
        var elderBrotherCount = parseInt(scope.checkVal(obj.ddlnoofelderrother));
        var youngerBrotherCount = parseInt(scope.checkVal(obj.ddlnoofyoungerbrother));

        var totalnoFSister = parseInt(scope.checkVal(obj.ddlnoofsisters));
        var elderSisterCount = parseInt(scope.checkVal(obj.ddlnoofeldersisters));
        var youngerSisterCount = parseInt(scope.checkVal(obj.ddlnoofyoungersisters));

        if ((totalnofBrothers == (elderBrotherCount + youngerBrotherCount) && totalnoFSister == (elderSisterCount + youngerSisterCount))) {

            var obj = {
                CustID: custID,
                NoOfBrothers: obj.ddlnoofsiblings,
                NoOfSisters: obj.ddlnoofsisters,
                NoOfYoungerBrothers: obj.ddlnoofyoungerbrother,
                NoOfElderBrothers: obj.ddlnoofelderrother,
                NoOfElderSisters: obj.ddlnoofeldersisters,
                NoOfYoungerSisters: obj.ddlnoofyoungersisters
            };
            scope.BroCount = obj.ddlnoofsiblings;
            scope.SisCount = obj.ddlnoofsisters;

            debugger;
            sibblingServices.submitSibCountsData(obj).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                if (response.data === 1) {
                    alert('submitted Succesfully');
                } else {
                    alert('Updation failed');
                }
            });
        } else {
            alert('Please enter Correct Sibling count');

        }

    }



}]);