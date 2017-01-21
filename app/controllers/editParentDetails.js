editviewapp.controller("parentCtrl", ['$uibModal', '$scope', 'parentServices',
    'commonFactory', '$mdDialog', 'authSvc', 'route',
    function(uibModal, scope, parentServices, commonFactory, mdDialog, authSvc, route) {
        scope.indiaStates = 'indiaStates';
        scope.Country = 'Country';
        scope.parent = {};
        scope.AdrrObj = {};
        scope.physicalObj = {};
        scope.bodyType = 'bodyType';
        scope.bloodGroup = 'bloodGroup';
        scope.healthCondition = 'healthCondition';
        scope.countryCode = 'countryCode';
        scope.caste = 'caste';
        scope.lblaboutMyfamily = null;
        scope.aboutFamilyObj = {};
        scope.dcountry = '1';
        scope.parentArr = [];
        scope.AboutFamilyReviewStatus = null;
        var isSubmit = true;
        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

        scope.parentBindData = function(icustID) {
            parentServices.getParentData(icustID).then(function(response) {
                if (commonFactory.checkvals(response.data)) {
                    scope.parentArr = commonFactory.checkvals(response.data[0]) ? JSON.parse(response.data[0]) : [];
                    scope.addressArr = commonFactory.checkvals(response.data[1]) ? JSON.parse(response.data[1]) : [];
                    scope.physicalArr = commonFactory.checkvals(response.data[2]) ? JSON.parse(response.data[2]) : [];
                    scope.AboutFamily = commonFactory.checkvals(response.data[3]) ? JSON.parse(response.data[3]) : [];
                }

                if (commonFactory.checkvals(scope.AboutFamily[0])) {
                    scope.AboutFamilyReviewStatus = scope.AboutFamily[0].reviewstatus;
                }
            });
        };

        scope.AboutPageloadData = function() {
            parentServices.getAboutFamilyData(custID).then(function(response) {
                console.log(response);
                scope.lblaboutMyfamily = response.data;
            });
        };

        scope.parentBindData(custID);
        scope.AboutPageloadData(custID);
        scope.changeBind = function(type, parentval) {

            switch (type) {
                case 'fStates':
                    scope.fDistrictArr = commonFactory.districtBind(parentval);
                    break;

                case 'mStates':
                    scope.mDistrictArr = commonFactory.districtBind(parentval);
                    break;

                case 'Country':
                    scope.stateArr = commonFactory.StateBind(parentval);
                    break;

                case 'State':
                    scope.districtArr = commonFactory.districtBind(parentval);
                    break;
            }

        };

        scope.populateModel = function(type, item) {
            isSubmit = true;
            switch (type) {
                case "parent":
                    scope.parent.FatherCust_family_id = null;
                    scope.parent.MotherCust_family_id = null;
                    scope.parent = {};

                    if (item !== undefined) {
                        scope.parent = [];
                        scope.fDistrictArr = commonFactory.districtBind(item.FatherStateID);
                        scope.mDistrictArr = commonFactory.districtBind(item.motherStateID);

                        scope.parent.cust_id = item.cust_id;
                        scope.parent.FatherCust_family_id = item.FatherCust_family_id;
                        scope.parent.MotherCust_family_id = item.MotherCust_family_id;

                        scope.parent.txtFathername = item.FatherName;
                        scope.parent.txtFEducation = item.FatherEducationDetails;
                        scope.parent.txtFProfession = item.FatherProfDetails;
                        scope.parent.txtCompany = item.FathercompanyName;
                        scope.parent.txtJobLocation = item.FatherJoblocation;

                        scope.parent.ddlMobile = item.FatherLandCountryCodeId;
                        scope.parent.txtMobile = item.FathermobilenumberID;

                        if (commonFactory.checkvals(item.FatherLandAreaCodeId)) {
                            scope.parent.ddlLandLineCountry = item.FatherLandCountryCodeId;
                            scope.parent.txtAreCode = item.FatherLandAreaCodeId;
                            scope.parent.txtLandNumber = item.FatherLandNumberID;
                        } else {
                            scope.parent.ddlfathermobile2 = item.FatherLandCountryCodeId;
                            scope.parent.txtfathermobile2 = item.FatherLandNumberID;
                        }

                        scope.parent.txtEmail = item.FatherEmail;
                        scope.parent.txtFatherFname = item.FatherFathername;

                        scope.parent.ddlFatherfatherMobileCountryCode = item.FatherfatherMobileCountryID;
                        scope.parent.txtMobileFatherfather = item.FatherFatherMobileNumber;

                        if (commonFactory.checkvals(item.FatherFatherLandAreaCode)) {
                            scope.parent.ddlFatherFatherLandLineCode = item.FatherfatherLandCountryCodeID;
                            scope.parent.txtGrandFatherArea = item.FatherFatherLandAreaCode;
                            scope.parent.txtGrandFatherLandLinenum = item.FatherFatherLandNumber;
                        } else {
                            scope.parent.ddlfatherfatherAlternative = item.FatherfatherMobileCountrycode1;
                            scope.parent.txtfatherfatherAlternative = item.FatherFatherLandNumber;
                        }

                        scope.parent.ddlFState = item.FatherStateID;
                        scope.parent.ddlFDistric = item.FatherDistrictID;
                        scope.parent.txtFNativePlace = item.FatherNativeplace;
                        scope.parent.txtMName = item.MotherName;
                        scope.parent.txtMEducation = item.MotherEducationDetails;
                        scope.parent.txtMProfession = item.MotherProfedetails;
                        scope.parent.chkbox = item.MotherProfedetails == 'HouseWife' ? true : false;
                        scope.parent.txtMCompanyName = item.MothercompanyName;
                        scope.parent.txtMJobLocation = item.MotherJoblocation;

                        scope.parent.ddlMMobileCounCodeID = item.MotherMobileCountryCodeId;
                        scope.parent.txtMMobileNum = item.MotherMobilenumberID;

                        if (commonFactory.checkvals(item.MotherLandAreaCodeId)) {
                            scope.parent.ddlMLandLineCounCode = item.MotherLandCountryCodeId;
                            scope.parent.txtmAreaCode = item.MotherLandAreaCodeId;
                            scope.parent.txtMLandLineNum = item.MotherLandNumberID;
                        } else {
                            scope.parent.ddlMMobileCounCodeID2 = item.MotherMobileCountryCodeId;
                            scope.parent.txtMMobileNum2 = item.MotherLandNumberID;

                        }

                        scope.parent.txtMEmail = item.MotherEmail;
                        scope.parent.txtMFatherFname = item.MotherFatherName;
                        scope.parent.txtMFatherLname = item.MotherFatherLastName;

                        scope.parent.ddlMotherfatheMobileCountryCode = item.MotherfatherMobileCountryID;
                        scope.parent.txtMotherfatheMobilenumber = item.MotherFatherMobileNumber;

                        if (commonFactory.checkvals(item.MotherFatherLandAreaCode)) {
                            scope.parent.ddlMotherFatherLandLineCode = item.motherfatherLandCountryID;
                            scope.parent.txtMotherFatherLandLineareacode = item.MotherFatherLandAreaCode;
                            scope.parent.txtMotherFatherLandLinenum = item.MotherFatherLandNumber;
                        } else {
                            scope.parent.ddlmotherfatheralternative = item.MotherfatherMobileCountryID1;
                            scope.parent.txtmotherfatheralternative = item.MotherFatherLandNumber;
                        }
                        scope.parent.ddlMState = item.motherStateID;
                        scope.parent.ddlMDistrict = item.motherDistricID;
                        scope.parent.txtMNativePlace = item.MotherNativeplace;
                        scope.parent.rbtlParentIntercaste = item.Intercaste === 'Yes' ? 1 : 0;
                        scope.parent.ddlFatherCaste = item.FatherCasteID;
                        scope.parent.ddlMotherCaste = item.MotherCasteID;
                    }
                    commonFactory.open('parentModalContent.html', scope, uibModal);

                    break;

                case "Address":
                    scope.AdrrObj.Cust_Family_ID = null;
                    scope.AdrrObj = {};
                    if (item !== undefined) {
                        scope.stateArr = commonFactory.StateBind(item.ParentCountryId);
                        scope.districtArr = commonFactory.districtBind(item.ParentStateid);

                        scope.AdrrObj.Cust_ID = item.Cust_ID;
                        scope.AdrrObj.Cust_Family_ID = item.Cust_Family_ID;

                        scope.AdrrObj.txtHouse_flat = item.FlatNumber;
                        scope.AdrrObj.txtApartmentName = item.ApartmentName;
                        scope.AdrrObj.txtStreetName = item.StreetName;
                        scope.AdrrObj.txtAreaName = item.AreaName;
                        scope.AdrrObj.txtLandmark = item.LandMark;
                        scope.AdrrObj.ddlCountryContact = item.ParentCountryId;
                        scope.AdrrObj.ddlStateContact = item.ParentStateid;
                        scope.AdrrObj.ddlDistricContact = item.ParentDistrictId;
                        scope.AdrrObj.txtCity = item.CityName;
                        scope.AdrrObj.txtZip_no = item.Zip;

                    }
                    commonFactory.open('AddressModalContent.html', scope, uibModal);
                    break;

                case "physicalAttributes":
                    scope.physicalObj = {};
                    if (item !== undefined) {
                        scope.physicalObj.Cust_ID = item.Cust_ID;

                        scope.physicalObj.rbtlDiet = item.DietID;
                        scope.physicalObj.rbtlDrink = item.DrinkID;
                        scope.physicalObj.rbtlSmoke = item.SmokeID;
                        scope.physicalObj.ddlBodyType = item.BodyTypeID;
                        scope.physicalObj.txtBWKgs = item.BodyWeight;
                        //scope.physicalObj.txtlbs = item.;
                        scope.physicalObj.ddlBloodGroup = item.BloodGroupID;
                        scope.physicalObj.ddlHealthConditions = item.HealthConditionID;
                        scope.physicalObj.txtHealthCondition = item.HealthConditionDescription;

                    }
                    commonFactory.open('PhysicalAttributeModalContent.html', scope, uibModal);

                    break;

                case "AboutFamily":
                    if (item !== undefined) {
                        scope.aboutFamilyObj.txtAboutUs = item;
                    }
                    commonFactory.open('AboutFamilyModalContent.html', scope, uibModal);

                    break;
            }
        };

        scope.cancel = function() {
            commonFactory.closepopup();
        };

        scope.ParentSubmit = function(objitem) {
            if (isSubmit) {
                isSubmit = false;

                scope.myData = {
                    GetDetails: {
                        CustID: custID,
                        FatherName: objitem.txtFathername,
                        Educationcategory: null,
                        Educationgroup: null,
                        Educationspecialization: null,
                        Employedin: null,
                        Professiongroup: null,
                        Profession: null,
                        CompanyName: objitem.txtCompany,
                        JobLocation: objitem.txtJobLocation,
                        Professiondetails: objitem.txtFProfession,
                        MobileCountry: objitem.ddlMobile,
                        MobileNumber: objitem.txtMobile,
                        LandlineCountry: commonFactory.checkvals(objitem.ddlfathermobile2) ? objitem.ddlfathermobile2 : (commonFactory.checkvals(objitem.ddlLandLineCountry) ? objitem.ddlLandLineCountry : null),
                        LandAreCode: commonFactory.checkvals(objitem.txtfathermobile2) ? null : (commonFactory.checkvals(objitem.txtAreCode) ? objitem.txtAreCode : null),
                        landLineNumber: commonFactory.checkvals(objitem.txtfathermobile2) ? objitem.txtfathermobile2 : (commonFactory.checkvals(objitem.txtLandNumber) ? objitem.txtLandNumber : null),
                        Email: objitem.txtEmail,
                        FatherFatherName: objitem.txtFatherFname,

                        MotherName: objitem.txtMName,
                        MotherEducationcategory: null,
                        MotherEducationgroup: null,
                        MotherEducationspecialization: null,
                        MotherEmployedIn: null,
                        MotherProfessiongroup: null,
                        MotherProfession: null,
                        MotherCompanyName: objitem.txtMCompanyName,
                        MotherJobLocation: objitem.txtMJobLocation,
                        MotherProfessiondetails: objitem.txtMProfession,
                        MotherMobileCountryID: objitem.ddlMMobileCounCodeID,
                        MotherMobileNumber: objitem.txtMMobileNum,
                        MotherLandCountryID: commonFactory.checkvals(objitem.ddlMMobileCounCodeID2) ? objitem.ddlMMobileCounCodeID2 : commonFactory.checkvals(objitem.ddlMLandLineCounCode) ? objitem.ddlMLandLineCounCode : null,
                        MotherLandAreaCode: commonFactory.checkvals(objitem.txtMMobileNum2) ? null : (commonFactory.checkvals(objitem.txtmAreaCode) ? objitem.txtmAreaCode : null),
                        MotherLandNumber: commonFactory.checkvals(objitem.txtMMobileNum2) ? objitem.txtMMobileNum2 : commonFactory.checkvals(objitem.txtMLandLineNum) ? objitem.txtMLandLineNum : null,
                        MotherEmail: objitem.txtMEmail,
                        MotherFatherFistname: objitem.txtMFatherFname,
                        MotherFatherLastname: objitem.txtMFatherLname,
                        FatherCustFamilyID: scope.parent.FatherCust_family_id,
                        MotherCustFamilyID: scope.parent.MotherCust_family_id,
                        FatherEducationDetails: objitem.txtFEducation,
                        MotherEducationDetails: objitem.txtMEducation,
                        FatherCountry: 1,
                        FatherState: objitem.ddlFState,
                        FatherDistric: objitem.ddlFDistric,
                        FatherCity: objitem.txtFNativePlace,
                        MotherCountry: 1,
                        MotherState: objitem.ddlMState,
                        MotherDistric: objitem.ddlMDistrict,
                        MotherCity: objitem.txtMNativePlace,
                        AreParentsInterCaste: objitem.rbtlParentIntercaste,
                        FatherfatherMobileCountryID: objitem.ddlFatherfatherMobileCountryCode,
                        FatherFatherMobileNumber: objitem.txtMobileFatherfather,
                        FatherFatherLandCountryID: commonFactory.checkvals(objitem.ddlfatherfatherAlternative) ? objitem.ddlfatherfatherAlternative : (commonFactory.checkvals(objitem.ddlFatherFatherLandLineCode) ? objitem.ddlFatherFatherLandLineCode : null),
                        FatherFatherLandAreaCode: commonFactory.checkvals(objitem.txtfatherfatherAlternative) ? null : (commonFactory.checkvals(objitem.txtGrandFatherArea) ? objitem.txtGrandFatherArea : null),
                        FatherFatherLandNumber: commonFactory.checkvals(objitem.txtfatherfatherAlternative) ? objitem.txtfatherfatherAlternative : (commonFactory.checkvals(objitem.txtGrandFatherLandLinenum) ? objitem.txtGrandFatherLandLinenum : null),
                        MotherfatherMobileCountryID: objitem.ddlMotherfatheMobileCountryCode,
                        MotherFatherMobileNumber: objitem.txtMotherfatheMobilenumber,
                        MotherFatherLandCountryID: commonFactory.checkvals(objitem.ddlmotherfatheralternative) ? objitem.ddlmotherfatheralternative : (commonFactory.checkvals(objitem.ddlMotherFatherLandLineCode) ? objitem.ddlMotherFatherLandLineCode : null),
                        MotherFatherLandAreaCode: commonFactory.checkvals(objitem.txtmotherfatheralternative) ? null : (commonFactory.checkvals(objitem.txtMotherFatherLandLineareacode) ? objitem.txtMotherFatherLandLineareacode : null),
                        MotherFatherLandNumber: commonFactory.checkvals(objitem.txtmotherfatheralternative) ? objitem.txtmotherfatheralternative : (commonFactory.checkvals(objitem.txtMotherFatherLandLinenum) ? objitem.txtMotherFatherLandLinenum : null),
                        FatherCaste: objitem.ddlMotherCaste,
                        MotherCaste: objitem.ddlFatherCaste
                    },
                    customerpersonaldetails: {
                        intCusID: custID,
                        EmpID: null,
                        Admin: null
                    }

                };

                console.log(JSON.stringify(scope.myData));
                scope.submitPromise = parentServices.submitParentData(scope.myData).then(function(response) {
                    console.log(response);
                    commonFactory.closepopup();
                    if (response.data === 1) {
                        scope.parentBindData(custID);
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

        scope.contactAddressSubmit = function(objitem) {

            if (isSubmit) {
                isSubmit = false;

                scope.myAddrData = {
                    GetDetails: {
                        CustID: custID,
                        HouseFlateNumber: objitem.txtHouse_flat,
                        Apartmentname: objitem.txtApartmentName,
                        Streetname: objitem.txtStreetName,
                        AreaName: objitem.txtAreaName,
                        Landmark: objitem.txtLandmark,
                        Country: objitem.ddlCountryContact,
                        STATE: objitem.ddlStateContact,
                        District: objitem.ddlDistricContact,
                        othercity: null,
                        city: objitem.txtCity,
                        ZipPin: objitem.txtZip_no,
                        Cust_Family_ID: scope.AdrrObj.Cust_Family_ID
                    },
                    customerpersonaldetails: {
                        intCusID: custID,
                        EmpID: null,
                        Admin: null
                    }

                };
                scope.submitPromise = parentServices.submitAddressData(scope.myAddrData).then(function(response) {
                    console.log(response);
                    commonFactory.closepopup();
                    if (response.data === 1) {

                        scope.parentBindData(custID);
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });

            }

        };

        scope.physicalAtrrSubmit = function(objitem) {

            if (isSubmit) {
                isSubmit = false;
                scope.myPhysicalData = {
                    GetDetails: {
                        CustID: custID,
                        BWKgs: objitem.txtBWKgs,
                        BWlbs: objitem.txtlbs,
                        BloodGroup: objitem.ddlBloodGroup,
                        HealthConditions: objitem.ddlHealthConditions,
                        HealthConditiondesc: objitem.txtHealthCondition,
                        DietID: objitem.rbtlDiet,
                        SmokeID: objitem.rbtlSmoke,
                        DrinkID: objitem.rbtlDrink,
                        BodyTypeID: objitem.ddlBodyType,
                    },
                    customerpersonaldetails: {
                        intCusID: custID,
                        EmpID: null,
                        Admin: null
                    }

                };

                scope.submitPromise = parentServices.submitPhysicalData(scope.myPhysicalData).then(function(response) {
                    console.log(response);
                    commonFactory.closepopup();
                    if (response.data === 1) {

                        scope.parentBindData(custID);
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });
            }

        };

        scope.AboutMyfamilySubmit = function(obj) {
            if (isSubmit) {
                isSubmit = false;

                scope.submitPromise = parentServices.submitAboutFamilyData({ CustID: custID, AboutYourself: obj.txtAboutUs, flag: 1 }).then(function(response) {
                    console.log(response);
                    scope.lblaboutMyfamily = obj.txtAboutUs;
                    commonFactory.closepopup();
                    if (response.data === '1') {

                        scope.AboutPageloadData(custID);
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });
            }
        };


        scope.housewiseChk = function(item) {
            if (item.chkbox === true) {
                item.txtMProfession = 'HouseWife';
            } else {
                item.txtMProfession = '';
            }
        };

        scope.roundVal = function(val) {
            var dec = 2;
            var result = Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec);
            return result;
        };
        scope.converttolbs = function(item) {
            var value = item.txtBWKgs;
            item.txtlbs = '';
            if (value.length > 0) {
                var lbs = value * 2.2;
                lbs = scope.roundVal(lbs);
                item.txtlbs = lbs;
                if (lbs.toString() == 'NaN') {
                    //jAlert("", 'Alert Dialog', x);
                    alert("invalid Number");
                    item.txtlbs = '';
                    item.txtBWKgs = '';
                }
            } else {
                item.txtBWKgs = '';
                item.txtlbs = '';
            }
        };

        scope.$on('datagetinParent', function(e, type) {
            scope.populateModel(type);
            scope.datagetInStatus = 1;
        });

    }
]);