editviewapp.controller("astroCtrl", ['$uibModal', '$scope', 'astroServices', 'commonFactory', function(uibModal, scope, astroServices, commonFactory) {
    scope.starLanguage = 'starLanguage';
    scope.Country = 'Country';
    scope.ZodaicSign = 'ZodaicSign';
    scope.lagnam = 'lagnam';
    scope.paadam = 'paadam';
    scope.atroObj = [];

    var custID = '104610';



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
    }


    scope.populateAstro = function(item) {


        scope.hrsbindArr = commonFactory.numberBindWithZeros('Hours', 0, 23);
        scope.minbindArr = commonFactory.numberBindWithZeros('Minutes', 0, 59);
        scope.secbindArr = commonFactory.numberBindWithZeros('Seconds', 0, 59);

        if (item != undefined) {
            scope.stateArr = commonFactory.StateBind(item.CountryOfBirthID);
            scope.districtArr = commonFactory.districtBind(item.StateOfBirthID);
            scope.cityeArr = commonFactory.cityBind(item.DistrictOfBirthID);
            scope.starArr = commonFactory.starBind(item.StarLanguageID);

            if (item.TimeOfBirth != undefined) {
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

            // scope.atroObj.ddllongitude = item.;
            // scope.atroObj.ddllatitude = item.;
            //scope.atroObj.Chkgenertehoro = item.;

        }

        commonFactory.open('astroContent.html', scope, uibModal);
    }
    astroServices.getAstroData(custID).then(function(response) {
        scope.AstroArr = JSON.parse(response.data[0]);
        console.log(scope.AstroArr);
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
        }

        astroServices.submitAstroData(scope.astroData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    }

    scope.cancel = function() {
        commonFactory.closepopup();
    };
}]);