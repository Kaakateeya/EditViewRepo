editviewapp.controller('profileSettingsctrl', ['$scope', 'profileSettingsService', 'authSvc', 'commonFactory', '$uibModal',
    function(scope, profileSettingsService, authSvc, commonFactory, uibModal) {
        var logincustid = authSvc.getCustId();
        var custID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

        scope.profileSettingArr = [];
        scope.ConfidentialArr = [];
        scope.profileDisplayArr = [];
        scope.gradeSelectionArr = [];

        scope.psObj = {};
        scope.csObj = {};
        scope.psdObj = {};
        scope.gradeObj = {};


        scope.pageload = function() {

            profileSettingsService.getProfileSettingData(custID).then(function(response) {

                if (response.data.length > 0) {
                    scope.profileSettingArr = response.data[0].length > 0 ? JSON.parse(response.data[0]) : [];
                    scope.ConfidentialArr = response.data[1].length > 0 ? JSON.parse(response.data[1]) : [];
                    scope.profileDisplayArr = response.data[2].length > 0 ? JSON.parse(response.data[2]) : [];
                    scope.gradeSelectionArr = response.data[3].length > 0 ? JSON.parse(response.data[3]) : [];
                    console.log(scope.profileSettingArr);
                }
            });
        };
        scope.pageload();



        scope.populategrade = function(item) {
            return item === 'A' ? '216' : (item === 'B' ? '217' : (item === 'C' ? '218' : (item === 'D' ? '219' : 0)));
        };



        scope.showprofilepopup = function(type, item) {

            switch (type) {

                case 'profileSetting':

                    if (item !== undefined) {
                        scope.psObj.rdlapplicationstatus = item.ProfileStatusID;
                        scope.psObj.txtnoofdaysinactive = item.NoofDaysinactivated;
                        scope.psObj.txtreasonforinactive = item.Reason4InActive;
                        scope.psObj.ddlrequestedby = item.RequestedByGenericID;
                        scope.psObj.rdlprofilegrade = item.ProfileGradeID;

                    }

                    commonFactory.open('profileSettingContent.html', scope, uibModal);

                    break;

                case 'profileDisplay':


                    if (item !== undefined) {
                        scope.psdObj.rdldisplayin = item.ProfileDisplayNameID;
                        scope.psdObj.rdlpwdblock = item.LoginStatusNameID;
                        scope.psdObj.txtblockedreason = item.ProfileBlockReason;

                    }


                    commonFactory.open('profileDisplayContent.html', scope, uibModal);

                    break;

                case 'confidential':
                    commonFactory.open('confidentialContent.html', scope, uibModal);

                    break;

                case 'grading':

                    if (item !== undefined) {

                        scope.gradeObj.ddlfamilyGrade = scope.populategrade(item.FamilyGrade);
                        scope.gradeObj.ddlphotoGrade = scope.populategrade(item.PhotoGrade);
                        scope.gradeObj.ddlEducationgrade = scope.populategrade(item.EducationGrade);
                        scope.gradeObj.ddlProfessionGrade = scope.populategrade(item.ProfileGrade);
                        scope.gradeObj.ddlpropertyGrade = scope.populategrade(item.PropertyGrade);
                    }

                    commonFactory.open('gradeSelectionContent.html', scope, uibModal);

                    break;
            }
        };

        scope.cancel = function() {
            commonFactory.closepopup();
        };


        scope.gradeSubmit = function(obj) {
            scope.Mobj = {
                CustID: custID,
                EmpID: '2',
                GFamily: obj.ddlfamilyGrade,
                GPhotos: obj.ddlphotoGrade,
                GEducation: obj.ddlEducationgrade,
                GProfession: obj.ddlProfessionGrade,
                GProperty: obj.ddlpropertyGrade
            };

            profileSettingsService.submitGradeData(scope.Mobj).then(function(response) {
                console.log(response);
                scope.pageload();
                commonFactory.closepopup();

            });
        };

        scope.profileSettingAndDispalySubmit = function(IProfileDisplayName, ILoginStatusName, IBlockedreason, ITypeofReport, Icurrentprofilestatusid, Iprofilegrade, INoofDaysinactivated, IReason4InActive,
            IRequestedBy) {

            scope.Mobj = {
                intCusID: custID,
                EmpID: '2',
                currentprofilestatusid: Icurrentprofilestatusid,
                profilegrade: Iprofilegrade,
                NoofDaysinactivated: INoofDaysinactivated,
                Reason4InActive: IReason4InActive,
                RequestedBy: Icurrentprofilestatusid === 55 || Icurrentprofilestatusid === '55' ? IRequestedBy : null,
                TypeofReport: ITypeofReport,

                ProfileDisplayName: IProfileDisplayName,
                LoginStatusName: ILoginStatusName,
                Admin: null,
                Blockedreason: IBlockedreason
            };
            debugger;
            profileSettingsService.submitProfileSettingAndDispalyData(scope.Mobj).then(function(response) {
                console.log(response);
                scope.pageload();
                commonFactory.closepopup();
            });

        };


        scope.profileSettingSubmit = function(obj) {
            scope.profileSettingAndDispalySubmit('', '', '', "ProfileSettings", obj.rdlapplicationstatus, obj.rdlprofilegrade, obj.txtnoofdaysinactive, obj.txtreasonforinactive,
                obj.ddlrequestedby);
        };

        scope.profileSettingDisplaySubmit = function(obj) {
            scope.profileSettingAndDispalySubmit(obj.rdldisplayin, obj.rdlpwdblock, obj.txtblockedreason, 'DisplaySettings');
        };


    }
]);