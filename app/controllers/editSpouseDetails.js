editviewapp.controller('Spousectrl', ['$scope', 'SpouseServices', 'authSvc', '$uibModal', 'commonFactory', '$filter',
    function(scope, SpouseServices, authSvc, uibModal, commonFactory, filter) {
        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.spouseArray = [];
        scope.ChildArray = [];
        scope.spouObj = {};
        scope.childObj = {};
        scope.noofChldrenAray = commonFactory.numbersBind('', 0, 10);

        scope.pageload = function() {
            SpouseServices.getSpouseData(custID).then(function(response) {
                if (response.data.length > 0) {
                    scope.spouseArray = response.data[0].length > 0 ? JSON.parse(response.data[0]) : [];
                    scope.ChildArray = response.data[1].length > 0 ? JSON.parse(response.data[1]) : [];
                    console.log(scope.spouseArray);
                    console.log(scope.ChildArray);
                }

            });
        };

        scope.pageload();
        scope.populatepopup = function(type, item) {
            switch (type) {

                case 'Spouse':
                    scope.spouObj.Cust_Spouse_ID = null;
                    scope.spouObj = {};
                    if (item !== undefined) {
                        scope.spouObj.Cust_Spouse_ID = item.Cust_Spouse_ID;
                        scope.spouObj.txtSpousename = item.NAME;
                        scope.spouObj.txtSpoueEducation = item.EducationDetails;
                        scope.spouObj.txtspouseProfession = item.ProfessionDetails;
                        scope.spouObj.txtHouseFlatnumber = item.HouseFlatNumberID;
                        scope.spouObj.txtApartmentname = item.AppartmentName;
                        scope.spouObj.txtStreetname = item.StreetName;
                        scope.spouObj.txtAreaname = item.AreaName;
                        scope.spouObj.txtLandmark = item.LandMark;
                        scope.spouObj.ddlspouseCountry = item.Country;
                        scope.spouObj.ddlspouseState = item.STATE;
                        scope.spouObj.ddlspouseDistrict = item.District;
                        scope.spouObj.ddlspouseCity = item.City;
                        scope.spouObj.txtspouseZip = item.Zip;
                        scope.spouObj.txtMarriedon = item.MarriageDate;
                        scope.spouObj.txtSeparateddate = item.SeperatedDate;
                        scope.spouObj.rbtspousediverse = item.LeagallyDivorceID;
                        scope.spouObj.txtLegalDivorsedate = item.DateofLegallDivorce;
                        scope.spouObj.txtspousefather = item.FatherFirstName;
                        scope.spouObj.txtspouselastname = item.FatherLastName;
                        scope.spouObj.txtpreviousmarriage = item.ReasonforDivorce;
                        scope.spouObj.rbtnspousefamily = item.MyFamilyPlanningID;
                        scope.spouObj.ddlspousechidrens = item.NoOfChildrens;
                    }

                    commonFactory.open('SpouseContent.html', scope, uibModal);
                    break;

                case 'Child':

                    scope.childObj.Cust_Children_ID = null;
                    scope.childObj = {};
                    if (item !== undefined) {
                        scope.childObj.Cust_Children_ID = item.Cust_Children_ID;
                        scope.childObj.txtchildname = item.ChildName;
                        scope.childObj.rdlgenderchild = item.ChildGender;
                        scope.childObj.txtdobchild = item.ChildDOB;
                        scope.childObj.rbtChildstayingWith = item.ChildStayingWithID;
                        scope.childObj.ddlrelation = item.ChildStayingWithRelation;
                    }
                    commonFactory.open('spouseChildContent.html', scope, uibModal);

                    break;
            }

        };

        scope.cancel = function() {
            commonFactory.closepopup();
        };

        scope.spouseSubmit = function(obj) {
            scope.SpouseData = {
                GetDetails: {
                    CustID: custID,
                    NAME: obj.txtSpousename,
                    Education: obj.txtSpoueEducation,
                    Profession: obj.txtspouseProfession,
                    HouseFlatnumber: obj.txtHouseFlatnumber,
                    Apartmentname: obj.txtApartmentname,
                    Streetname: obj.txtStreetname,
                    Areaname: obj.txtAreaname,
                    Landmark: obj.txtLandmark,
                    Country: obj.ddlspouseCountry,
                    STATE: obj.ddlspouseState,
                    District: obj.ddlspouseDistrict,
                    City: obj.ddlspouseCity,
                    Zip: obj.txtspouseZip,
                    Marriedon: obj.txtMarriedon !== '' && obj.txtMarriedon !== 'Invalid date' ? filter('date')(obj.txtMarriedon, 'yyyy-MM-dd') : null,
                    Separateddate: obj.txtSeparateddate !== '' && obj.txtSeparateddate !== 'Invalid date' ? filter('date')(obj.txtSeparateddate, 'yyyy-MM-dd') : null,
                    Legallydivorced: obj.rbtspousediverse,
                    Dateoflegaldivorce: obj.txtLegalDivorsedate !== '' && obj.txtLegalDivorsedate !== 'Invalid date' ? filter('date')(obj.txtLegalDivorsedate, 'yyyy-MM-dd') : null,
                    Uploaddivorcedocument: null,
                    Fatherfirstname: obj.txtspousefather,
                    Fatherlastname: obj.txtspouselastname,
                    Notesaboutpreviousmarriage: obj.txtpreviousmarriage,
                    Familyplanning: obj.rbtnspousefamily,
                    Noofchildren: obj.ddlspousechidrens,
                    Cust_Spouse_ID: scope.spouObj.Cust_Spouse_ID
                },
                customerpersonaldetails: {
                    intCusID: custID,
                    EmpID: null,
                    Admin: null
                }
            };
            debugger;
            console.log(JSON.stringify(scope.SpouseData));

            SpouseServices.submitSpouseData(scope.SpouseData).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                scope.pageload();
            });



        };

        scope.childSubmit = function(obj) {
            scope.childData = {
                GetDetails: {
                    CustID: custID,
                    Nameofthechild: obj.txtchildname,
                    Genderofthechild: obj.rdlgenderchild,
                    DOB: obj.txtdobchild !== '' && obj.txtdobchild !== 'Invalid date' ? filter('date')(obj.txtdobchild, 'yyyy-MM-dd') : null,
                    Childstayingwith: obj.rbtChildstayingWith,
                    Childstayingwithrelation: obj.ddlrelation,
                    Cust_Children_ID: scope.childObj.Cust_Children_ID
                },
                customerpersonaldetails: {
                    intCusID: custID,
                    EmpID: null,
                    Admin: null
                }
            };

            SpouseServices.submitChildeData(scope.childData).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                scope.pageload();
            });


        };


    }
]);