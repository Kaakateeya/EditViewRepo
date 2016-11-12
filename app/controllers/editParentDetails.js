editviewapp.controller("parentCtrl", ['$uibModal', '$scope', 'parentServices', 'commonFactory', '$mdDialog', function(uibModal, scope, parentServices, commonFactory, mdDialog) {
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

    var custID = '91035';
    parentServices.getParentData(custID).then(function(response) {
        scope.parentArr = JSON.parse(response.data[0]);
        scope.addressArr = JSON.parse(response.data[1]);
        scope.physicalArr = JSON.parse(response.data[2]);

    });

    parentServices.getAboutFamilyData(custID).then(function(response) {
        console.log(response);
        scope.lblaboutMyfamily = response.data;
    });


    scope.changeBind = function(type, parentval) {
        debugger;
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

        switch (type) {
            case "parent":
                scope.parent.FatherCust_family_id = null;
                scope.parent.MotherCust_family_id = null;
                scope.parent = {};
                scope.mob = false;
                scope.land = false;
                scope.mail = false;
                if (item != undefined) {

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

                    if (item.FatherLandAreaCodeId != '' && item.FatherLandAreaCodeId != null) {
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

                    if (item.FatherFatherLandAreaCode != '' && item.FatherFatherLandAreaCode != null) {
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
                    //scope.parent.chkbox = item.;
                    scope.parent.txtMCompanyName = item.MothercompanyName;
                    scope.parent.txtMJobLocation = item.MotherJoblocation;

                    scope.parent.ddlMMobileCounCodeID = item.MotherMobileCountryCodeId;
                    scope.parent.txtMMobileNum = item.MotherMobilenumberID;

                    if (item.MotherLandAreaCodeId != '' && item.MotherLandAreaCodeId != null) {
                        scope.parent.ddlMLandLineCounCode = item.MotherLandCountryCodeId;
                        scope.parent.txtmAreaCode = item.MotherLandAreaCodeId;
                        scope.parent.txtMLandLineNum = item.MotherLandNumber;
                    } else {
                        scope.parent.ddlMMobileCounCodeID2 = item.MotherMobileCountryCodeId;
                        scope.parent.txtMMobileNum2 = item.MotherLandNumberID;

                    }

                    scope.parent.txtMEmail = item.MotherEmail;
                    scope.parent.txtMFatherFname = item.MotherFatherName;
                    scope.parent.txtMFatherLname = item.MotherFatherLastName;

                    scope.parent.ddlMotherfatheMobileCountryCode = item.MotherfatherMobileCountryID;
                    scope.parent.txtMotherfatheMobilenumber = item.MotherFatherMobileNumber;

                    if (item.MotherFatherLandAreaCode != '' && item.MotherFatherLandAreaCode != null) {
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
                    scope.parent.rbtlParentIntercaste = item.Intercaste;
                    scope.parent.ddlFatherCaste = item.FatherCasteID;
                    scope.parent.ddlMotherCaste = item.MotherCasteID;
                }
                commonFactory.open('parentModalContent.html', scope, uibModal);

                break;

            case "Address":
                scope.AdrrObj.Cust_Family_ID = null;
                scope.AdrrObj = {};
                if (item != undefined) {
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
                if (item != undefined) {
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
                if (item != undefined) {
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
        scope.myData = {
            GetDetails: {
                CustID: scope.parent.cust_id,
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
                LandlineCountry: objitem.ddlfathermobile2 != '0' && objitem.ddlfathermobile2 != null ? objitem.ddlfathermobile2 : (objitem.ddlLandLineCountry != '0' && objitem.ddlLandLineCountry != null ? objitem.ddlLandLineCountry : null),
                LandAreCode: objitem.txtfathermobile2 != '' && objitem.txtfathermobile2 != null ? null : (objitem.txtAreCode != '' && objitem.txtAreCode != null ? objitem.txtAreCode : null),
                landLineNumber: objitem.txtfathermobile2 != '' && objitem.txtfathermobile2 != null ? objitem.txtfathermobile2 : (objitem.txtLandNumber != '' && objitem.txtLandNumber != null ? objitem.txtLandNumber : null),
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
                MotherLandCountryID: objitem.ddlMMobileCounCodeID2 != '0' && objitem.ddlMMobileCounCodeID2 != null ? objitem.ddlMMobileCounCodeID2 : objitem.ddlMLandLineCounCode1 != '0' && objitem.ddlMLandLineCounCode1 != null ? objitem.ddlMLandLineCounCode : null,
                MotherLandAreaCode: (objitem.txtMMobileNum2) != '' && (objitem.txtMMobileNum2) != null ? null : (objitem.txtmAreaCode != '' && objitem.txtmAreaCode != null ? objitem.txtmAreaCode : null),
                MotherLandNumber: objitem.txtMMobileNum2 != '' && objitem.txtMMobileNum2 != null ? objitem.txtMMobileNum2 : objitem.txtMLandLineNum != '' && objitem.txtMLandLineNum != null ? objitem.txtMLandLineNum : null,
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
                FatherFatherLandCountryID: objitem.ddlfatherfatherAlternative != '0' && objitem.ddlfatherfatherAlternative != null ? objitem.ddlfatherfatherAlternative : (objitem.ddlFatherFatherLandLineCode != '0' && objitem.ddlFatherFatherLandLineCode != null ? objitem.ddlFatherFatherLandLineCode : null),
                FatherFatherLandAreaCode: objitem.txtfatherfatherAlternative != '' && objitem.txtfatherfatherAlternative != null ? null : (objitem.txtGrandFatherArea != '' && objitem.txtGrandFatherArea != null ? objitem.txtGrandFatherArea : null),
                FatherFatherLandNumber: objitem.txtfatherfatherAlternative != '' && objitem.txtfatherfatherAlternative != null ? objitem.txtfatherfatherAlternative : (objitem.txtGrandFatherLandLinenum != '' && objitem.txtGrandFatherLandLinenum != null ? objitem.txtGrandFatherLandLinenum : null),
                MotherfatherMobileCountryID: objitem.ddlMotherfatheMobileCountryCode,
                MotherFatherMobileNumber: objitem.txtMotherfatheMobilenumber,
                MotherFatherLandCountryID: objitem.ddlmotherfatheralternative != '0' && objitem.ddlmotherfatheralternative != null ? objitem.ddlmotherfatheralternative : (objitem.ddlMotherFatherLandLineCode != '0' && objitem.ddlMotherFatherLandLineCode != null ? objitem.ddlMotherFatherLandLineCode : null),
                MotherFatherLandAreaCode: objitem.txtmotherfatheralternative != '' && objitem.txtmotherfatheralternative != null ? null : (objitem.txtMotherFatherLandLineareacode != '' && objitem.txtMotherFatherLandLineareacode != null ? objitem.txtMotherFatherLandLineareacode : null),
                MotherFatherLandNumber: objitem.txtmotherfatheralternative != '' && objitem.txtmotherfatheralternative != null ? objitem.txtmotherfatheralternative : (objitem.txtMotherFatherLandLinenum != '' && objitem.txtMotherFatherLandLinenum != null ? objitem.txtMotherFatherLandLinenum : null),
                FatherCaste: objitem.ddlMotherCaste,
                MotherCaste: objitem.ddlFatherCaste
            },
            customerpersonaldetails: {
                intCusID: scope.parent.cust_id,
                EmpID: null,
                Admin: null
            }

        }

        debugger;
        parentServices.submitParentData(scope.myData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    };

    scope.contactAddressSubmit = function(objitem) {

        scope.myAddrData = {
            GetDetails: {
                CustID: scope.AdrrObj.Cust_ID,
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
                intCusID: scope.AdrrObj.Cust_ID,
                EmpID: null,
                Admin: null
            }

        }
        parentServices.submitAddressData(scope.myAddrData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    };

    scope.physicalAtrrSubmit = function(objitem) {

        scope.myPhysicalData = {
            GetDetails: {
                CustID: scope.physicalObj.Cust_ID,
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
                intCusID: scope.physicalObj.Cust_ID,
                EmpID: null,
                Admin: null
            }

        }

        parentServices.submitPhysicalData(scope.myPhysicalData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    };


    scope.AboutMyfamilySubmit = function(obj) {
        parentServices.submitAboutFamilyData({ CustID: custID, AboutYourself: obj.txtAboutUs, flag: 1 }).then(function(response) {
            console.log(response);
            scope.lblaboutMyfamily = obj.txtAboutUs;
            commonFactory.closepopup();
            if (response.data === '1') {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    }





}]);