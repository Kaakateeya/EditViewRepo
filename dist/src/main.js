'use strict';
editviewapp.constant('arrayConstants', {
    'MaritalStatus': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Unmarried", "title": "Unmarried", "value": 43 },
        { "label": "Divorce", "title": "Divorce", "value": 44 },
        { "label": "Widow/Widower", "title": "Widow/Widower", "value": 45 },
        { "label": "Separated", "title": "Separated", "value": 46 }
    ],
    "height": [
        { "label": "--Select--", "title": "--select--", "value": "" },
        { "label": "4'0 in - 122 cms", "title": "4'0 in - 122 cms", "value": 1 }, { "label": "4'1 in - 124 cms", "title": "4'1 in - 124 cms", "value": 2 },
        { "label": "4'2 in - 127 cms", "title": "4'2 in - 127 cms", "value": 3 },
        { "label": "4'3 in - 130 cms", "title": "4'3 in - 130 cms", "value": 4 }, { "label": "4'4 in - 132 cms", "title": "4'4 in - 132 cms", "value": 5 },
        { "label": "4'5 in - 135 cms", "title": "4'5 in - 135 cms", "value": 6 }, { "label": "4'6 in - 137 cms", "title": "4'6 in - 137 cms", "value": 7 },
        { "label": "4'7 in - 140 cms", "title": "4'7 in - 140 cms", "value": 8 },
        { "label": "4'8 in - 142 cms", "title": "4'8 in - 142 cms", "value": 9 },
        { "label": "4'9 in - 144 cms", "title": "4'9 in - 144 cms", "value": 10 }, { "label": "4'10 in - 147 cms", "title": "4'10 in - 147 cms", "value": 11 },
        { "label": "4'11 in - 150 cms", "title": "4'11 in - 150 cms", "value": 12 }, { "label": "5'0 in - 152 cms", "title": "5'0 in - 152 cms", "value": 13 },
        { "label": "5'1 in - 155 cms", "title": "5'1 in - 155 cms", "value": 14 }, { "label": "5'2 in - 157 cms", "title": "5'2 in - 157 cms", "value": 15 },
        { "label": "5'3 in - 160 cms", "title": "5'3 in - 160 cms", "value": 16 }, { "label": "5'4 in - 162 cms", "title": "5'4 in - 162 cms", "value": 17 },
        { "label": "5'5 in - 165 cms", "title": "5'5 in - 165 cms", "value": 18 }, { "label": "5'6 in - 167 cms", "title": "5'6 in - 167 cms", "value": 19 },
        { "label": "5'7 in - 170 cms", "title": "5'7 in - 170 cms", "value": 20 }, { "label": "5'8 in - 172 cms", "title": "5'8 in - 172 cms", "value": 21 },
        { "label": "5'9 in - 175 cms", "title": "5'9 in - 175 cms", "value": 22 }, { "label": "5'10 in - 177 cms", "title": "5'10 in - 177 cms", "value": 23 },
        { "label": "5'11 in - 180 cms", "title": "5'11 in - 180 cms", "value": 24 }, { "label": "6'0 in - 183 cms", "title": "6'0 in - 183 cms", "value": 25 },
        { "label": "6'1 in - 185 cms", "title": "6'1 in - 185 cms", "value": 26 }, { "label": "6'2 in - 188 cms", "title": "6'2 in - 188 cms", "value": 27 },
        { "label": "6'3 in - 190 cms", "title": "6'3 in - 190 cms", "value": 28 }, { "label": "6'4 in - 193 cms", "title": "6'4 in - 193 cms", "value": 29 },
        { "label": "6'5 in - 195 cms", "title": "6'5 in - 195 cms", "value": 30 }, { "label": "6'6 in - 198 cms", "title": "6'6 in - 198 cms", "value": 31 },
        { "label": "6'7 in - 200 cms", "title": "6'7 in - 200 cms", "value": 32 }, { "label": "6'8 in - 203 cms", "title": "6'8 in - 203 cms", "value": 33 },
        { "label": "6'9 in - 205 cms", "title": "6'9 in - 205 cms", "value": 34 }, { "label": "6'10 in - 208 cms", "title": "6'10 in - 208 cms", "value": 35 },
        { "label": "6'11 in - 210 cms", "title": "6'11 in - 210 cms", "value": 36 }, { "label": "7'0 in - 213 cms\t", "title": "7'0 in - 213 cms\t", "value": 37 },
        { "label": "7'1 in - 215 cms\t", "title": "7'1 in - 215 cms\t", "value": 38 }, { "label": "7'2 in - 218 cms\t", "title": "7'2 in - 218 cms\t", "value": 39 }
    ],
    "Religion": [
        { "label": "--Select--", "title": "--select--", "value": "0" },
        { "label": "Hindu", "title": "Hindu", "value": 1 },
        { "label": "Christian", "title": "Christian", "value": 2 },
        { "label": "Muslim", "title": "Muslim", "value": 3 },
        { "label": "Other", "title": "Other", "value": 6 },
        { "label": "Catholic", "title": "Catholic", "value": 9 },
        { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
        { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
    ],
    "Mothertongue": [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Telugu", "title": "Telugu", "value": 1 },
        { "label": "Tamil", "title": "Tamil", "value": 2 },
        { "label": "Kannada", "title": "Kannada", "value": 3 },
        { "label": "Hindi", "title": "Hindi", "value": 4 },
        { "label": "Punjabi", "title": "Punjabi", "value": 5 },
        { "label": "Urdu", "title": "Urdu", "value": 6 },
        { "label": "Lambadi", "title": "Lambadi", "value": 7 },
        { "label": "Marati", "title": "Marati", "value": 8 },
        { "label": "Gujaraathi", "title": "Gujaraathi", "value": 9 },
        { "label": "English", "title": "English", "value": 10 },
        { "label": "Malayalam", "title": "Malayalam", "value": 11 },
        { "label": "Saurashtra", "title": "Saurashtra", "value": 12 }, { "label": "Orea", "title": "Orea", "value": 13 },
        { "label": "telugu", "title": "telugu", "value": 14 }
    ],
    "educationcategory": [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Bachelors in Engineering", "title": "Bachelors in Engineering", "value": 1 },
        { "label": "Bachelors in Degree", "title": "Bachelors in Degree", "value": 2 },
        { "label": "Diploma", "title": "Diploma", "value": 3 },
        { "label": "Doctorate/phd", "title": "Doctorate/phd", "value": 4 },
        { "label": "Masters in Engineering", "title": "Masters in Engineering", "value": 5 },
        { "label": "Bachelors in Medicine", "title": "Bachelors in Medicine", "value": 6 },
        { "label": "Masters in Degree", "title": "Masters in Degree", "value": 7 },
        { "label": "Finance - ICWAI/CA/CS", "title": "Finance - ICWAI/CA/CS", "value": 10 },
        { "label": "Union Public Service Commision-Civil Services", "title": "Union Public Service Commision-Civil Services", "value": 11 },
        { "label": "Masters in Medicine", "title": "Masters in Medicine", "value": 13 },
        { "label": "Below Graduation", "title": "Below Graduation", "value": 15 },
        { "label": "Not given", "title": "Not given", "value": 21 },
        { "label": "Other", "title": "Other", "value": 22 }
    ],
    "visastatus": [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Student Visa", "title": "Student Visa", "value": 284 },
        { "label": "Work Permit", "title": "Work Permit", "value": 285 },
        { "label": "Temporary Visa", "title": "Temporary Visa", "value": 286 },
        { "label": "Citizen", "title": "Citizen", "value": 521 },
        { "label": "Permanent Resident", "title": "Permanent Resident", "value": 522 },
        { "label": "Green Card", "title": "Green Card", "value": 553 }
    ],
    "stars": [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Bharani", "title": "Bharani", "value": 2 },
        { "label": "Krithika", "title": "Krithika", "value": 3 },
        { "label": "Rohini", "title": "Rohini", "value": 4 },
        { "label": "Mrigasira", "title": "Mrigasira", "value": 5 },
        { "label": "Arudra", "title": "Arudra", "value": 6 },
        { "label": "Punarvasu", "title": "Punarvasu", "value": 7 },
        { "label": "Pushyami", "title": "Pushyami", "value": 8 },
        { "label": "Aslesha", "title": "Aslesha", "value": 9 },
        { "label": "Makha", "title": "Makha", "value": 10 },
        { "label": "Pubba", "title": "Pubba", "value": 11 },
        { "label": "Utharapalguni", "title": "Utharapalguni", "value": 12 },
        { "label": "Hastham", "title": "Hastham", "value": 13 },
        { "label": "Chitta", "title": "Chitta", "value": 14 },
        { "label": "Swathi", "title": "Swathi", "value": 15 },
        { "label": "Vishaka", "title": "Vishaka", "value": 16 },
        { "label": "Anuradha", "title": "Anuradha", "value": 18 },
        { "label": "Jesta", "title": "Jesta", "value": 19 },
        { "label": "Moola", "title": "Moola", "value": 20 },
        { "label": "Poorvashada", "title": "Poorvashada", "value": 21 },
        { "label": "Utharashada", "title": "Utharashada", "value": 22 },
        { "label": "Sravanam", "title": "Sravanam", "value": 23 },
        { "label": "Dhanishta", "title": "Dhanishta", "value": 24 },
        { "label": "Sathabisham", "title": "Sathabisham", "value": 25 },
        { "label": "Poorvabadra", "title": "Poorvabadra", "value": 26 },
        { "label": "Uthirabadra", "title": "Uthirabadra", "value": 27 },
        { "label": "Revathi", "title": "Revathi", "value": 28 },
        { "label": "Anuradha", "title": "Anuradha", "value": 30 },
        { "label": "Arudra", "title": "Arudra", "value": 31 },
        { "label": "Ashwini", "title": "Ashwini", "value": 32 },
        { "label": "Aslesha", "title": "Aslesha", "value": 33 },
        { "label": "Chitra", "title": "Chitra", "value": 34 },
        { "label": "Dhanshita", "title": "Dhanshita", "value": 35 },
        { "label": "Hasta", "title": "Hasta", "value": 36 },
        { "label": "Jyehsta", "title": "Jyehsta", "value": 37 },
        { "label": "Kritika", "title": "Kritika", "value": 38 },
        { "label": "Magha", "title": "Magha", "value": 39 },
        { "label": "Moola", "title": "Moola", "value": 40 },
        { "label": "Mrigasira", "title": "Mrigasira", "value": 41 },
        { "label": "Poorvabhadra", "title": "Poorvabhadra", "value": 42 },
        { "label": "Poorvashadha", "title": "Poorvashadha", "value": 43 },
        { "label": "Punarvasu", "title": "Punarvasu", "value": 44 },
        { "label": "Poorvaphalguni", "title": "Poorvaphalguni", "value": 45 },
        { "label": "Pushya", "title": "Pushya", "value": 46 },
        { "label": "Satabisha", "title": "Satabisha", "value": 47 },
        { "label": "Sravana", "title": "Sravana", "value": 48 },
        { "label": "Swati", "title": "Swati", "value": 49 },
        { "label": "Uttarashadha", "title": "Uttarashadha", "value": 50 },
        { "label": "Uttarabhadrapada", "title": "Uttarabhadrapada", "value": 51 },
        { "label": "Uttaraphalguni", "title": "Uttaraphalguni", "value": 52 },
        { "label": "Visakha", "title": "Visakha", "value": 53 },
        { "label": "Uttara", "title": "Uttara", "value": 54 },
        { "label": "Uttarabhadra", "title": "Uttarabhadra", "value": 55 }
    ],
    'starLanguage': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Telugu", "title": "Telugu", "value": 1 },
        { "label": "Tamil", "title": "Tamil", "value": 2 },
        { "label": "Kannada", "title": "Kannada", "value": 3 },
    ],
    'region': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "AP", "title": "AP", "value": 408 },
        { "label": "TN", "title": "TN", "value": 409 },
        { "label": "KT", "title": "KT", "value": 410 }
    ],
    'bodyType': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Athletic", "title": "Athletic", "value": 21 },
        { "label": "Average", "title": "Average", "value": 22 },
        { "label": "Slim", "title": "Slim", "value": 23 },
        { "label": "Heavy", "title": "Heavy", "value": 24 },
        { "label": "Doesn't Matter", "title": "Doesn't Matter", "value": 37 }
    ],
    'bloodGroup': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "O+", "title": "O+", "value": 61 },
        { "label": "A+", "title": "A+", "value": 63 },
        { "label": "B+", "title": "B+", "value": 64 },
        { "label": "AB+", "title": "AB+", "value": 65 },
        { "label": "O-", "title": "O-", "value": 66 },
        { "label": "A-", "title": "A-", "value": 67 },
        { "label": "B-", "title": "B-", "value": 68 }
    ],
    'healthCondition': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "No Health Problems", "title": "No Health Problems", "value": 220 },
        { "label": "HIV", "title": "HIV", "value": 222 },
        { "label": "Diabetes", "title": "Diabetes", "value": 223 },
        { "label": "LowBP", "title": "LowBP", "value": 224 },
        { "label": "HighBP", "title": "HighBP", "value": 225 },
        { "label": "Heart Ailments", "title": "Heart Ailments", "value": 226 }
    ],
    'lagnam': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Dhansu", "title": "Dhansu", "value": 1 },
        { "label": "Kanya", "title": "Kanya", "value": 2 },
        { "label": "Karkatakam", "title": "Karkatakam", "value": 3 },
        { "label": "Khumbam", "title": "Khumbam", "value": 4 },
        { "label": "Makhram", "title": "Makhram", "value": 5 },
        { "label": "Meenam", "title": "Meenam", "value": 6 },
        { "label": "Mesham", "title": "Mesham", "value": 7 },
        { "label": "Midhunam", "title": "Midhunam", "value": 8 },
        { "label": "Simham", "title": "Simham", "value": 9 },
        { "label": "Thula", "title": "Thula", "value": 10 },
        { "label": "Vrichikam", "title": "Vrichikam", "value": 11 },
        { "label": "Vrushabam", "title": "Vrushabam", "value": 12 }
    ],
    'ZodaicSign': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "mesha", "title": "mesha", "value": 527 },
        { "label": "vrushaba", "title": "vrushaba", "value": 528 },
        { "label": "midhuna", "title": "midhuna", "value": 529 },
        { "label": "karkataka", "title": "karkataka", "value": 530 },
        { "label": "Simha", "title": "Simha", "value": 531 },
        { "label": "Kanya", "title": "Kanya", "value": 532 },
        { "label": "Thula", "title": "Thula", "value": 533 },
        { "label": "Vruchika", "title": "Vruchika", "value": 534 },
        { "label": "Dhanu", "title": "Dhanu", "value": 535 },
        { "label": "Makara", "title": "Makara", "value": 536 },
        { "label": "Kumbha", "title": "Kumbha", "value": 537 },
        { "label": "Meena", "title": "Meena", "value": 538 },
    ],
    'paadam': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "1", "title": "1", "value": 304 },
        { "label": "2", "title": "2", "value": 305 },
        { "label": "3", "title": "3", "value": 306 },
        { "label": "4", "title": "4", "value": 539 },

    ],
    'familyStatus': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Lower Middle Class", "title": "Lower Middle Class", "value": 290 },
        { "label": "Middle Class", "title": "Middle Class", "value": 291 },
        { "label": "Upper Middle Class", "title": "Upper Middle Class", "value": 292 },
        { "label": "Rich", "title": "Rich", "value": 293 },
        { "label": "Affluent", "title": "Affluent", "value": 294 },
        { "label": "Others", "title": "Others", "value": 516 },
        { "label": "High Class", "title": "High Class", "value": 517 }
    ],
    'RelationshipType': [
        { "label": "--Select--", "title": "--Select--", "value": 0 },
        { "label": "Friend", "title": "Friend", "value": 318 },
        { "label": "Relative", "title": "Relative", "value": 319 },
        { "label": "Not Given", "title": "Not Given", "value": 549 },

    ]



});
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
editviewapp.controller("managePhotoCtrl", ['$uibModal', '$scope', 'commonFactory', 'editmanagePhotoServices', function(uibModal, scope, commonFactory, editmanagePhotoServices) {

    var GlobalImgPath = 'http://d16o2fcjgzj2wp.cloudfront.net/';
    var GlobalProfilepicpathwithoutaccess = 'Images/ProfilePics/';
    var S3PhotoPath = '';

    var Mnoimage = GlobalImgPath + "Images/customernoimages/Mnoimage.jpg";
    var Fnoimage = GlobalImgPath + "Images/customernoimages/Fnoimage.jpg";
    var accesspathdots = GlobalImgPath + GlobalProfilepicpathwithoutaccess;
    var EmpIDQueryString = '2';

    scope.imgArr = [];
    scope.cancel = function() {
        commonFactory.closepopup();
    }

    scope.AddImage = function() {
        commonFactory.open('AddimagePopup.html', scope, uibModal);
    }
    editmanagePhotoServices.getPhotoData().then(function(response) {
        var StrCustID = '104084';

        console.log(response.data);
        scope.manageArr = response.data;
        _.each(scope.manageArr, function(item) {

            debugger;
            var imagepath = accesspathdots;

            if (item.IsActive == "0" && item.PhotoName != null) {
                var strCustDirName = "KMPL_" + StrCustID + "_Images";
                var path = imagepath + strCustDirName + "/" + item.PhotoName;
                item.ImageUrl = path;
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                //dynDiv.Attributes.Add("Class", "cssMaskdiv clearfix");

            } else if (item.IsActive == "1" && item.IsThumbNailCreated == "1") {

                var strCustDirName = "KMPL_" + StrCustID + "_Images";
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                switch (item.DisplayOrder) {
                    case 1:
                        var photoshoppath = "img1_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var path = imagepath + strCustDirName + "/" + photoshoppath;
                        item.ImageUrl = path;
                        alert(path);

                        break;
                    case 2:
                        var photoshoppathnew = "img2_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var pathnew = imagepath + strCustDirName + "/" + photoshoppathnew;
                        item.ImageUrl = pathnew;

                        break;
                    case 3:
                        var photoshoppathneew3 = "img3_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var pathneww = imagepath + strCustDirName + "/" + photoshoppathneew3;
                        item.ImageUrl = pathneww;
                        break;
                }
            } else if (item.IsActive == "0" && item.PhotoName == null) {
                item.addButtonvisible = true;
                item.deleteVisibility = false;
                item.ImageUrl = Fnoimage;

            }
        });
    });





}]);
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
editviewapp.controller("partnerPreferenceCtrl", ['partnerPreferenceServices', '$scope', '$uibModal', 'commonFactory', function(partnerPreferenceServices, scope, uibModal, commonFactory) {
    scope.partnerPrefArr = [];
    scope.partnerObj = {};
    scope.ageGapArr = [];
    scope.height = 'height';
    scope.Religion = 'Religion';
    scope.Mothertongue = 'Mothertongue';
    scope.MaritalStatus = 'MaritalStatus';
    scope.educationcategory = 'educationcategory';
    scope.Country = 'Country';
    scope.ProfCatgory = 'ProfCatgory';
    scope.ProfGroup = 'ProfGroup';
    scope.region = 'region';

    scope.partnerDescObj = {};

    var custID = '91035';

    // scope.listSelectedVal = function(val) {
    //     var str = null;
    //     if (val != null) {
    //         if (angular.isString(val)) {
    //             str = val === '' ? null : val;
    //         } else {
    //             str = val.join(',');
    //         }
    //     }
    //     return str;
    // }


    partnerPreferenceServices.getPartnerPreferenceData().then(function(response) {
        scope.partnerPrefArr = response.data;
        console.log(scope.partnerPrefArr);
    });

    scope.changeBind = function(type, parentval, parentval2) {

        switch (type) {
            case 'Country':
                scope.stateArr = commonFactory.StateBind(parentval);
                break;

            case 'EducationCatgory':
                scope.eduGroupArr = commonFactory.educationGroupBind(parentval);
                break;

            case 'caste':
                scope.casteArr = commonFactory.casteDepedency(commonFactory.listSelectedVal(parentval), commonFactory.listSelectedVal(parentval2));
                break;

            case 'subCaste':
                scope.subCasteArr = commonFactory.subCaste(commonFactory.listSelectedVal(parentval));
                break;

            case 'star':
                scope.starArr = commonFactory.starBind(parentval);
                break;

            case 'region':
                scope.branchArr = commonFactory.branch(parentval);
                break;
        }
    }

    scope.partnerprefPopulate = function(item) {


        scope.partnerObj = {};
        if (item != undefined) {
            scope.casteArr = commonFactory.casteDepedency(item.religionid, item.MotherTongueID);
            scope.stateArr = commonFactory.StateBind(item.CountryID);
            scope.eduGroupArr = commonFactory.educationGroupBind(item.EducationCategoryID);
            scope.starArr = commonFactory.starBind(item.StarLanguageID);
            scope.partnerObj.intCusID = item.intCusID,
                scope.ageGapArr = commonFactory.numbersBind('years', 1, 80);

            scope.partnerObj.rbtlGender = item.Gender === 'Female' ? 2 : 1,
                scope.partnerObj.ddlFromAge = item.Agemin,
                scope.partnerObj.ddlToAge = item.AgeMax,
                scope.partnerObj.ddlFromheight = item.MinHeight,
                scope.partnerObj.ddltoHeight = item.MaxHeight,
                scope.partnerObj.lstReligion = item.religionid,
                scope.partnerObj.lstMothertongue = item.MotherTongueID,
                scope.partnerObj.lstCaste = item.casteid,
                scope.partnerObj.lstSubcaste = item.subcasteid,
                scope.partnerObj.lstMaritalstatus = item.maritalstatusid,
                scope.partnerObj.lstEducationcategory = item.EducationCategoryID,
                scope.partnerObj.lstEducationgroup = item.EducationGroupID,
                scope.partnerObj.lstEmployedin = item.ProfessionCategoryID,
                scope.partnerObj.lstProfessiongroup = item.ProfessionGroupID,
                scope.partnerObj.lstPreferredcountry = item.CountryID,
                scope.partnerObj.lstPreferredstate = item.StateID,
                scope.partnerObj.lstRegion = item.regionId,
                scope.partnerObj.lstBranch = item.branchid,
                scope.partnerObj.rbtDiet = item.DietID,
                scope.partnerObj.rbtManglikKujadosham = item.KujaDoshamID,
                scope.partnerObj.rbtPreferredstarLanguage = item.StarLanguageID,
                scope.partnerObj.rbtPreferredstars = item.TypeOfStar,
                scope.partnerObj.lstpreferedstars = item.PreferredStars
        }
        commonFactory.open('partnerPrefContent.html', scope, uibModal);

    }

    scope.partnerdescPopulate = function(item) {
        scope.partnerDescObj = {};
        if (item != undefined) {
            scope.partnerDescObj.txtpartnerdescription = item.PartnerDescripition;
        }
        commonFactory.open('partnerDescContent.html', scope, uibModal);
    }
    scope.partnerPrefSubmit = function(objitem) {

        scope.partnerPrefData = {
            GetDetails: {
                CustID: scope.partnerObj.intCusID,
                AgeGapFrom: objitem.ddlFromAge,
                AgeGapTo: objitem.ddlToAge,
                HeightFrom: objitem.ddlFromheight,
                HeightTo: objitem.ddltoHeight,
                Religion: commonFactory.listSelectedVal(objitem.lstReligion),
                Mothertongue: commonFactory.listSelectedVal(objitem.lstMothertongue),
                Caste: commonFactory.listSelectedVal(objitem.lstCaste),
                Subcaste: commonFactory.listSelectedVal(objitem.lstSubcaste),
                Maritalstatus: commonFactory.listSelectedVal(objitem.lstMaritalstatus),
                ManglikKujadosham: objitem.rbtManglikKujadosham,
                PreferredstarLanguage: objitem.rbtPreferredstarLanguage,
                Educationcategory: commonFactory.listSelectedVal(objitem.lstEducationcategory),
                Educationgroup: commonFactory.listSelectedVal(objitem.lstEducationgroup),
                Employedin: commonFactory.listSelectedVal(objitem.lstEmployedin),
                Professiongroup: commonFactory.listSelectedVal(objitem.lstProfessiongroup),
                Diet: objitem.rbtDiet,
                Preferredcountry: commonFactory.listSelectedVal(objitem.lstPreferredcountry),
                Preferredstate: commonFactory.listSelectedVal(objitem.lstPreferredstate),
                Preferreddistrict: null,
                Preferredlocation: null,
                TypeofStar: objitem.rbtPreferredstars,
                PrefredStars: objitem.lstpreferedstars,
                GenderID: objitem.rbtlGender,
                Region: commonFactory.listSelectedVal(objitem.lstRegion),
                Branch: commonFactory.listSelectedVal(objitem.lstBranch),
            },
            customerpersonaldetails: {
                intCusID: scope.partnerObj.intCusID,
                EmpID: null,
                Admin: null
            }
        }
        debugger;

        partnerPreferenceServices.submitPartnerPrefData(scope.partnerPrefData).then(function(response) {
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


    scope.partnerDescriptionSubmit = function(obj) {
        partnerPreferenceServices.submitPartnerDescData({ CustID: custID, AboutYourself: obj.txtpartnerdescription, flag: 1 }).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === '1') {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });


    }



}]);
editviewapp.controller('propertyCtrl', ['$uibModal', '$scope', 'propertyServices', 'commonFactory', function(uibModal, scope, propertyServices, commonFactory) {
    scope.propertyArr = [];
    scope.proObj = {};
    scope.familyStatus = 'familyStatus';
    var custID = '104610';


    propertyServices.getPropertyData(custID).then(function(response) {
        scope.propertyArr = response.data;
        console.log(response);
    });

    scope.populateProperty = function(item) {
        scope.proObj = {};
        scope.proObj.Custpropertyid = null;
        if (item != undefined) {
            scope.proObj.Custpropertyid = item.Custpropertyid;
            scope.proObj.ddlFamilyStatus = item.FamilyValuesID;
            scope.proObj.rdlSharedProperty = item.SharedPropertyID == true ? 1 : 0;
            scope.proObj.txtValueofproperty = item.PropertyValue;
            scope.proObj.txtPropertydesc = item.PropertyDetails;
        }

        commonFactory.open('propertyContent.html', scope, uibModal);
    }


    scope.propertySubmit = function(obj) {
        scope.propertyData = {
            GetDetails: {
                FamilyStatus: obj.ddlFamilyStatus,
                Issharedproperty: obj.rdlSharedProperty,
                Valueofproperty: obj.txtValueofproperty,
                PropertyType: '281',
                Propertydescription: obj.txtPropertydesc,
                Showingviewprofile: obj.rbtShowViewProfile,
                Custpropertyid: scope.proObj.Custpropertyid,
                PropertyID: scope.proObj.Custpropertyid,
                CustId: custID
            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        }

        propertyServices.submitPropertyData(scope.propertyData).then(function(response) {
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
editviewapp.controller('referenceCtrl', ['$uibModal', '$scope', 'referenceServices', 'commonFactory', function(uibModal, scope, referenceServices, commonFactory) {

    var custID = '91035';
    scope.ReferenceArr = [];
    scope.refObj = {};
    scope.RelationshipType = 'RelationshipType';
    scope.Country = 'Country';
    scope.countryCode = 'countryCode';

    scope.referencePopulate = function(item) {
        scope.refObj.RefrenceCust_Reference_ID = null;
        scope.refObj = {};
        if (item != undefined) {
            scope.stateArr = commonFactory.StateBind(item.RefrenceCountry);
            scope.districtArr = commonFactory.districtBind(item.RefrenceStateID);

            scope.refObj.intCusID = custID;
            scope.refObj.RefrenceCust_Reference_ID = item.RefrenceCust_Reference_ID;
            scope.refObj.ddlRelationshiptype = item.ReletionShipTypeID;
            scope.refObj.txtFname = item.ReferenceFirstName;
            scope.refObj.txtLname = item.ReferenceLastName;
            scope.refObj.txtProfessiondetails = item.RefrenceProfessionDetails;
            scope.refObj.ddlCountry = item.RefrenceCountry;
            scope.refObj.ddlState = item.RefrenceStateID;
            scope.refObj.ddlDistrict = item.RefrenceDistrictID;
            scope.refObj.txtNativePlace = item.RefrenceNativePlaceID;
            scope.refObj.txtPresentlocation = item.RefenceCurrentLocation;

            scope.refObj.ddlMobileCountryID = item.RefrenceMobileCountryID;

            scope.refObj.txtMobileNumber = item.RefrenceMobileNumberID;


            if (item.RefrenceAreaCode != '' && item.RefrenceAreaCode != null) {
                scope.refObj.ddlLandLineCountryID = item.RefrenceLandCountryId;
                scope.refObj.txtAreCode = item.RefrenceAreaCode;
                scope.refObj.txtLandNumber = item.RefrenceLandNumber;

            } else {
                scope.refObj.ddlMobileCountryID2 = item.RefrenceLandCountryId;
                scope.refObj.txtMobileNumber2 = item.RefrenceLandNumber;

            }

            scope.refObj.txtEmails = item.RefrenceEmail;
            scope.refObj.txtNarrations = item.RefrenceNarration;
        }
        commonFactory.open('referenceContent.html', scope, uibModal);
    }

    referenceServices.getReferenceData(custID).then(function(response) {
        scope.ReferenceArr = response.data;
        console.log(scope.ReferenceArr);
    });


    scope.changeBind = function(type, parentval) {
        switch (type) {
            case 'Country':
                scope.stateArr = commonFactory.StateBind(parentval);
                break;

            case 'State':
                scope.districtArr = commonFactory.districtBind(parentval);
                break;
        }

    }



    scope.refenceSubmit = function(obj) {
        scope.referenceData = {
            GetDetails: {
                CustID: 91035,
                RelationshiptypeID: obj.ddlRelationshiptype,
                Firstname: obj.txtFname,
                Lastname: obj.txtLname,
                Employedin: null,
                Professiongroup: null,
                Profession: null,
                Professiondetails: obj.txtProfessiondetails,
                CountryID: obj.ddlCountry,
                StateID: obj.ddlState,
                DistrictID: obj.ddlDistrict,
                Nativeplace: obj.txtNativePlace,
                Presentlocation: obj.txtPresentlocation,
                MobileCountryID: obj.ddlMobileCountryID,
                MobileNumber: obj.txtMobileNumber,
                LandLineCountryID: obj.ddlMobileCountryID2 != '0' && obj.ddlMobileCountryID2 != null ? obj.ddlMobileCountryID2 : (obj.ddlLandLineCountryID != '0' && obj.ddlLandLineCountryID != null ? obj.ddlLandLineCountryID : null),
                LandLineAreaCode: obj.txtMobileNumber2 != '' && obj.txtMobileNumber2 != null ? null : (obj.txtAreCode != '' && obj.txtAreCode != null ? obj.txtAreCode : null),
                LandLineNumber: obj.txtMobileNumber2 != '0' && obj.txtMobileNumber2 != null ? obj.txtMobileNumber2 : (obj.txtLandNumber != '0' && obj.txtLandNumber != null ? obj.txtLandNumber : null),
                Emails: obj.txtEmails,
                Narration: obj.txtNarrations,
                Cust_Reference_ID: scope.refObj.RefrenceCust_Reference_ID
            },
            customerpersonaldetails: {
                intCusID: 91035,
                EmpID: null,
                Admin: null
            }
        }

        debugger;
        referenceServices.submitReferenceData(scope.referenceData).then(function(response) {
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
editviewapp.controller("relativeCtrl", ['$uibModal', '$scope', 'relativeServices', 'commonFactory', function(uibModal, scope, relativeServices, commonFactory) {

    var custid = '104613';

    scope.fbObj = {};
    scope.fsObj = {};
    scope.mbObj = {};
    scope.msObj = {};
    scope.countryCode = 'countryCode';
    scope.indiaStates = 'indiaStates';

    relativeServices.getRelativeeData(custid).then(function(response) {
        scope.FBArr = JSON.parse(response.data[0]);
        scope.FSArr = JSON.parse(response.data[1]);
        scope.MBrr = JSON.parse(response.data[2]);
        scope.MSArr = JSON.parse(response.data[3]);
        console.log(scope.FBArr);
        console.log(scope.FSArr);
        console.log(scope.MBrr);
        console.log(scope.MSArr);

    });

    scope.relativePopulatePopulate = function(type, item) {

        switch (type) {
            case 'FB':
                scope.fbObj.FatherbrotherCustfamilyID = null;
                scope.fbObj = {};
                if (item != undefined) {
                    scope.fbObj.FatherbrotherCustfamilyID = item.FatherbrotherCustfamilyID;
                    scope.fbObj.rdlFBElderORyounger = item.FatherBrotherElderyounger == 'Elder' ? 324 : (item.FatherBrotherElderyounger == 'Younger' ? 323 : '-1');
                    scope.fbObj.txtFatherbrothername = item.FatherbrotherName;
                    scope.fbObj.txtFBEducationdetails = item.FatherBrotherEducationDetails;
                    scope.fbObj.txtFBProfessiondetails = item.FatherbrotherProfessionDetails;

                    scope.fbObj.ddlFBMobileCountryID = item.FatherbrotherMobileCode;
                    scope.fbObj.txtFBMobileNumber = item.FatherbrotherMobileNumber;

                    if (item.FatherbrotherLandaraecode != '' && item.FatherbrotherLandaraecode != null) {
                        scope.fbObj.ddlFBLandLineCountry = item.FatherbrotherLandCountryCode;
                        scope.fbObj.txtFBAreCode = item.FatherbrotherLandaraecode;
                        scope.fbObj.txtFBLandNumber = item.FatherbrotherLandNumber;
                    } else {
                        scope.fbObj.ddlFBMobileCountryID2 = item.FatherbrotherLandCountryCode;
                        scope.fbObj.txtFBMobileNumber2 = item.FatherbrotherLandNumber;
                    }

                    scope.fbObj.txtFBEmails = item.FatherbrotherEmail;
                    scope.fbObj.txtCurrentLocation = item.FatherbrotherCurrentLocation;

                }
                commonFactory.open('FBModalContent.html', scope, uibModal);
                break;

            case 'FS':
                scope.fsObj.FatherSisterCustfamilyID = null;
                scope.fsObj = {};
                if (item != undefined) {

                    scope.fsDistrict = commonFactory.districtBind(item.FatherSisterspousestateId);

                    scope.fsObj.FatherSisterCustfamilyID = item.FatherSisterCustfamilyID;
                    scope.fsObj.rdlFSElderYounger = item.FatherSisterElderyounger == 'Elder' ? 326 : (item.FatherSisterElderyounger == 'Younger' ? 325 : '-1');
                    scope.fsObj.txtFathersistername = item.FatherSisterName;
                    scope.fsObj.txtFSHusbandfirstname = item.SpouceFName;
                    scope.fsObj.txtFSHusbandlastname = item.SpoucelName;
                    scope.fsObj.txtFSHEDucation = item.FatherSisterSpouseEducationDetails;
                    scope.fsObj.txtFSProfessiondetails = item.FathersisterSpouseProfessionDetails;
                    scope.fsObj.ddlFSHStateID = item.FatherSisterspousestateId;
                    scope.fsObj.ddlFSHDistrictID = item.FatherSisterspouseDistrictId;
                    scope.fsObj.txtFSHNativePlace = item.FathersisterSpouseNativePlace;

                    scope.fsObj.ddlFSMObileCountryID = item.FatherSisterMobilecodeid;
                    scope.fsObj.txtFSMobileNumber = item.FatherSisterspouseMobileNumber;

                    if (item.FatherSisterspouseLandaraecode != '' && item.FatherSisterspouseLandaraecode != null) {
                        scope.fsObj.ddlFSHLandCountryID = item.FatherSisterlandcontrycodeid;
                        scope.fsObj.txtFSHAreaNumber = item.FatherSisterspouseLandaraecode;
                        scope.fsObj.txtFSHNUmber = item.FatherSisterspouseLandNumber;

                    } else {
                        scope.fsObj.ddlFSMObileCountryID2 = item.FatherSisterlandcontrycodeid;
                        scope.fsObj.txtFSMobileNumber2 = item.FatherSisterspouseLandNumber;
                    }

                    scope.fsObj.txtFSHEmails = item.FatherSisterspouseEmail;
                    scope.fsObj.txtFSHCurrentLocation = item.FatherSisterCurrentLocation;

                }
                commonFactory.open('FSModalContent.html', scope, uibModal);
                break;

            case 'MB':
                scope.mbObj.MotherBrotherCustfamilyID = null;
                scope.mbObj = {};
                if (item != undefined) {
                    scope.mbObj.MotherBrotherCustfamilyID = item.MotherBrotherCustfamilyID;
                    scope.mbObj.rdlMBElderYounger = item.MotherBrotherElderyounger == 'Elder' ? 328 : (item.MotherBrotherElderyounger == 'Younger' ? 327 : '-1');
                    scope.mbObj.txtMBName = item.MotherBrotherName;
                    scope.mbObj.txtMBEducation = item.MotherBrotherEducationDetails;
                    scope.mbObj.txtMBProfessiondetails = item.MotherBrotherProfessionDetails;

                    scope.mbObj.ddlMBCountriCode = item.MotherBrotherMobileCode;
                    scope.mbObj.txtMBMobileNum = item.MotherBrotherMobileNumber;

                    if (item.MotherBrotherLandaraecode != '' && item.MotherBrotherLandaraecode != null) {
                        scope.mbObj.ddlMBLandLineCountryCode = item.MotherBrotherLandCountryCode;
                        scope.mbObj.txtMBAreaCode = item.MotherBrotherLandaraecode;
                        scope.mbObj.txtMBLandLineNum = item.MotherBrotherLandNumber;

                    } else {
                        scope.mbObj.ddlMBCountriCode2 = item.MotherBrotherLandCountryCode;
                        scope.mbObj.txtMBMobileNum2 = item.MotherBrotherLandNumber;
                    }

                    scope.mbObj.txtMBEmails = item.MotherBrotherEmail;
                    scope.mbObj.txtMBCurrentLocation = item.MotherBrotherCurrentLocation;

                }
                commonFactory.open('MBModalContent.html', scope, uibModal);
                break;
            case 'MS':
                scope.msObj.MotherSisterCustfamilyID = null;
                scope.msObj = {};
                if (item != undefined) {

                    scope.msDistrict = commonFactory.districtBind(item.spousestateid);

                    scope.msObj.MotherSisterCustfamilyID = item.MotherSisterCustfamilyID;
                    scope.msObj.rdlMSElderYounger = item.MotherSisterElderyounger == 'Elder' ? 330 : (item.MotherSisterElderyounger == 'Younger' ? 329 : '-1');
                    scope.msObj.txtMSName = item.MotherSisterName;
                    scope.msObj.txtMsHusbandfirstname = item.SpouceFName;
                    scope.msObj.txtMsHusbandlastname = item.SpoucelName;
                    scope.msObj.ddlMSisState = item.spousestateid;
                    scope.msObj.ddlMsDistrict = item.spousedistrictID;
                    scope.msObj.txtMSNativePlace = item.MotherSisterSpouseNativePlace;
                    scope.msObj.txtMSHEducation = item.MothersisterspouseEducationdetails;
                    scope.msObj.txtMSProfessiondetails = item.MotherSisterProfessionDetails;

                    scope.msObj.ddlMSCounCodeID = item.MotherSisterMobileCodeId;
                    scope.msObj.txtMSMObileNum = item.MotherSisterspouseMobileNumber;

                    if (item.MotherSisterspouseLandaraecode != '' && item.MotherSisterspouseLandaraecode != null) {
                        scope.msObj.ddlMSLLCounCode = item.MotherSisterSpouselandcodeid;
                        scope.msObj.txtMSArea = item.MotherSisterspouseLandaraecode;
                        scope.msObj.txtLLNum = item.MotherSisterspouseLandNumber;
                    } else {
                        scope.msObj.ddlMSCounCodeID2 = item.MotherSisterSpouselandcodeid;
                        scope.msObj.txtMSMObileNum2 = item.MotherSisterspouseLandNumber;
                    }

                    scope.msObj.txtMSEmail = item.MotherSisterspouseEmail;
                    scope.msObj.txtMSCurrentLocation = item.MotherSisterCurrentLocation;

                }
                commonFactory.open('MSModalContent.html', scope, uibModal);
                break;
        }

    }

    scope.changeBind = function(type, parentval) {

        switch (type) {
            case 'fs':
                scope.fsDistrict = commonFactory.districtBind(parentval);
                break;

            case 'ms':
                scope.msDistrict = commonFactory.districtBind(parentval);
                break;
        }
    }

    scope.FBSubmit = function(obj) {
        scope.FBData = {
            GetDetails: {
                CustID: custid,
                Fatherbrothername: obj.txtFatherbrothername,
                FBElderYounger: obj.rdlFBElderORyounger,
                FBEmployedin: null,
                FBProfessiongroup: null,
                FBProfession: null,
                FBProfessiondetails: obj.txtFBProfessiondetails,
                FBMobileCountryID: obj.ddlFBMobileCountryID,
                FBMobileNumber: obj.txtFBMobileNumber,
                FBLandLineCountryID: obj.ddlFBMobileCountryID2 != '0' && obj.ddlFBMobileCountryID2 != null ? obj.ddlFBMobileCountryID2 : (obj.ddlFBLandLineCountry != '0' && obj.ddlFBLandLineCountry != null ? obj.ddlFBLandLineCountry : null),
                FBLandAreaCode: obj.txtFBMobileNumber2 != '' && obj.txtFBMobileNumber2 != null ? null : (obj.txtFBAreCode != '' && obj.txtFBAreCode != null ? obj.txtFBAreCode : null),
                FBLandNumber: obj.txtFBMobileNumber2 != '' && obj.txtFBMobileNumber2 != null ? obj.txtFBMobileNumber2 : (obj.txtFBLandNumber != '' && obj.txtFBLandNumber != null ? obj.txtFBLandNumber : null),
                FBEmails: obj.txtFBEmails,
                FBCurrentLocation: obj.txtCurrentLocation,
                FatherbrotherCust_familyID: scope.fbObj.FatherbrotherCustfamilyID,
                FatherBrotherEducationDetails: obj.txtFBEducationdetails,

            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitFBData(scope.FBData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    }

    scope.FSSubmit = function(obj) {
        scope.FSData = {
            GetDetails: {
                CustID: custid,
                FSFathersistername: obj.txtFathersistername,
                FSElderYounger: obj.rdlFSElderYounger,
                FSHusbandfirstname: obj.txtFSHusbandfirstname,
                FSHusbandlastname: obj.txtFSHusbandlastname,
                FSCountryID: 1,
                FSHStateID: obj.ddlFSHStateID,
                FSHDistrict: obj.ddlFSHDistrictID,
                FSNativeplace: obj.txtFSHNativePlace,
                FSHEmployedin: null,
                FSHProfessiongroup: null,
                FSHProfession: null,
                FSHProfessiondetails: obj.txtFSProfessiondetails,
                FSHMobileCountryID: obj.ddlFSMObileCountryID,
                FSHMObileNumber: obj.txtFSMobileNumber,
                FSHLandCountryID: obj.ddlFSMObileCountryID2 != '0' && obj.ddlFSMObileCountryID2 != null ? obj.ddlFSMObileCountryID2 : (obj.ddlFSHLandCountryID != '0' && obj.ddlFSHLandCountryID != null ? obj.ddlFSHLandCountryID : null),
                FSHLandAreaCode: obj.txtFSMobileNumber2 != '' && obj.txtFSMobileNumber2 != null ? null : (obj.txtFSHAreaNumber != '' && obj.txtFSHAreaNumber != null ? obj.txtFSHAreaNumber : null),
                FSHLandNumber: obj.txtFSMobileNumber2 != '' && obj.txtFSMobileNumber2 != null ? obj.txtFSMobileNumber2 : (obj.txtFSHNUmber != '' && obj.txtFSHNUmber != null ? obj.txtFSHNUmber : null),
                FSHEmails: obj.txtFSHEmails,
                FSCurrentLocation: obj.txtFSHCurrentLocation,
                FatherSisterCust_familyID: scope.fsObj.FatherSisterCustfamilyID,
                FSHEducationdetails: obj.txtFSHEDucation
            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitFSData(scope.FSData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    }

    scope.MBSubmit = function(obj) {
        scope.MBData = {
            GetDetails: {
                CustID: custid,
                Motherbrothername: obj.txtMBName,
                MBElderYounger: obj.rdlMBElderYounger,
                MBEmployedin: null,
                MBProfessiongroup: null,
                MBProfession: null,
                MBProfessiondetails: obj.txtMBProfessiondetails,
                MBMobileCountryID: obj.ddlMBCountriCode,
                MBMObileNumber: obj.txtMBMobileNum,
                MBLandLineCountryID: obj.ddlMBCountriCode2 != '0' && obj.ddlMBCountriCode2 != null ? obj.ddlMBCountriCode2 : (obj.ddlMBLandLineCountryCode != '0' && obj.ddlMBLandLineCountryCode != null ? obj.ddlMBLandLineCountryCode : null),
                MBLandAreaCode: obj.txtMBMobileNum2 != '' && obj.txtMBMobileNum2 != null ? null : (obj.txtMBAreaCode != '' && obj.txtMBAreaCode != null ? obj.txtMBAreaCode : null),
                MBLandNumber: obj.txtMBMobileNum2 != '' && obj.txtMBMobileNum2 != null ? obj.txtMBMobileNum2 : (obj.txtMBLandLineNum != '' && obj.txtMBLandLineNum != null ? obj.txtMBLandLineNum : null),
                MBEmails: obj.txtMBEmails,
                MBCurrentLocation: obj.txtMBCurrentLocation,
                MBMotherBrotherCust_familyID: scope.mbObj.MotherBrotherCustfamilyID,
                MBEducationdetails: obj.txtMBEducation
            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitMBData(scope.MBData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    }

    scope.MSSubmit = function(obj) {
        scope.MSData = {
            GetDetails: {
                CustID: custid,
                Mothersistername: obj.txtMSName,
                MSElderYounger: obj.rdlMSElderYounger,
                MSHusbandfirstname: obj.txtMsHusbandfirstname,
                MSHusbandlastname: obj.txtMsHusbandlastname,
                MSCountryID: 1,
                MSMSHStateID: obj.ddlMSisState,
                MSMSHDistrictID: obj.ddlMsDistrict,
                MSNativeplace: obj.txtMSNativePlace,
                MSEmployedin: null,
                MSProfession: null,
                MSProfessiondetails: obj.txtMSProfessiondetails,
                MSMSHMobileCountryID: obj.ddlMSCounCodeID,
                MSMObileNumber: obj.txtMSMObileNum,
                MSHLandlineCountryID: obj.ddlMSCounCodeID2 != '' && obj.ddlMSCounCodeID2 != '0' && obj.ddlMSCounCodeID2 != null ? obj.ddlMSCounCodeID2 : (obj.ddlMSLLCounCode != '' && obj.ddlMSLLCounCode != '0' && obj.ddlMSLLCounCode != null ? obj.ddlMSLLCounCode : null),
                MSLandAreaCode: obj.txtMSMObileNum2 != '' && obj.txtMSMObileNum2 != null ? null : (obj.txtMSArea != '' && obj.txtMSArea != null ? obj.txtMSArea : null),
                MSLandNumber: obj.txtMSMObileNum2 != '' && obj.txtMSMObileNum2 != null ? obj.txtMSMObileNum2 : (obj.txtLLNum != '' && obj.txtLLNum != null ? obj.txtLLNum : null),
                MSHEmails: obj.txtMSEmail,
                MSCurrentLocation: obj.txtMSCurrentLocation,
                MSCust_familyID: scope.msObj.MotherSisterCustfamilyID,
                MSEducationdetails: obj.txtMSHEducation
            },
            customerpersonaldetails: {
                intCusID: custid,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        relativeServices.submitMSData(scope.MSData).then(function(response) {
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
editviewapp.controller("sibblingCtrl", ['$scope', '$uibModal', 'sibblingServices', 'commonFactory', function(scope, uibModal, sibblingServices, commonFactory) {

    scope.countryCode = 'countryCode';
    scope.sibblingCountArr = [];
    scope.BrotherArr = [];
    scope.sisterArr = [];
    scope.broObj = [];
    scope.sisObj = [];
    scope.caste = 'caste';
    scope.indiaStates = 'indiaStates';
    scope.sibCountsBindArr = commonFactory.numbersBind('', 0, 10);
    scope.SibCountObj = {};

    var custID = '91035';

    scope.sibblingPopulatePopulate = function(type, item) {

        switch (type) {
            case 'sibCounrt':
                if (item != undefined) {
                    scope.SibCountObj.ddlnoofsiblings = item.NoOfBrothers;
                    scope.SibCountObj.ddlnoofelderrother = item.NoOfElderBrothers;
                    scope.SibCountObj.ddlnoofyoungerbrother = item.NoOfYoungerBrothers;
                    scope.SibCountObj.ddlnoofsisters = item.NoOfSisters;
                    scope.SibCountObj.ddlnoofeldersisters = item.NoOfElderSisters;
                    scope.SibCountObj.ddlnoofyoungersisters = item.NoOfYoungerSisters;
                }
                commonFactory.open('SibblingCountPopup.html', scope, uibModal);
                break;

            case 'brother':
                scope.broObj.SibilingCustfamilyID = null;
                scope.broObj = {};

                if (item != undefined) {
                    scope.brodistrictArr = commonFactory.districtBind(item.BroSpouseFatherStateID);

                    scope.broObj.SibilingCustfamilyID = item.SibilingCustfamilyID;
                    scope.broObj.rdlBElderYounger = item.brotherYoungerORelder == 'Elder' ? 42 : (item.brotherYoungerORelder == 'Younger' ? 41 : '-1');
                    scope.broObj.txtBName = item.SibilingName;
                    scope.broObj.txtbrotherreducation = item.SibilingEducationDetails;
                    scope.broObj.txtbrotherprofession = item.SibilingProfessionDetails;
                    scope.broObj.txtBCompanyname = item.SibilingCompany;
                    scope.broObj.txtBJoblocation = item.SibilingJobPLace;

                    scope.broObj.ddlBMObileCountryID = item.SibilingMobileCode;
                    scope.broObj.txtBmobilenumber = item.SibilingLandNumber;

                    if (item.SibilingLandaraecode != '' && item.SibilingLandaraecode != null) {
                        scope.broObj.ddlBLandLineCountryID = item.SibilngLandCountryCode;
                        scope.broObj.txtBAreCode = item.SibilingLandaraecode;
                        scope.broObj.txtBLandNumber = item.SibilingLandNumber;
                    } else {
                        scope.broObj.ddlBMObileCountryID2 = item.SibilngLandCountryCode;
                        scope.broObj.txtBmobilenumber2 = item.SibilingLandNumber;

                    }

                    scope.broObj.txtBEmails = item.SibilingEmail;

                    scope.broObj.rdlBIsMarried = item.SibilingMarried;
                    scope.broObj.txtBWifeName = item.SibilingSpouseName;
                    scope.broObj.txtbrotherwifeeducation = item.SibilingSpouseEducationDetails;
                    scope.broObj.txtbrotherwifeprofession = item.SibilingSpouseProfessionDetails;
                    //scope.broObj.chkboxbrotherwifeprofession = item.;
                    scope.broObj.txtBWifeCompanyName = item.spoucecompanyName;
                    scope.broObj.txtBwifeJoblocation = item.spoucejobloc;

                    scope.broObj.ddlBWMobileCode = item.SibilingSpouseMobileCode;

                    scope.broObj.txtBWifeMobileNumber = item.SibilingSpouceMobileNumber;

                    if (item.SibilingSpouseLandareCode != '' && item.SibilingSpouseLandareCode != null) {
                        scope.broObj.ddlBWifeLandLineCountryCode = item.SibilingSpouseLandCode;
                        scope.broObj.txtBWifeLandLineAreaCode = item.SibilingSpouseLandareCode;
                        scope.broObj.txtBWifeLandLineNumber = item.SibilngSpouseLandnumber;
                    } else {
                        scope.broObj.ddlBWMobileCode2 = item.SibilingSpouseLandCode;
                        scope.broObj.txtBWifeMobileNumber2 = item.SibilngSpouseLandnumber;

                    }

                    scope.broObj.txtwifeEmail = item.SpouseEmail;
                    scope.broObj.txtBWifeFatherSurName = item.SFsurname;
                    scope.broObj.txtBWWifeFatherName = item.SFname;
                    scope.broObj.ddlborherspousefathercaste = item.SibilingSpouseFatherCasteID;
                    scope.broObj.ddlBroSpousefatherState = item.BroSpouseFatherStateID;
                    scope.broObj.ddlBroSpousefatherDistrict = item.BroSpouseFatherDistrictID;
                    scope.broObj.txtBroSpousefatherCity = item.BroSpouseFatherCity;


                }
                commonFactory.open('brotherModalContent.html', scope, uibModal);
                break;

            case 'sister':
                scope.sisObj.SibilingCustfamilyID = null;
                scope.sisObj = {};
                if (item != undefined) {
                    debugger;
                    scope.sisdistrictArr = commonFactory.districtBind(item.BroSpouseFatherStateID);

                    scope.sisObj.SibilingCustfamilyID = item.SibilingCustfamilyID;
                    scope.sisObj.rbtSElderyounger = item.SisterElderORyounger == 'Elder' ? '322' : (item.SisterElderORyounger == 'Younger' ? '321' : '-1');
                    scope.sisObj.txtSisterName = item.SibilingName;
                    scope.sisObj.txtsisEducation = item.SibilingEducationDetails;
                    scope.sisObj.txtsisProfession = item.SibilingProfessionDetails;
                    //scopsisroObj.chksisProfession = item.;
                    scope.sisObj.txtSCompanyName = item.SibilingCompany;
                    scope.sisObj.txtSjobloc = item.SibilingJobPLace;

                    scope.sisObj.ddlSMobileCountyCodeID = item.SibilingMobileCode;
                    scope.sisObj.txtSMobileNumber = item.SibilingMobileNumber;


                    if (item.SibilingLandaraecode != '' && item.SibilingLandaraecode != null) {
                        scope.sisObj.ddlSLandLineCountryCodeID = item.SibilngLandCountryCode;
                        scope.sisObj.txtSAreacoude = item.SibilingLandaraecode;
                        scope.sisObj.txtSNumber = item.SibilingLandNumber;
                    } else {
                        scope.sisObj.ddlSMobileCountyCodeID2 = item.SibilngLandCountryCode;
                        scope.sisObj.txtSMobileNumber2 = item.SibilingLandNumber;

                    }

                    scope.sisObj.txtSEmails = item.SibilingEmail;
                    scope.sisObj.rdlSIsMarried = item.SibilingMarried;
                    scope.sisObj.txtShusName = item.SibilingName;
                    scope.sisObj.txtHusbandEducation = item.SibilingSpouseEducationDetails;
                    scope.sisObj.txtHusbandProfession = item.SibilingSpouseProfessionDetails;
                    scope.sisObj.txtShusCompanyName = item.spoucecompanyName;
                    scope.sisObj.txtShusjobloc = item.spoucejobloc;

                    scope.sisObj.ddlSHusMobileCountryID = item.sisterspousemobilecode;
                    scope.sisObj.txtSHusMobileNumber = item.SibilingSpouceMobileNumber;

                    if (item.SibilingSpouseLandareCode != '' && item.SibilingSpouseLandareCode != null) {
                        scope.sisObj.ddlSHusLandCountryID = item.SpousesisterLandCode;
                        scope.sisObj.txtSHusLandNumber = item.SibilngSpouseLandnumber;
                        scope.sisObj.txtSHusLandArea = item.SibilingSpouseLandareCode;
                    } else {
                        scope.sisObj.ddlSHusMobileCountryID2 = item.SpousesisterLandCode;
                        scope.sisObj.txtSHusMobileNumber2 = item.SibilngSpouseLandnumber;

                    }

                    scope.sisObj.txtHusbandEmail = item.SpouseEmail;
                    scope.sisObj.txtHusbandFatherSurName = item.SpouceFatherLName;
                    scope.sisObj.txtHusbandFatherName = item.SpouceFatherFName;
                    scope.sisObj.ddlsisterspusefathercaste = item.SibilingSpouseFatherCasteId;
                    scope.sisObj.ddlSisSpouceFatherState = item.SisSpouseFatherStateID;
                    scope.sisObj.ddlSisSpouceFatherDistrict = item.SisSpouseFatherDitrictID;
                    scope.sisObj.txtSisSpouceFatherCity = item.SisSpousefatherCity;

                }
                commonFactory.open('sisterModalContent.html', scope, uibModal);
                break;
        }

    }

    sibblingServices.getSibblingeData(custID).then(function(response) {
        scope.sibblingCountArr = JSON.parse(response.data[0]);
        scope.BrotherArr = JSON.parse(response.data[1]);
        scope.sisterArr = JSON.parse(response.data[2]);
        console.log(scope.sisterArr);
    });


    scope.sibBroSubmit = function(obj) {
        scope.sibBroData = {
            GetDetails: {
                CustID: custID,
                BroName: obj.txtBName,
                BroElderYounger: obj.rdlBElderYounger,
                BroEducationcategory: null,
                BroEducationgroup: null,
                BroEducationspecialization: null,
                BroEmployedin: null,
                BroProfessiongroup: null,
                BroProfession: null,
                BroCompanyName: obj.txtBCompanyname,
                BroJobLocation: obj.txtBJoblocation,
                BroMobileCountryCodeID: obj.ddlBMObileCountryID,
                BroMobileNumber: obj.txtBmobilenumber,
                BroLandCountryCodeID: obj.ddlBMObileCountryID2 != '0' && obj.ddlBMObileCountryID2 != null ? obj.ddlBMObileCountryID2 : (obj.ddlBLandLineCountryID != '0' && obj.ddlBLandLineCountryID != null ? obj.ddlBLandLineCountryID : null),
                BroLandAreaCode: obj.txtBmobilenumber2 != '' && obj.txtBmobilenumber2 != null ? null : (obj.txtBAreCode != '' && obj.txtBAreCode != null ? obj.txtBAreCode : null),
                BroLandNumber: obj.txtBmobilenumber2 != '' && obj.txtBmobilenumber2 != null ? obj.txtBmobilenumber2 : (obj.txtBLandNumber != '' && obj.txtBLandNumber != null ? txtBLandNumber.Text : null),
                BroEmail: obj.txtBEmails,
                BIsMarried: obj.rdlBIsMarried,
                BroWifeName: obj.txtBWifeName,
                BroWifeEducationcategory: null,
                BroWifeEducationgroup: null,
                BroWifeEducationspecialization: null,
                BroWifeEmployedin: null,
                BroWifeProfessiongroup: null,
                BroWifeProfession: null,
                BroWifeCompanyName: obj.txtBWifeCompanyName,
                BroWifeJobLocation: obj.txtBwifeJoblocation,
                BroWifeMobileCountryCodeID: obj.ddlBWMobileCode,
                BroWifeMobileNumber: obj.txtBWifeMobileNumber,
                BroWifeLandCountryCodeID: obj.ddlBWMobileCode2 != '0' && obj.ddlBWMobileCode2 != null ? obj.ddlBWMobileCode2 : obj.ddlBWifeLandLineCountryCode != '0' && obj.ddlBWifeLandLineCountryCode != null ? obj.ddlBWifeLandLineCountryCode : null,
                BroWifeLandAreacode: obj.txtBWifeMobileNumber2 != '' && obj.txtBWifeMobileNumber2 != null ? null : obj.txtBWifeLandLineAreaCode != '' && obj.txtBWifeLandLineAreaCode != null ? obj.txtBWifeLandLineAreaCode : null,
                BroWifeLandNumber: obj.txtBWifeMobileNumber2 != '' && obj.txtBWifeMobileNumber2 != null ? obj.txtBWifeMobileNumber2 : obj.txtBWifeLandLineNumber != '' && obj.txtBWifeLandLineNumber != null ? obj.txtBWifeLandLineNumber : null,
                BroWifeFatherSurName: obj.txtBWifeFatherSurName,
                BroWifeFatherName: obj.txtBWWifeFatherName,
                BroSibilingCustfamilyID: scope.broObj.SibilingCustfamilyID,
                BroEducationDetails: obj.txtbrotherreducation,
                BrowifeEducationDetails: obj.txtbrotherwifeeducation,
                BroProfessionDetails: obj.txtbrotherprofession,
                BroWifeProfessionDetails: obj.txtbrotherwifeprofession,
                BroSpouseFatherCountryID: '1',
                BroSpouseFatherStateID: obj.ddlBroSpousefatherState,
                BroSpouseFatherDitrictID: obj.ddlBroSpousefatherDistrict,
                BroSpouseFatherNativePlace: obj.txtBroSpousefatherCity,
                BrotherSpouseEmail: obj.txtwifeEmail,
                SibilingSpouseFatherCasteID: obj.ddlborherspousefathercaste,

            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        sibblingServices.submitSibBroData(scope.sibBroData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    }

    scope.sibSisSubmit = function(obj) {
        scope.sibSisData = {
            GetDetails: {
                CustID: custID,
                SisName: obj.txtSisterName,
                SisElderYounger: obj.rbtSElderyounger,
                SisEducationcategory: null,
                SisEducationgroup: null,
                SisEducationspecialization: null,
                SisEmployedin: null,
                SisProfessiongroup: null,
                SisProfession: null,
                SisCompanyName: obj.txtSCompanyName,
                SisJobLocation: obj.txtSjobloc,
                SisMobileCountryCodeID: obj.ddlSMobileCountyCodeID,
                SisMobileNumber: obj.txtSMobileNumber,
                SisLandCountryCodeID: obj.ddlSMobileCountyCodeID2 != '0' && obj.ddlSMobileCountyCodeID2 != null ? obj.ddlSMobileCountyCodeID2 : obj.ddlSLandLineCountryCodeID != '0' && obj.ddlSLandLineCountryCodeID != null ? obj.ddlSLandLineCountryCodeID : null,
                SisLandAreaCode: obj.txtSMobileNumber2 != '' && obj.txtSMobileNumber2 != null ? null : obj.txtSAreacoude != '' && obj.txtSAreacoude != null ? obj.txtSAreacoude : null,
                SisLandNumber: (obj.txtSMobileNumber2 != '' && obj.txtSMobileNumber2 != null) ? obj.txtSMobileNumber2 : obj.txtSNumber != '' && obj.txtSNumber != null ? obj.txtSNumber : null,
                SisEmail: obj.txtSEmails,
                SIsMarried: obj.rdlSIsMarried,
                SisHusbandName: obj.txtShusName,
                SisHusbandEducationcategory: null,
                SisHusbandEducationgroup: null,
                SisHusbandEducationspecialization: null,
                SisHusbandEmployedin: null,
                SisHusbandProfessiongroup: null,
                SisHusbandProfession: null,
                SisHusCompanyName: obj.txtShusCompanyName,
                SisHusJobLocation: obj.txtShusjobloc,
                SisHusbandMobileCountryCodeID: obj.ddlSHusMobileCountryID,
                SisHusbandMobileNumber: obj.txtSHusMobileNumber,
                SisHusbandLandCountryCodeID: obj.ddlSHusMobileCountryID2 != '0' && obj.ddlSHusMobileCountryID2 != null ? obj.ddlSHusMobileCountryID2 : obj.ddlSHusLandCountryID != '0' && obj.ddlSHusLandCountryID != null ? obj.ddlSHusLandCountryID : null,
                SisHusbandLandAreacode: obj.txtSHusMobileNumber2 != '' && obj.txtSHusMobileNumber2 != null ? null : obj.txtSHusLandArea != '' && obj.txtSHusLandArea != null ? obj.txtSHusLandArea : null,
                SisHusbandLandNumber: obj.txtSHusMobileNumber2 != '' && obj.txtSHusMobileNumber2 != null ? obj.txtSHusMobileNumber2 : obj.txtSHusLandNumber != '' && obj.txtSHusLandNumber != null ? obj.txtSHusLandNumber : null,
                SisHusbandFatherSurName: obj.txtHusbandFatherSurName,
                SisHusbandFatherName: obj.txtHusbandFatherName,
                SisSibilingCustfamilyID: scope.sisObj.SibilingCustfamilyID,
                siseducationdetails: obj.txtsisEducation,
                sisprofessiondetails: obj.txtsisProfession,
                sisspouseeducationdetails: obj.txtHusbandEducation,
                sisspouseprofessiondetails: obj.txtHusbandProfession,
                SisSpouseFatherCountryID: '1',
                SisSpouseFatherStateID: obj.ddlSisSpouceFatherState,
                SisSpouseFatherDitrictID: obj.ddlSisSpouceFatherDistrict,
                SisSpouseFatherNativePlace: obj.txtSisSpouceFatherCity,
                SisSpouseEmail: obj.txtHusbandEmail,
                SibilingSpouseFatherCasteID: obj.ddlsisterspusefathercaste,

            },
            customerpersonaldetails: {
                intCusID: custID,
                EmpID: null,
                Admin: null
            }
        }
        debugger;
        sibblingServices.submitSibSisData(scope.sibSisData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    }

    scope.changeBind = function(type, parentval) {
        switch (type) {
            case 'State':
                scope.brodistrictArr = commonFactory.districtBind(parentval);
                break;
            case 'sisState':
                scope.sisdistrictArr = commonFactory.districtBind(parentval);
                break;
        }

    }


    scope.cancel = function() {
        commonFactory.closepopup();
    };

    scope.housewiseChk = function(item) {
        if (item.chksisProfession === true) {
            item.txtsisProfession = 'HouseWife';
        } else {
            item.txtsisProfession = '';
        }
    }

    scope.sibblingCountsSubmit = function(obj) {
        var obj = {
            CustID: custID,
            NoOfBrothers: obj.ddlnoofsiblings,
            NoOfSisters: obj.ddlnoofsisters,
            NoOfYoungerBrothers: obj.ddlnoofyoungerbrother,
            NoOfElderBrothers: obj.ddlnoofelderrother,
            NoOfElderSisters: obj.ddlnoofeldersisters,
            NoOfYoungerSisters: obj.ddlnoofyoungersisters
        };

        sibblingServices.submitSibCountsData(obj).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });


    }



}]);

editviewapp.controller("editSideMenuCtrl", function () {


});
editviewapp.controller('eduAndProfCtrl', ['$uibModal', '$scope', 'editviewServices', 'SelectBindService', 'commonFactory', '$mdDialog', '$filter', function(uibModal, scope, editviewServices, SelectBindService, commonFactory, mdDialog, filter) {

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
    scope.currency = 'currency';
    scope.ProfstateArr = [];
    scope.ProfdistrictArr = [];
    scope.ProfcityeArr = [];
    scope.profObj = {};
    scope.edoObj = {};
    scope.aboutObj = {};
    var custID = '91035';

    scope.cancel = function() {
        commonFactory.closepopup();
    };

    scope.showpopup = function(type, item) {
        debugger;
        switch (type) {
            case 'showEduModal':
                // scope.edoObj.EducationID = null;
                // scope.edoObj = {};
                if (item != undefined) {
                    scope.eduGroupArr = commonFactory.educationGroupBind(item.EducationCategoryID);
                    scope.eduSpecialisationArr = commonFactory.educationSpeciakisationBind(item.EducationGroupID);
                    scope.stateArr = commonFactory.StateBind(item.CountryID);
                    scope.districtArr = commonFactory.districtBind(item.StateID);
                    scope.cityeArr = commonFactory.cityBind(item.DistrictID);

                    scope.edoObj.IsHighestDegree = item.EduHighestDegree;
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


                commonFactory.open('EduModalContent.html', scope, uibModal);
                break;

            case 'showProfModal':
                scope.profObj.Cust_Profession_ID = null;
                scope.profObj = {};
                if (item != undefined) {
                    scope.ProfstateArr = commonFactory.StateBind(item.CountryID);
                    scope.ProfdistrictArr = commonFactory.districtBind(item.StateID);
                    scope.ProfcityeArr = commonFactory.cityBind(item.DistrictID);
                    scope.ProfSpecialisationArr = commonFactory.professionBind(item.ProfessionGroupID);

                    scope.profObj.intCusID = item.intCusID;
                    scope.profObj.ddlemployedin = item.ProfessionCategoryID;
                    scope.profObj.ddlprofgroup = item.ProfessionGroupID;
                    scope.profObj.ddlprofession = item.ProfessionID;
                    scope.profObj.txtcmpyname = item.CompanyName;
                    scope.profObj.txtsalary = item.Salary;
                    scope.profObj.ddlCountryProf = item.CountryID;
                    scope.profObj.ddlStateProf = item.StateID;
                    scope.profObj.ddlDistrictProf = item.DistrictID;
                    scope.profObj.ddlcityworkingprofession = item.CityID;
                    scope.profObj.txtcityprofession = item.CityWorkingIn;
                    scope.profObj.txtworkingfrom = moment(item.WorkingFromDate, 'DD-MM-YYYY').format() // item.WorkingFromDate;
                    scope.profObj.ddlvisastatus = item.VisaTypeID;
                    scope.profObj.txtssincedate = moment(item.ResidingSince, 'DD-MM-YYYY').format();
                    scope.profObj.txtarrivaldate = moment(item.ArrivingDate, 'DD-MM-YYYY').format();
                    scope.profObj.txtdeparture = moment(item.DepartureDate, 'DD-MM-YYYY').format();
                    scope.profObj.txtoccupation = item.OccupationDetails;
                    scope.profObj.Cust_Profession_ID = item.Cust_Profession_ID;
                }

                commonFactory.open('profModalContent.html', scope, uibModal);
                break;

            case 'showAboutModal':

                if (item != undefined) {
                    scope.aboutObj.txtAboutUS = item;
                }
                commonFactory.open('AboutModalContent.html', scope, uibModal);
                break;
        }

    }


    scope.getdata = function() {

        var obj = { ICustID: "91035" };
        editviewServices.getEducationData(obj).then(function(response) {

            scope.educationSelectArray = response.data;

        });
        editviewServices.getProfessionData(obj).then(function(response) {
            scope.ProfessionSelectArray = response.data;

        });
        scope.lblaboutUrself = null;
        editviewServices.getAboutData(obj.ICustID).then(function(response) {
            scope.lblaboutUrself = response.data;
            console.log(response);
        });
    }
    scope.getdata();

    scope.ProfchangeBind = function(type, parentval) {

        switch (type) {
            // case 'Country':
            //     scope.ProfstateArr = commonFactory.StateBind(parentval);
            //     break;

            // case 'State':
            //     scope.ProfdistrictArr = commonFactory.districtBind(parentval);
            //     break;

            // case 'District':
            //     scope.ProfcityeArr = commonFactory.cityBind(parentval);
            //     break;

            case 'ProfessionGroup':
                scope.ProfSpecialisationArr = commonFactory.professionBind(parentval);

                break;

        }
    }

    scope.changeBind = function(type, parentval) {
        switch (type) {
            // case 'Country':
            //     scope.stateArr = commonFactory.StateBind(parentval);
            //     break;

            // case 'State':
            //     scope.districtArr = commonFactory.districtBind(parentval);
            //     break;

            // case 'District':

            //     scope.cityeArr = commonFactory.cityBind(parentval);
            //     break;

            case 'EducationCatgory':

                scope.eduGroupArr = commonFactory.educationGroupBind(parentval);
                break;

            case 'EducationGroup':
                scope.eduSpecialisationArr = commonFactory.educationSpeciakisationBind(parentval);
                break;

        }

    }

    scope.passOfYear = function(maxyr, no_year) {
        var yr = 1;
        scope.passOfyearArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
        for (var i = maxyr; i >= no_year; i--) {
            scope.passOfyearArr.push({ "label": i, "title": i, "value": i });
            yr += 1;
        }
    }
    scope.passOfYear(2020, 1975);



    scope.eduSubmit = function(objitem) {
        alert(objitem.ddlpassOfyear);
        //var passOfyearText = (_.where(scope.passOfyearArr, { value: parseInt(objitem.ddlpassOfyear) }))[0].title;

        scope.myData = {
            customerEducation: {
                CustID: 91035,
                // scope.edoObj.intCusID,
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
                Cust_Education_ID: scope.edoObj.EducationID,
                intEduID: scope.edoObj.EducationID,
            },
            customerpersonaldetails: {
                intCusID: 91035,
                EmpID: null,
                Admin: null
            }
        }


        editviewServices.submitEducationData(scope.myData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });


    };



    scope.ProfSubmit = function(objitem) {
        debugger;

        scope.myprofData = {
            customerProfession: {
                CustID: 91035,
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
                Workingfromdate: filter('date')(objitem.txtworkingfrom, 'yyyy-MM-dd'),
                OccupationDetails: objitem.txtoccupation,
                visastatus: objitem.ddlvisastatus,
                Sincedate: filter('date')(objitem.txtssincedate, 'yyyy-MM-dd'),
                ArrivalDate: filter('date')(objitem.txtarrivaldate, 'yyyy-MM-dd'),
                DepartureDate: filter('date')(objitem.txtdeparture, 'yyyy-MM-dd'),
                profGridID: scope.profObj.Cust_Profession_ID,
                ProfessionID: scope.profObj.Cust_Profession_ID,
            },
            customerpersonaldetails: {
                intCusID: 91035,
                EmpID: null,
                Admin: null
            }
        }
        console.log(JSON.stringify(scope.myprofData));
        debugger;
        editviewServices.submitProfessionData(scope.myprofData).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === 1) {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });

    };

    scope.AboutUrselfSubmit = function(obj) {

        editviewServices.submitAboutUrData({ CustID: custID, AboutYourself: obj.txtAboutUS, flag: 1 }).then(function(response) {
            console.log(response);
            commonFactory.closepopup();
            if (response.data === '1') {
                alert('submitted Succesfully');
            } else {
                alert('Updation failed');
            }
        });
    }


}]);
editviewapp.factory('commonFactory', ['SelectBindService', function(SelectBindService) {
    var modalpopupopen;

    return {
        open: function(url, scope, uibModal) {
            modalpopupopen = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope
            });
        },
        closepopup: function() {
            modalpopupopen.close();
        },
        listSelectedVal: function(val) {
            var str = null;
            if (val != null) {
                if (angular.isString(val)) {
                    str = val === '' ? null : val;
                } else {
                    str = val.join(',');
                }
            }
            return str;
        },
        StateBind: function(parentval) {
            var stateArr = [];
            stateArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            SelectBindService.stateSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return stateArr;
        },
        districtBind: function(parentval) {
            var disttrictArr = [];
            disttrictArr.push({ "label": "--select--", "title": "--select--", "value": 0 });

            SelectBindService.districtSelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    disttrictArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return disttrictArr;
        },
        cityBind: function(parentval) {
            var cityeArr = [];
            cityeArr.push({ "label": "--select--", "title": "--select--", "value": 0 });

            SelectBindService.citySelect(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    cityeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return cityeArr;
        },

        professionBind: function(parentval) {
            var professionArr = [];
            professionArr.push({ "label": "--select--", "title": "--select--", "value": 0 });

            SelectBindService.ProfessionSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    professionArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return professionArr;
        },
        educationGroupBind: function(parentval) {
            var educationGroupArr = [];
            educationGroupArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            SelectBindService.EducationGroup(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationGroupArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationGroupArr;
        },
        educationSpeciakisationBind: function(parentval) {
            var educationSpecialArr = [];
            educationSpecialArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            SelectBindService.EducationSpecialisation(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    educationSpecialArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return educationSpecialArr;
        },

        numbersBind: function(str, from, to) {
            var numArr = [];
            debugger;
            numArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            for (var i = from; i <= to; i++) {
                numArr.push({ "label": i + " " + str, "title": i + " " + str, "value": i });
            }
            return numArr;
        },
        numberBindWithZeros: function(str, from, to) {
            var numArr = [];
            var y;
            numArr.push({ "label": str, "title": str, "value": 0 });
            for (var x = from; x <= to; x++) {
                if (x < 10)
                    y = ("0" + x);
                else
                    y = x;
                numArr.push({ "label": y, "title": y, "value": parseInt(y) });
            }
            return numArr;
        },
        starBind: function(parentval) {
            var starArr = [];
            starArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            SelectBindService.stars(parentval).then(function(response) {
                _.each(response.data, function(item) {
                    starArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return starArr;
        },
        casteDepedency: function(parentval1, parentval2) {
            var casteArr = [];
            casteArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            SelectBindService.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        },
        subCaste: function(parentval1) {
            var subcasteArr = [];
            subcasteArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            SelectBindService.subCasteBind(parentval1).then(function(response) {
                _.each(response.data, function(item) {
                    subcasteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return subcasteArr;
        },
        branch: function(parentval1) {
            var branchArr = [];
            branchArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
            SelectBindService.branch(parentval1).then(function(response) {
                _.each(response.data, function(item) {
                    branchArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return branchArr;
        },
        showConfirm: function(ev, mdDialog, header, okTxt, cancelTxt) {
            debugger;
            var status = false;
            var confirm = mdDialog.confirm()
                .title(header)
                //.textContent('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                //.targetEvent(ev)
                .cancel(cancelTxt)
                .ok(okTxt);

            return confirm;

        }
    }

}]);
editviewapp.directive('ngConfirmClick', ['commonFactory',
    function() {
        return {
            scope: { val: '=' },
            link: function(scope, element, attr) {
                // var msg = attr.ngConfirmClick || "Are you sure?";
                // var clickAction = attr.confirmedClick;
                // element.bind('click', function(event) {
                //     if (scope.val != '') {
                //         if (window.confirm(msg)) {
                //             scope.$eval(clickAction)
                //         }
                //     }
                // });




                alert(23232);
            }
        };
    }
]);
editviewapp.directive('contactDirective', ['SelectBindService', 'commonFactory', '$mdDialog', function(SelectBindService, commonFactory, mdDialog) {
    return {
        scope: {
            dmobile: '=',
            strmobile: '=',
            dalternative: '=',
            stralternative: '=',
            dland: '=',
            strareacode: '=',
            strland: '=',
            strmail: '=',
            emailhide: '='
        },
        templateUrl: 'src/views/contacttemplate.html',
        link: function(scope, element, attr) {

            scope.amob = (scope.stralternative != null && scope.stralternative != '' && scope.stralternative != undefined) ? true : false;
            scope.land = (scope.strareacode != null && scope.strareacode != '' && scope.strareacode != undefined) ? true : false;
            scope.mail = (scope.strmail != null && scope.strmail != '' && scope.strmail != undefined) ? true : false;
            scope.pmob = (scope.strmobile != null && scope.strmobile != '' && scope.strmobile != undefined) ? true : false;

            SelectBindService.countryCodeselect().then(function(response) {
                scope.countryCodeArr = [];
                scope.countryCodeArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
                _.each(response.data, function(item) {
                    scope.countryCodeArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });

            scope.showhidemob = function(ev, type) {
                debugger;
                scope.confirm = null;
                switch (type) {
                    case 'mob':
                        if (scope.pmob == false) {
                            scope.pmob = true;
                        } else {
                            var lNaumber = scope.strland;
                            scope.checkMobile(ev, lNaumber, 'land', 'landline');
                        }
                        break;

                    case 'land':

                        var lNaumber1 = scope.stralternative;
                        scope.checkMobile(ev, lNaumber1, 'mob', 'alternative');
                        break;

                    case 'mail':
                        scope.mail = true;
                        break;
                }

            };

            scope.checkMobile = function(ev, strval, type, strdisplay) {
                debugger;
                if (strval != "" && strval != undefined) {
                    scope.confirm = commonFactory.showConfirm(ev, mdDialog, 'Are You Sure To Delete ' + strdisplay + ' Number', 'delete', 'cancel')
                    scope.test(type);

                } else {
                    scope.clear(type);
                }
            };
            scope.clear = function(type) {

                if (type === 'mob') {
                    scope.amob = false;
                    scope.land = true;
                    scope.dalternative = "";
                    scope.stralternative = "";
                } else {
                    scope.amob = true;
                    scope.land = false;
                    scope.dland = "";
                    scope.strareacode = "";
                    scope.strland = "";

                }
            };

            scope.test = function(type) {

                mdDialog.show(scope.confirm).then(function() {
                    debugger;
                    scope.clear(type);

                }, function() {

                });
            };


        }
    }
}]);
editviewapp.directive('countryDirective', ['SelectBindService', 'commonFactory', function(SelectBindService, commonFactory) {
    return {
        scope: {
            countryshow: '=',
            cityshow: '=',
            dcountry: '=',
            dstate: '=',
            ddistrict: '=',
            dcity: '=',
            othercity: '=',
            strothercity: '='
        },
        templateUrl: 'src/views/countryTemplate.html',
        link: function(scope, element, attr) {

            console.log(scope.strothercity);


            if (scope.countryshow === true) {
                SelectBindService.countrySelect().then(function(response) {
                    scope.countryArr = [];
                    scope.countryArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
                    _.each(response.data, function(item) {
                        scope.countryArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                });
                scope.stateArr = commonFactory.StateBind(scope.dcountry);
            } else {
                SelectBindService.stateSelect('1').then(function(response) {
                    scope.stateArr = [];
                    scope.stateArr.push({ "label": "--select--", "title": "--select--", "value": 0 });
                    _.each(response.data, function(item) {
                        scope.stateArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                });
            }

            scope.districtArr = commonFactory.districtBind(scope.dstate);
            if (scope.cityshow === true) {
                scope.cityeArr = commonFactory.cityBind(scope.ddistrict);
            }

            scope.changeBind = function(type, parentval) {
                switch (type) {
                    case 'Country':
                        scope.stateArr = commonFactory.StateBind(parentval);
                        break;

                    case 'State':
                        scope.districtArr = commonFactory.districtBind(parentval);
                        break;

                    case 'District':
                        if (scope.cityshow === true) {
                            scope.cityeArr = commonFactory.cityBind(parentval);
                        }
                        break;

                }

            }

            scope.ShowCity = function() {
                scope.cityinput = true;
                scope.dcity = '';
            }



        }
    }
}]);
editviewapp.directive('datePicker', function() {
    return {
        scope: {
            strdate: '='
        },
        template: '<p class="input-group">' +
            '<input type="text" class="form-control" uib-datepicker-popup="dd-MM-yyyy"  ng-model="strdate" is-open="showdate" datepicker-options="dateOptions"  show-button-bar="false" close-text="Close" />' +
            '<span class="input-group-btn">' +
            '<button type="button" class="btn btn-default" ng-click="open2()"><i class="glyphicon glyphicon-calendar"></i></button>' +
            '</span></p>',
        link: function(scope, element) {

            // alert(scope.strdate);

            // scope.showdate = false;

            // scope.open2 = function() {
            //     scope.showdate = true;
            // };

        },
        controller: function($scope) {
            $scope.strdate = new Date($scope.strdate) //moment(new Date()).format();
            $scope.showdate = false;

            $scope.open2 = function() {
                $scope.showdate = true;
            };
        }
    }
});
editviewapp.directive('modelFooter', function () {
    return {
        restrict: 'E',
        template: "</div>"
        + "<div class='modal-footer'>"
        + "	<button class='btn btn-primary' type='button' ng-click='ok()'>OK</button>"
        + "<button class='btn btn-warning' type='button' ng-click='cancel()'>Cancel</button>"
        + "</div>"
    }
});
editviewapp.directive('modelHeader', function () {
    return {
        scope:{
            name:'='
        },
        restrict: 'E',
        template: "<div class='modal-header'><h3 class='modal-title' id='modal-title'>{{name}} </h3></div>"
    }
});
// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
editviewapp.directive('multiselectdropdown', ['arrayConstants', 'SelectBindService', function(cons, service) {
    return {
        require: 'ng-model',
        scope: {
            ngModel: '=',
            typeofdata: "=",
            parentVal: "="
        },
        link: function(scope, element, attrs) {
            scope.options = [];

            scope.databind = function(data) {
                element.multiselect('dataprovider', data);
                element.multiselect('select', scope.ngModel);
            }

            switch (scope.typeofdata) {

                case 'MaritalStatus':
                    scope.databind(cons.MaritalStatus);
                    break;

                case 'height':
                    scope.databind(cons.height);
                    break;

                case 'Religion':
                    scope.databind(cons.Religion);
                    break;

                case 'Mothertongue':
                    scope.databind(cons.Mothertongue);
                    break;

                case 'educationcategory':
                    scope.databind(cons.educationcategory);
                    break;

                case 'visastatus':
                    scope.databind(cons.visastatus);
                    break;

                case 'stars':
                    scope.databind(cons.stars);
                    break;

                case 'region':
                    scope.databind(cons.region);
                    break;

                case 'bodyType':
                    scope.databind(cons.bodyType);
                    break;

                case 'bloodGroup':
                    scope.databind(cons.bloodGroup);
                    break;

                case 'healthCondition':
                    scope.databind(cons.healthCondition);
                    break;

                case 'starLanguage':
                    scope.databind(cons.starLanguage);
                    break;

                case 'lagnam':
                    scope.databind(cons.lagnam);
                    break;

                case 'ZodaicSign':
                    scope.databind(cons.ZodaicSign);
                    break;

                case 'paadam':
                    scope.databind(cons.paadam);
                    break;

                case 'familyStatus':
                    scope.databind(cons.familyStatus);
                    break;

                case 'RelationshipType':
                    scope.databind(cons.RelationshipType);
                    break;

                case 'Country':
                    service.countrySelect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;

                case 'ProfCatgory':

                    service.ProfessionCatgory().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;

                case 'ProfGroup':
                    service.ProfessionGroup().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;

                case 'indiaStates':
                    service.stateSelect('1').then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'countryCode':
                    service.countryCodeselect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'caste':
                    service.casteselect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'currency':
                    service.currency().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;

            }

            element.multiselect({
                buttonClass: 'btn',
                buttonWidth: 'auto',
                inheritClass: true,
                includeSelectAllOption: true,
                disableIfEmpty: true,
                nonSelectedText: 'Any',
                allSelectedText: 'All Selected',
                selectAllText: 'Check all!',
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                filterPlaceholder: 'Type To Search',
                buttonContainer: '<div class="btn-group" />',
                // maxHeight: false,
            });
            // element.multiselect('setOptions', secondConfigurationSet);
            // element.multiselect('rebuild');
            //Watch for any changes to the length of our select element 
            scope.$watch(function() {
                return element[0].length;
            }, function() {
                scope.$applyAsync(element.multiselect('rebuild'));
            });

            // Watch for any changes from outside the directive and refresh
            scope.$watch(attrs.ngModel, function() {
                element.multiselect('refresh');
            });
        }
    };
}]);
editviewapp.filter('myFilter', ['$filter', function(filter) {
    return function(input) {
        return filter('date')(input, 'dd-MM-yyyy');
    }

}]);
editviewapp.factory('astroServices', ['$http', function(http) {
    return {
        getAstroData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getAstroDetailsDisplay', { params: { CustID: obj } });
        },
        submitAstroData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerAstrodetailsUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);
editviewapp.factory('editmanagePhotoServices', ['$http', function(http) {
    return {
        getPhotoData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/GetphotosofCustomer', { params: { Custid: '104084', EmpID: 2 } });
        }
    };
}]);
editviewapp.factory('editviewServices', ['$http', function(http) {

    return {
        getEducationData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerEducationdetails', { params: { CustID: "91035" } });
        },
        getProfessionData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerProfessiondetails', { params: { CustID: "91035" } });
        },
        getAboutData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getEducationProfession_AboutYourself', { params: { CustID: obj, AboutYourself: '', flag: 0 } });
        },
        submitEducationData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPersonalUpdateEducationdetail', JSON.stringify(obj1));
        },
        submitProfessionData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPersonalUpdateProfessionDetails', JSON.stringify(obj1));
        },
        submitAboutUrData: function(obj1) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getEducationProfession_AboutYourself', { params: obj1 });
        }

    };

}]);
editviewapp.factory('parentServices', ['$http', function(http) {
    return {
        getParentData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getParentDetailsDisplay', { params: { CustID: obj } });
        },
        getAboutFamilyData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getParents_AboutMyFamily', { params: { CustID: obj, AboutYourself: '', flag: 0 } });
        },
        submitParentData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerParentUpdatedetails', JSON.stringify(obj1));
        },
        submitAddressData: function(obj1) {
            console.log(JSON.stringify(obj1));
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerContactAddressUpdatedetails', JSON.stringify(obj1));
        },
        submitPhysicalData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPhysicalAttributesUpdatedetails', JSON.stringify(obj1));
        },
        submitAboutFamilyData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getParents_AboutMyFamily', { params: obj });
        }
    };
}]);
editviewapp.factory('partnerPreferenceServices', ['$http', function(http) {
    return {
        getPartnerPreferenceData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getCustomerpartnerpreferencesDetailsDisplay', { params: { CustID: "91035" } });
        },
        submitPartnerPrefData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPartnerPreferencesUpdatedetails', JSON.stringify(obj1));
        },
        submitPartnerDescData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getPartnerpreference_DiscribeYourPartner', { params: obj });
        }
    };
}]);
editviewapp.factory('personalDetailsService', ["$http", function (http) {
    return {
        personalDetails: function (obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getpersonalMenuDetails', { params: {  CustID: "91035"  } });
        }
    }
}]);
editviewapp.factory('propertyServices', ['$http', function(http) {
    return {
        getPropertyData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getPropertyDetailsDisplay', { params: { CustID: obj } });
        },
        submitPropertyData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerPropertyUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);
editviewapp.factory('referenceServices', ['$http', function(http) {
    return {
        getReferenceData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getReferenceViewDetailsDisplay', { params: { CustID: obj } });
        },
        submitReferenceData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerReferencedetailsUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);
editviewapp.factory('relativeServices', ['$http', function(http) {
    return {
        getRelativeeData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getRelativeDetailsDisplay', { params: { CustID: obj } });
        },
        submitFBData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerFathersBrotherUpdatedetails', JSON.stringify(obj1));
        },
        submitFSData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerFathersSisterUpdatedetails', JSON.stringify(obj1));
        },
        submitMBData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerMotherBrotherUpdatedetails', JSON.stringify(obj1));
        },
        submitMSData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerMotherSisterUpdatedetails', JSON.stringify(obj1));
        }
    };
}]);
editviewapp.factory('SelectBindService', ["$http", function(http) {
    return {
        countrySelect: function() {
            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        stateSelect: function(dependencyVal) {

            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal } });
        },
        districtSelect: function(dependencyVal1) {
            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "distric", dependencyValue: dependencyVal1 } });
        },
        citySelect: function(dependencyVal2) {

            return http.get(editviewapp.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "city", dependencyValue: dependencyVal2 } });
        },
        EducationCatgory: function() {
            return http.get(editviewapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        EducationGroup: function(dependencyVal2) {

            return http.get(editviewapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationGroup", dependencyValue: dependencyVal2 } });
        },
        EducationSpecialisation: function(dependencyVal2) {

            return http.get(editviewapp.apipath + 'Dependency/getEducationDependency', { params: { dependencyName: "educationSpeacialisation", dependencyValue: dependencyVal2 } });
        },
        ProfessionCatgory: function() {
            return http.get(editviewapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionCategory", dependencyValue: "" } });
        },
        ProfessionGroup: function() {
            return http.get(editviewapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        ProfessionSpecialisation: function(dependencyVal2) {

            return http.get(editviewapp.apipath + 'Dependency/getProfessionDependency', { params: { dependencyName: "ProfessionGroup", dependencyValue: dependencyVal2 } });
        },
        casteselect: function() {

            return http.get(editviewapp.apipath + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CasteName" } });
        },
        countryCodeselect: function() {

            return http.get(editviewapp.apipath + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CountryCode" } });
        },
        currency: function() {

            return http.get(editviewapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Currency', dependencyValue: '', dependencyflagID: '' } });
        },
        stars: function(obj) {
            alert(1);
            return http.get(editviewapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'StarType', dependencyValue: obj, dependencyflagID: '' } });
        },
        castedependency: function(obj1, obj2) {

            return http.get(editviewapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Caste', dependencyValue: obj1, dependencyflagID: obj2 } });
        },
        subCasteBind: function(obj1) {

            return http.get(editviewapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'SubCaste', dependencyValue: obj1, dependencyflagID: '' } });
        },
        branch: function(obj1) {

            return http.get(editviewapp.apipath + 'Dependency/getDropdownValues_dependency_injection', { params: { dependencyName: 'Region', dependencyValue: obj1, dependencyflagID: '' } });
        },
    }
}]);
editviewapp.factory('sibblingServices', ['$http', function(http) {
    return {
        getSibblingeData: function(obj) {
            return http.get(editviewapp.apipath + 'CustomerPersonal/getsiblingsDetailsDisplay', { params: { CustID: obj } });
        },
        submitSibBroData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerSibBrotherUpdatedetails', JSON.stringify(obj1));
        },
        submitSibSisData: function(obj1) {
            debugger;
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/CustomerSibSisterUpdatedetails', JSON.stringify(obj1));
        },
        submitSibCountsData: function(obj1) {
            return http.post(editviewapp.apipath + 'CustomerPersonalUpdate/UpdateSibblingCounts', JSON.stringify(obj1));
        }
    };
}]);