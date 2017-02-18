editviewapp.controller("astroCtrl", ['$uibModal', '$scope', 'astroServices', 'commonFactory',
    'authSvc', 'fileUpload', '$http', 'route', 'sibblingServices',
    function(uibModal, scope, astroServices, commonFactory, authSvc, fileUpload, http, route, sibblingServices) {
        scope.starLanguage = 'starLanguage';
        scope.Country = 'Country';
        scope.ZodaicSign = 'ZodaicSign';
        scope.lagnam = 'lagnam';
        scope.paadam = 'paadam';
        scope.atroObj = [];
        scope.generateData = [];
        scope.ImageUrl = '';
        scope.iframeShow = false;
        var s3obj = {};

        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        var isSubmit = true;
        //
        // scope.blockeditpages = function(custID, Page) {
        //         sibblingServices.allowblockWebusers(custID).then(function(response) {
        //             console.log(response);
        //             var testArr = JSON.parse(response.data[0]);
        //             console.log(testArr);
        //             if (testArr[0].BranchID !== 342) {
        //                 scope.$broadcast("showAlertPopupccc", 'alert-danger', 'To edit <b style"=color: maroon"> ' + Page + '  </b>, please contact your relationship manager  ' + testArr[0].FirstName1 + testArr[0].LastName + "(" + testArr[0].OfficialContactNumber + ")", 4500);
        //                 return false;
        //             } else {
        //                 return true;
        //             }

        //         });
        //     }
        //
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
            isSubmit = true;
            if (item !== undefined) {
                sibblingServices.allowblockWebusers(custID).then(function(response) {

                    var testArr = JSON.parse(response.data[0]);
                    console.log(testArr);
                    if (testArr[0].BranchID !== 342) {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'To edit <b style"=color: maroon"> Astro Details </b>, please contact your relationship manager  ' + testArr[0].FirstName1 + testArr[0].LastName + "(" + testArr[0].OfficialContactNumber + ")", 4500);

                    } else {
                        // scope.stateArr = commonFactory.StateBind(item.CountryOfBirthID);
                        // scope.districtArr = commonFactory.districtBind(item.StateOfBirthID);
                        // scope.cityeArr = commonFactory.cityBind(item.DistrictOfBirthID);
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
                        commonFactory.open('astroContent.html', scope, uibModal);

                    }
                });
            } else {
                commonFactory.open('astroContent.html', scope, uibModal);
            }

        };

        scope.astropageload = function(custid) {

            astroServices.getAstroData(custid).then(function(response) {

                if (commonFactory.checkvals(response.data[0])) {
                    scope.AstroArr = JSON.parse(response.data[0]);
                    scope.generateData = JSON.parse(response.data[1]);

                    if (commonFactory.checkvals(scope.AstroArr[0] && commonFactory.checkvals(scope.AstroArr[0].Horoscopeimage))) {

                        if (commonFactory.checkvals(scope.AstroArr[0].Horoscopeimage) && (scope.AstroArr[0].Horoscopeimage).indexOf('Horo_no') === -1) {
                            var extension = "jpg";
                            if ((scope.AstroArr[0].Horoscopeimage).indexOf('.html') !== -1) {
                                extension = "html";
                            } else {
                                scope.iframeShow = false;
                                extension = "jpg";
                            }

                            scope.ImageUrl = editviewapp.GlobalImgPathforimage + "Images/HoroscopeImages/" + custid + "_HaroscopeImage/" + custid + "_HaroscopeImage." + extension;
                            if (extension === "html") {
                                scope.iframeShow = true;
                                $('#iframe').attr('src', scope.ImageUrl);
                            }
                        }
                    } else if (commonFactory.checkvals(scope.generateData[0].Horoscopeimage) && (scope.generateData[0].Horoscopeimage).indexOf('Horo_no') === -1) {
                        if (commonFactory.checkvals(scope.generateData[0].Horoscopeimage) && (scope.generateData[0].Horoscopeimage).indexOf('Horo_no') === -1) {
                            var extensn = "jpg";
                            if ((scope.generateData[0].Horoscopeimage).indexOf('.html') !== -1) {
                                extensn = "html";
                            } else {
                                scope.iframeShow = false;
                                extensn = "jpg";
                            }
                            scope.ImageUrl = editviewapp.GlobalImgPathforimage + "Images/HoroscopeImages/" + custid + "_HaroscopeImage/" + custid + "_HaroscopeImage." + extensn;
                            if (extensn === "html") {
                                scope.iframeShow = true;
                                $('#iframe').attr('src', scope.ImageUrl);
                            }
                        }
                    }



                }

            });

        };
        scope.astropageload(custID);


        scope.astroSubmit = function(obj) {
            if (isSubmit) {
                isSubmit = false;
                $('#ssss').prop('disabled', true);
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

                scope.submitPromise = astroServices.submitAstroData(scope.astroData).then(function(response) {
                    commonFactory.closepopup();
                    if (response.data === 1) {
                        if (scope.datagetInStatus === 1) {
                            sessionStorage.removeItem('missingStatus');
                            route.go('mobileverf', {});
                        }
                        scope.astropageload(custID);
                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 1500);

                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 1500);
                    }
                });
            }
        };

        scope.cancel = function() {
            commonFactory.closepopup();
        };

        scope.uploadGenerateHoro = function(val) {

            if (val === '0') {
                commonFactory.open('AddHoroPopup.html', scope, uibModal, 'sm');
            } else {
                if (scope.AstroArr.length > 0) {
                    scope.generateHoro();
                } else {
                    // commonFactory.open('astroContent.html', scope, uibModal);
                    scope.populateAstro();
                }

            }
        };

        scope.upload = function(obj) {


            var extension = (obj.myFile.name !== '' && obj.myFile.name !== undefined && obj.myFile.name !== null) ? (obj.myFile.name.split('.'))[1] : null;
            var gifFormat = "gif, jpeg, png,jpg";

            if (typeof(obj.myFile.name) != "undefined") {

                var size = parseFloat(obj.myFile.size / 1024).toFixed(2);
                if (extension !== null && gifFormat.indexOf(angular.lowercase(extension)) === -1) {
                    alert('Your uploaded image contains an unapproved file formats.');
                } else if (size > 4 * 1024) {
                    alert('Sorry,Upload Photo Size Must Be Less than 1 mb');
                } else {
                    // var extension = ((obj.myFile.name).split('.'))[1];
                    var keyname = "Images/HoroscopeImages/" + custID + "_HaroscopeImage/" + custID + "_HaroscopeImage." + extension;

                    fileUpload.uploadFileToUrl(obj.myFile, '/photoUplad', keyname).then(function(res) {

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



                            astroServices.uploadDeleteAstroData(scope.uploadData).then(function(response) {

                                commonFactory.closepopup();

                                scope.astropageload(custID);

                                scope.ImageUrl = editviewapp.GlobalImgPathforimage + "Images/HoroscopeImages/" + custID + "_HaroscopeImage/" + custID + "_HaroscopeImage." + extension;
                            });
                        }
                    });

                }
            } else {
                alert("This browser does not support HTML5.");
            }
        };

        scope.generateHoro = function(astrocity) {
            var check = moment((scope.generateData)[0].DateOfBirth, 'YYYY/MM/DD');
            var month = check.format('M');
            var day = check.format('D');
            var year = check.format('YYYY');

            var inputobj = { customerid: custID, EmpIDQueryString: "2", intDay: day, intMonth: month, intYear: year, CityID: commonFactory.checkvals(astrocity) ? astrocity : "" };

            astroServices.generateHoroscope(inputobj).then(function(response) {
                console.log(response);
                if (commonFactory.checkvals(response.data.AstroGeneration)) {


                    s3obj = { Path: response.data.Path, KeyName: response.data.KeyName };
                    window.open('' + response.data.AstroGeneration + '', '_blank');
                    commonFactory.closepopup();
                    commonFactory.open('RefreshPopup.html', scope, uibModal);
                } else {
                    scope.AstrocityArr = commonFactory.AstroCity(scope.AstroArr[0].CountryOfBirth, scope.AstroArr[0].StateOfBirth);
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
            var keynameq = "Images/HoroscopeImages/" + custID + "_HaroscopeImage/" + custID + "_HaroscopeImage." + extension;
            http.post('/photoDelete', JSON.stringify({ keyname: keynameq })).then(function(data) {

            });

            scope.uploadData = {
                Cust_ID: custID,
                i_flag: 0
            };

            astroServices.uploadDeleteAstroData(scope.uploadData).then(function(response) {

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

            if (scope.ImageUrl !== null && scope.ImageUrl !== '' && scope.ImageUrl !== undefined) {
                if (scope.ImageUrl.indexOf('.html') !== -1) {
                    window.open('' + scope.ImageUrl + '', '_blank');
                } else {
                    commonFactory.open('AstroimagePopup.html', scope, uibModal);
                }
            }
        };

        scope.generatedhoroS3Upload = function() {
            console.log('s3obj');
            console.log(s3obj);
            astroServices.GenerateHoroS3(s3obj).then(function(response) {
                console.log(response);
            });
            scope.astropageload(custID);
            commonFactory.closepopup();
        };

    }
]);