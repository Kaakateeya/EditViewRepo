editviewapp.controller('eduAndProfCtrl', ['$uibModal', '$scope', 'editviewServices', 'SelectBindService', 'commonFactory', '$mdDialog', '$filter', 'authSvc', '$timeout', function(uibModal, scope, editviewServices, SelectBindService, commonFactory, mdDialog, filter, authSvc, timeout) {

    scope.stateArr = [];
    scope.districtArr = [];
    scope.cityeArr = [];
    scope.passOfyearArr = [];
    scope.eduGroupArr = [];
    scope.eduSpecialisationArr = [];
    scope.ProfSpecialisationArr = [];
    scope.Country = 'Country';
    scope.educationcategory = 'educationcategory';
    scope.ProfCatgory = 'ProfCatgory';
    scope.ProfGroup = 'ProfGroup';
    scope.currency = 'currency';
    scope.ProfstateArr = [];
    scope.ProfdistrictArr = [];
    scope.ProfcityeArr = [];
    scope.profObj = {};
    scope.edoObj = {};
    scope.aboutObj = {};
    scope.edoObj.IsHighestDegree = '';

    var logincustid = authSvc.getCustId();
    var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

    scope.cancel = function() {
        commonFactory.closepopup();
    };


    scope.showpopup = function(type, item) {

        switch (type) {
            case 'showEduModal':
                scope.edoObj.EducationID = null;
                scope.edoObj = {};
                if (item !== undefined) {
                    scope.eduGroupArr = commonFactory.educationGroupBind(item.EducationCategoryID);
                    scope.eduSpecialisationArr = commonFactory.educationSpeciakisationBind(item.EducationGroupID);
                    scope.stateArr = commonFactory.StateBind(item.CountryID);
                    scope.districtArr = commonFactory.districtBind(item.StateID);
                    scope.cityeArr = commonFactory.cityBind(item.DistrictID);

                    scope.edoObj.IsHighestDegree = item.EduHighestDegree;
                    console.log(item.EduPassOfYear);

                    scope.edoObj.ddlEduCatgory = commonFactory.checkvals(item.EducationCategoryID) ? parseInt(item.EducationCategoryID) : null;

                    scope.edoObj.ddlEdugroup = item.EducationGroupID;
                    scope.edoObj.ddlEduspecialization = item.EducationSpecializationID;
                    scope.edoObj.txtuniversity = item.EduUniversity;
                    scope.edoObj.txtcollege = item.EduCollege;
                    scope.edoObj.ddlpassOfyear = commonFactory.checkvals(item.EduPassOfYear) ? parseInt(item.EduPassOfYear) : null;
                    scope.edoObj.ddlCountry = item.CountryID;
                    scope.edoObj.ddlState = item.StateID;
                    scope.edoObj.ddlDistrict = item.DistrictID;
                    scope.edoObj.ddlcity = item.CityID;
                    scope.edoObj.txtcity = "";
                    scope.edoObj.txtEdumerits = item.Educationdesc;
                    scope.edoObj.intCusID = item.intCusID;
                    scope.edoObj.EducationID = item.EducationID;
                }


                commonFactory.open('EduModalContent.html', scope, uibModal);
                break;

            case 'showProfModal':
                scope.profObj.Cust_Profession_ID = null;
                scope.profObj = {};
                if (item !== undefined) {
                    scope.ProfstateArr = commonFactory.StateBind(item.CountryID);
                    scope.ProfdistrictArr = commonFactory.districtBind(item.StateID);
                    scope.ProfcityeArr = commonFactory.cityBind(item.DistrictID);
                    scope.ProfSpecialisationArr = commonFactory.professionBind(item.ProfessionGroupID);

                    scope.profObj.intCusID = item.intCusID;
                    scope.profObj.ddlemployedin = item.ProfessionCategoryID;
                    scope.profObj.ddlprofgroup = item.ProfessionGroupID;
                    scope.profObj.ddlprofession = item.ProfessionID;
                    scope.profObj.txtcmpyname = item.CompanyName;
                    scope.profObj.txtsalary = item.Salary;

                    scope.profObj.ddlcurreny = item.SalaryCurrency;
                    scope.profObj.ddlCountryProf = item.CountryID;
                    scope.profObj.ddlStateProf = item.StateID;
                    scope.profObj.ddlDistrictProf = item.DistrictID;
                    scope.profObj.ddlcityworkingprofession = item.CityID;
                    scope.profObj.txtcityprofession = item.CityWorkingIn;
                    scope.profObj.txtworkingfrom = moment(item.WorkingFromDate, 'DD-MM-YYYY').format(); // item.WorkingFromDate;
                    scope.profObj.ddlvisastatus = item.VisaTypeID;
                    scope.profObj.txtssincedate = moment(item.ResidingSince, 'DD-MM-YYYY').format();
                    scope.profObj.txtarrivaldate = moment(item.ArrivingDate, 'DD-MM-YYYY').format();
                    scope.profObj.txtdeparture = moment(item.DepartureDate, 'DD-MM-YYYY').format();
                    scope.profObj.txtoccupation = item.OccupationDetails;
                    scope.profObj.Cust_Profession_ID = item.Cust_Profession_ID;
                }

                commonFactory.open('profModalContent.html', scope, uibModal);
                break;

            case 'showAboutModal':

                if (item !== undefined) {
                    scope.aboutObj.txtAboutUS = item;
                }
                commonFactory.open('AboutModalContent.html', scope, uibModal);
                break;
        }

    };


    scope.getdata = function() {

        editviewServices.getEducationData(custID).then(function(response) {
            scope.educationSelectArray = response.data;
            console.log(scope.educationSelectArray);
        });
        editviewServices.getProfessionData(custID).then(function(response) {
            scope.ProfessionSelectArray = response.data;
            console.log(scope.ProfessionSelectArray);
        });
        scope.lblaboutUrself = null;
        editviewServices.getAboutData(custID).then(function(response) {
            scope.lblaboutUrself = response.data;

        });
    };
    scope.getdata();

    scope.ProfchangeBind = function(type, parentval) {

        switch (type) {

            case 'ProfessionGroup':
                scope.ProfSpecialisationArr = commonFactory.professionBind(parentval);
                break;
        }
    };

    scope.changeBind = function(type, parentval) {
        switch (type) {

            case 'EducationCatgory':
                scope.eduGroupArr = commonFactory.educationGroupBind(parentval);
                break;

            case 'EducationGroup':
                scope.eduSpecialisationArr = commonFactory.educationSpeciakisationBind(parentval);
                break;
        }

    };

    scope.passOfYear = function(maxyr, no_year) {
        var yr = 1;
        scope.passOfyearArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
        for (var i = maxyr; i >= no_year; i--) {
            scope.passOfyearArr.push({ "label": i, "title": i, "value": i });
            yr += 1;
        }
    };
    scope.passOfYear(2020, 1975);

    scope.eduSubmit = function(objitem) {

        scope.myData = {
            customerEducation: {
                CustID: custID,
                // scope.edoObj.intCusID,
                Educationcategory: objitem.ddlEduCatgory,
                Educationgroup: objitem.ddlEdugroup,
                EducationSpecialization: objitem.ddlEduspecialization,
                University: objitem.txtuniversity,
                College: objitem.txtcollege,
                Passofyear: objitem.ddlpassOfyear,
                Countrystudyin: objitem.ddlCountry,
                Statestudyin: objitem.ddlState,
                Districtstudyin: objitem.ddlDistrict,
                CitystudyIn: objitem.ddlcity,
                OtherCity: objitem.txtcity,
                Highestdegree: objitem.IsHighestDegree,
                Educationalmerits: objitem.txtEdumerits,
                Cust_Education_ID: scope.edoObj.EducationID,
                intEduID: scope.edoObj.EducationID,
            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        };


        editviewServices.submitEducationData(scope.myData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                editviewServices.getEducationData(custID).then(function(response) {
                    scope.educationSelectArray = response.data;
                });

                scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);

            } else {
                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
            }
        });


    };

    scope.ProfSubmit = function(objitem) {

        scope.myprofData = {
            customerProfession: {
                CustID: custID,
                EmployedIn: objitem.ddlemployedin,
                Professionalgroup: objitem.ddlprofgroup,
                Profession: objitem.ddlprofession,
                Companyname: objitem.txtcmpyname,
                Currency: objitem.ddlcurreny,
                Monthlysalary: objitem.txtsalary,
                CountryID: objitem.ddlCountryProf,
                StateID: objitem.ddlStateProf,
                DistrictID: objitem.ddlDistrictProf,
                CityID: objitem.ddlcityworkingprofession,
                OtherCity: objitem.txtcityprofession,
                Workingfromdate: filter('date')(objitem.txtworkingfrom, 'yyyy-MM-dd'),
                OccupationDetails: objitem.txtoccupation,
                visastatus: objitem.ddlvisastatus,
                Sincedate: objitem.txtssincedate !== '' && objitem.txtssincedate !== 'Invalid date' ? filter('date')(objitem.txtssincedate, 'yyyy-MM-dd') : null,
                ArrivalDate: objitem.txtarrivaldate !== '' && objitem.txtarrivaldate !== 'Invalid date' ? filter('date')(objitem.txtarrivaldate, 'yyyy-MM-dd') : null,
                DepartureDate: objitem.txtdeparture !== '' && objitem.txtdeparture !== 'Invalid date' ? filter('date')(objitem.txtdeparture, 'yyyy-MM-dd') : null,
                profGridID: scope.profObj.Cust_Profession_ID,
                ProfessionID: scope.profObj.Cust_Profession_ID,
            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        };



        editviewServices.submitProfessionData(scope.myprofData).then(function(response) {

            commonFactory.closepopup();
            if (response.data === 1) {

                editviewServices.getProfessionData(custID).then(function(response) {
                    scope.ProfessionSelectArray = response.data;
                });
                scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);

            } else {
                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
            }
        });

    };

    scope.AboutUrselfSubmit = function(obj) {

        editviewServices.submitAboutUrData({ CustID: custID, AboutYourself: obj.txtAboutUS, flag: 1 }).then(function(response) {

            commonFactory.closepopup();
            if (response.data === '1') {

                editviewServices.getAboutData(custID).then(function(response) {
                    scope.lblaboutUrself = response.data;

                });
                scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
            } else {
                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
            }
        });
    };

}]);