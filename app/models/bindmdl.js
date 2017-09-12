(function() {
    'use strict';

    angular
        .module('KaakateeyaEdit')
        .factory('bindMdl', factory);

    factory.$inject = ['$http'];

    function factory($http) {
        var model = {};
        // variable declaration

        model.countryArr = [];
        model.countryCodeArr = [];

        // function declaration

        model.Country = function(type, arr) {
            if (type === 'get')
                return model.countryArr;
            else
                model.countryArr = arr;
        };
        model.countryCode = function(type, arr) {
            if (type === 'get')
                return model.countryCodeArr;
            else
                model.countryCodeArr = arr;
        };

        return model;

    }
})();