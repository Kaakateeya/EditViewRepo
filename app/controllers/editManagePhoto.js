editviewapp.controller("managePhotoCtrledit", ['$uibModal', '$scope', 'commonFactory', 'editmanagePhotoServices', '$http', 'fileUpload', 'authSvc', function(uibModal, scope, commonFactory, editmanagePhotoServices, http, fileUpload, authSvc) {

    var up = {};

    var EmpIDQueryString = '2';

    var logincustid = authSvc.getCustId();
    var CustID = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    scope.loginpaidstatus = authSvc.getpaidstatus();

    scope.photorowID = 0;

    scope.imgArr = [];
    scope.cancel = function() {
        commonFactory.closepopup();
    };

    scope.refreshPageLoad = function(Arr) {
        _.each(Arr, function(item) {

            scope.rbtProtectPassword = item.PhotoPassword === 'Admin@123' ? '1' : '0';
            var imagepath = editviewapp.accesspathdots;

            if (item.IsActive === 0 && item.PhotoName !== null) {
                var strCustDirName1 = "KMPL_" + CustID + "_Images";
                var path1 = imagepath + strCustDirName1 + "/" + item.PhotoName;
                item.ImageUrl = path1;
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                item.keyname = strCustDirName1 + "/" + item.PhotoName;
                //dynDiv.Attributes.Add("Class", "cssMaskdiv clearfix");

            } else if (item.IsActive === 1 && item.IsThumbNailCreated === 1) {

                var strCustDirName = "KMPL_" + CustID + "_Images";
                item.addButtonvisible = false;
                item.deleteVisibility = true;
                switch (item.DisplayOrder) {
                    case 1:
                        var photoshoppath = "img1_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var path = imagepath + strCustDirName + "/" + photoshoppath;
                        item.ImageUrl = path;
                        item.keyname = strCustDirName + "/" + photoshoppath;
                        break;
                    case 2:
                        var photoshoppathnew = "img2_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var pathnew = imagepath + strCustDirName + "/" + photoshoppathnew;
                        item.ImageUrl = pathnew;
                        item.keyname = strCustDirName + "/" + photoshoppathnew;
                        break;
                    case 3:
                        var photoshoppathneew3 = "img3_Images/" + item.ProfileID + "_ApplicationPhoto.jpg";
                        var pathneww = imagepath + strCustDirName + "/" + photoshoppathneew3;
                        item.ImageUrl = pathneww;
                        item.keyname = strCustDirName + "/" + photoshoppathneew3;
                        break;
                }
            } else if (item.IsActive === 0 && item.PhotoName === null) {
                item.addButtonvisible = true;
                item.deleteVisibility = false;
                item.ImageUrl = authSvc.getprofilepic();
            }
        });
        return Arr;
    };

    scope.getData = function() {
        editmanagePhotoServices.getPhotoData(CustID).then(function(response) {
            var StrCustID = CustID;
            console.log(response.data);
            scope.manageArr = response.data;
            scope.refreshPageLoad(scope.manageArr);
        });
    };

    scope.getData();


    scope.AddImage = function(index, Cust_Photos_ID, DisplayOrder, IsActive) {
        scope.photorowID = index;
        scope.Cust_Photos_ID = Cust_Photos_ID;
        scope.DisplayOrder = DisplayOrder;
        scope.IsActive = IsActive;
        commonFactory.open('AddimagePopup.html', scope, uibModal, 'sm');
    };
    scope.upload = function(obj) {
        console.log(obj.myFile);
        var extension = ((obj.myFile.name).split('.'))[1];
        var keyname = editviewapp.prefixPath + 'KMPL_' + CustID + '_Images/Img' + scope.photorowID + '.' + extension;

        fileUpload.uploadFileToUrl(obj.myFile, 'http://localhost:3000/photoUplad', keyname).then(function(res) {
            console.log(res.status);
            if (res.status == 200) {
                commonFactory.closepopup();
                scope.uploadData = {
                    GetDetails: {
                        ID: scope.Cust_Photos_ID,
                        url: 'Img' + scope.photorowID + '.' + extension,
                        order: scope.DisplayOrder,
                        IsProfilePic: 0,
                        DisplayStatus: scope.DisplayOrder,
                        Password: 0,
                        IsReviewed: 0,
                        TempImageUrl: editviewapp.GlobalImgPath + keyname,
                        IsTempActive: commonFactory.checkvals(scope.IsActive) ? scope.IsActive : '0',
                        DeletedImageurl: null,
                        IsImageDeleted: 0,
                        PhotoStatus: null,
                        PhotoID: scope.DisplayOrder,
                        PhotoPassword: null
                    },
                    customerpersonaldetails: {
                        intCusID: CustID,
                        EmpID: null,
                        Admin: null
                    }
                };

                editmanagePhotoServices.submituploadData(scope.uploadData).then(function(response) {
                    console.log(response);
                    if (response.status === 200) {

                        scope.manageArr = response.data;
                        scope.refreshPageLoad(scope.manageArr);

                        scope.$broadcast("showAlertPopupccc", 'alert-success', 'submitted Succesfully', 3000);
                    } else {
                        scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Updation failed', 3000);
                    }
                });
            }
        });
    };

    scope.DeleteImage = function(key, Cust_Photoid) {
        scope.deleteKey = key;
        scope.DCust_Photos_ID = Cust_Photoid;
        commonFactory.open('deleteimagePopup.html', scope, uibModal, 'sm');
    };

    scope.Delete = function() {
        var keynameq = editviewapp.prefixPath + scope.deleteKey;
        http.post('/photoDelete', JSON.stringify({ keyname: keynameq })).then(function(data) {

        });

        editmanagePhotoServices.linqSubmits(scope.DCust_Photos_ID, 3).then(function(response) {

            if (response.data === 1) {
                commonFactory.closepopup();
                scope.getData();
            }
        });
    };

    scope.setAsProfilePic = function(cust_photoID) {
        editmanagePhotoServices.linqSubmits(cust_photoID, 2).then(function(response) {
            console.log(response.data);

            if (response.data === 1) {
                commonFactory.closepopup();
                scope.getData();
            }
        });
    };

    scope.setPhotoPassword = function(obj) {

        editmanagePhotoServices.linqSubmits(CustID, obj).then(function(response) {
            console.log(response);
            if (response.data === 1) {

                if (obj === '1') {
                    alert('Protect with Password  Uploaded Successfully');
                } else {
                    alert('Protect with Password Removed Successfully');
                }
            }
        });

    };

    scope.redirectPage = function(type) {

        switch (type) {
            case 'PhotoGuideLines':
                window.open('#/registration/photoGuideLines', '_blank');
                break;
            case 'Faqs':
                window.open('#/faqs', '_blank');
                break;
            case 'uploadTips':
                window.open('#/registration/uploadTips', '_blank');
                break;
        }
    };

}]);