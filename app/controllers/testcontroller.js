editviewapp.controller("testcontroller", ['$scope', '$timeout', function(scope, timeout) {
    scope.clickkk = function() {

        scope.$broadcast('rtestttt');

    };

}]);