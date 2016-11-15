editviewapp.controller("partnerPreferenceCtrl", ['partnerPreferenceServices', '$scope', '$uibModal', 'commonFactory', function(partnerPreferenceServices, scope, uibModal, commonFactory) {
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

    var custID = '104613';

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

    scope.changeBind = function(type, parentval, parentval2) {

        switch (type) {
            case 'Country':
                scope.stateArr = commonFactory.StateBind(parentval);
                break;

            case 'EducationCatgory':
                scope.eduGroupArr = commonFactory.educationGroupBind(parentval);
                break;

            case 'caste':
                scope.casteArr = commonFactory.casteDepedency(commonFactory.listSelectedVal(parentval), commonFactory.listSelectedVal(parentval2));
                break;

            case 'subCaste':
                scope.subCasteArr = commonFactory.subCaste(commonFactory.listSelectedVal(parentval));
                break;

            case 'star':
                scope.starArr = commonFactory.starBind(parentval);
                break;

            case 'region':
                scope.branchArr = commonFactory.branch(parentval);
                break;
        }
    }

    scope.partnerprefPopulate = function(item) {


        scope.partnerObj = {};
        if (item != undefined) {
            scope.casteArr = commonFactory.casteDepedency(item.religionid, item.MotherTongueID);
            scope.stateArr = commonFactory.StateBind(item.CountryID);
            scope.eduGroupArr = commonFactory.educationGroupBind(item.EducationCategoryID);
            scope.starArr = commonFactory.starBind(item.StarLanguageID);
            scope.partnerObj.intCusID = item.intCusID,
                scope.ageGapArr = commonFactory.numbersBind('years', 1, 80);

            scope.partnerObj.rbtlGender = item.Gender === 'Female' ? 2 : 1,
                scope.partnerObj.ddlFromAge = item.Agemin,
                scope.partnerObj.ddlToAge = item.AgeMax,
                scope.partnerObj.ddlFromheight = item.MinHeight,
                scope.partnerObj.ddltoHeight = item.MaxHeight,
                scope.partnerObj.lstReligion = item.religionid,
                scope.partnerObj.lstMothertongue = item.MotherTongueID,
                scope.partnerObj.lstCaste = item.casteid,
                scope.partnerObj.lstSubcaste = item.subcasteid,
                scope.partnerObj.lstMaritalstatus = item.maritalstatusid,
                scope.partnerObj.lstEducationcategory = item.EducationCategoryID,
                scope.partnerObj.lstEducationgroup = item.EducationGroupID,
                scope.partnerObj.lstEmployedin = item.ProfessionCategoryID,
                scope.partnerObj.lstProfessiongroup = item.ProfessionGroupID,
                scope.partnerObj.lstPreferredcountry = item.CountryID,
                scope.partnerObj.lstPreferredstate = item.StateID,
                scope.partnerObj.lstRegion = item.regionId,
                scope.partnerObj.lstBranch = item.branchid,
                scope.partnerObj.rbtDiet = item.DietID,
                scope.partnerObj.rbtManglikKujadosham = item.KujaDoshamID,
                scope.partnerObj.rbtPreferredstarLanguage = item.StarLanguageID,
                scope.partnerObj.rbtPreferredstars = item.TypeOfStar,
                scope.partnerObj.lstpreferedstars = item.PreferredStars
        }
        commonFactory.open('partnerPrefContent.html', scope, uibModal);

    }

    scope.partnerdescPopulate = function(item) {
        scope.partnerDescObj = {};
        if (item != undefined) {
            scope.partnerDescObj.txtpartnerdescription = item.PartnerDescripition;
        }
        commonFactory.open('partnerDescContent.html', scope, uibModal);
    }
    scope.partnerPrefSubmit = function(objitem) {

        scope.partnerPrefData = {
            GetDetails: {
                CustID: scope.partnerObj.intCusID,
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
                PrefredStars: objitem.lstpreferedstars,
                GenderID: objitem.rbtlGender,
                Region: commonFactory.listSelectedVal(objitem.lstRegion),
                Branch: commonFactory.listSelectedVal(objitem.lstBranch),
            },
            customerpersonaldetails: {
                intCusID: scope.partnerObj.intCusID,
                EmpID: null,
                Admin: null
            }
        }
        debugger;

        partnerPreferenceServices.submitPartnerPrefData(scope.partnerPrefData).then(function(response) {
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


    scope.partnerDescriptionSubmit = function(obj) {
        partnerPreferenceServices.submitPartnerDescData({ CustID: custID, AboutYourself: obj.txtpartnerdescription, flag: 1 }).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === '1') {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });


    }



}]);