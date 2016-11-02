editviewapp.controller('eduAndProfCtrl', ['$scope', 'editviewServices', 'SelectBindService', 'commonFactory', function(uibModal, scope, editviewServices, SelectBindService, commonFactory) {

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
    scope.ProfstateArr = [];
    scope.ProfdistrictArr = [];
    scope.ProfcityeArr = [];
    scope.profObj = {};
    scope.edoObj = {};

    scope.open = function(url) {
        scope.modalInstance = uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: url,
            scope: scope
        });
    };

    scope.cancel = function() {
        scope.modalInstance.close();
    };

    scope.showpopup = function(type, item) {
        switch (type) {
            case 'showEduModal':
                if (item != undefined) {
                    scope.eduGroupArr = commonFactory.educationGroupBind(item.EducationCategoryID);
                    scope.eduSpecialisationArr = commonFactory.educationSpeciakisationBind(item.EducationGroupID);
                    scope.stateArr = commonFactory.StateBind(item.CountryID);
                    scope.districtArr = commonFactory.districtBind(item.StateID);
                    scope.citySelect = commonFactory.cityBind(item.DistrictID);

                    scope.edoObj.IsHighestDegree = item.EduHighestDegree;
                    scope.edoObj.ddlEduCatgory = item.EducationCategoryID;
                    scope.edoObj.ddlEdugroup = item.EducationGroupID;
                    scope.edoObj.ddlEduspecialization = item.EducationSpecializationID;
                    scope.edoObj.txtuniversity = item.EduUniversity;
                    scope.edoObj.txtcollege = item.EduCollege;
                    scope.edoObj.ddlpassOfyear = item.EduPassOfYear;
                    scope.edoObj.ddlCountry = item.CountryID;
                    scope.edoObj.ddlState = item.StateID;
                    scope.edoObj.ddlDistrict = item.DistrictID;
                    scope.edoObj.ddlcity = item.CityID;
                    scope.edoObj.txtcity = "";
                    scope.edoObj.txtEdumerits = item.Educationdesc;
                    scope.edoObj.intCusID = item.intCusID;
                    scope.edoObj.EducationID = item.EducationID;
                }

                scope.open('EduModalContent.html');
                break;

            case 'showProfModal':

                if (item != undefined) {
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
                    scope.profObj.ddlCountryProf = item.CountryID;
                    scope.profObj.ddlStateProf = item.StateID;
                    scope.profObj.ddlDistrictProf = item.DistrictID;
                    scope.profObj.ddlcityworkingprofession = item.CityID;
                    scope.profObj.txtcityprofession = '';
                    scope.profObj.txtworkingfrom = item.WorkingFromDate;
                    scope.profObj.ddlvisastatus = item.VisaTypeID;
                    scope.profObj.txtssincedate = item.ResidingSince;
                    scope.profObj.txtarrivaldate = item.ArrivingDate;
                    scope.profObj.txtdeparture = item.DepartureDate;
                    scope.profObj.txtoccupation = item.OccupationDetails;
                    scope.profObj.Cust_Profession_ID = item.Cust_Profession_ID;

                }
                scope.open('profModalContent.html');
                break;

            case 'showAboutModal':
                scope.open('AboutModalContent.html');
                break;
        }

    }


    scope.getdata = function() {

        var obj = { ICustID: "91035" };
        editviewServices.getEducationData(obj).then(function(response) {

            scope.educationSelectArray = response.data;
            console.log(response.data[0]);
        });
        editviewServices.getProfessionData(obj).then(function(response) {
            scope.ProfessionSelectArray = response.data;
        });
    }


    scope.ProfchangeBind = function(type, parentval) {

        switch (type) {
            case 'Country':
                scope.ProfstateArr = commonFactory.StateBind(parentval);
                break;

            case 'State':
                scope.ProfdistrictArr = commonFactory.districtBind(parentval);
                break;

            case 'District':
                scope.ProfcityeArr = commonFactory.cityBind(parentval);
                break;

            case 'ProfessionGroup':
                scope.ProfSpecialisationArr = commonFactory.professionBind(parentval);

                break;

        }
    }




    scope.changeBind = function(type, parentval) {
        switch (type) {
            case 'Country':
                scope.stateArr = commonFactory.StateBind(parentval);
                break;

            case 'State':
                scope.districtArr = commonFactory.districtBind(parentval);
                break;

            case 'District':

                scope.citySelect = commonFactory.cityBind(parentval);
                break;

            case 'EducationCatgory':

                scope.eduGroupArr = commonFactory.educationGroupBind(parentval);
                break;

            case 'EducationGroup':
                scope.eduSpecialisationArr = commonFactory.educationSpeciakisationBind(parentval);
                break;

        }

    }

    scope.passOfYear = function(maxyr, no_year) {
        var yr = 1;
        scope.passOfyearArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
        for (var i = maxyr; i >= no_year; i--) {
            scope.passOfyearArr.push({ "label": i, "title": i, "value": yr });
            yr += 1;
        }
    }
    scope.passOfYear(2020, 1975);

    scope.ShowCity = function() {
        scope.cityinput = true;

    }

    scope.eduSubmit = function(objitem) {
        var passOfyearText = (_.where(scope.passOfyearArr, { value: parseInt(objitem.ddlpassOfyear) }))[0].title;

        scope.myData = {
            customerEducation: {
                CustID: 91035,
                // scope.edoObj.intCusID,
                Educationcategory: objitem.ddlEduCatgory,
                Educationgroup: objitem.ddlEdugroup,
                EducationSpecialization: objitem.ddlEduspecialization,
                University: objitem.txtuniversity,
                College: objitem.txtcollege,
                Passofyear: passOfyearText,
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
                intCusID: 91035,
                EmpID: null,
                Admin: null
            }
        }


        editviewServices.submitEducationData(scope.myData).then(function(response) {
            console.log(response);
        });

        scope.modalInstance.close();
    };


    scope.ProfSubmit = function(objitem) {
        debugger;

        scope.myprofData = {
            customerProfession: {
                CustID: 91035,
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
                OtherCity: null,
                Workingfromdate: objitem.txtworkingfrom,
                OccupationDetails: objitem.txtoccupation,
                visastatus: objitem.ddlvisastatus,
                Sincedate: objitem.txtssincedate,
                ArrivalDate: objitem.txtarrivaldate,
                DepartureDate: objitem.txtdeparture,
                profGridID: scope.profObj.Cust_Profession_ID,
                ProfessionID: scope.profObj.Cust_Profession_ID,
            },
            customerpersonaldetails: {
                intCusID: 91035,
                EmpID: null,
                Admin: null
            }
        }


        editviewServices.submitProfessionData(scope.myprofData).then(function(response) {
            console.log(response);
        });

        scope.modalInstance.close();
    };





}]);