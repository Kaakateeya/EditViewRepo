(function(editviewapp) {
    'use strict';

    editviewapp.factory('errorInterceptor', ['$rootScope', '$q', function($rootScope, $q) {
        return {
            responseError: function(rejection) {
                $rootScope.$broadcast('notify-error', rejection);
                return $q.reject(rejection);
            },
            response: function(config) {
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