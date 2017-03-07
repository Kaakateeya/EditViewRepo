editviewapp.controller('officePurposectrl', ['$scope', 'officePurposeServices', 'authSvc', '$uibModal', 'commonFactory',
    function(scope, officePurposeServices, authSvc, uibModal, commonFactory) {
        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.dataval = '';
        scope.aboutObj = {};
        scope.pageload = function() {

            officePurposeServices.getofficeData('1', custID, '').then(function(response) {
                console.log(response);
                if (response.data.length > 0) {
                    scope.dataval = response.data[0].length > 0 ? (JSON.parse(response.data[0]))[0].AboutProfile : '';
                }
                console.log(scope.dataval);
            });
        };
        scope.pageload();

        scope.cancel = function() {
            commonFactory.closepopup();
        };
        scope.showPopup = function(val) {
            scope.aboutObj.txtAboutprofile = '';
            if (val !== undefined) {
                scope.aboutObj.txtAboutprofile = val;
            }
            commonFactory.open('AboutModalContent.html', scope, uibModal);
        };

        scope.AboutProfleSubmit = function(str) {
            officePurposeServices.getofficeData('2', custID, str).then(function(response) {
                console.log(response);
                commonFactory.closepopup();
                scope.dataval = str;
            });

        };



    }
]);