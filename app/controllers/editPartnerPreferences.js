editviewapp.controller("partnerPreferenceCtrl", ['partnerPreferenceServices', '$scope', '$uibModal', 'commonFactory', 'authSvc', function(partnerPreferenceServices, scope, uibModal, commonFactory, authSvc) {
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

    scope.partnerDescObj = {};


    var logincustid = authSvc.getCustId();
    var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;



    // scope.listSelectedVal = function(val) {
    //     var str = null;
    //     if (val != null) {
    //         if (angular.isString(val)) {
    //             str = val === '' ? null : val;
    //         } else {
    //             str = val.join(',');
    //         }
    //     }
    //     return str;
    // }


    partnerPreferenceServices.getPartnerPreferenceData(custID).then(function(response) {
        scope.partnerPrefArr = response.data;
        console.log(scope.partnerPrefArr);
    });
    scope.removeSelect = function(data) {
        if (data[0] !== undefined && angular.lowercase(data[0].title) === '--select--') {
            data.splice(0, 1);
        }

        return data;
    };
    scope.changeBind = function(type, parentval, parentval2) {

        switch (type) {
            case 'Country':
                scope.stateArr = scope.removeSelect(commonFactory.StateBind(commonFactory.listSelectedVal(parentval)));
                break;

            case 'EducationCatgory':
                scope.eduGroupArr = scope.removeSelect(commonFactory.educationGroupBind(commonFactory.listSelectedVal(parentval)));
                break;

            case 'caste':
                scope.casteArr = scope.removeSelect(commonFactory.casteDepedency(commonFactory.listSelectedVal(parentval), commonFactory.listSelectedVal(parentval2)));
                break;

            case 'subCaste':
                scope.subCasteArr = scope.removeSelect(commonFactory.subCaste(commonFactory.listSelectedVal(parentval)));
                break;

            case 'star':
                scope.starArr = scope.removeSelect(commonFactory.starBind(commonFactory.listSelectedVal(parentval)));
                break;

            case 'region':
                scope.branchArr = scope.removeSelect(commonFactory.branch(commonFactory.listSelectedVal(parentval)));
                break;
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

        scope.partnerObj = {};
        if (item !== undefined) {
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
            scope.partnerObj.lstSubcaste = scope.SplitstringintoArray(item.subcasteid);
            scope.partnerObj.lstMaritalstatus = item.maritalstatusid;
            scope.partnerObj.lstEducationcategory = scope.SplitstringintoArray(item.EducationCategoryID);
            scope.partnerObj.lstEducationgroup = scope.SplitstringintoArray(item.EducationGroupID);
            scope.partnerObj.lstEmployedin = scope.SplitstringintoArray(item.ProfessionCategoryID);
            scope.partnerObj.lstProfessiongroup = scope.SplitstringintoArray(item.ProfessionGroupID);
            scope.partnerObj.lstPreferredcountry = scope.SplitstringintoArray(item.CountryID);
            scope.partnerObj.lstPreferredstate = scope.SplitstringintoArray(item.StateID);
            scope.partnerObj.lstRegion = scope.SplitstringintoArray(item.regionId);
            scope.partnerObj.lstBranch = scope.SplitstringintoArray(item.branchid);
            scope.partnerObj.rbtDiet = item.DietID;
            scope.partnerObj.rbtManglikKujadosham = item.KujaDoshamID;
            scope.partnerObj.rbtPreferredstarLanguage = item.StarLanguageID;
            scope.partnerObj.rbtPreferredstars = item.TypeOfStar;
            scope.partnerObj.lstpreferedstars = scope.SplitstringintoArray(item.PreferredStars);
        }
        commonFactory.open('partnerPrefContent.html', scope, uibModal);

    };

    scope.partnerdescPopulate = function(item) {
        scope.partnerDescObj = {};
        if (item !== undefined) {
            scope.partnerDescObj.txtpartnerdescription = item.PartnerDescripition;
        }
        commonFactory.open('partnerDescContent.html', scope, uibModal);
    };
    scope.partnerPrefSubmit = function(objitem) {

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
            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        };

        // var datare = { "GetDetails": { "CustID": 91035, "AgeGapFrom": 1, "AgeGapTo": 5, "HeightFrom": "17", "HeightTo": "22", "Religion": "1,2", "Mothertongue": "1,2", "Caste": "402,403", "Subcaste": "459,462", "Maritalstatus": "43,44", "ManglikKujadosham": "2", "PreferredstarLanguage": "2", "Educationcategory": "1,2", "Educationgroup": "2,3", "Employedin": "1,2", "Professiongroup": "1,2", "Diet": "28", "Preferredcountry": "1,2", "Preferredstate": "4,5", "Preferreddistrict": '', "Preferredlocation": '', "TypeofStar": "1", "PrefredStars": "4,5", "GenderID": 2, "Region": "408,409", "Branch": "" }, "customerpersonaldetails": { "intCusID": 91035, "EmpID": '', "Admin": '' } };

        console.log(JSON.stringify(scope.partnerPrefData));
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
    };
    scope.cancel = function() {
        commonFactory.closepopup();
    };


    scope.partnerDescriptionSubmit = function(obj) {
        scope.submitPromise = partnerPreferenceServices.submitPartnerDescData({ CustID: custID, AboutYourself: obj.txtpartnerdescription, flag: 1 }).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === '1') {
                scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
            } else {
                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
            }
        });


    };



}]);