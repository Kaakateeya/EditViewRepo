editviewapp.factory('personalmodel',
    function() {
        var model = {};
        model.setCustID = function(custid, personalObj, reviewObj) {
            model.currentCustID = custid;
            model.PersonalObj = personalObj;
            model.menuReviewdata = reviewObj;
        };
        return model;
    }
);