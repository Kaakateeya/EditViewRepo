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
    };

    scope.AddImage = function() {
        commonFactory.open('AddimagePopup.html', scope, uibModal);
    };
    editmanagePhotoServices.getPhotoData().then(function(response) {
        var StrCustID = '104084';

        console.log(response.data);
        scope.manageArr = response.data;
        _.each(scope.manageArr, function(item) {

            var imagepath = accesspathdots;
            if (item.IsActive == "0" && item.PhotoName !== null) {
                var strCustDirName1 = "KMPL_" + StrCustID + "_Images";
                var path1 = imagepath + strCustDirName1 + "/" + item.PhotoName;
                item.ImageUrl = path1;
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
            } else if (item.IsActive === "0" && item.PhotoName === null) {
                item.addButtonvisible = true;
                item.deleteVisibility = false;
                item.ImageUrl = Fnoimage;

            }
        });
    });

}]);