editviewapp.controller('contactctrl', ['$scope', 'authSvc', 'ContactDetailsServices', '$uibModal', 'commonFactory',
    function(scope, authSvc, ContactDetailsServices, uibModal, commonFactory) {

        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.candidateContactArr = [];
        scope.candidateAddrArr = [];
        scope.parentContactArr = [];
        scope.SiiblingContactArr = [];
        scope.relativeContactArr = [];
        scope.referenceContactArr = [];

        scope.candidateobj = {};
        scope.sibobj = {};
        scope.parentobj = {};
        scope.relativeobj = {};
        scope.referenceobj = {};
        scope.canAddrobj = {};
        scope.sibFlag = '';



        scope.pageload = function() {

            ContactDetailsServices.getContactData(custID).then(function(response) {
                console.log(response);
                if (response.data.length > 0) {
                    scope.candidateContactArr = response.data[0].length > 0 ? JSON.parse(response.data[0]) : [];
                    scope.candidateAddrArr = response.data[1].length > 0 ? JSON.parse(response.data[1]) : [];
                    scope.parentContactArr = response.data[2].length > 0 ? JSON.parse(response.data[2]) : [];
                    scope.SiiblingContactArr = response.data[3].length > 0 ? JSON.parse(response.data[3]) : [];
                    scope.relativeContactArr = response.data[4].length > 0 ? JSON.parse(response.data[4]) : [];
                    scope.referenceContactArr = response.data[5].length > 0 ? JSON.parse(response.data[5]) : [];

                    console.log(scope.candidateContactArr);
                    console.log(scope.candidateAddrArr);
                    console.log(scope.parentContactArr);
                    console.log(scope.SiiblingContactArr);
                    console.log(scope.relativeContactArr);
                    console.log(scope.referenceContactArr);

                }

            });

        };
        scope.pageload();

        scope.commonContactSubmit = function(Icustfamiliyid, IName, IMoblieCountryCode, IMobileNumber, IMoblieCountryCode2, IMobileNumber2, ILandCountryCode,
            ILandAreaCode, ILandNumber, IEmail, ISibblingFlag) {
            scope.Mobj = {
                familyID: Icustfamiliyid,
                Name: IName,
                MoblieCountryCode: IMoblieCountryCode,
                MobileNumber: IMobileNumber,
                LandCountryCode: commonFactory.checkvals(IMoblieCountryCode2) ? IMoblieCountryCode2 : commonFactory.checkvals(ILandCountryCode) ? ILandCountryCode : null,
                LandAreaCode: commonFactory.checkvals(IMobileNumber2) ? null : (commonFactory.checkvals(ILandAreaCode) ? ILandAreaCode : null),
                LandNumber: commonFactory.checkvals(IMobileNumber2) ? IMobileNumber2 : commonFactory.checkvals(ILandNumber) ? ILandNumber : null,
                Email: IEmail,
                intCusID: custID,
                EmpID: '2',
                Admin: 1,
                SibblingFlag: ISibblingFlag

            };
            debugger;

            ContactDetailsServices.submitContactData(scope.Mobj).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                scope.pageload();
            });

        };

        scope.CandidateAddressSubmit = function(obj) {
            scope.Mobj = {

                CandidateAddressID: scope.canAddrobj.Custfamilyid,
                HouseFlatNum: obj.txtCandidateHouse_flat,
                Apartmentname: obj.txtCandidateApartmentName,
                Streetname: obj.txtCandidateStreetName,
                AreaName: obj.txtCandidateAreaName,
                Landmark: obj.txtCandidateLandmark,
                Country: obj.ddlCandidateCountryContact,
                State: obj.ddlCandidateStateContact,
                District: obj.ddlCandidateDistricContact,
                City: obj.txtCandidateCity,
                ZipPin: obj.txtCandidateZip_no,
                addresstype: scope.canAddrobj.Addresstype,
                intCusID: custID,
                EmpID: '2',
                Admin: null

            };
            debugger;
            ContactDetailsServices.submitContactData(scope.Mobj).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                scope.pageload();
            });


        };

        scope.showContactPopup = function(type, item, sibFlag) {

            switch (type) {

                case 'Candidate':
                    scope.candidateobj = {};
                    if (item !== undefined) {
                        scope.candidateobj.emaILcust_family_id = item.emaILcust_family_id;
                        debugger;


                        scope.candidateobj.ddlcandidateMobileCountryID = commonFactory.checkvals(item.Candidatemobilecountrycode) ? parseInt(item.Candidatemobilecountrycode) : 0;
                        scope.candidateobj.txtcandidatemobilenumber = item.CandidateMobileNumber;
                        if (commonFactory.checkvals(item.Candidatelandareacode)) {

                            scope.candidateobj.ddlcandidateLandLineCountry = commonFactory.checkvals(item.CandidateLandlinecountrycode) ? parseInt(item.CandidateLandlinecountrycode) : 0;
                            scope.candidateobj.txtcandidateAreCode = item.Candidatelandareacode;
                            scope.candidateobj.txttxtcandidateAreCodeLandNumber = item.CandidateLandlinenumber;
                        } else {
                            scope.candidateobj.ddlcandidateMobileCountryID2 = commonFactory.checkvals(item.CandidateLandlinecountrycode) ? parseInt(item.CandidateLandlinecountrycode) : 0;
                            scope.candidateobj.txtFBMobileNumber2 = item.CandidateLandlinenumber;
                        }
                        scope.candidateobj.txtcandidateEmails = item.CandidateEmail;

                    }
                    commonFactory.open('candidateContactContent.html', scope, uibModal);

                    break;

                case 'sibbling':
                    scope.sibFlag = sibFlag;
                    scope.sibobj = {};

                    scope.sibobj.SiblingemaILcust_family_id = item.SiblingemaILcust_family_id;

                    if (sibFlag === 'SelfFlag') {

                        scope.sibobj.ddlSiblingmob = commonFactory.checkvals(item.Siblingmobilecountrycode) ? parseInt(item.Siblingmobilecountrycode) : 0;
                        scope.sibobj.txtSiblingmob = item.Siblingmobilenumber;

                        if (commonFactory.checkvals(item.Siblinglandareacode)) {

                            scope.sibobj.ddlsiblinglandcode = commonFactory.checkvals(item.SiblingLandlinecountrycode) ? parseInt(item.SiblingLandlinecountrycode) : 0;
                            scope.sibobj.txtsiblinglandarea = item.Siblinglandareacode;
                            scope.sibobj.txtsiblinglandnumber = item.SiblingLandlinenumber;
                        } else {
                            scope.sibobj.ddlsiblingmob2 = commonFactory.checkvals(item.CandidateLandlinecountrycode) ? parseInt(item.CandidateLandlinecountrycode) : 0;
                            scope.sibobj.txtsiblingmob2 = item.SiblingLandlinenumber;
                        }

                        scope.sibobj.txtsiblinglemail = item.SiblingEmail;
                        scope.sibobj.txtsiblingname = item.SiblingName;


                    } else {

                        scope.sibobj.ddlSiblingmob = commonFactory.checkvals(item.SiblingSPousemobilecode) ? parseInt(item.SiblingSPousemobilecode) : 0;
                        scope.sibobj.txtSiblingmob = item.SiblingSpousemobilenumber;

                        if (commonFactory.checkvals(item.SiblingSPouseLAndareaCode)) {

                            scope.sibobj.ddlsiblinglandcode = commonFactory.checkvals(item.SiblingSPouseLandcountryCode) ? parseInt(item.SiblingSPouseLandcountryCode) : 0;
                            scope.sibobj.txtsiblinglandarea = item.SiblingSPouseLAndareaCode;
                            scope.sibobj.txtsiblinglandnumber = item.SiblingSPouseLandnumber;
                        } else {
                            scope.sibobj.ddlsiblingmob2 = commonFactory.checkvals(item.SiblingSPouseLandcountryCode) ? parseInt(item.SiblingSPouseLandcountryCode) : 0;
                            scope.sibobj.txtsiblingmob2 = item.SiblingSPouseLandnumber;
                        }

                        scope.sibobj.txtsiblinglemail = item.SiblingSpouseEmail;
                        scope.sibobj.txtsiblingname = item.SiblingSpouseNAme;

                    }


                    commonFactory.open('SibContactContent.html', scope, uibModal);

                    break;

                case 'parent':
                    scope.parentobj = {};
                    scope.parentobj.MotheremaILcust_family_id = item.MotheremaILcust_family_id;

                    scope.parentobj.ddlcandidatefathermobcode = commonFactory.checkvals(item.mobilecountrycode) ? parseInt(item.mobilecountrycode) : 0;
                    scope.parentobj.txtcandidatefathermob = item.mobilenumber;

                    if (commonFactory.checkvals(item.landareacode)) {
                        scope.parentobj.ddlcandidatefathelandcode = commonFactory.checkvals(item.Landlinecountrycode) ? parseInt(item.Landlinecountrycode) : 0;
                        scope.parentobj.txtcandidatefathelandareacode = item.landareacode;
                        scope.parentobj.txtcandidatefathelandnumber = item.Landlinenumber;
                    } else {
                        scope.parentobj.ddlcandidatefathermob2code = commonFactory.checkvals(item.Landlinecountrycode) ? parseInt(item.Landlinecountrycode) : 0;
                        scope.parentobj.txtcandidatefathermob2 = item.Landlinenumber;
                    }

                    scope.parentobj.txtcandidatefatheremail = item.Email;
                    scope.parentobj.txtFathername = item.NAME;

                    commonFactory.open('parentContactContent.html', scope, uibModal);

                    break;

                case 'relative':
                    scope.relativeobj = {};

                    scope.relativeobj.emaILcust_family_id = item.emaILcust_family_id;


                    scope.relativeobj.ddlRelativemob = commonFactory.checkvals(item.mobilecountrycode) ? parseInt(item.mobilecountrycode) : 0;
                    scope.relativeobj.txtRelativemob = item.mobilenumber;

                    if (commonFactory.checkvals(item.landareacode)) {
                        scope.relativeobj.ddllandRelativecode = commonFactory.checkvals(item.Landlinecountrycode) ? parseInt(item.Landlinecountrycode) : 0;
                        scope.relativeobj.txtRelativeareacode = item.landareacode;
                        scope.relativeobj.txtlandnumberRelative = item.Landlinenumber;
                    } else {
                        scope.relativeobj.ddlRelativemob2 = commonFactory.checkvals(item.Landlinecountrycode) ? parseInt(item.Landlinecountrycode) : 0;
                        scope.relativeobj.txtRelativemob2 = item.Landlinenumber;
                    }

                    scope.relativeobj.txtRelativeemail = item.Email;
                    scope.relativeobj.txtrelativename = item.NAME;


                    commonFactory.open('relativeContactContent.html', scope, uibModal);

                    break;

                case 'reference':
                    scope.referenceobj = {};
                    scope.referenceobj.emaILcust_family_id = item.emaILcust_family_id;



                    scope.referenceobj.ddlreferencemobile = commonFactory.checkvals(item.Candidatemobilecountrycode) ? parseInt(item.Candidatemobilecountrycode) : 0;
                    scope.referenceobj.txtreferencemobile = item.CandidateMobileNumber;

                    if (commonFactory.checkvals(item.Candidatelandareacode)) {
                        scope.referenceobj.ddlreferencelandnumber = commonFactory.checkvals(item.CandidateLandlinecountrycode) ? parseInt(item.CandidateLandlinecountrycode) : 0;
                        scope.referenceobj.txtreferenceAreCode = item.Candidatelandareacode;
                        scope.referenceobj.txtreferencelandnumber = item.CandidateLandlinenumber;
                    } else {
                        scope.referenceobj.ddlreferencemobile2 = commonFactory.checkvals(item.CandidateLandlinecountrycode) ? parseInt(item.CandidateLandlinecountrycode) : 0;
                        scope.referenceobj.txtreferencemobile2 = item.CandidateLandlinenumber;
                    }

                    scope.referenceobj.txtreferenceemail = item.CandidateEmail;
                    scope.referenceobj.txtreferencename = item.CandidateName;





                    commonFactory.open('referenceContactContent.html', scope, uibModal);

                    break;

                case 'candidateAddr':
                    scope.canAddrobj = {};
                    scope.canAddrobj.Custfamilyid = item.Custfamilyid;
                    scope.canAddrobj.Addresstype = item.Addresstype;
                    scope.canAddrobj.txtCandidateHouse_flat = item.Flatno;
                    scope.canAddrobj.txtCandidateApartmentName = item.Apartmentno;
                    scope.canAddrobj.txtCandidateStreetName = item.Streetname;
                    scope.canAddrobj.txtCandidateAreaName = item.Areaname;
                    scope.canAddrobj.txtCandidateLandmark = item.Landmark;
                    scope.canAddrobj.ddlCandidateCountryContact = item.Country;
                    scope.canAddrobj.ddlCandidateStateContact = item.STATE;
                    scope.canAddrobj.ddlCandidateDistricContact = item.District;
                    scope.canAddrobj.txtCandidateCity = item.CityName;
                    scope.canAddrobj.txtCandidateZip_no = item.ZipCode;

                    commonFactory.open('candidateAddrContent.html', scope, uibModal);

                    break;

            }



        };


        scope.cancel = function() {
            commonFactory.closepopup();
        };




    }
]);