editviewapp.controller("astroCtrl", ['$uibModal', '$scope', 'astroServices', 'commonFactory', 'authSvc', 'fileUpload', '$http', 'route',
    function(uibModal, scope, astroServices, commonFactory, authSvc, fileUpload, http, route) {
        scope.starLanguage = 'starLanguage';
        scope.Country = 'Country';
        scope.ZodaicSign = 'ZodaicSign';
        scope.lagnam = 'lagnam';
        scope.paadam = 'paadam';
        scope.atroObj = [];
        scope.generateData = [];
        scope.ImageUrl = '';

        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        //011046585

        scope.loginpaidstatus = authSvc.getpaidstatus();

        scope.changeBind = function(type, parentval) {

            switch (type) {
                case 'Country':
                    scope.stateArr = commonFactory.StateBind(parentval);
                    break;

                case 'State':
                    scope.districtArr = commonFactory.districtBind(parentval);
                    break;

                case 'District':

                    scope.cityeArr = commonFactory.cityBind(parentval);
                    break;
                case 'star':

                    scope.starArr = commonFactory.starBind(parentval);
                    break;
            }
        };

        scope.populateAstro = function(item) {


            scope.hrsbindArr = commonFactory.numberBindWithZeros('Hours', 0, 23);
            scope.minbindArr = commonFactory.numberBindWithZeros('Minutes', 0, 59);
            scope.secbindArr = commonFactory.numberBindWithZeros('Seconds', 0, 59);

            if (item !== undefined) {
                scope.stateArr = commonFactory.StateBind(item.CountryOfBirthID);
                scope.districtArr = commonFactory.districtBind(item.StateOfBirthID);
                scope.cityeArr = commonFactory.cityBind(item.DistrictOfBirthID);
                scope.starArr = commonFactory.starBind(item.StarLanguageID);

                if (item.TimeOfBirth !== undefined) {
                    scope.strdot = ((item.TimeOfBirth).split(' '))[0].split(':');

                    scope.atroObj.ddlFromHours = parseInt(scope.strdot[0]);
                    scope.atroObj.ddlFromMinutes = parseInt(scope.strdot[1]);
                    scope.atroObj.ddlFromSeconds = parseInt(scope.strdot[2]);
                }
                scope.atroObj.ddlCountryOfBirthID = item.CountryOfBirthID;
                scope.atroObj.ddlStateOfBirthID = item.StateOfBirthID;
                scope.atroObj.ddlDistrictOfBirthID = item.DistrictOfBirthID;
                scope.atroObj.ddlcity = item.CityOfBirthID;
                scope.atroObj.ddlstarlanguage = item.StarLanguageID;
                scope.atroObj.ddlstar = item.StarID;
                scope.atroObj.ddlpaadam = item.PaadamID;
                scope.atroObj.ddlLagnam = item.LagnamID;
                scope.atroObj.ddlRaasiMoonsign = item.RaasiID;
                scope.atroObj.txtGothramGotra = item.Gothram;
                scope.atroObj.txtMaternalgothram = item.MeternalGothramID;
                scope.atroObj.rdlkujaDosham = item.manglikID;

            }

            commonFactory.open('astroContent.html', scope, uibModal);
        };

        scope.astropageload = function(custid) {

            astroServices.getAstroData(custid).then(function(response) {

                if (commonFactory.checkvals(response.data[0])) {
                    scope.AstroArr = JSON.parse(response.data[0]);
                    scope.generateData = JSON.parse(response.data[1]);
                    if (commonFactory.checkvals(scope.AstroArr[0].Horoscopeimage) && (scope.AstroArr[0].Horoscopeimage).indexOf('Horo_no') === -1) {
                        var extension = "jpg";

                        if ((scope.AstroArr[0].Horoscopeimage).indexOf('.html') !== -1) {
                            extension = "html";
                        } else {
                            extension = "jpg";
                        }
                        scope.ImageUrl = editviewapp.GlobalImgPathforimage + "Imagesnew/HoroscopeImages/" + custid + "_HaroscopeImage/" + custid + "_HaroscopeImage." + extension;
                    }
                }

            });

        };
        scope.astropageload(custID);


        scope.astroSubmit = function(obj) {

            var strFromTimeOfBirth = obj.ddlFromHours + ":" + obj.ddlFromMinutes + ":" + obj.ddlFromSeconds;

            scope.astroData = {
                GetDetails: {
                    CustID: custID,
                    TimeofBirth: strFromTimeOfBirth,
                    CountryOfBirthID: obj.ddlCountryOfBirthID,
                    StateOfBirthID: obj.ddlStateOfBirthID,
                    DistrictOfBirthID: obj.ddlDistrictOfBirthID,
                    CityOfBirthID: obj.ddlcity,
                    Starlanguage: obj.ddlstarlanguage,
                    Star: obj.ddlstar,
                    Paadam: obj.ddlpaadam,
                    Lagnam: obj.ddlLagnam,
                    RasiMoonsign: obj.ddlRaasiMoonsign,
                    GothramGotra: obj.txtGothramGotra,
                    Maternalgothram: obj.txtMaternalgothram,
                    ManglikKujadosham: obj.rdlkujaDosham,
                    Pblongitude: obj.PBlongitude,
                    pblatitude: obj.PBlatitude,
                    TimeZone: null
                },
                customerpersonaldetails: {
                    intCusID: custID,
                    EmpID: null,
                    Admin: null
                }
            };

            astroServices.submitAstroData(scope.astroData).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                if (response.data === 1) {
                    if (scope.datagetInStatus === 1) {

                        route.go('mobileverf', {});
                    }
                    scope.astropageload(custID);
                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);

                } else {
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                }
            });
        };

        scope.cancel = function() {
            commonFactory.closepopup();
        };

        scope.uploadGenerateHoro = function(val) {

            if (val === '0') {
                commonFactory.open('AddHoroPopup.html', scope, uibModal, 'sm');
            } else {
                scope.generateHoro();
            }
        };

        scope.upload = function(obj) {
            console.log(obj.myFile);
            var extension = ((obj.myFile.name).split('.'))[1];
            var keyname = "Imagesnew/HoroscopeImages/" + custID + "_HaroscopeImage/" + custID + "_HaroscopeImage." + extension;

            fileUpload.uploadFileToUrl(obj.myFile, '/photoUplad', keyname).then(function(res) {
                console.log(res.status);
                if (res.status == 200) {
                    commonFactory.closepopup();
                    scope.uploadData = {
                        Cust_ID: custID,
                        Horopath: '../../' + keyname,
                        ModifiedByEmpID: '',
                        VisibleToID: keyname.indexOf('html') !== -1 ? 1 : '',
                        Empid: '',
                        IsActive: keyname.indexOf('html') !== -1 ? 1 : 0,
                        i_flag: 1
                    };

                    console.log(JSON.stringify(scope.uploadData));
                    astroServices.uploadDeleteAstroData(scope.uploadData).then(function(response) {
                        console.log(response);
                        scope.astropageload(custID);
                        commonFactory.closepopup();
                    });
                }
            });

        };

        scope.generateHoro = function(astrocity) {
            var check = moment((scope.generateData)[0].DateOfBirth, 'YYYY/MM/DD');
            var month = check.format('M');
            var day = check.format('D');
            var year = check.format('YYYY');

            var inputobj = { customerid: custID, EmpIDQueryString: "2", intDay: day, intMonth: month, intYear: year, CityID: commonFactory.checkvals(astrocity) ? astrocity : "" };
            console.log(JSON.stringify(inputobj));
            astroServices.generateHoroscope(inputobj).then(function(response) {
                console.log(response.data);
                if (commonFactory.checkvals(response.data)) {
                    commonFactory.closepopup();
                    window.open('' + response.data + '', '_blank');
                } else {
                    scope.AstrocityArr = commonFactory.AstroCity('', '');
                    commonFactory.open('AstroCityPopup.html', scope, uibModal);
                }
            });
        };

        scope.deleteHoroImage = function() {

            var extension = "jpg";

            // if ((scope.AstroArr[0].Horoscopeimage).indexOf('.html')) {
            //     extension = "html";
            // } else {
            //     extension = "jpg";
            // }
            var keynameq = "Imagesnew/HoroscopeImages/" + custID + "_HaroscopeImage/" + custID + "_HaroscopeImage." + extension;
            http.post('/photoDelete', JSON.stringify({ keyname: keynameq })).then(function(data) {

            });

            scope.uploadData = {
                Cust_ID: custID,
                i_flag: 0
            };

            astroServices.uploadDeleteAstroData(scope.uploadData).then(function(response) {
                console.log(response);
                if (response.data === 1 || response.data === '1') {
                    scope.astropageload(custID);
                    commonFactory.closepopup();
                    scope.ImageUrl = '';
                    scope.atroObj.rdlUploadGenerate = '';
                }
            });
        };
        scope.shoedeletePopup = function() {
            commonFactory.open('deletehoroPopup.html', scope, uibModal, 'sm');
        };
        scope.$on('datagetinAstro', function(e) {
            scope.populateAstro();
            scope.datagetInStatus = 1;
        });

        scope.AstroCityChange = function(val) {
            scope.generateHoro(val);
        };

        scope.vewHoro = function() {
            commonFactory.open('AstroimagePopup.html', scope, uibModal);
        };

    }
]);