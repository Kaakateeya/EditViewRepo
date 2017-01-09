editviewapp.controller("sibblingCtrl", ['$scope', '$uibModal', 'sibblingServices', 'commonFactory', 'authSvc', function(scope, uibModal, sibblingServices, commonFactory, authSvc) {

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


    var logincustid = authSvc.getCustId();
    var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

    scope.sibblingPopulatePopulate = function(type, item) {

        switch (type) {
            case 'sibCounrt':
                if (item !== undefined) {
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

                if (item !== undefined && scope.BrotherArr.length <= parseInt(scope.BroCount)) {
                    scope.broObj.SibilingCustfamilyID = null;
                    scope.broObj = {};
                    if (item !== undefined) {
                        scope.brodistrictArr = commonFactory.districtBind(item.BroSpouseFatherStateID);

                        scope.broObj.SibilingCustfamilyID = item.SibilingCustfamilyID;
                        scope.broObj.rdlBElderYounger = item.brotherYoungerORelder == 'Elder' ? 42 : (item.brotherYoungerORelder == 'Younger' ? 41 : '-1');
                        scope.broObj.txtBName = item.SibilingName;
                        scope.broObj.txtbrotherreducation = item.SibilingEducationDetails;
                        scope.broObj.txtbrotherprofession = item.SibilingProfessionDetails;
                        scope.broObj.txtBCompanyname = item.SibilingCompany;
                        scope.broObj.txtBJoblocation = item.SibilingJobPLace;

                        scope.broObj.ddlBMObileCountryID = item.SibilingMobileCode;
                        scope.broObj.txtBmobilenumber = item.SibilingMobileNumber;

                        if (item.SibilingLandaraecode !== '' && item.SibilingLandaraecode !== null) {
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
                        scope.broObj.chkboxbrotherwifeprofession = item.SibilingSpouseProfessionDetails === 'HouseWife' ? true : false;
                        scope.broObj.txtBWifeCompanyName = item.spoucecompanyName;
                        scope.broObj.txtBwifeJoblocation = item.spoucejobloc;

                        scope.broObj.ddlBWMobileCode = item.SibilingSpouseMobileCode;

                        scope.broObj.txtBWifeMobileNumber = item.SibilingSpouceMobileNumber;

                        if (item.SibilingSpouseLandareCode !== '' && item.SibilingSpouseLandareCode !== null) {
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
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Cannot add more brothers', 1500);
                }
                break;

            case 'sister':
                if (item !== undefined && scope.sisterArr.length <= parseInt(scope.SisCount)) {

                    scope.sisObj.SibilingCustfamilyID = null;
                    scope.sisObj = {};

                    if (item !== undefined) {

                        scope.sisdistrictArr = commonFactory.districtBind(item.BroSpouseFatherStateID);

                        scope.sisObj.SibilingCustfamilyID = item.SibilingCustfamilyID;
                        scope.sisObj.rbtSElderyounger = item.SisterElderORyounger == 'Elder' ? '322' : (item.SisterElderORyounger == 'Younger' ? '321' : '-1');
                        scope.sisObj.txtSisterName = item.SibilingName;
                        scope.sisObj.txtsisEducation = item.SibilingEducationDetails;
                        scope.sisObj.txtsisProfession = item.SibilingProfessionDetails;
                        //scopsisroObj.chksisProfession = item.;
                        scope.sisObj.chksisProfession = item.SibilingProfessionDetails === 'HouseWife' ? true : false;
                        scope.sisObj.txtSCompanyName = item.SibilingCompany;
                        scope.sisObj.txtSjobloc = item.SibilingJobPLace;

                        scope.sisObj.ddlSMobileCountyCodeID = item.SibilingMobileCode;
                        scope.sisObj.txtSMobileNumber = item.SibilingMobileNumber;


                        if (item.SibilingLandaraecode !== '' && item.SibilingLandaraecode !== null) {
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

                        if (item.SibilingSpouseLandareCode !== '' && item.SibilingSpouseLandareCode !== null) {
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
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Cannot add more sisters', 1500);
                }
                break;
        }

    };


    scope.sibPageload = function(icustID) {

        sibblingServices.getSibblingeData(icustID).then(function(response) {
            scope.sibblingCountArr = JSON.parse(response.data[0]);
            scope.BrotherArr = JSON.parse(response.data[1]);
            scope.sisterArr = JSON.parse(response.data[2]);
            console.log(scope.BrotherArr);
            console.log(scope.sisterArr);
            scope.BroCount = scope.sibblingCountArr[0].NoOfBrothers;
            scope.SisCount = scope.sibblingCountArr[0].NoOfSisters;
        });

    };
    scope.sibPageload(custID);


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
                BroLandCountryCodeID: commonFactory.checkvals(obj.ddlBMObileCountryID2) ? obj.ddlBMObileCountryID2 : (commonFactory.checkvals(obj.ddlBLandLineCountryID) ? obj.ddlBLandLineCountryID : null),
                BroLandAreaCode: commonFactory.checkvals(obj.txtBmobilenumber2) ? null : (obj.txtBAreCode !== '' && obj.txtBAreCode !== null ? obj.txtBAreCode : null),
                BroLandNumber: commonFactory.checkvals(obj.txtBmobilenumber2) ? obj.txtBmobilenumber2 : (commonFactory.checkvals(obj.txtBLandNumber) ? obj.txtBLandNumber : null),
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
                BroWifeLandCountryCodeID: commonFactory.checkvals(obj.ddlBWMobileCode2) ? obj.ddlBWMobileCode2 : commonFactory.checkvals(obj.ddlBWifeLandLineCountryCode) ? obj.ddlBWifeLandLineCountryCode : null,
                BroWifeLandAreacode: commonFactory.checkvals(obj.txtBWifeMobileNumber2) ? null : commonFactory.checkvals(obj.txtBWifeLandLineAreaCode) ? obj.txtBWifeLandLineAreaCode : null,
                BroWifeLandNumber: commonFactory.checkvals(obj.txtBWifeMobileNumber2) ? obj.txtBWifeMobileNumber2 : commonFactory.checkvals(obj.txtBWifeLandLineNumber) ? obj.txtBWifeLandLineNumber : null,
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
        };

        sibblingServices.submitSibBroData(scope.sibBroData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {

                scope.sibPageload(custID);

                scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
            } else {
                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
            }
        });
    };

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
                SisLandCountryCodeID: commonFactory.checkvals(obj.ddlSMobileCountyCodeID2) ? obj.ddlSMobileCountyCodeID2 : commonFactory.checkvals(obj.ddlSLandLineCountryCodeID) ? obj.ddlSLandLineCountryCodeID : null,
                SisLandAreaCode: commonFactory.checkvals(obj.txtSMobileNumber2) ? null : commonFactory.checkvals(obj.txtSAreacoude) ? obj.txtSAreacoude : null,
                SisLandNumber: commonFactory.checkvals(obj.txtSMobileNumber2) ? obj.txtSMobileNumber2 : commonFactory.checkvals(obj.txtSNumber) ? obj.txtSNumber : null,
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
                SisHusbandLandCountryCodeID: commonFactory.checkvals(obj.ddlSHusMobileCountryID2) ? obj.ddlSHusMobileCountryID2 : commonFactory.checkvals(obj.ddlSHusLandCountryID) ? obj.ddlSHusLandCountryID : null,
                SisHusbandLandAreacode: commonFactory.checkvals(obj.txtSHusMobileNumber2) ? null : commonFactory.checkvals(obj.txtSHusLandArea) ? obj.txtSHusLandArea : null,
                SisHusbandLandNumber: commonFactory.checkvals(obj.txtSHusMobileNumber2) ? obj.txtSHusMobileNumber2 : commonFactory.checkvals(obj.txtSHusLandNumber) ? obj.txtSHusLandNumber : null,
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
        };
        sibblingServices.submitSibSisData(scope.sibSisData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {

                scope.sibPageload(custID);

                scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
            } else {
                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
            }
        });
    };

    scope.changeBind = function(type, parentval) {
        switch (type) {
            case 'State':
                scope.brodistrictArr = commonFactory.districtBind(parentval);
                break;
            case 'sisState':
                scope.sisdistrictArr = commonFactory.districtBind(parentval);
                break;
        }

    };


    scope.cancel = function() {
        commonFactory.closepopup();
    };

    scope.ShousewiseChk = function(item) {
        if (item.chksisProfession === true) {
            item.txtsisProfession = 'HouseWife';
        } else {
            item.txtsisProfession = '';
        }
    };

    scope.BhousewiseChk = function(item) {
        if (item.chkboxbrotherwifeprofession === true) {
            item.txtbrotherwifeprofession = 'HouseWife';
        } else {
            item.txtbrotherwifeprofession = '';
        }
    };

    scope.checkVal = function(val) {
        return (val !== '' && val !== undefined) ? val : 0;

    };
    scope.sibblingCountsSubmit = function(obj) {

        var totalnofBrothers = parseInt(scope.checkVal(obj.ddlnoofsiblings));
        var elderBrotherCount = parseInt(scope.checkVal(obj.ddlnoofelderrother));
        var youngerBrotherCount = parseInt(scope.checkVal(obj.ddlnoofyoungerbrother));

        var totalnoFSister = parseInt(scope.checkVal(obj.ddlnoofsisters));
        var elderSisterCount = parseInt(scope.checkVal(obj.ddlnoofeldersisters));
        var youngerSisterCount = parseInt(scope.checkVal(obj.ddlnoofyoungersisters));

        if ((totalnofBrothers === (elderBrotherCount + youngerBrotherCount) && totalnoFSister === (elderSisterCount + youngerSisterCount))) {

            var objinput = {
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

            sibblingServices.submitSibCountsData(objinput).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                if (response.data === 1) {

                    scope.sibPageload(custID);

                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                } else {
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                }
            });
        } else {
            alert('Please enter Correct Sibling count');
        }

    };

    scope.BIsMarried = function(val) {
        if (val == '0') {
            scope.broObj.txtBWifeName = '';
            scope.broObj.txtbrotherwifeeducation = '';
            scope.broObj.txtbrotherwifeprofession = '';
            scope.broObj.chkboxbrotherwifeprofession = '';
            scope.broObj.txtBWifeCompanyName = '';
            scope.broObj.txtBwifeJoblocation = '';
            scope.broObj.ddlBWMobileCode = '';
            scope.broObj.txtBWifeMobileNumber = '';
            scope.broObj.ddlBWifeLandLineCountryCode = '';
            scope.broObj.txtBWifeLandLineAreaCode = '';
            scope.broObj.txtBWifeLandLineNumber = '';
            scope.broObj.ddlBWMobileCode2 = '';
            scope.broObj.txtBWifeMobileNumber2 = '';
            scope.broObj.txtwifeEmail = '';
            scope.broObj.txtBWifeFatherSurName = '';
            scope.broObj.txtBWWifeFatherName = '';
            scope.broObj.ddlborherspousefathercaste = '';
            scope.broObj.ddlBroSpousefatherState = '';
            scope.broObj.ddlBroSpousefatherDistrict = '';
            scope.broObj.txtBroSpousefatherCity = '';
        }
    };

    scope.SIsMarried = function(val) {
        if (val == '0') {
            scope.sisObj.txtShusName = '';
            scope.sisObj.txtHusbandEducation = '';
            scope.sisObj.txtHusbandProfession = '';
            scope.sisObj.txtShusCompanyName = '';
            scope.sisObj.txtShusjobloc = '';
            scope.sisObj.ddlSHusMobileCountryID = '';
            scope.sisObj.txtSHusMobileNumber = '';
            scope.sisObj.ddlSHusLandCountryID = '';
            scope.sisObj.txtSHusLandNumber = '';
            scope.sisObj.txtSHusLandArea = '';
            scope.sisObj.ddlSHusMobileCountryID2 = '';
            scope.sisObj.txtSHusMobileNumber2 = '';
            scope.sisObj.txtHusbandEmail = '';
            scope.sisObj.txtHusbandFatherSurName = '';
            scope.sisObj.txtHusbandFatherName = '';
            scope.sisObj.ddlsisterspusefathercaste = '';
            scope.sisObj.ddlSisSpouceFatherState = '';
            scope.sisObj.ddlSisSpouceFatherDistrict = '';
            scope.sisObj.txtSisSpouceFatherCity = '';
        }
    };


    scope.$watch(function() {
        return scope.SibCountObj.ddlnoofsiblings;
    }, function(current, original) {
        if (current === 0) {
            scope.SibCountObj.ddlnoofelderrother = 0;
            scope.SibCountObj.ddlnoofyoungerbrother = 0;
        }
    });

    scope.$watch(function() {
        return scope.SibCountObj.ddlnoofsisters;
    }, function(current, original) {
        if (current === 0) {
            scope.SibCountObj.ddlnoofeldersisters = 0;
            scope.SibCountObj.ddlnoofyoungersisters = 0;
        }
    });


}]);