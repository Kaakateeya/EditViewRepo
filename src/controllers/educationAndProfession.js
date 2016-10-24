editviewapp.controller('eduAndProfCtrl', ['$uibModal', '$log', '$scope', 'editviewServices', 'SelectBindService', function (uibModal, log, scope, editviewServices, SelectBindService) {
  scope.ssssss = 'ddddddd';
  //
  debugger;
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

  scope.open = function (url) {
    scope.modalInstance = uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: url,
      scope: scope
    });
  };

  scope.showpopup = function (type, item) {
    switch (type) {
      case 'showEduModal':
        if (item != undefined) {
          scope.edoObj.IsHighestDegree = '1';
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


        }
        scope.open('profModalContent.html');
        break;

      case 'showAboutModal':
        scope.open('AboutModalContent.html');
        break;
    }

  }


  scope.getdata = function () {

    var obj = { ICustID: "91035" };
    editviewServices.getEducationData(obj).then(function (response) {

      scope.educationSelectArray = response.data;

    });
    editviewServices.getProfessionData(obj).then(function (response) {
      scope.ProfessionSelectArray = response.data;
    });


  }

  scope.changeBind = function (type, parentval) {
    switch (type) {
      case 'Country':
        scope.stateArr = [];

        SelectBindService.stateSelect(parentval).then(function (response) {
          _.each(response.data, function (item) {
            scope.stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
          });
        });
        break;

      case 'State':

        scope.districtArr = [];

        SelectBindService.districtSelect(parentval).then(function (response) {
          _.each(response.data, function (item) {
            scope.districtArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
          });
        });
        break;

      case 'District':
        scope.cityeArr = [];

        SelectBindService.citySelect(parentval).then(function (response) {
          _.each(response.data, function (item) {
            scope.cityeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
          });
        });
        break;

      case 'EducationCatgory':
        scope.eduGroupArr = [];
        SelectBindService.EducationGroup(parentval).then(function (response) {
          _.each(response.data, function (item) {
            scope.eduGroupArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
          });
        });
        break;

      case 'EducationGroup':
        scope.eduSpecialisationArr = [];
        SelectBindService.EducationSpecialisation(parentval).then(function (response) {
          _.each(response.data, function (item) {
            scope.eduSpecialisationArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
          });
        });
        break;

      case 'ProfessionGroup':
        scope.ProfSpecialisationArr = [];
        SelectBindService.ProfessionSpecialisation(parentval).then(function (response) {
          _.each(response.data, function (item) {
            scope.ProfSpecialisationArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
          });
        });
        break;

    }




    scope.ProfchangeBind = function (type, parentval) {
      switch (type) {
        case 'Country':
          scope.ProfstateArr = [];

          SelectBindService.stateSelect(parentval).then(function (response) {
            _.each(response.data, function (item) {
              scope.ProfstateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
          });
          break;

        case 'State':
          scope.ProfdistrictArr = [];

          SelectBindService.districtSelect(parentval).then(function (response) {
            _.each(response.data, function (item) {
              scope.ProfdistrictArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
          });
          break;

        case 'District':
          scope.ProfcityeArr = [];

          SelectBindService.citySelect(parentval).then(function (response) {
            _.each(response.data, function (item) {
              scope.ProfcityeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
          });
          break;

        case 'ProfessionGroup':
          scope.ProfSpecialisationArr = [];
          SelectBindService.ProfessionSpecialisation(parentval).then(function (response) {
            _.each(response.data, function (item) {
              scope.ProfSpecialisationArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
          });
          break;

      }
    }
  }

  scope.passOfYear = function (maxyr, no_year) {
    var yr = 1;
    for (var i = maxyr; i >= no_year; i--) {
      scope.passOfyearArr.push({ "label": i, "title": i, "value": yr });
      yr += 1;
    }
  }
  scope.passOfYear(2020, 1975);
  scope.ShowCity = function () {

    scope.cityinput = true;
  }

  scope.eduSubmit = function (objitem) {

    scope.myData.customerEducation = {
      CustID : scope.edoObj.intCusID,
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
      Cust_Education_ID :scope.edoObj.EducationID,
      intEduID :scope.edoObj.EducationID,
    }

    scope.myData.customerpersonaldetails = {
      intCusID: 91035,
      EmpID: null,
      Admin: null
    }

    editviewServices.submitEducationData(scope.myData).then(function (response) {
      console.log(response);
    });

    scope.modalInstance.close();
  };


  scope.ProfSubmit = function (objitem) {

    scope.myData.customerpersonaldetails = {

      //CustID: objitem.ddlEduCatgory,
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
      Workingfromdate: objitem.txtworkingfrom,
      OccupationDetails: objitem.txtoccupation,
      visastatus: objitem.ddlvisastatus,
      Sincedate: objitem.txtssincedate,
      ArrivalDate: objitem.txtarrivaldate,
      DepartureDate: objitem.txtdeparture,
      //profGridID: objitem.txtcity,
      //ProfessionID: objitem.txtcity,

    }

    scope.myData.customerpersonaldetails = {
      intCusID: 91022,
      EmpID: null,
      Admin: null
    }

    editviewServices.submitEducationData(scope.myData).then(function (response) {
      console.log(response);
    });

    scope.modalInstance.close();
  };





}]);