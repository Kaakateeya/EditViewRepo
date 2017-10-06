editviewapp.controller("partnerPreferenceCtrl", ['partnerPreferenceServices', '$scope', '$uibModal',
    'commonFactory', 'authSvc', 'sibblingServices', '$timeout',
    function(partnerPreferenceServices, scope, uibModal, commonFactory, authSvc, sibblingServices, timeout) {
        scope.partnerPrefArr = [];
        scope.partnerObj = {};
        scope.ageGapArr = [];
        scope.height = 'height';
        scope.Religion = 'Religion';
        scope.Mothertongue = 'Mothertongue';
        scope.MaritalStatus = 'MaritalStatus';
        scope.educationcategory = 'educationcategory';
        scope.Country = 'Country';
        scope.ProfCatgory = 'ProfCatgory';
        scope.ProfGroup = 'ProfGroup';
        scope.region = 'region';

        scope.partnerObj.rbtnCasteNobar = '';
        scope.partnerDescObj = {};
        var isSubmit = true;

        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.partnerDescription = '';

        partnerPreferenceServices.getPartnerPreferenceData(custID).then(function(response) {
            scope.partnerPrefArr = response.data;
            scope.partnerDescription = (scope.partnerPrefArr.length > 0 && scope.partnerPrefArr[0].PartnerDescripition !== undefined && scope.partnerPrefArr[0].PartnerDescripition !== null) ? scope.partnerPrefArr[0].PartnerDescripition : '';
            console.log(scope.partnerPrefArr);
        });
        scope.removeSelect = function(data) {
            if (data[0] !== undefined && angular.lowercase(data[0].title) === '--select--') {
                data.splice(0, 1);
            }

            return data;
        };
        var castetempval = [],
            countrytempval = [];

        scope.changeBind = function(type, parentval, parentval2) {

            switch (type) {
                case 'Country':
                    if (parentval.length <= 5) {
                        countrytempval = scope.partnerObj.lstPreferredcountry;
                        scope.stateArr = scope.removeSelect(commonFactory.StateBind(commonFactory.listSelectedVal(parentval)));
                    } else {
                        scope.partnerObj.partnerDomacile = undefined;
                        scope.displayText = 'You cannot select more than 5 countries . If interested in all countries,please select Abroad or Both';
                        scope.restrictType = 'country';
                        commonFactory.opennew('castepopup.html', scope, uibModal, 'md', 'castepopupcls');
                        timeout(function() {
                            scope.partnerObj.lstPreferredcountry = undefined;
                            scope.partnerObj.lstPreferredcountry = countrytempval;
                        }, 500);
                    }

                    break;

                case 'EducationCatgory':
                    scope.eduGroupArr = scope.removeSelect(commonFactory.educationGroupBind(commonFactory.listSelectedVal(parentval)));
                    break;

                case 'caste':
                    scope.casteArr = scope.removeSelect(commonFactory.casteDepedency(commonFactory.listSelectedVal(parentval), commonFactory.listSelectedVal(parentval2)));

                    break;

                case 'subCaste':
                    if (parentval.length <= 2) {
                        castetempval = scope.partnerObj.lstCaste;
                        scope.subCasteArr = scope.removeSelect(commonFactory.subCaste(commonFactory.listSelectedVal(parentval)));

                    } else {
                        scope.partnerObj.rbtnCasteNobar = undefined;
                        scope.displayText = 'You cannot select more than 2 castes . Please select below caste No Bar , if you are interested';
                        scope.restrictType = 'caste';
                        commonFactory.opennew('castepopup.html', scope, uibModal, 'md', 'castepopupcls');
                        timeout(function() {
                            scope.partnerObj.lstCaste = undefined;
                            scope.partnerObj.lstCaste = castetempval;
                        }, 500);
                    }

                    break;

                case 'star':
                    scope.starArr = scope.removeSelect(commonFactory.starBind(commonFactory.listSelectedVal(parentval)));
                    break;

                case 'region':
                    scope.branchArr = scope.removeSelect(commonFactory.branch(commonFactory.listSelectedVal(parentval)));
                    break;
            }
        };


        scope.changed = function(val) {
            if (val && val.length > 2) {
                scope.myModel = scope.prevModel;
            } else {
                scope.prevModel = val;
            }
        };



        scope.SplitstringintoArray = function(string) {
            var array = [];
            if (string !== null && string !== "") {
                _.each(string.split(','), function(item) {
                    array.push(parseInt(item));
                });
            }
            return array;
        };


        scope.partnerprefPopulate = function(item) {
            isSubmit = true;
            scope.partnerObj = {};

            if (item !== undefined) {
                sibblingServices.allowblockWebusers(custID).then(function(response) {
                    var testArr = JSON.parse(response.data[0]);
                    console.log(testArr);
                    if (testArr[0].BranchID !== 342) {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'To edit <b style"=color: maroon">PartnerPreference Details</b>, please contact your relationship manager  ' + testArr[0].FirstName1 + ((testArr[0].LastName) !== null ? testArr[0].LastName : "") + "(" + testArr[0].OfficialContactNumber + ")", 4500);
                    } else {
                        scope.casteArr = scope.removeSelect(commonFactory.casteDepedency(item.religionid, item.MotherTongueID));
                        scope.stateArr = scope.removeSelect(commonFactory.StateBind(item.CountryID));
                        scope.eduGroupArr = scope.removeSelect(commonFactory.educationGroupBind(item.EducationCategoryID));
                        scope.starArr = scope.removeSelect(commonFactory.starBind(item.StarLanguageID));
                        scope.subCasteArr = scope.removeSelect(commonFactory.subCaste(commonFactory.listSelectedVal(item.casteid)));

                        scope.partnerObj.intCusID = item.intCusID;
                        scope.ageGapArr = commonFactory.numbersBind('years', 1, 80);

                        scope.partnerObj.rbtlGender = item.Gender === 'Female' ? 2 : 1;
                        scope.partnerObj.ddlFromAge = item.Agemin;
                        scope.partnerObj.ddlToAge = item.AgeMax;
                        scope.partnerObj.ddlFromheight = item.MinHeight;
                        scope.partnerObj.ddltoHeight = item.MaxHeight;
                        scope.partnerObj.lstReligion = scope.SplitstringintoArray(item.religionid);
                        scope.partnerObj.lstMothertongue = scope.SplitstringintoArray(item.MotherTongueID);
                        scope.partnerObj.lstCaste = scope.SplitstringintoArray(item.casteid);
                        castetempval = scope.partnerObj.lstCaste.length <= 2 ? scope.partnerObj.lstCaste : [];
                        scope.partnerObj.lstSubcaste = scope.SplitstringintoArray(item.subcasteid);
                        scope.partnerObj.lstMaritalstatus = item.maritalstatusid;
                        scope.partnerObj.lstEducationcategory = scope.SplitstringintoArray(item.EducationCategoryID);
                        scope.partnerObj.lstEducationgroup = scope.SplitstringintoArray(item.EducationGroupID);
                        scope.partnerObj.lstEmployedin = scope.SplitstringintoArray(item.ProfessionCategoryID);
                        scope.partnerObj.lstProfessiongroup = scope.SplitstringintoArray(item.ProfessionGroupID);
                        scope.partnerObj.lstPreferredcountry = scope.SplitstringintoArray(item.CountryID);
                        countrytempval = scope.partnerObj.lstPreferredcountry.length <= 5 ? scope.partnerObj.lstPreferredcountry : [];
                        scope.partnerObj.lstPreferredstate = scope.SplitstringintoArray(item.StateID);
                        scope.partnerObj.lstRegion = scope.SplitstringintoArray(item.regionId);
                        scope.branchArr = scope.removeSelect(commonFactory.branch(commonFactory.listSelectedVal(item.regionId)));
                        scope.partnerObj.lstBranch = scope.SplitstringintoArray(item.branchid);
                        scope.partnerObj.rbtDiet = item.DietID;
                        scope.partnerObj.rbtManglikKujadosham = item.KujaDoshamID;
                        scope.partnerObj.rbtPreferredstarLanguage = item.StarLanguageID;
                        scope.partnerObj.rbtPreferredstars = item.TypeOfStar;
                        scope.partnerObj.lstpreferedstars = scope.SplitstringintoArray(item.PreferredStars);
                        scope.partnerObj.rbtDomacile = item.Domicel === 'India' ? 0 : (item.Domicel === 'abroad' ? 1 : (item.Domicel === 'All' ? 2 : ''));

                        commonFactory.open('partnerPrefContent.html', scope, uibModal);
                    }

                });
            } else {
                commonFactory.open('partnerPrefContent.html', scope, uibModal);
            }

        };

        scope.partnerdescPopulate = function(item) {
            isSubmit = true;
            scope.partnerDescObj = {};
            if (item !== undefined) {
                sibblingServices.allowblockWebusers(custID).then(function(response) {
                    var testArr = JSON.parse(response.data[0]);
                    console.log(testArr);
                    if (testArr[0].BranchID !== 342) {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'To edit <b style"=color: maroon">Partner Description</b>, please contact your relationship manager  ' + testArr[0].FirstName1 + ((testArr[0].LastName) !== null ? testArr[0].LastName : "") + "(" + testArr[0].OfficialContactNumber + ")", 4500);
                    } else {
                        scope.partnerDescObj.txtpartnerdescription = item.PartnerDescripition;
                        commonFactory.open('partnerDescContent.html', scope, uibModal);
                    }
                });
            } else {
                commonFactory.open('partnerDescContent.html', scope, uibModal);
            }
        };
        scope.partnerPrefSubmit = function(objitem) {

            if (isSubmit) {
                isSubmit = false;
                scope.partnerPrefData = {
                    GetDetails: {
                        CustID: custID,
                        AgeGapFrom: objitem.ddlFromAge,
                        AgeGapTo: objitem.ddlToAge,
                        HeightFrom: objitem.ddlFromheight,
                        HeightTo: objitem.ddltoHeight,
                        Religion: commonFactory.listSelectedVal(objitem.lstReligion),
                        Mothertongue: commonFactory.listSelectedVal(objitem.lstMothertongue),
                        Caste: commonFactory.listSelectedVal(objitem.lstCaste),
                        Subcaste: commonFactory.listSelectedVal(objitem.lstSubcaste),
                        Maritalstatus: commonFactory.listSelectedVal(objitem.lstMaritalstatus),
                        ManglikKujadosham: objitem.rbtManglikKujadosham,
                        PreferredstarLanguage: objitem.rbtPreferredstarLanguage,
                        Educationcategory: commonFactory.listSelectedVal(objitem.lstEducationcategory),
                        Educationgroup: commonFactory.listSelectedVal(objitem.lstEducationgroup),
                        Employedin: commonFactory.listSelectedVal(objitem.lstEmployedin),
                        Professiongroup: commonFactory.listSelectedVal(objitem.lstProfessiongroup),
                        Diet: objitem.rbtDiet,
                        Preferredcountry: commonFactory.listSelectedVal(objitem.lstPreferredcountry),
                        Preferredstate: commonFactory.listSelectedVal(objitem.lstPreferredstate),
                        Preferreddistrict: null,
                        Preferredlocation: null,
                        TypeofStar: objitem.rbtPreferredstars,
                        PrefredStars: commonFactory.listSelectedVal(objitem.lstpreferedstars),
                        GenderID: objitem.rbtlGender,
                        Region: commonFactory.listSelectedVal(objitem.lstRegion),
                        Branch: commonFactory.listSelectedVal(objitem.lstBranch),
                        Domacile: commonFactory.checkvals(objitem.rbtDomacile) ? parseInt(objitem.rbtDomacile) : ''
                    },
                    customerpersonaldetails: {
                        intCusID: custID,
                        EmpID: null,
                        Admin: null
                    }
                };
                if (objitem.lstPreferredcountry.length > 5 || objitem.lstCaste.length > 2) {
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Select only 5 country values and 2 caste values', 4500);
                } else {
                    scope.submitPromise = partnerPreferenceServices.submitPartnerPrefData(scope.partnerPrefData).then(function(response) {
                        console.log(response);
                        commonFactory.closepopup();
                        if (response.data === 1) {
                            partnerPreferenceServices.getPartnerPreferenceData(custID).then(function(response) {
                                scope.partnerPrefArr = response.data;
                                console.log(scope.partnerPrefArr);
                            });
                            scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                        } else {
                            scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                        }
                    });
                }
            }
        };
        scope.cancel = function() {
            commonFactory.closepopup();
        };
        scope.cancelnew = function() {
            commonFactory.closepopupnew();
        };

        scope.partnerDescriptionSubmit = function(obj) {

            if (isSubmit) {
                isSubmit = false;
                scope.submitPromise = partnerPreferenceServices.submitPartnerDescData({ CustID: custID, AboutYourself: obj.txtpartnerdescription, flag: 1 }).then(function(response) {
                    console.log(response);
                    commonFactory.closepopup();
                    if (response.data === '1') {
                        scope.partnerDescription = obj.txtpartnerdescription;
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });

            }
        };

        scope.castenobarChange = function(val) {
            if (val === 'caste') {
                if (scope.partnerObj.rbtnCasteNobar) {
                    scope.partnerObj.lstCaste = undefined;
                    scope.partnerObj.lstCaste = [parseInt(scope.partnerObj.rbtnCasteNobar)];
                    scope.cancelnew();
                } else {
                    alert('Please select Caste No Bar');

                }
            } else {
                if (scope.partnerObj.partnerDomacile) {
                    scope.partnerObj.lstPreferredcountry = undefined;
                    scope.partnerObj.rbtDomacile = scope.partnerObj.partnerDomacile;
                    scope.cancelnew();

                } else {
                    alert('Please select Domacile');
                }
            }

        };

    }
]);