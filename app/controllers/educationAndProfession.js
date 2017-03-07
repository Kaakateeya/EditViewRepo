editviewapp.controller('eduAndProfCtrl', ['$uibModal', '$scope', 'editviewServices', 'SelectBindService',
    'commonFactory', '$mdDialog', '$filter', 'authSvc', '$timeout', 'route', '$q', '$log',
    function(uibModal, scope, editviewServices, SelectBindService, commonFactory,
        mdDialog, filter, authSvc, timeout, route, $q, $log) {

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
        scope.custObj = {};
        scope.edoObj.IsHighestDegree = '';
        var isSubmit = true;
        scope.educationID = 0;
        scope.CustomerDataArr = [];

        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

        scope.cancel = function() {
            commonFactory.closepopup();
        };

        SelectBindService.countryCodeselect().then(function(response) {
            var option = [];
            option.push({ "label": "--select--", "title": "--select--", "value": "" });
            _.each(response.data, function(item) {
                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
            sessionStorage.setItem('CountryCode', JSON.stringify(option));
            console.log(123);
        });

        scope.showpopup = function(type, item) {
            isSubmit = true;
            switch (type) {
                case 'showEduModal':
                    scope.edoObj.EducationID = null;
                    scope.edoObj = {};
                    if (item !== undefined) {

                        scope.eduGroupArr = commonFactory.checkvals(item.EducationCategoryID) ? commonFactory.educationGroupBind(item.EducationCategoryID) : [];
                        scope.eduSpecialisationArr = commonFactory.checkvals(item.EducationGroupID) ? commonFactory.educationSpeciakisationBind(item.EducationGroupID) : [];

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
                        // scope.ProfstateArr = commonFactory.StateBind(item.CountryID);
                        // scope.ProfdistrictArr = commonFactory.districtBind(item.StateID);
                        // scope.ProfcityeArr = commonFactory.cityBind(item.DistrictID);
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
                        scope.profObj.txtworkingfrom = commonFactory.convertDateFormat(item.WorkingFromDate, 'DD-MM-YYYY');
                        scope.profObj.ddlvisastatus = item.VisaTypeID;
                        scope.profObj.txtssincedate = commonFactory.convertDateFormat(item.ResidingSince, 'DD-MM-YYYY');
                        scope.profObj.txtarrivaldate = commonFactory.convertDateFormat(item.ArrivingDate, 'DD-MM-YYYY');
                        scope.profObj.txtdeparture = commonFactory.convertDateFormat(item.DepartureDate, 'DD-MM-YYYY');
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

                case 'custData':
                    if (item !== undefined) {
                        scope.custObj.rdlGender = item.GenderID;
                        scope.custObj.txtSurName = item.LastName;
                        scope.custObj.txtName = item.FirstName;
                        scope.custObj.dropmaritalstatus = item.MaritalStatusID;
                        scope.custObj.txtdobcandidate = commonFactory.convertDateFormat(item.DateofBirthwithoutAge, 'DD-MM-YYYY');
                        scope.custObj.ddlHeightpersonal = item.HeightID;
                        scope.custObj.ddlcomplexion = item.ComplexionID;
                        scope.custObj.ddlreligioncandadate = item.ReligionID;
                        scope.custObj.ddlmothertongue = item.MotherTongueID;
                        scope.custObj.ddlcaste = item.CasteID;
                        scope.custObj.ddlsubcaste = item.SubCasteID;
                        scope.custObj.ddlBornCitizenship = item.CitizenshipID;

                    }
                    commonFactory.open('CustomerDataContent.html', scope, uibModal);
                    break;
            }

        };

        scope.getdata = function() {

            editviewServices.getEducationData(custID).then(function(response) {
                if (commonFactory.checkvals(response.data)) {
                    scope.educationSelectArray = response.data;
                }

            });
            editviewServices.getProfessionData(custID).then(function(response) {
                if (commonFactory.checkvals(response.data)) {
                    scope.ProfessionSelectArray = response.data;
                }

            });
            scope.lblaboutUrself = null;
            editviewServices.getAboutData(custID).then(function(response) {
                if (commonFactory.checkvals(response.data)) {
                    var AboutData = (response.data).split(';');
                    scope.lblaboutUrself = (AboutData[0].split(':'))[1];
                    scope.AboutReviewStatusID = (AboutData[1].split(':'))[1];
                }
            });


            editviewServices.getCustomerData(custID).then(function(response) {
                scope.CustomerDataArr = response.data !== undefined && response.data.length > 0 ? JSON.parse(response.data) : [];
                console.log(scope.CustomerDataArr);
            });

        };


        scope.ProfchangeBind = function(type, parentval) {

            switch (type) {

                case 'ProfessionGroup':
                    scope.ProfSpecialisationArr = commonFactory.professionBind(parentval);
                    scope.profObj.ddlprofession = "";
                    break;
            }
        };

        scope.changeBind = function(type, parentval) {
            if (commonFactory.checkvals(parentval)) {

                switch (type) {

                    case 'EducationCatgory':

                        scope.eduGroupArr = commonFactory.educationGroupBind(parentval);
                        scope.edoObj.ddlEdugroup = "";

                        break;

                    case 'EducationGroup':

                        scope.eduSpecialisationArr = commonFactory.educationSpeciakisationBind(parentval);
                        scope.edoObj.ddlEduspecialization = "";

                        break;
                }
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

            if (isSubmit) {
                isSubmit = false;
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

                scope.submitPromise = editviewServices.submitEducationData(scope.myData).then(function(response) {
                    console.log(response);
                    commonFactory.closepopup();
                    if (response.data === 1) {
                        editviewServices.getEducationData(custID).then(function(response) {
                            scope.educationSelectArray = response.data;
                        });

                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                        if (scope.datagetInStatus === 1) {
                            sessionStorage.removeItem('missingStatus');
                            route.go('mobileverf', {});
                        }
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });
            }

        };

        scope.ProfSubmit = function(objitem) {

            if (isSubmit) {
                isSubmit = false;
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

                scope.submitPromise = editviewServices.submitProfessionData(scope.myprofData).then(function(response) {

                    commonFactory.closepopup();
                    if (response.data === 1) {

                        editviewServices.getProfessionData(custID).then(function(response) {
                            scope.ProfessionSelectArray = response.data;
                        });
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                        if (scope.datagetInStatus === 1) {
                            sessionStorage.removeItem('missingStatus');
                            route.go('mobileverf', {});
                        }

                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });
            }
        };

        scope.AboutUrselfSubmit = function(obj) {
            if (isSubmit) {
                isSubmit = false;
                scope.submitPromise = editviewServices.submitAboutUrData({ CustID: custID, AboutYourself: obj.txtAboutUS, flag: 1 }).then(function(response) {
                    commonFactory.closepopup();
                    if (response.data === '1') {

                        editviewServices.getAboutData(custID).then(function(response) {

                            if (commonFactory.checkvals(response.data)) {
                                var AboutData = (response.data).split(';');
                                scope.lblaboutUrself = (AboutData[0].split(':'))[1];
                                scope.AboutReviewStatusID = (AboutData[1].split(':'))[1];
                            }
                        });
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });
            }

        };
        scope.$on('datagetinedu', function(e, type) {
            scope.showpopup(type);
            scope.datagetInStatus = 1;

        });


        scope.DeleteEduPopup = function(id) {
            scope.educationID = id;
            commonFactory.open('deleteEduContent.html', scope, uibModal, 'sm');
        };

        scope.deleteEduSubmit = function() {
            editviewServices.DeleteSection({ sectioname: 'Education', CustID: custID, identityid: scope.educationID }).then(function(response) {
                console.log(response);
                editviewServices.getEducationData(custID).then(function(response) {
                    scope.educationSelectArray = response.data;
                });
                commonFactory.closepopup();
            });


        };

        scope.custdataSubmit = function(obj) {

            scope.custData = {
                GetDetails: {
                    CustID: custID,
                    MaritalStatusID: obj.dropmaritalstatus,
                    DateofBirth: obj.txtdobcandidate !== '' && obj.txtdobcandidate !== 'Invalid date' ? filter('date')(obj.txtdobcandidate, 'yyyy-MM-dd') : null,
                    HeightID: obj.ddlHeightpersonal,
                    ComplexionID: obj.ddlcomplexion,
                    ReligionID: obj.ddlreligioncandadate,
                    MotherTongueID: obj.ddlmothertongue,
                    CasteID: obj.ddlcaste,
                    CitizenshipID: obj.ddlBornCitizenship,
                    SubcasteID: obj.ddlsubcaste,
                    LastName: obj.txtSurName,
                    FirstName: obj.txtName,
                    Gender: obj.rdlGender
                },
                customerpersonaldetails: {
                    intCusID: custID,
                    EmpID: null,
                    Admin: null
                }
            };
            debugger;
            editviewServices.submitCustomerData(scope.custData).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
            });


        };







    }
]);