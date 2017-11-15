(function(editviewapp) {
    'use strict';

    editviewapp.factory('errorInterceptor', ['$rootScope', '$q', function($rootScope, $q) {
        var apiRe = /^\/Api\//;
        return {
            request: function(config) {
                //if (config.url.match(apiRe)) {
                $rootScope.loading = true;
                // }
                config.headers = config.headers || {};
                // config.headers.ContentType = 'application/json';
                // config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token');
                // config.headers['Content-Type'] = 'application/json';
                // config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token');




                return config;
            },
            responseError: function(rejection) {
                $rootScope.loading = false;
                $rootScope.$broadcast('notify-error', rejection);
                return $q.reject(rejection);
            },
            response: function(config) {
                $rootScope.loading = false;
                var deferred = $q.defer();
                deferred.resolve(config);
                return deferred.promise;
            }
        };
    }]);

    editviewapp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
    }]);

}(window.editviewapp));