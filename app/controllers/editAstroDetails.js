editviewapp.controller("astroCtrl", ['$uibModal', '$scope', 'astroServices', 'commonFactory', 'authSvc', 'fileUpload', function(uibModal, scope, astroServices, commonFactory, authSvc, fileUpload) {
    scope.starLanguage = 'starLanguage';
    scope.Country = 'Country';
    scope.ZodaicSign = 'ZodaicSign';
    scope.lagnam = 'lagnam';
    scope.paadam = 'paadam';
    scope.atroObj = [];
    scope.generateData = [];

    var logincustid = authSvc.getCustId();
    var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    //011046585

    var loginpaidstatus = authSvc.getpaidstatus();
    alert(custID);
    alert(loginpaidstatus);
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
    astroServices.getAstroData(custID).then(function(response) {
        scope.AstroArr = JSON.parse(response.data[0]);
        scope.generateData = JSON.parse(response.data[1]);
        console.log('test');
        console.log(scope.generateData);
    });

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
                alert('submitted Succesfully');
                astroServices.getAstroData(custID).then(function(response) {
                    scope.AstroArr = JSON.parse(response.data[0]);
                });
            } else {
                alert('Updation failed');
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
                });
            }
        });

    };

    scope.generateHoro = function() {


        // Int64 customerid = Int64CustID;
        // int strGender = 0;
        // string strName = string.Empty;
        // int intDay = 0;
        // int intMonth = 0;
        // int intYear = 0;
        // string strTime = string.Empty;
        // int strcityid = 0;
        // string cityName = string.Empty;
        // string longitude = string.Empty;
        // string latitude = string.Empty;
        // Kaakateeya_procEntities db = new Kaakateeya_procEntities();






        var strGender = (scope.generateData)[0].GenderID;
        var strName = (scope.generateData)[0].FirstName + " " + (scope.generateData)[0].LastName;

        var check = moment((scope.generateData)[0].DateOfBirth, 'YYYY/MM/DD');

        var month = check.format('M');
        var day = check.format('D');
        var year = check.format('YYYY');

        console.log(check);
        console.log(month);
        console.log(day);
        console.log(year);

        var intDay = day;
        var intMonth = month;
        var intYear = year;

        // var astrodata = from astro in db.Cust_Horoscope where astro.Cust_ID == customerid select new { astro.CityOfBirthID, astro.TimeOfBirth };
        // foreach(var j in astrodata) {
        //     DateTime myDate = Convert.ToDateTime((j.TimeOfBirth).ToString());
        //     strTime = myDate.ToString("HH:mm:ss");
        //     strcityid = Convert.ToInt32(j.CityOfBirthID);
        // }

        // if (strcityid != 0) {
        //     var astrocitydata = (from c in db.Mst_City_Type join a in db.Astrocitydatas on c.CityName equals a.place_name where c.CityID == strcityid select new { c.CityID, c.CityName, longitud = (a.longitude_deg + "." + a.longitude_min), latitud = (a.latitude_deg + "." + a.latitude_min) });

        //     foreach(var s in astrocitydata) {
        //         longitude = s.longitud;
        //         latitude = s.latitud;
        //         cityName = s.CityName;
        //     }

        //     if (string.IsNullOrEmpty(cityName) && ddlAstrocity.SelectedIndex > -1) {
        //         var astrocitydatanew = (from c in db.Astrocitydatas where c.place_id == ddlAstrocity.SelectedValue select new { c.place_id, c.place_name, longitud = (c.longitude_deg + "." + c.longitude_min), latitud = (c.latitude_deg + "." + c.latitude_min) });
        //         foreach(var s in astrocitydatanew) {
        //             longitude = s.longitud;
        //             latitude = s.latitud;
        //             cityName = s.place_name;
        //         }
        //     }


        // }
        // var olcity = (from data in db.Mst_City_Type where data.CityID == strcityid select new { data.CityName }).FirstOrDefault();

        // List < geneaterhoro > li = new List < geneaterhoro > ();
        // li.Add(new geneaterhoro { strGender = strGender, strName = strName, intDay = intDay, intMonth = intMonth, intYear = intYear, cityName = cityName, longitude = longitude, latitude = latitude, strTime = strTime, oldcityname = olcity.CityName });


    };


    scope.deleteHoroImage = function() {

        scope.uploadData = {
            Cust_ID: 91035,
            i_flag: 0
        };

        astroServices.uploadDeleteAstroData(scope.uploadData).then(function(response) {
            console.log(response);
        });
    };


}]);

// var data = {
//     "Cust_ID": 91022,
//     "Horopath": "../../Imagesnew/HoroscopeImages/91022_HaroscopeImage/91022_HaroscopeImage.jpg",
//     "ModifiedByEmpID": "",
//     "VisibleToID": "",
//     "Empid": "",
//     "IsActive": false,
//     "i_flag": 1
// };