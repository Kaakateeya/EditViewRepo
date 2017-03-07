(function() {
    'use strict';

    editviewapp.factory('dropdownModel', factory);

    factory.$inject = ['SelectBindService'];

    function factory(service) {
        var model = {};
        service.countryCodeselect().then(function(response) {
            var option = [];
            option.push({ "label": "--select--", "title": "--select--", "value": "" });
            _.each(response.data, function(item) {
                option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
            model.getCountryCode = option;
            console.log(123);
        });
        return model;
    }
})();