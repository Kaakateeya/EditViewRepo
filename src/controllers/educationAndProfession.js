editviewapp.controller('eduAndProfCtrl', ['$uibModal', '$log', '$scope', 'editviewServices', function (uibModal, log, scope, editviewServices) {

  scope.animationsEnabled = true;
  scope.getdata = function () {
    debugger;
    var obj={ ICustID: "91022" };
    editviewServices.getEducationProfessionData(obj).then(function (response) {
      
      alert(JSON.stringify(response));
    });

    scope.educationSelectArray = [
      {
        intEduID: 1,
        EducationCategory: 'Masters in Degree',
        EducationGroup: 'MBA',
        EducationSpecialization: 'Marketing',
        EduUniversity: null,
        EduCollege: 'SRISAI INSTITUTE',
        EduCountryIn: 'India',
        EduStateIn: 'Andhra Pradesh',
        EduDistrictIn: 'Y S R',
        EduCityIn: 'Vaimpalle',
        EduPassOfYear: '2005',
        EduHighestDegree: 1,
        intCusID: 91035,
        EducationID: 308196,
        Educationdesc: null,
        EducationCategoryID: 7,
        EducationGroupID: 383,
        EducationSpecializationID: 1637,
        CountryID: 1,
        StateID: 1,
        DistrictID: 20,
        CityID: 1704,
        reviewstatus: false,
        EmpLastModifictionDate: 'Customer On 08-Oct-2016-15:31:22'
      },
       {
        intEduID: 1,
        EducationCategory: 'Bachelors in Engineering',
        EducationGroup: 'BTech',
        EducationSpecialization: 'Information and Technology',
        EduUniversity: null,
        EduCollege: 'SRISAI INSTITUTE',
        EduCountryIn: 'India',
        EduStateIn: 'Andhra Pradesh',
        EduDistrictIn: 'Y S R',
        EduCityIn: 'Vaimpalle',
        EduPassOfYear: '2005',
        EduHighestDegree: 0,
        intCusID: 91035,
        EducationID: 308196,
        Educationdesc: null,
        EducationCategoryID: 7,
        EducationGroupID: 383,
        EducationSpecializationID: 1637,
        CountryID: 1,
        StateID: 1,
        DistrictID: 20,
        CityID: 1704,
        reviewstatus: false,
        EmpLastModifictionDate: 'Customer On 08-Oct-2016-15:31:22'
      }
    ];

  }
scope.ProfessionSelectArray = [
      {
        iProfID: 1,
        ProfessionCategory: 'Masters in Degree',
        ProfessionGroup: 'MBA',
        Professional: 'Marketing',
        CompanyName: null,
        CountryWorkingIn: 'SRISAI INSTITUTE',
        StateWorkingIn: 'India',
        DistrictWorkingIn: 'Andhra Pradesh',
        CityWorkingIn: 'Y S R',
        OccupationDetails: 'Vaimpalle',
        Currency: '2005',
        Salary: 1,
        ResidingSince: 91035,
        ArrivingDate: 308196,
        VisaStatus: null,
        WorkingFromDate: 7,
        WorkingToDate: 383,
        profGridID: 1637,
        DepartureDate: 1
      }
];

  scope.open = function (size) {
    scope.modalInstance = $uibModal.open({
      animation: scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      scope: scope
    });
  };
  scope.ok = function () {
    scope.modalInstance.close($ctrl.selected.item);
  };

  scope.cancel = function () {
    scope.modalInstance.dismiss('cancel');
  };
}]);


