editviewapp.filter('myFilter', ['$filter', function(filter) {
    return function(input) {
        return filter('date')(input, 'dd-MM-yyyy');
    }

}]);